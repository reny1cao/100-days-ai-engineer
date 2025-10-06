---
title: Sprint 3 — System Design & Big Data
description: Ten-day sprint to connect algorithms with scalable architecture patterns and data workflows.
---

Focus Areas

- Translate coding intuition into scalable system components (caching, sharding, messaging, storage).
- Practice writing design docs and whiteboarding key architecture questions.
- Anchor stories around reliability, scaling, and incident response.

Daily Plan

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | System design & big data | System design primer | 2 mediums to warm up | Capacity planning; SLOs/SLAs | — | Template: RFC/design doc | Story: designed a new service | — |
| 22 | System design & big data | Caching | LRU/LFU variants | Read-heavy system with Redis + TTL | — | Design: read-through cache for QPS spikes | Explain trade-offs crisply | — |
| 23 | System design & big data | Sharding & Consistent hashing | Implement hash ring toy | Shard/replication strategies | — | Design: multi-tenant keyspace | Story: scaling a service | — |
| 24 | System design & big data | Databases | SQL joins practice | SQL vs NoSQL, indexes, partitioning | — | Design: OLTP vs OLAP split | Story: schema change risk | — |
| 25 | System design & big data | Messaging | Producer/consumer problems | Kafka topics, partitions, ordering | — | Sketch: at-least-once vs exactly-once | Story: incident response | — |
| 26 | System design & big data | Batch ETL | SQL window functions | Spark partitioning, file formats | — | Design: daily ETL with backfills | Story: data freshness vs cost | — |
| 27 | System design & big data | Streaming | Concurrency practice | Stream time, watermarking, idempotency | — | Design: stream ETL with retries | Story: bursty load mitigation | — |
| 28 | System design & big data | Observability | Write structured logs | Metrics, logs, tracing, dashboards | — | Add tracing to CLI project | Story: monitoring saved us | — |
| 29 | System design & big data | Design exercise | 1 medium timed | Whiteboard a metrics aggregator | — | Write the RFC (v1) | Record 5-min design pitch | — |
| 30 | System design & big data | Milestone | Mock system design (45m) | Checklist: LB, cache, DB, queues, consistency | — | Publish RFC | Peer feedback debrief | Milestone 3 |

Notes

- Maintain a living RFC template; reuse it for Sprint 9 deep dives.
- Use daily stories to demonstrate impact beyond pure coding (availability, cost, reliability).
- Combine coding warm-ups with capstone design doc edits to stay grounded in both detail and big picture.
