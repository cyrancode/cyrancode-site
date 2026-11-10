"use client";

import { useState } from "react";
import { PageHead, ProjectCard, wrap } from "../ui";
import { I18N, PROJECTS, projectIn } from "@/lib/content";

const CATS = ["all", "web", "mobile", "site", "design"];

export default function Projects({ lang }) {
  const t = I18N[lang];
  const [filter, setFilter] = useState("all");
  const list = PROJECTS.filter((p) => filter === "all" || p.cat === filter).map((p) => projectIn(p, lang));
  return (
    <section className={`${wrap} fade-in pb-12 pt-8`}>
      <PageHead kicker={t.projectsPage.kicker} title={t.projectsPage.title} sub={t.projectsPage.sub} />
      <div className="-mx-4 mb-4 mt-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
        {CATS.map((c) => {
          const on = c === filter;
          const count = c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`cursor-pointer whitespace-nowrap rounded-full border px-3 py-[7px] text-[13px] font-semibold transition-colors ${on ? "border-ink bg-ink text-bg" : "border-line bg-solid text-ink hover:border-brand"}`}
            >
              {t.cats[c]}
              <span className="ml-1.5 font-mono text-[11px] opacity-70">{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => <ProjectCard key={p.id} p={p} lang={lang} showCat />)}
      </div>
    </section>
  );
}
