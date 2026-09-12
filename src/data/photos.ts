/**
 * Catalogue photographique de l'ISAJ.
 *
 * Chaque légende décrit ce que montre réellement la photographie : aucune
 * description n'est inventée. Les images vivent dans `public/`, ce qui permet
 * de les réutiliser depuis les pages Astro comme depuis les composants React.
 */
export type Photo = {
  src: string;
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
  | "Événements et cérémonies";

export const photoCategories: PhotoCategory[] = [
  "Notre établissement",
  "Vie en classe",
  "Nos élèves",
  "Notre équipe éducative",
  "Activités scolaires",
  "Événements et cérémonies",
];

export const photos = {
  /* ---------- Notre établissement ---------- */
  entree: {
    src: "/isaj-64.jpeg",
    title: "L'entrée de l'ISAJ",
    alt: "Portail bleu de l'Institution Le Saint Justien portant le nom de l'école",
    category: "Notre établissement",
  },
  logoMural: {
    src: "/isaj-65.jpeg",
    title: "Le logo de l'école",
    alt: "Fresque murale du logo de l'Institution Le Saint Justien (ISAJ) sur un mur de l'établissement",
    category: "Notre établissement",
  },
  logoMuralLarge: {
    src: "/isaj-63.jpeg",
    title: "L'allée d'entrée",
    alt: "Allée d'entrée de l'ISAJ longeant la fresque du logo de l'établissement",
    category: "Notre établissement",
  },
  cour: {
    src: "/isaj-67.jpeg",
    title: "La cour de l'école",
    alt: "Cour intérieure de l'ISAJ avec un manguier et des bancs",
    category: "Notre établissement",
  },
  facade: {
    src: "/isaj-3.jpeg",
    title: "Devant l'établissement",
    alt: "Élèves du secondaire devant la façade de l'Institution Le Saint Justien",
    category: "Notre établissement",
  },
  courPleine: {
    src: "/cround.jpeg",
    title: "Un jour de classe",
    alt: "Élèves de l'ISAJ rassemblés dans la cour de l'établissement",
    category: "Notre établissement",
  },

  /* ---------- Vie en classe ---------- */
  lecon: {
    src: "/isaj-22.jpeg",
    title: "Une leçon au préscolaire",
    alt: "Enseignante menant une leçon sur le maïs devant sa classe de préscolaire",
    category: "Vie en classe",
  },
  leconEleves: {
    src: "/isaj-21.jpeg",
    title: "Découvrir le monde",
    alt: "Enfants du préscolaire assis en cercle autour d'une table d'observation du maïs",
    category: "Vie en classe",
  },
  leconDetail: {
    src: "/isaj-23.jpeg",
    title: "Le matériel de la leçon",
    alt: "Épis de maïs, grains et farine disposés sur une table pour une leçon",
    category: "Vie en classe",
  },
  classeSecondaire: {
    src: "/isaj-1.jpeg",
    title: "Une classe du secondaire",
    alt: "Élèves du secondaire en uniforme, assis à leurs pupitres en salle de classe",
    category: "Vie en classe",
  },
  travailManuel: {
    src: "/kids-1.jpeg",
    title: "Travaux manuels",
    alt: "Enfants du préscolaire présentant leurs bricolages en classe",
    category: "Vie en classe",
  },
  bricolage: {
    src: "/isaj-62.jpeg",
    title: "Atelier créatif",
    alt: "Jeunes élèves montrant les objets en papier qu'ils ont fabriqués en classe",
    category: "Vie en classe",
  },
  pupitre: {
    src: "/isaj-20.jpeg",
    title: "En classe au préscolaire",
    alt: "Deux élèves du préscolaire souriant à leur pupitre",
    category: "Vie en classe",
  },

  /* ---------- Nos élèves ---------- */
  prescolaireGroupe: {
    src: "/isaj-74.jpeg",
    title: "Les élèves du préscolaire",
    alt: "Groupe d'élèves du préscolaire de l'ISAJ en polo jaune",
    category: "Nos élèves",
  },
  prescolaireClasse: {
    src: "/isaj-27.jpeg",
    title: "Une classe du préscolaire",
    alt: "Élèves du préscolaire de l'ISAJ en polo bleu, assis et debout",
    category: "Nos élèves",
  },
  fondamentalGroupe: {
    src: "/isaj-9.jpeg",
    title: "Les élèves du fondamental",
    alt: "Élèves du fondamental de l'ISAJ en uniforme, bras croisés devant la fresque de l'école",
    category: "Nos élèves",
  },
  fondamentalClasse: {
    src: "/isaj-11.jpeg",
    title: "Une classe du fondamental",
    alt: "Groupe d'élèves du fondamental de l'ISAJ devant l'établissement",
    category: "Nos élèves",
  },
  fondamentalGroupe2: {
    src: "/isaj-8.jpeg",
    title: "Les plus jeunes du fondamental",
    alt: "Jeunes élèves du fondamental de l'ISAJ en uniforme, souriant",
    category: "Nos élèves",
  },
  secondaireGroupe: {
    src: "/isaj-33.jpeg",
    title: "Les élèves du secondaire",
    alt: "Groupe d'élèves du secondaire de l'ISAJ en uniforme devant l'établissement",
    category: "Nos élèves",
  },
  secondaireLigne: {
    src: "/isaj-75.jpeg",
    title: "Une classe du secondaire",
    alt: "Élèves du secondaire de l'ISAJ alignés devant la fresque de l'école",
    category: "Nos élèves",
  },
  secondaireLigne2: {
    src: "/isaj-76.jpeg",
    title: "Les finissants du secondaire",
    alt: "Élèves du secondaire de l'ISAJ en uniforme, alignés devant l'établissement",
    category: "Nos élèves",
  },
  secondaireTrio: {
    src: "/isaj-5.jpeg",
    title: "En uniforme du secondaire",
    alt: "Trois élèves du secondaire de l'ISAJ en uniforme",
    category: "Nos élèves",
  },
  secondaireArchive: {
    src: "/graduate.jpeg",
    title: "Une promotion du secondaire",
    alt: "Groupe d'élèves du secondaire de l'ISAJ devant l'établissement",
    category: "Nos élèves",
  },

  /* ---------- Notre équipe éducative ---------- */
  equipe: {
    src: "/isaj-18.jpeg",
    title: "L'équipe de l'établissement",
    alt: "Cinq membres de l'équipe éducative et administrative de l'ISAJ devant l'école",
    category: "Notre équipe éducative",
  },
  enseignantes: {
    src: "/isaj-14.jpeg",
    title: "L'équipe enseignante",
    alt: "Cinq enseignantes de l'ISAJ devant la fresque de l'établissement",
    category: "Notre équipe éducative",
  },
  direction: {
    src: "/isaj-47.jpeg",
    title: "Le secrétariat et la direction",
    alt: "Deux responsables de l'ISAJ devant la fresque de l'établissement",
    category: "Notre équipe éducative",
  },

  /* ---------- Activités scolaires ---------- */
  drapeau: {
    src: "/isaj-10.jpeg",
    title: "La levée du drapeau",
    alt: "Deux élèves de l'ISAJ hissant le drapeau haïtien dans la cour de l'école",
    category: "Activités scolaires",
  },
  drapeauPortrait: {
    src: "/isaj-16.jpeg",
    title: "Le drapeau haïtien",
    alt: "Deux élèves de l'ISAJ tenant le mât du drapeau haïtien",
    category: "Activités scolaires",
  },
  fanfare: {
    src: "/isaj-15.jpeg",
    title: "La fanfare de l'école",
    alt: "Élèves de l'ISAJ jouant du trombone et de la trompette dans la cour",
    category: "Activités scolaires",
  },
  fanfareDefile: {
    src: "/isaj-31.jpeg",
    title: "La fanfare en répétition",
    alt: "Élèves de l'ISAJ portant leurs instruments à vent dans l'allée de l'école",
    category: "Activités scolaires",
  },
  rassemblement: {
    src: "/isaj-49.jpeg",
    title: "Le rassemblement du matin",
    alt: "Ensemble des élèves de l'ISAJ rassemblés dans la cour au début de la journée",
    category: "Activités scolaires",
  },
  rassemblementDirection: {
    src: "/isaj-7.jpeg",
    title: "La parole à la direction",
    alt: "Un responsable de l'ISAJ s'adressant aux élèves rassemblés dans la cour",
    category: "Activités scolaires",
  },
  rassemblementRangs: {
    src: "/isaj-17.jpeg",
    title: "En rangs dans la cour",
    alt: "Élèves de l'ISAJ alignés dans la cour pendant le rassemblement",
    category: "Activités scolaires",
  },
  recreation: {
    src: "/isaj-25.jpeg",
    title: "La récréation",
    alt: "Élèves de l'ISAJ jouant dans la cour pendant la récréation",
    category: "Activités scolaires",
  },
  recreation2: {
    src: "/isaj-57.jpeg",
    title: "Entre deux cours",
    alt: "Élèves de l'ISAJ et une enseignante dans la cour de l'école",
    category: "Activités scolaires",
  },

  /* ---------- Événements et cérémonies ---------- */
  graduationCeremonie: {
    src: "/isaj-48.jpeg",
    title: "La cérémonie de fin d'année",
    alt: "Enfants du préscolaire en tenue jaune, médaille au cou, assis lors de la cérémonie de fin d'année",
    category: "Événements et cérémonies",
  },
  graduationPortrait: {
    src: "/isaj-37.jpeg",
    title: "Le jour de la graduation",
    alt: "Élève du préscolaire en toge et coiffe de graduation",
    category: "Événements et cérémonies",
  },
  graduationSourire: {
    src: "/isaj-41.jpeg",
    title: "Fière de son parcours",
    alt: "Élève du préscolaire souriante, en toge blanche et étole jaune",
    category: "Événements et cérémonies",
  },
  graduationDrapeau: {
    src: "/isaj-43.jpeg",
    title: "Graduation et drapeau",
    alt: "Élève en toge de graduation devant le drapeau haïtien tenu par un camarade",
    category: "Événements et cérémonies",
  },
  graduationRang: {
    src: "/isaj-35.jpeg",
    title: "En rang pour la cérémonie",
    alt: "File d'élèves du préscolaire en toge et coiffe de graduation",
    category: "Événements et cérémonies",
  },
  graduationGroupe: {
    src: "/isaj-42.jpeg",
    title: "Les diplômés du préscolaire",
    alt: "Quatre élèves du préscolaire en toge de graduation",
    category: "Événements et cérémonies",
  },
  graduationDuo: {
    src: "/isaj-46.jpeg",
    title: "Prêts pour la suite",
    alt: "Deux élèves du préscolaire en toge de graduation se tenant la main",
    category: "Événements et cérémonies",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Toutes les photographies, dans l'ordre d'affichage de la galerie. */
export const galleryPhotos: Photo[] = photoCategories.flatMap((category) =>
  Object.values(photos).filter((photo) => photo.category === category),
);
