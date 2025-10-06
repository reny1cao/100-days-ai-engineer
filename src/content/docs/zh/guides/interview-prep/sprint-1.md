---
title: 第 1 冲刺 — Python 基础与复杂度
description: 为期十天的冲刺，围绕 Python 数据结构、Big-O 直觉与面试基础建设。
---

重点摘要

- 夯实 Python 核心数据结构（数组、字符串、哈希表、链表、栈/队列）。
- 每日练习算法，同时搭建可复用的 CLI 工具集与单元测试。
- 启动行为面试素材整理与个人效率工具（Story bank、开发环境等）。

每日计划

| Day | Theme | Focus | Coding (DSA/SQL) | System Design | ML/LLM | Build/Project | Behavioral/Portfolio | Checkpoint |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Python DSA foundations | Baseline + Big-O | Warm-up: arrays/strings (2 easy + 1 medium); annotate Big-O | How data structures map to caches/queues | — | Setup repo + template; Python tooling (pytest, black) | Story bank skeleton; pick 5 highlights from resume | — |
| 2 | Python DSA foundations | Arrays | Arrays (two-pointer basics): reverse, rotate | Latency vs throughput—why arrays matter for locality | — | CLI utils: array/str helpers + tests | STAR: “learning a new codebase fast” | — |
| 3 | Python DSA foundations | Strings | Strings: anagrams, longest unique substring | Text normalization pipeline sketch | Tokenization vs plain strings | Tokenizer micro-lab: byte/wordpiece intuition | STAR: debugging under time pressure | — |
| 4 | Python DSA foundations | Hash tables | Hash map patterns: two-sum variants, frequency maps | Cache vs set vs map trade-offs | — | Implement LRU cache (dict + DLL) | Impact quantification: % latency/cost wins | — |
| 5 | Python DSA foundations | Linked lists | LL: reverse, cycle detect, merge two lists | Pointer chasing & CPU cache misses | — | Linked list utils + fuzz tests | STAR: cross-team collaboration | — |
| 6 | Python DSA foundations | Stacks/Queues | Min-stack, queue via stacks | Queueing basics for services | — | Event queue stub with retries/backoff | STAR: prioritization trade-offs | — |
| 7 | Python DSA foundations | Recursion | Recursion → iteration; subsets/permutations | Call stack limits; tail recursion | — | Trace visualizer for recursion trees | STAR: shipping under constraints | — |
| 8 | Python DSA foundations | Testing & Debugging | Refactor 2 earlier solutions for clarity & tests | Logging vs tracing: what to log | — | CLI contact list (CRUD) + unit tests | STAR: “fixed reliability regression” | — |
| 9 | Python DSA foundations | Review day | Timed set: 5 easy/medium mix | Sketch a tiny web service diagram | — | Polish repo docs; add Makefile | Refine 2 STAR stories | — |
| 10 | Python DSA foundations | Milestone | Mini-mock interview (45m) | Explain complexity intuitively | — | Ship Sprint-1 README + cheat-sheet | Record 3-min self-explanation | Milestone 1 |

补充说明

- 建议将所有题解与工具集中在一个仓库，便于版本管理与复盘。
- 复杂度笔记要写成自己的语言，后续可直接用于面试讲解。
- 行为练习的提示并非可选项，尽早记录可避免记忆衰减。
