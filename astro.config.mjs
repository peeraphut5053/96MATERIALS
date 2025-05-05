// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: "static",
  site: "https://96materials.com/",
  integrations: [sitemap()],
  base: "/",
  vite: {
    buildEnd() {
      fs.copyFileSync('public/CNAME', 'dist/CNAME');
    }
  }
});