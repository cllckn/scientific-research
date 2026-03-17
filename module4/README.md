# Module 4: Academic Publication Process, Data-Driven Research in IT

<!-- TOC -->
* [Module 4: Academic Publication Process, Data-Driven Research in IT](#module-4-academic-publication-process-data-driven-research-in-it)
  * [Academic Publication Workflow](#academic-publication-workflow)
    * [Paper Submission Systems](#paper-submission-systems)
    * [Peer-Review Process](#peer-review-process)
    * [Reviewer Comments and Revisions](#reviewer-comments-and-revisions)
    * [Editorial Decisions](#editorial-decisions)
  * [Ethical Considerations in Academic Publishing](#ethical-considerations-in-academic-publishing)
  * [Case Study 2 (Part A): Data-Driven and Algorithmic Research in IT](#case-study-2-part-a-data-driven-and-algorithmic-research-in-it)
    * [Data-Driven Research in Information Technology](#data-driven-research-in-information-technology)
    * [Introduction To Machine Learning?](#introduction-to-machine-learning)
      * [Types of Machine Learning Algorithms](#types-of-machine-learning-algorithms)
      * [Supervised Learning Algorithms](#supervised-learning-algorithms)
      * [Unsupervised Learning Algorithms](#unsupervised-learning-algorithms)
      * [Neural Networks & Deep Learning](#neural-networks--deep-learning)
    * [A General Framework for Developing Machine Learning-Based Algorithms](#a-general-framework-for-developing-machine-learning-based-algorithms)
    * [Case Study: Linear Regression for Estimating House Prices](#case-study-linear-regression-for-estimating-house-prices)
    * [Common ML Algorithms and Their Implementation](#common-ml-algorithms-and-their-implementation)
      * [Iris Dataset](#iris-dataset)
      * [Logistic Regression](#logistic-regression)
      * [Support Vector Machine (SVM)](#support-vector-machine-svm)
<!-- TOC -->


## Academic Publication Workflow

The academic publication workflow describes the standard process through which research manuscripts are evaluated and published in journals or conference proceedings.

### Paper Submission Systems

Most academic journals and conferences use online submission platforms such as Editorial Manager, ScholarOne, or EasyChair. These systems allow authors to submit manuscripts, upload supplementary materials, track the review process, and communicate with editors.

### Peer-Review Process

After submission, the manuscript undergoes peer review, where independent experts in the same research field evaluate the work. Reviewers assess the originality, methodological soundness, clarity, and contribution of the research.

### Reviewer Comments and Revisions

Reviewers provide detailed feedback and suggestions for improvement. Authors are typically required to revise the manuscript and respond to reviewer comments. Revisions may involve clarifying methodology, improving analysis, or correcting errors.

### Editorial Decisions

Based on reviewer evaluations, the editor makes one of the following decisions:

- **Accept:** The paper is approved for publication with minimal or no changes.
- **Minor revision:** Small modifications are required before acceptance.
- **Major revision:** Significant improvements or additional analysis are needed.
- **Reject:** The manuscript does not meet the journal's quality or scope requirements.

---

## Ethical Considerations in Academic Publishing

Ethical practices are essential to maintain integrity and trust in scientific research. 
Key ethical considerations include:

- **Avoiding plagiarism:** Properly citing and acknowledging all sources.
- **Authorship integrity:** Listing only contributors who made substantial intellectual contributions.
- **Data transparency:** Reporting methods and results honestly without fabrication or manipulation.
- **Conflict of interest disclosure:** Revealing any financial or professional interests that could influence the research.
- **Responsible citation practices:** Giving appropriate credit to prior work.

Adhering to these principles ensures credibility and reliability in academic publications.

---

## Case Study 2 (Part A): Data-Driven and Algorithmic Research in IT

### Data-Driven Research in Information Technology

Data-driven research focuses on extracting insights, patterns, or predictions from data using computational methods and 
algorithms. In Information Technology, this approach is widely used in areas such as machine learning, data mining, 
recommender systems, and network analytics.

The research process typically involves collecting or selecting a dataset, preprocessing the data, applying algorithms 
or analytical models, and evaluating the results using appropriate performance metrics. These metrics may include 
accuracy, precision, recall, F1-score, or other domain-specific measures.

Data-driven research enables researchers to develop intelligent systems, improve decision-making processes, and 
uncover hidden relationships within large-scale datasets.












### Introduction To Machine Learning?

Artificial Intelligence (AI) is a broad field of computer science focused on building machines behave like humans — 
think, learn, reason, and solve problems.


AI systems aim to mimic human thinking — whether through rules, learning, or problem-solving.


Machine Learning (ML) is a subfield of Artificial Intelligence (AI) focused on developing algorithms that can learn
from data and generalize to new, unseen data. This allows systems to perform tasks without being explicitly programmed. 
So, ML is a way to teach computers to learn from data instead of giving them step-by-step instructions.


#### Types of Machine Learning Algorithms

Machine learning algorithms can generally be grouped into three major categories: supervised learning,
unsupervised learning, and reinforcement learning.

**Supervised Learning**

In supervised learning, models are trained on labeled data — where both input and output are known.
Supervised learning problems are generally divided into two main types:


- **Classification problem**  
  Used when the output is a discrete category or class.
  The goal is to assign inputs to one of several predefined categories.

    * Predicts **discrete categories** (e.g., classifying an iris flower as *Setosa*, *Versicolor*, or *Virginica*).
    * **Example:** Spam detection, disease diagnosis.

- **Regression problem**  
  Used when the output is a continuous value.
  The model predicts a numeric quantity based on the input features.
    * Predicts **continuous values** (e.g., predicting house prices based on area and location).
    * **Example:** Stock price prediction, temperature forecasting.



**Unsupervised Learning**

Unsupervised learning deals with unlabeled data — the goal is to find hidden patterns or groupings.

- **Clustering problem**  
  Groups similar data points based on similarity (e.g., grouping flowers into species based on petal measurements without predefined labels).  
  **Example:** Grouping emails into categories without predefined labels, customer profiling, market segmentation, clustering similar users....

**Reinforcement Learning**

Reinforcement learning (RL) is a type of machine learning where an agent learns to make decisions by interacting with an environment.

#### Supervised Learning Algorithms

**Linear Regression**

- Predicts a continuous numeric output.
- Fits a line that minimizes the sum of squared errors.

**Logistic Regression**

- Used for binary classification.
- Uses a sigmoid function to predict probabilities.

**Support Vector Machine (SVM)**

- Classifies data by finding the optimal decision boundary.
- Uses kernel functions for non-linear classification.

**K-Nearest Neighbors (KNN)**

- Non-parametric algorithm for regression and classification.
- Predicts based on the average (or majority) of K nearest neighbors.

**Naive Bayes**

- Based on Bayes’ Theorem.
- Assumes feature independence.
- Common in spam filtering.

**Decision Trees**

- Series of conditional questions leading to a prediction.
- Splits data based on feature values.

**Random Forest**

- Ensemble of multiple decision trees.
- Reduces overfitting by averaging results.

**Boosting (e.g., AdaBoost, XGBoost)**

- Trains models sequentially.
- Each model focuses on correcting the errors of the previous one.


#### Unsupervised Learning Algorithms

**Clustering**

- Groups similar data points.

**K-Means**

- Partitions data into K clusters based on proximity.
- Iteratively updates cluster centers.

**Others**

- Hierarchical Clustering
- DBSCAN

#### Neural Networks & Deep Learning

- Inspired by the human brain, composed of layers (input, hidden, output).
- Learns hidden features and complex patterns automatically.
- Deep Learning = multiple hidden layers.
- Common in image and speech recognition.
- Can be used for classification, regression. With unsupervised variations like Autoencoders, Self-Organizing Maps (SOMs), and Deep Embedded Clustering (DEC) allow ANNs to perform clustering.


### A General Framework for Developing Machine Learning-Based Algorithms

In a typical machine learning application, the procedure is composed of **three main steps**:

1. **Training the Model**  
   - Use historical data to build the model, then save it for future use.  
   - Supervised learning uses labeled data to learn the mapping between inputs and outputs.  
   - Unsupervised learning uses unlabeled data to discover patterns or structure.

2. **Model Evaluation**  
   - Before deployment, the trained model should be evaluated using metrics appropriate to the task:  
     - **Regression:** RMSE, MAE, R²  
     - **Classification:** Accuracy, Precision, Recall, F1-score, Confusion Matrix  
   - Evaluation can be performed using hold-out validation, cross-validation, or other resampling techniques.  
   - This step ensures the model generalizes well to unseen data and avoids overfitting.

3. **Inference (Prediction / Deployment)**  
   - Load the trained model and introduce new, unseen inputs to make predictions or extract insights.  
   - The separation of training, evaluation, and inference ensures efficiency and scalability in practical applications.


### Case Study: Linear Regression for Estimating House Prices

Training involves adjusting the model coefficients (b0, b1, b2) to minimize the prediction error, 
thereby determining the line of best fit.

y = b0 + b1 * x1 + b2 * x2 + error

Where:
- y  = house price  
- x1 = area  
- x2 = number of bedrooms  
- b0 = intercept  
- b1, b2 = coefficients  




**Training&Evaluation Algorithm**


1. Start
Initialize the process for training the linear regression model.

---

2. Define Training Data

**Input feature matrix `X_train`** (independent variables):
- Area in square meters (m²)
- Number of bedrooms

**Output target vector `y_train`** (dependent variable):
- Corresponding house prices in million KZT

---

3. Define Test Data

**Input feature matrix `X_test`** (unseen houses, never used in training):
- Area in square meters (m²)
- Number of bedrooms

**Ground-truth target vector `y_test`**:
- Realistic house prices in million KZT based on training trends

---

4. Initialize a Linear Regression Model
The model will learn the best-fit plane:
```
price = a × area_m2 + b × bedrooms + c
```

Where `a`, `b` are coefficients and `c` is the intercept.

---

5. Train the Model
```
model.fit(X_train, y_train)
```
During training the model:
1. Initializes default coefficients `(a, b, c)`
2. Predicts prices on training data
3. Measures prediction error (residuals)
4. Adjusts coefficients to minimize MSE using closed-form OLS
5. Stores the optimal coefficients for inference

---

6. Inspect Learned Parameters
Print the learned values:
- Coefficient for area `(a)`
- Coefficient for bedrooms `(b)`
- Intercept `(c)`
- Full formula: `price = a × area + b × bedrooms + c`

---

7. Predict on a Single New House
Pass an unseen house `[area, bedrooms]` to `model.predict()`
and print the predicted price in million KZT.

---

8. Evaluate the Model on Test Data
Run `model.predict(X_test)` and compare against `y_test`.

Compute and print the following metrics:

| Metric | Description |
|---|---|
| MAE  | Average absolute error in million KZT |
| MSE  | Mean squared error — penalises large errors |
| RMSE | Square root of MSE — same unit as target |
| R²   | Proportion of variance explained by the model |

Print a row-by-row comparison table:
`Area | Bedrooms | Actual | Predicted | Error`

---

9. Save the Trained Model
```
joblib.dump(model, 'linear_house_model.pkl')
```
Persist the model to disk for future inference without retraining.

---

10. End

* House Price Prediction Training Application (./estimating-house-prices/hpp-lr-train-evaluate-save-model.py)


```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib

# ----------------------------------------------
# Training Data
# Input features: [area in square meters, number of bedrooms]
# Output: price in million KZT
# ----------------------------------------------
X_train = np.array([
    [90,  2],
    [140, 3],
    [186, 3],
    [232, 4],
    [279, 4]
])

# Target house prices (in million KZT — Kazakhstan Tenge)
y_train = np.array([30, 50, 60, 95, 110])

# ----------------------------------------------
# Test Data (generated to evaluate the model)
# These are unseen houses the model has never trained on.
# Prices are realistic estimates based on training trends.
# ----------------------------------------------
X_test = np.array([
    [100, 2],   # small apartment
    [160, 3],   # mid-size flat
    [200, 3],   # larger flat
    [245, 4],   # spacious house
    [290, 5]    # large house
])

# Ground-truth prices for test houses (in million KZT)
y_test = np.array([35, 55, 70, 100, 120])

# ----------------------------------------------
# Model Training
# The model learns the best-fit plane:
#     price = a * area_in_m2 + b * bedrooms + c
# ----------------------------------------------
model = LinearRegression()
model.fit(X_train, y_train)

# ----------------------------------------------
# Prediction on a single new house
# Example: 250 m² and 4 bedrooms
# ----------------------------------------------
new_house = np.array([[250, 4]])
predicted_price = model.predict(new_house)

print("=" * 52)
print("         SINGLE HOUSE PREDICTION")
print("=" * 52)
print(f"  Area      : {new_house[0][0]} m²")
print(f"  Bedrooms  : {new_house[0][1]}")
print(f"  Predicted : {predicted_price[0]:,.2f} million KZT")

# ----------------------------------------------
# Inspect the learned parameters
# ----------------------------------------------
print("\n" + "=" * 52)
print("         LEARNED MODEL PARAMETERS")
print("=" * 52)
print(f"  Coefficient for area (a)     : {model.coef_[0]:.4f}")
print(f"  Coefficient for bedrooms (b) : {model.coef_[1]:.4f}")
print(f"  Intercept (c)                : {model.intercept_:.4f}")
print(f"\n  Formula: price = {model.coef_[0]:.4f} * area"
      f" + {model.coef_[1]:.4f} * bedrooms"
      f" + ({model.intercept_:.4f})")

# ----------------------------------------------
# Evaluation Step
# Predict on the test set and compare to ground truth
# ----------------------------------------------
y_pred = model.predict(X_test)

mae  = mean_absolute_error(y_test, y_pred)
mse  = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2   = r2_score(y_test, y_pred)

print("\n" + "=" * 52)
print("         EVALUATION ON TEST DATA")
print("=" * 52)
print(f"  {'Area':>6} | {'Beds':>4} | {'Actual':>10} | {'Predicted':>10} | {'Error':>10}")
print(f"  {'-'*6}-+-{'-'*4}-+-{'-'*10}-+-{'-'*10}-+-{'-'*10}")
for i in range(len(X_test)):
    area     = X_test[i][0]
    beds     = X_test[i][1]
    actual   = y_test[i]
    pred     = y_pred[i]
    error    = actual - pred
    print(f"  {area:>6} | {beds:>4} | {actual:>9.2f}M | {pred:>9.2f}M | {error:>+9.2f}M")

print("\n  --- Metrics ---")
print(f"  MAE  (Mean Absolute Error)       : {mae:.4f}  million KZT")
print(f"  MSE  (Mean Squared Error)        : {mse:.4f}")
print(f"  RMSE (Root Mean Squared Error)   : {rmse:.4f}  million KZT")
print(f"  R²   (Coefficient of Determination): {r2:.4f}")
print()
print("  Interpretation:")
print(f"  - On average, predictions are off by (show a deviation of) {mae:.2f}M KZT (MAE)")
print(f"  - The model explains {r2 * 100:.1f}% of the variance in house prices (R²)-How much variance the model explains "
      f"— 1.0 is perfect, 0 means the model is no better than guessing the mean")
print(f"  - Area and number of bedrooms are meaningful and relevant features for predicting house prices (as R² is 0.98), but the "
      f"current evidence is insufficient to confirm their reliability due to the very small dataset")


# ----------------------------------------------
# Save the trained model for future use
# ----------------------------------------------
joblib.dump(model, 'linear_house_model.pkl')
print("\n" + "=" * 52)
print("  Model saved as 'linear_house_model.pkl'")
print("=" * 52)

# ----------------------------------------------
# Summary of what the model does during training:
# 1. Initializes with default coefficients (a, b, c)
# 2. Predicts prices on training data
# 3. Measures the prediction error (residuals)
# 4. Adjusts coefficients to minimize the error
# 5. Repeats the process until the optimal fit is found
# 6. Evaluate performance on unseen data using MAE, RMSE, R²
# 5. Stores the optimal coefficients for inference
# ----------------------------------------------
```


**Inference Algorithm**

1. Start

2. Load the trained model from disk using `joblib.load()`

3. Display "House Price Predictor is ready"

4. LOOP:
   a. Ask user to enter:
   - square footage
   - number of bedrooms

   b. Convert input to numeric values

   c. Create input array for prediction: `[[sqft, bedrooms]]`

   d. Predict house price using `model.predict()`

   e. Display predicted price

   f. Ask user if they want to make another prediction
   - If NO, exit the loop

5. Print "Goodbye"

6. End


* House Price Prediction Console App: User Input from Console ((./estimating-house-prices/hpp-lr-load-use-model.py))
* 
```python

import numpy as np
import joblib

# ──────────────────────────────────────────────────────────────
# Load the trained Linear Regression model from file
# This model was trained to predict house prices based on:
#    - area (in square meters)
#    - number of bedrooms
# The target price was expressed in **millions of Kazakhstani Tenge (KZT)**
# ──────────────────────────────────────────────────────────────
model = joblib.load('linear_house_model.pkl')
print("House Price Predictor is ready!")

# ──────────────────────────────────────────────────────────────
# User Interaction Loop: Repeats until user exits
# ──────────────────────────────────────────────────────────────
while True:
    try:
        # Prompt user for area input (in square meters)
        area = float(input("Enter area in square meters (e.g., 100): "))

        # Prompt user for number of bedrooms
        bedrooms = int(input("Enter number of bedrooms (e.g., 3): "))

        # Prepare the input in the format expected by the model: 2D array
        user_input = np.array([[area, bedrooms]])

        # Predict the price using the model
        predicted_price = model.predict(user_input)

        # Output the result — rounded to 2 decimals, expressed in million KZT
        print(f"Predicted house price: {predicted_price[0]:,.2f} million KZT")

        # Ask user if they want to make another prediction
        cont = input("Do you want to predict another house price? (yes/no): ").strip().lower()
        if cont not in ['yes', 'y']:
            print("Goodbye")
            break

    except Exception as e:
        # If invalid input or error in prediction
        print(f"Error: {e}. Please try again.\n")


```



### Common ML Algorithms and Their Implementation

#### Iris Dataset

https://www.kaggle.com/datasets/uciml/iris

This application uses the **Iris dataset**, a classical dataset in the field of machine learning and pattern recognition.
It consists of 150 samples of iris flowers from three different species: *Iris setosa*, *Iris versicolor*,
and *Iris virginica*.

Each sample includes the following numerical features:

- Sepal Length (in cm)
- Sepal Width (in cm)
- Petal Length (in cm)
- Petal Width (in cm)

The Iris dataset is included as part of many ML libraries such as `scikit-learn`, making it easy to load and use
in Python-based machine learning models.

In the following  apps, only **Sepal Length** and **Sepal Width** are used as input features to simplify the operations.


**Test Data for the Iris dataset**

| Sepal Length (cm) | Sepal Width (cm) | Expected Class  |
|-------------------|------------------|---|
| 5.1	              | 3.5              | setosa  |
| 6.0               | 2.2              | versicolor  |
| 6.3               | 3.3              | virginica  |
| 4.9               | 3.1              | setosa  |



#### Logistic Regression

```python
# -----------------------------
# Import necessary libraries
# -----------------------------
import numpy as np
import matplotlib.pyplot as plt
import joblib                                     # For saving model and scaler
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report


# -----------------------------
# Load and prepare the Iris dataset
# -----------------------------
iris = datasets.load_iris()
X = iris.data[:, :2]  # Take only the first two features (sepal length & width) for easy visualization
y = iris.target       # Labels (0 = Setosa, 1 = Versicolor, 2 = Virginica)

# Split data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# -----------------------------
# Standardize the features
# -----------------------------
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)


# -----------------------------
# Train Logistic Regression model
# -----------------------------
log_reg = LogisticRegression(multi_class='multinomial', solver='lbfgs', max_iter=200)
log_reg.fit(X_train, y_train)


# -----------------------------
# Save model and scaler
# -----------------------------
joblib.dump(log_reg, 'logistic_model.pkl')   # Save trained logistic regression model
joblib.dump(scaler, 'scaler.pkl')            # Save fitted scaler


# -----------------------------
# Predict and evaluate
# -----------------------------
y_pred = log_reg.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy:.2f}")
print("\nClassification Report:\n", classification_report(y_test, y_pred))


# -----------------------------
# Function to plot decision boundary
# -----------------------------
def plot_decision_boundary(model, X, y):
    """Function to plot decision boundary for Logistic Regression"""
    h = 0.02  # Step size for mesh
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))

    # Predict class labels for each point in the grid
    Z = model.predict(scaler.transform(np.c_[xx.ravel(), yy.ravel()]))
    Z = Z.reshape(xx.shape)

    # Plot decision boundary
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=plt.cm.coolwarm)

    # Scatter plot of data points
    plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k', cmap=plt.cm.coolwarm, marker="o")

    plt.xlabel("Sepal Length")
    plt.ylabel("Sepal Width")
    plt.title("Logistic Regression Decision Boundary on Iris Dataset")
    plt.show()


# -----------------------------
# Visualize the decision boundary
# -----------------------------
plot_decision_boundary(log_reg, X, y)

```

#### Support Vector Machine (SVM)

```python
# -----------------------------
# Import necessary libraries
# -----------------------------
import numpy as np
import matplotlib.pyplot as plt
import joblib                              # For saving model and scaler
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report


# -----------------------------
# Load and prepare the dataset
# -----------------------------
iris = datasets.load_iris()                # Load Iris dataset
print(iris)                                # Print dataset description
X = iris.data[:, :2]                       # Use first two features for 2D visualization
y = iris.target                            # Labels (0 = Setosa, 1 = Versicolor, 2 = Virginica)


# -----------------------------
# Split and standardize the data
# -----------------------------
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)


# -----------------------------
# Train SVM model
# -----------------------------
svm_model = SVC(kernel='rbf', C=1.0, gamma='scale')  # RBF kernel
svm_model.fit(X_train, y_train)                      # Train the model


# -----------------------------
# Evaluate the model
# -----------------------------
y_pred = svm_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"Model Accuracy: {accuracy:.2f}")
print("\nClassification Report:\n", classification_report(y_test, y_pred))


# -----------------------------
# Save the model and scaler
# -----------------------------
joblib.dump(svm_model, 'svm_model.pkl')    # Save trained SVM model
joblib.dump(scaler, 'scaler.pkl')          # Save fitted scaler


# -----------------------------
# Function to plot decision boundary
# -----------------------------
def plot_decision_boundary(model, X, y):
    """
    Function to plot decision boundary of SVM.
    """
    h = 0.02  # Step size for mesh grid
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1

    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),
                         np.arange(y_min, y_max, h))

    # Predict on mesh grid
    Z = model.predict(scaler.transform(np.c_[xx.ravel(), yy.ravel()]))
    Z = Z.reshape(xx.shape)

    # Plot contour and data points
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=plt.cm.coolwarm)
    plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k', cmap=plt.cm.coolwarm)

    plt.xlabel("Sepal Length")
    plt.ylabel("Sepal Width")
    plt.title("SVM Decision Boundary on Iris Dataset")
    plt.show()


# -----------------------------
# Visualize decision boundary
# -----------------------------
plot_decision_boundary(svm_model, X, y)

```
