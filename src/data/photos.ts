import type { ImageMetadata } from "astro";

import entreeImg from "../assets/photos/isaj-64.jpeg";
import logoMuralImg from "../assets/photos/isaj-65.jpeg";
import logoMuralLargeImg from "../assets/photos/isaj-63.jpeg";
import courImg from "../assets/photos/isaj-67.jpeg";
import facadeImg from "../assets/photos/isaj-3.jpeg";
import courPleineImg from "../assets/photos/cround.jpeg";
import leconImg from "../assets/photos/isaj-22.jpeg";
import leconElevesImg from "../assets/photos/isaj-21.jpeg";
import leconDetailImg from "../assets/photos/isaj-23.jpeg";
import classeSecondaireImg from "../assets/photos/isaj-1.jpeg";
import travailManuelImg from "../assets/photos/kids-1.jpeg";
import bricolageImg from "../assets/photos/isaj-62.jpeg";
import pupitreImg from "../assets/photos/isaj-20.jpeg";
import prescolaireGroupeImg from "../assets/photos/isaj-74.jpeg";
import prescolaireClasseImg from "../assets/photos/isaj-27.jpeg";
import fondamentalGroupeImg from "../assets/photos/isaj-9.jpeg";
import fondamentalClasseImg from "../assets/photos/isaj-11.jpeg";
import fondamentalGroupe2Img from "../assets/photos/isaj-8.jpeg";
import secondaireGroupeImg from "../assets/photos/isaj-33.jpeg";
import secondaireLigneImg from "../assets/photos/isaj-75.jpeg";
import secondaireLigne2Img from "../assets/photos/isaj-76.jpeg";
import secondaireTrioImg from "../assets/photos/isaj-5.jpeg";
import secondaireArchiveImg from "../assets/photos/graduate.jpeg";
import equipeImg from "../assets/photos/isaj-18.jpeg";
import enseignantesImg from "../assets/photos/isaj-14.jpeg";
import directionImg from "../assets/photos/isaj-47.jpeg";
import drapeauImg from "../assets/photos/isaj-10.jpeg";
import drapeauPortraitImg from "../assets/photos/isaj-16.jpeg";
import fanfareImg from "../assets/photos/isaj-15.jpeg";
import fanfareDefileImg from "../assets/photos/isaj-31.jpeg";
import rassemblementImg from "../assets/photos/isaj-49.jpeg";
import rassemblementDirectionImg from "../assets/photos/isaj-7.jpeg";
import rassemblementRangsImg from "../assets/photos/isaj-17.jpeg";
import recreationImg from "../assets/photos/isaj-25.jpeg";
import recreation2Img from "../assets/photos/isaj-57.jpeg";
import graduationCeremonieImg from "../assets/photos/isaj-48.jpeg";
import graduationPortraitImg from "../assets/photos/isaj-37.jpeg";
import graduationSourireImg from "../assets/photos/isaj-41.jpeg";
import graduationDrapeauImg from "../assets/photos/isaj-43.jpeg";
import graduationRangImg from "../assets/photos/isaj-35.jpeg";
import graduationGroupeImg from "../assets/photos/isaj-42.jpeg";
import graduationDuoImg from "../assets/photos/isaj-46.jpeg";

/**
 * Catalogue photographique de l'ISAJ.
 *
 * Chaque légende décrit ce que montre réellement la photographie : aucune
 * description n'est inventée.
 *
 * Les fichiers vivent dans `src/assets/photos/` et non dans `public/` : c'est
 * ce qui permet à Astro de les recompresser, de générer plusieurs largeurs et
 * de leur donner un nom de fichier haché — donc cachable indéfiniment.
 * Ne jamais remettre une photo dans `public/` : elle serait servie brute.
 */
export type Photo = {
  image: ImageMetadata;
  /** Légende courte affichée sous l'image. */
  title: string;
  /** Texte alternatif — décrit la scène pour les lecteurs d'écran. */
  alt: string;
  category: PhotoCategory;
};

export type PhotoCategory =
  | "Notre établissement"
  | "Vie en classe"
  | "Nos élèves"
  | "Notre équipe éducative"
  | "Activités scolaires"
  | "Événements"
  | "Projets et initiatives";

export const photoCategories: PhotoCategory[] = [
  "Notre établissement",
  "Vie en classe",
  "Nos élèves",
  "Notre équipe éducative",
  "Activités scolaires",
  "Événements",
  // Aucune photo pour l'instant : les projets de l'ISAJ sont en développement et
  // aucune image ne peut les illustrer sans laisser croire qu'ils sont réalisés.
  // La catégorie s'affichera d'elle-même dans la galerie dès qu'une photo y sera classée.
  "Projets et initiatives",
];

export const photos = {

  /* ---------- Notre établissement ---------- */
  entree: {
    image: entreeImg,
    title: "L'entrée de l'ISAJ",
    alt: "Portail bleu de l'Institution Le Saint Justien portant le nom de l'école",
    category: "Notre établissement",
  },
  logoMural: {
    image: logoMuralImg,
    title: "Le logo de l'école",
    alt: "Fresque murale du logo de l'Institution Le Saint Justien (ISAJ) sur un mur de l'établissement",
    category: "Notre établissement",
  },
  logoMuralLarge: {
    image: logoMuralLargeImg,
    title: "L'allée d'entrée",
    alt: "Allée d'entrée de l'ISAJ longeant la fresque du logo de l'établissement",
    category: "Notre établissement",
  },
  cour: {
    image: courImg,
    title: "La cour de l'école",
    alt: "Cour intérieure de l'ISAJ avec un manguier et des bancs",
    category: "Notre établissement",
  },
  facade: {
    image: facadeImg,
    title: "Devant l'établissement",
    alt: "Élèves du secondaire devant la façade de l'Institution Le Saint Justien",
    category: "Notre établissement",
  },
  courPleine: {
    image: courPleineImg,
    title: "Dans la cour de l'école",
    alt: "Élèves de l'ISAJ rassemblés dans la cour de l'établissement",
    category: "Notre établissement",
  },

  /* ---------- Vie en classe ---------- */
  lecon: {
    image: leconImg,
    title: "Une leçon au préscolaire",
    alt: "Enseignante menant une leçon sur le maïs devant sa classe de préscolaire",
    category: "Vie en classe",
  },
  leconEleves: {
    image: leconElevesImg,
    title: "Une leçon sur le maïs",
    alt: "Enfants du préscolaire assis en cercle autour d'une table où sont disposés des épis de maïs",
    category: "Vie en classe",
  },
  leconDetail: {
    image: leconDetailImg,
    title: "Le maïs, sujet de la leçon",
    alt: "Épis de maïs, grains et farine disposés sur une table de classe",
    category: "Vie en classe",
  },
  classeSecondaire: {
    image: classeSecondaireImg,
    title: "Une classe du secondaire",
    alt: "Élèves du secondaire en uniforme, assis à leurs pupitres en salle de classe",
    category: "Vie en classe",
  },
  travailManuel: {
    image: travailManuelImg,
    title: "Travaux manuels",
    alt: "Enfants du préscolaire présentant leurs bricolages en classe",
    category: "Vie en classe",
  },
  bricolage: {
    image: bricolageImg,
    title: "Atelier créatif",
    alt: "Jeunes élèves montrant les objets en papier qu'ils ont fabriqués en classe",
    category: "Vie en classe",
  },
  pupitre: {
    image: pupitreImg,
    title: "En classe au préscolaire",
    alt: "Deux élèves du préscolaire souriant à leur pupitre",
    category: "Vie en classe",
  },

  /* ---------- Nos élèves ---------- */
  prescolaireGroupe: {
    image: prescolaireGroupeImg,
    title: "Les élèves du préscolaire",
    alt: "Groupe d'élèves du préscolaire de l'ISAJ en polo jaune",
    category: "Nos élèves",
  },
  prescolaireClasse: {
    image: prescolaireClasseImg,
    title: "Une classe du préscolaire",
    alt: "Élèves du préscolaire de l'ISAJ en polo bleu, assis et debout",
    category: "Nos élèves",
  },
  fondamentalGroupe: {
    image: fondamentalGroupeImg,
    title: "Les élèves du fondamental",
    alt: "Élèves du fondamental de l'ISAJ en uniforme, bras croisés devant la fresque de l'école",
    category: "Nos élèves",
  },
  fondamentalClasse: {
    image: fondamentalClasseImg,
    title: "Une classe du fondamental",
    alt: "Groupe d'élèves du fondamental de l'ISAJ devant l'établissement",
    category: "Nos élèves",
  },
  fondamentalGroupe2: {
    image: fondamentalGroupe2Img,
    title: "Des élèves du fondamental",
    alt: "Élèves du fondamental de l'ISAJ en uniforme, souriant",
    category: "Nos élèves",
  },
  secondaireGroupe: {
    image: secondaireGroupeImg,
    title: "Les élèves du secondaire",
    alt: "Groupe d'élèves du secondaire de l'ISAJ en uniforme devant l'établissement",
    category: "Nos élèves",
  },
  secondaireLigne: {
    image: secondaireLigneImg,
    title: "Une classe du secondaire",
    alt: "Élèves du secondaire de l'ISAJ alignés devant la fresque de l'école",
    category: "Nos élèves",
  },
  secondaireLigne2: {
    image: secondaireLigne2Img,
    title: "Des élèves du secondaire",
    alt: "Élèves du secondaire de l'ISAJ en uniforme, alignés devant l'établissement",
    category: "Nos élèves",
  },
  secondaireTrio: {
    image: secondaireTrioImg,
    title: "En uniforme du secondaire",
    alt: "Trois élèves du secondaire de l'ISAJ en uniforme",
    category: "Nos élèves",
  },
  secondaireArchive: {
    image: secondaireArchiveImg,
    title: "Un groupe du secondaire",
    alt: "Groupe d'élèves du secondaire de l'ISAJ devant l'établissement",
    category: "Nos élèves",
  },

  /* ---------- Notre équipe éducative ---------- */
  equipe: {
    image: equipeImg,
    title: "Membres de l'équipe de l'ISAJ",
    alt: "Cinq membres de l'équipe de l'ISAJ devant l'établissement",
    category: "Notre équipe éducative",
  },
  enseignantes: {
    image: enseignantesImg,
    title: "Membres de l'équipe éducative",
    alt: "Cinq membres de l'équipe éducative de l'ISAJ devant la fresque de l'établissement",
    category: "Notre équipe éducative",
  },
  direction: {
    image: directionImg,
    title: "Membres de l'équipe de l'ISAJ",
    alt: "Deux membres de l'équipe de l'ISAJ devant la fresque de l'établissement",
    category: "Notre équipe éducative",
  },

  /* ---------- Activités scolaires ---------- */
  drapeau: {
    image: drapeauImg,
    title: "La levée du drapeau",
    alt: "Deux élèves de l'ISAJ hissant le drapeau haïtien dans la cour de l'école",
    category: "Activités scolaires",
  },
  drapeauPortrait: {
    image: drapeauPortraitImg,
    title: "Le drapeau haïtien",
    alt: "Deux élèves de l'ISAJ tenant le mât du drapeau haïtien",
    category: "Activités scolaires",
  },
  fanfare: {
    image: fanfareImg,
    title: "La fanfare de l'école",
    alt: "Élèves de l'ISAJ jouant du trombone et de la trompette dans la cour",
    category: "Activités scolaires",
  },
  fanfareDefile: {
    image: fanfareDefileImg,
    title: "Élèves et instruments à vent",
    alt: "Élèves de l'ISAJ portant leurs instruments à vent dans l'allée de l'école",
    category: "Activités scolaires",
  },
  rassemblement: {
    image: rassemblementImg,
    title: "Le rassemblement des élèves",
    alt: "Ensemble des élèves de l'ISAJ rassemblés dans la cour de l'établissement",
    category: "Activités scolaires",
  },
  rassemblementDirection: {
    image: rassemblementDirectionImg,
    title: "Rassemblement dans la cour",
    alt: "Un adulte s'adressant aux élèves de l'ISAJ rassemblés dans la cour",
    category: "Activités scolaires",
  },
  rassemblementRangs: {
    image: rassemblementRangsImg,
    title: "En rangs dans la cour",
    alt: "Élèves de l'ISAJ alignés dans la cour pendant le rassemblement",
    category: "Activités scolaires",
  },
  recreation: {
    image: recreationImg,
    title: "Élèves dans la cour",
    alt: "Élèves de l'ISAJ dans la cour, en présence d'une enseignante",
    category: "Activités scolaires",
  },
  recreation2: {
    image: recreation2Img,
    title: "Dans la cour de l'école",
    alt: "Élèves de l'ISAJ et une enseignante dans la cour de l'école",
    category: "Activités scolaires",
  },

  /* ---------- Événements ---------- */
  graduationCeremonie: {
    image: graduationCeremonieImg,
    title: "Une cérémonie à l'ISAJ",
    alt: "Enfants en tenue jaune, médaille au cou, assis sous un chapiteau décoré d'une banderole « Nous sommes la lumière »",
    category: "Événements",
  },
  graduationPortrait: {
    image: graduationPortraitImg,
    title: "Le jour de la graduation",
    alt: "Élève du préscolaire en toge et coiffe de graduation",
    category: "Événements",
  },
  graduationSourire: {
    image: graduationSourireImg,
    title: "En toge de graduation",
    alt: "Élève du préscolaire souriante, en toge blanche et étole jaune",
    category: "Événements",
  },
  graduationDrapeau: {
    image: graduationDrapeauImg,
    title: "Graduation et drapeau",
    alt: "Élève en toge de graduation devant le drapeau haïtien tenu par un camarade",
    category: "Événements",
  },
  graduationRang: {
    image: graduationRangImg,
    title: "En rang, en toge de graduation",
    alt: "File d'élèves du préscolaire en toge et coiffe de graduation",
    category: "Événements",
  },
  graduationGroupe: {
    image: graduationGroupeImg,
    title: "Élèves en toge de graduation",
    alt: "Quatre élèves du préscolaire en toge et coiffe de graduation",
    category: "Événements",
  },
  graduationDuo: {
    image: graduationDuoImg,
    title: "Deux élèves en toge",
    alt: "Deux élèves du préscolaire en toge de graduation, côte à côte",
    category: "Événements",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/**
 * Toutes les photographies, dans l'ordre d'affichage de la galerie, avec leur
 * clé de catalogue. La clé sert d'identifiant stable côté client — surtout pas
 * l'URL du fichier d'origine, qui n'a aucune raison d'atterrir dans le HTML.
 */
export const galleryPhotos = photoCategories.flatMap((category) =>
  Object.entries(photos)
    .filter(([, photo]) => photo.category === category)
    .map(([key, photo]) => ({ key, ...photo })),
);
