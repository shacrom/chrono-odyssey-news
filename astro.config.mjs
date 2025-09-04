// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shacrom.com',
  output: 'server', // Modo servidor para todas las páginas
  adapter: node({mode: 'standalone'}),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['shacrom.com', 'www.shacrom.com'],
    },
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
  },
});