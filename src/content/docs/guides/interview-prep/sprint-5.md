---
title: Sprint 5 — Retrieval-Augmented Generation (RAG)
description: Ten-day sprint building a RAG microservice from ingestion to evaluation.
---

Focus Areas

- Design robust ingestion, embedding, and retrieval pipelines.
- Balance latency, accuracy, and grounding through evaluation loops.
- Ship a demoable RAG service with documentation and metrics.

Daily Plan

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

Notes

- Treat evaluation artifacts as living documents; they feed directly into Sprint 6 agent monitoring and Sprint 8 LLMOps.
- Keep latency/cost metrics visible to build intuition for production constraints.
