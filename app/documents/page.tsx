"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const DOC_META = [
  { slug: "codice-fiscale", emoji: "🪪", diffColor: "text-green-600 bg-green-50", color: "border-blue-200 hover:border-blue-400", badge: "bg-blue-50" },
  { slug: "permesso-di-soggiorno", emoji: "📋", diffColor: "text-red-600 bg-red-50", color: "border-red-200 hover:border-red-400", badge: "bg-red-50" },
  { slug: "tessera-sanitaria", emoji: "🏥", diffColor: "text-green-600 bg-green-50", color: "border-green-200 hover:border-green-400", badge: "bg-green-50" },
  { slug: "residenza", emoji: "🏠", diffColor: "text-yellow-600 bg-yellow-50", color: "border-yellow-200 hover:border-yellow-400", badge: "bg-yellow-50" },
  { slug: "carta-identita", emoji: "🪪", diffColor: "text-green-600 bg-green-50", color: "border-purple-200 hover:border-purple-400", badge: "bg-purple-50" },
  { slug: "scuola", emoji: "🎓", diffColor: "text-yellow-600 bg-yellow-50", color: "border-orange-200 hover:border-orange-400", badge: "bg-orange-50" },
];

const ORDER_STEPS = [
  "1. Codice Fiscale",
  "2. Permesso di Soggiorno",
  "3. Residenza",
  "4. Tessera Sanitaria",
  "5. Carta d'identità",
];

const DOC_TITLES = [
  "Codice Fiscale",
  "Permesso di Soggiorno",
  "Tessera Sanitaria",
  "Residenza",
  "Carta d'identità",
  "Scuola",
];

export default function DocumentsPage() {
  const { t } = useLanguage();
  const p = t.documentsPage;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">{p.breadcrumb_home}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">{t.nav.documents}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">{p.title}</h1>
        <p className="text-gray-500 text-lg mb-12">{p.subtitle}</p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <div className="font-semibold text-orange-700 mb-2">{p.order_title}</div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            {ORDER_STEPS.map((step) => (
              <span key={step} className="bg-white px-3 py-1 rounded-full border border-orange-200">{step}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {p.docs.map((doc, i) => (
            <Link
              key={DOC_TITLES[i]}
              href={`/documents/${DOC_META[i].slug}`}
              className={`${DOC_META[i].badge} border-2 ${DOC_META[i].color} rounded-2xl p-6 transition-all hover:shadow-md block`}
            >
              <div className="text-3xl mb-3">{DOC_META[i].emoji}</div>
              <div className="font-bold text-gray-900 mb-0.5">{DOC_TITLES[i]}</div>
              <div className="text-xs text-gray-400 mb-3">{doc.subtitle}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{doc.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">⏱ {doc.time}</span>
                <span className={`px-2 py-1 rounded-full font-medium ${DOC_META[i].diffColor}`}>{doc.difficulty}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
