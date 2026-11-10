import Icon from "../Icon";
import { PageHead, card, wrap } from "../ui";
import { I18N, wa } from "@/lib/content";

export default function Training({ lang }) {
  const t = I18N[lang];
  const tr = t.training;
  const label = "mb-[7px] text-xs font-bold text-muted";
  return (
    <section className={`${wrap} fade-in grid items-start gap-7 pb-12 pt-8 md:grid-cols-2`}>
      <div className="flex min-w-0 flex-col gap-4">
        <PageHead kicker={tr.kicker} title={tr.title} sub={tr.sub} />
        <div>
          <div className={label}>{tr.forLabel}</div>
          <div className="flex flex-wrap gap-1.5">
            {tr.audience.map((a) => (
              <span key={a.t} className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-solid px-[11px] py-1.5 text-[13px] font-semibold">
                <Icon name={a.icon} size={16} className="text-brand" />
                {a.t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className={label}>{tr.topicsLabel}</div>
          <div className="flex flex-col gap-[5px] overflow-x-auto rounded-[14px] bg-code p-3.5 font-mono text-[12.5px] text-[#D6DCFF]">
            {tr.topics.map((tp) => (
              <div key={tp.k} className="whitespace-nowrap">
                <span className="text-[#C5F82A]">$</span> <span className="text-[#7FA2FF]">learn</span> {tp.k}{" "}
                <span className="text-[#6E78A0]">  # {tp.d}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={label}>{tr.formatsLabel}</div>
          <div className="grid gap-2 sm:grid-cols-3">
            {tr.formats.map((f) => (
              <div key={f.t} className={`${card} flex flex-col gap-[5px] rounded-xl p-3`}>
                <Icon name={f.icon} size={20} className="text-brand" />
                <div className="text-sm font-bold">{f.t}</div>
                <div className="text-[12.5px] text-muted">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
        <a href={wa(tr.waMsg)} target="_blank" rel="noopener" className="bg-grad shadow-glow inline-flex items-center gap-[7px] self-start whitespace-nowrap rounded-[10px] px-[15px] py-2.5 text-sm font-bold text-white no-underline hover:text-white">
          <Icon name="chat" size={17} />
          {tr.cta}
        </a>
      </div>
      <div className="relative mx-auto w-full max-w-[420px] md:mt-6">
        <div className="bg-grad pointer-events-none absolute inset-[10%_5%] rounded-full opacity-40 blur-[50px]" />
        <img
          src="/images/cyran-training.webp"
          alt={t.alt.training}
          width="720"
          height="900"
          loading="lazy"
          className="relative aspect-[4/5] w-full rounded-[22px] border border-line bg-bg2 object-cover"
        />
      </div>
    </section>
  );
}
