import "../globals.css";
import { THEME_SCRIPT, fontVars } from "@/lib/fonts";
import { SITE_URL } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  robots: { index: false, follow: true },
  alternates: { canonical: "/fr/", languages: { fr: "/fr/", en: "/en/", "x-default": "/fr/" } },
  title: "cyrancode · Développeur logiciel à Douala",
  description: "Applications web, applications mobiles et sites internet à Douala, Cameroun. Web apps, mobile apps and websites in Douala, Cameroon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light" className={fontVars} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="FZpM1NrBapv5wWzXp8V29_gBF6KJom2BEo7cAiBSaUs" />
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
