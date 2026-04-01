"""
svm_predictor.py
----------------
Loads the saved SVM model and scaler, then interactively asks the user
for sepal measurements and predicts the Iris species in a loop.

Requirements:
    pip install scikit-learn joblib numpy

Make sure 'svm_model.pkl' and 'svm_scaler.pkl' are in the same directory.
"""

import numpy as np
import joblib
import sys


# -----------------------------
# Load saved model and scaler
# -----------------------------
# Both files must exist — the scaler transforms raw input into the same
# scaled space the model was trained on. Without it, predictions are meaningless.
try:
    model = joblib.load('svm_model.pkl')
    scaler = joblib.load('svm_scaler.pkl')
    print("Model and scaler loaded successfully.\n")
except FileNotFoundError as e:
    print(f"Error: Could not find saved files — {e}")
    print("Make sure 'svm_model.pkl' and 'svm_scaler.pkl' are in the same folder.")
    sys.exit(1)


# -----------------------------
# Class label mapping
# -----------------------------
# Maps the integer output (0, 1, 2) from model.predict() to human-readable names
class_names = {
    0: "Setosa",
    1: "Versicolor",
    2: "Virginica"
}


# -----------------------------
# Helper: safely read a float from user
# -----------------------------
def get_float(prompt):
    """Prompt the user for a positive float, re-asking on invalid input."""
    while True:
        try:
            value = float(input(prompt))
            if value <= 0:
                print("   Please enter a positive number.")
                continue
            return value
        except ValueError:
            print("   Invalid input. Please enter a numeric value (e.g. 5.1)")


# -----------------------------
# Main prediction loop
# -----------------------------
print("=" * 50)
print("       IRIS SPECIES PREDICTOR — SVM")
print("=" * 50)
print("This model uses SEPAL LENGTH and SEPAL WIDTH only.")
print("Type 'quit' or 'q' at any prompt to exit.\n")

while True:
    print("-" * 50)
    print("Enter a new pair of measurements:")

    # Allow quitting on the first prompt
    raw = input("  Sepal Length (cm) [e.g. 5.1]: ").strip().lower()
    if raw in ('q', 'quit'):
        print("\nGoodbye!")
        break
    try:
        sepal_length = float(raw)
        if sepal_length <= 0:
            raise ValueError
    except ValueError:
        print("   Invalid input. Please enter a positive number.")
        continue

    sepal_width = get_float("  Sepal Width  (cm) [e.g. 3.5]: ")

    # -----------------------------
    # Scale and predict
    # -----------------------------
    # Reshape to (1, 2): one sample, two features.
    # The scaler applies the SAME mean/std learned during training,
    # ensuring the input lives in the same numerical space as the training data.
    features = np.array([[sepal_length, sepal_width]])
    features_scaled = scaler.transform(features)

    # predict() returns the class with the highest decision function score
    prediction = model.predict(features_scaled)[0]

    # predict_proba() returns probability estimates per class.
    # Available because we set probability=True when training.
    # Note: SVM probabilities are computed via Platt scaling (cross-validation),
    # so they are less calibrated than Logistic Regression probabilities.
    probabilities = model.predict_proba(features_scaled)[0]

    # -----------------------------
    # Display result
    # -----------------------------
    print(f"\n  Prediction: {class_names[prediction]}")
    print(f"  Confidence breakdown:")
    for name, prob in zip(class_names.values(), probabilities):
        print(f"     {name:<22} {prob * 100:.1f}%")

    print()