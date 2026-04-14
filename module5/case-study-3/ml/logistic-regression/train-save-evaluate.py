# -----------------------------
# Import necessary libraries
# -----------------------------
import numpy as np                                # NumPy: used for numerical operations and array manipulation
import matplotlib.pyplot as plt                   # Matplotlib: used for plotting graphs and visualizations
import joblib                                     # Joblib: used to save/load trained models and scalers to disk
from sklearn import datasets                      # Scikit-learn datasets: provides built-in datasets like Iris
from sklearn.model_selection import train_test_split  # Splits data into training and testing subsets
from sklearn.preprocessing import StandardScaler      # Standardizes features by removing mean and scaling to unit variance
from sklearn.linear_model import LogisticRegression   # Logistic Regression classifier for multi-class classification
from sklearn.metrics import accuracy_score, classification_report  # Tools to evaluate model performance
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay  # confusion_matrix: computes the matrix values
                                                                      # ConfusionMatrixDisplay: renders it as a labeled plot

# -----------------------------
# Load and prepare the Iris dataset
# -----------------------------
# The Iris dataset contains 150 samples of 3 iris flower species (50 each),
# each described by 4 features: sepal length, sepal width, petal length, petal width.
iris = datasets.load_iris()
print(iris)                                # Print the full dataset object (includes data, target, feature names, etc.)

# We intentionally select ONLY the first 2 features (sepal length & sepal width)
# instead of all 4. This reduces accuracy slightly but allows us to visualize
# the decision boundary on a 2D plot later.
X = iris.data[:, :2]  # Shape: (150, 2) — all rows, first 2 columns only
#X = iris.data  # Shape: (150, 4) — all rows, all columns
y = iris.target       # Shape: (150,)   — integer class labels: 0=Setosa, 1=Versicolor, 2=Virginica

# Split data into training (80%) and testing (20%) sets.
# - test_size=0.2 means 20% (30 samples) go to testing, 80% (120 samples) to training.
# - random_state=42 fixes the random seed so the split is reproducible across runs.
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# -----------------------------
# Standardize the features
# -----------------------------
# Logistic Regression (and many ML algorithms) are sensitive to feature scale.
# StandardScaler transforms features so each has mean=0 and std=1.
# This ensures no single feature dominates due to its magnitude.
#
# IMPORTANT: We call fit_transform() on TRAINING data only, then transform() on test data.
# This prevents "data leakage" — the scaler learns statistics only from training data,
# and applies the same transformation to test data without "peeking" at it.
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)   # Learns mean & std from X_train, then scales it
X_test = scaler.transform(X_test)         # Applies the SAME learned mean & std to X_test (no re-fitting)


# -----------------------------
# Train Logistic Regression model
# -----------------------------
# LogisticRegression parameters explained:
# - multi_class='multinomial': Uses softmax (multinomial) loss for 3-class classification,
#   rather than the default one-vs-rest approach. More appropriate for multi-class problems.
# - solver='lbfgs': Optimization algorithm used to minimize the loss function.
#   L-BFGS is an efficient quasi-Newton method, well-suited for multinomial logistic regression.
# - max_iter=200: Maximum number of iterations for the solver to converge.
#   Default is 100; we increase it to ensure the model has enough iterations to converge.
log_reg = LogisticRegression(multi_class='multinomial', solver='lbfgs', max_iter=200)
log_reg.fit(X_train, y_train)   # Train the model: finds optimal weights to separate the 3 classes


# -----------------------------
# Save model and scaler
# -----------------------------
# We save both the trained model and the fitted scaler so they can be reloaded
# later for inference — without needing to retrain or refit from scratch.
# joblib is preferred over pickle for scikit-learn objects as it handles
# large NumPy arrays more efficiently.
joblib.dump(log_reg, 'logistic_model.pkl')   # Serializes the trained model to a .pkl file
joblib.dump(scaler, 'scaler.pkl')            # Serializes the fitted scaler to a .pkl file


# -----------------------------
# Predict and evaluate
# -----------------------------
# Use the trained model to predict class labels for the unseen test set.
y_pred = log_reg.predict(X_test)   # Returns an array of predicted class labels (0, 1, or 2)

# accuracy_score: ratio of correctly predicted samples to total test samples.
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")

# classification_report: detailed per-class breakdown including:
# - Precision: of all predicted positives, how many were actually positive
# - Recall: of all actual positives, how many were correctly predicted
# - F1-score: harmonic mean of precision and recall (balance between the two)
# - Support: number of actual samples per class in the test set
print("\nClassification Report:\n", classification_report(y_test, y_pred))


# -----------------------------
# Confusion Matrix
# -----------------------------
# A confusion matrix is a (num_classes x num_classes) grid that shows:
# - ROWS    → the actual (true) class of each sample
# - COLUMNS → the class the model predicted for each sample
#
# How to read it:
# - DIAGONAL cells (top-left to bottom-right): correct predictions
#   e.g. cell [0,0] = number of Setosa samples correctly predicted as Setosa
# - OFF-DIAGONAL cells: mistakes
#   e.g. cell [1,2] = number of Versicolor samples wrongly predicted as Virginica
#
# A perfect model has all values on the diagonal and zeros everywhere else.

cm = confusion_matrix(y_test, y_pred)
# confusion_matrix(y_true, y_pred) compares the ground truth labels against
# the model's predictions and counts how many samples fall into each cell.

disp = ConfusionMatrixDisplay(confusion_matrix=cm,
                               display_labels=['Setosa', 'Versicolor', 'Virginica'])
# ConfusionMatrixDisplay wraps the raw matrix with human-readable class name labels
# so the axes show species names instead of 0, 1, 2.

disp.plot(cmap=plt.cm.Blues)
# cmap=plt.cm.Blues: darker blue = higher count, making it easy to spot
# where the model is concentrating its correct and incorrect predictions.

plt.title("Confusion Matrix — Logistic Regression on Iris")
plt.show()


# -----------------------------
# Function to plot decision boundary
# -----------------------------
def plot_decision_boundary(model, X, y):
    """
    Visualizes the decision boundary of a classifier in 2D feature space.

    The idea: we create a dense grid of points covering the entire 2D feature
    space, predict the class for every point on the grid, and color each region
    by its predicted class. This reveals where the model draws its boundaries
    between classes.
    """
    h = 0.02  # Step size for mesh grid — smaller = finer/smoother boundary, but slower to compute

    # Determine the axis ranges of the grid, with a 1-unit margin on each side
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1

    # Create a mesh grid: a matrix of (x, y) coordinate pairs covering the feature space
    # xx and yy are 2D arrays of x and y coordinates respectively
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))

    # Flatten the grid into a list of (x, y) points using np.c_ (column-stack),
    # scale them using the SAME scaler fitted on training data, then predict their class.
    # Z contains the predicted class label for every point in the grid.
    Z = model.predict(scaler.transform(np.c_[xx.ravel(), yy.ravel()]))
    Z = Z.reshape(xx.shape)  # Reshape back into 2D grid shape to match xx and yy

    # contourf fills regions of the grid with color based on predicted class (Z),
    # effectively painting the decision regions. alpha=0.3 makes it semi-transparent.
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=plt.cm.coolwarm)

    # --- Define class names and colors for the legend ---
    class_names = ['Setosa', 'Versicolor', 'Virginica']
    colors = ['blue', 'white', 'red']          # Matches coolwarm colormap roughly

    # Scatter each class separately so they get individual legend labels
    for i, (name, color) in enumerate(zip(class_names, colors)):
        plt.scatter(X[y == i, 0], X[y == i, 1],
                    label=name,
                    edgecolors='k',
                    color=color,
                    marker='o')

    plt.xlabel("Sepal Length")
    plt.ylabel("Sepal Width")
    plt.title("Logistic Regression Decision Boundary on Iris Dataset")
    plt.legend(title="Species")              # Adds a legend mapping colors to species names
    plt.show()


# -----------------------------
# Visualize the decision boundary
# -----------------------------
# We pass the full original (unscaled) dataset X here — NOT X_train or X_test.
# This shows the decision boundary over all 150 data points for a complete picture.
# The scaler.transform() call inside the function handles scaling for grid predictions.
plot_decision_boundary(log_reg, X, y)