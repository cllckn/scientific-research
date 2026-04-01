# -----------------------------
# Import necessary libraries
# -----------------------------
import numpy as np                                # NumPy: numerical operations and array handling
import matplotlib.pyplot as plt                   # Matplotlib: plotting graphs and visualizations
import joblib                                     # Joblib: saving and loading models to/from disk
from sklearn import datasets                      # Scikit-learn: built-in datasets including Iris
from sklearn.model_selection import train_test_split  # Splits dataset into train and test subsets
from sklearn.preprocessing import StandardScaler      # Standardizes features to zero mean, unit variance
from sklearn.svm import SVC                           # SVC: Support Vector Classifier
from sklearn.metrics import (                         # Evaluation tools:
    accuracy_score,                                   #   - overall accuracy
    classification_report,                            #   - per-class precision, recall, F1
    confusion_matrix,                                 #   - matrix of correct vs wrong predictions
    ConfusionMatrixDisplay                            #   - visual rendering of confusion matrix
)


# -----------------------------
# Load and prepare the Iris dataset
# -----------------------------
# Iris contains 150 flower samples across 3 species (50 each):
# Setosa, Versicolor, Virginica — each described by 4 measurements.
iris = datasets.load_iris()

# Use only the first 2 features (sepal length & width) so we can
# visualize the decision boundary on a 2D plot later.
# This slightly reduces accuracy but makes the model interpretable visually.
#X = iris.data[:, :2]  # Shape: (150, 2) — sepal length and sepal width only
X = iris.data  # Shape: (150, 4) — sepal length, sepal width, petal length, and petal width
y = iris.target       # Shape: (150,)   — 0=Setosa, 1=Versicolor, 2=Virginica

# Split into 80% training (120 samples) and 20% testing (30 samples).
# random_state=42 ensures the same split every run (reproducibility).
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# -----------------------------
# Standardize the features
# -----------------------------
# SVM is especially sensitive to feature scale because it computes distances
# between data points to find the optimal separating hyperplane.
# Without scaling, a feature with large values (e.g. 0-100) would dominate
# over one with small values (e.g. 0-1), distorting the margin calculation.
#
# StandardScaler: subtracts mean, divides by std → each feature has mean=0, std=1.
#
# CRITICAL: fit only on training data to prevent data leakage.
# The test set must be transformed with training statistics, not its own.
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)   # Learns mean & std from training data, then scales it
X_test = scaler.transform(X_test)         # Scales test data using the SAME training statistics


# -----------------------------
# Train the SVM model
# -----------------------------
# SVC (Support Vector Classifier) finds the hyperplane that maximizes
# the margin between classes. Key parameters:
#
# - kernel='rbf': Radial Basis Function kernel. Projects data into a higher-
#   dimensional space to find non-linear boundaries. Best general-purpose choice.
#   Alternatives: 'linear' (straight boundary), 'poly' (polynomial curve).
#
# - C=1.0: Regularization parameter. Controls the trade-off between:
#   * Large C → smaller margin, fits training data more tightly (risk: overfitting)
#   * Small C → larger margin, allows more misclassifications (risk: underfitting)
#   C=1.0 is a balanced default.
#
# - gamma='scale': Controls how far the influence of a single training point reaches.
#   'scale' sets gamma = 1 / (n_features * X.var()), a sensible automatic default.
#   * High gamma → points influence only nearby neighbors (tight, complex boundary)
#   * Low gamma  → points influence far-away neighbors (smooth, broad boundary)
#
# - decision_function_shape='ovr': One-vs-Rest strategy for multi-class.
#   Trains one binary SVM per class (e.g. Setosa vs rest), then picks the
#   class with the highest confidence score.
#
# - probability=True: Enables predict_proba() so we can output confidence scores.
#   Uses cross-validation internally (Platt scaling) — slightly slower to train.
svm_model = SVC(kernel='rbf', C=1.0, gamma='scale',
                decision_function_shape='ovr', probability=True)
svm_model.fit(X_train, y_train)   # Finds the optimal support vectors and decision boundary


# -----------------------------
# Save model and scaler
# -----------------------------
# Both must be saved together — the scaler is needed to transform new inputs
# at prediction time using the exact same statistics used during training.
joblib.dump(svm_model, 'svm_model.pkl')   # Serializes trained SVM to disk
joblib.dump(scaler, 'svm_scaler.pkl')     # Serializes fitted scaler to disk
print("Model and scaler saved successfully.")


# -----------------------------
# Predict and evaluate
# -----------------------------
y_pred = svm_model.predict(X_test)   # Predicts class labels for the 30 test samples

# Overall accuracy: fraction of test samples correctly classified
accuracy = accuracy_score(y_test, y_pred)
print(f"\nModel Accuracy: {accuracy:.2f}")

# Per-class breakdown: precision, recall, F1-score, and support for each species
print("\nClassification Report:\n", classification_report(
    y_test, y_pred, target_names=['Setosa', 'Versicolor', 'Virginica']
))
# target_names replaces 0,1,2 with readable species names in the report


# -----------------------------
# Confusion Matrix
# -----------------------------
# Rows = actual class, Columns = predicted class.
# Diagonal = correct predictions. Off-diagonal = mistakes.
cm = confusion_matrix(y_test, y_pred)

disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                               display_labels=['Setosa', 'Versicolor', 'Virginica'])
disp.plot(cmap=plt.cm.Blues)   # Darker blue = higher count
plt.title("Confusion Matrix — SVM on Iris Dataset")
plt.show()


# -----------------------------
# Function to plot decision boundary
# -----------------------------
def plot_decision_boundary(model, X, y):
    """
    Plots the SVM decision regions over the 2D feature space.
    Creates a fine mesh grid, predicts the class at every point,
    then colors each region and overlays the actual data points.
    """
    h = 0.02   # Grid step size — smaller = smoother boundary, slower to compute

    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1

    # Build a dense coordinate grid covering the entire feature space
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))

    # Scale the grid points using training statistics, then predict each point's class.
    # np.c_ column-stacks xx and yy into a (N, 2) array of coordinate pairs.
    Z = model.predict(scaler.transform(np.c_[xx.ravel(), yy.ravel()]))
    Z = Z.reshape(xx.shape)   # Reshape back to 2D grid to match the mesh

    # Fill each decision region with a semi-transparent color
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=plt.cm.coolwarm)

    # Plot each class separately so matplotlib can assign legend labels
    class_names = ['Setosa', 'Versicolor', 'Virginica']
    colors = ['blue', 'white', 'red']   # Roughly matches the coolwarm colormap

    for i, (name, color) in enumerate(zip(class_names, colors)):
        plt.scatter(X[y == i, 0], X[y == i, 1],
                    label=name,
                    color=color,
                    edgecolors='k',
                    marker='o')

    plt.xlabel("Sepal Length")
    plt.ylabel("Sepal Width")
    plt.title("SVM Decision Boundary on Iris Dataset (RBF Kernel)")
    plt.legend(title="Species")
    plt.show()


# -----------------------------
# Visualize the decision boundary
# -----------------------------
# Pass the full unscaled dataset X (all 150 samples) for a complete visual picture.
# Scaling for the mesh grid is handled inside the function via scaler.transform().
plot_decision_boundary(svm_model, X, y)