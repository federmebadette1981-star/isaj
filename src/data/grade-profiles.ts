import type { PhotoKey } from "./photos";

/**
 * Profils des trois sections de l'ISAJ.
 * Chaque section présente un contenu qui lui est propre :
 * classes concernées, objectifs pédagogiques, principales matières,
 * approche pédagogique, admissions et contact.
 * Les tranches d'âge ne sont pas affichées tant qu'elles ne sont pas
 * officiellement confirmées par l'établissement.
 */
export const gradeProfiles = [
  {
    id: "prescolaire",
    title: "Section Préscolaire",
    shortTitle: "Préscolaire",
    subtitle: "Les premières années de la scolarité",
    grades: "Préscolaire",
    color: "blue",
    overview:
      "Le préscolaire accompagne les jeunes enfants dans leurs premiers apprentissages et favorise leur développement intellectuel, social, émotionnel et moteur.",
    classes: [
      "Classes du préscolaire",
      "Préparation à l'entrée dans l'enseignement fondamental",
    ],
    objectives: [
      "Éveiller le langage, l'écoute et l'expression orale",
      "Découvrir les premiers repères en lecture, en écriture et en nombres",
      "Développer la motricité fine et la motricité globale",
      "Apprendre à vivre en groupe, à partager et à respecter les règles",
      "Construire progressivement l'autonomie et la confiance en soi",
    ],
    subjects: [
      "Langage et communication",
      "Premiers apprentissages",
      "Découverte du monde",
      "Expression artistique",
      "Activités motrices",
      "Vie en groupe",
    ],
    approach: [
      {
        label: "Apprendre en découvrant",
        text: "Les apprentissages s'appuient sur l'observation, la manipulation et l'activité, comme lors des leçons de découverte du monde.",
      },
      {
        label: "Un développement complet",
        text: "L'accompagnement vise le développement intellectuel, social, émotionnel et moteur de chaque enfant.",
      },
      {
        label: "Grandir ensemble",
        text: "Les enfants construisent progressivement leur autonomie et apprennent à vivre en groupe, dans le respect des autres.",
      },
    ],
    admissions:
      "La demande de préinscription au préscolaire se fait en ligne. Le secrétariat recontacte ensuite la famille pour communiquer les pièces requises, les modalités et les prochaines étapes.",
    gallery: [
      "prescolaireGroupe",
      "leconEleves",
      "lecon",
      "bricolage",
    ] as const,
  },
  {
    id: "fondamental",
    title: "Section Fondamentale",
    shortTitle: "Fondamental",
    subtitle: "Construire les apprentissages essentiels",
    grades: "Enseignement fondamental",
    color: "indigo",
    overview:
      "L'enseignement fondamental permet aux élèves de développer progressivement les connaissances et compétences essentielles en lecture, écriture, mathématiques, sciences, langues, sciences sociales et éducation citoyenne.",
    classes: [
      "1er cycle fondamental",
      "2e cycle fondamental",
      "3e cycle fondamental, jusqu'à la 9e année",
    ],
    objectives: [
      "Maîtriser la lecture, l'écriture et l'expression écrite",
      "Consolider le raisonnement et les compétences mathématiques",
      "Développer la démarche d'observation et d'expérimentation en sciences",
      "Acquérir des méthodes de travail et le sens de l'effort",
      "Comprendre son environnement social, historique et géographique",
      "Préparer les élèves de 9e année aux examens officiels",
    ],
    subjects: [
      "Lecture et écriture",
      "Mathématiques",
      "Sciences",
      "Langues",
      "Sciences sociales",
      "Éducation citoyenne",
    ],
    approach: [
      {
        label: "Des bases solides",
        text: "Le travail quotidien met l'accent sur la maîtrise progressive des savoirs fondamentaux avant d'aborder des contenus plus complexes.",
      },
      {
        label: "Discipline et responsabilité",
        text: "La discipline, le respect et le sens des responsabilités, valeurs de l'établissement, accompagnent les apprentissages au quotidien.",
      },
      {
        label: "Préparer les examens officiels",
        text: "L'établissement accorde une attention particulière à la préparation des élèves de 9e année fondamentale aux examens officiels.",
      },
    ],
    admissions:
      "La demande de préinscription en section fondamentale se fait en ligne. Le secrétariat précise ensuite le niveau d'entrée, les pièces à fournir et les modalités applicables.",
    gallery: [
      "fondamentalGroupe",
      "fondamentalClasse",
      "fondamentalGroupe2",
      "rassemblementRangs",
    ] as const,
  },
  {
    id: "secondaire",
    title: "Section Secondaire",
    shortTitle: "Secondaire",
    subtitle: "Préparer les examens officiels et la suite du parcours",
    grades: "Enseignement secondaire",
    color: "emerald",
    overview:
      "Le secondaire accompagne les élèves vers une formation académique plus approfondie et les prépare notamment aux examens officiels, aux études supérieures, à la formation professionnelle et à leur future intégration dans la société.",
    classes: [
      "Classes du secondaire",
      "Préparation aux examens officiels",
    ],
    objectives: [
      "Approfondir les connaissances disciplinaires et l'analyse",
      "Préparer méthodiquement les examens officiels",
      "Développer l'autonomie de travail et l'esprit critique",
      "Construire un projet d'études supérieures ou de formation professionnelle",
      "Assumer des responsabilités au sein de l'établissement et de la communauté",
    ],
    subjects: [
      "Français et littérature",
      "Mathématiques",
      "Sciences",
      "Langues",
      "Sciences sociales",
      "Éducation citoyenne",
    ],
    approach: [
      {
        label: "Exigence académique",
        text: "La section secondaire vise une formation académique approfondie et accorde une attention particulière à la préparation des examens officiels.",
      },
      {
        label: "Autonomie et responsabilité",
        text: "L'ISAJ forme des jeunes instruits, responsables, autonomes et engagés dans le développement de leur communauté.",
      },
      {
        label: "Préparer la suite",
        text: "Le secondaire prépare les élèves aux études supérieures, à la formation professionnelle et à leur future intégration dans la société.",
      },
    ],
    admissions:
      "La demande de préinscription au secondaire se fait en ligne. Le secrétariat communique ensuite le dossier à constituer et les modalités d'admission applicables.",
    gallery: [
      "secondaireGroupe",
      "classeSecondaire",
      "drapeau",
      "secondaireLigne2",
    ] as const,
  },
] as const;

export type GradeProfile = (typeof gradeProfiles)[number];

/** Les clés de `gallery` renvoient au catalogue photographique. */
export type GradeGalleryKey = PhotoKey;
