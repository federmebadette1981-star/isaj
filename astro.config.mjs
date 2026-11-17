// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Domaine du site — utilisé pour les URL canoniques et l'aperçu des liens
// (Open Graph), le sitemap et robots.txt. Domaine officiel par défaut ;
// PUBLIC_SITE_URL (Cloudflare Pages) permet de le remplacer.
const site = process.env.PUBLIC_SITE_URL ?? 'https://isajhaiti.org';

// https://astro.build/config
export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
