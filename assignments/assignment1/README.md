# Assignment 1: Experimental Performance Evaluation of Database Backends for a RESTful Service

---

## 1. Assignment Scenario

This assignment investigates how the **choice of database backend**—an **in-memory database** (List(Array)-based 
structure or Redis) versus **MongoDB**—affects the **performance of a RESTful service**.

The RESTful service will be subjected to **controlled load testing** using a benchmarking tool (Artillery). 
Key **performance metrics** such as **latency** and **throughput** will be measured and analyzed. The experiment 
must identify the **saturation point** of the system, where increasing load no longer results in increased throughput 
and instead leads to rising latency and errors.

This assignment demonstrates the practical application of:
- Experimental design
- Hypothesis testing
- Performance evaluation in real-world Information Technology systems.

---

## 2. Objectives

- Design and conduct a controlled performance experiment
- Compare in-memory and MongoDB database backends
- Apply load testing to observe system behavior under stress
- Identify saturation points
- Analyze latency–throughput relationships
- Present findings in a **research article format**

---

## 3. Load Testing Requirement

- Load testing **must be applied**
- Request rate (**req/sec**) should be **systematically increased**
- The **saturation point** must be identified based on:
   - Throughput plateau or decline
   - Rapid increase in latency (p95 / p99)
   - Rising error rates

---

## 4. Expected Deliverable

Students must prepare a **research-style manuscript** written using a **Word template** (template link: `x.com`) and 
formatted according to academic conventions.

**Reference management must be done using Mendeley.**

---

## 5. Required Article Structure

### 5.1 Title

A concise and descriptive title reflecting the experimental comparison.

*Example:*  
**Performance Evaluation of In-Memory and MongoDB Backends for a RESTful Service under Load**

---

### 5.2 Abstract

A brief summary (150–250 words) covering:
- Problem statement
- Experimental approach
- Key metrics (latency, throughput)
- Main findings (including saturation point)
- Overall conclusion

---

### 5.3 Keywords

Include 4–6 relevant keywords.

*Example:*  
`RESTful services, Load testing, In-memory database, MongoDB, Latency, Throughput`

---

### 5.4 Introduction

- Background on RESTful services and database backends
- Importance of performance evaluation in IT systems
- Motivation for comparing in-memory databases and MongoDB
- Research objectives and contributions

---

### 5.5 Related Work / Literature Review

- Summary of existing studies on:
   - Database performance comparisons
   - In-memory databases vs disk-based databases
   - Load testing of web services
- Identify gaps that this study addresses
- All references must be managed using **Mendeley**

---

### 5.6 Methodology / Proposed System or Approach

- Description of the RESTful service architecture
- Overview of database backends:
   - In-memory (List structure or Redis)
   - MongoDB
- Explanation of experimental approach
- Identification of variables:
   - **Independent variables:** Database type, request rate (req/sec)
   - **Dependent variables:** Latency, throughput, error rate
   - **Controlled variables:** Hardware, dataset, API logic, network conditions

---

### 5.7 Experimental Setup and Evaluation Methodology

- Hardware and software environment
- Database configuration details
- Load testing tool and configuration
- Load profile (ramp-up strategy)
- Metrics collected:
   - Latency (p50, p95, p99)
   - Throughput (req/sec)
   - Error rate
- Method for identifying saturation point

---

### 5.8 Results and Discussion

- Presentation of results using tables and graphs
- Latency vs throughput analysis
- Identification and explanation of saturation point
- Comparison between in-memory and MongoDB performance
- Interpretation of observed behavior
- Discussion of trade-offs (speed vs persistence, scalability, reliability)

---

### 5.9 Conclusion and Future Work

- Summary of key findings
- Validation or rejection of hypotheses
- Practical implications for system design
- Limitations of the current study
- Suggestions for future work:
   - Larger datasets
   - Additional databases
   - Distributed deployments
   - Long-running endurance tests

---

### 5.10 References

- All references must be:
   - Managed using **Mendeley**
   - Properly cited in-text
   - Listed in a consistent academic format (e.g., IEEE or APA)


   
***
## Evaluation Criteria
***
The assignment will be evaluated based on two primary components:

1) Project Implementation: The quality and effectiveness of the project you implement.

2) Oral Exam Performance: Your performance during the oral exam, which will take place during your lab class in 
Week 8( the week starting March 2, 2026 ).

- **Correctness** (Does the application meet the requirements?).
- **Code Quality** (Readable, well-structured, meaningful names).
- **Manuscript** (Accurate and consistent with implementation).
- **Oral Defense** (Understanding and ability to explain design, manuscript, and code).

---

## Oral Exam Requirement

The oral exam is **mandatory** as part of the evaluation process. Students will be assessed 
based on their understanding of the material presented in their **reports** and **source code**.

### **During the Oral Exam:**
- Manuscript must be **open** and accessible.
- Source code must be **ready to show** in the IDE.
- Application must be **ready to run** for demonstration.

---

## Group Work
Students must complete the assignment **individually**.  


## Email Submission

Students are required to attach their manuscript as a PDF file and submit it via **email (cceken@ku.edu.kz)** before the oral examination.

* Email Subject: Use the following format for the subject line of your email:
    - sr-assignment1-StudentName
* File Naming: Ensure that the report file is named appropriately, using the following format:
    - StudentName-Report.pdf
---


## Late Submission and Oral Exam Policy
Students must submit their **reports and source code** before the **oral exam** (in **Week 8**), 
as the oral exam time is crucial for evaluation.

If students are unable to attend the scheduled oral exam, they will be allowed to defend their project one week 
later during lab class hours.

However, this late defense of the oral exam will result in a 20% penalty on the total grade.

**Please note that there will not be another opportunity to defend the project beyond this timeframe.**

---

### By adhering to these guidelines and policies, you will ensure that your submission is complete and meets the evaluation criteria. 

***Good luck with your projects and oral exams!***
