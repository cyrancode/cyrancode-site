// All the site's text and data, in French and English.

export const LANGS = ["fr", "en"];
export const SITE_URL = "https://cyrancode.pages.dev";
export const WA_NUM = "237672527120";
export const PHONE = "+237 6 72 52 71 20";
export const EMAIL = "cyrancode@gmail.com";
export const PORTFOLIO = "https://cyran-portfolio.vercel.app/";
export const GITHUB = "https://github.com/cyrancode";
export const LINKEDIN = "https://www.linkedin.com/in/njua-cyran-nkwain";

export const wa = (msg) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

// Page ids and their address in each language.
export const PAGES = ["home", "services", "projects", "business", "training", "about", "contact"];
export const SLUGS = {
  fr: { home: "", services: "services", projects: "realisations", business: "sites-commerces", training: "formation", about: "a-propos", contact: "contact" },
  en: { home: "", services: "services", projects: "projects", business: "business-websites", training: "training", about: "about", contact: "contact" },
};
export const href = (lang, page) => `/${lang}/${SLUGS[lang][page] ? SLUGS[lang][page] + "/" : ""}`;
export const pageFromSlug = (lang, slug) => PAGES.find((p) => SLUGS[lang][p] === slug);

export const SECTORS = [
  ["restaurant", "Restaurants et bars", "Restaurants & bars", "Restaurants", "Restaurants"],
  ["hotel", "Hôtels", "Hotels", "Hôtels", "Hotels"],
  ["directions_car", "Vente de voitures", "Car sellers", "Voitures", "Cars"],
  ["home_work", "Agences immobilières", "Real estate agencies", "Immobilier", "Real estate"],
  ["spa", "Salons de beauté", "Beauty salons", "Beauté", "Beauty"],
  ["school", "Écoles privées", "Private schools", "Écoles", "Schools"],
  ["celebration", "Salles de fêtes", "Event halls", "Salles de fêtes", "Event halls"],
  ["local_hospital", "Cliniques", "Clinics", "Cliniques", "Clinics"],
  ["checkroom", "Boutiques de mode", "Fashion shops", "Mode", "Fashion"],
  ["fitness_center", "Salles de sport", "Gyms", "Sport", "Gyms"],
  ["directions_bus", "Agences de voyage", "Travel agencies", "Voyage", "Travel"],
  ["bakery_dining", "Boulangeries et pâtisseries", "Bakeries & pastry shops", "Boulangeries", "Bakeries"],
  ["content_cut", "Salons de coiffure homme", "Barbershops", "Barbiers", "Barbers"],
];

// img: a screenshot in /public/images; icon: shown on a gradient when there is no screenshot yet.
export const PROJECTS = [
  { id: "cartopousse", name: "Cartopousse", cat: "web", status: "live", tags: ["React", "Django"], img: "project-cartopousse.webp", url: "https://cartopousse.onpousse.com/",
    fr: "Plateforme de gestion des risques et d’audit pour les équipes.", en: "Risk management and audit platform for teams." },
  { id: "fiuhb", name: "FIUHB Finance Manager", cat: "web", status: "live", tags: ["React", "Django"], img: "project-fiuhb.webp", url: "https://fiuhb.onpousse.com/",
    fr: "Finances personnelles : dépenses, revenus, factures et rapports PDF.", en: "Personal finance: expenses, revenues, bills and PDF reports." },
  { id: "lamain", name: "LamainApp", cat: "mobile", status: "live", tags: ["Flutter", "Firebase"], icon: "handshake", url: "https://apkpure.com/lamainapp/com.ngombe.lamainapp/download",
    fr: "App de services à la demande qui relie les utilisateurs aux prestataires proches.", en: "On-demand service app connecting users with nearby providers." },
  { id: "gozen", name: "Gozen", cat: "mobile", status: "live", tags: ["Flutter", "Firebase"], icon: "work", url: "https://apkpure.com/p/com.example.gozen",
    fr: "Plateforme d’emploi : les candidats créent leur CV, les employeurs publient des offres.", en: "Job platform: seekers build CVs, employers post jobs." },
  { id: "lumeo", name: "Lumeo", cat: "web", status: "dev", tags: ["React", "Django"], icon: "campaign", url: "https://github.com/cyrancode/Lumeo_frontend",
    fr: "Plateforme de collaboration entre influenceurs et marques.", en: "Influencer–brand collaboration platform." },
  { id: "gstock", name: "GStock", cat: "web", status: "dev", tags: ["Django"], icon: "inventory_2", url: "https://github.com/cyrancode/GStock",
    fr: "Gestion de stock avec entrées, sorties et factures.", en: "Stock management with entries, exits and invoices." },
  { id: "netskul", name: "NetSkul", cat: "mobile", status: "dev", tags: ["Flutter", "Firebase", "Campay"], icon: "school", url: "https://github.com/cyrancode/NetSkulApp2",
    fr: "Plateforme d’apprentissage mobile.", en: "Mobile learning platform." },
  { id: "demo-resto", nameFr: "Site restaurant", nameEn: "Restaurant website", cat: "site", status: "demo", tags: ["Next.js", "Tailwind"], img: "project-demo-resto.webp", url: "https://one-rooftop-demo.pages.dev/",
    fr: "Menu en ligne et commandes sur WhatsApp.", en: "Online menu and WhatsApp orders." },
  { id: "demo-hotel", nameFr: "Site hôtel", nameEn: "Hotel website", cat: "site", status: "demo", tags: ["Next.js", "Tailwind"], img: "project-demo-hotel.webp", url: "https://hotel-vendome-demo.pages.dev/",
    fr: "Chambres, tarifs et réservations sur WhatsApp.", en: "Rooms, rates and WhatsApp bookings." },
  { id: "demo-cars", nameFr: "Site vente de voitures", nameEn: "Car dealer website", cat: "site", status: "demo", tags: ["Next.js", "Tailwind"], img: "project-demo-cars.webp", url: "https://reduction-automobile-demo.pages.dev/",
    fr: "Stock de voitures avec filtres et bouton WhatsApp par voiture.", en: "Car stock with filters and a WhatsApp button for each car." },
  { id: "flyer-resto", nameFr: "Flyer restaurants", nameEn: "Restaurant flyer", cat: "design", status: "design", tags: ["Photoshop"], flyer: "flyer-restaurants.webp",
    fr: "Affiche pour les réseaux sociaux.", en: "Social media poster." },
  { id: "flyer-beaute", nameFr: "Flyer salons de beauté", nameEn: "Beauty salon flyer", cat: "design", status: "design", tags: ["Photoshop"], flyer: "flyer-beaute.webp",
    fr: "Affiche pour les réseaux sociaux.", en: "Social media poster." },
  { id: "flyer-barbier", nameFr: "Flyer barbershops", nameEn: "Barbershop flyer", cat: "design", status: "design", tags: ["Photoshop"], flyer: "flyer-barbier.webp",
    fr: "Affiche pour les réseaux sociaux.", en: "Social media poster." },
];

export const HOME_PROJECTS = ["cartopousse", "fiuhb", "lamain", "gozen"];
export const STACK = ["React", "Django", "Flutter", "Firebase", "Next.js", "Tailwind", "Python", "JavaScript"];

export const I18N = {
  fr: {
    meta: {
      title: "cyrancode · Développeur logiciel à Douala : applications web, mobiles et sites internet",
      description: "Je conçois et développe des applications web, des applications mobiles et des sites internet pour les entreprises, les organisations et les particuliers à Douala, Cameroun.",
      pages: { services: "Services", projects: "Réalisations", business: "Sites pour commerces", training: "Formation", about: "À propos", contact: "Contact" },
    },
    nav: { home: "Accueil", services: "Services", projects: "Réalisations", business: "Sites pour commerces", training: "Formation", about: "À propos", contact: "Contact" },
    ui: { ctaWa: "Écrire sur WhatsApp", seeDemo: "Voir la démo", menu: "Menu", themeLabel: "Mode clair / sombre", langLabel: "Langue", waMsg: "Bonjour cyrancode, j’aimerais discuter d’un projet." },
    status: { live: "En ligne", dev: "En développement", demo: "Démo", design: "Design" },
    cats: { all: "Tous", web: "Applications web", mobile: "Applications mobiles", site: "Sites web", design: "Design" },
    links: { live: "Voir le projet", dev: "Voir le code", demo: "Voir la démo", design: "Voir le visuel" },
    alt: { hero: "Cyran, développeur logiciel, avec son ordinateur", training: "Cyran donne un cours de programmation", about: "Cyran à son bureau" },
    home: {
      kicker: "Développeur logiciel · Douala", role: "développeur full-stack et mobile",
      title1: "Je transforme vos idées en ", titleHi: "applications web, mobiles", title2: " et sites internet.",
      sub: "Je conçois et développe des logiciels pour les entreprises, les organisations et les particuliers, de l’idée à la mise en ligne.",
      ctaMain: "Discutons de votre projet", ctaSecond: "Voir mes réalisations", codeArg: "votreIdee",
      badges: ["Applications web", "Applications mobiles", "Sites web", "Design"],
      servicesKicker: "services", servicesTitle: "Ce que je fais pour vous",
      stack: "stack →",
      projectsKicker: "réalisations", projectsTitle: "Projets sélectionnés", projectsLink: "Toutes les réalisations",
      bizKicker: "sites pour commerces", bizTitle: "Un site prêt à l’emploi pour votre commerce", bizSub: "Restaurants, hôtels, boutiques, écoles, cliniques… Menu ou catalogue, commandes WhatsApp et visibilité Google, en français et en anglais.", bizLink: "Découvrir l’offre",
      stepsKicker: "méthode", stepsTitle: "Comment je travaille",
      steps: [
        { t: "On discute de votre besoin", d: "Un appel ou un échange WhatsApp pour bien comprendre." },
        { t: "Je propose une solution et un prix", d: "Un plan clair, un délai et un devis." },
        { t: "Je conçois et développe", d: "Vous suivez l’avancement à chaque étape." },
        { t: "Livraison, formation et support", d: "Mise en ligne, prise en main et suivi." },
      ],
      finalTitle: "Un projet en tête ?", finalSub: "Parlons-en sur WhatsApp. Je vous réponds et on avance ensemble.",
    },
    services: [
      { id: "web", icon: "dashboard", title: "Applications web et logiciels de gestion", short: "Des outils sur mesure pour gérer votre activité.", tech: "React · Django · API REST",
        includes: ["Gestion de stock et facturation", "Finance, RH, gestion scolaire", "Réservations, tableaux de bord, plateformes", "Comptes utilisateurs et rôles", "Rapports et exports PDF"], examples: ["GStock", "Cartopousse", "FIUHB Finance Manager"] },
      { id: "mobile", icon: "smartphone", title: "Applications mobiles", short: "Des apps Android et iOS, avec paiement Mobile Money.", tech: "Flutter · Firebase · Campay",
        includes: ["Une seule app pour Android et iOS", "Paiement Campay / Mobile Money", "Comptes et notifications", "Publication sur les stores"], examples: ["LamainApp", "Gozen", "NetSkul"] },
      { id: "sites", icon: "language", title: "Sites web", short: "Sites d’entreprise, vitrines et sites prêts pour commerces.", tech: "Next.js · Tailwind",
        includes: ["Site d’entreprise ou vitrine", "Menu ou catalogue en ligne", "Boutons WhatsApp et visibilité Google", "Français et anglais"], examples: ["Site restaurant", "Site hôtel", "Site vente de voitures"] },
      { id: "design", icon: "palette", title: "Design graphique", short: "Flyers, affiches, visuels réseaux sociaux, logos simples.", tech: "Photoshop",
        includes: ["Flyers et affiches", "Visuels pour réseaux sociaux", "Logos simples", "Retouche photo"], examples: ["Flyers", "Visuels réseaux sociaux"] },
      { id: "training", icon: "school", title: "Formation et mentorat", short: "Cours de programmation pour débutants, étudiants et équipes.", tech: "",
        includes: ["Bases du web", "React, Django, Flutter", "Git et travail en équipe", "Individuel, en groupe ou en entreprise"], examples: ["Débutants", "Étudiants", "Équipes"] },
      { id: "care", icon: "dns", title: "Maintenance et hébergement", short: "Domaine, hébergement, mises à jour et support.", tech: "",
        includes: ["Nom de domaine et hébergement", "Mises à jour et corrections", "Sauvegardes", "Support sur WhatsApp"], examples: ["Après livraison", "Contrat annuel"] },
    ],
    servicesPage: { kicker: "services", title: "Services", sub: "Du logiciel de gestion au flyer : un seul interlocuteur, de l’idée au lancement.", includes: "Ce qui est inclus", examples: "Exemples", cta: "En parler", more: "En savoir plus", waMsg: "Bonjour cyrancode, je suis intéressé par : " },
    projectsPage: { kicker: "réalisations", title: "Réalisations", sub: "Applications, sites et visuels. Les sites pour commerces marqués « Démo » sont des exemples." },
    biz: {
      kicker: "sites pour commerces", title: "Un site professionnel, prêt pour votre commerce",
      sub: "Une offre simple pour les commerces locaux : votre site en ligne rapidement, à un prix clair.",
      features: [{ icon: "menu_book", t: "Menu ou catalogue" }, { icon: "chat", t: "Boutons WhatsApp" }, { icon: "travel_explore", t: "Visible sur Google" }, { icon: "translate", t: "Français et anglais" }, { icon: "bolt", t: "Rapide sur téléphone" }],
      sectorsTitle: "13 secteurs", demosTitle: "Démos", plansTitle: "Offres", featured: "Recommandé", choose: "Choisir cette offre", price: "Sur devis",
      payTitle: "Paiement par Mobile Money", payText: "Moitié au début, moitié quand votre site est en ligne.",
      waMsg: "Bonjour cyrancode, je voudrais un site pour mon commerce : ", planMsg: "Bonjour cyrancode, je suis intéressé par l’offre : ",
      plans: [
        { name: "Site une page", desc: "L’essentiel sur une seule page. Idéal pour démarrer.", per: "paiement unique", features: ["Nom de domaine (1re année)", "Hébergement (1re année)", "Fiche Google", "Boutons WhatsApp et appel", "Français et anglais"] },
        { name: "Site complet", featured: true, desc: "Plusieurs pages : menu, chambres, catalogue, galerie…", per: "paiement unique", features: ["Tout le site une page, plus :", "Pages selon votre activité", "Menu ou catalogue en photos", "Galerie et plan Google Maps", "Formulaire de contact"] },
        { name: "Entretien annuel", desc: "Votre site reste en ligne et à jour toute l’année.", per: "par an", features: ["Renouvellement du domaine", "Hébergement", "Mises à jour du menu ou des prix", "Support sur WhatsApp"] },
      ],
    },
    training: {
      kicker: "formation", title: "Apprendre à coder, simplement", sub: "Des cours pratiques de programmation et de développement web et mobile, en français ou en anglais.",
      forLabel: "Pour qui", audience: [{ icon: "emoji_people", t: "Débutants" }, { icon: "school", t: "Étudiants" }, { icon: "groups", t: "Équipes et entreprises" }],
      topicsLabel: "Sujets", topics: [{ k: "web-basics", d: "HTML, CSS, JavaScript" }, { k: "react", d: "interfaces web" }, { k: "django", d: "back-end et API" }, { k: "flutter", d: "apps mobiles" }, { k: "git", d: "versions et équipe" }],
      formatsLabel: "Formats", formats: [{ icon: "person", t: "Individuel", d: "Un suivi à votre rythme." }, { icon: "groups", t: "En groupe", d: "Petits groupes, beaucoup de pratique." }, { icon: "apartment", t: "En entreprise", d: "Pour vos équipes, sur site ou en ligne." }],
      cta: "Demander une formation", waMsg: "Bonjour cyrancode, je suis intéressé par une formation.",
    },
    about: {
      kicker: "à propos", title: "Bonjour, je suis Cyran.",
      p1: "Je m’appelle Njua Cyran Nkwain, développeur logiciel full-stack et mobile basé à Douala. cyrancode, c’est ma marque : je conçois et développe des applications et des sites pour les entreprises, les organisations et les particuliers.",
      p2: "J’aime les solutions simples qui marchent vraiment, et j’explique tout sans jargon. J’accompagne aussi des développeurs juniors.",
      facts: [{ icon: "workspace_premium", t: "B.Tech en Développement logiciel (IUG)" }, { icon: "diversity_3", t: "Mentor de développeurs juniors" }, { icon: "translate", t: "Travaille en français et en anglais" }, { icon: "location_on", t: "Basé à Douala, Cameroun" }],
      portfolio: "Voir mon portfolio",
    },
    contact: {
      kicker: "contact", title: "Parlons de votre projet", sub: "Le plus rapide : WhatsApp. Ou remplissez le formulaire.", waBig: "Écrire sur WhatsApp",
      phone: "Téléphone", email: "E-mail", location: "Localisation", city: "Douala, Cameroun", formTitle: "Envoyer un message",
      name: "Votre nom", reach: "E-mail ou téléphone", type: "Type de projet", budget: "Budget", choose: "Choisir…", other: "Autre",
      budgets: ["Moins de 150 000 FCFA", "150 000 – 500 000 FCFA", "500 000 – 1 500 000 FCFA", "Plus de 1 500 000 FCFA", "Je ne sais pas encore"],
      message: "Message", messagePh: "Décrivez votre projet en quelques lignes", submitWa: "Envoyer via WhatsApp", submitMail: "Par e-mail",
      note: "Le message s’ouvre dans WhatsApp ou dans votre messagerie, prêt à être envoyé.",
      success: "Merci ! Votre message est prêt. Il ne reste qu’à appuyer sur Envoyer.",
      labels: { hello: "Bonjour cyrancode,", name: "Nom", reach: "Contact", type: "Projet", budget: "Budget", subject: "Nouveau projet" },
    },
    footer: { line: "Développeur logiciel à Douala : applications web, mobiles et sites internet.", sectors: "sites web par secteur", services: "services", links: "liens", contact: "contact", rights: "© 2026 cyrancode. Tous droits réservés." },
  },
  en: {
    meta: {
      title: "cyrancode · Software developer in Douala: web apps, mobile apps and websites",
      description: "I design and build web apps, mobile apps and websites for businesses, organisations and individuals in Douala, Cameroon.",
      pages: { services: "Services", projects: "Projects", business: "Business websites", training: "Training", about: "About", contact: "Contact" },
    },
    nav: { home: "Home", services: "Services", projects: "Projects", business: "Business websites", training: "Training", about: "About", contact: "Contact" },
    ui: { ctaWa: "Message on WhatsApp", seeDemo: "View demo", menu: "Menu", themeLabel: "Light / dark mode", langLabel: "Language", waMsg: "Hello cyrancode, I would like to discuss a project." },
    status: { live: "Live", dev: "In development", demo: "Demo", design: "Design" },
    cats: { all: "All", web: "Web apps", mobile: "Mobile apps", site: "Websites", design: "Design" },
    links: { live: "View project", dev: "View code", demo: "View demo", design: "View design" },
    alt: { hero: "Cyran, software developer, with his laptop", training: "Cyran teaching a programming class", about: "Cyran at his desk" },
    home: {
      kicker: "Software developer · Douala", role: "full-stack & mobile developer",
      title1: "I turn your ideas into ", titleHi: "web apps, mobile apps", title2: " and websites.",
      sub: "I design and build software for businesses, organisations and individuals, from idea to launch.",
      ctaMain: "Let’s discuss your project", ctaSecond: "See my work", codeArg: "yourIdea",
      badges: ["Web apps", "Mobile apps", "Websites", "Design"],
      servicesKicker: "services", servicesTitle: "What I do for you",
      stack: "stack →",
      projectsKicker: "projects", projectsTitle: "Selected projects", projectsLink: "All projects",
      bizKicker: "business websites", bizTitle: "A ready-made website for your business", bizSub: "Restaurants, hotels, shops, schools, clinics… Menu or catalogue, WhatsApp orders and Google visibility, in French and English.", bizLink: "See the offer",
      stepsKicker: "process", stepsTitle: "How I work",
      steps: [
        { t: "We discuss your need", d: "A call or WhatsApp chat to understand it well." },
        { t: "I propose a solution and a price", d: "A clear plan, a timeline and a quote." },
        { t: "I design and build", d: "You follow progress at every step." },
        { t: "Delivery, training and support", d: "Launch, hands-on training and follow-up." },
      ],
      finalTitle: "Got a project in mind?", finalSub: "Let’s talk on WhatsApp. I’ll reply and we’ll move forward together.",
    },
    services: [
      { id: "web", icon: "dashboard", title: "Web apps & management software", short: "Custom tools to run your business.", tech: "React · Django · REST APIs",
        includes: ["Stock and invoicing", "Finance, HR, school management", "Bookings, dashboards, platforms", "User accounts and roles", "Reports and PDF exports"], examples: ["GStock", "Cartopousse", "FIUHB Finance Manager"] },
      { id: "mobile", icon: "smartphone", title: "Mobile apps", short: "Android and iOS apps, with Mobile Money payments.", tech: "Flutter · Firebase · Campay",
        includes: ["One app for Android and iOS", "Campay / Mobile Money payments", "Accounts and notifications", "Publishing on the stores"], examples: ["LamainApp", "Gozen", "NetSkul"] },
      { id: "sites", icon: "language", title: "Websites", short: "Company sites, showcase sites and ready-made business sites.", tech: "Next.js · Tailwind",
        includes: ["Company or showcase website", "Online menu or catalogue", "WhatsApp buttons and Google visibility", "French and English"], examples: ["Restaurant website", "Hotel website", "Car dealer website"] },
      { id: "design", icon: "palette", title: "Graphic design", short: "Flyers, posters, social media visuals, simple logos.", tech: "Photoshop",
        includes: ["Flyers and posters", "Social media visuals", "Simple logos", "Photo retouching"], examples: ["Flyers", "Social media visuals"] },
      { id: "training", icon: "school", title: "Training & mentoring", short: "Programming courses for beginners, students and teams.", tech: "",
        includes: ["Web basics", "React, Django, Flutter", "Git and teamwork", "One-to-one, groups or companies"], examples: ["Beginners", "Students", "Teams"] },
      { id: "care", icon: "dns", title: "Maintenance & hosting", short: "Domain, hosting, updates and support.", tech: "",
        includes: ["Domain name and hosting", "Updates and fixes", "Backups", "Support on WhatsApp"], examples: ["After delivery", "Yearly contract"] },
    ],
    servicesPage: { kicker: "services", title: "Services", sub: "From management software to flyers: one contact, from idea to launch.", includes: "What’s included", examples: "Examples", cta: "Talk about it", more: "Learn more", waMsg: "Hello cyrancode, I am interested in: " },
    projectsPage: { kicker: "projects", title: "Projects", sub: "Apps, websites and visuals. Business websites marked “Demo” are examples." },
    biz: {
      kicker: "business websites", title: "A professional website, ready for your business",
      sub: "A simple offer for local businesses: your website online quickly, at a clear price.",
      features: [{ icon: "menu_book", t: "Menu or catalogue" }, { icon: "chat", t: "WhatsApp buttons" }, { icon: "travel_explore", t: "Found on Google" }, { icon: "translate", t: "French and English" }, { icon: "bolt", t: "Fast on phones" }],
      sectorsTitle: "13 sectors", demosTitle: "Demos", plansTitle: "Plans", featured: "Recommended", choose: "Choose this plan", price: "On quote",
      payTitle: "Payment by Mobile Money", payText: "Half at the start, half when your website is live.",
      waMsg: "Hello cyrancode, I would like a website for my business: ", planMsg: "Hello cyrancode, I am interested in the plan: ",
      plans: [
        { name: "One-page site", desc: "The essentials on a single page. Ideal to get started.", per: "one-time payment", features: ["Domain name (first year)", "Hosting (first year)", "Google listing", "WhatsApp and call buttons", "French and English"] },
        { name: "Full website", featured: true, desc: "Several pages: menu, rooms, catalogue, gallery…", per: "one-time payment", features: ["Everything in the one-page site, plus:", "Pages that fit your business", "Menu or catalogue with photos", "Gallery and Google Maps", "Contact form"] },
        { name: "Yearly care", desc: "Your website stays online and up to date all year.", per: "per year", features: ["Domain renewal", "Hosting", "Menu or price updates", "Support on WhatsApp"] },
      ],
    },
    training: {
      kicker: "training", title: "Learn to code, simply", sub: "Hands-on courses in programming and web and mobile development, in French or English.",
      forLabel: "Who it’s for", audience: [{ icon: "emoji_people", t: "Beginners" }, { icon: "school", t: "Students" }, { icon: "groups", t: "Teams and companies" }],
      topicsLabel: "Topics", topics: [{ k: "web-basics", d: "HTML, CSS, JavaScript" }, { k: "react", d: "web interfaces" }, { k: "django", d: "back-end and APIs" }, { k: "flutter", d: "mobile apps" }, { k: "git", d: "versioning and teamwork" }],
      formatsLabel: "Formats", formats: [{ icon: "person", t: "One-to-one", d: "Coaching at your own pace." }, { icon: "groups", t: "Groups", d: "Small groups, lots of practice." }, { icon: "apartment", t: "Companies", d: "For your teams, on site or online." }],
      cta: "Ask about training", waMsg: "Hello cyrancode, I am interested in training.",
    },
    about: {
      kicker: "about", title: "Hello, I’m Cyran.",
      p1: "My name is Njua Cyran Nkwain, a full-stack and mobile software developer based in Douala. cyrancode is my brand: I design and build apps and websites for businesses, organisations and individuals.",
      p2: "I like simple solutions that really work, and I explain everything without jargon. I also mentor junior developers.",
      facts: [{ icon: "workspace_premium", t: "B.Tech in Software Development (IUG)" }, { icon: "diversity_3", t: "Mentors junior developers" }, { icon: "translate", t: "Works in French and English" }, { icon: "location_on", t: "Based in Douala, Cameroon" }],
      portfolio: "View my portfolio",
    },
    contact: {
      kicker: "contact", title: "Let’s talk about your project", sub: "Fastest: WhatsApp. Or fill in the form.", waBig: "Message on WhatsApp",
      phone: "Phone", email: "Email", location: "Location", city: "Douala, Cameroon", formTitle: "Send a message",
      name: "Your name", reach: "Email or phone", type: "Type of project", budget: "Budget", choose: "Choose…", other: "Other",
      budgets: ["Less than 150,000 FCFA", "150,000 – 500,000 FCFA", "500,000 – 1,500,000 FCFA", "More than 1,500,000 FCFA", "Not sure yet"],
      message: "Message", messagePh: "Describe your project in a few lines", submitWa: "Send via WhatsApp", submitMail: "By email",
      note: "Your message opens in WhatsApp or your email app, ready to send.",
      success: "Thank you! Your message is ready. Just tap Send.",
      labels: { hello: "Hello cyrancode,", name: "Name", reach: "Contact", type: "Project", budget: "Budget", subject: "New project" },
    },
    footer: { line: "Software developer in Douala: web apps, mobile apps and websites.", sectors: "websites by sector", services: "services", links: "links", contact: "contact", rights: "© 2026 cyrancode. All rights reserved." },
  },
};

// Project with its text in one language.
export const projectIn = (p, lang) => ({ ...p, name: p.name || (lang === "en" ? p.nameEn : p.nameFr), desc: p[lang] });
