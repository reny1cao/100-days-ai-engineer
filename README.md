# 100-Day AI Engineer Interview Prep

[English](#english) | [中文](#中文)

## English

### Overview
A sprint-based, 100-day preparation plan for AI Engineer interviews. Ten themed sprints cover data structures, advanced algorithms, system design for LLM/big-data workloads, ML/LLM fundamentals, RAG systems, agent orchestration, data engineering, LLMOps, and interview mastery.

- **Live site:** https://reny1cao.github.io/100-days-ai-engineer/
- **Docs source:** `src/content/docs/`
- **Contributor guide:** [AGENTS.md](./AGENTS.md)

### What’s Inside
- Landing hub with sprint roadmap, milestones, and quick navigation.
- Sprint guides with objectives, resources, practice prompts, and reflection checklists.
- Automated deployment via GitHub Pages using [`withastro/action`](https://github.com/withastro/action).
- Localization with a language switcher (see `/zh/` for Simplified Chinese).

### Getting Started
1. Install prerequisites: Node.js 20+ and [pnpm](https://pnpm.io/) v8+.
2. Fetch dependencies:
   ```bash
   pnpm install
   ```
3. Launch the docs locally:
   ```bash
   pnpm dev
   ```

### Commands
| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server (`http://localhost:4321`). |
| `pnpm build` | Produce a production build in `dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm astro check` | Run Astro/Starlight content and type checks. |

### Deployment
Pushes to `main` trigger `.github/workflows/deploy.yml`:
1. Checkout repository.
2. Run the Astro build with pnpm.
3. Publish to GitHub Pages (`github-pages` environment).

Ensure `astro.config.mjs` has the correct `site` and `base` values (e.g., `https://<username>.github.io` and `/repo-name`).

### Localization
- English root: https://reny1cao.github.io/100-days-ai-engineer/
- 简体中文: https://reny1cao.github.io/100-days-ai-engineer/zh/
- Each page also exposes a language toggle in the top-right corner.

### Contributing & Support
1. Review [AGENTS.md](./AGENTS.md) for coding and translation guidelines.
2. Create a feature branch and run `pnpm build` + `pnpm astro check` before opening a PR.
3. Include context, screenshots (if visual changes), and note translation status in PRs.
4. Use GitHub Issues/Discussions to report problems or suggest improvements.

---

## 中文

### 概览
面向 AI 工程师岗位的 100 天冲刺式备考计划，共 10 个主题冲刺，涵盖数据结构、高级算法、面向 LLM 的系统设计、机器学习与大模型基础、RAG、Agent 编排、数据工程、LLMOps，以及面试策略与谈判。

- **在线文档：** https://reny1cao.github.io/100-days-ai-engineer/
- **文档源码：** `src/content/docs/`
- **贡献指南：** [AGENTS.md](./AGENTS.md)

### 内容亮点
- 首页展示冲刺路线、里程碑与快捷导航。
- 每个冲刺提供目标、资源、练习与复盘提示（中英同步维护）。
- 借助 [`withastro/action`](https://github.com/withastro/action) 自动部署到 GitHub Pages。
- 页面右上角可切换语言，或直接访问 `/zh/` 查看中文站点。

### 快速开始
1. 安装 Node.js 20+ 与 [pnpm](https://pnpm.io/) v8+。
2. 安装依赖：
   ```bash
   pnpm install
   ```
3. 本地启动：
   ```bash
   pnpm dev
   ```

### 常用命令
| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务（默认端口 `http://localhost:4321`）。 |
| `pnpm build` | 生成生产环境构建（输出到 `dist/`）。 |
| `pnpm preview` | 预览生产构建。 |
| `pnpm astro check` | 执行 Astro/Starlight 内容与类型检查。 |

### 部署方式
推送到 `main` 分支将触发 `.github/workflows/deploy.yml`：
1. Checkout 仓库。
2. 使用 pnpm 运行 Astro 构建。
3. 发布到 GitHub Pages（`github-pages` 环境）。

请确保 `astro.config.mjs` 中的 `site` 与 `base` 配置正确（如 `https://<username>.github.io` 与 `/repo-name`）。

### 多语言说明
- 英文主页：https://reny1cao.github.io/100-days-ai-engineer/
- 中文主页：https://reny1cao.github.io/100-days-ai-engineer/zh/
- 页面右上角提供语言切换入口。

### 贡献与支持
1. 阅读 [AGENTS.md](./AGENTS.md) 了解代码与翻译规范。
2. 新建分支，提交 PR 前运行 `pnpm build` 与 `pnpm astro check`。
3. PR 中请说明改动背景、附带截图（若有 UI 变化），并标注翻译状态。
4. 欢迎通过 GitHub Issues/Discussions 提交问题或建议。
