// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Security Docs',
			social: {
				github: 'https://secure-works.co.nz',
			},
			sidebar: [
				{
					label: 'How to use our Guides',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],

					
				},
				{
					label: 'Alarms',
					collapsed: true,
					autogenerate: { directory: 'Alarms' },
				},
				{
					label: 'CCTV',
					collapsed: true,
					autogenerate: { directory: 'CCTV' },
				},
				
				
			],
		}),
	],
});
