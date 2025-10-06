---
title: 第 3 冲刺 — 系统设计与大数据
description: 十天内把算法思维迁移到可扩展架构与数据工作流。
---

重点摘要

- 连接缓存、分片、消息队列、ETL 等核心组件与实际业务场景。
- 练习撰写设计文档与白板讲解，强调容量规划与可靠性。
- 用真实事故或扩展案例构建行为故事。

每日计划

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

补充说明

- 每天更新设计文档版本，记录假设与指标，方便后续冲刺复用。
- 故事情节可围绕“如何发现瓶颈、解决成本/可靠性问题”展开。
