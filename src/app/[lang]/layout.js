import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ICONS_CSS, THEME_SCRIPT, fontVars } from "@/lib/fonts";
import { LANGS } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2b50ff",
};

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang} data-theme="light" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={ICONS_CSS} />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="font-sans">
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <WhatsAppFloat lang={lang} />
      </body>
    </html>
  );
}
