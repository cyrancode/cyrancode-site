import { Instrument_Sans, JetBrains_Mono, Sora } from "next/font/google";
import { ICON_NAMES } from "@/components/Icon";

export const display = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display-face", display: "swap" });
export const body = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono-face", display: "swap" });

export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;

export const ICONS_CSS =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400..600,0..1,0&icon_names=" +
  ICON_NAMES.join(",") +
  "&display=block";

// Runs before the page shows: light unless the visitor chose dark.
export const THEME_SCRIPT =
  "try{document.documentElement.dataset.theme=localStorage.getItem('cc-theme')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}";
