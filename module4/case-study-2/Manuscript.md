# Comparative Evaluation of Logistic Regression and Support Vector Machine on the Iris Dataset

---

## Abstract
This study presents a comparative evaluation of two widely used classification algorithms, Logistic Regression (LR) and Support Vector Machine (SVM), using the Iris dataset. Both models are trained and evaluated under identical experimental conditions to ensure fairness. Performance is assessed using accuracy, precision, recall, F1-score, and confusion matrices. The results indicate that Logistic Regression outperforms SVM in this setup, achieving higher accuracy and more balanced classification across classes. The findings highlight the importance of model selection based on data characteristics and feature representation.

---

## Keywords
Machine Learning, Logistic Regression, Support Vector Machine, Classification, Iris Dataset, Performance Evaluation

---

## 1. Introduction
Classification is a fundamental task in machine learning, widely applied in domains such as healthcare, finance, and pattern recognition. Selecting an appropriate model is critical for achieving high predictive performance.

This study compares two popular classification algorithms: Logistic Regression, a linear model, and Support Vector Machine, a more flexible method capable of modeling complex decision boundaries. Using the Iris dataset as a benchmark, the study evaluates and analyzes the performance of both models under controlled conditions.

---

## 2. Literature Review
The Iris dataset, introduced by Fisher (1936), is a standard benchmark for evaluating classification algorithms. Logistic Regression has been widely used for linearly separable problems due to its simplicity and interpretability. In contrast, Support Vector Machines are known for their ability to handle non-linear classification tasks through kernel functions.

Previous studies have shown that while SVM can outperform linear models in complex datasets, Logistic Regression remains competitive in low-dimensional and linearly separable scenarios.

---

## 3. Proposed Approach
This study implements two supervised learning models:

- **Logistic Regression (LR)**: A linear classifier that models the probability of class membership using a logistic function.
- **Support Vector Machine (SVM)**: A classifier that constructs optimal decision boundaries (hyperplanes) to separate classes.

Both models are trained on the same dataset with identical preprocessing steps. No extensive hyperparameter tuning is applied to maintain a controlled comparison.

---

## 4. Experimental Setup and Evaluation Methodology

### Dataset
- Iris dataset (3 classes: Setosa, Versicolor, Virginica)
- Features: Sepal length and sepal width (2 features)

### Data Split
- Training set: 70–80%
- Test set: 20–30%

### Evaluation Metrics
- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix

These metrics provide a comprehensive assessment of model performance, including both overall accuracy and class-wise behavior.

---

## 5. Results and Discussion

### Overall Performance

| Metric        | Logistic Regression | SVM |
|--------------|--------------------|-----|
| Accuracy     | 0.90               | 0.83 |
| Macro Avg F1 | 0.90               | 0.83 |
| Weighted Avg | 0.90               | 0.83 |

Logistic Regression outperforms SVM across all aggregate metrics.

---

### Class-wise Performance

- **Setosa**
  - Both models achieve perfect classification (1.00 precision, recall, F1-score)

- **Versicolor**
  - LR: Better precision (0.88 vs 0.70)
  - Both models have similar recall (0.78)

- **Virginica**
  - LR: Higher recall (0.91 vs 0.73)
  - SVM shows more missed classifications

---

### Confusion Matrix Analysis




Both models perfectly classify Setosa. However, confusion occurs between Versicolor and Virginica, with SVM showing a higher number of misclassifications.

---

### Discussion

The results indicate that Logistic Regression performs better in this experimental setup. This suggests that the dataset, when limited to the selected features, is approximately linearly separable.

SVM, while powerful, appears sensitive to feature representation and parameter configuration. Without kernel tuning or additional features, its performance is slightly lower.

---

## 6. Conclusion 

This study compared Logistic Regression and Support Vector Machine using the Iris dataset. Logistic Regression achieved higher accuracy and more balanced performance across classes.

The main limitation observed in both models is the confusion between Versicolor and Virginica, due to overlapping feature distributions.

Future work may include:
- Using all available features (including petal measurements)
- Hyperparameter tuning for SVM
- Evaluating additional models (e.g., ANN, Decision Trees)
- Applying cross-validation for more robust evaluation

---

## 7. References

1. R. A. Fisher, "The use of multiple measurements in taxonomic problems," *Annals of Eugenics*, 1936.  
2. T. Mitchell, *Machine Learning*, McGraw-Hill, 1997.  
3. C. Cortes and V. Vapnik, "Support-vector networks," *Machine Learning*, 1995.  
4. I. Goodfellow, Y. Bengio, and A. Courville, *Deep Learning*, MIT Press, 2016.  
