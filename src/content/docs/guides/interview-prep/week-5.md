---
title: Week 5 — Retrieval-Augmented Generation (RAG)
description: Build and design RAG systems with embeddings, vector databases, and evaluation.
---

Focus

Deep dive into RAG: integrate LLMs with external knowledge via embeddings and vector search. Understand ingestion → indexing → retrieval → generation.

:::tip[Cite sources]
Design answers that reference retrieved documents. Interviews value verifiable outputs and auditability.
:::

Learning Goals

- Explain retriever + generator and knowledge store. Know chunking, embeddings, vector DBs, dense vs sparse, hybrid search.
- Evaluate RAG (retrieval metrics and answer quality); know improvements (re-ranking, CRAG/feedback loops).

Key Connections

Applies Week 4 theory in a scalable system (Week 3). RAG often powers agents’ tools (Week 6). Data engineering skills help build the knowledge base.

Study Resources

| Topic | Resource | Notes |
| --- | --- | --- |
| RAG fundamentals | DataCamp guides/interview Q&A — https://www.datacamp.com/ | Components, benefits, challenges |
| Framework workflow | LangChain docs | Steps: load → split → embed → store → retrieve |
| Vector DBs | FAISS, Pinecone, Weaviate docs | Compare hosting, filtering, scaling |
| Advanced retrieval | Articles on hybrid/hierarchical search | When to mix dense & sparse |

Practice & Activities

- Design a RAG QA system (e.g., policy chatbot). Outline ingestion, embedding model choice, vector DB, retrieval, and generation. Address ambiguity and accuracy (citations/re-ranking).
- Mini RAG (optional): Index a small corpus with SentenceTransformers + FAISS; retrieve top-k and answer via an LLM.
- Q&A Drills: “Why vector DB?”, “How to handle long docs?”, “How to evaluate RAG?”

Checkpoint & Reflection

- Draw the RAG workflow end-to-end (ingestion → retrieval → generation → evaluation).
- Draft one-sentence answers covering benefits, components, evaluation strategies.
- Identify parallels with prior systems (search with AI, knowledge bases).
