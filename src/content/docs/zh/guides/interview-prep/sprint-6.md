---
title: 第 6 冲刺 — Agent 与编排
description: 十天构建可靠的 Agent 工作流，涵盖工具调用、HITL 与监控评估。
---

重点摘要

- 实现函数调用、Planner/Executor、多 Agent 协同等关键模式。
- 从一开始就引入守护、监控、人类介入，强调安全与可靠性。
- 交付可演示的 NL→SQL Agent，并配套 README 与指标。

每日计划

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 51 | Agents & orchestration | Function calling & tools | Robust JSON schema parsing | Timeouts, retries | Tool selection prompts | Tool spec library | STAR: added automation safely | — |
| 52 | Agents & orchestration | Single-agent reliability | Idempotent handlers | Dead-letter queues | Self-check prompting | Failure catalog | STAR: handling failures | — |
| 53 | Agents & orchestration | Planner–Executor | Task decomposition utils | Queue orchestration | Reflection/critic loops | Plan/exec scaffold | STAR: unblocking teams | — |
| 54 | Agents & orchestration | Multi-agent patterns | Message bus between agents | Concurrency models | Roles & memory | LangGraph-style DAG | STAR: scaling complexity | — |
| 55 | Agents & orchestration | Memory & retrieval | Vector store hooks | State vs stateless agents | Recall strategies | Agent memory module | Explain design rationale | — |
| 56 | Agents & orchestration | Guardrails & HITL | Validation gates | Escalation & approvals | Toxicity/safety checks (conceptual) | HITL workflow | STAR: compliance & safety | — |
| 57 | Agents & orchestration | Monitoring & evals | Telemetry & traces | SLOs for agents | Task success metrics | Eval dashboard v2 | STAR: data-driven decisions | — |
| 58 | Agents & orchestration | Connectors & tools | SQL/web tools | Secrets & permissions | Prompt routing | Tool catalog | Explain least-privilege | — |
| 59 | Agents & orchestration | Build NL→SQL agent | Schema-aware parsing | Execution sandbox | Schema linking tactics | Ship NL→SQL MVP | Record demo | — |
| 60 | Agents & orchestration | Milestone | Mini-mock: agent design Q&A | Discuss failure handling | Show eval numbers | Publish agent README | Peer review | Milestone 6 |

补充说明

- 重用 RAG（第 5 冲刺）的检索模块，减少重复实现。
- 记录守护逻辑与回滚策略，作为行为故事里的“安全与合规”案例。
