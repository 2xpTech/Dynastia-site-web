// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // For custom domain deployment
  site: 'https://dynast-ia.org',
  // Remove base when using custom domain
  // base: '/Dynastia-site-web',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});