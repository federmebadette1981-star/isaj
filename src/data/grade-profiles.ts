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
      "Petite section",
      "Moyenne section",
      "Grande section",
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
      "Premiers apprentissages (pré-lecture, pré-écriture, pré-mathématiques)",
      "Découverte du monde",
      "Expression artistique",
      "Activités motrices et jeux éducatifs",
      "Vie en groupe et hygiène",
    ],
    approach: [
      {
        label: "Apprendre par le jeu",
        text: "Les apprentissages passent par la manipulation, l'observation et le jeu structuré, adaptés au rythme de chaque enfant.",
      },
      {
        label: "Un cadre rassurant",
        text: "Des repères quotidiens stables et un accompagnement attentif permettent à l'enfant de se sentir en sécurité pour apprendre.",
      },
      {
        label: "Un lien étroit avec la famille",
        text: "La responsable du préscolaire et l'enseignante restent en dialogue régulier avec les parents sur les progrès de l'enfant.",
      },
    ],
    admissions:
      "La demande de préinscription au préscolaire se fait en ligne. Le secrétariat recontacte ensuite la famille pour communiquer les pièces requises, les modalités et les prochaines étapes.",
    gallery: ["/isaj-1.jpeg", "/isaj-3.jpeg"],
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
      "Français",
      "Créole",
      "Mathématiques",
      "Sciences expérimentales",
      "Sciences sociales, histoire et géographie",
      "Langues vivantes",
      "Éducation citoyenne et morale",
      "Expression artistique et éducation physique",
    ],
    approach: [
      {
        label: "Des bases solides",
        text: "Le travail quotidien met l'accent sur la maîtrise progressive des savoirs fondamentaux avant d'aborder des contenus plus complexes.",
      },
      {
        label: "Discipline et régularité",
        text: "Le suivi des devoirs, l'assiduité et le comportement font l'objet d'une attention constante des enseignants et du censeur.",
      },
      {
        label: "Un suivi individuel",
        text: "Le responsable académique et les enseignants identifient les difficultés en cours d'année afin d'accompagner chaque élève.",
      },
    ],
    admissions:
      "La demande de préinscription en section fondamentale se fait en ligne. Le secrétariat précise ensuite le niveau d'entrée, les pièces à fournir et les modalités applicables.",
    gallery: ["/isaj-2.jpeg", "/isaj-4.jpeg"],
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
      "Niveaux du secondaire, jusqu'à la classe terminale",
      "Préparation aux examens officiels du secondaire",
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
      "Sciences physiques, chimie et sciences de la vie",
      "Histoire, géographie et éducation à la citoyenneté",
      "Langues vivantes",
      "Philosophie et sciences économiques et sociales",
      "Informatique et éducation physique",
    ],
    approach: [
      {
        label: "Exigence académique",
        text: "Les évaluations régulières et les séances de préparation visent directement les attendus des examens officiels.",
      },
      {
        label: "Autonomie et responsabilité",
        text: "Les élèves sont encouragés à organiser leur travail, à s'engager dans la vie de l'établissement et à prendre des initiatives.",
      },
      {
        label: "Orientation",
        text: "L'équipe accompagne les élèves dans la réflexion sur leurs études supérieures et leur future insertion professionnelle.",
      },
    ],
    admissions:
      "La demande de préinscription au secondaire se fait en ligne. Le secrétariat communique ensuite le dossier à constituer et les modalités d'admission applicables.",
    gallery: ["/isaj-3.jpeg", "/isaj-2.jpeg"],
  },
] as const;

export type GradeProfile = (typeof gradeProfiles)[number];
