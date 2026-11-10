import Services from "@/components/pages/Services";
import Projects from "@/components/pages/Projects";
import Business from "@/components/pages/Business";
import Training from "@/components/pages/Training";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import { LANGS, PAGES, SLUGS, pageFromSlug } from "@/lib/content";
import { JsonLd, breadcrumbLd, businessLd, pageMetadata } from "@/lib/seo";
import { I18N, href } from "@/lib/content";
import { LANDING } from "@/lib/seo-content";

const VIEWS = { services: Services, projects: Projects, business: Business, training: Training, about: About, contact: Contact };

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.flatMap((lang) => PAGES.filter((p) => p !== "home").map((p) => ({ lang, slug: SLUGS[lang][p] })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  return pageMetadata(lang, pageFromSlug(lang, slug));
}

export default async function Page({ params }) {
  const { lang, slug } = await params;
  const page = pageFromSlug(lang, slug);
  const View = VIEWS[page];
  const crumbs = [{ name: LANDING[lang].breadcrumb, path: href(lang, "home") }, { name: I18N[lang].nav[page], path: href(lang, page) }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      {page === "about" && <JsonLd data={businessLd(lang)[1]} />}
      <View lang={lang} />
    </>
  );
}
