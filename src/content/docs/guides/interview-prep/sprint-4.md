---
title: Sprint 4 — ML & LLM Fundamentals
description: Ten-day sprint to refresh ML foundations, understand transformer mechanics, and prepare evaluation workflows.
---

Focus Areas

- Revisit ML math and metrics; dive into tokenizer/attention internals.
- Differentiate model-level decisions from production system trade-offs.
- Build evaluation habits for LLM-powered products.

Daily Plan

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | ML & LLM fundamentals | ML refresh | Implement logistic regression from scratch (numeric) | Model serving vs batch scoring | Bias/variance, metrics (precision/recall/F1) | Notes + flashcards | Explain a trade-off decision | — |
| 32 | ML & LLM fundamentals | Prob/Linear algebra | Vector ops warm-ups | Why matrix ops matter for throughput | Distributions, Bayes, matrix intuition | Math snippets notebook | Explain assumptions plainly | — |
| 33 | ML & LLM fundamentals | Tokenization | Build a tiny tokenizer (BPE-like) | Text normalization pipelines | Embedding vs token vocab | Tokenizer playground | ELI5: tokenization | — |
| 34 | ML & LLM fundamentals | Transformer basics | Implement attention (toy) | KV cache idea | Attention & positional encodings | Attention demo notebook | Explain attention simply | — |
| 35 | ML & LLM fundamentals | Training vs inference | Batching/streaming patterns | Latency vs throughput; batching | Fine-tuning vs LoRA vs prompting | Pros/cons matrix | Story: choose right approach | — |
| 36 | ML & LLM fundamentals | Inference optimization | Concurrency exercises | Caching, quantization trade-offs | Sampling, temperature, top-k/p | Latency experiments | Explain SLO thinking | — |
| 37 | ML & LLM fundamentals | Prompting techniques | Write robust Python wrappers | Prompt templating & safety hooks | Few-shot, self-consistency | Prompt cookbook | Story: reduced hallucinations | — |
| 38 | ML & LLM fundamentals | RLHF & alignment (conceptual) | — | Guardrails/HITL hooks | Labeling → reward → policy tuning | Alignment notes | Story: ethics & compliance | — |
| 39 | ML & LLM fundamentals | Evaluation | Create eval harness skeleton | Offline vs online eval loop | Accuracy, groundedness, latency, cost | Eval dashboard sketch | Story: measured what matters | — |
| 40 | ML & LLM fundamentals | Milestone | Concept quiz + 1 medium coding | Explain model vs system concerns | Flashcard review | Publish “LLM Fundamentals” notes | Peer Q&A | Milestone 4 |

Notes

- Save notebooks and dashboards; they become assets for later sprints (RAG, agents, LLMOps).
- Keep a running list of analogies to explain complex ML concepts clearly in interviews.
