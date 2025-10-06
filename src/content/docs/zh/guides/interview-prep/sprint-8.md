---
title: 第 8 冲刺 — LLMOps 与部署
description: 十天完成 LLM 服务的上线流程，包括 CI/CD、K8s、观测与可靠性测试。
---

重点摘要

- 搭建 LLM 网关，完善缓存、限流、观测与成本监控。
- 熟悉容器化、Kubernetes 部署、伸缩与 GPU 资源规划。
- 通过负载测试与混沌演练验证 SLO，并输出运维文档。

每日计划

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

补充说明

- 复用第 7 冲刺的监控模式，确保数据到服务链路一体化。
- 保存性能基线，为面试说明优化取舍提供证据。
