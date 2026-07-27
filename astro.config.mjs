// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { pagePaths } from './src/data/pages.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xbrain.it',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return pagePaths.includes(path);
      },
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (path.startsWith('/cosa-facciamo')) {
          item.changefreq = 'monthly';
          item.priority = 0.9;
        } else if (path === '/contatti/' || path === '/chi-siamo/') {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'yearly';
          item.priority = 0.3;
        }
        return item;
      },
    }),
  ],
});
