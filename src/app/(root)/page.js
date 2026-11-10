import Logo from "@/components/Logo";

// The bare address opens the visitor's language: their saved choice, else their browser's language.
const REDIRECT =
  "(function(){var l=null;try{l=localStorage.getItem('cc-lang')}catch(e){}" +
  "if(l!=='fr'&&l!=='en'){var b=((navigator.languages&&navigator.languages[0])||navigator.language||'fr').toLowerCase();l=b.indexOf('en')===0?'en':'fr'}" +
  "location.replace('/'+l+'/'+location.hash)})()";

export default function RootRedirect() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <script dangerouslySetInnerHTML={{ __html: REDIRECT }} />
      <Logo />
      <div className="flex gap-2 text-sm font-semibold">
        <a href="/fr/">Français</a>
        <span className="text-muted">·</span>
        <a href="/en/">English</a>
      </div>
    </div>
  );
}
