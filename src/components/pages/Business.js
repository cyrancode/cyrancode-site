import Icon from "../Icon";
import { PageHead, ProjectCard, card, wrap } from "../ui";
import Link from "next/link";
import { I18N, PROJECTS, SECTORS, projectIn, wa } from "@/lib/content";
import { SECTOR_PAGES, sectorPath } from "@/lib/seo-content";

export default function Business({ lang }) {
  const t = I18N[lang];
  const b = t.biz;
  const demos = PROJECTS.filter((p) => p.status === "demo").map((p) => projectIn(p, lang));
  const h2 = "m-0 mb-3.5 font-display text-[clamp(20px,2.6vw,24px)] font-bold tracking-[-0.03em]";

  return (
    <div className="fade-in">
      <section className={`${wrap} pb-5 pt-8`}>
        <PageHead kicker={b.kicker} title={b.title} sub={b.sub} />
        <div className="mt-[18px] grid grid-cols-2 gap-2 md:grid-cols-5">
          {b.features.map((f) => (
            <div key={f.t} className={`${card} flex items-center gap-2.5 rounded-xl p-3`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-brand-soft text-brand-text">
                <Icon name={f.icon} size={18} />
              </span>
              <span className="text-[13.5px] font-semibold leading-[1.3]">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-5`}>
        <h2 className={h2}>{b.sectorsTitle}</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          {SECTORS.map((s, i) => {
            const name = lang === "en" ? s[2] : s[1];
            return (
              <Link key={s[0]} href={sectorPath(lang, SECTOR_PAGES[i])} className={`${card} lift flex flex-col gap-2 rounded-xl p-3 text-ink no-underline hover:text-ink`}>
                <Icon name={s[0]} size={21} className="text-brand" />
                <span className="text-[13px] font-semibold leading-[1.3]">{name}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={`${wrap} py-5`}>
        <h2 className={h2}>{b.demosTitle}</h2>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((p) => <ProjectCard key={p.id} p={p} lang={lang} />)}
        </div>
      </section>

      <section id="offres" className={`${wrap} scroll-mt-20 pb-12 pt-5`}>
        <h2 className={h2}>{b.plansTitle}</h2>
        <div className="grid items-stretch gap-3 md:grid-cols-3">
          {b.plans.map((p) => (
            <div key={p.name} className={`rounded-[18px] ${p.featured ? "bg-grad p-0.5" : ""}`}>
              <div className={`flex h-full flex-col gap-3 rounded-2xl bg-solid p-[18px] ${p.featured ? "" : "border border-line"}`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="m-0 font-display text-[17px] font-bold tracking-[-0.02em]">{p.name}</h3>
                  {p.featured && <span className="whitespace-nowrap rounded-full bg-accent px-2 py-[3px] text-[11px] font-bold text-accent-on">{b.featured}</span>}
                </div>
                <div className="min-h-10 text-[13.5px] text-muted">{p.desc}</div>
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-display text-[25px] font-extrabold tracking-[-0.03em]">{b.price}</span>
                  <span className="text-[12.5px] text-muted">{p.per}</span>
                </div>
                <ul className="m-0 flex flex-1 list-none flex-col gap-[7px] border-t border-line p-0 pt-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-[7px] text-[13.5px]">
                      <Icon name="check" size={17} className="mt-px text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(b.planMsg + p.name)}
                  target="_blank"
                  rel="noopener"
                  className={`flex items-center justify-center gap-[7px] whitespace-nowrap rounded-[10px] px-3.5 py-2.5 text-[13.5px] font-bold no-underline ${p.featured ? "bg-grad text-white hover:text-white" : "border border-line bg-solid text-ink hover:border-brand hover:text-ink"}`}
                >
                  <Icon name="chat" size={17} />
                  {b.choose}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3.5 rounded-[14px] border border-line bg-brand-soft px-4 py-3.5">
          <span className="bg-grad flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-white">
            <Icon name="account_balance_wallet" size={20} />
          </span>
          <div className="min-w-[200px] flex-1">
            <div className="text-[14.5px] font-bold">{b.payTitle}</div>
            <div className="text-[13px] text-muted">{b.payText}</div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["MTN MoMo", "Orange Money"].map((m) => (
              <span key={m} className="whitespace-nowrap rounded-lg border border-line bg-solid px-2.5 py-[5px] text-xs font-bold">{m}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
