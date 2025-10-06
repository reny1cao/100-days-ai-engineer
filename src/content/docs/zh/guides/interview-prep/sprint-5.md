---
title: 第 5 冲刺 — RAG 检索增强系统
description: 十天内从数据摄入到评估，打造可演示的 RAG 微服务。
---

重点摘要

- 设计稳健的摄入、嵌入、检索流水线，兼顾延迟与准确性。
- 建立评估指标与回归门禁，为后续 Agent/LLMOps 提供数据基础。
- 输出可 Demo 的 RAG 服务与清晰文档。

每日计划

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 41 | RAG | Embeddings & vector DBs | Cosine similarity lab | ANN vs exact search intuition | Embedding quality checkpoints | Pick a vector DB; scaffold repo | Explain “why RAG” | — |
| 42 | RAG | Chunking & ingestion | Chunkers: fixed vs semantic splits | Ingestion pipeline sketch | Metadata design | ETL for documents → vector DB | Story: data quality matters | — |
| 43 | RAG | Indexing & storage | Index maintenance scripts | Cold/warm/hot storage | Drift & re-index cadence | Index lifecycle doc | Explain trade-offs | — |
| 44 | RAG | Retrieval strategies | BM25+ANN fusion lab | Hybrid search + reranking | Recall@k vs MRR | Retriever module | ELI5: reranking | — |
| 45 | RAG | Context assembly | Windowing & section ranking | Context budget management | Citation & grounding | Context builder | Story: addressing hallucination risk | — |
| 46 | RAG | Generation layer | Streaming generation I/O | Latency budgets | Prompt templates & output schema | RAG FastAPI skeleton | Explain E2E flow | — |
| 47 | RAG | Evaluation | Golden set build tools | Regression gates in CI | Faithfulness/answer-correctness | Eval harness v1 | Story: preventing regressions | — |
| 48 | RAG | Hard cases | Multi-hop QA lab | Scoping multi-turn memory | Disambiguation prompts | Query planner stub | Explain limits honestly | — |
| 49 | RAG | Polish day | Fix flakiness/tests | Tracing + costs | Doc the metrics you’ll track | Docs + README | Refine 2 stories | — |
| 50 | RAG | Milestone | Demo: answer questions over a corpus | Walkthrough trade-offs | Show eval metrics | Ship “RAG microservice” | Record 3-min demo | Milestone 5 |

补充说明

- 将评估产物与指标记录到版本库中，为后续 Agent/LLMOps 冲刺复用。
- 保持对延迟/成本的敏感度，面试中能更好地解释设计选择。
