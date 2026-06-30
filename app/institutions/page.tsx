"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const INST_META = [
  {
    id: "questura",
    emoji: "🚔",
    name: "Questura di Genova",
    subtitle: "Ufficio Immigrazione",
    address: "Via Bartolomeo Bosco 24, 16121 Genova",
    hours: [
      { days: "Пн–Вт, Чт", time: "8:30–12:30" },
      { days: "Ср, Пт", time: "8:30–12:30" },
    ],
    phone: "+39 010 5366 1",
    docs: ["Permesso di Soggiorno"],
    color: "border-blue-200",
    badge: "bg-blue-50",
    mapUrl: "https://maps.google.com/?q=Via+Bartolomeo+Bosco+24+Genova",
  },
  {
    id: "comune",
    emoji: "🏛️",
    name: "Comune di Genova",
    subtitle: "Ufficio Anagrafe",
    address: "Via di Francia 1, 16149 Genova",
    hours: [
      { days: "Пн–Пт", time: "8:30–13:00" },
      { days: "Вт, Чт", time: "14:30–16:30" },
    ],
    phone: "+39 010 5574 1",
    docs: ["Residenza", "Carta d'identità"],
    color: "border-green-200",
    badge: "bg-green-50",
    mapUrl: "https://maps.google.com/?q=Via+di+Francia+1+Genova",
  },
  {
    id: "agenzia",
    emoji: "💼",
    name: "Agenzia delle Entrate",
    subtitle: "Ufficio di Genova",
    address: "Via De Marini 1, 16149 Genova",
    hours: [
      { days: "Пн–Вт", time: "8:30–13:00, 14:00–16:30" },
      { days: "Ср", time: "8:30–13:00" },
    ],
    phone: "+39 0964 19 11",
    docs: ["Codice Fiscale"],
    color: "border-orange-200",
    badge: "bg-orange-50",
    mapUrl: "https://maps.google.com/?q=Via+De+Marini+1+Genova",
  },
  {
    id: "asl",
    emoji: "🏥",
    name: "ASL 3 Genovese",
    subtitle: "Sportello Stranieri",
    address: "Via Bertani 4, 16125 Genova",
    hours: [
      { days: "Пн–Пт", time: "8:00–12:30" },
    ],
    phone: "+39 010 849 4690",
    docs: ["Tessera Sanitaria"],
    color: "border-red-200",
    badge: "bg-red-50",
    mapUrl: "https://maps.google.com/?q=Via+Bertani+4+Genova",
  },
  {
    id: "caf",
    emoji: "📝",
    name: "CAF — Centro di Assistenza Fiscale",
    subtitle: "Несколько точек по городу",
    address: "Varie sedi in città",
    hours: [
      { days: "Пн–Пт", time: "9:00–13:00" },
    ],
    phone: null,
    docs: ["Помощь с бюрократией"],
    color: "border-purple-200",
    badge: "bg-purple-50",
    mapUrl: "https://maps.google.com/?q=CAF+Genova",
  },
  {
    id: "patronato",
    emoji: "🤝",
    name: "Patronato",
    subtitle: "INCA / ACLI / ITAL",
    address: "Varie sedi in città",
    hours: [
      { days: "Пн–Пт", time: "9:00–12:00" },
    ],
    phone: null,
    docs: ["Permesso di Soggiorno", "Помощь с бюрократией"],
    color: "border-teal-200",
    badge: "bg-teal-50",
    mapUrl: "https://maps.google.com/?q=Patronato+Genova",
  },
  {
    id: "prefettura",
    emoji: "🏢",
    name: "Prefettura di Genova",
    subtitle: "Ufficio Territoriale del Governo",
    address: "Largo Lanfranco 1, 16121 Genova",
    hours: [
      { days: "Пн–Пт", time: "9:00–12:00" },
    ],
    phone: "+39 010 54 991",
    docs: ["Гражданство"],
    color: "border-gray-200",
    badge: "bg-gray-50",
    mapUrl: "https://maps.google.com/?q=Largo+Lanfranco+1+Genova",
  },
];

export default function InstitutionsPage() {
  const { t } = useLanguage();
  const p = t.institutionsPage;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">{p.breadcrumb_home}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">{p.breadcrumb}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">{p.title}</h1>
        <p className="text-gray-500 text-lg mb-12">{p.subtitle}</p>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-10">
          <div className="font-semibold text-orange-700 mb-1">{p.tip_title}</div>
          <div className="text-sm text-orange-600">{p.tip}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {INST_META.map((inst, i) => {
            const tr = p.institutions[i];
            return (
              <div key={inst.id} className={`${inst.badge} border-2 ${inst.color} rounded-2xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{inst.emoji}</span>
                    <div>
                      <div className="font-bold text-gray-900">{inst.name}</div>
                      <div className="text-xs text-gray-400">{inst.subtitle}</div>
                    </div>
                  </div>
                  <a
                    href={inst.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-colors whitespace-nowrap"
                  >
                    {p.map_btn}
                  </a>
                </div>

                <p className="text-gray-500 text-sm mb-4">{tr.desc}</p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="flex-shrink-0">📍</span>
                    <span>{inst.address}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="flex-shrink-0">🕐</span>
                    <div>
                      {inst.hours.map((h) => (
                        <div key={h.days}><span className="text-gray-400">{h.days}:</span> {h.time}</div>
                      ))}
                    </div>
                  </div>
                  {inst.phone && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>📞</span>
                      <a href={`tel:${inst.phone}`} className="hover:text-orange-500">{inst.phone}</a>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {inst.docs.map((doc) => (
                    <span key={doc} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-500">
                      {doc}
                    </span>
                  ))}
                </div>

                {tr.note && (
                  <div className="mt-3 bg-white/70 rounded-xl px-4 py-2 text-xs text-gray-500 border border-gray-100">
                    ⚠️ {tr.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
