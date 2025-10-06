# 8-Week AI Engineer Interview Prep

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A remote-friendly study guide that walks candidates through a full-time, 8-week preparation plan for AI Engineer interviews. The site contains week-by-week playbooks covering data structures, advanced algorithms, system design for LLM/big-data workloads, ML/LLM fundamentals, RAG systems, agent orchestration, and behavioral prep.

- **Live site:** https://reny1cao.github.io/100-days-ai-engineer/
- **Docs source:** `src/content/docs/`
- **Contributor guide:** [AGENTS.md](./AGENTS.md)

## 📚 What’s Inside

- **Landing hub:** A styled homepage highlighting the 8-week roadmap, milestones, and quick navigation cards.
- **Weekly guides:** Structured sections per week with callouts, resource tables, practice prompts, and reflection checklists.
- **GitHub Pages deployment:** Automated via the official [withastro/action](https://github.com/withastro/action) workflow.
- **Localization:** English and Simplified Chinese content with locale-aware navigation.

## 🛠️ Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) (v8+ recommended)

Install dependencies once:

```bash
pnpm install
```

## 🚀 Local Development & Builds

| Command        | Description                                   |
| -------------- | --------------------------------------------- |
| `pnpm dev`     | Start local dev server at `http://localhost:4321` |
| `pnpm build`   | Produce a production build in `dist/`          |
| `pnpm preview` | Preview the production build locally           |
| `pnpm astro check` | Run Astro/Starlight checks (content, types) |

## 📁 Project Structure Highlights

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── src/
│   ├── assets/                    # Static assets referenced in docs
│   ├── content/
│   │   └── docs/                  # Landing page, overview, week guides
│   └── content.config.ts          # Starlight content collections
├── astro.config.mjs               # Astro/Starlight configuration (site, base, sidebar)
├── AGENTS.md                      # Contributor/agent guidelines
├── package.json                   # Scripts and dependencies
└── pnpm-lock.yaml
```

## 🌐 Deployment

The site deploys automatically on pushes to `main` via `.github/workflows/deploy.yml`, which:

1. Checks out the repo.
2. Runs the `withastro/action` build using pnpm.
3. Publishes to GitHub Pages (environment `github-pages`).

Ensure `astro.config.mjs` has the correct `site` and `base` values (`https://<username>.github.io` and `/repo-name`).

## 🌍 Localization

- Default语言为 `en`，同时提供 `zh`（简体中文）翻译。
- 英文文档位于 `src/content/docs/`，中文文档位于 `src/content/docs/zh/`，路径结构保持一致以便路由匹配。
- 更新内容时请同步维护多语言版本，或在 PR 中标明待翻译部分。

## 🤝 Contributing

1. Read [AGENTS.md](./AGENTS.md) for repo-specific guidelines.
2. Create feature branches, run local checks (`pnpm build`, `pnpm astro check`).
3. Open a PR with context, screenshots (if visual changes), and link to any issues.

## 📫 Questions & Support

- Use Issues/Discussions on GitHub to suggest improvements or report problems.
- Share study progress, tips, or feedback when contributing content updates.
