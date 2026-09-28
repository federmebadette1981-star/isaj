export const schoolIdentity = {
  name: "Institution Le Saint Justien",
  shortName: "ISAJ",
  openingDate: "Septembre 2011",
  openingYear: "2011",
  location: "Bon-Repos, Croix-des-Bouquets",
  addressLines: [
    "5, Impasse Bernard",
    "Bon-Repos, Croix-des-Bouquets",
    "Route Nationale #1",
    "Haïti",
  ],
  address:
    "5, Impasse Bernard, Bon-Repos, Croix-des-Bouquets, Route Nationale #1, Haïti",
  tagline: "Éduquer aujourd'hui, construire l'avenir.",
  signature: "Éducation • Discipline • Avenir",
  /** Formulation unique de l'effectif, reprise partout sur le site. */
  enrollment: "environ 250 élèves",
  levelsLabel: "Préscolaire • Fondamental • Secondaire",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Institution+Le+Saint+Justien%2C+Impasse+Bernard%2C+Bon-Repos%2C+Croix-des-Bouquets%2C+Ha%C3%AFti",
};

/**
 * Adresse e-mail officielle unique — utilisée sur le site entier :
 * contact, footer, formulaires, partenariat et admissions.
 */
export const officialEmail = "institutionlesaintjustien2000@gmail.com";

export const contactDetails = {
  email: officialEmail,
  phones: [
    { display: "+509 4251-8828", href: "tel:+50942518828" },
    { display: "+509 3745-3087", href: "tel:+50937453087" },
    { display: "+509 3760-4261", href: "tel:+50937604261" },
  ],
};

/** Chiffres clés — page d'accueil. */
export const keyFigures = [
  { value: "2011", label: "Année d'ouverture" },
  { value: "environ 250", label: "Élèves" },
  { value: "Préscolaire · Fondamental · Secondaire", label: "Niveaux d'enseignement" },
  { value: "Bon-Repos", label: "Communauté desservie" },
];

/** Les trois sections de l'établissement. */
export const schoolLevels = [
  {
    id: "prescolaire",
    title: "Section Préscolaire",
    shortTitle: "Préscolaire",
    grades: "Préscolaire",
    description:
      "Le préscolaire accompagne les jeunes enfants dans leurs premiers apprentissages et favorise leur développement intellectuel, social, émotionnel et moteur.",
  },
  {
    id: "fondamental",
    title: "Section Fondamentale",
    shortTitle: "Fondamental",
    grades: "Enseignement fondamental",
    description:
      "L'enseignement fondamental permet aux élèves de développer progressivement les connaissances et compétences essentielles en lecture, écriture, mathématiques, sciences, langues, sciences sociales et éducation citoyenne.",
  },
  {
    id: "secondaire",
    title: "Section Secondaire",
    shortTitle: "Secondaire",
    grades: "Enseignement secondaire",
    description:
      "Le secondaire accompagne les élèves vers une formation académique plus approfondie et les prépare notamment aux examens officiels, aux études supérieures, à la formation professionnelle et à leur future intégration dans la société.",
  },
] as const;

export const institutionalFacts = {
  /**
   * Accroche de la page d'accueil — volontairement courte : les chiffres clés
   * (2011, environ 250 élèves, niveaux, Bon-Repos) sont repris juste en dessous dans
   * la bande de statistiques, inutile de les répéter en toutes lettres.
   */
  heroIntro:
    "Établissement scolaire privé à Bon-Repos, Croix-des-Bouquets. Depuis 2011, l'ISAJ accompagne environ 250 élèves du préscolaire au secondaire, dans un cadre fondé sur l'excellence académique, la discipline et le civisme.",
  /** Présentation complète — page « À propos ». */
  whoWeAre:
    "Institution Le Saint Justien (ISAJ) est un établissement scolaire privé situé à Bon-Repos, Croix-des-Bouquets, Haïti. Depuis son ouverture en septembre 2011, l'établissement œuvre pour offrir aux enfants et aux jeunes une éducation accessible et de qualité, fondée sur l'excellence académique, la discipline, les valeurs humaines, le civisme et l'égalité des chances. L'ISAJ accueille environ 250 élèves, du préscolaire au secondaire.",
  history: [
    "Institution Le Saint Justien (ISAJ) est née d'une volonté de contribuer durablement à l'éducation des enfants et des jeunes de la communauté de Bon-Repos, dans la commune de Croix-des-Bouquets.",
    "Fondée sous l'impulsion de Monsieur Osnel Saint-Juste, Directeur Fondateur, avec la participation de Monsieur Federme Badette comme Cofondateur, l'institution a officiellement ouvert ses portes en septembre 2011.",
    "Depuis sa création, l'ISAJ poursuit une mission éducative centrée sur la formation académique, la discipline, les valeurs humaines et la préparation des jeunes à devenir des citoyens responsables et engagés dans leur communauté.",
    "Au fil des années, l'établissement a développé son enseignement afin d'accompagner les élèves du préscolaire jusqu'au secondaire.",
    "Aujourd'hui, l'ISAJ accueille environ 250 élèves et poursuit ses efforts pour améliorer la qualité de l'enseignement, renforcer ses infrastructures et développer de nouvelles possibilités éducatives pour ses élèves.",
  ],
  mission:
    "Offrir aux enfants et aux jeunes une éducation de qualité, accessible et inclusive, favorisant leur développement académique, personnel, social et citoyen.",
  missionSecond:
    "L'ISAJ s'engage à créer un environnement éducatif structuré où chaque élève peut développer ses connaissances, ses compétences, sa créativité, son sens des responsabilités et sa capacité à contribuer positivement à sa communauté.",
  vision:
    "Construire une institution éducative durable et innovante capable de préparer une nouvelle génération de jeunes instruits, responsables, autonomes et engagés dans le développement de leur communauté et de leur pays.",
  approach:
    "À l'ISAJ, l'éducation ne se limite pas à la transmission des connaissances académiques. Notre approche vise également à développer la discipline, la responsabilité, la confiance en soi, le respect des autres, l'esprit civique et le désir de contribuer positivement à la communauté.",
  directorMessage:
    "Bienvenue à l'Institution Le Saint Justien. Depuis sa création, notre établissement place l'éducation, la discipline, les valeurs et l'avenir de l'enfant au cœur de son action. Notre ambition est d'offrir à chaque élève un cadre dans lequel il peut apprendre, grandir, développer ses talents et devenir un citoyen responsable. Nous remercions les parents, les enseignants, les partenaires et tous ceux qui accompagnent l'ISAJ dans sa mission éducative.",
  promise: "Des enfants brillants, prêts à prendre leur envol",
  institutionalPromise:
    "Former des élèves responsables, compétents et engagés dans leur communauté.",
};

/** Cadre institutionnel — MENFP. */
export const institutionalFramework = {
  title: "Cadre institutionnel",
  paragraphs: [
    "Institution Le Saint Justien exerce ses activités éducatives dans le système scolaire haïtien et relève des autorités éducatives compétentes du Ministère de l'Éducation Nationale et de la Formation Professionnelle (MENFP).",
    "L'établissement est rattaché à la Direction Départementale de l'Éducation de l'Ouest et au district scolaire de Croix-des-Bouquets.",
    "Les documents institutionnels et références administratives peuvent être présentés aux organisations partenaires dans le cadre d'une procédure de vérification.",
  ],
};

/** Résultats académiques — aucun pourcentage tant qu'il n'est pas officiellement vérifié. */
export const academicResults = {
  title: "Résultats académiques",
  paragraphs: [
    "L'Institution Le Saint Justien accompagne ses élèves dans leur préparation aux évaluations scolaires et aux examens officiels du système éducatif haïtien.",
    "L'établissement accorde une attention particulière à la préparation des élèves de 9e année fondamentale et du secondaire aux examens officiels.",
    "Les résultats académiques documentés de l'établissement peuvent être communiqués aux partenaires et institutions dans le cadre de leurs procédures d'évaluation.",
  ],
};

export const values = [
  {
    title: "Excellence académique",
    description: "Encourager chaque élève à développer pleinement son potentiel.",
  },
  {
    title: "Discipline",
    description: "Développer le sens des responsabilités, du respect et du travail.",
  },
  {
    title: "Intégrité",
    description: "Promouvoir l'honnêteté et les comportements responsables.",
  },
  {
    title: "Inclusion",
    description: "Favoriser l'accès à l'éducation et le respect des différences.",
  },
  {
    title: "Citoyenneté",
    description:
      "Former des jeunes conscients de leurs responsabilités envers leur communauté.",
  },
  {
    title: "Solidarité",
    description: "Encourager l'entraide, le partage et l'engagement communautaire.",
  },
];

export const inclusion = {
  title: "Une éducation inclusive",
  paragraphs: [
    "L'ISAJ croit que chaque enfant doit avoir la possibilité d'apprendre et de développer son potentiel.",
    "L'établissement œuvre en faveur d'une éducation inclusive et cherche à renforcer progressivement sa capacité d'accompagnement des élèves ayant des besoins éducatifs particuliers.",
  ],
};

export const community = {
  title: "Notre communauté",
  paragraphs: [
    "Située à Bon-Repos, dans la commune de Croix-des-Bouquets, l'Institution Le Saint Justien dessert des enfants et des familles provenant de la communauté environnante.",
    "Dans un environnement où de nombreuses familles font face à des défis économiques et sociaux importants, l'école cherche à offrir aux jeunes un espace stable consacré à l'apprentissage, à la discipline, au développement personnel et à la préparation de leur avenir.",
    "L'ISAJ souhaite également renforcer progressivement son rôle communautaire grâce à des programmes éducatifs, technologiques, professionnels, culturels et sociaux.",
  ],
};

/** Équipe de l'établissement. */
export const teamMembers = [
  { name: "Osnel Saint-Juste", role: "Directeur Fondateur" },
  { name: "Federme Badette", role: "Cofondateur" },
  { name: "Evens Lafleur", role: "Administrateur / Technicien" },
  { name: "Alina S. Laguerre", role: "Secrétaire" },
  { name: "Barthélémy Renet", role: "Responsable Académique" },
  { name: "Colas Robenson", role: "Censeur" },
  { name: "Lucienne Livert", role: "Responsable Préscolaire" },
  { name: "Pierre Israel", role: "Responsable de Projet" },
];

export const usRepresentation = {
  title: "Représentation aux États-Unis",
  names: ["Federme Badette", "Marie Shella Remy"],
  description:
    "Représentants bénévoles de l'Institution Le Saint Justien aux États-Unis, chargés notamment de soutenir les démarches de partenariat, de coopération et de mobilisation de ressources en faveur de l'établissement.",
};

/** Projets en développement — jamais présentés comme financés ou réalisés. */
export const projects = {
  intro:
    "Au-delà de l'enseignement académique, l'ISAJ cherche à développer des initiatives capables d'améliorer durablement les conditions d'apprentissage et d'offrir de nouvelles possibilités aux élèves.",
  status: "Projet en développement",
  items: [
    {
      title: "Éducation numérique et informatique",
      supportDomain: "Informatique et numérique",
      description:
        "L'ISAJ souhaite développer un laboratoire informatique permettant aux élèves et aux enseignants d'accéder aux outils numériques, aux ressources éducatives et à la formation informatique.",
    },
    {
      title: "Énergie solaire",
      supportDomain: "Énergie et Internet",
      description:
        "L'établissement recherche des partenaires afin de renforcer son autonomie énergétique grâce à une solution solaire adaptée aux besoins de l'école et de ses futurs équipements numériques.",
    },
    {
      title: "Couture et formation pratique",
      supportDomain: "Couture",
      description:
        "L'ISAJ souhaite développer un programme de couture permettant aux jeunes d'acquérir des compétences pratiques pouvant contribuer à leur autonomie future.",
    },
    {
      title: "Musique et éducation artistique",
      supportDomain: "Musique et arts",
      description:
        "L'établissement souhaite permettre aux élèves de découvrir et pratiquer la musique grâce à l'acquisition d'instruments et au développement d'activités d'éducation musicale.",
    },
    {
      title: "Alimentation scolaire",
      supportDomain: "Cantine scolaire",
      description:
        "L'ISAJ souhaite développer un programme de cantine scolaire afin de contribuer au bien-être, à l'assiduité et aux conditions d'apprentissage des élèves.",
    },
  ],
};

export const priorityNeeds = [
  "Alimentation scolaire",
  "Soutien à l'enseignement et aux enseignants",
  "Ordinateurs et équipements numériques",
  "Laboratoire informatique",
  "Énergie solaire",
  "Accès Internet",
  "Machines à coudre",
  "Instruments de musique",
  "Livres et matériel pédagogique",
  "Mobilier scolaire",
  "Amélioration des infrastructures",
  "Développement des capacités institutionnelles",
  "Développement futur des infrastructures scolaires",
];

export const partnership = {
  title: "Devenir partenaire de l'ISAJ",
  paragraphs: [
    "L'Institution Le Saint Justien croit que l'amélioration durable de l'éducation nécessite la collaboration entre les écoles, les communautés, les organisations et les personnes qui partagent la conviction que chaque enfant mérite la possibilité d'apprendre et de construire son avenir.",
    "L'ISAJ souhaite développer des partenariats responsables et durables avec des fondations, ONG, établissements scolaires, entreprises, associations, organisations communautaires et donateurs.",
  ],
  areasTitle: "Domaines de collaboration",
  areas: [
    "Éducation",
    "Alimentation scolaire",
    "Technologie et informatique",
    "Énergie solaire",
    "Formation professionnelle",
    "Musique et culture",
    "Matériel pédagogique",
    "Infrastructure scolaire",
    "Développement institutionnel",
  ],
};

export const transparency = {
  title: "Transparence et documentation",
  paragraphs: [
    "L'ISAJ accorde une importance particulière à la transparence dans ses relations avec ses partenaires.",
    "Selon la nature du partenariat et les exigences de vérification, l'établissement peut mettre à disposition les documents institutionnels et administratifs pertinents.",
  ],
  documentsTitle: "Documents disponibles sur demande",
  documents: [
    "Documents institutionnels",
    "Attestations administratives",
    "Références académiques",
    "Documents relatifs aux projets",
    "Budgets de projets",
    "Rapports d'activités",
    "Photographies et pièces justificatives",
  ],
};

/** Procédure d'inscription. */
export const admissionSteps = [
  {
    title: "Demande de préinscription",
    description: "Le parent ou tuteur complète le formulaire.",
  },
  {
    title: "Contact avec le secrétariat",
    description: "L'administration communique les informations nécessaires.",
  },
  {
    title: "Constitution du dossier",
    description: "Les pièces requises sont présentées au secrétariat.",
  },
  { title: "Validation", description: "L'administration vérifie le dossier." },
  {
    title: "Confirmation",
    description: "L'inscription est confirmée par l'établissement.",
  },
];

export const admissionNote =
  "Les pièces requises, les frais de scolarité et les modalités applicables sont communiqués directement par le secrétariat.";

/* ------------------------------------------------------------------ */
/*  Soutenir l'ISAJ                                                    */
/* ------------------------------------------------------------------ */

export const support = {
  title: "Soutenir l'Institution Le Saint Justien",
  paragraphs: [
    "Chaque contribution peut aider l'Institution Le Saint Justien à renforcer les conditions d'apprentissage et à développer de nouvelles possibilités éducatives pour ses élèves.",
    "Particuliers, anciens élèves, professionnels, entreprises, églises, associations, fondations et autres organisations peuvent soutenir l'ISAJ de différentes manières.",
    "Vous pouvez proposer un soutien financier, du matériel ou des équipements, des fournitures scolaires, une expertise professionnelle, du bénévolat ou un partenariat.",
  ],
  waysTitle: "Comment nous aider ?",
  ways: [
    {
      title: "Don financier",
      description:
        "Contribuer à un projet ou aux besoins prioritaires de l'établissement.",
    },
    {
      title: "Don de matériel ou d'équipement",
      description:
        "Ordinateurs, fournitures, instruments de musique, machines à coudre, mobilier ou autres équipements utiles.",
    },
    {
      title: "Bénévolat et expertise",
      description:
        "Mettre des compétences professionnelles ou techniques au service de l'école.",
    },
    {
      title: "Partenariat",
      description:
        "Développer une collaboration avec l'ISAJ autour d'un projet éducatif ou institutionnel.",
    },
  ],
  formTitle: "Proposition de soutien",
  consent:
    "J'accepte que l'Institution Le Saint Justien utilise les informations fournies pour me contacter au sujet de ma proposition de soutien.",
  submitLabel: "Envoyer ma proposition de soutien",
  confirmation:
    "Merci pour votre volonté de soutenir l'Institution Le Saint Justien. Votre proposition a bien été reçue. L'équipe de l'ISAJ vous contactera afin de vous communiquer les prochaines étapes et les modalités appropriées.",
  transparency: {
    title: "Transparence",
    text: "L'ISAJ accorde une importance particulière à la transparence et à la confiance dans ses relations avec ses donateurs et partenaires. Selon la nature du soutien ou du projet, l'établissement peut fournir des informations de suivi, notamment des nouvelles sur la mise en œuvre, des photographies appropriées, des rapports d'activités et des pièces justificatives pertinentes.",
  },
};

/** Profils de soutien proposés dans le formulaire. */
export const supporterProfiles = [
  "Particulier",
  "Professionnel",
  "Entreprise",
  "Église",
  "Association",
  "Fondation",
  "ONG",
  "Autre",
];

export const supportTypes = [
  "Don financier",
  "Matériel ou équipement",
  "Fournitures scolaires",
  "Services professionnels",
  "Bénévolat",
  "Partenariat",
  "Autre",
];

/** Domaines : repris tels quels dans les boutons « Soutenir ce projet ». */
export const supportDomains = [
  "Cantine scolaire",
  "Informatique et numérique",
  "Couture",
  "Musique et arts",
  "Énergie et Internet",
  "Matériel pédagogique",
  "Soutien général à l'ISAJ",
  "Autre",
];

export const volunteering = {
  title: "Partager vos compétences",
  intro:
    "Vous souhaitez mettre votre temps ou vos compétences au service de l'éducation ? L'ISAJ est ouverte aux propositions de bénévolat et de collaboration professionnelle compatibles avec les besoins de l'établissement et la protection des élèves.",
  participationTypes: ["À distance", "Sur place", "Selon les possibilités"],
  submitLabel: "Proposer mon aide",
  note: "Toute activité impliquant un contact avec des élèves reste soumise aux règles et validations de l'établissement.",
  confirmation:
    "Merci pour votre proposition. L'équipe de l'ISAJ vous contactera afin d'échanger sur les possibilités de collaboration.",
};

/** Appel au soutien affiché en bas de la page d'accueil. */
export const supportCallout = {
  title: "Ensemble, soutenons l'éducation.",
  text: "Vous souhaitez contribuer aux projets et au développement de l'Institution Le Saint Justien ? Découvrez les différentes façons de nous soutenir.",
};
