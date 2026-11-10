import ServiceLanding from "@/components/pages/ServiceLanding";
import SectorLanding from "@/components/pages/SectorLanding";
import { I18N, LANGS, SECTORS, SLUGS, href, pageFromSlug } from "@/lib/content";
import { LANDING, SECTOR_PAGES, SERVICE_PAGES, sectorPath, servicePath } from "@/lib/seo-content";
import { JsonLd, breadcrumbLd, buildMetadata, faqLd, serviceLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => [
    ...SERVICE_PAGES.map((sp) => ({ lang, slug: SLUGS[lang].services, sub: sp.slug[lang] })),
    ...SECTOR_PAGES.map((sp) => ({ lang, slug: SLUGS[lang].business, sub: sp.slug[lang] })),
  ]);
}

function resolve(lang, slug, sub) {
  const page = pageFromSlug(lang, slug);
  if (page === "services") {
    const sp = SERVICE_PAGES.find((s) => s.slug[lang] === sub);
    return { kind: "service", sp };
  }
  const sp = SECTOR_PAGES.find((s) => s.slug[lang] === sub);
  return { kind: "sector", sp };
}

export async function generateMetadata({ params }) {
  const { lang, slug, sub } = await params;
  const { kind, sp } = resolve(lang, slug, sub);
  if (kind === "service") {
    return buildMetadata(lang, { title: sp[lang].title, description: sp[lang].description, paths: { fr: servicePath("fr", sp), en: servicePath("en", sp) } });
  }
  const S = LANDING[lang].sector;
  return buildMetadata(lang, { title: S.title(sp[lang].name), description: S.description(sp[lang].name), paths: { fr: sectorPath("fr", sp), en: sectorPath("en", sp) } });
}

export default async function LandingPage({ params }) {
  const { lang, slug, sub } = await params;
  const { kind, sp } = resolve(lang, slug, sub);
  const t = I18N[lang];
  const L = LANDING[lang];

  if (kind === "service") {
    const svc = t.services.find((s) => s.id === sp.id);
    const path = servicePath(lang, sp);
    return (
      <>
        <JsonLd data={serviceLd({ name: sp[lang].h1, description: sp[lang].description, url: SITE_URL + path, lang })} />
        <JsonLd data={faqLd(sp[lang].faq)} />
        <JsonLd data={breadcrumbLd([{ name: L.breadcrumb, path: href(lang, "home") }, { name: t.nav.services, path: href(lang, "services") }, { name: svc.title, path }])} />
        <ServiceLanding lang={lang} sp={sp} />
      </>
    );
  }

  const i = SECTOR_PAGES.indexOf(sp);
  const path = sectorPath(lang, sp);
  const S = L.sector;
  return (
    <>
      <JsonLd data={serviceLd({ name: sp[lang].h1, description: S.description(sp[lang].name), url: SITE_URL + path, lang })} />
      <JsonLd data={breadcrumbLd([{ name: L.breadcrumb, path: href(lang, "home") }, { name: t.nav.business, path: href(lang, "business") }, { name: SECTORS[i][lang === "en" ? 2 : 1], path }])} />
      <SectorLanding lang={lang} sp={sp} />
    </>
  );
}
