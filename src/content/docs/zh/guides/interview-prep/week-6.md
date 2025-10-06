---
title: 第 6 周 — AI Agent 与编排
description: 掌握 Agent 基础、工具使用、多 Agent 协作与守护策略。
---

重点

理解 Agentic AI：LLM 作为推理中枢如何调用工具、规划任务、与其他 Agent 协作，并搭建可靠的监控与守护体系。

:::tip[守护优先]
在规划 Agent 逻辑时同步设计输入校验、循环终止、权限控制与人工介入（HITL）。可靠性常是面试追问重点。
:::

学习目标

- 定义 Agent：LLM “大脑” + 工具接口 + 记忆 + 规划/调度器。
- 了解 ReAct、Planner-Executor、Chain-of-Thought 等模式，熟悉多 Agent 架构以及 AgentOps/监控的最佳实践。

重点关联

Agent 常以 RAG 作为检索工具（第 5 周），也需要系统编排思维（第 3 周）。本周经验可转化为行为面试故事（第 7 周）。

学习资源

| 主题 | 资源 | 备注 |
| --- | --- | --- |
| Agent 基础 | ai.plainenglish.io 问答合集 | 定义、核心组件、常见框架 |
| 多 Agent 模式 | LangChain 多 Agent 文档、CAMEL/CrewAI 案例 | Manager-Worker 协作、对话规划 |
| 安全与运维 | 有关 Guardrails、AgentOps、监控的文章 | 审计日志、提示版本、HITL 流程 |

练习与活动

- 设计场景：例如旅行规划 Agent，说明工具（航班/酒店 API、日历）、单/多 Agent 取舍、异常处理与成功判定。
- 小实验：使用函数调用或 LangChain 工具让 LLM 调用一个自定义 API，观察并限制其输出。
- Q&A 演练：回答「何时使用工具？」「Agent 失败模式？」「如何防止死循环？」等问题。

检查点与复盘

- 写出简洁定义：Agent 与普通 LLM 调用的区别。
- 制作设计检查表：目标 → 工具 → 记忆 → 单/多 Agent → 失败处理 → 评估。
- 将检查表映射到自己经历的 Agent 项目，为面试叙述做准备。

