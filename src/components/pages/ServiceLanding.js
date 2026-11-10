import Link from "next/link";
import Icon from "../Icon";
import { Kicker, ProjectCard, card, wrap } from "../ui";
import { Breadcrumb, Checks, CtaBand, Faq } from "../landing";
import { I18N, PROJECTS, href, projectIn } from "@/lib/content";
import { LANDING, SERVICE_PAGES, servicePath } from "@/lib/seo-content";

export default function ServiceLanding({ lang, sp }) {
  const t = I18N[lang];
  const L = LANDING[lang];
  const c = sp[lang];
  const svc = t.services.find((s) => s.id === sp.id);
  const projects = sp.projects.map((id) => projectIn(PROJECTS.find((p) => p.id === id), lang));
  const crumbs = [
    { name: L.breadcrumb, path: href(lang, "home") },
    { name: t.nav.services, path: href(lang, "services") },
    { name: svc.title, path: servicePath(lang, sp) },
  ];
  const h2 = "m-0 mb-3.5 font-display text-[clamp(20px,2.6vw,24px)] font-bold tracking-[-0.03em]";

  return (
    <div className="fade-in">
      <section className={`${wrap} pb-6 pt-7`}>
        <Breadcrumb crumbs={crumbs} />
        <div className="grid items-start gap-6 md:grid-cols-[1fr_320px]">
          <div className="flex min-w-0 flex-col gap-3">
            <span className="bg-grad shadow-glow flex h-12 w-12 items-center justify-center rounded-[14px] text-white">
              <Icon name={svc.icon} size={26} />
            </span>
            <h1 className="m-0 font-display text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.12] tracking-[-0.04em] [text-wrap:balance]">{c.h1}</h1>
            {c.intro.map((p) => <p key={p} className="m-0 max-w-[640px] text-[15.5px] text-muted [text-wrap:pretty]">{p}</p>)}
            {svc.tech && <div className="font-mono text-[12.5px] text-brand-text">{svc.tech}</div>}
          </div>
          <div className={`${card} rounded-[18px] p-4`}>
            <div className="mb-2 text-xs font-bold text-muted">{L.forWho}</div>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
              {c.forWho.map((w) => (
                <li key={w} className="flex items-center gap-2 text-[14px] font-semibold">
                  <Icon name="check" size={17} className="text-brand" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-6`}>
        <h2 className={h2}>{L.included}</h2>
        <Checks items={svc.includes} />
      </section>

      <section className={`${wrap} py-6`}>
        <h2 className={h2}>{L.process}</h2>
        <ol className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.steps.map((s, i) => (
            <li key={s.t} className={`${card} flex flex-col gap-[7px] rounded-[14px] p-[15px]`}>
              <span className="font-mono text-xs font-bold text-brand-text">0{i + 1}</span>
              <div className="text-[15px] font-bold leading-[1.3]">{s.t}</div>
              <div className="text-[13px] text-muted">{s.d}</div>
            </li>
          ))}
        </ol>
      </section>

      {projects.length > 0 && (
        <section className={`${wrap} py-6`}>
          <h2 className={h2}>{L.related}</h2>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => <ProjectCard key={p.id} p={p} lang={lang} />)}
          </div>
        </section>
      )}

      <section className={`${wrap} py-6`}>
        <Faq title={L.faq} items={c.faq} />
      </section>

      <section className={`${wrap} py-6`}>
        <CtaBand lang={lang} msg={t.servicesPage.waMsg + svc.title} />
      </section>

      <section className={`${wrap} pb-12 pt-4`}>
        <Kicker>{L.other}</Kicker>
        <div className="flex flex-wrap gap-2">
          {SERVICE_PAGES.filter((o) => o.id !== sp.id).map((o) => {
            const s = t.services.find((x) => x.id === o.id);
            return (
              <Link key={o.id} href={servicePath(lang, o)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-solid px-3 py-1.5 text-[13px] font-semibold text-ink no-underline hover:border-brand hover:text-ink">
                <Icon name={s.icon} size={16} className="text-brand" />
                {s.title}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
