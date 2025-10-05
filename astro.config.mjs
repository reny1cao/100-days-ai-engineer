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
			title: '100 Days AI Engineer',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/reny1cao/100-days-ai-engineer' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Interview Prep Overview', slug: 'guides/interview-prep/overview' },
						{ label: 'Week 1 — Coding Fundamentals', slug: 'guides/interview-prep/week-1' },
						{ label: 'Week 2 — Algorithms & Patterns', slug: 'guides/interview-prep/week-2' },
						{ label: 'Week 3 — System Design & Big Data', slug: 'guides/interview-prep/week-3' },
						{ label: 'Week 4 — ML & LLM Fundamentals', slug: 'guides/interview-prep/week-4' },
						{ label: 'Week 5 — RAG Systems', slug: 'guides/interview-prep/week-5' },
						{ label: 'Week 6 — AI Agents & Orchestration', slug: 'guides/interview-prep/week-6' },
						{ label: 'Week 7 — Behavioral & Remote', slug: 'guides/interview-prep/week-7' },
						{ label: 'Week 8 — Synthesis & Mocks', slug: 'guides/interview-prep/week-8' },
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
