import { EMAIL, GITHUB, LINKEDIN, PHONE, PORTFOLIO, SITE_URL, href } from "./content";
import { META } from "./seo-content";

const abs = (path) => SITE_URL + path;

// Metadata for a page. paths: { fr, en } addresses of the same page in both languages.
export function buildMetadata(lang, { title, description, paths, image = "/og.png" }) {
  const url = abs(paths[lang]);
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { fr: abs(paths.fr), en: abs(paths.en), "x-default": abs(paths.fr) },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "cyrancode",
      title,
      description,
      locale: lang === "en" ? "en_US" : "fr_FR",
      alternateLocale: lang === "en" ? ["fr_FR"] : ["en_US"],
      images: [{ url: image, width: 1200, height: 630, alt: "cyrancode, développeur logiciel à Douala" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export function pageMetadata(lang, page) {
  const m = META[lang][page];
  return buildMetadata(lang, { title: m.title, description: m.description, paths: { fr: href("fr", page), en: href("en", page) } });
}

// --- Structured data (schema.org) ---

export const ORG_ID = SITE_URL + "/#business";
export const PERSON_ID = SITE_URL + "/#cyran";

export function businessLd(lang) {
  const m = META[lang].home;
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "cyrancode",
      alternateName: "cyrancode – Njua Cyran Nkwain",
      description: m.description,
      url: SITE_URL + "/",
      logo: SITE_URL + "/icon-512.png",
      image: SITE_URL + "/og.png",
      telephone: PHONE.replace(/\s/g, ""),
      email: EMAIL,
      priceRange: "FCFA",
      currenciesAccepted: "XAF",
      paymentAccepted: "Mobile Money, MTN MoMo, Orange Money, Cash",
      address: { "@type": "PostalAddress", addressLocality: "Douala", addressRegion: "Littoral", addressCountry: "CM" },
      geo: { "@type": "GeoCoordinates", latitude: 4.0511, longitude: 9.7679 },
      areaServed: [
        { "@type": "City", name: "Douala" },
        { "@type": "City", name: "Yaoundé" },
        { "@type": "Country", name: "Cameroon" },
      ],
      knowsLanguage: ["fr", "en"],
      founder: { "@id": PERSON_ID },
      sameAs: [PORTFOLIO, GITHUB, LINKEDIN],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE.replace(/\s/g, ""),
        email: EMAIL,
        contactType: "customer service",
        availableLanguage: ["French", "English"],
        areaServed: "CM",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Njua Cyran Nkwain",
      alternateName: "cyrancode",
      jobTitle: lang === "en" ? "Full-stack and mobile software developer" : "Développeur logiciel full-stack et mobile",
      image: SITE_URL + "/images/cyran-hero.webp",
      url: SITE_URL + href(lang, "about"),
      worksFor: { "@id": ORG_ID },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Institut Universitaire du Golfe de Guinée (IUG)" },
      address: { "@type": "PostalAddress", addressLocality: "Douala", addressCountry: "CM" },
      knowsAbout: ["Web development", "Mobile app development", "React", "Django", "Flutter", "Firebase", "Next.js", "Graphic design"],
      sameAs: [PORTFOLIO, GITHUB, LINKEDIN],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL + "/",
      name: "cyrancode",
      inLanguage: ["fr", "en"],
      publisher: { "@id": ORG_ID },
    },
  ];
}

export function serviceLd({ name, description, url, lang }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    inLanguage: lang,
    provider: { "@id": ORG_ID },
    areaServed: [{ "@type": "City", name: "Douala" }, { "@type": "Country", name: "Cameroon" }],
  };
}

export function faqLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

// crumbs: [{ name, path }]
export function breadcrumbLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
