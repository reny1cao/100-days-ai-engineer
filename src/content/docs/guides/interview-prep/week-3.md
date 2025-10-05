---
title: Week 3 — System Design & Big Data Architecture
description: Distributed fundamentals, scalability, reliability, batch vs streaming, databases and messaging systems.
---

Focus

Learn scalable system design with distributed fundamentals and big data patterns (batch vs streaming), databases, and queues.

Learning Goals

- Break systems into components; design for scalability/reliability; understand replication, queues, consistency.
- Contrast batch pipelines vs real-time streaming; know tools (Spark, Kafka) at an architectural level.

Key Connections

DSA intuition (queues, trees) maps to real components (Kafka topics, indexes). Sets foundation for ML systems (Week 4) and data engineering (Week 6).

Study Resources

- System Design Basics: CAP, load balancer, CDN, caching, sharding, replication — https://www.techinterviewhandbook.org/
- Big Data Architecture: ETL pipeline design, scalability, schema evolution, retries (e.g., Spark/Kafka; see vendor blogs/Medium overviews).
- Reference Designs: URL shortener; streaming log processing; analytics platform (Grokking/ByteByteGo).

Practice & Activities

- Design Exercises: Whiteboard two systems (a web app and a data pipeline). Identify components, data flow, bottlenecks, failure handling.
- Big Data Focus: Sketch ETL with ingestion → raw store → Spark transforms → warehouse; decouple via Kafka; add checkpoints/retries.
- Component Deep-Dive: Spend a day on Kafka/Spark/Redis; write “when to use X vs Y”.

Checkpoint & Reflection

Do a 15-min mock design talk. Use a checklist (clients, LB, cache, DB, queues, consistency, monitoring). Connect to your experience (e.g., queue for buffering, partitioning for scale).

