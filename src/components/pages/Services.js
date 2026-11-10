import Icon from "../Icon";
import { PageHead, card, wrap } from "../ui";
import Link from "next/link";
import { I18N, wa } from "@/lib/content";
import { serviceById, servicePath } from "@/lib/seo-content";

export default function Services({ lang }) {
  const t = I18N[lang];
  const sp = t.servicesPage;
  return (
    <section className={`${wrap} fade-in pb-12 pt-8`}>
      <PageHead kicker={sp.kicker} title={sp.title} sub={sp.sub} />
      <div className="mt-[22px] flex flex-col gap-2.5">
        {t.services.map((s, i) => (
          <article key={s.id} id={s.id} className={`${card} grid scroll-mt-20 gap-x-6 gap-y-4 rounded-[18px] p-[18px] md:grid-cols-2`}>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="bg-grad shadow-glow flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl text-white">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <div className="font-mono text-[11px] text-muted">0{i + 1}</div>
                  <h2 className="m-0 font-display text-lg font-bold leading-[1.25] tracking-[-0.025em]"><Link href={servicePath(lang, serviceById(s.id))} className="text-ink no-underline hover:text-brand-text">{s.title}</Link></h2>
                </div>
              </div>
              <p className="m-0 text-sm text-muted">{s.short}</p>
              {s.tech && <div className="font-mono text-xs text-brand-text">{s.tech}</div>}
              <div className="mt-auto flex flex-wrap gap-2">
                <a href={wa(sp.waMsg + s.title)} target="_blank" rel="noopener" className="bg-grad inline-flex items-center gap-1.5 whitespace-nowrap rounded-[9px] px-[13px] py-2 text-[13px] font-bold text-white no-underline hover:text-white">
                  <Icon name="chat" size={16} />
                  {sp.cta}
                </a>
                <Link href={servicePath(lang, serviceById(s.id))} className="inline-flex items-center gap-1 whitespace-nowrap rounded-[9px] border border-line bg-solid px-3 py-2 text-[13px] font-semibold text-ink no-underline hover:border-brand hover:text-ink">
                  {sp.more}
                  <Icon name="arrow_forward" size={15} />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="mb-1.5 text-xs font-bold text-muted">{sp.includes}</div>
                <ul className="m-0 flex list-none flex-col gap-[5px] p-0">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-[7px] text-[13.5px]">
                      <Icon name="check" size={17} className="mt-px text-brand" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-1.5 text-xs font-bold text-muted">{sp.examples}</div>
                <div className="flex flex-wrap gap-[5px]">
                  {s.examples.map((ex) => (
                    <span key={ex} className="rounded-full bg-brand-soft px-[9px] py-[3px] text-xs font-semibold text-brand-text">{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
