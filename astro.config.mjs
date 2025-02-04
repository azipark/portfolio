import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://hykelly7721.vercel.app',
    output: "static",
    integrations: [
      tailwind()
    ],
  },
);