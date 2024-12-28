// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://cms-docs.binaryfrost.net',
	integrations: [
		starlight({
			title: 'SnowCMS',
      tableOfContents: {
        maxHeadingLevel: 4
      },
      logo: {
        src: './src/assets/snowcms.png',
        replacesTitle: true
      },
			social: {
				github: 'https://github.com/Binaryfrost/SnowCMS',
        email: 'https://binaryfrost.net/contact/'
			},
      head: [
        {
          // <script async data-website-id={websiteId} data-host-url={api} src={src} {...props}></script>
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://cdn-a.binaryfrost.net/umami/umami.js',
            'data-website-id': '21148965-4071-43dd-af7d-2b5309fc4ffa',
            'data-host-url': 'https://umami.binaryfrost.net',
            'data-domains': 'cms-docs.binaryfrost.net'
          }
        }
      ],
      favicon: '/icon.png',
			sidebar: [
				{
					label: 'User Guide',
          items: [
            'user/getting-started',
            'user/glossary',
            'user/websites',
            'user/collections',
            'user/collection-entries',
            'user/user',
            'user/api'
          ]
				},
				{
					label: 'Admin Guide',
          collapsed: true,
          items: [
            'admin/installation',
            'admin/project-structure',
            'admin/configuration',
            'admin/cli-commands',
            'admin/package-exports',
            {
              label: 'Inputs',
              autogenerate: { directory: 'admin/inputs' }
            },
            {
              label: 'Plugins',
              autogenerate: { directory: 'admin/plugins' }
            },
            {
              label: 'Reference',
              autogenerate: { directory: 'admin/reference' }
            }
          ]
				},
			],
		}),
	],
});
