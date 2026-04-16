// ───────────────────────────────────────────────────────────────
// Import Required Modules
// ───────────────────────────────────────────────────────────────
const express    = require("express");
const http       = require("http");
const socketIo   = require("socket.io");
const path       = require("path");
const bodyParser = require("body-parser");
const { Kafka }  = require("kafkajs");
const { v4: uuidv4 } = require("uuid");

// ───────────────────────────────────────────────────────────────
// Configuration & Constants
// ───────────────────────────────────────────────────────────────
const PORT          = process.env.PORT          || 3000;
const KAFKA_BROKERS = (process.env.KAFKA_BROKERS || "localhost:9092").split(",");
//const KAFKA_ML_INPUT_TOPIC  = process.env.KAFKA_ML_INPUT_TOPIC  || "sr-ml-model-input";
const KAFKA_ML_INPUT_TOPIC  = process.env.KAFKA_ML_INPUT_TOPIC  || "sr-ml-model-input-parallel";
const KAFKA_ML_OUTPUT_TOPIC = process.env.KAFKA_ML_OUTPUT_TOPIC || "sr-ml-model-output";
const responseMap = new Map();


// ───────────────────────────────────────────────────────────────
// Express + Socket.IO Setup
// ───────────────────────────────────────────────────────────────
const app    = express();
const server = http.createServer(app);
const io     = socketIo(server);

// ───────────────────────────────────────────────────────────────
// Middleware
// ───────────────────────────────────────────────────────────────
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


// ───────────────────────────────────────────────────────────────
// Routes
// ───────────────────────────────────────────────────────────────

app.get("/dashboard", (req, res) => {
    res.json({ message: `Welcome, ${req.decodedToken.username}!` });
});

// ───────────────────────────────────────────────────────────────
// Kafka Configuration
// ───────────────────────────────────────────────────────────────
const kafka = new Kafka({
    clientId: "iris-data-app",
    brokers:  KAFKA_BROKERS,  // Driven by environment variable — no hardcoded addresses
});

const kafkaProducer = kafka.producer();
const kafkaConsumer = kafka.consumer({ groupId: "iris-data-group" });

// ───────────────────────────────────────────────────────────────
// Kafka Producer — connect once at startup, reuse the connection
// ───────────────────────────────────────────────────────────────
const initKafkaProducer = async () => {
    await kafkaProducer.connect();
    console.log("Kafka producer connected.");
};

// ───────────────────────────────────────────────────────────────
// ML Prediction Route
//   - 202 Accepted: request received and queued, result delivered async via Socket.IO
// ───────────────────────────────────────────────────────────────
app.post("/api/ml-model/predictions", async (req, res) => {
    const { sepal_length, sepal_width } = req.body;

    if (sepal_length == null || sepal_width == null) {
        return res.status(400).json({ error: "Missing sepal_length or sepal_width." });
    }
    const requestId = uuidv4();
    const message = { sepal_length, sepal_width, requestId };

    try {
        await kafkaProducer.send({
            topic:    KAFKA_ML_INPUT_TOPIC,
            messages: [{ key: Date.now().toString(), value: JSON.stringify(message) }],
        });

        /*
        The promise initialization establishes a pending state by registering the requestId in an in-memory map with
        a safety timeout, while the resolve operation retrieves those stored functions upon Kafka's response to
        complete the asynchronous request-response cycle.
         */
        const predictionPromise = new Promise((resolve, reject) => {
            responseMap.set(requestId, { resolve, reject });

            setTimeout(() => {
                if (responseMap.has(requestId)) {
                    const rejectFn = responseMap.get(requestId).reject;
                    responseMap.delete(requestId);
                    rejectFn(new Error(`Timeout waiting for ML response for request ID: ${requestId}`));
                }
            }, 60000);
        });

        try {
            // That line "pauses" the specific request's execution until the Kafka consumer finds the
            // matching requestId and triggers the resolve function, successfully closing the loop.
            const prediction = await predictionPromise;
            res.status(200).json({ prediction });
        } catch (error) {
            res.status(500).json({ error: "Kafka error or timeout", details: error.message });
        }

        // 202 Accepted — message is queued; prediction result will be pushed via Socket.IO
        //res.status(202).json({ status: "Accepted", message: "Prediction queued.", ...message });
    } catch (err) {
        console.error("Kafka send error:", err);
        res.status(500).json({ error: "Failed to queue prediction.", details: err.message });
    }
});

// ───────────────────────────────────────────────────────────────
// Kafka Consumer — listens for ML output and pushes to clients
// ───────────────────────────────────────────────────────────────
const startKafkaPredictionListener = async () => {
    await kafkaConsumer.connect();
    await kafkaConsumer.subscribe({
        topic:         KAFKA_ML_OUTPUT_TOPIC,
        fromBeginning: false,  // false in production — avoid replaying old messages on restart
    });

    /*await kafkaConsumer.run({
        eachMessage: async ({ message }) => {
            try {
                const modelResult = JSON.parse(message.value.toString());
                console.log("ML prediction received:", modelResult);
                io.emit("model-result", modelResult); // Broadcast to all connected Socket.IO clients
            } catch (parseErr) {
                console.error("Failed to parse Kafka message:", parseErr);
            }
        },
    });*/

    await kafkaConsumer.run({
        eachBatch: async ({ batch, resolveOffset, heartbeat }) => {
            for (let message of batch.messages) {
                const result = JSON.parse(message.value.toString());
                //console.log(result.result);
                const { requestId } = result;
                console.log(requestId);
                //the resolve operation retrieves those stored functions upon Kafka's response to
                // complete the asynchronous request-response cycle.
                if (responseMap.has(requestId)) {
                    responseMap.get(requestId).resolve(result);
                    responseMap.delete(requestId);
                }
                resolveOffset(message.offset);
            }
            await heartbeat();
        },
    });
    console.log("Kafka consumer is running");

    console.log(`Kafka consumer listening on topic: ${KAFKA_ML_OUTPUT_TOPIC}`);
};

// ───────────────────────────────────────────────────────────────
// Socket.IO — Real-Time Client Connections
// ───────────────────────────────────────────────────────────────
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// ───────────────────────────────────────────────────────────────
// Graceful Shutdown — disconnect Kafka on process exit
// ───────────────────────────────────────────────────────────────
const shutdown = async (signal) => {
    console.log(`${signal} received — shutting down gracefully.`);
    try {
        await kafkaProducer.disconnect();
        await kafkaConsumer.disconnect();
        console.log("Kafka connections closed.");
    } catch (err) {
        console.error("Error during shutdown:", err);
    }
    process.exit(0);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT",  () => shutdown("SIGINT"));

// ───────────────────────────────────────────────────────────────
// Bootstrap — initialise Kafka then start the HTTP server
// ───────────────────────────────────────────────────────────────
const bootstrap = async () => {
    await initKafkaProducer();
    await startKafkaPredictionListener();

    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
};

bootstrap().catch((err) => {
    console.error("Fatal startup error:", err);
    process.exit(1);
});