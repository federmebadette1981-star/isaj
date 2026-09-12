import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Génération des variantes d'images, au moment du build.
 *
 * Objectif : ne jamais dégrader visuellement une photo, mais ne jamais envoyer
 * non plus 1600 px pour une vignette affichée en 400 px. Le gain de poids vient
 * du redimensionnement, pas d'une compression agressive — d'où une qualité
 * élevée (85) volontairement conservatrice.
 */
export const QUALITY = 85;

/** Largeurs candidates. Celles plus grandes que l'original sont ignorées : pas d'agrandissement. */
const DEFAULT_WIDTHS = [400, 800, 1200, 1600];

export type ResponsiveImage = {
  /** Meilleure variante disponible — sert de `src` de repli. */
  src: string;
  /** `srcset` complet, en WebP. */
  srcset: string;
  /** Dimensions d'origine : indispensables pour réserver la place et faire fonctionner le lazy-loading. */
  width: number;
  height: number;
};

/**
 * Prépare une image en plusieurs largeurs WebP.
 *
 * @param sizes Attribut `sizes` du navigateur — décrit la largeur d'affichage réelle.
 */
export const responsiveImage = async (
  image: ImageMetadata,
  widths: number[] = DEFAULT_WIDTHS,
): Promise<ResponsiveImage> => {
  const usable = widths.filter((w) => w <= image.width);
  // Toujours garder au moins une variante, même pour une petite image d'origine.
  if (usable.length === 0) usable.push(image.width);

  const variants = await Promise.all(
    usable.map((width) =>
      getImage({ src: image, width, format: "webp", quality: QUALITY }),
    ),
  );

  return {
    src: variants[variants.length - 1].src,
    srcset: variants
      .map((variant, index) => `${variant.src} ${usable[index]}w`)
      .join(", "),
    width: image.width,
    height: image.height,
  };
};
