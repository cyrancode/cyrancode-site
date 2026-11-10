import Home from "@/components/pages/Home";
import { JsonLd, businessLd, faqLd, pageMetadata } from "@/lib/seo";
import { LANDING } from "@/lib/seo-content";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return pageMetadata(lang, "home");
}

export default async function HomePage({ params }) {
  const { lang } = await params;
  return (
    <>
      {businessLd(lang).map((d) => <JsonLd key={d["@type"]} data={d} />)}
      <JsonLd data={faqLd(LANDING[lang].homeFaq)} />
      <Home lang={lang} />
    </>
  );
}
