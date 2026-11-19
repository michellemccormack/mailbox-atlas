import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// SITE_URL is the production origin. Update when a custom domain is added.
export default defineConfig({
  site: process.env.SITE_URL || 'https://michellemccormack.github.io/mailbox-atlas',
  base: process.env.BASE_PATH ?? '/mailbox-atlas/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
