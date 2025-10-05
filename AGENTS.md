# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/`:
  - Docs content in `src/content/docs/` (`guides/`, `reference/`, `index.mdx`).
  - Assets in `src/assets/` (use relative links in MD/MDX).
  - Content config in `src/content.config.ts`.
- Static files in `public/`.
- Site config and sidebar live in `astro.config.mjs`.
- Do not edit generated `.astro/` output or commit `dist/`.

## Build, Test, and Development Commands
- `pnpm install` — install dependencies.
- `pnpm dev` — start local dev server at `http://localhost:4321`.
- `pnpm build` — production build to `dist/`.
- `pnpm preview` — serve the production build locally.
- `pnpm astro check` — type/content checks for Astro/Starlight.

## Coding Style & Naming Conventions
- Use ESM and TypeScript where applicable (`type: module`).
- Indentation: 2 spaces; keep lines concise (<100 chars when feasible).
- MD/MDX frontmatter must include `title` and `description`. Example:
  ```md
  ---
  title: My Guide
  description: What this page covers.
  ---
  ```
- Filenames: kebab-case for docs (e.g., `my-new-page.md`). Group pages under `guides/` or `reference/`.
- Import assets with relative paths from `src/assets/`.

## Testing Guidelines
- This repo has no automated tests yet. Before opening a PR, run:
  - `pnpm build` and `pnpm preview` to smoke-test pages.
  - `pnpm astro check` to catch type/content issues.
- Consider adding examples with copy-pastable commands and verifying links.

## Commit & Pull Request Guidelines
- Commits: clear, imperative subject (optionally Conventional Commits), e.g., `docs(guides): add prompt engineering intro`.
- PRs must include:
  - Summary of changes and motivation.
  - Screenshots or local URLs for notable UI changes.
  - Linked issue (if any) and checklist: `pnpm build`, `pnpm astro check`, manual preview.
- Keep PRs focused; prefer smaller, incremental changes.

## Agent-Specific Notes
- When adding a doc page, place it under `src/content/docs/...` and update the sidebar in `astro.config.mjs` if needed (the `reference/` section autogenerates; `guides/` is explicit).
- Do not restructure directories without discussion. Favor minimal changes aligned with existing patterns.
