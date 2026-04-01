"""
Loads the saved logistic regression model and scaler,
then interactively asks the user for sepal measurements
and predicts the Iris species in a loop.

Requirements:
    pip install scikit-learn joblib numpy

Make sure 'logistic_model.pkl' and 'scaler.pkl' are in the same directory.
"""

import numpy as np
import joblib
import sys

# -----------------------------
# Load saved model and scaler
# -----------------------------
try:
    model = joblib.load('logistic_model.pkl')
    scaler = joblib.load('scaler.pkl')
    print("Model and scaler loaded successfully.\n")
except FileNotFoundError as e:
    print(f"Error: Could not find saved files — {e}")
    print("   Make sure 'logistic_model.pkl' and 'scaler.pkl' are in the same folder.")
    sys.exit(1)

# -----------------------------
# Class label mapping
# -----------------------------
class_names = {
    0: "Setosa",
    1: "Versicolor",
    2: "Virginica"
}

# -----------------------------
# Helper: safely read a float from user
# -----------------------------
def get_float(prompt):
    """Prompt the user for a float value, re-asking on invalid input."""
    while True:
        try:
            value = float(input(prompt))
            if value <= 0:
                print("   Please enter a positive number.")
                continue
            return value
        except ValueError:
            print(" Invalid input. Please enter a numeric value (e.g. 5.1)")

# -----------------------------
# Main prediction loop
# -----------------------------
print("=" * 50)
print("       IRIS SPECIES PREDICTOR")
print("=" * 50)
print("This model uses SEPAL LENGTH and SEPAL WIDTH only.")
print("Type 'quit' or 'q' at any prompt to exit.\n")

while True:
    print("-" * 50)
    print("Enter a new pair of measurements:")

    # Allow 'quit' on the first input field
    raw = input("  Sepal Length (cm) [e.g. 5.1]: ").strip().lower()
    if raw in ('q', 'quit'):
        print("\nGoodbye!")
        break
    try:
        sepal_length = float(raw)
        if sepal_length <= 0:
            raise ValueError
    except ValueError:
        print("  Invalid input. Please enter a positive number.")
        continue

    sepal_width = get_float("  Sepal Width  (cm) [e.g. 3.5]: ")

    # -----------------------------
    # Scale and predict
    # -----------------------------
    # Reshape to (1, 2) — one sample with two features
    features = np.array([[sepal_length, sepal_width]])
    features_scaled = scaler.transform(features)

    prediction = model.predict(features_scaled)[0]                      # Predicted class index
    probabilities = model.predict_proba(features_scaled)[0]             # Confidence per class

    # -----------------------------
    # Display result
    # -----------------------------
    print(f"\n  Prediction: {class_names[prediction]}")
    print(f"  Confidence breakdown:")
    for idx, (name, prob) in enumerate(zip(class_names.values(), probabilities)):
        print(f"     {name:<22} {prob*100:.1f}%")

    print()