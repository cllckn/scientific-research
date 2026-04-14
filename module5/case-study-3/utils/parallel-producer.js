const { Kafka } = require('kafkajs');


// Initialize Kafka client
const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092'] // Replace with your Kafka broker address
});

// Instantiate a Kafka producer instance
const producer = kafka.producer();

const sendMessage = async () => {
    await producer.connect(); // Connect to Kafka broker
    console.log("Producer connected.");

    setInterval(async () => {
        const timestamp = new Date().toISOString(); // Get the current timestamp
        const messageValue = `Message sent at ${timestamp}`;

        await producer.send({
            topic: 'sr-test-topic-multiple-partition',
            messages: [
                {  value: messageValue }
                //{ key: 'timestamp', value: messageValue } // if we define key, it sends the message always to the same partition
            ]
        });

        console.log(`Sent: ${messageValue}`);
    }, 1000); // Send a message every second
};

// Run the producer
sendMessage().catch(console.error);
