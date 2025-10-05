---
title: Week 3 — System Design & Big Data Architecture
description: Distributed fundamentals, scalability, reliability, batch vs streaming, databases and messaging systems.
---

Focus

Learn scalable system design with distributed fundamentals and big data patterns (batch vs streaming), databases, and queues.

:::tip[Think in flows]
Sketch request/data flows before selecting technologies. Visualizing bottlenecks and replication paths helps justify design choices.
:::

Learning Goals

- Break systems into components; design for scalability/reliability; understand replication, queues, consistency.
- Contrast batch pipelines vs real-time streaming; know tools (Spark, Kafka) at an architectural level.

Key Connections

DSA intuition (queues, trees) maps to real components (Kafka topics, indexes). Sets foundation for ML systems (Week 4) and data engineering (Week 6).

Study Resources

| Topic | Resource | Notes |
| --- | --- | --- |
| Distributed basics | TIH system design section — https://www.techinterviewhandbook.org/ | CAP, load balancers, caching, sharding |
| Big data pipelines | Vendor/Medium write-ups on Spark/Kafka ETL | Focus on scalability, retries, schema evolution |
| Case studies | Grokking/ByteByteGo designs | URL shortener, streaming logs, analytics |

Practice & Activities

- Design Exercises: Whiteboard two systems (a web app and a data pipeline). Identify components, data flow, bottlenecks, failure handling.
- Big Data Focus: Sketch ETL with ingestion → raw store → Spark transforms → warehouse; decouple via Kafka; add checkpoints/retries.
- Component Deep-Dive: Spend a day on Kafka/Spark/Redis; write “when to use X vs Y”.

Checkpoint & Reflection

- Deliver a 15-minute mock system design.
- Verify you covered: clients, load balancer, cache, DB, queues, consistency, monitoring, observability.
- Document parallels with past projects (e.g., adding queues, partitioning data).
