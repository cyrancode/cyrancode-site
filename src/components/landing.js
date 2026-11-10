import Link from "next/link";
import Icon from "./Icon";
import { card } from "./ui";
import { I18N, wa } from "@/lib/content";
import { LANDING } from "@/lib/seo-content";

// crumbs: [{ name, path }], the last one is the current page.
export function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 text-[12.5px] text-muted">
      <ol className="m-0 flex list-none flex-wrap items-center gap-1 p-0">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < crumbs.length - 1 ? <Link href={c.path} className="text-muted no-underline hover:text-brand-text">{c.name}</Link> : <span className="text-ink">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Faq({ title, items }) {
  return (
    <div>
      <h2 className="m-0 mb-3.5 font-display text-[clamp(20px,2.6vw,24px)] font-bold tracking-[-0.03em]">{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((f) => (
          <details key={f.q} className={`${card} group rounded-[14px] px-4 py-3`}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
              <h3 className="m-0 text-[15px] font-bold">{f.q}</h3>
              <Icon name="expand_more" size={20} className="text-brand transition-transform group-open:rotate-180" />
            </summary>
            <p className="m-0 mt-2 text-[14px] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({ lang, msg }) {
  const L = LANDING[lang];
  const t = I18N[lang];
  return (
    <div className="bg-grad shadow-glow relative flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-[20px] px-[22px] py-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.18)_1px,transparent_1.2px)] [background-size:18px_18px]" />
      <div className="relative max-w-[520px]">
        <div className="font-display text-[clamp(20px,2.8vw,26px)] font-extrabold tracking-[-0.035em]">{L.cta}</div>
        <p className="m-0 mt-1 text-[14.5px] opacity-90">{L.ctaSub}</p>
      </div>
      <a href={wa(msg || t.ui.waMsg)} target="_blank" rel="noopener" className="relative inline-flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-accent px-4 py-[11px] text-sm font-bold text-accent-on no-underline transition-transform hover:-translate-y-0.5 hover:text-accent-on">
        <Icon name="chat" size={18} />
        {t.ui.ctaWa}
      </a>
    </div>
  );
}

export function Checks({ items }) {
  return (
    <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className={`${card} flex items-start gap-2 rounded-xl px-3 py-2.5 text-[14px] font-medium`}>
          <Icon name="check_circle" size={19} className="mt-px text-brand" />
          {f}
        </li>
      ))}
    </ul>
  );
}
