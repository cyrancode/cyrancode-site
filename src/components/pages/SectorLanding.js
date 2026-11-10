import Link from "next/link";
import Icon from "../Icon";
import { Kicker, ProjectCard, card, wrap } from "../ui";
import { Breadcrumb, Checks, CtaBand, Faq } from "../landing";
import { I18N, PROJECTS, SECTORS, href, projectIn } from "@/lib/content";
import { LANDING, SECTOR_PAGES, SERVICE_PAGES, sectorPath, servicePath } from "@/lib/seo-content";

export default function SectorLanding({ lang, sp }) {
  const t = I18N[lang];
  const L = LANDING[lang];
  const S = L.sector;
  const c = sp[lang];
  const demo = sp.demo ? projectIn(PROJECTS.find((p) => p.id === sp.demo), lang) : null;
  const sites = SERVICE_PAGES.find((s) => s.id === "sites");
  const crumbs = [
    { name: L.breadcrumb, path: href(lang, "home") },
    { name: t.nav.business, path: href(lang, "business") },
    { name: c.h1, path: sectorPath(lang, sp) },
  ];
  const h2 = "m-0 mb-3.5 font-display text-[clamp(20px,2.6vw,24px)] font-bold tracking-[-0.03em]";

  return (
    <div className="fade-in">
      <section className={`${wrap} pb-6 pt-7`}>
        <Breadcrumb crumbs={crumbs} />
        <div className="flex max-w-[760px] flex-col gap-3">
          <span className="bg-grad shadow-glow flex h-12 w-12 items-center justify-center rounded-[14px] text-white">
            <Icon name={sp.icon} size={26} />
          </span>
          <h1 className="m-0 font-display text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.12] tracking-[-0.04em] [text-wrap:balance]">{c.h1}</h1>
          <p className="m-0 text-[15.5px] text-muted [text-wrap:pretty]">{S.intro(c.name)}</p>
          <p className="m-0 text-[15.5px] text-muted [text-wrap:pretty]">{S.intro2}</p>
          <div className="mt-1 flex flex-wrap gap-2">
            <Link href={`${href(lang, "business")}#offres`} className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-solid px-3.5 py-2.5 text-sm font-semibold text-ink no-underline hover:border-brand hover:text-ink">
              {S.offer}
              <Icon name="arrow_forward" size={17} />
            </Link>
            {demo && (
              <a href={demo.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-solid px-3.5 py-2.5 text-sm font-semibold text-ink no-underline hover:border-brand hover:text-ink">
                {S.demo}
                <Icon name="arrow_outward" size={17} />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className={`${wrap} py-6`}>
        <h2 className={h2}>{S.featuresTitle}</h2>
        <Checks items={[...c.features, ...t.biz.features.slice(2).map((f) => f.t)]} />
      </section>

      {demo && (
        <section className={`${wrap} py-6`}>
          <h2 className={h2}>{S.demo}</h2>
          <div className="max-w-[380px]">
            <ProjectCard p={demo} lang={lang} />
          </div>
        </section>
      )}

      <section className={`${wrap} py-6`}>
        <Faq title={L.faq} items={sites[lang].faq} />
      </section>

      <section className={`${wrap} py-6`}>
        <CtaBand lang={lang} msg={S.wa(c.name)} />
      </section>

      <section className={`${wrap} pb-12 pt-4`}>
        <Kicker>{S.others}</Kicker>
        <div className="flex flex-wrap gap-2">
          {SECTOR_PAGES.map((o, i) => [o, i]).filter(([o]) => o !== sp).map(([o, i]) => (
            <Link key={o.slug.fr} href={sectorPath(lang, o)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-solid px-3 py-1.5 text-[13px] font-semibold text-ink no-underline hover:border-brand hover:text-ink">
              <Icon name={o.icon} size={16} className="text-brand" />
              {SECTORS[i][lang === "en" ? 2 : 1]}
            </Link>
          ))}
          <Link href={servicePath(lang, sites)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-solid px-3 py-1.5 text-[13px] font-semibold text-ink no-underline hover:border-brand hover:text-ink">
            <Icon name="language" size={16} className="text-brand" />
            {t.services.find((s) => s.id === "sites").title}
          </Link>
        </div>
      </section>
    </div>
  );
}
