// ───────────────────────────────────────────────────────────────
// Import Required Modules
// ───────────────────────────────────────────────────────────────
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const { Kafka } = require("kafkajs");

// ───────────────────────────────────────────────────────────────
// Configuration & Constants
// ───────────────────────────────────────────────────────────────
const PORT          = process.env.PORT          || 3000;
const KAFKA_BROKERS = (process.env.KAFKA_BROKERS || "localhost:9092").split(",");
const KAFKA_ML_INPUT_TOPIC  = process.env.KAFKA_ML_INPUT_TOPIC  || "sr.ml-model.input";
//const KAFKA_ML_INPUT_TOPIC  = process.env.KAFKA_ML_INPUT_TOPIC  || "sr-ml-model-input-parallel";
const KAFKA_ML_OUTPUT_TOPIC = process.env.KAFKA_ML_OUTPUT_TOPIC || "sr.ml-model.output";

const SECRET_KEY = "my-secret-key-is-this-at-least-256-bits";
const SALT_ROUNDS = 10;

let isShuttingDown = false; // Set to true when a stop signal is received (see Graceful Shutdown)

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


// ───────────────────────────────────────────────────────────────
// Kafka Configuration
// ───────────────────────────────────────────────────────────────

// Instantiates the kafka client object
const kafka = new Kafka({
    clientId: "iris-data-app",
    brokers: KAFKA_BROKERS
});


const kafkaProducer = kafka.producer();

const kafkaConsumer = kafka.consumer({ groupId: "iris-data-group" });

// ───────────────────────────────────────────────────────────────
// PostgreSQL Pool Initialization
// ───────────────────────────────────────────────────────────────
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'lectureuser',
    password: 'lecturepassword',
    database: 'dss',
});

// ───────────────────────────────────────────────────────────────
// Middleware: Shutdown Guard, Static Files & JSON Parser
// ───────────────────────────────────────────────────────────────
// While shutting down, refuse new requests (including ones that arrive on
// keep-alive connections that are still open) so that only in-flight work finishes.
app.use((req, res, next) => {
    if (!isShuttingDown) return next();
    res.set("Connection", "close"); // Ask the client to close this connection
    res.status(503).json({ error: "Server is shutting down" });
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: Missing or invalid token" });
    }

    const token = authHeader.split(" ")[1];
    try {
        req.decodedToken = jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        return res.status(403).json({ error: "Forbidden: Invalid token" });
    }
};

// ───────────────────────────────────────────────────────────────
// Auth Routes: Register & Login
// ───────────────────────────────────────────────────────────────
app.post("/register", async (req, res) => {
    const { username, password, firstname, lastname, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        await pool.query(
          "INSERT INTO users (username, password, firstname, lastname, role) VALUES ($1, $2, $3, $4, $5)",
          [username, hashedPassword, firstname, lastname, role]
        );
        res.json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = result.rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        // Generate token
        const token = jwt.sign(
          {
              id: user.id,
              username: user.username,
              firstname: user.firstname,
              lastname: user.lastname,
              role: user.role
          },
          SECRET_KEY,
          { expiresIn: "30d" }
        );
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// ───────────────────────────────────────────────────────────────
// Protected Routes
// ───────────────────────────────────────────────────────────────
app.get("/dashboard", authenticateToken, (req, res) => {
    res.json({ message: `Welcome, ${req.decodedToken.username}!` });
});



// ───────────────────────────────────────────────────────────────
// Kafka Producer Route - ML Input
// ───────────────────────────────────────────────────────────────
app.post("/api/ml-model/predictions",authenticateToken, async (req, res) => {

    const { role } = req.decodedToken; // Extract role from decoded token

    if (role !== 1 && role !== 3) {
        return res.status(401).json({ error: "Forbidden: Admins only" });
    }

    const { sepal_length, sepal_width } = req.body;

    if (!sepal_length || !sepal_width) {
        return res.status(400).json({ error: "Missing sepal length or width." });
    }

    const message = { sepal_length, sepal_width };

    try {
        await kafkaProducer.connect();
        await kafkaProducer.send({
            topic: KAFKA_ML_INPUT_TOPIC,
            messages: [{ key: Date.now().toString(), value: JSON.stringify(message) }]
        });
        await kafkaProducer.disconnect();

        res.status(201).json({ status: "Sent to Kafka", ...message });
    } catch (err) {
        res.status(500).json({ error: "Kafka send failed", details: err.message });
    }
});

// ───────────────────────────────────────────────────────────────
// Kafka Consumer Listener - ML Output
// ───────────────────────────────────────────────────────────────
const startKafkaPredictionListener = async () => {
    await kafkaConsumer.connect();
    await kafkaConsumer.subscribe({ topic: KAFKA_ML_OUTPUT_TOPIC, fromBeginning: true });
    await kafkaConsumer.run({
        eachMessage: async ({ message }) => {
            const modelResult = JSON.parse(message.value.toString());
            console.log("Received ML output from Kafka:", modelResult);

            io.emit('model-result', modelResult);
        }
    });
};

startKafkaPredictionListener();

// ───────────────────────────────────────────────────────────────
// Socket.IO Real-Time Connection
// ───────────────────────────────────────────────────────────────
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// ───────────────────────────────────────────────────────────────
// Start Express HTTP Server
// ───────────────────────────────────────────────────────────────
server.listen(PORT, () => {
    console.log(`Server running with socket support at http://localhost:${PORT}`);
});

// ───────────────────────────────────────────────────────────────
// Graceful Shutdown
// ───────────────────────────────────────────────────────────────
// Why: when the process gets a stop signal (Ctrl+C, `docker stop`, a deployment),
// exiting instantly can cut requests in half, lose Kafka messages and leave database
// connections open. Instead: stop taking new work, let current work finish,
// release resources in reverse order of dependence, and only then exit.
const SHUTDOWN_TIMEOUT_MS = 10000; // Safety net: force exit if cleanup hangs

const shutdown = async (reason, exitCode = 0) => {
    if (isShuttingDown) return; // Ignore repeated signals (for example, pressing Ctrl+C twice)
    isShuttingDown = true; // From now on the guard middleware answers 503
    console.log(`\n${reason} received. Shutting down gracefully...`);

    // Safety net: a stuck connection must not keep the process alive forever.
    // unref() means this timer alone will not keep the process running.
    setTimeout(() => {
        console.error("Shutdown timed out. Forcing exit.");
        process.exit(1);
    }, SHUTDOWN_TIMEOUT_MS).unref();

    let failed = false;

    // Runs one cleanup step. A failure is logged but must not skip the remaining steps.
    const closeStep = async (name, fn) => {
        try {
            await fn();
            console.log(`  ✔ ${name} closed`);
        } catch (err) {
            failed = true;
            console.error(`  ✖ Failed to close ${name}:`, err.message);
        }
    };

    // 1. Stop accepting connections and disconnect Socket.IO clients.
    //    io.close() also closes the HTTP server; its callback runs once in-flight requests are done.
    await closeStep("HTTP server and Socket.IO", () =>
      new Promise((resolve) => {
          io.close(() => resolve());
          server.closeIdleConnections?.(); // Drop idle keep-alive connections (Node 18.2+)
      })
    );

    // 2. Stop consuming Kafka messages (nothing is left to forward to Socket.IO anyway).
    await closeStep("Kafka consumer", () => kafkaConsumer.disconnect());

    // 3. Close the Kafka producer (safe to call even if it is already disconnected).
    await closeStep("Kafka producer", () => kafkaProducer.disconnect());

    // 4. Close the database pool last: earlier steps may still need it.
    await closeStep("PostgreSQL pool", () => pool.end());

    console.log("Shutdown complete.");
    process.exit(failed ? 1 : exitCode); // Non-zero exit code tells the process manager something went wrong
};

process.on("SIGINT", () => shutdown("SIGINT"));   // Ctrl+C in the terminal
process.on("SIGTERM", () => shutdown("SIGTERM")); // docker stop, Kubernetes, systemd, process managers

// Unexpected errors: clean up, then exit with an error code instead of crashing abruptly.
process.on("uncaughtException", (err) => {
    console.error("Uncaught exception:", err);
    shutdown("uncaughtException", 1);
});
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled rejection:", reason);
    shutdown("unhandledRejection", 1);
});
