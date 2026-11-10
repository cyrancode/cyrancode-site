# cyrancode website

Business website of cyrancode (Njua Cyran Nkwain), software developer in Douala.
Next.js static export, Tailwind 4, plain JavaScript. French and English.

- `npm run dev`: local preview on port 4350
- `npm run build`: static site in `out/`
- `node scripts/seo-check.mjs`: checks titles, descriptions, H1, structured data and links after a build
- `npm run images`: rebuilds `public/images` from the source photos (source folders are kept outside the repository)

Text and data: `src/lib/content.js` (pages, projects, sectors) and `src/lib/seo-content.js` (titles, service and sector pages).
Site address: `SITE_URL` in `src/lib/content.js`.

Hosting: Cloudflare Pages connected to this repository. Every push to `main` is built (`npm run build`, output `out`) and published.
Live site: `https://cyrancode.pages.dev`
Google setup steps: `GOOGLE-SETUP.md`.
