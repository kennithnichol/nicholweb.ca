// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: the whole site is prebuilt HTML served from Cloudflare Pages.
export default defineConfig({
  site: 'https://nicholweb.ca',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
});
