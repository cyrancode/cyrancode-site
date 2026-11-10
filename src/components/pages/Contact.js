"use client";

import { useRef, useState } from "react";
import Icon from "../Icon";
import { PageHead, card, wrap } from "../ui";
import { EMAIL, I18N, PHONE, wa } from "@/lib/content";

export default function Contact({ lang }) {
  const t = I18N[lang];
  const c = t.contact;
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  const buildMsg = () => {
    const fd = new FormData(form.current);
    if (!fd.get("name") || !fd.get("reach") || !fd.get("message")) return null;
    const l = c.labels;
    const lines = [l.hello, "", fd.get("message"), "", `${l.name} : ${fd.get("name")}`, `${l.reach} : ${fd.get("reach")}`];
    if (fd.get("type")) lines.push(`${l.type} : ${fd.get("type")}`);
    if (fd.get("budget")) lines.push(`${l.budget} : ${fd.get("budget")}`);
    return lines.join("\n");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const m = buildMsg();
    if (!m) return;
    window.open(wa(m), "_blank", "noopener");
    setSent(true);
  };
  const byEmail = () => {
    if (!form.current.reportValidity()) return;
    const m = buildMsg();
    if (!m) return;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(c.labels.subject)}&body=${encodeURIComponent(m)}`;
    setSent(true);
  };

  const field = "rounded-[9px] border border-line bg-solid px-[11px] py-2.5 text-[15px] text-ink outline-brand";
  const label = "flex flex-col gap-1 text-[12.5px] font-semibold";

  return (
    <section className={`${wrap} fade-in pb-12 pt-8`}>
      <PageHead kicker={c.kicker} title={c.title} sub={c.sub} />
      <div className="mt-[22px] grid items-start gap-3.5 md:grid-cols-2">
        <div className="flex flex-col gap-2.5">
          <a href={wa(t.ui.waMsg)} target="_blank" rel="noopener" className="bg-grad relative flex items-center gap-3.5 overflow-hidden rounded-[18px] p-[18px] text-white no-underline shadow-[0_16px_36px_var(--glow)] transition-transform hover:-translate-y-0.5 hover:text-white">
            <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-accent text-accent-on">
              <Icon name="chat" size={25} />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-[-0.025em]">{c.waBig}</span>
              <span className="text-[13px] font-semibold opacity-90">{PHONE}</span>
            </span>
            <Icon name="arrow_forward" size={22} className="ml-auto" />
          </a>
          <div className={`${card} flex flex-col rounded-[14px]`}>
            <a href="tel:+237672527120" className="flex items-center gap-3 border-b border-line px-4 py-3 text-ink no-underline hover:text-ink">
              <Icon name="call" size={20} className="text-brand" />
              <span><span className="block text-xs text-muted">{c.phone}</span><span className="text-[14.5px] font-semibold">{PHONE}</span></span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 border-b border-line px-4 py-3 text-ink no-underline hover:text-ink">
              <Icon name="mail" size={20} className="text-brand" />
              <span><span className="block text-xs text-muted">{c.email}</span><span className="text-[14.5px] font-semibold">{EMAIL}</span></span>
            </a>
            <div className="flex items-center gap-3 px-4 py-3">
              <Icon name="location_on" size={20} className="text-brand" />
              <span><span className="block text-xs text-muted">{c.location}</span><span className="text-[14.5px] font-semibold">{c.city}</span></span>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={onSubmit} className={`${card} flex flex-col gap-3 rounded-[18px] p-[18px]`}>
          <div className="font-display text-[17px] font-bold tracking-[-0.02em]">{c.formTitle}</div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <label className={label}>{c.name}<input name="name" required autoComplete="name" className={field} /></label>
            <label className={label}>{c.reach}<input name="reach" required className={field} /></label>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <label className={label}>
              {c.type}
              <select name="type" className={field} defaultValue="">
                <option value="">{c.choose}</option>
                {t.services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                <option value={c.other}>{c.other}</option>
              </select>
            </label>
            <label className={label}>
              {c.budget}
              <select name="budget" className={field} defaultValue="">
                <option value="">{c.choose}</option>
                {c.budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </label>
          </div>
          <label className={label}>
            {c.message}
            <textarea name="message" required rows={4} placeholder={c.messagePh} className={`${field} resize-y`} />
          </label>
          <div className="flex flex-wrap gap-2">
            <button type="submit" className="bg-grad flex min-w-[170px] flex-1 cursor-pointer items-center justify-center gap-[7px] whitespace-nowrap rounded-[10px] border-0 px-3.5 py-[11px] text-sm font-bold text-white">
              <Icon name="chat" size={17} />
              {c.submitWa}
            </button>
            <button type="button" onClick={byEmail} className="flex cursor-pointer items-center justify-center gap-[7px] whitespace-nowrap rounded-[10px] border border-line bg-solid px-3.5 py-2.5 text-sm font-semibold text-ink">
              <Icon name="mail" size={17} />
              {c.submitMail}
            </button>
          </div>
          {sent && (
            <div className="flex items-start gap-2 rounded-[10px] bg-brand-soft px-3 py-2.5 text-[13.5px]">
              <Icon name="check_circle" size={18} className="text-brand" />
              {c.success}
            </div>
          )}
          <div className="text-xs text-muted">{c.note}</div>
        </form>
      </div>
    </section>
  );
}
