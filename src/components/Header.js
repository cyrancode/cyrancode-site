"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { I18N, PAGES, href, pageFromSlug, wa } from "@/lib/content";

function currentPage(pathname, lang) {
  const slug = (pathname || "").split("/").filter(Boolean)[1] || "";
  return pageFromSlug(lang, slug) || "home";
}

export default function Header({ lang }) {
  const t = I18N[lang];
  const pathname = usePathname();
  const page = currentPage(pathname, lang);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(document.documentElement.dataset.theme === "dark"), []);
  useEffect(() => setOpen(false), [pathname]);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("cc-theme", next); } catch {}
    setDark(!dark);
  };
  const rememberLang = (l) => { try { localStorage.setItem("cc-lang", l); } catch {} };

  const navLink = (id, mobile) => {
    const active = id === page;
    return (
      <Link
        key={id}
        href={href(lang, id)}
        className={`whitespace-nowrap rounded-lg no-underline transition-colors hover:bg-brand-soft ${mobile ? "px-2.5 py-[11px] text-[15px]" : "px-2.5 py-1.5 text-[13.5px]"} ${active ? "bg-brand-soft font-bold text-brand-text" : "font-medium text-ink"}`}
      >
        {t.nav[id]}
      </Link>
    );
  };

  const langBtn = (l) => (
    <Link
      href={href(l, page)}
      onClick={() => rememberLang(l)}
      aria-current={l === lang ? "true" : undefined}
      className={`rounded-[7px] px-2 py-[5px] font-mono text-[11.5px] font-bold no-underline ${l === lang ? "bg-ink text-bg" : "text-muted hover:text-ink"}`}
    >
      {l.toUpperCase()}
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-[var(--header)] [backdrop-filter:blur(14px)_saturate(1.4)]">
      <div className="mx-auto flex h-[58px] max-w-[1160px] items-center gap-3 px-4">
        <Link href={href(lang, "home")} className="shrink-0 no-underline" aria-label="cyrancode">
          <Logo />
        </Link>
        <nav className="ml-3 hidden items-center gap-0.5 nav:flex">{PAGES.map((id) => navLink(id, false))}</nav>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="flex rounded-[9px] border border-line bg-solid p-0.5" role="group" aria-label={t.ui.langLabel}>
            {langBtn("fr")}
            {langBtn("en")}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.ui.themeLabel}
            title={t.ui.themeLabel}
            className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[9px] border border-line bg-solid text-ink"
          >
            <Icon name={dark ? "light_mode" : "dark_mode"} size={18} />
          </button>
          <a
            href={wa(t.ui.waMsg)}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-[9px] bg-accent px-3 py-2 text-[13px] font-bold text-accent-on no-underline transition-transform hover:-translate-y-px hover:text-accent-on nav:inline-flex"
          >
            <Icon name="chat" size={17} />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={t.ui.menu}
            aria-expanded={open}
            className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[9px] border border-line bg-solid text-ink nav:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-0.5 border-b border-line bg-solid px-4 pb-4 pt-2 shadow-soft nav:hidden">
          {PAGES.map((id) => navLink(id, true))}
          <a
            href={wa(t.ui.waMsg)}
            target="_blank"
            rel="noopener"
            className="bg-grad mt-2 flex items-center justify-center gap-2 rounded-[10px] px-3.5 py-[11px] text-sm font-bold text-white no-underline hover:text-white"
          >
            <Icon name="chat" size={18} />
            {t.ui.ctaWa}
          </a>
        </div>
      )}
    </header>
  );
}
