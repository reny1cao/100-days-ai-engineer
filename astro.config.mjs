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
				en: { label: 'English', lang: 'en' },
				zh: { label: '简体中文', lang: 'zh' },
			},
			defaultLocale: 'en',
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
							label: 'Week 1 — Coding Fundamentals',
							slug: 'guides/interview-prep/week-1',
							translations: { zh: '第 1 周 — 编程基础' },
						},
						{
							label: 'Week 2 — Algorithms & Patterns',
							slug: 'guides/interview-prep/week-2',
							translations: { zh: '第 2 周 — 算法与模式' },
						},
						{
							label: 'Week 3 — System Design & Big Data',
							slug: 'guides/interview-prep/week-3',
							translations: { zh: '第 3 周 — 系统设计与大数据' },
						},
						{
							label: 'Week 4 — ML & LLM Fundamentals',
							slug: 'guides/interview-prep/week-4',
							translations: { zh: '第 4 周 — 机器学习与大模型基础' },
						},
						{
							label: 'Week 5 — RAG Systems',
							slug: 'guides/interview-prep/week-5',
							translations: { zh: '第 5 周 — RAG 检索增强系统' },
						},
						{
							label: 'Week 6 — AI Agents & Orchestration',
							slug: 'guides/interview-prep/week-6',
							translations: { zh: '第 6 周 — AI Agent 与编排' },
						},
						{
							label: 'Week 7 — Behavioral & Remote',
							slug: 'guides/interview-prep/week-7',
							translations: { zh: '第 7 周 — 行为面试与远程协作' },
						},
						{
							label: 'Week 8 — Synthesis & Mocks',
							slug: 'guides/interview-prep/week-8',
							translations: { zh: '第 8 周 — 总结与模拟面试' },
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
