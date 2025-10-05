---
title: Week 6 — AI Agents & Orchestration
description: Agent fundamentals, tool use, multi-agent patterns, safety/guardrails, and ops.
---

Focus

Agentic AI: LLMs as reasoning agents that plan, use tools, and collaborate. Cover frameworks (LangChain/LangGraph), patterns, and safety.

:::tip[Guardrails first]
Design guardrails, HITL checkpoints, and monitoring alongside agent logic. Reliability and safety questions appear often.
:::

Learning Goals

- Define an agent: LLM “brain” + tools + memory + planner/orchestrator.
- Know patterns (ReAct, Planner–Executor, chain-of-thought), multi-agent (manager–worker), and best practices (HITL, guardrails, monitoring/AgentOps).

Key Connections

Agents frequently use RAG as a tool (Week 5) and require solid system orchestration (Week 3). Aligns with behavioral stories (Week 7) about complex projects.

Study Resources

| Topic | Resource | Notes |
| --- | --- | --- |
| Agent fundamentals | ai.plainenglish.io Q&A | Definitions, components, frameworks |
| Multi-agent orchestration | LangChain multi-agent docs, CAMEL/CrewAI | Manager–worker, collaboration scenarios |
| Safety & ops | Articles on guardrails, AgentOps, monitoring | Prompt versioning, audit logs, HITL |

Practice & Activities

- Design Scenario: “Plan-a-trip” agent with Flight/Hotel APIs and itinerary tool. Single vs multi-agent trade-offs; error handling; evaluation.
- Implement a Tool-Using Agent: Simple function-calling or LangChain tool to call a math/search API; constrain and observe behavior.
- Agent Q&A: When to use tools, failure modes (loops, off-track), mitigation (limits, state checks, HITL).

Checkpoint & Reflection

- Write a concise definition of an agent vs a single LLM invocation.
- Maintain a design checklist: Goal → Tools → Memory → Single vs multi-agent → Failure handling → Evaluation.
- Map checklist items to your own agent projects for storytelling.
