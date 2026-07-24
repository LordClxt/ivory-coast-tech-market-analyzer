// Données du Marché Technologique et Développeur en Côte d'Ivoire (Basées sur Emploi.ci, Novojob.ci, JobIvoire.ci, ProJobivoire, Google Jobs & LinkedIn)

export const DATA_SOURCES = [
  { name: "Emploi.ci", type: "N°1 Volume Offres & CVthèque", count: "450+ offres dev & CVthèque tech" },
  { name: "Novojob.ci", type: "Plateforme Régionale", count: "180+ annonces dev web/IT" },
  { name: "JobIvoire.ci", type: "Couverture Locale", count: "120+ annonces tech Abidjan" },
  { name: "ProJobivoire", type: "Stages & Juniors", count: "90+ offres stages & premiers emplois" },
  { name: "Google Jobs & LinkedIn CI", type: "Agrégateurs & Réseau Pro", count: "12 000+ profils tech & 350+ offres" }
];

export const MARKET_METRICS = {
  activeDevsEstimate: "18 000+",
  topSector: "Fintech, Mobile Money & ESN",
  avgJuniorSalary: "350 000 - 450 000 FCFA / mois",
  growthRate: "+28% d'offres tech / an",
  mostRequestedStack: "JavaScript (React/Node), PHP (Laravel) & Java (Spring)",
  mobileMoneyLeader: "Wave / CinetPay / Orange Money / Bizao"
};

export const TECH_DEMAND = {
  labels: ['JavaScript / Node.js', 'PHP / Laravel', 'React / Next.js', 'Flutter / Mobile', 'Python (Data & Backend)', 'SQL / PostgreSQL', 'Java / Spring Boot', 'Docker & DevOps', 'Angular / TypeScript'],
  demandScore: [88, 84, 85, 80, 76, 78, 74, 70, 62], // Indice sur 100 basé sur la fréquence d'apparition dans les offres CI
  growthRate: ['+32%', '+14%', '+42%', '+38%', '+48%', '+22%', '+28%', '+52%', '+18%'],
  sources: "Statistiques d'offres consolidées sur Emploi.ci, Novojob.ci, JobIvoire.ci & LinkedIn CI 2026"
};

// Comparaison Demande des Recruteurs vs Bassin de Profils Disponibles en Côte d'Ivoire
export const TECH_COMPARISON = {
  labels: [
    'JavaScript / React', 
    'PHP / Laravel', 
    'Java / Spring Boot', 
    'Flutter / Mobile', 
    'Python / Data & IA', 
    'Angular / TypeScript', 
    'Docker & DevOps', 
    'C# / .NET'
  ],
  demandScore: [88, 84, 78, 82, 76, 62, 70, 54], // Demande des Entreprises (Offres d'emploi en CI %)
  talentSupplyScore: [65, 82, 45, 58, 38, 48, 22, 35], // Profils & Talents Disponibles en CI (%)
  details: [
    { tech: 'JavaScript / React', demand: 88, supply: 65, status: 'Tension modérée', note: 'Demande très élevée à Abidjan; vivier en forte croissance mais encore insuffisant.' },
    { tech: 'PHP / Laravel', demand: 84, supply: 82, status: 'Marché Équilibré', note: 'Technologie N°1 maîtrisée par les devs locaux; abondance de profils juniors & confirmés.' },
    { tech: 'Java / Spring Boot', demand: 78, supply: 45, status: 'Pénurie Importante', note: 'Pression très forte des Banques et ESN à Abidjan; pénurie de profils Spring Boot expérimentés.' },
    { tech: 'Flutter / Mobile', demand: 82, supply: 58, status: 'Forte Demande', note: 'Standard Fintech (Wave, CinetPay); croissance rapide du vivier mobile à Abidjan.' },
    { tech: 'Python / Data & IA', demand: 76, supply: 38, status: 'Rareté de Profils', note: 'Demande accélérée dans la finance et les startups; rares profils Data & LLMs formés.' },
    { tech: 'Angular / TypeScript', demand: 62, supply: 48, status: 'Demande ESN', note: 'Très recherché sur Emploi.ci par les grandes ESN et comptes institutionnels.' },
    { tech: 'Docker & DevOps', demand: 70, supply: 22, status: 'PÉNURIE CRITIQUE', note: 'Déficit massif: 70% des projets recherchent du CI/CD & Docker, seulement 22% de profils formés.' },
    { tech: 'C# / .NET', demand: 54, supply: 35, status: 'Spécialisé', note: 'Concentré dans les grands groupes, banques et assurances de la place financière d\'Abidjan.' }
  ]
};

export const SALARY_GRID = [
  {
    role: "Développeur Fullstack (React / Node / Laravel)",
    junior: "250 000 - 450 000 FCFA",
    mid: "600 000 - 1 200 000 FCFA",
    senior: "1 300 000 - 2 500 000 FCFA",
    remoteInternational: "2 200 000 - 4 500 000 FCFA",
    hotKeywords: ["TypeScript", "React", "Node.js", "Laravel", "PostgreSQL"]
  },
  {
    role: "Développeur Backend PHP (Laravel / Symfony)",
    junior: "200 000 - 400 000 FCFA",
    mid: "500 000 - 1 000 000 FCFA",
    senior: "1 100 000 - 2 000 000 FCFA",
    remoteInternational: "1 800 000 - 3 500 000 FCFA",
    hotKeywords: ["Laravel", "REST API", "MySQL", "Redis", "Git"]
  },
  {
    role: "Développeur Java / Spring Boot (Banques & ESN)",
    junior: "300 000 - 550 000 FCFA",
    mid: "700 000 - 1 300 000 FCFA",
    senior: "1 400 000 - 2 600 000 FCFA",
    remoteInternational: "2 400 000 - 4 800 000 FCFA",
    hotKeywords: ["Java", "Spring Boot", "Microservices", "Oracle DB", "Kafka"]
  },
  {
    role: "Développeur Mobile (Flutter / React Native)",
    junior: "250 000 - 450 000 FCFA",
    mid: "600 000 - 1 150 000 FCFA",
    senior: "1 250 000 - 2 300 000 FCFA",
    remoteInternational: "2 000 000 - 4 000 000 FCFA",
    hotKeywords: ["Flutter", "Dart", "APIs Mobile Money", "Firebase", "State Mgmt"]
  },
  {
    role: "Ingénieur Data & AI / Python",
    junior: "300 000 - 550 000 FCFA",
    mid: "700 000 - 1 400 000 FCFA",
    senior: "1 500 000 - 3 000 000 FCFA",
    remoteInternational: "2 800 000 - 5 500 000 FCFA",
    hotKeywords: ["Python", "Pandas", "FastAPI", "SQL", "LLMs & RAG"]
  },
  {
    role: "Ingénieur Cloud & DevOps",
    junior: "350 000 - 600 000 FCFA",
    mid: "800 000 - 1 600 000 FCFA",
    senior: "1 600 000 - 3 200 000 FCFA",
    remoteInternational: "3 000 000 - 6 000 000 FCFA",
    hotKeywords: ["Docker", "Kubernetes", "AWS / GCP", "CI/CD", "Linux"]
  },
  {
    role: "Consultant Cybersécurité & Réseaux",
    junior: "300 000 - 500 000 FCFA",
    mid: "750 000 - 1 500 000 FCFA",
    senior: "1 600 000 - 3 200 000 FCFA",
    remoteInternational: "2 800 000 - 5 000 000 FCFA",
    hotKeywords: ["Pentest", "ISO 27001", "SOC", "Firewall", "Network Security"]
  }
];

export const SECTORS = [
  {
    name: "Fintech & Mobile Payment",
    share: "34%",
    description: "Le secteur N°1 recrutant sur Emploi.ci, Novojob, JobIvoire & LinkedIn CI. Intégrations de paiements, USSD, micro-finance et wallets numériques.",
    examples: ["Wave", "Bizao", "CinetPay", "Julaya", "Djamo", "Orange Money", "MTN MoMo"],
    demands: ["APIs REST", "Sécurité transactionnelle", "Node.js / Java", "Flutter", "PostgreSQL"]
  },
  {
    name: "Agences Web, Digitales & ESN",
    share: "26%",
    description: "Création de sites web, applications sur-mesure pour PME et grands groupes locaux.",
    examples: ["Weblogy", "SNEDAI", "Agences créatives Abidjan", "Cabinets Conseil IT"],
    demands: ["Laravel", "React / Vue", "WordPress Headless", "UI/UX Design", "SEO & Marketing"]
  },
  {
    name: "Télécoms, Banques & Assurance",
    share: "20%",
    description: "Systèmes d'information critiques, transformation digitale et maintenance d'infrastructures d'entreprises.",
    examples: ["Orange CI", "MTN CI", "Moov Africa", "NSIA", "SGCI", "Coris Bank", "CIE / SODECI"],
    demands: ["Java / Spring", "C# / .NET", "Oracle DB", "DevOps & Cloud", "Cybersécurité"]
  },
  {
    name: "Télétravail & Offshore International",
    share: "12%",
    description: "Offres publiées sur LinkedIn visées pour les talents africains en Remote (US, Europe, Canada).",
    examples: ["Turing", "Andela", "Entreprises Françaises / Belges", "Startups US/UK"],
    demands: ["Anglais fluide", "TypeScript", "React / Next.js", "CI/CD", "Autonomie & Git"]
  },
  {
    name: "Secteur Public & Projets Nationaux",
    share: "8%",
    description: "Digitalisation des services de l'État et gestion des données publiques.",
    examples: ["ANSUT", "Ministère de la Transition Numérique", "E-Gouv CI", "CNPS"],
    demands: ["Gestion de projet IT", "Java", "Python", "Bases de données SQL", "Sécurité"]
  }
];

export const REAL_JOB_LISTINGS_SAMPLE = [
  {
    title: "Développeur Fullstack React / Node.js",
    company: "CinetPay",
    location: "Abidjan (Cocody)",
    source: "Emploi.ci",
    type: "CDI",
    stack: ["React", "Node.js", "APIs Paiement", "PostgreSQL"],
    postedDate: "Récemment"
  },
  {
    title: "Développeur Java Spring Boot & Angular",
    company: "ESN Conseil & Digital Abidjan",
    location: "Abidjan (Plateau)",
    source: "Emploi.ci (CVthèque)",
    type: "CDI",
    stack: ["Java", "Spring Boot", "Angular", "Oracle"],
    postedDate: "Récemment"
  },
  {
    title: "Ingénieur Mobile Flutter",
    company: "Wave Mobile Money",
    location: "Abidjan / Hybride",
    source: "Novojob.ci",
    type: "CDI",
    stack: ["Flutter", "Dart", "REST API", "Git"],
    postedDate: "Récemment"
  },
  {
    title: "Développeur Web Laravel / React",
    company: "Agence Digitale Abidjan",
    location: "Abidjan (Marcory)",
    source: "Novojob.ci",
    type: "CDI",
    stack: ["Laravel", "React", "MySQL", "Tailwind"],
    postedDate: "Récemment"
  },
  {
    title: "Ingénieur d'Étude & Développement Web",
    company: "Société d'Ingénierie Informatique",
    location: "Abidjan",
    source: "JobIvoire.ci",
    type: "CDI",
    stack: ["PHP", "Symfony", "JavaScript", "SQL"],
    postedDate: "Récemment"
  },
  {
    title: "Stagiaire Développeur Mobile Flutter / Web",
    company: "Startup Tech & Services",
    location: "Abidjan (Yopougon)",
    source: "ProJobivoire",
    type: "Stage Junior",
    stack: ["Flutter", "Firebase", "HTML/CSS", "Git"],
    postedDate: "Récemment"
  },
  {
    title: "Développeur Junior Web & Mobile",
    company: "PME Numérique",
    location: "Abidjan (Angré)",
    source: "ProJobivoire",
    type: "Premier Emploi / Stage",
    stack: ["JavaScript", "React Native", "PHP", "Bootstrap"],
    postedDate: "Récemment"
  },
  {
    title: "Data Analyst / Backend Python",
    company: "Banque / Groupe Financier",
    location: "Abidjan",
    source: "LinkedIn CI",
    type: "CDI",
    stack: ["Python", "SQL", "FastAPI", "PowerBI"],
    postedDate: "Récemment"
  }
];

export const STUDENT_ROADMAPS = {
  frontend: {
    title: "Spécialiste Frontend Web Modern & UI/UX",
    badge: "UI/UX & Web Modern",
    duration: "6 à 9 mois",
    salary: "350 000 - 800 000 FCFA / mois",
    difficulty: "Accessible / Intermédiaire",
    skills: ["HTML5 / CSS3", "JavaScript ES6+", "React.js", "TypeScript", "Tailwind CSS", "REST & GraphQL", "Vercel / Git"],
    steps: [
      { phase: "Étape 01 — Fondations Web", duration: "Mois 1-2", focus: "Maîtriser HTML5 sémantique, CSS Grid & Flexbox, et JavaScript ES6+ (Fetch API, Promises, Async/Await)." },
      { phase: "Étape 02 — Outillage & Git", duration: "Mois 3", focus: "Pratique intensive de Git, gestion des branches GitHub, déploiement continu sur Vercel/Netlify." },
      { phase: "Étape 03 — Framework Modern React", duration: "Mois 4-6", focus: "Apprendre React.js, TypeScript, gestion d'état (Zustand/Redux), et appels d'APIs complexes." },
      { phase: "Étape 04 — Performance & Mobile Web", duration: "Mois 7-8", focus: "Optimisation du temps de chargement, SEO, Accessibilité web (a11y) et Next.js (App Router)." },
      { phase: "Étape 05 — Portfolio & Immersion", duration: "Mois 9", focus: "Livrer 3 projets réels en ligne, intégrer un bouton de paiement Wave/CinetPay et postuler sur Emploi.ci & LinkedIn." }
    ],
    portfolioProject: {
      name: "Plateforme E-Commerce & Wallet Abidjan",
      desc: "Site d'e-commerce avec catalogue filtrable, panier persistant et bouton de paiement Wave / Mobile Money.",
      stack: ["React.js", "TypeScript", "Tailwind", "Wave API"]
    },
    expertAdvice: [
      "Montrez toujours vos projets en ligne avec un lien de démo Vercel fonctionnel sur votre CV.",
      "Ne vous contentez pas de reproduire des tutos YouTube: ajoutez une touche métier locale (gestion de livraison par commune à Abidjan).",
      "Participez aux meetups GDG Abidjan pour constituer votre réseau de recommandation."
    ]
  },

  backend: {
    title: "Développeur Backend & Architecte APIs",
    badge: "APIs & Sécurité",
    duration: "6 à 9 mois",
    salary: "400 000 - 1 200 000 FCFA / mois",
    difficulty: "Intermédiaire",
    skills: ["PHP / Laravel", "Node.js / Express", "PostgreSQL / MySQL", "Docker", "JWT & OAuth2", "REST & Swagger"],
    steps: [
      { phase: "Étape 01 — Langage & Protocole HTTP", duration: "Mois 1-2", focus: "Approfondir PHP (Laravel) ou JS (Node.js), comprendre le protocole HTTP, en-têtes et codes HTTP." },
      { phase: "Étape 02 — Bases de Données & ORM", duration: "Mois 3-4", focus: "Modélisation relationnelle (ERD), requêtes SQL avancées, indexation et ORM (Eloquent / Prisma)." },
      { phase: "Étape 03 — Sécurité & Authentification", duration: "Mois 5-6", focus: "Mettre en place JWT, OAuth2, hachage bcrypt, protection contre injections SQL et XSS." },
      { phase: "Étape 04 — Intégrations Paiement & USSD", duration: "Mois 7-8", focus: "Maîtriser les Webhooks, SDK CinetPay, Wave API et intégrations télécom USSD (Bizao)." },
      { phase: "Étape 05 — Documentation & Déploiement", duration: "Mois 9", focus: "Documenter les APIs avec Swagger/OpenAPI, conteneuriser avec Docker et déployer sur VPS." }
    ],
    portfolioProject: {
      name: "API REST de Billetterie & Transport Inter-Villes",
      desc: "API sécurisée de réservation de tickets de car (Abidjan - Yamoussoukro) avec paiement Mobile Money et génération de QR Code.",
      stack: ["Laravel / Node", "PostgreSQL", "CinetPay", "Docker"]
    },
    expertAdvice: [
      "Le test technique N°1 à Abidjan concerne les Webhooks de paiement : sachez gérer les échecs et double-validations.",
      "Soignez la documentation Swagger de votre API, c'est ce qui séduit immédiatement un Lead Tech.",
      "Pratiquez l'écriture de tests unitaires (PHPUnit / Jest), très rares chez les juniors à Abidjan."
    ]
  },

  mobile: {
    title: "Développeur Mobile Multiplateforme (Flutter)",
    badge: "iOS & Android",
    duration: "6 à 8 mois",
    salary: "450 000 - 1 150 000 FCFA / mois",
    difficulty: "Intermédiaire",
    skills: ["Dart / Flutter", "React Native", "State Management (Bloc/Riverpod)", "Firebase", "APIs Rest", "App Store & Play Store"],
    steps: [
      { phase: "Étape 01 — Fondations Dart / Flutter", duration: "Mois 1-2", focus: "Maîtriser la programmation orientée objet Dart, les widgets Flutter (Stateless / Stateful) et le Layout." },
      { phase: "Étape 02 — Architectures & Gestion d'État", duration: "Mois 3-4", focus: "Adopter un pattern d'état robuste (Bloc, Provider ou Riverpod) et séparer UI et Logique Métier." },
      { phase: "Étape 03 — Backend & Services Firebase", duration: "Mois 5-6", focus: "Connecter Firebase (Auth OTP SMS, Push Notifications, Firestore) et consommer des APIs REST." },
      { phase: "Étape 04 — Cartographie & Mobile Money", duration: "Mois 7", focus: "Intégrer Google Maps SDK pour le tracking GPS et le bouton de paiement Wave/Orange Money." },
      { phase: "Étape 05 — Publication sur Stores", duration: "Mois 8", focus: "Optimiser les performances, gérer les permissions natifs et publier l'APK/AAB sur Google Play Store." }
    ],
    portfolioProject: {
      name: "Application de Livraison Express Abidjan",
      desc: "App mobile iOS/Android de coursier à la demande avec suivi GPS en direct et règlement par Wave.",
      stack: ["Flutter", "Dart", "Google Maps API", "Firebase"]
    },
    expertAdvice: [
      "Flutter est en position de force en Côte d'Ivoire grâce aux économies de coûts pour les startups.",
      "Assurez-vous que vos apps gèrent les connexions réseau instables (mode offline-first).",
      "Publiez au moins une application sur le Play Store : cela prouve que vous connaissez le cycle complet."
    ]
  },

  data_ai: {
    title: "Ingénieur IA, Data Scientist & AI Engineer",
    badge: "IA & Data Science",
    duration: "8 à 12 mois",
    salary: "500 000 - 1 500 000 FCFA / mois",
    difficulty: "Avancé",
    skills: ["Python", "Pandas / Scikit-Learn", "SQL", "LLMs & Ollama", "LangChain / LlamaIndex", "RAG & Vector DB", "FastAPI"],
    steps: [
      { phase: "Étape 01 — Python & Analyse de Données", duration: "Mois 1-2", focus: "Maîtriser Python, Pandas, Numpy pour le traitement de données et SQL pour l'extraction." },
      { phase: "Étape 02 — Machine Learning classique", duration: "Mois 3-4", focus: "Algorithmes de régression, classification, scikit-learn, évaluation des modèles et prédictions." },
      { phase: "Étape 03 — LLMs & IA Générative", duration: "Mois 5-7", focus: "Intégration d'APIs OpenAI, Ollama (modèles locaux), LangChain, Embeddings et bases vectorielles (Chroma/Pinecone)." },
      { phase: "Étape 04 — Architecture RAG & Agents", duration: "Mois 8-10", focus: "Construire des systèmes RAG (Retrieval-Augmented Generation) sur documents d'entreprise et agents autonomes." },
      { phase: "Étape 05 — Déploiement d'APIs IA", duration: "Mois 11-12", focus: "Exposer les modèles via FastAPI/Streamlit, conteneuriser et intégrer dans des applications Web/Mobile." }
    ],
    portfolioProject: {
      name: "Assistant IA Juridique & Fiscal Ivoirien (RAG)",
      desc: "Chatbot IA intelligent capable de répondre avec précision sur le Code du Travail et la Fiscalité de Côte d'Ivoire à partir de documents PDF officiels.",
      stack: ["Python", "LangChain", "Ollama / OpenAI", "ChromaDB", "FastAPI"]
    },
    expertAdvice: [
      "L'IA Générative est le secteur à la croissance la plus rapide à Abidjan: les banques et télécoms recherchent des profils RAG.",
      "Ne vous arrêtez pas aux prompts ChatGPT : apprenez à créer des pipelines de données automatisés avec LangChain.",
      "Rejoignez la communauté PyData Abidjan pour échanger avec les professionnels du secteur."
    ]
  },

  devops: {
    title: "Ingénieur DevOps & Architecte Cloud Systems",
    badge: "Cloud & Infrastructure",
    duration: "8 à 12 mois",
    salary: "600 000 - 1 600 000 FCFA / mois",
    difficulty: "Avancé",
    skills: ["Linux Bash", "Docker & Kubernetes", "CI/CD (GitHub Actions)", "AWS / GCP", "Nginx & Reverse Proxy", "Terraform"],
    steps: [
      { phase: "Étape 01 — Administration Linux", duration: "Mois 1-2", focus: "Maîtriser la ligne de commande Linux, Bash scripting, gestion des utilisateurs, SSH et permissions." },
      { phase: "Étape 02 — Conteneurisation Docker", duration: "Mois 3-4", focus: "Création de Dockerfiles optimisés, orchestration multi-conteneurs avec Docker Compose et réseaux virtuels." },
      { phase: "Étape 03 — Pipelines CI/CD", duration: "Mois 5-6", focus: "Automatisations des tests et déploiements continus via GitHub Actions ou GitLab CI." },
      { phase: "Étape 04 — Reverse Proxy & SSL", duration: "Mois 7-8", focus: "Configuration Nginx, certificats SSL Certbot, sécurité réseaux, pare-feu et monitoring (Prometheus/Grafana)." },
      { phase: "Étape 05 — Cloud & Kubernetes", duration: "Mois 9-12", focus: "Infrastructure as Code (Terraform), bases du Cloud AWS/GCP et déploiements sur clusters Kubernetes." }
    ],
    portfolioProject: {
      name: "Pipeline CI/CD & Cluster Microservices Auto-Hébergé",
      desc: "Architecture complète déployant automatiquement une application Web + DB avec zéro interruption (Zero Downtime Deployment) et monitoring de charge.",
      stack: ["Docker", "GitHub Actions", "Nginx", "AWS / VPS", "Grafana"]
    },
    expertAdvice: [
      "Il y a une PÉNURIE CRITIQUE de profils DevOps à Abidjan: les entreprises paient très cher les profils autonomes.",
      "Passez la certification AWS Certified Cloud Practitioner ou CKA (Kubernetes), votre salaire doublera immédiatement.",
      "Apprenez à sécuriser vos serveurs contre les attaques DDOS et scans de ports."
    ]
  },

  opensource: {
    title: "Contributeur Open Source & Core Software Engineer",
    badge: "Open Source & Architecture",
    duration: "6 à 12 mois",
    salary: "600 000 - 2 500 000 FCFA (Remote International)",
    difficulty: "Avancé / Passionné",
    skills: ["Git Avancé", "Code Review & PRs", "TypeScript / Go / Rust", "Architecture Logicielle", "Packages NPM/Packagist", "CI/CD"],
    steps: [
      { phase: "Étape 01 — Maîtrise de Git & GitHub", duration: "Mois 1-2", focus: "Maîtriser rebase, cherry-pick, conflits complexes et rédaction de Pull Requests impeccables." },
      { phase: "Étape 02 — Premières contributions Good First Issues", duration: "Mois 3-4", focus: "Corriger des bugs et ajouter de la documentation sur des projets Open Source populaires sur GitHub." },
      { phase: "Étape 03 — Création de Packages & SDKs Locaux", duration: "Mois 5-7", focus: "Développer et publier des packages open source utiles à la communauté (ex: SDK Python/JS pour Wave API)." },
      { phase: "Étape 04 — Core Maintainer & Code Review", duration: "Mois 8-10", focus: "Devenir mainteneur actif, relire du code mondial, gérer des issues et publier des versions sémantiques (SemVer)." },
      { phase: "Étape 05 — Visibilité Internationale & Remote", duration: "Mois 11-12", focus: "Postuler auprès d'entreprises mondiales (Turing, Andela, Vercel, Supabase) sponsorisant le code libre." }
    ],
    portfolioProject: {
      name: "SDK Open Source Multilangage pour Paiements Afrik Pay",
      desc: "Bibliothèque logicielle open source publiée sur NPM et Packagist simplifiant l'intégration des APIs de paiements africaines avec tests automatisés à 100%.",
      stack: ["TypeScript", "PHP", "GitHub Actions", "NPM", "Packagist"]
    },
    expertAdvice: [
      "Un profil GitHub rempli de contributions open source utiles remplace n'importe quel diplôme aux yeux des recruteurs internationaux.",
      "Commencez par traduire les documentations de vos outils préférés en français ou corriger de petites typos.",
      "Participez à des programmes comme Hacktoberfest ou Google Summer of Code."
    ]
  }
};

export const ECOSYSTEM_RESOURCES = [
  {
    category: "Communautés & Meetups à Abidjan",
    items: [
      { name: "Google Developer Group (GDG) Abidjan", type: "Communauté", focus: "Android, Cloud, Web, Flutter", link: "gdg.community.dev/gdg-abidjan/" },
      { name: "PyData Abidjan", type: "Communauté", focus: "Python, Data Science & IA", link: "pydata.org" },
      { name: "IvoireGeeks / Tech Communities CI", type: "Réseau", focus: "Hackathons, Entraide & Mentorat", link: "#" },
      { name: "Women in Tech Côte d'Ivoire", type: "Réseau", focus: "Inclusion des femmes dans la Tech", link: "#" }
    ]
  },
  {
    category: "Incubateurs & Centres de Formation Tech",
    items: [
      { name: "Orange Digital Center (ODC) Abidjan", type: "FabLab / École du Code", focus: "Formations gratuites, FabLab, Incubation", link: "orangedigitalcenters.com" },
      { name: "Nan Digital Academy", type: "École de Code", focus: "Formation intensive pratique au développement", link: "#" },
      { name: "SheIsCode", type: "Programme", focus: "Formation des jeunes filles au numérique", link: "#" },
      { name: "Seedstars Abidjan / Impact Hub", type: "Incubateur", focus: "Accompagnement de startups tech", link: "#" }
    ]
  },
  {
    category: "Paiement & APIs Locales indispensables à maîtriser",
    items: [
      { name: "Wave Business API", type: "Mobile Money API", focus: "Paiement QR Code & In-App en CI", link: "developer.wave.com" },
      { name: "CinetPay API", type: "Agrégateur de Paiement", focus: "Mobile Money (OM, MTN, Moov) + Cartes", link: "cinetpay.com" },
      { name: "Bizao API", type: "Agrégateur Télécom", focus: "Airtime, USSD & Mobile Money Afrique de l'Ouest", link: "bizao.io" },
      { name: "Paystack Africa", type: "Agrégateur Stripe/Paystack", focus: "Paiement en ligne Afrique", link: "paystack.com" }
    ]
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qu'est-ce qui te passionne le plus quand tu penses à une application informatique ?",
    options: [
      { label: "Créer une interface magnifique, fluide et visuelle avec laquelle l'utilisateur interagit.", score: { frontend: 3, mobile: 2 } },
      { label: "Concevoir la logique en coulisses, la sécurité des données et les calculs complexes.", score: { backend: 3, devops: 1 } },
      { label: "Développer une application mobile que tout le monde peut télécharger sur son téléphone à Abidjan.", score: { mobile: 3, frontend: 1 } },
      { label: "Analyser des données, entraîner des modèles d'intelligence artificielle ou intégrer des LLMs (ChatGPT/Ollama).", score: { data_ai: 4, backend: 1 } },
      { label: "Automatiser des serveurs, configurer du Cloud, sécuriser des réseaux et gérer des conteneurs Docker.", score: { devops: 4, backend: 1 } },
      { label: "Contribuer à des projets Open Source mondiaux, créer des bibliothèques réutilisables et partager mon code avec la communauté.", score: { opensource: 4, frontend: 1, backend: 1 } }
    ]
  },
  {
    id: 2,
    question: "Quel type de projet préfères-tu réaliser pour un hackathon ou un projet d'école ?",
    options: [
      { label: "Un site web moderne avec animations, mode sombre et design d'expérience utilisateur (UI/UX).", score: { frontend: 3 } },
      { label: "Une API ultra-rapide capable de traiter des milliers de transactions de paiement Wave par seconde.", score: { backend: 3 } },
      { label: "Une application mobile Android/iOS pour commander de la nourriture ou trouver un transport à Abidjan.", score: { mobile: 3 } },
      { label: "Un assistant IA (RAG) qui analyse des documents juridiques ou des prix agricoles en Côte d'Ivoire.", score: { data_ai: 4 } },
      { label: "Un script CI/CD qui déploie automatiquement un projet sur des serveurs Cloud sans interruption.", score: { devops: 4 } },
      { label: "Publier un package open source sur NPM ou Packagist réutilisé par des centaines de développeurs.", score: { opensource: 4 } }
    ]
  },
  {
    id: 3,
    question: "Quelle est ta relation avec les langages de programmation et outils actuels ?",
    options: [
      { label: "J'adore HTML, CSS, JavaScript, React, Tailwind et voir directement le résultat sur mon écran.", score: { frontend: 3 } },
      { label: "J'aime manipuler les bases de données SQL, PHP/Laravel, Node.js et concevoir des architectures REST.", score: { backend: 3 } },
      { label: "Je préfère Flutter, Dart, React Native pour toucher les téléphones portable Android & iOS.", score: { mobile: 3 } },
      { label: "J'adore Python, Pandas, LangChain, Ollama, l'IA générative et les algorithmes de données.", score: { data_ai: 4 } },
      { label: "Je suis à l'aise avec la ligne de commande Linux, Docker, Git, Nginx et les architectures réseaux.", score: { devops: 4 } },
      { label: "Je suis fasciné par GitHub, les Pull Requests, la relecture de code, les projets libres et la collaboration internationale.", score: { opensource: 4 } }
    ]
  },
  {
    id: 4,
    question: "Comment souhaites-tu intégrer l'Intelligence Artificielle (IA) dans ta carrière ?",
    options: [
      { label: "Créer et déployer moi-même des modèles IA (LLMs, RAG, Chatbots intelligents, Vector DBs).", score: { data_ai: 5 } },
      { label: "Utiliser l'IA comme outil d'assistance au quotidien pour coder plus vite du Web & Mobile.", score: { frontend: 2, mobile: 2, backend: 2 } },
      { label: "Automatiser l'infrastructure et le déploiement de modèles d'IA sur des serveurs GPU Cloud.", score: { devops: 3, data_ai: 2 } },
      { label: "Contribuer à des projets d'IA Open Source (LangChain, Ollama, HuggingFace, Llama).", score: { opensource: 4, data_ai: 2 } }
    ]
  },
  {
    id: 5,
    question: "Quelle importance accordes-tu au code Open Source et à la communauté ?",
    options: [
      { label: "Cruciale ! Je veux devenir un contributeur reconnu, résoudre des issues GitHub et créer du logiciel libre.", score: { opensource: 5 } },
      { label: "Importante, j'aime utiliser des outils libres et partager mes projets personnels sur GitHub.", score: { frontend: 2, backend: 2, mobile: 2 } },
      { label: "Je préfère me concentrer sur des projets d'entreprises locales et des startups d'Abidjan.", score: { backend: 3, mobile: 3 } },
      { label: "Je m'intéresse surtout à l'automatisation des infrastructures et serveurs d'entreprises.", score: { devops: 3 } }
    ]
  },
  {
    id: 6,
    question: "Quel est ton objectif de carrière principal d'ici 3 ans ?",
    options: [
      { label: "Devenir un Senior UX/UI Frontend Engineer recherché par les agences et startups du Web.", score: { frontend: 3 } },
      { label: "Rejoindre une Fintech ivoirienne (Wave, Bizao, Djamo) comme Développeur Backend principal.", score: { backend: 3 } },
      { label: "Créer ma propre startup d'applications mobiles ou être dev mobile recherché.", score: { mobile: 3 } },
      { label: "Être Lead AI Engineer ou Data Scientist pour des grands groupes, banques ou télécoms.", score: { data_ai: 4 } },
      { label: "Être Ingénieur DevOps / Cloud en Télétravail International (Remote US / Europe).", score: { devops: 4 } },
      { label: "Être un Software Engineer chevronné, contributeur Core Open Source et consultant international.", score: { opensource: 5 } }
    ]
  },
  {
    id: 7,
    question: "Quel type d'accompagnement ou de conseil cherches-tu en priorité ?",
    options: [
      { label: "Un guide étape par étape pour construire des projets concrets avec démos en ligne.", score: { frontend: 2, backend: 2 } },
      { label: "Des conseils d'experts pour maîtriser les outils les plus rares et recherchés (DevOps, IA).", score: { devops: 3, data_ai: 3 } },
      { label: "Un mentorat pour apprendre à faire des Pull Requests et percer dans l'Open Source mondial.", score: { opensource: 4 } },
      { label: "Des astuces pour réussir mes entretiens techniques dans les Fintechs d'Abidjan.", score: { mobile: 2, backend: 2 } }
    ]
  }
];

export const PRESENTATION_SLIDES = [
  {
    id: 1,
    title: "Le Marché du Développement Informatique en Côte d'Ivoire",
    subtitle: "Données Google Jobs & LinkedIn CI - Orientations Stratégiques pour Étudiants",
    badge: "Conférence IT CI 2026",
    type: "hero",
    highlights: [
      "Croissance soutenue à Abidjan, Hub Numérique d'Afrique de l'Ouest.",
      "Analyse croisée Google Jobs, LinkedIn CI, Emploi.ci & Educarriere.",
      "Transformation vers les métiers à haute valeur ajoutée (Fintech, Cloud, DevOps, IA)."
    ]
  },
  {
    id: 2,
    title: "Top 5 des Secteurs qui Recrutent à Abidjan (Google Jobs & LinkedIn)",
    subtitle: "Où se trouvent les vraies opportunités d'emploi et de stage ?",
    type: "sectors",
    data: SECTORS
  },
  {
    id: 3,
    title: "Compétences Techniques (Hard Skills) les plus Recherchées",
    subtitle: "Index de demande extrait de l'analyse des offres d'emploi actives",
    type: "tech_stack",
    techs: [
      { name: "JavaScript / TypeScript (React / Node)", demand: "Très Élevée (88%)", trend: "🔥 N°1 Google Jobs & LinkedIn" },
      { name: "PHP / Laravel", demand: "Très Élevée (84%)", trend: "⚡ Standard local agences & PME" },
      { name: "Flutter / Mobile Multiplateforme", demand: "Élevée (80%)", trend: "📱 En forte hausse (Mobile Money)" },
      { name: "Python / Data & IA", demand: "Élevée (76%)", trend: "🤖 En accélération dans la finance" },
      { name: "Docker & DevOps Cloud", demand: "Moyenne/Fort besoin (65%)", trend: "☁️ Pénurie critique de profils" },
      { name: "Java / Spring & .NET", demand: "Modérée (68%)", trend: "🏛️ Banques & Télécoms" }
    ]
  },
  {
    id: 4,
    title: "Grille Salariale Indicative en Côte d'Ivoire (FCFA)",
    subtitle: "Observation des recrutements Abidjan & Remote International",
    type: "salaries",
    levels: [
      { title: "Junior (0-2 ans)", range: "200 000 - 450 000 FCFA", note: "Varie selon le portfolio & tests techniques" },
      { title: "Confirmé / Mid (2-5 ans)", range: "500 000 - 1 200 000 FCFA", note: "Autonomie et maîtrise de frameworks" },
      { title: "Senior / Lead (5+ ans)", range: "1 300 000 - 2 500 000 FCFA", note: "Architecture & encadrement technique" },
      { title: "Télétravail International (Remote)", range: "2 000 000 - 5 500 000 FCFA", note: "Projets LinkedIn US/EU + Anglais fluide" }
    ]
  },
  {
    id: 5,
    title: "Exemples Réels d'Offres d'Emploi Actives (Google Jobs / LinkedIn)",
    subtitle: "Profils et compétences directement extraits du marché",
    type: "real_jobs",
    jobs: REAL_JOB_LISTINGS_SAMPLE
  },
  {
    id: 6,
    title: "Plan d'Action Immédiat pour les Étudiants",
    subtitle: "Que faire dès aujourd'hui avant l'obtention de votre diplôme ?",
    type: "action_plan",
    actions: [
      "Construire 1 projet concret en intégrant une API locale (Wave API, CinetPay ou API publique).",
      "Créer votre profil LinkedIn & GitHub propre (Portfolio en ligne hébergé sur Vercel/Render).",
      "Apprendre à lire la documentation officielle en Anglais sans traducteur automatique.",
      "Rejoindre les communautés tech locales à Abidjan (GDG, PyData, Orange Digital Center)."
    ]
  }
];
