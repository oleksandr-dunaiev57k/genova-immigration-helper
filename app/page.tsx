"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const DOC_META = [
  { emoji: "🪪", color: "bg-blue-50 border-blue-100", href: "/documents/codice-fiscale" },
  { emoji: "📋", color: "bg-red-50 border-red-100", href: "/documents/permesso-di-soggiorno" },
  { emoji: "🏥", color: "bg-green-50 border-green-100", href: "/documents/tessera-sanitaria" },
  { emoji: "🏠", color: "bg-yellow-50 border-yellow-100", href: "/documents/residenza" },
  { emoji: "🪪", color: "bg-purple-50 border-purple-100", href: "/documents/carta-identita" },
  { emoji: "🎓", color: "bg-orange-50 border-orange-100", href: "/documents/scuola" },
];

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-10">
          <div className="flex-1">
            <div className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {h.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {h.h1a}<br />
              <span className="text-orange-500">{h.h1b}</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-10">{h.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/documents"
                className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 text-sm"
              >
                {h.cta_docs}
              </a>
              <a
                href="/chat"
                className="bg-white text-gray-700 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                {h.cta_chat}
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: "420px", height: "320px" }}>
            <svg
              width="380"
              height="253"
              viewBox="0 0 380 253"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))", borderRadius: "4px", overflow: "visible" }}
            >
              <defs>
                <filter id="wave" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence type="turbulence" baseFrequency="0.015 0.08" numOctaves="3" seed="2" result="turbulence">
                    <animate attributeName="baseFrequency" values="0.015 0.08;0.018 0.09;0.013 0.07;0.015 0.08" dur="3s" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="14" xChannelSelector="R" yChannelSelector="G">
                    <animate attributeName="scale" values="14;18;12;16;14" dur="3s" repeatCount="indefinite" />
                  </feDisplacementMap>
                </filter>
                <linearGradient id="shading" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="70%" stopColor="rgba(0,0,0,0.04)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
                </linearGradient>
              </defs>
              <g filter="url(#wave)">
                <rect x="0" y="0" width="126.6" height="253" fill="#009246" />
                <rect x="126.6" y="0" width="126.8" height="253" fill="#f5f5f5" />
                <rect x="253.4" y="0" width="126.6" height="253" fill="#ce2b37" />
                <rect x="0" y="0" width="380" height="253" fill="url(#shading)" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Document cards */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{h.docs_title}</h2>
          <p className="text-gray-400 text-center mb-10">{h.docs_sub}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {h.docs.map((doc, i) => (
              <a
                key={doc.title}
                href={DOC_META[i].href}
                className={`${DOC_META[i].color} border rounded-2xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-3">{DOC_META[i].emoji}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{doc.title}</div>
                <div className="text-gray-400 text-xs">{doc.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat promo */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-10 text-white text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">{h.chat_h}</h3>
            <p className="text-orange-100 mb-8 max-w-md mx-auto">{h.chat_sub}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/chat" className="inline-block bg-white text-orange-500 font-semibold px-8 py-3 rounded-2xl hover:bg-orange-50 transition-colors">
                {h.chat_btn}
              </a>
              <a
                href="https://t.me/genova_helper_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-8 py-3 rounded-2xl hover:bg-white/30 transition-colors border border-white/30"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.14 14.028l-2.95-.924c-.64-.203-.658-.64.136-.954l11.57-4.46c.536-.194 1.004.131.998.531z"/>
                </svg>
                {h.tg_btn}
              </a>
            </div>
            <p className="text-orange-200 text-sm mt-4">{h.tg_sub}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>{h.footer_made}</div>
          <div className="flex gap-4">
            <a href="/documents" className="hover:text-gray-600">{h.footer_about}</a>
            <a href="/documents" className="hover:text-gray-600">{h.footer_contact}</a>
            <a href="https://github.com/oleksandr-dunaiev57k/genova-immigration-helper" className="hover:text-gray-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
