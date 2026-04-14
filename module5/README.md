# Module 5: Research Impact, Responsible Research in IT, and Performance Analysis of a Big Data Analytics System

<!-- TOC -->
* [Module 5: Research Impact, Responsible Research in IT, and Performance Analysis of a Big Data Analytics System](#module-5-research-impact-responsible-research-in-it-and-performance-analysis-of-a-big-data-analytics-system)
  * [1. Research Impact and Evaluation Metrics](#1-research-impact-and-evaluation-metrics)
    * [What is Research Impact?](#what-is-research-impact)
    * [Key Metrics](#key-metrics)
      * [Citation Count](#citation-count)
      * [h-index](#h-index)
      * [i10-index](#i10-index)
    * [Metric Types](#metric-types)
      * [Article-level Metrics](#article-level-metrics)
      * [Author-level Metrics](#author-level-metrics)
    * [Journal and Conference Quality Indicators](#journal-and-conference-quality-indicators)
    * [Quartile Rankings](#quartile-rankings)
  * [2. Ethics and Responsible Research in IT](#2-ethics-and-responsible-research-in-it)
    * [Research Ethics and Integrity](#research-ethics-and-integrity)
    * [Plagiarism and Self-Plagiarism](#plagiarism-and-self-plagiarism)
      * [Plagiarism](#plagiarism)
      * [Self-Plagiarism](#self-plagiarism)
    * [Proper Citation and Attribution](#proper-citation-and-attribution)
    * [Responsible Use of AI Tools in Research](#responsible-use-of-ai-tools-in-research)
  * [3. Performance Analysis of a Big Data Analytics System](#3-performance-analysis-of-a-big-data-analytics-system)
    * [Overview](#overview)
    * [Key Components of a Big Data System](#key-components-of-a-big-data-system)
    * [Performance Metrics](#performance-metrics)
      * [Throughput](#throughput)
      * [Latency](#latency)
      * [Scalability](#scalability)
      * [Fault Tolerance](#fault-tolerance)
    * [Evaluation Approaches](#evaluation-approaches)
    * [Example Scenario](#example-scenario)
<!-- TOC -->

## 1. Research Impact and Evaluation Metrics

### What is Research Impact?
Research impact refers to the **influence or contribution** of a research work on academia, industry, or society. 
It is commonly assessed using **quantitative metrics**.

---

### Key Metrics

#### Citation Count
- Total number of times a publication is cited by others
- Indicates **visibility and influence**
- Limitation: does not reflect citation quality or context

---

#### h-index
- An author has index *h* if *h* papers each have at least *h* citations
- Balances **productivity and impact**
- Example: h = 10 → 10 papers cited at least 10 times

---

#### i10-index
- Number of publications with **at least 10 citations**
- Simple metric (used by Google Scholar)
- Limitation: less informative than h-index

---

### Metric Types

#### Article-level Metrics
- Focus on **individual papers**
- Examples: citation count, downloads

#### Author-level Metrics
- Focus on **researcher performance**
- Examples: h-index, i10-index

---

### Journal and Conference Quality Indicators

- Reflect the **prestige and impact** of publication venues
- Common indicators:
    - Impact Factor (IF)
    - SCImago Journal Rank (SJR)
    - Acceptance rate (for conferences)

---

### Quartile Rankings
- Journals are ranked into:
    - **Q1** → Top 25% (highest impact)
    - **Q2** → 25–50%
    - **Q3** → 50–75%
    - **Q4** → Bottom 25%
- Used to assess **publication quality**

---

## 2. Ethics and Responsible Research in IT

### Research Ethics and Integrity
- Ensuring **honesty, transparency, and accountability**
- Avoid fabrication, falsification, and manipulation of data

---

### Plagiarism and Self-Plagiarism

#### Plagiarism
- Using others’ work **without proper acknowledgment**

#### Self-Plagiarism
- Reusing one’s own published work **without citation**

---

### Proper Citation and Attribution
- Always give **credit to original sources**
- Use standardized formats (APA, IEEE, etc.)
- Supports:
    - Academic integrity
    - Traceability of knowledge

---

### Responsible Use of AI Tools in Research
- AI tools (e.g., code generation, text assistance) should be:
    - Used **transparently**
    - Properly acknowledged when required
- Avoid:
    - Blind trust in generated outputs
    - Generating misleading or fabricated results

---

## 3. Performance Analysis of a Big Data Analytics System

### Overview
Performance analysis evaluates how efficiently a system processes **large-scale data** under different conditions.

---

### Key Components of a Big Data System
- Data ingestion (e.g., streaming systems like Kafka)
- Data processing (batch or real-time analytics)
- Storage systems (distributed databases)
- Visualization / output layer

---

### Performance Metrics

#### Throughput
- Amount of data processed per unit time
- Higher is better

#### Latency
- Time taken to process a single request
- Lower is better

#### Scalability
- Ability to handle increasing data volume or users
- Horizontal (adding nodes) vs Vertical scaling

#### Fault Tolerance
- Ability to continue operation despite failures

---

### Evaluation Approaches
- Benchmarking with different data sizes
- Load testing (simulating multiple users)
- Monitoring system resources:
    - CPU
    - Memory
    - Network usage

---

### Example Scenario
- User inputs data via a web application
- Data is streamed using a message broker
- Analytics engine processes and predicts results
- Performance evaluated based on:
    - Response time
    - Accuracy of predictions
    - System stability under load

[For the example application](./case-study-3/README.md)


