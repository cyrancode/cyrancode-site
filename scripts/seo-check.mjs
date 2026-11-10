// Checks every built page for the basics Google needs. Usage: npm run build && node scripts/seo-check.mjs
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../out", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { if (!p.includes("_next")) walk(p); }
    else if (f === "index.html") files.push(p);
  }
})(root);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
const exists = (u) => {
  let p = u.split("#")[0].split("?")[0];
  if (p.endsWith("/")) p += "index.html";
  return existsSync(join(root, p));
};

let issues = 0;
const broken = new Set();
const titles = new Map();
for (const f of files) {
  const rel = f.slice(root.length).replace(/\\/g, "/");
  const h = readFileSync(f, "utf8");
  const title = decode((h.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
  const desc = decode((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const canon = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  const hreflang = (h.match(/hrefLang="|hreflang="/g) || []).length;
  let ld = 0, ldBad = false;
  for (const m of h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    ld++;
    try { JSON.parse(m[1]); } catch { ldBad = true; }
  }
  for (const m of h.matchAll(/href="(\/[^"]*)"/g)) if (!m[1].startsWith("/_next") && !exists(m[1])) broken.add(m[1]);
  if (rel === "/index.html" || rel.startsWith("/404") || rel.startsWith("/_not-found")) continue;
  if (titles.has(title)) console.log("duplicate title:", rel, "=", titles.get(title));
  titles.set(title, rel);
  const p = [];
  if (h1 !== 1) p.push(`h1=${h1}`);
  if (title.length > 70) p.push(`title ${title.length}`);
  if (desc.length < 70 || desc.length > 170) p.push(`desc ${desc.length}`);
  if (!canon) p.push("no canonical");
  if (hreflang < 3) p.push(`hreflang ${hreflang}`);
  if (!ld) p.push("no structured data");
  if (ldBad) p.push("BAD structured data");
  if (p.length) { issues++; console.log(rel, "→", p.join(", "), "|", title); }
}
console.log(`\n${files.length} pages, ${issues} with issues`);
console.log("broken internal links:", [...broken].join(" ") || "none");
