---
title: Week 4 — ML & LLM Fundamentals (Concepts)
description: ML basics, Transformers/attention, prompting vs fine-tuning, RLHF, and LLM evaluation.
---

Focus

Refresh ML basics and LLM concepts: Transformer intuition, prompting/fine-tuning, RLHF, and evaluation. This supports RAG and agent design.

:::note[Model vs system]
Separate model knowledge (attention, training dynamics) from product/system considerations (serving latency, evaluation). Interviews often test both angles.
:::

Learning Goals

- Explain how LLMs work at a high level (next-token prediction, attention).
- Understand training vs inference, overfitting, common metrics; prompt engineering techniques; why RLHF is used.

Key Connections

Theory underpins Week 5 (RAG) and Week 6 (Agents). Model behavior informs system design and serving decisions.

Study Resources

| Topic | Resource | Notes |
| --- | --- | --- |
| ML fundamentals | Andrew Ng summaries / quick course recap | Focus on supervised vs unsupervised, bias-variance |
| Transformers | “Illustrated Transformer”, explainer videos | Understand attention, positional encoding |
| Prompting & RLHF | OpenAI guides, LangChain docs | Highlight few-shot, chain-of-thought, RLHF purpose |
| Evaluation | Articles on perplexity, human eval, guardrails | Note metrics limits and safety checks |

Practice & Activities

- Flashcards: Key terms (transfer learning, embeddings, RAG vs fine-tuning).
- ELI5: Write simple explanations for attention, embeddings, overfitting.
- Mini-project: Prompt a model (API or local) with/without context; note behavior.

Checkpoint & Reflection

- Record short answers to “What is RAG and why?” and “What are the components of an AI agent?”
- Map concepts back to real projects (eval dashboards, guardrails) for storytelling.
