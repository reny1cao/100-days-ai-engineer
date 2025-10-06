---
title: 第 4 冲刺 — 机器学习与大模型基础
description: 十天刷新 ML 基础、Transformer 机制与评估流程，为后续 RAG/Agent 做准备。
---

重点摘要

- 重温 ML 数学与指标，理解 tokenizer 与注意力机制细节。
- 区分模型层面的选择与生产系统的取舍（延迟、成本、SLO）。
- 建立持续评估习惯，为模型迭代和上线提供依据。

每日计划

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

补充说明

- 保存所有笔记与可视化，后续 RAG、Agent、LLMOps 冲刺均可复用。
- 记录讲解复杂概念时使用的比喻，面试中更容易建立共鸣。
