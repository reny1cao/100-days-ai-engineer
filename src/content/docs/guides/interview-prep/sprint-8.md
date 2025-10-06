---
title: Sprint 8 — LLMOps & Serving
description: Ten-day sprint to productionize LLM services with CI/CD, observability, and scaling strategies.
---

Focus Areas

- Build and deploy an LLM gateway with caching, rate limits, and observability.
- Practice containerization, Kubernetes deployment, and reliability testing.
- Connect technical decisions to SLOs, costs, and on-call readiness.

Daily Plan

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71 | LLMOps & serving | API service | FastAPI + concurrency | Threading/async trade-offs | Streaming responses | LLM gateway skeleton | Explain SLOs | — |
| 72 | LLMOps & serving | Containerization | Dockerfile + health checks | Image size, security | — | Dockerize gateway | STAR: shipping infra | — |
| 73 | LLMOps & serving | CI/CD | Tests + lint in pipeline | Jenkins pipeline | — | CI for RAG/agent | STAR: automating releases | — |
| 74 | LLMOps & serving | Observability | Structured logs & trace IDs | Dashboards & alerts | Eval signal hooks | Observability pack | Explain on-call flow | — |
| 75 | LLMOps & serving | Caching & rate limits | Redis cache wrappers | Token budget & QoS | Prompt cache policies | Request/response cache | STAR: cost control | — |
| 76 | LLMOps & serving | Kubernetes | Manifests + HPA | Rollouts, probes | — | Deploy to local k8s | Explain blue/green | — |
| 77 | LLMOps & serving | Scaling & GPUs (concepts) | Batching adapter | Node pools, autoscaling | Quantization options | Throughput experiment | Explain trade-offs | — |
| 78 | LLMOps & serving | Distributed compute | Ray/Celery worker pool | Task queues, backpressure | — | Async job service | STAR: scaling jobs | — |
| 79 | LLMOps & serving | Chaos & reliability | Fault injection tests | Circuit breakers, timeouts | — | Resilience tests | STAR: incident drill | — |
| 80 | LLMOps & serving | Milestone | Load test + SLO review | Perf/cost dashboard | Eval gating in CI/CD | Ship “LLM service on k8s” | Peer demo | Milestone 8 |

Notes

- Reuse observability patterns from Sprint 7 to maintain consistency across the stack.
- Capture performance baselines to discuss tuning decisions with interviewers.
