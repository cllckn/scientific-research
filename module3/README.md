# Module 3: Standard Structure of an Information Technology Research Manuscript, Experimental Implementation

<!-- TOC -->
* [Module 3: Standard Structure of an Information Technology Research Manuscript, Experimental Implementation](#module-3-standard-structure-of-an-information-technology-research-manuscript-experimental-implementation)
  * [1. Overview](#1-overview)
  * [2. Title](#2-title)
    * [Purpose](#purpose)
    * [Characteristics](#characteristics)
    * [Title Formulation Patterns](#title-formulation-patterns)
    * [Examples with Pattern Mapping](#examples-with-pattern-mapping)
  * [3. Abstract](#3-abstract)
    * [Purpose](#purpose-1)
    * [Structure of a Good Abstract](#structure-of-a-good-abstract)
    * [Best Practices](#best-practices)
    * [Case Study Example](#case-study-example)
  * [4. Keywords](#4-keywords)
    * [Purpose](#purpose-2)
    * [Guidelines](#guidelines)
    * [Case Study Example](#case-study-example-1)
  * [5. Introduction](#5-introduction)
    * [Purpose](#purpose-3)
    * [Typical Structure (Funnel Approach)](#typical-structure-funnel-approach)
    * [Case Study Example](#case-study-example-2)
  * [6. Related Work / Literature Review](#6-related-work--literature-review)
    * [Purpose](#purpose-4)
    * [Objectives](#objectives)
    * [Best Practices](#best-practices-1)
    * [Case Study Example](#case-study-example-3)
  * [7. Methodology / Proposed System or Approach](#7-methodology--proposed-system-or-approach)
    * [Purpose](#purpose-5)
    * [In IT Research, This May Include](#in-it-research-this-may-include)
    * [Requirements](#requirements)
    * [Case Study Example](#case-study-example-4)
  * [8. Experimental Setup and Evaluation Methodology](#8-experimental-setup-and-evaluation-methodology)
    * [Purpose](#purpose-6)
    * [Must Include](#must-include)
    * [Key Principle](#key-principle)
    * [Case Study Example](#case-study-example-5)
  * [9. Results and Discussion](#9-results-and-discussion)
    * [Purpose](#purpose-7)
    * [Components](#components)
    * [Discussion Should](#discussion-should)
    * [Case Study Example](#case-study-example-6)
  * [10. Conclusion and Future Work](#10-conclusion-and-future-work)
    * [Purpose](#purpose-8)
    * [Should Include](#should-include)
    * [Case Study Example](#case-study-example-7)
  * [11. References](#11-references)
    * [Purpose](#purpose-9)
    * [Requirements](#requirements-1)
    * [Tools](#tools)
    * [Best Practices](#best-practices-2)
    * [Case Study Example (IEEE Style)](#case-study-example-ieee-style)
  * [Logical Flow of an IT Research Manuscript](#logical-flow-of-an-it-research-manuscript)
<!-- TOC -->

---

## 1. Overview

A scientific research manuscript in Information Technology follows a structured format to ensure clarity, reproducibility, 
transparency, and logical presentation of contributions. This structure enables researchers, reviewers, and 
practitioners to understand the problem, methodology, experimental design, results, and scientific contribution.

The typical structure of an IT research manuscript includes:

| Section | Purpose |
|---------|---------|
| Title | Concise description of the research |
| Abstract | Summary of the entire paper |
| Keywords | Discoverability terms |
| Introduction | Problem motivation and context |
| Related Work | Literature positioning |
| Methodology | Technical approach description |
| Experimental Setup | Evaluation design and conditions |
| Results and Discussion | Findings and interpretation |
| Conclusion and Future Work | Summary and extensions |
| References | Citation sources |

---

## 2. Title

### Purpose
The title provides a concise and precise description of the research contribution.

### Characteristics
- 10-15 words recommended
- Includes key variables and subject of study
- Uses keywords that aid discoverability

### Title Formulation Patterns

In Information Systems, titles typically follow one of two patterns:

**Pattern 1:** [What] + [In Relation To What] + [How / Under What Conditions]

**Pattern 2:** [Artifact/Subject] + [Variable] + [Method/Context/Purpose/Approach]

### Examples with Pattern Mapping

**Example 1:**
> **Title:** Experimental Performance Evaluation of a RESTful Service with Different Database Backends Under High Load

**Pattern 1 Mapping:**
- What → RESTful Service
- In Relation To What → Different Database Backends
- How / Condition → Experimental Evaluation Under High Load

**Pattern 2 Mapping:**
- Artifact → RESTful Service
- Variable → Database Backends
- Method/Context → Experimental Performance Evaluation Under High Load

---

**Example 2:**
> **Title:** Impact of Database Backend Choice on RESTful Service Latency and Throughput: A Controlled High-Load Experiment

**Pattern 1 Mapping:**
- What → RESTful Service
- In Relation To What → Database Backend Choice
- How / Condition → Controlled Experiment Under High Load

**Pattern 2 Mapping:**
- Artifact → RESTful Service
- Variable → Database Backend Choice
- Method/Context → Controlled High-Load Experiment

---

**Example 3:**
> **Title:** Controlled Experimental Study of RESTful Service Performance Using In-Memory and PostgreSQL Backends Under High Concurrency

**Pattern 1 Mapping:**
- What → RESTful Service
- In Relation To What → In-Memory and PostgreSQL Backends
- How / Condition → Controlled Experimental Study Under High Concurrency

**Pattern 2 Mapping:**
- Artifact → RESTful Service
- Variable → In-Memory vs PostgreSQL Backends
- Method/Context → Controlled Experimental Study Under High Concurrency

---

**Example 4:**
> **Title:** Evaluating the Effect of Database Backend Selection on RESTful Service Performance Under High Load

**Pattern 1 Mapping:**
- What → RESTful Service
- In Relation To What → Database Backend Selection
- How / Condition → Empirical Evaluation Under High Load

**Pattern 2 Mapping:**
- Artifact → RESTful Service
- Variable → Database Backend Selection
- Method/Context → Empirical Evaluation Under High Load

---

**Example 5:**
> **Title:** Comparative Performance Analysis of RESTful Services with In-Memory and PostgreSQL Databases in High-Load Environments

**Pattern 1 Mapping:**
- What → RESTful Services
- In Relation To What → In-Memory and PostgreSQL Databases
- How / Condition → Comparative Analysis in High-Load Environments

**Pattern 2 Mapping:**
- Artifact → RESTful Services
- Variable → In-Memory vs PostgreSQL Databases
- Method/Context → Comparative Performance Analysis in High-Load Environments

---

## 3. Abstract

### Purpose
The abstract summarizes the entire paper in a single paragraph (typically 150-250 words).

### Structure of a Good Abstract
- Problem statement / Background
- Research objective
- Methodology
- Experimental setup
- Key results
- Main conclusion

### Best Practices
- Write last, after completing the manuscript
- Include quantitative results (specific numbers when possible)
- Maximum 250-300 words (journal-dependent)
- Avoid citations and undefined abbreviations

### Case Study Example

> **Background:** The choice of database backend significantly impacts the performance of RESTful services, yet limited empirical evidence exists comparing modern in-memory databases with traditional disk-based systems under controlled conditions.
>
> **Objective:** This study investigates whether replacing PostgreSQL with an in-memory database improves latency and throughput for RESTful services under identical workloads.
>
> **Method:** We deployed identical RESTful service instances with two database configurations: Treatment A (in-memory database) and Treatment B (PostgreSQL as baseline). Using Artillery as a load-testing tool, we generated controlled workloads and measured p50, p95, and p99 latency percentiles, throughput (requests/second), and error rates across multiple test runs.
>
> **Results:** The in-memory configuration demonstrated 45% lower p95 latency (12ms vs. 22ms) and 2.3× higher throughput (1,850 RPS vs. 804 RPS) compared to PostgreSQL under high load, with comparable error rates (<0.1%). Statistical analysis confirmed significance (p < 0.01).
>
> **Conclusion:** In-memory databases provide superior performance for high-throughput, low-latency requirements where data persistence is not the primary concern, offering actionable insights for system architects making technology choices.

---

## 4. Keywords

### Purpose
Keywords improve discoverability in digital libraries and indexing databases.

### Guidelines
- 4-6 keywords
- Specific technical terms
- Avoid overly general words

### Case Study Example
> RESTful API; Performance Evaluation; In-Memory Database; PostgreSQL; Load Testing; Database Comparison

---

## 5. Introduction

### Purpose
Introduces the research problem and motivates the study.

### Typical Structure (Funnel Approach)
1. **Hook:** Start with the broader importance of the topic
2. **Problem Statement:** Identify the specific gap or challenge
3. **Related Work Summary:** Briefly acknowledge what's known
4. **Research Gap:** Clearly state what's missing
5. **Objective/Purpose:** Present your study's aim
6. **Research Question & Hypotheses:** State formally
7. **Contribution:** List what the paper adds
8. **Roadmap:** Briefly outline paper structure

### Case Study Example

> Modern web applications increasingly rely on RESTful services as their architectural backbone [1, 2]. The performance of these services—particularly latency and throughput—directly impacts user experience and operational costs [3]. Among the many factors affecting service performance, database backend selection represents a critical architectural decision that system architects must navigate.
>
> Traditional disk-based relational databases like PostgreSQL have long served as the industry standard for data persistence [4]. However, the emergence of in-memory databases promises significant performance improvements by eliminating disk I/O bottlenecks [5]. While theoretical advantages are well-documented, limited empirical research directly compares these technologies under controlled, reproducible conditions with identical RESTful service implementations.
>
> This study addresses this gap through a controlled experiment comparing two database backends: an in-memory database (Treatment A) versus PostgreSQL (Treatment B, serving as baseline). We investigate whether, and to what extent, in-memory databases improve key performance metrics under identical workload conditions.
>
> **Research Question:** Does using an in-memory database result in lower latency and higher throughput for a RESTful service compared to PostgreSQL under the same workload?
>
> **Hypotheses:**
> - **H₁:** A RESTful service backed by an in-memory database will exhibit lower p95 latency and higher throughput than the same service backed by PostgreSQL under high load.
> - **H₀:** There is no statistically significant difference in performance between in-memory database and PostgreSQL backends.
>
> This research contributes: (1) empirical performance data comparing these technologies, (2) a reproducible benchmarking methodology for RESTful services, and (3) actionable insights for system architects facing database selection decisions.
>
> Section 2 reviews related work; Section 3 details our experimental methodology; Section 4 presents results; Section 5 discusses implications; Section 6 concludes with future work directions.

---

## 6. Related Work / Literature Review

### Purpose
Positions the research within existing scientific literature.

### Objectives
- Summarize relevant prior studies
- Compare methodologies and findings
- Identify research gaps
- Justify the novelty of the proposed work

### Best Practices
- Organize thematically, not chronologically
- Critically evaluate, don't just summarize
- Identify gaps your research fills
- Use recent sources (last 3-5 years for fast-moving fields)
- Show how your work builds on/diverges from existing research
- Include both supporting and contrasting studies
- Use reputable sources (journals, conferences)

### Case Study Example

> **2.1 Database Performance Benchmarking**
>
> Existing database benchmarking research has primarily focused on isolated database systems rather than integrated service architectures. Gray et al. [6] established foundational transaction processing benchmarks (TPC-C, TPC-H) that remain industry standards for database performance comparison. However, these benchmarks evaluate databases in isolation, without considering the overhead of RESTful service layers.
>
> **2.2 RESTful Service Performance Factors**
>
> Research by Fielding [7] and subsequent studies [8, 9] identified multiple factors affecting RESTful service performance, including serialization formats, payload sizes, and network latency. Chen et al. [10] demonstrated that database response time constitutes the primary bottleneck in typical service architectures, accounting for 60-75% of total request latency. This finding motivates our focus on database backend comparison.
>
> **2.3 In-Memory Database Studies**
>
> Studies by Plattner [11] and Zhang et al. [12] demonstrated theoretical performance advantages of in-memory databases, showing 10-100× speed improvements for specific query patterns. However, these studies used synthetic database workloads rather than realistic RESTful service patterns. More recently, Kumar and Singh [13] compared Redis (in-memory) with MySQL for a simple web application, finding 3× throughput improvement, but their study lacked controlled experimental conditions and did not report latency percentiles beyond averages.
>
> **2.4 Research Gap**
>
> Despite the growing adoption of both RESTful architectures and in-memory databases, no published study has provided a controlled, apples-to-apples comparison of identical RESTful services with different database backends under identical workload conditions. Existing research either isolates the database layer or fails to control for confounding variables. Our study addresses this gap by implementing identical service logic with only the database backend varying, measuring standardized performance metrics under controlled load.

---

## 7. Methodology / Proposed System or Approach

### Purpose
Describes how the research problem is addressed.

### In IT Research, This May Include
- System architecture
- Algorithm design
- RESTful service design
- Repository pattern implementation
- Data processing workflow
- Mathematical formulation (if applicable)

### Requirements
- Clear diagrams (architecture diagrams, flowcharts)
- Precise technical details
- Sufficient detail for reproducibility
- Justify design choices
- Identify variables clearly
- Explain treatment implementation
- Address validity threats

### Case Study Example

> **3.1 Experimental Design**
>
> This study employs a controlled comparative experimental design with two treatment conditions:
> - **Treatment A:** RESTful service with in-memory database backend
> - **Treatment B:** RESTful service with PostgreSQL backend (baseline)
>
> The independent variable is the database backend type. Dependent variables include latency percentiles (p50, p95, p99), throughput (requests per second), and error rate.
>
> **3.2 System Architecture**
>
> Both treatment conditions share identical service logic implemented as a Node.js RESTful API with the following endpoints:
> - `GET /users` - retrieve all users (read operation)
> - `GET /users/:id` - retrieve single user (read)
> - `POST /users` - create new user (write)
> - `PUT /users/:id` - update user (write)
> - `DELETE /users/:id` - delete user (write)
>
> The service connects to either (a) Redis (in-memory) or (b) PostgreSQL using appropriate drivers, with connection pooling configured identically (minimum 5, maximum 20 connections).
>
> **3.3 Database Configuration**
>
> *PostgreSQL Configuration (Treatment B/Baseline):*
> - Version 14.5
> - Configuration: default production settings
> - Storage: SSD-backed persistent volume
> - Buffer pool: 4GB (25% of available RAM)
>
> *In-Memory Database Configuration (Treatment A):*
> - Redis 7.0 (chosen for mature RESTful integration)
> - Configuration: default production settings
> - Persistence: disabled (pure in-memory operation)
> - Max memory: 4GB allocation
>
> **3.4 Data Model and Initial Population**
>
> Both databases implement an identical user schema (id, name, email, createdAt, updatedAt). Each database is pre-populated with 10,000 user records to ensure realistic query patterns before benchmarking begins.
>
> **3.5 Workload Design**
>
> The benchmark workload simulates a realistic read-heavy pattern (80% reads, 20% writes) based on industry observations [14]:
> - 40%: `GET /users` (list all - page size 20)
> - 40%: `GET /users/:id` (single record)
> - 10%: `POST /users` (create)
> - 5%: `PUT /users/:id` (update)
> - 5%: `DELETE /users/:id` (delete)
>
> **3.6 Threats to Validity**
>
> - *Internal validity:* We control for confounding by using identical hardware, identical service code, and randomized test order
> - *External validity:* Results may not generalize to different workload patterns (e.g., write-heavy), different data sizes, or different cloud environments
> - *Construct validity:* Multiple metrics (latency, throughput, errors) triangulate the "performance" construct

---

## 8. Experimental Setup and Evaluation Methodology

### Purpose
Explains how experiments were designed and conducted.

### Must Include
- Hardware and software environment
- Dataset description
- Performance metrics
- Hypotheses
- Controlled variables
- Number of repetitions
- Statistical testing method

### Key Principle
Provide enough detail for another researcher to replicate the experiment exactly.

### Case Study Example

> **4.1 Hardware Environment**
>
> All experiments were conducted on identical AWS EC2 instances:
> - **Service Host:** t3.medium (2 vCPU, 4GB RAM), Amazon Linux 2
> - **Database Hosts:** t3.medium (2 vCPU, 4GB RAM), Amazon Linux 2
> - **Load Generator:** c5.large (2 vCPU, 8GB RAM), Amazon Linux 2
>
> Instances were provisioned in the same availability zone to minimize network latency variability.
>
> **4.2 Software Stack**
>
> - RESTful Service: Node.js 18.12, Express 4.18
> - PostgreSQL: 14.5 with default configuration
> - Redis: 7.0 with default configuration (persistence disabled)
> - Load Testing: Artillery 2.0
> - Monitoring: Node exporter, Prometheus, Grafana
>
> **4.3 Load Generation Parameters**
>
> Artillery was configured with:
> - Ramp-up period: 60 seconds (gradually increasing load)
> - Sustained load: 300 seconds (5 minutes)
> - Target virtual users: 100 concurrent
> - Arrival rate: 100 new users/second
>
> **4.4 Experimental Procedure**
>
> For each treatment condition:
> 1. Clean provision of all instances
> 2. Database initialization and data population
> 3. Service deployment and warm-up (100 requests)
> 4. 5-minute stabilization period
> 5. Benchmark execution with metrics collection
> 6. Cool-down and log collection
> 7. Repeat 10 times per treatment (total 20 runs)
>
> **4.5 Metrics Collection**
>
> - **Latency:** Captured at p50, p95, p99 percentiles (milliseconds)
> - **Throughput:** Requests per second (RPS), averaged over 10-second windows
> - **Error rate:** Percentage of non-2xx responses
> - **Resource metrics:** CPU, memory, disk I/O (15-second sampling intervals)
>
> **4.6 Statistical Analysis**
>
> - Descriptive statistics (mean, median, SD) calculated for all metrics
> - Independent samples t-test for throughput comparison
> - Mann-Whitney U test for latency distributions (non-normal)
> - Significance threshold: α = 0.05
> - Effect size: Cohen's d for practical significance

---

## 9. Results and Discussion

### Purpose
Presents and interprets experimental findings.

### Components
- Tables and graphs
- Statistical outputs
- Comparison between approaches
- Interpretation of performance trade-offs

### Discussion Should
- Explain why results occurred
- Connect findings to hypotheses
- Compare results with related work
- Identify limitations
- Present results objectively before interpreting
- Report statistical significance and effect sizes
- Discuss unexpected findings
- Explain practical implications

### Case Study Example

> **5.1 Latency Results**
>
> Table 1 presents latency percentiles for both database backends across 10 benchmark runs.
>
> | Metric | PostgreSQL (ms) | In-Memory (ms) | Improvement |
> |--------|-----------------|----------------|-------------|
> | p50    | 8.3 (±1.2)      | 4.1 (±0.8)     | 50.6%       |
> | p95    | 22.4 (±3.1)     | 12.3 (±1.9)    | 45.1%       |
> | p99    | 45.7 (±5.8)     | 21.9 (±3.2)    | 52.1%       |
>
> The in-memory configuration demonstrated consistently lower latency across all percentiles. Mann-Whitney U tests confirmed significant differences for all three metrics (p < 0.001). The 95th percentile improvement (45%) is particularly relevant for service-level agreements, as it represents the experience of users at the tail of the distribution.
>
> **5.2 Throughput Results**
>
> Average throughput for PostgreSQL was 804 RPS (SD = 76), compared to 1,850 RPS (SD = 112) for the in-memory database—a 2.3× improvement. The independent samples t-test showed statistical significance (t(18) = 24.3, p < 0.001) with a very large effect size (Cohen's d = 10.8).
>
> **5.3 Error Rates**
>
> Both configurations maintained error rates below 0.1% (PostgreSQL: 0.08%, In-Memory: 0.03%). The difference was not statistically significant (p = 0.42), indicating that performance improvements did not come at the cost of reliability.
>
> **5.4 Resource Utilization**
>
> Despite higher throughput, the in-memory configuration showed lower CPU utilization (62% vs. 78% for PostgreSQL) and negligible I/O wait (0.5% vs. 15.3%). This aligns with expectations: eliminating disk I/O reduces both latency and CPU overhead from I/O scheduling.
>
> **5.5 Discussion**
>
> Our results support H₁ and reject H₀: the in-memory database provides significantly lower latency and higher throughput under identical workload conditions. These findings align with theoretical predictions [5, 11] but provide novel empirical evidence within a realistic RESTful service context.
>
> The magnitude of improvement (2.3× throughput, 45% lower p95 latency) exceeds some prior estimates [13], likely due to our controlled methodology isolating the database as the sole variable. The minimal difference in error rates demonstrates that performance gains do not compromise reliability.
>
> **5.6 Practical Implications**
>
> For system architects, these results suggest:
> 1. In-memory databases should be strongly considered for read-heavy RESTful services with strict latency requirements
> 2. The 2.3× throughput improvement could translate to significant infrastructure cost savings
> 3. The trade-off involves data durability—in-memory databases typically require complementary persistence strategies
>
> **5.7 Limitations**
>
> This study's limitations include:
> - Single workload pattern (80/20 read/write ratio)
> - Fixed data size (10,000 records)
> - Specific database products (Redis, PostgreSQL)
> - Cloud environment (AWS) may not generalize to on-premise

---

## 10. Conclusion and Future Work

### Purpose
Summarizes contributions and outlines research extensions.

### Should Include
- Restatement of the research objective
- Summary of main findings
- Confirmation or rejection of hypotheses
- Practical implications
- Limitations
- Suggestions for future research
- Avoid introducing new data or references

### Case Study Example

> **6.1 Conclusion**
>
> This study investigated whether the choice of database backend affects RESTful service performance through a controlled experiment comparing in-memory (Redis) and PostgreSQL backends under identical workload conditions. Our results demonstrate that the in-memory configuration achieved 45% lower p95 latency and 2.3× higher throughput while maintaining comparable error rates. These differences were statistically significant with large effect sizes.
>
> The findings confirm that in-memory databases offer substantial performance advantages for RESTful services, particularly in read-heavy scenarios where low latency and high throughput are prioritized over immediate data durability. This empirically validates the common industry practice of using in-memory caches or databases for performance-critical service tiers.
>
> **6.2 Contributions**
>
> This research contributes:
> 1. Reproducible benchmarking methodology for RESTful service database comparison
> 2. Empirical performance data quantifying the in-memory advantage
> 3. Practical guidance for system architects facing database selection decisions
>
> **6.3 Future Work**
>
> Several directions warrant further investigation:
> - **Workload variation:** Testing write-heavy patterns (20/80 read/write) and mixed transactional workloads
> - **Scale effects:** Evaluating performance with larger datasets (1M+ records) and varying database sizes
> - **Alternative technologies:** Comparing other in-memory options (Memcached, Hazelcast) and other disk-based databases (MySQL, MongoDB)
> - **Persistence impact:** Investigating the performance cost of enabling persistence features in in-memory databases
> - **Distributed deployments:** Evaluating performance in clustered configurations with network partitioning
> - **Cost modeling:** Developing frameworks to translate performance differences into infrastructure cost implications

---

## 11. References

### Purpose
Provides full citation of all referenced works.

### Requirements
- Follow a consistent citation style (IEEE, ACM, APA, etc.)
- Cite only credible scientific sources
- Ensure in-text citations match reference list
- Avoid plagiarism

### Tools
- Mendeley
- Zotero
- BibTeX with LaTeX
- Overleaf reference management

### Best Practices
- Use consistent citation style (IEEE, ACM, APA as required)
- Include DOIs when available
- Prioritize peer-reviewed sources
- Balance classic and recent citations
- Verify all citations are cited in text

### Case Study Example (IEEE Style)

> [1] R. T. Fielding and R. N. Taylor, "Principled design of the modern Web architecture," *ACM Transactions on Internet Technology*, vol. 2, no. 2, pp. 115-150, May 2002.
>
> [2] L. Richardson and S. Ruby, *RESTful Web Services*. Sebastopol, CA: O'Reilly Media, 2007.
>
> [3] D. F. García, J. García, J. Entrialgo, M. García, P. Valledor, R. García, and A. M. Campos, "A study of the effect of latency on user perception of web application performance," in *Proceedings of the 2018 IEEE/ACM International Conference on Utility and Cloud Computing*, 2018, pp. 123-132.
>
> [4] PostgreSQL Global Development Group, "PostgreSQL 14 Documentation," 2022. [Online]. Available: https://www.postgresql.org/docs/14/
>
> [5] H. Garcia-Molina and K. Salem, "Main memory database systems: An overview," *IEEE Transactions on Knowledge and Data Engineering*, vol. 4, no. 6, pp. 509-516, Dec. 1992.
>
> [6] J. Gray et al., "The benchmark handbook for database and transaction processing systems," Morgan Kaufmann Publishers, 1993.
>
> [7] R. T. Fielding, "Architectural styles and the design of network-based software architectures," Ph.D. dissertation, University of California, Irvine, 2000.
>
> [8] C. Pautasso, O. Zimmermann, and F. Leymann, "RESTful web services vs. 'big' web services: Making the right architectural decision," in *Proceedings of the 17th International Conference on World Wide Web*, 2008, pp. 805-814.
>
> [9] S. Tilkov, "RESTful Web Services vs. Web Services: Making the Right Architectural Decision," InfoQ, 2007.
>
> [10] Y. Chen, S. Iyer, X. Liu, D. Milojicic, and A. Sahai, "Translating service level objectives to lower level policies for multi-tier services," *Cluster Computing*, vol. 11, no. 3, pp. 299-311, 2008.
>
> [11] H. Plattner, "A common database approach for OLTP and OLAP using an in-memory column database," in *Proceedings of the 2009 ACM SIGMOD International Conference on Management of Data*, 2009, pp. 1-2.
>
> [12] H. Zhang, G. Chen, B. C. Ooi, K. L. Tan, and M. Zhang, "In-memory big data management and processing: A survey," *IEEE Transactions on Knowledge and Data Engineering*, vol. 27, no. 7, pp. 1920-1948, July 2015.
>
> [13] A. Kumar and P. Singh, "Performance comparison of MySQL and Redis as backend databases for REST APIs," *International Journal of Computer Applications*, vol. 175, no. 12, pp. 25-30, 2020.
>
> [14] R. Nishtala et al., "Scaling Memcache at Facebook," in *Proceedings of the 10th USENIX Symposium on Networked Systems Design and Implementation*, 2013, pp. 385-398.

---

## Logical Flow of an IT Research Manuscript

**Problem → Literature Gap → Proposed Method → Experimental Design → Results → Interpretation → Contribution**

This logical flow ensures that:
- The research problem is clearly established
- The gap in existing knowledge is identified
- The method addresses the gap
- The experimental design tests the hypothesis
- Results are objectively presented
- Interpretation connects findings back to the problem
- Contributions are clearly stated
