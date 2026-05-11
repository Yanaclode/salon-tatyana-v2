// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yanaclode.github.io',
  base: '/salon-tatyana-v2',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});