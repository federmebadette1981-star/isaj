import type { APIRoute } from "astro";
import { gradeProfiles } from "../data/grade-profiles";

/**
 * Plan du site pour les moteurs de recherche. Ajouter ici toute nouvelle page.
 * Les URL sont sans barre oblique finale, la forme servie par Cloudflare Pages.
 */
const pages: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.9" },
  { path: "/curriculum", priority: "0.9" },
  ...gradeProfiles.map(({ id }) => ({ path: `/grade/${id}`, priority: "0.8" })),
  { path: "/enrollment", priority: "0.9" },
  { path: "/contact", priority: "0.8" },
  { path: "/soutenir", priority: "0.8" },
  { path: "/partnership", priority: "0.7" },
  { path: "/projects", priority: "0.7" },
  { path: "/teams", priority: "0.6" },
  { path: "/gallery", priority: "0.6" },
  { path: "/confidentialite", priority: "0.2" },
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://isajhaiti.org");
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      ({ path, priority }) =>
        `  <url>\n    <loc>${new URL(path, base).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
