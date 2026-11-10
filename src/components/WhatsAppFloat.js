import Icon from "./Icon";
import { I18N, wa } from "@/lib/content";

// Floating WhatsApp button, on phones and tablets only.
export default function WhatsAppFloat({ lang }) {
  return (
    <a
      href={wa(I18N[lang].ui.waMsg)}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-3.5 right-3.5 z-40 flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-on no-underline shadow-[0_10px_26px_rgba(0,0,0,.25)] hover:text-accent-on nav:hidden"
    >
      <Icon name="chat" size={20} />
      WhatsApp
    </a>
  );
}
