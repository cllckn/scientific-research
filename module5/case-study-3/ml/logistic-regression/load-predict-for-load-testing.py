# ──────────────────────────────────────────────────────────────
# Required Libraries
# ──────────────────────────────────────────────────────────────
import json
import joblib
import numpy as np
from confluent_kafka import Consumer, Producer

# ──────────────────────────────────────────────────────────────
# Constants and Configuration
# ──────────────────────────────────────────────────────────────
BROKER_ADDRESS = 'localhost:9092'
#INPUT_TOPIC = 'sr-ml-model-input'
INPUT_TOPIC = 'sr-ml-model-input-parallel'
OUTPUT_TOPIC = 'sr-ml-model-output'
CONSUMER_GROUP_ID = 'iris-group'
MODEL_FILE = 'logistic_model.pkl'
SCALER_FILE = 'scaler.pkl'

# ──────────────────────────────────────────────────────────────
# Load Trained Model and Scaler
# ──────────────────────────────────────────────────────────────
model = joblib.load(MODEL_FILE)
scaler = joblib.load(SCALER_FILE)

# ──────────────────────────────────────────────────────────────
# Kafka Configuration
# ──────────────────────────────────────────────────────────────
conf_consumer = {
    'bootstrap.servers': BROKER_ADDRESS,
    'group.id': CONSUMER_GROUP_ID,
    'auto.offset.reset': 'earliest'
}

conf_producer = {
    'bootstrap.servers': BROKER_ADDRESS
}

# ──────────────────────────────────────────────────────────────
# Initialize Kafka Consumer and Producer
# ──────────────────────────────────────────────────────────────
consumer = Consumer(conf_consumer)
producer = Producer(conf_producer)

# Subscribe to the input topic
consumer.subscribe([INPUT_TOPIC])

# ──────────────────────────────────────────────────────────────
# Function to Send Prediction to Output Topic
# ──────────────────────────────────────────────────────────────
def send_prediction(result_label, request_id):
    # Construct a dictionary containing both data points
    message_payload = {
        "result": result_label,
        "requestId": request_id
    }
    data = json.dumps(message_payload)
    producer.produce(OUTPUT_TOPIC, value=data.encode('utf-8'))
    producer.flush()

print(" Listening for sepal length and width...")

# ──────────────────────────────────────────────────────────────
# Main Kafka Polling + ML Prediction Loop
# ──────────────────────────────────────────────────────────────
try:
    while True:
        msg = consumer.poll(1.0)

        if msg is None:
            continue
        if msg.error():
            print(f" Consumer error: {msg.error()}")
            continue

        try:
            # Parse the input JSON message
            data = json.loads(msg.value().decode('utf-8'))
            sepal_length = float(data.get("sepal_length"))
            sepal_width = float(data.get("sepal_width"))
            request_id = data.get("requestId");
            print(f"request id: {request_id}")
            # Scale input and make prediction
            input_scaled = scaler.transform([[sepal_length, sepal_width]])
            prediction = int(model.predict(input_scaled)[0])
            label = ['setosa', 'versicolor', 'virginica'][prediction]

            print(f" Received: {sepal_length}, {sepal_width} → Predicted: {label}")

            # Send prediction result back together with request_id
            send_prediction(label, request_id)

        except Exception as e:
            print(f" Error processing message: {e}")

except KeyboardInterrupt:
    print(" Shutting down...")

finally:
    consumer.close()

#{"sepal_length": 1,"sepal_width":4 }