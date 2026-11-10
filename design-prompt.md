# Claude Design prompt — cyrancode website (version 2)

Paste everything below the line into Claude Design. Attach these photos of Cyran from `cyrancode-site/images-from-gemini/`:
- `Gemini_Generated_Image_t1l1y0t1l1y0t1l1.jpg` (white shirt, laptop, plain background) for the hero;
- `Gemini_Generated_Image_2dowju2dowju2dow.jpg` (presenting in front of a class) for Training;
- `Gemini_Generated_Image_lkuys0lkuys0lkuy.jpg` (at a desk with code on screen) for About.

---

Redesign the **cyrancode** website from scratch. The previous version was wrong in three ways, so please fix them:
1. It presented cyrancode as someone who only builds websites for small businesses. In fact **cyrancode is a software developer**: the main work is web applications, mobile applications and websites.
2. The hero used a phone mockup. Use a **photo of Cyran** instead (attached).
3. The colours (beige/cream background, dull teal, orange) looked flat and old. The new site must look **lively, modern and worthy of a developer's website**.

## Who cyrancode is
cyrancode is the brand of **Njua Cyran Nkwain**, a full-stack and mobile software developer based in Douala, Cameroon. He designs and builds software for businesses, organisations and individuals, from idea to deployment. Always write the brand in lowercase: **cyrancode**.

## Services (in this order of importance)
1. **Web applications and management software**: custom business apps such as stock and invoicing, finance, HR, school management, booking systems, dashboards and platforms. (React, Django, REST APIs.)
2. **Mobile applications**: Android and iOS apps with Flutter and Firebase, including payments (Campay / Mobile Money).
3. **Websites**: company websites, showcase sites, and ready-made sites for local businesses (restaurants, hotels, shops, schools, clinics…) with menu or catalogue, WhatsApp ordering and Google visibility.
4. **Graphic design**: flyers, posters, social media visuals, simple logos and Photoshop retouching.
5. **Training and mentoring**: programming and web/mobile development courses for beginners, students and teams.
6. **Maintenance and hosting**: domain, hosting, updates and support after delivery.

## Look and feel
- **Design the light mode first** and make it beautiful: a bright, clean white base, one vivid modern brand colour (for example an electric blue or indigo) and one energetic accent, used with confidence in gradients, highlights and buttons. Propose the best palette. No beige, cream or dull teal.
- Then derive a matching **dark mode** with the same identity. Sun/moon toggle in the header. **The site always opens in light mode**; dark mode only when the visitor switches it on (the choice is remembered).
- Modern developer feel: bold display headings, subtle gradient blobs or grid/dot patterns in the background, glassy cards, small code or terminal touches (for example `</>`, a blinking cursor after "cyrancode_", a tiny code snippet card), smooth hover effects and gentle scroll animations. Lively, but still professional and readable.
- **Compact UI**: moderate font sizes, small buttons, tight cards. No oversized hero text, giant buttons or huge padding.
- Fonts: a strong, modern display font for headings, a clean sans-serif for text, and a monospace for small code touches.

## Languages
Two complete versions, **French** and **English**, shown **one at a time** (never mixed on a page). An FR / EN switch in the header changes the language and is remembered. The default language follows the visitor's browser (French browser → French, English browser → English, anything else → French). Show the design in French and give the complete English text for every page.

## Pages
1. **Accueil (Home)**
   - Hero: Cyran's photo (attached) on one side, cut out or in a modern shape with a gradient glow behind him, and small floating badges around him: "Applications web", "Applications mobiles", "Sites web", "Design". Text side: kicker "Développeur logiciel · Douala", headline like "Je transforme vos idées en applications web, mobiles et sites internet.", a short sub-line, buttons "Discutons de votre projet" (WhatsApp) and "Voir mes réalisations".
   - Services overview: 6 service cards (list above), the first three larger.
   - A small tech-stack strip: React, Django, Flutter, Firebase, Next.js, Tailwind, Python, JavaScript.
   - Selected projects (see Réalisations), 3–4 cards.
   - "Sites pour commerces" highlight: a band presenting the ready-made business websites with a few sector icons and a link.
   - How I work, in 4 steps: 1. We discuss your need. 2. I propose a solution and a price. 3. I design and build, you follow progress. 4. Delivery, training and support.
   - Final call to action with WhatsApp.
2. **Services**: one section per service with what it includes, examples and a call to action.
3. **Réalisations (Projects)**: filterable grid (All · Web apps · Mobile apps · Websites · Design). Cards with image, name, short description, tags, status (Live / In development) and a link. Use these real projects:
   - **Cartopousse** (live): risk management and audit platform for teams. React, Django.
   - **FIUHB Finance Manager** (live): personal finance platform with expenses, revenues, bills and PDF reports. React, Django.
   - **LamainApp** (live): on-demand service app connecting users with nearby providers. Flutter, Firebase.
   - **Gozen** (live): job platform where seekers build CVs and employers post jobs. Flutter, Firebase.
   - **Lumeo** (in development): influencer–brand collaboration platform. React, Django.
   - **GStock** (in development): stock management with entries, exits and invoices. Django.
   - **NetSkul** (in development): mobile learning platform. Flutter, Firebase, Campay.
   - **Business websites**: demo sites for restaurants, hotels and car sellers (mark as "Démo").
   - **Flyers**: a few flyer designs (placeholders).
4. **Sites pour commerces (Business websites)**: the ready-made offer for local businesses: what's included (menu or catalogue, WhatsApp buttons, Google, FR/EN, fast on phone), the 13 sectors (restaurants and bars, hotels, car sellers, real estate, beauty salons, private schools, event halls, clinics, fashion shops, gyms, travel agencies, bakeries, barbershops), demo links and 3 packages with prices as placeholders ("… FCFA"), paid by Mobile Money.
5. **Formation (Training)**: who it is for, topics (web basics, React, Django, Flutter, Git), formats (one-to-one, groups, companies), and the training photo (attached).
6. **À propos (About)**: a short, warm text about Cyran (software developer in Douala, B.Tech in Software Development from IUG, mentors junior developers, works in French and English), his desk photo (attached), and a clear button **"Voir mon portfolio"** → https://cyran-portfolio.vercel.app/
7. **Contact**: big WhatsApp button, phone, email, and a form (name, email or phone, type of project, budget range, message).

## Contact details (use exactly)
- WhatsApp / phone: +237 6 72 52 71 20
- Email: cyrancode@gmail.com
- Location: Douala, Cameroun
- Portfolio: https://cyran-portfolio.vercel.app/
- GitHub: cyrancode

## Layout
- Mobile first, then desktop. **Show the phone layout (390 px wide) for every page**, next to the desktop layout: nothing may overflow the screen width.
- Sticky header: logo (wordmark "cyrancode_" with a small `</>` mark), menu, FR/EN switch, light/dark toggle, small "WhatsApp" button. On phone: menu button and a floating WhatsApp button.
- Footer: logo, one-line description, services, quick links, contact, portfolio and GitHub links, © cyrancode.

## Rules
- Do **not** invent testimonials, client logos, ratings, client counts, years of experience or awards. Leave clearly marked placeholders where these could go later.
- Use the attached photos of Cyran; use placeholders for project screenshots (they will be replaced with real ones).
- Keep text short and clear; many visitors are business owners, not developers.
- The site will be built as a static site (Next.js static export, Tailwind) and hosted on Cloudflare Pages or Vercel, so nothing may require a backend (the contact form can open WhatsApp or email).
