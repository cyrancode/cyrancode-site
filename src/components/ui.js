import Icon from "./Icon";
import { I18N } from "@/lib/content";

export const wrap = "mx-auto max-w-[1160px] px-4";
export const btnGrad =
  "bg-grad shadow-glow inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] px-4 py-[11px] text-sm font-bold text-white no-underline transition-transform hover:-translate-y-0.5 hover:text-white";
export const btnLine =
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[10px] border border-line bg-solid px-[15px] py-2.5 text-sm font-semibold text-ink no-underline transition-colors hover:border-brand hover:text-ink";
export const card = "glass rounded-2xl border border-line";

export function Kicker({ children, className = "" }) {
  return <div className={`mb-1.5 font-mono text-xs text-brand-text ${className}`}>// {children}</div>;
}

export function H2({ children, className = "" }) {
  return <h2 className={`m-0 font-display text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.035em] ${className}`}>{children}</h2>;
}

export function PageHead({ kicker, title, sub }) {
  return (
    <>
      <Kicker>{kicker}</Kicker>
      <h1 className="m-0 mb-1.5 font-display text-[clamp(26px,3.6vw,36px)] font-extrabold tracking-[-0.04em] [text-wrap:balance]">{title}</h1>
      {sub && <p className="m-0 max-w-[580px] text-muted">{sub}</p>}
    </>
  );
}

const DOTS = { live: "#22C55E", dev: "#F59E0B", demo: "var(--brand)", design: "var(--brand2)" };

// Project card. p: project already in the page's language.
export function ProjectCard({ p, lang, showCat = false }) {
  const t = I18N[lang];
  const link = p.url || (p.flyer ? `/images/${p.flyer}` : null);
  return (
    <article className={`${card} lift flex flex-col overflow-hidden`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-bg2">
        {p.img && <img src={`/images/${p.img}`} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top" />}
        {p.flyer && (
          <div className="bg-grad flex h-full w-full items-center justify-center">
            <img src={`/images/${p.flyer}`} alt={p.name} loading="lazy" className="h-[86%] -rotate-3 rounded-md shadow-[0_12px_28px_rgba(0,0,0,.35)]" />
          </div>
        )}
        {!p.img && !p.flyer && (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden bg-[linear-gradient(135deg,var(--brand-soft),var(--bg2))]">
            <div className="bg-grad absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-2xl" />
            <span className="bg-grad shadow-glow flex h-14 w-14 items-center justify-center rounded-2xl text-white">
              <Icon name={p.icon || "code"} size={30} />
            </span>
            <span className="font-mono text-xs text-brand-text">{p.cat === "mobile" ? "Android · iOS" : p.tags.join(" · ")}</span>
          </div>
        )}
        <span className="pointer-events-none absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-solid px-2 py-[3px] text-[11px] font-bold text-ink">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: DOTS[p.status] }} />
          {t.status[p.status]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[7px] px-3.5 pb-3.5 pt-[13px]">
        {showCat && <div className="font-mono text-[10.5px] uppercase tracking-[.06em] text-muted">{t.cats[p.cat]}</div>}
        <div className="font-display text-base font-bold tracking-[-0.02em]">{p.name}</div>
        <div className="text-[13px] text-muted">{p.desc}</div>
        <div className="flex flex-wrap gap-1">
          {p.tags.map((g) => (
            <span key={g} className="rounded-md bg-brand-soft px-[7px] py-0.5 font-mono text-[10.5px] text-brand-text">{g}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1 pt-1.5 text-[13px] font-bold">
            {t.links[p.status]}
            <Icon name="arrow_outward" size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
