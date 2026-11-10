import { PAGES, SITE_URL, href } from "@/lib/content";
import { SECTOR_PAGES, SERVICE_PAGES, sectorPath, servicePath } from "@/lib/seo-content";

export const dynamic = "force-static";

const entry = (paths, priority, changeFrequency = "monthly") =>
  ["fr", "en"].map((lang) => ({
    url: SITE_URL + paths[lang],
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages: { fr: SITE_URL + paths.fr, en: SITE_URL + paths.en } },
  }));

export default function sitemap() {
  return [
    ...PAGES.flatMap((p) => entry({ fr: href("fr", p), en: href("en", p) }, p === "home" ? 1 : 0.8, p === "home" ? "weekly" : "monthly")),
    ...SERVICE_PAGES.flatMap((sp) => entry({ fr: servicePath("fr", sp), en: servicePath("en", sp) }, 0.9)),
    ...SECTOR_PAGES.flatMap((sp) => entry({ fr: sectorPath("fr", sp), en: sectorPath("en", sp) }, 0.7)),
  ];
}
