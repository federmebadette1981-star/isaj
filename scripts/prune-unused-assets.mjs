/**
 * Retire du dossier de build les images d'origine qu'Astro émet
 * systématiquement pour chaque `ImageMetadata` importée, même lorsque seules
 * les variantes WebP sont réellement servies.
 *
 * La suppression est conservatrice : un fichier n'est retiré que si son nom
 * n'apparaît dans aucun HTML, JS ou CSS du build.
 */
import { readdir, readFile, stat, unlink } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = "dist";
const ASSETS = join(DIST, "_astro");
/** Types émis en doublon par le pipeline d'images : on ne touche à rien d'autre. */
const PRUNABLE = new Set([".jpeg", ".jpg", ".png", ".avif", ".webp"]);
const TEXT = new Set([".html", ".js", ".css", ".json", ".txt", ".xml"]);

const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
};

const files = await walk(DIST);

// Tout le texte du build, concaténé : c'est là que vivent les références.
const haystack = (
  await Promise.all(
    files
      .filter((f) => TEXT.has(extname(f)))
      .map((f) => readFile(f, "utf8").catch(() => "")),
  )
).join("\n");

let removed = 0;
let bytes = 0;
for (const file of await readdir(ASSETS)) {
  if (!PRUNABLE.has(extname(file))) continue;
  if (haystack.includes(file)) continue;
  const full = join(ASSETS, file);
  bytes += (await stat(full)).size;
  await unlink(full);
  removed += 1;
}

console.log(
  removed === 0
    ? "Aucun fichier inutilisé dans le build."
    : `${removed} fichier(s) inutilisé(s) retiré(s) du build — ${(bytes / 1e6).toFixed(1)} Mo économisés au déploiement.`,
);
