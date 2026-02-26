"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
      aria-label="Switch language"
    >
      <span className={cn(i18n.language === "fr" && "text-primary font-bold")}>
        FR
      </span>
      <span className="text-muted-foreground">/</span>
      <span className={cn(i18n.language === "en" && "text-primary font-bold")}>
        EN
      </span>
    </button>
  );
}
