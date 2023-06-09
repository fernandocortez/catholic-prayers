import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://catholic-prayers-oraciones-catolicas.netlify.app',
  integrations: [mdx(), sitemap()],
});
