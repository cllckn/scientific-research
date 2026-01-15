# Module 1: Foundations of Scientific Research in Information Technology and Experimental Research Design

---
<!-- TOC -->
* [Module 1: Foundations of Scientific Research in Information Technology and Experimental Research Design](#module-1-foundations-of-scientific-research-in-information-technology-and-experimental-research-design)
  * [Introduction to Scientific Research in Information Technology](#introduction-to-scientific-research-in-information-technology)
  * [Research Areas and Domains in Information Technology](#research-areas-and-domains-in-information-technology)
  * [Scientific Research vs. Software Development and Engineering](#scientific-research-vs-software-development-and-engineering)
  * [Scientific Research Lifecycle in Information Technology](#scientific-research-lifecycle-in-information-technology)
    * [Example Research Topic: Investigation of the Impact of Industrial Air Pollution on Plant Growth](#example-research-topic-investigation-of-the-impact-of-industrial-air-pollution-on-plant-growth)
  * [Research Problems, Research Questions, and Hypotheses](#research-problems-research-questions-and-hypotheses)
    * [Research Problem (Problem Identification & Motivation)](#research-problem-problem-identification--motivation)
    * [Research Questions (RQs)](#research-questions-rqs)
    * [Hypotheses](#hypotheses)
      * [How Hypotheses Are Used](#how-hypotheses-are-used)
      * [Example (RESTful Service Case Study)](#example-restful-service-case-study)
      * [Important Notes on Multiple Hypotheses](#important-notes-on-multiple-hypotheses)
      * [Interpreting Unexpected Results](#interpreting-unexpected-results)
    * [Relationship Between the Three (Research Problems, Research Questions, and Hypotheses)](#relationship-between-the-three-research-problems-research-questions-and-hypotheses)
    * [Additional Examples of Research Problems, Research Questions, and Hypotheses](#additional-examples-of-research-problems-research-questions-and-hypotheses)
      * [Example 1: Plant Growth Case Study](#example-1-plant-growth-case-study)
      * [Example 2: Machine Learning–Based Case Study](#example-2-machine-learningbased-case-study)
      * [Example 3: Internet of Things (IoT) Case Study](#example-3-internet-of-things-iot-case-study)
  * [Research Types in Information Technology](#research-types-in-information-technology)
    * [Research Types Based on Purpose](#research-types-based-on-purpose)
    * [Research Types Based on Methodology](#research-types-based-on-methodology)
    * [Research Types Based on Data Characteristics](#research-types-based-on-data-characteristics)
    * [Research Types Based on Research Strategy](#research-types-based-on-research-strategy)
  * [Experimental Research in Information Technology](#experimental-research-in-information-technology)
    * [Key Components of Experimental Research](#key-components-of-experimental-research)
    * [Types of Experimental Research in Information Technology](#types-of-experimental-research-in-information-technology)
  * [Reproducibility, Replicability, and Transparency in Scientific Research](#reproducibility-replicability-and-transparency-in-scientific-research)
* [Case Study](#case-study)
  * [Setting up the development environment for Case Study 1](#setting-up-the-development-environment-for-case-study-1)
    * [Node.js & npm Installation](#nodejs--npm-installation)
  * [REST architectural principles](#rest-architectural-principles)
    * [What is a RESTful API?](#what-is-a-restful-api)
    * [Route definition in Express.js](#route-definition-in-expressjs)
    * [HTTP Status Codes](#http-status-codes)
    * [Implementation of a simple RESTful API](#implementation-of-a-simple-restful-api)
    * [REST Clients - Testing REST api using cURL and HTTP Client](#rest-clients---testing-rest-api-using-curl-and-http-client)
      * [curl](#curl)
      * [HTTP Client](#http-client)
<!-- TOC -->

---

## Introduction to Scientific Research in Information Technology

Scientific research is a systematic and structured process of investigating phenomena in order to advance understanding 
through empirical evidence, logical reasoning, and reproducible methods.

![](../resources/images/st-what-is-scientific-research.png)

Advancing understanding is achieved by generating new knowledge or by validating&refining existing knowledge.

**Research Samples and Examples of Advancing IT Knowledge**

![](../resources/images/advancing-understanding-examples.png)



Scientific research in IT specifically focuses on the evaluation, comparison, 
and improvement of software systems, architectures, algorithms, data-driven models, and IT services through controlled 
experiments and performance analysis.

Unlike routine development or engineering tasks, scientific research aims to produce generalizable, 
verifiable, and reproducible findings that contribute to the academic and professional IT community.

**Key Characteristics of Scientific Research**

1. **Systematic** – Follows a planned and organized procedure, not random investigation.
2. **Structured** – Steps are logically arranged from problem definition to conclusion.
3. **Empirical** – Based on observations, measurements, or experiments.
4. **Objective** – Minimizes personal bias; conclusions rely on evidence.
5. **Reproducible** – Others can repeat the study and verify the results.
6. **Logical** – Uses reasoning and proper analysis to connect evidence to conclusions.
7. **Innovative** – Aims to generate new knowledge or improve existing understanding.

> Generating new knowledge is the most direct form of innovation, but validating, refining, or explaining existing
theories is also innovative when it advances understanding, applies knowledge in new contexts,
or reveals previously unknown insights.

---

## Research Areas and Domains in Information Technology

Information Technology research spans multiple applied domains, including but not limited to:

* Computer Science Core: Algorithms, data structures, computational theory, programming languages, and compilers.

* Artificial Intelligence & Machine Learning: Developing systems that learn, reason, and act intelligently (e.g., neural networks, NLP, computer vision, robotics).

* Data Science & Big Data: Techniques for data mining, analytics, visualization, and management at massive scales.

* Computer Systems & Networks: Operating systems, distributed systems, cloud/edge computing, network architectures, and Internet technologies.

* Cybersecurity & Privacy: Cryptography, network security, software security, privacy-enhancing technologies, and digital forensics.

* Human-Computer Interaction (HCI) & UX: Studying and designing interfaces for effective and satisfying interaction between humans and digital systems.

* Software Engineering: Researching processes, methodologies, tools, and metrics for efficient, reliable, and maintainable software development and evolution.

* Information Systems: Studying the design, implementation, management, and impact of IT systems within organizational and social contexts.

Research in IT is typically **applied and experimental**, focusing on system behavior, performance, scalability, reliability, and usability.

---

## Scientific Research vs. Software Development and Engineering

Although scientific research and software development and engineering both involve building IT systems, they differ fundamentally in their goals, processes, and outcomes:

- **Software development and engineering** aim to design, implement, deploy, and maintain functional, reliable, and usable IT systems that satisfy specified technical and business requirements.
- **Scientific research** aims to evaluate, compare, explain, or improve techniques, systems, and algorithms through controlled experiments and performance analysis.

Key distinctions include:
- Scientific research is **driven by research questions and hypotheses**; software development and engineering are **driven by functional and non-functional requirements**.
- Scientific research emphasizes **experimental evaluation and analytical reasoning**; software development and engineering **emphasize implementation, integration, and delivery**.
- Scientific research **outputs include research papers, experimental datasets, and evaluation results**; software development and engineering **outputs include deployable systems and operational artifacts**.
- Scientific research **requires reproducibility and transparency**; software development and engineering prioritize maintainability, scalability, and usability.

In scientific research, software systems are typically **research tools or experimental instruments** used to conduct experiments and generate empirical evidence, rather than the final goal.

---

## Scientific Research Lifecycle in Information Technology

The scientific research lifecycle is a structured process used to produce reliable and valid scientific knowledge in a systematic way.
It breaks scientific research into distinct stages, each with specific objectives, methods, and deliverables.

![Scientific Research Lifecycle](../resources/images/scientific-research-lifecycle.png)


**1. Problem Identification & Motivation**
- Identifying a meaningful gap, limitation, or unresolved question
- Establishing practical/theoretical significance ("Why does this matter?")
- Defining scope and boundaries of the research

**2. Comprehensive Literature Review**
- Systematic study of existing work (academic and professional)
- Understanding state-of-the-art methods, findings, and limitations
- Identifying theoretical frameworks and avoiding reinvention
- Synthesizing knowledge to precisely position your contribution

**3. Research Objectives & Questions &  Hypotheses**
- Deriving specific, measurable research objectives from the problem
- Formulating clear research questions (RQs) or testable hypotheses
- Aligning with identified gap and ensuring feasibility

**4. Research Methodology Design**
- Selecting appropriate research paradigm:
  - Empirical/Experimental
  - Theoretical
  - Simulation-based
  - Case Study 
  - Design Science
  - Mixed Methods
- Designing detailed procedures: variables, datasets, tools, metrics
- Planning for validity, reliability, and ethical considerations

**5. Implementation & Data Collection**
- Developing prototypes, algorithms, or experimental setups
- Conducting experiments, simulations, surveys, or observations
- Systematically gathering and documenting data
- Ensuring reproducibility through detailed logging

**6. Data Analysis & Interpretation**
- Applying appropriate statistical or qualitative analysis methods
- Interpreting results in context of research questions
- Drawing evidence-based conclusions
- Addressing limitations and alternative explanations

**7. Dissemination & Peer Review**
- Communicating findings through papers, theses, reports, presentations
- Submitting to peer-reviewed venues (conferences, journals)
- Responding to critique and revising work based on feedback
- Sharing artifacts (code, data) for reproducibility

**8. Iteration & Future Research**
- Reflecting on limitations and unanswered questions
- Using feedback to refine research direction
- Identifying new problems emerging from findings
- Initiating next research cycle


### Example Research Topic: Investigation of the Impact of Industrial Air Pollution on Plant Growth

**1. Problem Identification & Motivation(Research Problem)**
- Observation: Plants near factories appear to grow poorly. Local farmers report decreasing crop productivity over the past 5 years.
- Motivation: Determine if industrial pollution impacts plant health and growth.

**2. Comprehensive Literature Review**
- Study existing research on air pollution and plant growth.
- Identify mechanisms by which smoke or pollutants affect plant physiology.
- Avoid duplication by noting previous experimental designs and findings.

**3. Research Objectives & Research Questions &  Hypotheses**
- Objective: Investigate the effect of factory smoke on plant growth.
- Research Question (RQ): Does exposure to factory smoke reduce plant growth compared to a clean environment?
- Hypothesis: Plants exposed to smoke grow less than those in a clean environment.

**4. Research Methodology Design**
- Research Paradigm: Empirical/Experimental study.
- Procedure: Grow two sets of plants under controlled conditions — one exposed to smoke, one in clean air.
- Variables:
  - Independent variable: Exposure to smoke (yes/no)
  - Dependent variables: Plant height, leaf color
  - Controlled variables: Soil type, water, sunlight, plant species
- Ensure validity, reproducibility, and ethical care of plants.

**5. Implementation & Data Collection**
- Set up controlled growth environments for smoke-exposed and clean-air plants.
- Grow plants over a defined period.
- Record measurements regularly (height, leaf color, health indicators).

**6. Data Analysis & Interpretation**
- Compare average height and leaf color between the two groups.
- Use statistical methods to determine if differences are significant.
- Interpret results in the context of the research question and hypothesis.

**7. Dissemination & Peer Review**
- Prepare a research report or paper describing methods, data, and findings.
- Submit to a peer-reviewed environmental science journal.
- Present findings at a relevant conference or seminar.

**8. Iteration & Future Research**
- Reflect on limitations (e.g., small sample size, specific plant species).
- Suggest further studies on different plants, pollution types, or exposure durations.
- Use findings to inform environmental policy or future experimental designs.

---


## Research Problems, Research Questions, and Hypotheses

This subsection explains how a scientific investigation is formally defined before selecting a research type or methodology.  
It also highlights the **iterative nature** of problem formulation in scientific research.

---

### Research Problem (Problem Identification & Motivation)

A **research problem** is a clearly stated issue, gap, or limitation in existing knowledge or 
practice that requires systematic investigation.

- Often originates from **observations**, practical experience, or system behavior
- **Refined through literature review** to ensure relevance, originality, and scientific value
- May be updated after studying the state of the art
- Broad in scope but clearly motivated

*Example (RESTful Service Case Study):*  
Initial observation: RESTful services experience performance degradation under load.  
Refined research problem (after literature review):  
The performance impact of different database backends on RESTful services under high concurrency is not sufficiently 
quantified.

---

### Research Questions (RQs)

**Research questions** refine the research problem into specific, focused questions that guide the investigation.

- Clear, precise, and answerable
- Derived from the refined research problem
- Do not assume outcomes

*Examples:*
- How does database choice affect response time in a RESTful service?
- How does throughput change as concurrent user load increases?

---

### Hypotheses

A **hypothesis** is a testable, evidence-based statement that predicts an expected outcome. 
In scientific research, hypotheses are formally represented as:

- **H₀ (Null Hypothesis):** Assumes no effect, no difference, or no relationship between variables. It represents the default assumption to be tested.
- **H₁ (Alternative Hypothesis):** Represents a specific expected effect or difference that the researcher aims to find evidence for.

In most research studies, there can be **multiple hypotheses**, each corresponding to a different research question or aspect of the problem. Each alternative hypothesis has a corresponding null hypothesis, forming a testable pair.

---

#### How Hypotheses Are Used

- Statistical tests evaluate **H₀** using collected experimental data.
- If the evidence is strong enough (e.g., p-value < 0.05), **H₀ is rejected**, providing support for **H₁**.
- Scientific experiments do **not prove H₁ directly**; they test whether there is enough evidence to reject H₀.

> Supporting the null hypothesis is scientifically meaningful, as it provides evidence-based confirmation that an assumed effect or difference does not occur under the tested conditions, contributing to reliable and reproducible knowledge.

> **Key Teaching Insight:** Each expected effect in a study should have its own H₀/H₁ pair to ensure clarity, testability, and interpretability.

---

#### Example (RESTful Service Case Study)

- **H₀₁ / H₁₁ (Latency):**
  - H₀₁: Database type has no effect on average response time.
  - H₁₁: An in-memory database will exhibit lower average latency than PostgreSQL under high load.

- **H₀₂ / H₁₂ (Throughput):**
  - H₀₂: Database type has no effect on throughput.
  - H₁₂: Throughput will be higher for the in-memory database configuration.

- **H₀₃ / H₁₃ (Concurrency Effect):**
  - H₀₃: Concurrency level does not influence performance differences between databases.
  - H₁₃: Performance differences increase as concurrent load increases.

---

#### Important Notes on Multiple Hypotheses

- A study may include **multiple null hypotheses (H₀₁, H₀₂, …)** if a single H₀ is insufficient for all alternative expectations.
- Each H₀ is tested independently against its corresponding Hᵢ (H₁, H₂, …).
- Multiple hypotheses require careful design to avoid false positives due to multiple testing.

**One-sentence summary:**
> A study may include multiple H₀/H₁ pairs, each aligned with a specific research question, to rigorously and transparently test all expected effects.


---

#### Interpreting Unexpected Results

If experimental results **do not support the expected alternative hypothesis**:

**Example: Assume that PostgreSQL shows lower latency than the in-memory database.**


**Step 1: Evaluate H₀₁**
- **H₀₁ (Null Hypothesis):** “Database type has no effect on average response time.”
- Use statistical tests (e.g., t-test) to determine if the difference in latency is statistically significant.

**Step 2: Compare with H₁₁**
- **H₁₁ (Alternative Hypothesis):** “In-memory database will exhibit lower latency than PostgreSQL under high load.”

**Step 3: Interpretation**
- If the data shows PostgreSQL has lower latency, the evidence does **not support H₁₁**.
- Depending on the statistical test:
  - H₀₁ is **not rejected** if the difference is not statistically significant.
  - If the difference is significant but in the **opposite direction**, H₀₁ is technically rejected, but H₁₁ is **not supported**.

**Step 4: Scientific Conclusion**
- H₁₁ is **rejected**, because the expected effect (in-memory faster than PostgreSQL) was not observed.
- Report results honestly:
  > “Contrary to expectations, PostgreSQL exhibited lower latency than the in-memory database under high load.”

**Step 5: Insights**
- The outcome is still scientifically valuable:
  - Reveals hidden performance factors (e.g., caching, connection handling, query optimization)
  - Can lead to **new hypotheses** or further investigation
  - Demonstrates that hypotheses can be wrong — yet the experiment still provides **validated insight**


**Scientific Insight:**
> Hypothesis rejection does **not indicate failure**. It provides **validated evidence about the system’s behavior**, 
> reveals hidden factors, and may lead to new research questions.

---

### Relationship Between the Three (Research Problems, Research Questions, and Hypotheses)

- **Observation** triggers inquiry
- **Research problem** defines *what and why*
- **Research questions** define *what to ask*
- **Hypotheses** define *what is expected and tested*

**Key Insight:**
> Research problems are not fixed; they are often **refined through literature review**, reflecting the iterative nature of scientific research in Information Technology.
> Changes in the research problem require corresponding updates to research questions and hypotheses to maintain scientific coherence(logical alignment and consistency between them) and methodological alignment.

---



### Additional Examples of Research Problems, Research Questions, and Hypotheses

---

#### Example 1: Plant Growth Case Study

**Research Problem:**  
The effect of air pollution on plant growth is not clearly quantified.

**Research Questions:**
- Does exposure to factory smoke affect plant height?
- Does pollution reduce leaf count or biomass?

**Hypotheses:**
- Plants exposed to factory smoke will grow shorter than plants grown in clean air.
- Polluted environments will result in lower leaf counts.

---

#### Example 2: Machine Learning–Based Case Study

**Research Problem:**  
The comparative performance of different classification algorithms on structured datasets is not fully understood.

**Research Questions:**
- How does algorithm choice affect classification accuracy?
- Does feature normalization improve model performance?

**Hypotheses:**
- Support Vector Machines will achieve higher classification accuracy than logistic regression on the Iris dataset.
- Feature normalization will improve the F1-score of both models.

---

#### Example 3: Internet of Things (IoT) Case Study

**Research Problem:**  
Energy consumption behavior of IoT devices under different communication protocols is not well characterized.

**Research Questions:**
- How does protocol choice affect battery lifetime?
- Does transmission frequency impact energy usage?

**Hypotheses:**
- IoT devices using MQTT will consume less energy than those using HTTP.
- Increasing transmission frequency will significantly reduce battery life.

---

## Research Types in Information Technology

Scientific research in IT can be classified along several dimensions:

### Research Types Based on Purpose
- **Basic (Fundamental) Research:** 
  - Generates new theoretical knowledge without immediate application.
  - Less common in IT compared to applied research.
  - Example: Studying theoretical limits of network protocols.
- **Applied Research:** 
  - Solves practical, real-world IT problems.
  - Very common in Information Technology research.
  - Example: Improving performance of a RESTful service architecture (using replica set).
- **Developmental Research:** 
  - Designs or improves systems, tools, or frameworks.
  - Often overlaps with applied research.
  - Example: Developing a new monitoring framework for distributed systems.

### Research Types Based on Methodology
- **Experimental Research:** 
  - Involves controlled experiments to test hypotheses.
  - Manipulates independent variables and measures dependent variables.
  - Example: Measuring API response time under varying loads.
- **Empirical Research:** 
  - Based on observed and measured data.
  - Example: Evaluating multiple ML models using benchmark datasets.
- **Design Science Research:** 
  - Focuses on building and evaluating IT artifacts.
  - Combines construction and evaluation.
  - Example: Designing a new caching mechanism and evaluating its performance.
- **Non-Experimental Research:**
  - Observes systems without controlled manipulation.
  - Example: Analyzing real-world server logs to identify usage patterns.

### Research Types Based on Data Characteristics
- **Quantitative Research:** 
  - Uses numerical data and statistical analysis.
  - Dominant in IT research.
  - Example: Accuracy, throughput, latency, etc. measurements.
- **Qualitative Research:** 
  - Uses non-numerical data such as user feedback and observations.
  - Less common but relevant in HCI and usability research.
  - Example: User interviews for interface usability evaluation.
- **Mixed-Methods Research:** 
  - Combines quantitative and qualitative approaches.
  - Measuring system performance and collecting user feedback.

### Research Types Based on Research Strategy
- **Case Study Research:** 
  - In-depth analysis of a specific system or scenario.
  - Widely used in IT.
  - Example: Detailed evaluation of a microservice architecture.
- **Survey Research:** 
  - Data collection from a large population.
  - Often used for technology adoption studies.
  - Example: Survey on cloud adoption challenges.
- **Benchmarking Research:** 
  - Comparison using standard datasets or workloads.
  - Example: Comparing ML classifiers using the Iris dataset.
- **Comparative Research:** 
  - Evaluation of multiple approaches under similar conditions.
  - Example: Comparing relational vs noSQL databases.

---

## Experimental Research in Information Technology

Experimental research in Information Technology involves conducting controlled experiments on systems, algorithms, or 
configurations to observe and measure their behavior. These experiments are designed to test hypotheses by 
manipulating independent variables and measuring the resulting effects on dependent variables.

![Experimental Research in Information Technology](../resources/images/experimental-research.png)
### Key Components of Experimental Research

- **Hypothesis / Research Question (RQ)**  
  A clear, testable statement or question that guides the experiment.  
  *Example:* 
  - "The Quicksort algorithm performs better than Bubble Sort as the number of elements increases."
  - "Algorithm A will exhibit lower latency than Algorithm B under workload X."
  - "A RESTful API using an in-memory database will have lower response latency than one using PostgreSQL under high load."
  - "Support Vector Machines may achieve higher classification accuracy than logistic regression on the Iris dataset 
  because SVMs can model more complex decision boundaries."

- **Variables**
  - **Independent variables:** Factors deliberately manipulated by the researcher.  
    *Example:* Algorithm type, workload size, UI layout.
  - **Dependent variables:** Outcomes that are measured.  
    *Example:* Latency, accuracy, throughput, user task completion time.
  - **Controlled variables:** Factors kept constant to ensure fairness and validity.  
    *Example:* Hardware, software version, dataset, network conditions.

- **Experimental Design**  
  The structured plan for conducting the experiment, including:
  - **Subjects:** Datasets, system configurations, network traces, or human participants.
  - **Treatments:** Different algorithms, architectures, interface designs, or protocols.
  - **Control groups or baselines:** Reference configurations used for comparison.  
    *Example:* Evaluating two security protocols using the same dataset and network setup.

- **Measurement and Instruments**  
  Tools, frameworks, and metrics used to collect data.  
  *Examples:*
  - Runtime, memory usage, throughput
  - Accuracy, precision, recall, F1-score
  - User error rate, task completion time
  - Number of detected security vulnerabilities

- **Data Analysis & Conclusion**  
  Interpretation of collected data to identify patterns, differences, and significance, leading to acceptance or 
rejection of hypotheses and validated insights.  
  *Examples:*
  - Descriptive statistics and visualizations (Mean, Median, Min/Max, Standard deviation, Percentiles) to summarize performance metrics and trends.
  - Statistical tests (e.g., t-test) to determine whether observed differences are significant.
  - Qualitative analysis for user feedback (Interviews, Open-ended survey responses, Observation notes) to interpret usability or behavior.
  - Drawing conclusions and validating results by confirming whether hypotheses are supported and findings are reproducible.
    - If the hypothesis is **supported**, the result becomes a **validated insight** — reliable knowledge confirmed by data.
    - If the hypothesis is **not supported**, the finding still provides evidence, helping refine future research.

---

### Types of Experimental Research in Information Technology

- **Controlled Experiments (Benchmarks)**  
  Experiments conducted in a controlled laboratory environment to compare systems or algorithms.  
  *Example:* Benchmarking database performance under identical workloads.

- **Simulation and Modeling**  
  Using computational models to study complex or large-scale systems.  
  *Example:* Simulating network traffic using a network simulator to evaluate routing protocols.

- **Case Study–Based Experiments**  
  In-depth experimental investigation of a system or method in a real-world context.  
  *Example:* Evaluating the performance and scalability of a RESTful API by deploying it in a real organizational environment and measuring response time and throughput under real workloads.

- **Human-Centered Experiments (Common in HCI)**  
  Experiments involving human participants to evaluate usability, interaction, or user experience.  
  *Example:* A/B testing two user interface designs to measure task completion time and error rates.
  Two versions of a web form are shown to different user groups. Version A uses a single-page form, while Version B uses a multi-step form. Completion time and error rates are compared to determine which design performs better.

---

## Reproducibility, Replicability, and Transparency in Scientific Research

- **Reproducibility (same data, same code):**  
  The ability to obtain the same results using the original data and analysis methods. This is a minimum standard in scientific research.
  Many IT-related fields, including machine learning and data science, face reproducibility challenges where published 
  results cannot be reliably reproduced, undermining scientific progress.

- **Replicability (new data, same method):**  
  The ability of independent researchers to achieve consistent results by applying the same methodology to new data or 
- in different contexts, strengthening the validity of findings.

- **Transparency Practices in Scientific Research:**
  - **Open Data:** Sharing de-identified datasets used in experiments.
  - **Open Source Code:** Publishing full source code and analysis scripts.
  - **Detailed Methodology:** Clearly documenting experimental design, parameters, and hardware/software environments.
  - **Open Access:** Making research outputs freely available.
  - **Artifact Evaluation:** Enabling reviewers to verify claims using submitted code and data.

Adhering to these principles increases the credibility, reliability, and scientific value of IT research.

---

# Case Study

## Setting up the development environment for Case Study 1

### Node.js & npm Installation

**Setting Up the Development Environment**


* Download Node.js from here (https://nodejs.org/en/download) and install it properly.

* Set up Intellij for Node.js based development (or install WebStorm)
  - IntelliJ IDEA -> Preferences -> Plugins -> Node.js (OSX, Linux)
  - IntelliJ IDEA -> File -> Settings -> Plugins -> Node.js (Windows)

* Initialize a new Node.js project
  - IntelliJ IDEA -> File -> New -> Project -> Empty Project (Give the project an appropriate name.)
  - Open the terminal in IntelliJ
  - npm init -y
  - Make a /src folder for the source code of the project

* Make a hello-world.js file and write the following code:
  - console.log('Hello world.');

* Run the app:
  - node hello-world.js

## REST architectural principles

### What is a RESTful API?

REST (Representational State Transfer) is an architectural style (or a set of principles) for designing networked applications.

RESTful refers to web services that adhere to the principles of REST (Representational State Transfer).

RESTful is an approach for building scalable, stateless web APIs that use standard HTTP methods and principles.


**Key Characteristics**

1. **HTTP Methods**: RESTful APIs use standard HTTP methods to perform operations on resources:

   | **HTTP Method** | **Usage** |
      |---------------|---------|
   | `GET`        | Retrieve resource (Read) |
   | `POST`       | Add new resource (Insert) |
   | `PUT`        | Update existing resource (Replace) |
   | `PATCH`      | Update a specific part of resource (Modify) |
   | `DELETE`     | Remove resource |

2. **Resource-Based**: RESTful APIs use resources, which are identified by URLs.
   A resource could be a user, a product, or a function to control a heating system.

3. **JSON or XML**: Data is typically exchanged in JSON or XML format, with JSON being more common due to its
   simplicity and ease of use.

4. **Stateless**: The server does not store any client context between requests.

**Example Endpoints**

- **GET /users**: Retrieve a list of users.
- **POST /users**: Add a new user.
- **GET /users/{id}**: Retrieve a specific user by ID.
- **PUT /users/{id}**: Replaces (or fully updates) the user representation.
- **DELETE /users/{id}**: Delete a specific user by ID.
- **GET /heating-system/state**: Retrieve the current status of the heating system.
- **PUT /heating-system/state {"power":"on", "temperature":"22"}** : Full state replacement
- **PATCH /heating-system/state {"power":"off"}**: Partially update

***In RESTful APIs, a URI (path) must identify a resource, while the HTTP method defines the action performed on that resource.***


### Route definition in Express.js

A **route** in Express.js defines an endpoint where clients send requests to interact with the service.

Each route consists of:

1. **An HTTP method** (GET, POST, etc.)
2. **A URL pattern** (e.g., `/api/customers/:id`)
3. **A callback function / route handler ** to handle the request

Example of a simple route in Express.js:

**Code Example**

```javascript
app.get("/api/customers", (req, res) => {
    res.json({ message: "List of customers" });
});
```



### HTTP Status Codes
HTTP Status Codes are 3-digit numbers returned by web servers to indicate the status of a requested HTTP operation
(successful, failed, not found, etc.).

Here are some common status codes and their meanings:

| **Status Code**       | **Meaning**                          |
|------------------------|--------------------------------------|
| **200 OK**             | The request was successful.          |
| **201 Created**        | The resource was created successfully.|
| **400 Bad Request**    | The client sent an invalid request.  |
| **401 Unauthorized**   | Authentication is required.          |
| **403 Forbidden**      | Access to the resource is denied.    |
| **404 Not Found**      | The requested resource does not exist.|
| **500 Internal Server Error** | A server-side error occurred.     |

---

### Implementation of a simple RESTful API

**Code Example: /part1/server.js**

```javascript
// ───────────────────────────────────────────────────────────────
// Import Required Modules
// ───────────────────────────────────────────────────────────────
const express = require("express"); // Import the Express.js framework

// ───────────────────────────────────────────────────────────────
// Configuration & Constants
// ───────────────────────────────────────────────────────────────
const app = express(); // Initialize an Express application
const PORT = 3000; // Define the port number where the server will listen

// ───────────────────────────────────────────────────────────────
// Middleware: JSON Parser
// ───────────────────────────────────────────────────────────────
// Middleware to parse JSON request bodies
app.use(express.json());


// ───────────────────────────────────────────────────────────────
// In-memory database: JSON array for products
// ───────────────────────────────────────────────────────────────
let products = [
  { id: 1, name: "SSD", price: 999.99 },
  { id: 2, name: "RAM", price: 499.99 },
];

// ───────────────────────────────────────────────────────────────
// Define Routes
// ───────────────────────────────────────────────────────────────
// Routes are the connection points (end points - addresses) in a web service where clients send requests to interact with the service.
// GET all products
app.get("/api/products", (req, res) => {
  res.json(products); // Respond with the list of all products
});

// GET a single product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id)); // Find the product by ID
  if (!product) return res.status(404).json({ error: "Product not found" }); // If not found, respond with 404
  res.json(product); // Respond with the found product
});

// POST - Add a new product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body; // Extract name and price from the request body
  if (!name || !price) return res.status(400).json({ error: "Invalid input" }); // Validate input

  const newProduct = { id: products.length + 1, name, price }; // Add a new product with a unique ID
  products.push(newProduct); // Add the new product to the list
  res.status(201).json(newProduct); // Respond with the added product
});


// PUT - Replace a Product Record (full replacement)
app.put("/api/products/:id", (req, res) => {
  // 1. Destructure and extract all fields from the request body.
  // Assuming 'name', 'price' are the mutable fields.
  const { name, price } = req.body;

  // 2. Validate the Request Body (Required for PUT)
  // Check if all required fields are present.
  // Note: Unlike the original code, we do NOT use '|| product.name'
  // because PUT must overwrite all fields, or fail.
  if (!name || price == null ) {
    return res.status(400).json({
      error: "PUT /products requires ALL mutable fields (name, price) for full replacement."
    });
  }

  // 3. Find the Product
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  // 4. Update/Replace: Directly assign ALL new values.
  product.name = name;
  product.price = price;

  // 5. Respond with the fully updated product
  res.json(product);
});

// PATCH - Modify a product (partial or full replacement)
app.patch("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id)); // Find the product by ID
  if (!product) return res.status(404).json({ error: "Product not found" }); // If not found, respond with 404

  const { name, price } = req.body; // Extract name and price from the request body
  product.name = name || product.name; // Update the product name if provided
  product.price = price || product.price; // Update the product price if provided
  res.json(product); // Respond with the updated product
});

// DELETE - Remove a product
app.delete("/api/products/:id", (req, res) => {
  const productIdToDelete = parseInt(req.params.id);

  // 1. Store the initial count of products
  const initialLength = products.length;

  // 2. Filter the array, creating a new array without the specified product ID
  products = products.filter((p) => p.id !== productIdToDelete);

  // 3. Store the final count of products
  const finalLength = products.length;

  if (finalLength < initialLength) {
    // The product was found and successfully deleted (the array length decreased).

    // REST Best Practice: 204 No Content for a successful DELETE with no response body.
    res.status(204).end();
  } else {
    // The product was NOT found (the array length remained the same).

    // REST Best Practice: 404 Not Found indicates the resource doesn't exist.
    res.status(404).json({
      error: `Product with ID ${productIdToDelete} not found.`
    });
  }
});

// ───────────────────────────────────────────────────────────────
// Start Express HTTP Server
// ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

```

**Endpoints (Routes) of the developed API**

        GET http://localhost:3000/api/products

        GET http://localhost:3000/api/products/1

        POST http://localhost:3000/api/products
        Content-Type: application/json
        {
        "name": "HDD",
        "price": 299.99
        }

        PUT http://localhost:3000/api/products/2
        Content-Type: application/json
        {
        "name": "SSD",
        "price": 550.00
        }
    
        DELETE http://localhost:3000/api/products/1


### REST Clients - Testing REST api using cURL and HTTP Client


#### curl
    curl --version
    if not installed -> Download cURL from: https://curl.se/windows/


```sh
# Retrieves a list of all products from the database.

curl -X GET http://localhost:3000/api/products

# -i - Include response headers
# -X - Specify HTTP method
# -H - Add headers
# -d - Send data (POST/PUT)
# -u - Basic authentication
# -v - Verbose(detailed) output

---

# Fetches details of a specific product using its ID.

curl -iX GET http://localhost:3000/api/products/1

---

# Adds a new product to the database. The request body must contain name and price in JSON format.

curl -iX POST http://localhost:3000/api/products \
     -H "Content-Type: application/json" \
     -d '{"name": "HDMI Cable", "price": 50.05}'


---

# Updates the details of an existing product using its ID.

curl -X PUT http://localhost:3000/api/products/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Updated Product", "price": 1099.99}'


---

# Updates the details of an existing product using its ID. Any missing fields will retain their previous values.

curl -X PATCH http://localhost:3000/api/products/1 \
     -H "Content-Type: application/json" \
     -d '{"price": 1099.99}'
---

# Deletes a product from the database by specifying its ID.

curl -X DELETE http://localhost:3000/api/products/1


```

#### HTTP Client

**Code Example: /part1/restful-api-test.http**

```http request
###Retrieve all products
GET http://localhost:3000/api/products


### Find product by id
# curl -X GET http://localhost:3000/api/products
GET http://localhost:3000/api/products/2


### Find products by name
GET http://localhost:3000/api/products?name=SSD


###
POST http://localhost:3000/api/products
Content-Type: application/json

{"name": "SSD", "price": 500}

###
PUT http://localhost:3000/api/products/1
Content-Type: application/json

{"name": "Updated SSD", "price": 1099.99}


###
PATCH http://localhost:3000/api/products/1
Content-Type: application/json

{"price": 200}

###


# curl -X DELETE http://localhost:3000/api/products/1
DELETE http://localhost:3000/api/products/1


### Retrieve all products
GET http://localhost:4000/api/products


### Retrieve all products
#GET http://191.101.2.182:3005/api/products
GET http://localhost:3000/api/products

```
