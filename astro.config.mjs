// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Domaine du site — utilisé pour les URL canoniques et l'aperçu des liens
// (Open Graph). Défini sur Cloudflare Pages via la variable PUBLIC_SITE_URL.
// À remplacer par le domaine officiel de l'établissement une fois celui-ci
// validé par l'administration.
const site = process.env.PUBLIC_SITE_URL ?? 'https://isaj.pages.dev';

// https://astro.build/config
export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
