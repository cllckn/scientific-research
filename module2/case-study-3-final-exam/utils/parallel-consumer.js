const { Kafka } = require('kafkajs');

// Initialize Kafka client
const kafka = new Kafka({
    clientId: 'my-consumer',
    brokers: ['localhost:9092'] // Replace with your Kafka broker address
});

// Create a Kafka consumer instance
const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
    await consumer.connect(); // Connect to Kafka broker
    console.log("Consumer connected.");

    await consumer.subscribe({ topic: 'sr-test-topic-multiple-partition', fromBeginning: false });
    //If true, the consumer will start reading from the beginning of the topic (including old messages).
    //If false (default), the consumer will only receive new messages (ignoring previous ones).

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received message: ${message.value.toString()} `);
        }
    });
};

// Run the consumer
runConsumer().catch(console.error);
