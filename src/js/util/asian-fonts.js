import { DocumentReady } from "./util";

let asianFontsChecked = false;

const notoSansMappings = {
  "zh-Hans": "SC",
  "zh-Hant": "TC",
  "ko": "KO",
  "ja": "JP",
};

export const loadAsianFonts = () => {
  if (asianFontsChecked) return;

  asianFontsChecked = true;

  DocumentReady(() => {
    const lang = document.documentElement.getAttribute("lang") || "en";

    if (lang == "en") return;

    const notoSansVariant = notoSansMappings[lang] || false;

    if (notoSansVariant !== false) {
      const link = document.createElement('link');
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+" + notoSansVariant + ":wght@100;300;400;500;700;900";
      document.head.appendChild(link);
    }
  });
};