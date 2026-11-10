// Text written for Google: page titles, descriptions, and the service and sector landing pages.
// Each landing page targets what people actually type, e.g. "création site web Douala".

// Titles (keep under ~60 characters) and descriptions (~150 characters) for the main pages.
export const META = {
  fr: {
    home: {
      title: "Création de sites web et applications à Douala | cyrancode",
      description: "Développeur logiciel à Douala : création de sites internet, applications web, applications mobiles et logiciels de gestion au Cameroun. Devis gratuit sur WhatsApp.",
    },
    services: {
      title: "Services : sites web, applications web et mobiles | cyrancode",
      description: "Création de sites internet, applications web, applications mobiles Android et iOS, logiciels de gestion, flyers et formation en programmation à Douala, Cameroun.",
    },
    projects: {
      title: "Réalisations : applications et sites web au Cameroun | cyrancode",
      description: "Projets réalisés à Douala : plateformes web React et Django, applications mobiles Flutter, sites pour commerces et flyers. Voir les projets en ligne.",
    },
    business: {
      title: "Site web pour commerce à Douala : restaurant, hôtel… | cyrancode",
      description: "Un site professionnel pour votre restaurant, hôtel, boutique, école ou clinique à Douala : menu ou catalogue, commandes WhatsApp, visible sur Google.",
    },
    training: {
      title: "Formation en programmation à Douala : web et mobile | cyrancode",
      description: "Cours pratiques de développement web et mobile à Douala : HTML, CSS, JavaScript, React, Django, Flutter, Git. Individuel, en groupe ou en entreprise.",
    },
    about: {
      title: "À propos : Njua Cyran Nkwain, développeur à Douala | cyrancode",
      description: "Njua Cyran Nkwain, développeur logiciel full-stack et mobile à Douala. B.Tech en développement logiciel (IUG). Applications web, mobiles et sites internet.",
    },
    contact: {
      title: "Contact : devis site web ou application à Douala | cyrancode",
      description: "Parlez-moi de votre projet de site web, d’application ou de logiciel. Réponse rapide sur WhatsApp au +237 6 72 52 71 20 ou par e-mail. Douala, Cameroun.",
    },
  },
  en: {
    home: {
      title: "Web & Mobile App Developer in Douala, Cameroon | cyrancode",
      description: "Software developer in Douala: websites, web applications, mobile apps and management software for businesses in Cameroon. Free quote on WhatsApp.",
    },
    services: {
      title: "Services: websites, web and mobile apps | cyrancode",
      description: "Website design, web applications, Android and iOS mobile apps, management software, flyers and coding training in Douala, Cameroon.",
    },
    projects: {
      title: "Projects: web and mobile apps built in Cameroon | cyrancode",
      description: "Projects built in Douala: React and Django web platforms, Flutter mobile apps, business websites and flyers. See them live.",
    },
    business: {
      title: "Business websites in Douala: restaurants, hotels… | cyrancode",
      description: "A professional website for your restaurant, hotel, shop, school or clinic in Douala: menu or catalogue, WhatsApp orders, found on Google.",
    },
    training: {
      title: "Coding training in Douala: web and mobile | cyrancode",
      description: "Hands-on web and mobile development courses in Douala: HTML, CSS, JavaScript, React, Django, Flutter, Git. One-to-one, groups or companies.",
    },
    about: {
      title: "About: Njua Cyran Nkwain, developer in Douala | cyrancode",
      description: "Njua Cyran Nkwain, full-stack and mobile software developer in Douala. B.Tech in Software Development (IUG). Web apps, mobile apps and websites.",
    },
    contact: {
      title: "Contact: quote for a website or app in Douala | cyrancode",
      description: "Tell me about your website, app or software project. Quick reply on WhatsApp at +237 6 72 52 71 20 or by email. Douala, Cameroon.",
    },
  },
};

// Service landing pages. id matches the services in content.js.
export const SERVICE_PAGES = [
  {
    id: "web", slug: { fr: "creation-application-web", en: "web-app-development" }, projects: ["cartopousse", "fiuhb", "gstock", "lumeo"],
    fr: {
      title: "Création d’application web et logiciel de gestion à Douala | cyrancode",
      description: "Développeur d’applications web à Douala : logiciel de gestion de stock, facturation, finance, RH, gestion scolaire, réservations et tableaux de bord sur mesure.",
      h1: "Création d’applications web et de logiciels de gestion à Douala",
      intro: [
        "Votre entreprise gère encore son stock, ses ventes ou ses clients sur des cahiers et des fichiers Excel ? Je développe des applications web sur mesure qui s’utilisent depuis un ordinateur ou un téléphone, avec des comptes pour chaque employé.",
        "Je travaille avec React pour l’interface et Django pour le serveur et les API. Vos données sont sauvegardées, les rapports se font en un clic et l’application grandit avec votre activité.",
      ],
      forWho: ["PME et commerces", "Écoles et centres de formation", "Cliniques et laboratoires", "ONG et associations", "Startups"],
      faq: [
        { q: "Combien coûte un logiciel de gestion sur mesure ?", a: "Le prix dépend des fonctionnalités : nombre de modules, rôles des utilisateurs, rapports. Après un échange sur votre besoin, je vous envoie un devis clair, sans engagement." },
        { q: "Combien de temps faut-il pour développer une application web ?", a: "Une première version simple prend en général 3 à 6 semaines. Les projets plus complets sont livrés par étapes, pour que vous puissiez commencer à l’utiliser rapidement." },
        { q: "L’application peut-elle fonctionner sur téléphone ?", a: "Oui. Les applications web que je développe s’adaptent aux écrans de téléphone, de tablette et d’ordinateur." },
      ],
    },
    en: {
      title: "Web App & Management Software Development in Douala | cyrancode",
      description: "Web application developer in Douala: custom stock management, invoicing, finance, HR, school management, booking systems and dashboards.",
      h1: "Web application and management software development in Douala",
      intro: [
        "Is your business still tracking stock, sales or customers in notebooks and Excel files? I build custom web applications that work from a computer or a phone, with an account for each staff member.",
        "I use React for the interface and Django for the server and APIs. Your data is backed up, reports take one click, and the application grows with your business.",
      ],
      forWho: ["SMEs and shops", "Schools and training centres", "Clinics and laboratories", "NGOs and associations", "Startups"],
      faq: [
        { q: "How much does custom management software cost?", a: "It depends on the features: number of modules, user roles, reports. After we discuss your needs, I send you a clear quote, with no commitment." },
        { q: "How long does it take to build a web application?", a: "A first simple version usually takes 3 to 6 weeks. Larger projects are delivered in stages so you can start using them early." },
        { q: "Can the application work on a phone?", a: "Yes. The web applications I build adapt to phone, tablet and computer screens." },
      ],
    },
  },
  {
    id: "mobile", slug: { fr: "developpement-application-mobile", en: "mobile-app-development" }, projects: ["lamain", "gozen", "netskul"],
    fr: {
      title: "Développeur d’applications mobiles au Cameroun | cyrancode",
      description: "Applications mobiles Android et iOS à Douala avec Flutter : paiement Mobile Money (MTN, Orange), notifications, publication sur le Play Store.",
      h1: "Développement d’applications mobiles Android et iOS au Cameroun",
      intro: [
        "Vous avez une idée d’application pour vos clients, vos livreurs ou vos élèves ? Je développe des applications mobiles avec Flutter : une seule application qui fonctionne sur Android et sur iPhone.",
        "Paiement par MTN Mobile Money et Orange Money avec Campay, connexion des utilisateurs, notifications, géolocalisation : je m’occupe de tout, jusqu’à la publication sur le Play Store et l’App Store.",
      ],
      forWho: ["Entreprises de services et de livraison", "Écoles et plateformes d’apprentissage", "Commerces et e-commerce", "Startups", "Associations"],
      faq: [
        { q: "Combien coûte une application mobile au Cameroun ?", a: "Cela dépend des écrans, des comptes utilisateurs, du paiement et de l’espace d’administration. Je vous propose un devis précis après avoir compris votre idée." },
        { q: "Mon application acceptera-t-elle Mobile Money ?", a: "Oui. J’intègre le paiement MTN Mobile Money et Orange Money via Campay, déjà utilisé dans mes projets." },
        { q: "Publiez-vous l’application sur le Play Store ?", a: "Oui, je prépare et publie l’application sur le Google Play Store, et sur l’App Store si vous avez un compte développeur Apple." },
      ],
    },
    en: {
      title: "Android & iOS Mobile App Developer in Cameroon | cyrancode",
      description: "Android and iOS mobile app development in Douala with Flutter and Firebase: Mobile Money payments (MTN, Orange) via Campay, notifications, Play Store publishing.",
      h1: "Android and iOS mobile app development in Cameroon",
      intro: [
        "Do you have an app idea for your customers, drivers or students? I build mobile apps with Flutter: one app that runs on both Android and iPhone.",
        "MTN Mobile Money and Orange Money payments with Campay, user accounts, notifications, location: I handle it all, up to publishing on the Play Store and the App Store.",
      ],
      forWho: ["Service and delivery businesses", "Schools and learning platforms", "Shops and e-commerce", "Startups", "Associations"],
      faq: [
        { q: "How much does a mobile app cost in Cameroon?", a: "It depends on the screens, user accounts, payments and admin area. I give you a precise quote once I understand your idea." },
        { q: "Will my app accept Mobile Money?", a: "Yes. I integrate MTN Mobile Money and Orange Money payments via Campay, which I already use in my projects." },
        { q: "Do you publish the app on the Play Store?", a: "Yes, I prepare and publish the app on the Google Play Store, and on the App Store if you have an Apple developer account." },
      ],
    },
  },
  {
    id: "sites", slug: { fr: "creation-site-web", en: "website-design" }, projects: ["demo-resto", "demo-hotel", "demo-cars"],
    fr: {
      title: "Création de site web à Douala : vitrine, entreprise | cyrancode",
      description: "Création de site internet à Douala : site vitrine, site d’entreprise ou site pour commerce, rapide sur téléphone, visible sur Google, en français et en anglais.",
      h1: "Création de sites web à Douala, Cameroun",
      intro: [
        "Aujourd’hui, vos clients vous cherchent d’abord sur Google. Un site internet professionnel leur montre qui vous êtes, ce que vous proposez et comment vous joindre, à toute heure.",
        "Je crée des sites rapides sur téléphone, en français et en anglais, avec boutons WhatsApp et appel, plan Google Maps et une base solide pour apparaître dans les recherches Google.",
      ],
      forWho: ["Entreprises et PME", "Restaurants, hôtels et commerces", "Professions libérales", "Écoles et associations", "Églises et événements"],
      faq: [
        { q: "Combien coûte la création d’un site web à Douala ?", a: "Un site d’une page coûte moins cher qu’un site complet de plusieurs pages. Le nom de domaine et l’hébergement de la première année sont inclus. Écrivez-moi pour un devis." },
        { q: "En combien de temps mon site sera-t-il en ligne ?", a: "Un site pour commerce est en général prêt en quelques jours après réception de vos photos et informations." },
        { q: "Mon site apparaîtra-t-il sur Google ?", a: "Oui : je prépare chaque site pour Google (titres, descriptions, fiche Google de l’entreprise). La position dans les résultats dépend aussi de la concurrence et du temps." },
      ],
    },
    en: {
      title: "Website Design in Douala: business & showcase sites | cyrancode",
      description: "Website design in Douala: showcase sites, company websites and business sites that are fast on phones, found on Google, in French and English.",
      h1: "Website design in Douala, Cameroon",
      intro: [
        "Today your customers look you up on Google first. A professional website shows them who you are, what you offer and how to reach you, at any hour.",
        "I build sites that are fast on phones, in French and English, with WhatsApp and call buttons, a Google Maps location and a solid base to show up in Google searches.",
      ],
      forWho: ["Companies and SMEs", "Restaurants, hotels and shops", "Independent professionals", "Schools and associations", "Churches and events"],
      faq: [
        { q: "How much does a website cost in Douala?", a: "A one-page site costs less than a full multi-page site. The domain name and first-year hosting are included. Message me for a quote." },
        { q: "How soon will my site be online?", a: "A business website is usually ready a few days after I receive your photos and information." },
        { q: "Will my site show up on Google?", a: "Yes: I prepare every site for Google (titles, descriptions, Google Business Profile). Your position also depends on competition and time." },
      ],
    },
  },
  {
    id: "design", slug: { fr: "design-graphique", en: "graphic-design" }, projects: ["flyer-resto", "flyer-beaute", "flyer-barbier"],
    fr: {
      title: "Graphiste à Douala : flyers, affiches, visuels | cyrancode",
      description: "Création de flyers, affiches, visuels pour Facebook, Instagram et WhatsApp, logos simples et retouche photo à Douala. Des designs qui attirent vos clients.",
      h1: "Design graphique à Douala : flyers, affiches et visuels",
      intro: [
        "Un beau flyer fait la différence sur Facebook, WhatsApp ou affiché dans la rue. Je conçois des visuels clairs et modernes qui donnent envie de vous contacter.",
        "Flyers, affiches d’événements, visuels pour les réseaux sociaux, logos simples et retouche photo : je travaille avec Photoshop et je vous livre des fichiers prêts à publier ou à imprimer.",
      ],
      forWho: ["Commerces et entreprises", "Événements, concerts et églises", "Écoles et associations", "Créateurs et marques"],
      faq: [
        { q: "En combien de temps recevrai-je mon flyer ?", a: "Un flyer est en général prêt en 1 à 2 jours, avec des modifications si besoin." },
        { q: "Recevrai-je le fichier pour l’imprimerie ?", a: "Oui, je fournis une version pour les réseaux sociaux et une version haute qualité pour l’impression." },
      ],
    },
    en: {
      title: "Graphic Designer in Douala: flyers, posters, social media | cyrancode",
      description: "Flyers, posters, visuals for Facebook, Instagram and WhatsApp, simple logos and photo retouching in Douala. Designs that bring you customers.",
      h1: "Graphic design in Douala: flyers, posters and visuals",
      intro: [
        "A good flyer makes the difference on Facebook, WhatsApp or on a wall in town. I design clear, modern visuals that make people want to contact you.",
        "Flyers, event posters, social media visuals, simple logos and photo retouching: I work in Photoshop and deliver files ready to post or print.",
      ],
      forWho: ["Shops and companies", "Events, concerts and churches", "Schools and associations", "Creators and brands"],
      faq: [
        { q: "How soon will I get my flyer?", a: "A flyer is usually ready in 1 to 2 days, with changes if needed." },
        { q: "Will I get a file for printing?", a: "Yes, I provide a version for social media and a high-quality version for printing." },
      ],
    },
  },
  {
    id: "training", slug: { fr: "formation-programmation", en: "coding-training" }, projects: [],
    fr: {
      title: "Formation en programmation et développement web à Douala | cyrancode",
      description: "Apprenez à coder à Douala : HTML, CSS, JavaScript, React, Django, Flutter et Git. Cours pratiques pour débutants, étudiants et équipes, en français ou en anglais.",
      h1: "Formation en programmation et développement web et mobile à Douala",
      intro: [
        "Vous voulez apprendre à créer des sites et des applications, ou faire monter en compétence votre équipe ? Je propose des cours pratiques, centrés sur de vrais projets.",
        "J’encadre déjà des stagiaires et des développeurs juniors. Les cours se font en français ou en anglais, en individuel, en petit groupe ou dans votre entreprise.",
      ],
      forWho: ["Débutants complets", "Étudiants en informatique", "Développeurs juniors", "Équipes d’entreprise"],
      faq: [
        { q: "Faut-il déjà savoir programmer ?", a: "Non. Les débutants commencent par les bases du web (HTML, CSS, JavaScript), puis avancent à leur rythme." },
        { q: "Les cours sont-ils en ligne ou en présentiel ?", a: "Les deux sont possibles : à Douala en présentiel, ou en ligne." },
      ],
    },
    en: {
      title: "Coding and Web Development Training in Douala | cyrancode",
      description: "Learn to code in Douala: HTML, CSS, JavaScript, React, Django, Flutter and Git. Hands-on courses for beginners, students and teams, in French or English.",
      h1: "Programming, web and mobile development training in Douala",
      intro: [
        "Do you want to learn to build websites and apps, or upskill your team? I offer hands-on courses built around real projects.",
        "I already mentor interns and junior developers. Courses are in French or English, one-to-one, in small groups or at your company.",
      ],
      forWho: ["Complete beginners", "Computer science students", "Junior developers", "Company teams"],
      faq: [
        { q: "Do I need to know how to code already?", a: "No. Beginners start with web basics (HTML, CSS, JavaScript) and progress at their own pace." },
        { q: "Are the courses online or in person?", a: "Both: in person in Douala, or online." },
      ],
    },
  },
  {
    id: "care", slug: { fr: "maintenance-hebergement", en: "maintenance-hosting" }, projects: [],
    fr: {
      title: "Maintenance de site web et hébergement à Douala | cyrancode",
      description: "Nom de domaine, hébergement, mises à jour, sauvegardes et support WhatsApp pour votre site ou application à Douala. Votre site reste en ligne et à jour.",
      h1: "Maintenance, hébergement et support de sites et applications",
      intro: [
        "Un site ou une application doit rester en ligne, sécurisé et à jour. Je m’occupe du nom de domaine, de l’hébergement, des sauvegardes et des petites modifications.",
        "Vous changez vos prix, votre menu ou vos horaires ? Envoyez un message WhatsApp et c’est fait. Je peux aussi reprendre un site existant créé par quelqu’un d’autre.",
      ],
      forWho: ["Clients de cyrancode", "Entreprises avec un site existant", "Applications à faire évoluer"],
      faq: [
        { q: "Que se passe-t-il si mon site tombe en panne ?", a: "Vous m’écrivez sur WhatsApp et je corrige le problème au plus vite." },
        { q: "Le nom de domaine sera-t-il à mon nom ?", a: "Oui, le nom de domaine est enregistré au nom de votre entreprise." },
      ],
    },
    en: {
      title: "Website Maintenance and Hosting in Douala | cyrancode",
      description: "Domain name, hosting, updates, backups and WhatsApp support for your website or app in Douala. Your site stays online and up to date.",
      h1: "Maintenance, hosting and support for websites and apps",
      intro: [
        "A website or app has to stay online, secure and up to date. I take care of the domain name, hosting, backups and small changes.",
        "Changing your prices, menu or hours? Send a WhatsApp message and it’s done. I can also take over an existing site built by someone else.",
      ],
      forWho: ["cyrancode clients", "Businesses with an existing website", "Apps that need to evolve"],
      faq: [
        { q: "What happens if my site goes down?", a: "You message me on WhatsApp and I fix the problem as quickly as possible." },
        { q: "Will the domain name be in my name?", a: "Yes, the domain name is registered in your company’s name." },
      ],
    },
  },
];

// Sector landing pages: index matches SECTORS in content.js.
export const SECTOR_PAGES = [
  { icon: "restaurant", slug: { fr: "site-web-restaurant", en: "restaurant-website" }, demo: "demo-resto",
    fr: { name: "restaurant", h1: "Site web pour restaurant, bar et snack à Douala", features: ["Menu en ligne avec photos et prix en FCFA", "Réservation et commande sur WhatsApp", "Horaires, adresse et plan Google Maps", "Galerie photos de vos plats et de la salle"] },
    en: { name: "restaurant", h1: "Restaurant, bar and snack bar websites in Douala", features: ["Online menu with photos and prices in FCFA", "Bookings and orders on WhatsApp", "Opening hours, address and Google Maps", "Photo gallery of your dishes and venue"] } },
  { icon: "hotel", slug: { fr: "site-web-hotel", en: "hotel-website" }, demo: "demo-hotel",
    fr: { name: "hôtel", h1: "Site web pour hôtel, auberge et résidence à Douala", features: ["Chambres en photos avec tarifs", "Réservation directe sur WhatsApp, sans commission", "Services : restaurant, piscine, Wi-Fi, parking", "Plan d’accès et avis clients"] },
    en: { name: "hotel", h1: "Hotel, guesthouse and residence websites in Douala", features: ["Rooms with photos and rates", "Direct WhatsApp booking, no commission", "Services: restaurant, pool, Wi-Fi, parking", "Directions and guest reviews"] } },
  { icon: "directions_car", slug: { fr: "site-web-vente-voitures", en: "car-dealer-website" }, demo: "demo-cars",
    fr: { name: "vente de voitures", h1: "Site web pour vendeur et parc de voitures à Douala", features: ["Tout votre stock avec photos et prix", "Une page par voiture, facile à partager", "Filtres par marque, prix et boîte", "Un bouton WhatsApp qui nomme la voiture"] },
    en: { name: "car dealer", h1: "Websites for car dealers and car lots in Douala", features: ["Your whole stock with photos and prices", "One page per car, easy to share", "Filters by make, price and gearbox", "A WhatsApp button that names the car"] } },
  { icon: "home_work", slug: { fr: "site-web-agence-immobiliere", en: "real-estate-website" },
    fr: { name: "agence immobilière", h1: "Site web pour agence immobilière et bailleur à Douala", features: ["Biens à louer et à vendre avec photos et prix", "Recherche par quartier, type et budget", "Demande de visite sur WhatsApp", "Une image sérieuse qui rassure vos clients"] },
    en: { name: "real estate agency", h1: "Real estate agency and landlord websites in Douala", features: ["Properties to rent and buy with photos and prices", "Search by area, type and budget", "Visit requests on WhatsApp", "A serious image that reassures clients"] } },
  { icon: "spa", slug: { fr: "site-web-salon-de-beaute", en: "beauty-salon-website" },
    fr: { name: "salon de beauté", h1: "Site web pour salon de beauté, coiffure et ongles à Douala", features: ["Prestations et prix : tresses, coiffure, ongles, make-up", "Galerie de vos plus belles réalisations", "Rendez-vous sur WhatsApp", "Horaires et localisation"] },
    en: { name: "beauty salon", h1: "Beauty, hair and nail salon websites in Douala", features: ["Services and prices: braids, hair, nails, make-up", "Gallery of your best work", "Appointments on WhatsApp", "Opening hours and location"] } },
  { icon: "school", slug: { fr: "site-web-ecole", en: "school-website" },
    fr: { name: "école", h1: "Site web pour école privée à Douala : maternelle, primaire, secondaire", features: ["Présentation de l’école en photos", "Frais de scolarité et inscriptions en ligne", "Liste des fournitures et calendrier", "Contact des parents sur WhatsApp"] },
    en: { name: "school", h1: "Private school websites in Douala: nursery, primary, secondary", features: ["Your school presented in photos", "Fees and enrolment information online", "Supply lists and calendar", "Parents reach you on WhatsApp"] } },
  { icon: "celebration", slug: { fr: "site-web-salle-de-fetes", en: "event-hall-website" },
    fr: { name: "salle de fêtes", h1: "Site web pour salle de fêtes et organisateur d’événements à Douala", features: ["Votre salle en photos : décoration, places", "Mariages, dots, anniversaires, séminaires", "Réservation de date sur WhatsApp", "Traiteur et options"] },
    en: { name: "event hall", h1: "Event hall and event planner websites in Douala", features: ["Your hall in photos: décor and capacity", "Weddings, traditional ceremonies, birthdays, seminars", "Date booking on WhatsApp", "Catering and options"] } },
  { icon: "local_hospital", slug: { fr: "site-web-clinique", en: "clinic-website" },
    fr: { name: "clinique", h1: "Site web pour clinique, cabinet médical et laboratoire à Douala", features: ["Services et médecins", "Horaires et urgences", "Prise de rendez-vous sur WhatsApp", "Adresse sur la carte"] },
    en: { name: "clinic", h1: "Clinic, medical practice and laboratory websites in Douala", features: ["Services and doctors", "Opening hours and emergencies", "Appointments on WhatsApp", "Location on the map"] } },
  { icon: "checkroom", slug: { fr: "site-web-boutique", en: "fashion-shop-website" },
    fr: { name: "boutique", h1: "Site web pour boutique de mode et de vêtements à Douala", features: ["Catalogue en ligne : photos, tailles et prix", "Femmes, hommes, chaussures, accessoires", "Commande sur WhatsApp", "Nouveautés faciles à ajouter"] },
    en: { name: "fashion shop", h1: "Fashion and clothing shop websites in Douala", features: ["Online catalogue: photos, sizes and prices", "Women, men, shoes, accessories", "Orders on WhatsApp", "New arrivals easy to add"] } },
  { icon: "fitness_center", slug: { fr: "site-web-salle-de-sport", en: "gym-website" },
    fr: { name: "salle de sport", h1: "Site web pour salle de sport et de fitness à Douala", features: ["Abonnements et prix", "Planning des cours : fitness, boxe, coaching", "Inscription sur WhatsApp", "Photos de la salle et des équipements"] },
    en: { name: "gym", h1: "Gym and fitness studio websites in Douala", features: ["Memberships and prices", "Class schedule: fitness, boxing, coaching", "Sign-up on WhatsApp", "Photos of the gym and equipment"] } },
  { icon: "directions_bus", slug: { fr: "site-web-agence-de-voyage", en: "travel-agency-website" },
    fr: { name: "agence de voyage", h1: "Site web pour agence de voyage et compagnie de bus au Cameroun", features: ["Lignes, horaires et prix : Douala, Yaoundé, Bafoussam…", "Billets d’avion et infos visas", "Envoi de colis", "Réservation de place sur WhatsApp"] },
    en: { name: "travel agency", h1: "Travel agency and bus company websites in Cameroon", features: ["Routes, times and fares: Douala, Yaoundé, Bafoussam…", "Plane tickets and visa information", "Parcel sending", "Seat booking on WhatsApp"] } },
  { icon: "bakery_dining", slug: { fr: "site-web-patisserie", en: "bakery-website" },
    fr: { name: "pâtisserie", h1: "Site web pour pâtisserie et boulangerie à Douala", features: ["Catalogue de gâteaux avec photos et prix", "Commandes pour anniversaires et mariages", "Commande sur WhatsApp", "Viennoiseries et pain du jour"] },
    en: { name: "bakery", h1: "Pastry shop and bakery websites in Douala", features: ["Cake catalogue with photos and prices", "Orders for birthdays and weddings", "Orders on WhatsApp", "Pastries and daily bread"] } },
  { icon: "content_cut", slug: { fr: "site-web-barbershop", en: "barbershop-website" },
    fr: { name: "barbershop", h1: "Site web pour barbershop et salon de coiffure homme à Douala", features: ["Galerie de vos coupes : dégradés, barbe", "Prix clairs", "Rendez-vous sur WhatsApp", "Horaires et localisation"] },
    en: { name: "barbershop", h1: "Barbershop websites in Douala", features: ["Gallery of your cuts: fades, beards", "Clear prices", "Bookings on WhatsApp", "Opening hours and location"] } },
];

// Shared text for the landing pages and the home FAQ.
export const LANDING = {
  fr: {
    forWho: "Pour qui", included: "Ce que je propose", faq: "Questions fréquentes", related: "Projets liés", cta: "Demander un devis gratuit",
    ctaSub: "Décrivez votre projet sur WhatsApp, je vous réponds rapidement.", process: "Comment ça se passe", other: "Autres services",
    breadcrumb: "Accueil",
    sector: {
      title: (n) => `Site web pour ${n} à Douala | cyrancode`,
      description: (n) => `Création de site web pour ${n} à Douala et au Cameroun : rapide sur téléphone, commandes WhatsApp, visible sur Google, en français et en anglais.`,
      intro: (n) => `Vos clients cherchent un ${n} sur leur téléphone avant de se déplacer. Avec votre propre site web, ils trouvent toutes vos informations en un instant et vous écrivent directement sur WhatsApp.`,
      intro2: "Chaque site porte votre nom, vos couleurs et vos vraies photos. Il est rapide sur téléphone, en français et en anglais, et préparé pour apparaître sur Google.",
      featuresTitle: "Ce que votre site contient", demo: "Voir un exemple", others: "Autres secteurs", offer: "Voir les offres",
      wa: (n) => `Bonjour cyrancode, je voudrais un site web pour mon ${n}.`,
    },
    homeFaq: [
      { q: "Quels types de projets réalisez-vous ?", a: "Des sites internet, des applications web et des logiciels de gestion, des applications mobiles Android et iOS, des flyers et visuels, ainsi que des formations en programmation." },
      { q: "Où êtes-vous basé ?", a: "À Douala, au Cameroun. Je travaille aussi à distance avec des clients de Yaoundé, du reste du Cameroun et de l’étranger." },
      { q: "Comment demander un devis ?", a: "Écrivez-moi sur WhatsApp au +237 6 72 52 71 20 ou remplissez le formulaire de contact. Le devis est gratuit et sans engagement." },
      { q: "Comment se fait le paiement ?", a: "Par Mobile Money (MTN MoMo ou Orange Money) : une partie au début du projet, le reste à la livraison." },
    ],
    seoTitle: "Développeur web et mobile à Douala, pour tout le Cameroun",
    seoText: "cyrancode accompagne les entreprises, commerces, écoles et organisations de Douala, Yaoundé et de tout le Cameroun dans leur projet numérique : création de site web, développement d’application web ou de logiciel de gestion, application mobile Android et iOS, design graphique et formation.",
  },
  en: {
    forWho: "Who it’s for", included: "What I offer", faq: "Frequently asked questions", related: "Related projects", cta: "Ask for a free quote",
    ctaSub: "Describe your project on WhatsApp and I’ll reply quickly.", process: "How it works", other: "Other services",
    breadcrumb: "Home",
    sector: {
      title: (n) => `${n.charAt(0).toUpperCase() + n.slice(1)} website in Douala | cyrancode`,
      description: (n) => `Website design for your ${n} in Douala and Cameroon: fast on phones, WhatsApp orders, found on Google, in French and English.`,
      intro: (n) => `Customers look for a ${n} on their phone before they come. With your own website they find everything in a moment and message you directly on WhatsApp.`,
      intro2: "Every site carries your name, your colours and your real photos. It is fast on phones, in French and English, and ready to show up on Google.",
      featuresTitle: "What your website includes", demo: "See an example", others: "Other sectors", offer: "See the plans",
      wa: (n) => `Hello cyrancode, I would like a website for my ${n}.`,
    },
    homeFaq: [
      { q: "What kind of projects do you take on?", a: "Websites, web applications and management software, Android and iOS mobile apps, flyers and visuals, and programming training." },
      { q: "Where are you based?", a: "In Douala, Cameroon. I also work remotely with clients in Yaoundé, across Cameroon and abroad." },
      { q: "How do I get a quote?", a: "Message me on WhatsApp at +237 6 72 52 71 20 or fill in the contact form. The quote is free, with no commitment." },
      { q: "How does payment work?", a: "By Mobile Money (MTN MoMo or Orange Money): part at the start of the project, the rest on delivery." },
    ],
    seoTitle: "Web and mobile developer in Douala, serving all of Cameroon",
    seoText: "cyrancode helps businesses, shops, schools and organisations in Douala, Yaoundé and across Cameroon with their digital projects: website design, web application and management software development, Android and iOS mobile apps, graphic design and training.",
  },
};

// Addresses of the landing pages.
import { href } from "./content";
export const servicePath = (lang, sp) => `${href(lang, "services")}${sp.slug[lang]}/`;
export const sectorPath = (lang, sp) => `${href(lang, "business")}${sp.slug[lang]}/`;
export const serviceById = (id) => SERVICE_PAGES.find((s) => s.id === id);
