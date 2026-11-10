import Icon from "../Icon";
import { card, wrap } from "../ui";
import { GITHUB, I18N, PORTFOLIO } from "@/lib/content";

export default function About({ lang }) {
  const t = I18N[lang];
  const a = t.about;
  return (
    <section className={`${wrap} fade-in grid items-start gap-7 pb-12 pt-8 md:grid-cols-[minmax(0,420px)_1fr] md:gap-10`}>
      <div className="relative mx-auto w-full max-w-[400px]">
        <div className="bg-grad pointer-events-none absolute inset-[8%] rounded-full opacity-45 blur-[50px]" />
        <div className="bg-grad relative aspect-[4/5] rounded-3xl p-[3px]">
          <img
            src="/images/cyran-about.webp"
            alt={t.alt.about}
            width="640"
            height="800"
            className="h-full w-full rounded-[21px] bg-bg2 object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-3.5">
        <div className="font-mono text-xs text-brand-text">// {a.kicker}</div>
        <h1 className="m-0 font-display text-[clamp(26px,3.6vw,36px)] font-extrabold tracking-[-0.04em]">{a.title}</h1>
        <p className="m-0 text-[15.5px] [text-wrap:pretty]">{a.p1}</p>
        <p className="m-0 text-[15px] text-muted [text-wrap:pretty]">{a.p2}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {a.facts.map((f) => (
            <div key={f.t} className={`${card} flex items-center gap-2.5 rounded-xl px-3 py-[11px]`}>
              <Icon name={f.icon} size={20} className="text-brand" />
              <span className="text-[13.5px] font-semibold leading-[1.3]">{f.t}</span>
            </div>
          ))}
        </div>
        <div className="mt-1 flex flex-wrap gap-2">
          <a href={PORTFOLIO} target="_blank" rel="noopener" className="bg-grad shadow-glow inline-flex items-center gap-[7px] whitespace-nowrap rounded-[10px] px-[15px] py-2.5 text-sm font-bold text-white no-underline hover:text-white">
            {a.portfolio}
            <Icon name="arrow_outward" size={17} />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener" className="inline-flex items-center whitespace-nowrap rounded-[10px] border border-line bg-solid px-3.5 py-[9px] font-mono text-sm font-semibold text-ink no-underline hover:border-brand hover:text-ink">
            github/cyrancode
          </a>
        </div>
      </div>
    </section>
  );
}
