---
title: 第 7 冲刺 — AI 数据工程
description: 十天聚焦数据建模、质量、管道与治理，为 AI 系统打下数据基础。
---

重点摘要

- 构建可靠的批/流 ETL，确保特征质量与数据合规。
- 规划成本、容量与 SLO，将数据指标映射到业务影响。
- 生成可复用的 runbook、质量规则、成本仪表板等资产。

每日计划

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 61 | Data engineering for AI | Modeling & schemas | SQL modeling exercises | Star vs snowflake | Feature definitions | Schema doc | Story: model evolution | — |
| 62 | Data engineering for AI | Data quality | Expectation checks | Validation at ingest | Label quality basics | DQ rules library | Story: fixed bad data | — |
| 63 | Data engineering for AI | Batch ETL patterns | Airflow-style DAG (local) | Backfills, partitioning | Data drift basics | Batch pipeline template | Explain SLAs | — |
| 64 | Data engineering for AI | Streaming ETL | Idempotent consumers | Exactly-once strategies | Latency vs correctness | Stream pipeline template | Story: incident handling | — |
| 65 | Data engineering for AI | Feature store (concepts) | Offline/online parity tests | Materialized views | Feature freshness | Feature registry stub | ELI5: feature store | — |
| 66 | Data engineering for AI | Catalog & governance | Lineage metadata hooks | Access control basics | PII handling (concepts) | Data catalog doc | Story: auditability | — |
| 67 | Data engineering for AI | Cost & capacity | Profiling scripts | Batch size vs cost | Model cost budgets | Cost dashboard stub | Story: cost optimization | — |
| 68 | Data engineering for AI | Ops & reliability | Retry/backoff libs | On-call runbook | Monitoring signals | Runbook template | Story: improving SLOs | — |
| 69 | Data engineering for AI | Polish day | Refactor + tests | Resilience checklist | — | Docs + diagrams | Refine stories | — |
| 70 | Data engineering for AI | Milestone | Demo: batch + stream ETL | Explain choices | Data QA results | Ship “AI-ready ETL” | Peer debrief | Milestone 7 |

补充说明

- 将数据 SLA 与下游模型/Agent 的需求对齐，在面试中强调跨团队合作价值。
- 记录成本、质量、可靠性提升前后的对比，强化影响力表达。
