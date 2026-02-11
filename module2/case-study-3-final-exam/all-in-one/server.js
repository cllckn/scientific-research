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
const PORT = 3000;
const SECRET_KEY = "my-secret-key-is-this-at-least-256-bits";
const SALT_ROUNDS = 10;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ───────────────────────────────────────────────────────────────
// PostgreSQL Pool Initialization
// ───────────────────────────────────────────────────────────────
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dss',
    password: 'LecturePassword',
    port: 5432,
});

// ───────────────────────────────────────────────────────────────
// Middleware: Static Files & JSON Parser
// ───────────────────────────────────────────────────────────────
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

app.get("/api/customers", authenticateToken, async (req, res) => {
    const { role } = req.decodedToken;
    if (role !== 1 && role !== 3) {
        return res.status(403).json({ error: "Forbidden: Admins only" });
    }

    try {
        const result = await pool.query("SELECT id, name, email, phone, city FROM customers");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch customers" });
    }
});

app.get("/api/customers", authenticateToken, async (req, res) => {
    const { role } = req.decodedToken;
    if (role !== 1 && role !== 3) {
        return res.status(403).json({ error: "Forbidden: Admins only" });
    }

    try {
        const result = await pool.query("SELECT name, price FROM products LIMIT 10");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Database error" });
    }
});

// ───────────────────────────────────────────────────────────────
// Kafka Configuration
// ───────────────────────────────────────────────────────────────
const kafka = new Kafka({
    clientId: "iris-data-app",
    //brokers: ["191.101.2.193:9092"]
    brokers: ["localhost:9092"]
});

// For Kafka with KRaft
const { Partitioners } = require('kafkajs')
//const kafkaProducer = kafka.producer();
const kafkaProducer= kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })

const kafkaConsumer = kafka.consumer({ groupId: "iris-data-group" });

// ───────────────────────────────────────────────────────────────
// Kafka Producer Route - ML Input
// ───────────────────────────────────────────────────────────────
app.post("/api/ml-model/send", async (req, res) => {
    const { sepal_length, sepal_width } = req.body;

    if (!sepal_length || !sepal_width) {
        return res.status(400).json({ error: "Missing sepal length or width." });
    }

    const message = { sepal_length, sepal_width };

    try {
        await kafkaProducer.connect();
        await kafkaProducer.send({
            topic: "dss-ml-model-input",
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
    //await kafkaConsumer.subscribe({ topic: "dss-ml-house-price-model-output", fromBeginning: true });
    await kafkaConsumer.subscribe({ topic: "dss-ml-model-output", fromBeginning: true });

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
