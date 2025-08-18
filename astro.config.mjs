// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages deployment
  site: 'https://joshveill.github.io',
  base: '/Dynastia',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});