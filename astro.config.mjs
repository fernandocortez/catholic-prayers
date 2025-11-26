import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  site: 'https://catholic-prayers.pages.dev/',
  integrations: [mdx(), sitemap()],
});
