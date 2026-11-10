import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { EMAIL, GITHUB, I18N, LINKEDIN, PAGES, PHONE, PORTFOLIO, SECTORS, href, wa } from "@/lib/content";
import { SECTOR_PAGES, sectorPath, serviceById, servicePath } from "@/lib/seo-content";

export default function Footer({ lang }) {
  const t = I18N[lang];
  const head = "mb-0.5 font-mono text-[11.5px] text-muted";
  const link = "text-[13px] text-ink no-underline hover:text-brand-text";
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-6 px-4 pb-6 pt-8 md:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-2.5 md:col-span-1">
          <Logo small />
          <p className="m-0 max-w-[250px] text-[13px] text-muted">{t.footer.line}</p>
          <div className="flex flex-wrap gap-2.5 text-[13px] font-semibold">
            <a href={PORTFOLIO} target="_blank" rel="noopener">Portfolio</a>
            <a href={GITHUB} target="_blank" rel="noopener">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className={head}>{t.footer.services}</div>
          {t.services.map((s) => (
            <Link key={s.id} href={servicePath(lang, serviceById(s.id))} className={link}>{s.title}</Link>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className={head}>{t.footer.links}</div>
          {PAGES.map((p) => (
            <Link key={p} href={href(lang, p)} className={link}>{t.nav[p]}</Link>
          ))}
        </div>
        <div className="col-span-2 flex flex-col gap-1.5 md:col-span-1">
          <div className={head}>{t.footer.contact}</div>
          <a href={wa(t.ui.waMsg)} target="_blank" rel="noopener" className={`${link} inline-flex items-center gap-1.5`}>
            <Icon name="chat" size={15} className="text-brand" />WhatsApp : {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className={`${link} inline-flex items-center gap-1.5`}>
            <Icon name="mail" size={15} className="text-brand" />{EMAIL}
          </a>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
            <Icon name="location_on" size={15} className="text-brand" />{t.contact.city}
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-[1160px] border-t border-line px-4 py-4">
        <div className={head}>{t.footer.sectors}</div>
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          {SECTORS.map((s, i) => (
            <Link key={s[0]} href={sectorPath(lang, SECTOR_PAGES[i])} className="text-[12.5px] text-muted no-underline hover:text-brand-text">{lang === "en" ? s[2] : s[1]}</Link>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1160px] flex-wrap justify-between gap-2.5 border-t border-line px-4 pb-24 pt-3.5 text-xs text-muted nav:pb-6">
        <span>{t.footer.rights}</span>
        <span className="font-mono">built with &lt;/&gt; in Douala</span>
      </div>
    </footer>
  );
}
