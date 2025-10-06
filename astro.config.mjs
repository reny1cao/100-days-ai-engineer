// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
	site: 'https://reny1cao.github.io',
	base: '/100-days-ai-engineer',
	integrations: [
		starlight({
			plugins: [
				starlightThemeNova(/* options */), 
			],
			title: {
				en: '100 Days of AI Engineering',
				zh: 'AI 工程师面试 100 天',
			},
			locales: {
				root: { label: 'English', lang: 'en' },
				zh: { label: '简体中文', lang: 'zh' },
			},
			defaultLocale: 'root',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/reny1cao/100-days-ai-engineer' }],
			sidebar: [
				{
					label: 'Guides',
					translations: { zh: '指南' },
					items: [
						{
							label: 'Interview Prep Overview',
							slug: 'guides/interview-prep/overview',
							translations: { zh: '面试准备概览' },
						},
						{
							label: 'Sprint 1 — Python Foundations',
							slug: 'guides/interview-prep/sprint-1',
							translations: { zh: '第 1 冲刺 — Python 基础' },
						},
						{
							label: 'Sprint 2 — Algorithms & Patterns',
							slug: 'guides/interview-prep/sprint-2',
							translations: { zh: '第 2 冲刺 — 算法与模式' },
						},
						{
							label: 'Sprint 3 — System Design & Big Data',
							slug: 'guides/interview-prep/sprint-3',
							translations: { zh: '第 3 冲刺 — 系统设计与大数据' },
						},
						{
							label: 'Sprint 4 — ML & LLM Fundamentals',
							slug: 'guides/interview-prep/sprint-4',
							translations: { zh: '第 4 冲刺 — ML 与大模型基础' },
						},
						{
							label: 'Sprint 5 — RAG Systems',
							slug: 'guides/interview-prep/sprint-5',
							translations: { zh: '第 5 冲刺 — RAG 系统' },
						},
						{
							label: 'Sprint 6 — Agents & Orchestration',
							slug: 'guides/interview-prep/sprint-6',
							translations: { zh: '第 6 冲刺 — Agent 与编排' },
						},
						{
							label: 'Sprint 7 — Data Engineering for AI',
							slug: 'guides/interview-prep/sprint-7',
							translations: { zh: '第 7 冲刺 — AI 数据工程' },
						},
						{
							label: 'Sprint 8 — LLMOps & Serving',
							slug: 'guides/interview-prep/sprint-8',
							translations: { zh: '第 8 冲刺 — LLMOps 与部署' },
						},
						{
							label: 'Sprint 9 — Advanced System Design',
							slug: 'guides/interview-prep/sprint-9',
							translations: { zh: '第 9 冲刺 — 高阶系统设计' },
						},
						{
							label: 'Sprint 10 — Interview Mastery',
							slug: 'guides/interview-prep/sprint-10',
							translations: { zh: '第 10 冲刺 — 面试冲刺' },
						},
						{ label: 'Example Guide', slug: 'guides/example', translations: { zh: '示例指南' } },
					],
				},
				{
					label: 'Reference',
					translations: { zh: '参考' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
