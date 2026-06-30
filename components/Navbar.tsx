"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "ua", label: "UA" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🇮🇹</span>
          <div>
            <div className="font-bold text-gray-900 text-lg leading-tight">Genova Helper</div>
            <div className="text-xs text-gray-400">{t.subtitle_navbar}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/documents" className="hover:text-orange-500 transition-colors">{t.nav.documents}</Link>
          <Link href="/institutions" className="hover:text-orange-500 transition-colors">{t.nav.institutions}</Link>
          <Link href="/faq" className="hover:text-orange-500 transition-colors">{t.nav.faq}</Link>
          <Link href="/chat" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            {t.nav.ask}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2 py-1 rounded-full font-medium transition-colors ${
                  lang === l.code
                    ? "bg-orange-100 text-orange-600"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600 mb-1" />
            <div className="w-5 h-0.5 bg-gray-600" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <Link href="/documents" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">{t.nav.documents}</Link>
          <Link href="/institutions" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">{t.nav.institutions}</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-orange-500">{t.nav.faq}</Link>
          <Link
            href="/chat"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition-colors"
          >
            {t.nav.ask}
          </Link>
        </div>
      )}
    </header>
  );
}
