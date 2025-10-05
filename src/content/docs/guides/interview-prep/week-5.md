---
title: Week 5 — Retrieval-Augmented Generation (RAG)
description: Build and design RAG systems with embeddings, vector databases, and evaluation.
---

Focus

Deep dive into RAG: integrate LLMs with external knowledge via embeddings and vector search. Understand ingestion → indexing → retrieval → generation.

Learning Goals

- Explain retriever + generator and knowledge store. Know chunking, embeddings, vector DBs, dense vs sparse, hybrid search.
- Evaluate RAG (retrieval metrics and answer quality); know improvements (re-ranking, CRAG/feedback loops).

Key Connections

Applies Week 4 theory in a scalable system (Week 3). RAG often powers agents’ tools (Week 6). Data engineering skills help build the knowledge base.

Study Resources

- Conceptual Guides: DataCamp RAG overviews and interview Q&A — https://www.datacamp.com/
- Framework Docs: LangChain (load → split → embed → store → query) and vector DBs (FAISS/Pinecone/Weaviate).
- Advanced: Hybrid and hierarchical retrieval; trade-offs of vector vs keyword.

Practice & Activities

- Design a RAG QA system (e.g., policy chatbot). Outline ingestion, embedding model choice, vector DB, retrieval, and generation. Address ambiguity and accuracy (citations/re-ranking).
- Mini RAG (optional): Index a small corpus with SentenceTransformers + FAISS; retrieve top-k and answer via an LLM.
- Q&A Drills: “Why vector DB?”, “How to handle long docs?”, “How to evaluate RAG?”

Checkpoint & Reflection

Draw the RAG workflow from memory. Write one-sentence answers for each goal (benefits, components, evaluation). Tie to your past projects where relevant.

