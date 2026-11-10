# Getting cyrancode found on Google

The website itself is ready for Google (see "What the site already does" at the end). These steps need **your** accounts, so only you can do them. Do them in this order.

## 1. Choose the address (before going online)

- Best: buy **cyrancode.com** (about 10 000 FCFA a year, e.g. at Cloudflare Registrar, Namecheap or a Cameroonian registrar). A real domain ranks and looks better than `cyrancode.pages.dev`.
- Then change one line in `src/lib/content.js`: `SITE_URL = "https://cyrancode.com"`, and rebuild. The sitemap, robots file, links and structured data all follow automatically.
- If you start with `cyrancode.pages.dev`, that's fine; you can move later (Search Console has a "Change of address" tool).

## 2. Put the site online (Cloudflare Pages)

```bash
npm run build
```
```bash
npx wrangler pages project create cyrancode --production-branch main
```
```bash
npx wrangler pages deploy out --project-name cyrancode --branch main
```
With your own domain: Cloudflare Pages → project → Custom domains → add `cyrancode.com` and `www.cyrancode.com`.

## 3. Google Search Console (most important for the website)

1. Go to https://search.google.com/search-console with your Google account.
2. Add a property: **Domain** (`cyrancode.com`) if you have a domain, verified by a DNS record (easy on Cloudflare); or **URL prefix** (`https://cyrancode.pages.dev/`) verified with an HTML tag. If you get an HTML tag, send it to me and I'll add it.
3. Sitemaps → submit `sitemap.xml`.
4. URL inspection → paste the home page `/fr/` and `/en/` → **Request indexing**. Do the same for the main service pages:
   - `/fr/services/creation-site-web/`
   - `/fr/services/creation-application-web/`
   - `/fr/services/developpement-application-mobile/`
5. Come back after 1–2 weeks: "Pages" shows what Google indexed; "Performance" shows which searches bring people.

Also add the site to **Bing Webmaster Tools** (https://www.bing.com/webmasters): you can import directly from Search Console in one click.

## 4. Google Business Profile (most important for "near me" and Google Maps)

This is what makes you appear in the map box when someone searches "développeur web Douala" or "création site web Douala".

1. Go to https://business.google.com and create a profile named **cyrancode**.
2. Main category: **Concepteur de sites Web** (Website designer). Extra categories: **Développeur de logiciels** (Software company), **Graphiste**, **Centre de formation en informatique** if available.
3. If you don't receive clients at an address, choose **"Je me déplace chez mes clients"** (service-area business) and add Douala, Yaoundé.
4. Phone: +237 6 72 52 71 20. Website: your site address. Hours: your working hours.
5. Add services (same names as on the site), a description (you can reuse the home page text), your logo (`public/icon-512.png`), your photo and some work photos (flyers, screenshots).
6. Verify the profile (Google sends a code by phone, SMS, video or post).
7. **Ask every client for a Google review.** Reviews are the strongest local ranking signal.
8. Post a "news" update every week or two (use your flyers and the texts in `flyers/posts-texts/`).

## 5. Links that point to your site (they tell Google you are trustworthy)

- **Your portfolio** (cyran-portfolio.vercel.app): add a visible link "Services : cyrancode" to the new site. Also fix the wrong phone number and email there.
- **LinkedIn**: put the site in your profile (Contact info → Website) and in your headline/About.
- **GitHub**: add the site to your profile website field.
- **Facebook / TikTok / Instagram**: put the site link in each bio. When you post a flyer, link to the matching sector page, e.g. the restaurant flyer → `/fr/sites-commerces/site-web-restaurant/`.
- **Client sites**: in each client site's footer, add a small "Site réalisé par cyrancode" link (ask the client). Each one is a real link from a local business.
- **Directories**: list cyrancode (same name, phone, city everywhere) on Facebook Pages, Bing Places, Maligah, Cameroon business directories, and Google Maps (via the profile above).

## 6. Keep it alive

- Add every new project to `src/lib/content.js` (PROJECTS) with a screenshot.
- When you have real client reviews, add them to the site (there is no fake review on it).
- When your prices are fixed, replace "Sur devis" in the plans if you want prices shown.
- Expect results in weeks to months, not days. New sites usually start appearing for long searches ("site web pour restaurant Douala") before short ones ("site web Douala").

## What the site already does

- 55 pages in French and English, each with its own title and description written around real searches:
  - 6 service pages (création de site web, application web et logiciel de gestion, application mobile, design graphique, formation, maintenance);
  - 13 sector pages (site web pour restaurant, hôtel, école, clinique, boutique, salle de sport, agence de voyage…);
  - the 7 main pages.
- Language links (hreflang) so Google shows French to French speakers and English to English speakers.
- Structured data: business (ProfessionalService) with Douala location and areas served, you as a Person linked to your portfolio, GitHub and LinkedIn, services, FAQs and breadcrumbs.
- `sitemap.xml` and `robots.txt`, a share image for WhatsApp/Facebook, fast static pages that work well on phones.
- Check script: `node scripts/seo-check.mjs` after a build lists any page with a missing or too-long title, description or H1.
