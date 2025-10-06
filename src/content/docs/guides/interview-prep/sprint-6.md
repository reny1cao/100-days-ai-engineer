---
title: Sprint 6 — Agents & Orchestration
description: Ten-day sprint for building reliable agentic workflows with guardrails and evaluation.
---

Focus Areas

- Implement tool calling, planner/executor patterns, and multi-agent coordination.
- Bake in safety, monitoring, and human-in-the-loop processes from day one.
- Deliver an NL→SQL agent showcase with documentation and metrics.

Daily Plan

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

Notes

- Reuse RAG components (Sprint 5) for retrieval tools to minimize duplication.
- Document guardrail decisions; they make strong behavioral stories about safety and ownership.
