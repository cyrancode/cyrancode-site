import Link from "next/link";
import Icon from "../Icon";
import { H2, Kicker, ProjectCard, btnGrad, btnLine, card, wrap } from "../ui";
import { HOME_PROJECTS, I18N, PROJECTS, SECTORS, STACK, href, projectIn, wa } from "@/lib/content";
import { LANDING, SECTOR_PAGES, SERVICE_PAGES, sectorPath, serviceById, servicePath } from "@/lib/seo-content";
import { Faq } from "../landing";

// Badges around the photo, placed relative to the photo frame.
const BADGES = [
  { pos: "top-[6%] -left-[14%]", icon: "dashboard", delay: "0s" },
  { pos: "top-[20%] -right-[14%]", icon: "smartphone", delay: "1s" },
  { pos: "top-[58%] -right-[10%]", icon: "language", delay: "2s" },
  { pos: "top-[42%] -left-[16%]", icon: "palette", delay: "1.5s" },
];

export default function Home({ lang }) {
  const t = I18N[lang];
  const L = LANDING[lang];
  const h = t.home;
  const services = t.services;
  const projects = HOME_PROJECTS.map((id) => projectIn(PROJECTS.find((p) => p.id === id), lang));

  return (
    <div className="fade-in">
      {/* Hero */}
      <section className={`${wrap} relative grid items-center gap-10 pb-12 pt-8 md:grid-cols-2 md:gap-9 md:pt-10`}>
        <div className="pointer-events-none absolute -left-36 -top-32 h-[420px] w-[420px] rounded-full bg-brand opacity-15 blur-[90px]" />
        <div className="relative flex min-w-0 flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-brand-soft px-2.5 py-[5px] font-mono text-xs font-medium text-brand-text">
            <span className="h-[7px] w-[7px] rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,.2)]" />
            {h.kicker}
          </span>
          <h1 className="m-0 font-display text-[clamp(28px,7.4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.04em] [text-wrap:balance]">
            {h.title1}
            <span className="text-grad">{h.titleHi}</span>
            {h.title2}
          </h1>
          <p className="m-0 max-w-[470px] text-base text-muted [text-wrap:pretty]">{h.sub}</p>
          <div className="mt-0.5 flex flex-wrap gap-2">
            <a href={wa(t.ui.waMsg)} target="_blank" rel="noopener" className={btnGrad}>
              <Icon name="chat" size={18} />
              {h.ctaMain}
            </a>
            <Link href={href(lang, "projects")} className={btnLine}>
              {h.ctaSecond}
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 text-[13px] text-muted">
            <span className="font-mono text-brand-text">~/</span>Njua Cyran Nkwain · {h.role}
          </div>
        </div>

        <div className="relative flex justify-center py-5">
          <div className="bg-grad pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[78%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-55 blur-[50px]" />
          <div className="relative w-[min(330px,72%)]">
            <div className="bg-grad aspect-[4/5] rounded-[32px] p-[3px] shadow-[0_30px_60px_var(--shadow)]">
              <img
                src="/images/cyran-hero.webp"
                alt={t.alt.hero}
                width="720"
                height="900"
                fetchPriority="high"
                className="h-full w-full rounded-[29px] bg-bg2 object-cover"
              />
            </div>
            {BADGES.map((b, i) => (
              <div
                key={b.icon}
                className={`glass float absolute ${b.pos} flex items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-line px-2 py-1.5 text-[11px] font-semibold shadow-[0_10px_24px_var(--shadow)] sm:px-2.5 sm:text-xs`}
                style={{ animationDelay: b.delay }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-soft text-brand-text">
                  <Icon name={b.icon} size={14} />
                </span>
                {h.badges[i]}
              </div>
            ))}
            <div className="absolute -bottom-5 -left-[18%] whitespace-nowrap rounded-xl border border-white/10 bg-code px-3 py-2.5 font-mono text-[10.5px] leading-[1.6] text-[#D6DCFF] shadow-[0_14px_30px_rgba(0,0,0,.25)] sm:text-[11px]">
              <div className="mb-1.5 flex gap-1">
                <span className="h-[7px] w-[7px] rounded-full bg-[#FF5F57]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#FEBC2E]" />
                <span className="h-[7px] w-[7px] rounded-full bg-[#28C840]" />
              </div>
              <div><span className="text-[#B48CFF]">const</span> app = <span className="text-[#B48CFF]">await</span></div>
              <div>
                {"  "}cyrancode.<span className="text-[#7FA2FF]">build</span>(<span className="text-[#C5F82A]">{h.codeArg}</span>);
                <span className="blink text-[#C5F82A]">▍</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${wrap} py-7`}>
        <Kicker>{h.servicesKicker}</Kicker>
        <H2 className="mb-[18px]">{h.servicesTitle}</H2>
        <div className="mb-2.5 grid gap-2.5 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <Link key={s.id} href={servicePath(lang, serviceById(s.id))} className={`${card} lift relative flex flex-col gap-2.5 overflow-hidden rounded-[18px] p-[18px] text-ink no-underline hover:text-ink`}>
              <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-brand2 opacity-10 blur-[30px]" />
              <div className="flex items-start justify-between">
                <span className="bg-grad shadow-glow flex h-[42px] w-[42px] items-center justify-center rounded-xl text-white">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
              </div>
              <div className="font-display text-[17px] font-bold leading-[1.25] tracking-[-0.02em]">{s.title}</div>
              <div className="text-[13.5px] text-muted">{s.short}</div>
              <div className="mt-auto pt-1.5 font-mono text-[11.5px] text-brand-text">{s.tech}</div>
            </Link>
          ))}
        </div>
        <div className="grid gap-2.5 md:grid-cols-3">
          {services.slice(3).map((s) => (
            <Link key={s.id} href={servicePath(lang, serviceById(s.id))} className={`${card} lift flex items-center gap-3 rounded-[14px] px-3.5 py-[13px] text-ink no-underline hover:text-ink`}>
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-brand-soft text-brand-text">
                <Icon name={s.icon} size={19} />
              </span>
              <span className="flex flex-col">
                <span className="text-[14.5px] font-bold">{s.title}</span>
                <span className="text-[12.5px] text-muted">{s.short}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className={`${wrap} pb-7 pt-2`}>
        <div className={`${card} flex flex-wrap items-center gap-2 rounded-[14px] px-3.5 py-3`}>
          <span className="mr-1.5 font-mono text-xs text-muted">{h.stack}</span>
          {STACK.map((k) => (
            <span key={k} className="whitespace-nowrap rounded-[7px] border border-line bg-bg2 px-[9px] py-1 font-mono text-xs font-medium">{k}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className={`${wrap} py-7`}>
        <div className="mb-[18px] flex flex-wrap items-end justify-between gap-3">
          <div>
            <Kicker>{h.projectsKicker}</Kicker>
            <H2>{h.projectsTitle}</H2>
          </div>
          <Link href={href(lang, "projects")} className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold">
            {h.projectsLink}
            <Icon name="arrow_forward" size={17} />
          </Link>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => <ProjectCard key={p.id} p={p} lang={lang} />)}
        </div>
      </section>

      {/* Business websites */}
      <section className={`${wrap} py-7`}>
        <div className="relative grid items-center gap-5 overflow-hidden rounded-[20px] bg-code px-[22px] py-6 text-[#EEF1FF] md:grid-cols-2">
          <div className="pointer-events-none absolute -right-20 -top-36 h-[340px] w-[340px] rounded-full bg-[#6B3DFF] opacity-45 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-36 -left-16 h-60 w-60 rounded-full bg-[#2B50FF] opacity-40 blur-[70px]" />
          <div className="relative flex flex-col gap-2.5">
            <div className="font-mono text-xs text-[#C5F82A]">// {h.bizKicker}</div>
            <h2 className="m-0 font-display text-[clamp(21px,2.8vw,27px)] font-bold tracking-[-0.035em]">{h.bizTitle}</h2>
            <p className="m-0 max-w-[440px] text-sm text-[#B9C1E0]">{h.bizSub}</p>
            <Link href={href(lang, "business")} className="mt-1 inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-[9px] bg-[#C5F82A] px-3.5 py-[9px] text-[13.5px] font-bold text-[#0A0F1F] no-underline hover:text-[#0A0F1F]">
              {h.bizLink}
              <Icon name="arrow_forward" size={17} />
            </Link>
          </div>
          <div className="relative grid grid-cols-3 gap-2 sm:grid-cols-4">
            {SECTORS.slice(0, 8).map((s, i) => (
              <Link key={s[0]} href={sectorPath(lang, SECTOR_PAGES[i])} className="flex flex-col gap-1.5 rounded-xl border border-white/10 bg-white/[.06] p-2.5 text-[#EEF1FF] no-underline transition-colors hover:border-[#C5F82A] hover:text-[#EEF1FF]">
                <Icon name={s[0]} size={20} className="text-[#C5F82A]" />
                <span className="text-xs font-semibold leading-[1.25]">{lang === "en" ? s[4] : s[3]}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className={`${wrap} py-7`}>
        <Kicker>{h.stepsKicker}</Kicker>
        <H2 className="mb-[18px]">{h.stepsTitle}</H2>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((s, i) => (
            <div key={s.t} className={`${card} flex flex-col gap-[7px] rounded-[14px] p-[15px]`}>
              <span className="font-mono text-xs font-bold text-brand-text">0{i + 1}<span className="font-normal text-muted"> ──</span></span>
              <div className="text-[15px] font-bold leading-[1.3]">{s.t}</div>
              <div className="text-[13px] text-muted">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ and local text for Google */}
      <section className={`${wrap} grid gap-6 py-7 md:grid-cols-2`}>
        <Faq title={L.faq} items={L.homeFaq} />
        <div className={`${card} flex flex-col gap-3 self-start rounded-[18px] p-[18px]`}>
          <h2 className="m-0 font-display text-[clamp(18px,2.4vw,22px)] font-bold tracking-[-0.03em]">{L.seoTitle}</h2>
          <p className="m-0 text-[14px] text-muted">{L.seoText}</p>
          <div className="flex flex-wrap gap-1.5">
            {SERVICE_PAGES.map((sp) => {
              const s = services.find((x) => x.id === sp.id);
              return (
                <Link key={sp.id} href={servicePath(lang, sp)} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-solid px-2.5 py-1 text-[12.5px] font-semibold text-ink no-underline hover:border-brand hover:text-ink">
                  <Icon name={s.icon} size={15} className="text-brand" />
                  {sp[lang].h1.split(/ à | in /)[0]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final call */}
      <section className={`${wrap} pb-12 pt-6`}>
        <div className="bg-grad shadow-glow relative flex flex-wrap items-center justify-between gap-[18px] overflow-hidden rounded-[20px] px-[22px] py-7 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.18)_1px,transparent_1.2px)] [background-size:18px_18px]" />
          <div className="relative max-w-[520px]">
            <h2 className="m-0 mb-1.5 font-display text-[clamp(22px,3vw,28px)] font-extrabold tracking-[-0.035em]">{h.finalTitle}</h2>
            <p className="m-0 text-[14.5px] opacity-90">{h.finalSub}</p>
          </div>
          <a href={wa(t.ui.waMsg)} target="_blank" rel="noopener" className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-accent px-4 py-[11px] text-sm font-bold text-accent-on no-underline transition-transform hover:-translate-y-0.5 hover:text-accent-on">
            <Icon name="chat" size={18} />
            {h.ctaMain}
          </a>
        </div>
      </section>
    </div>
  );
}
