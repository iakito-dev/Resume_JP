import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: 'static',
  site: 'https://iakito-dev.github.io',
  base: process.env.NODE_ENV === 'production' ? '/Resume_JP/' : '/',
});

