"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCity } from "@/contexts/CityContext";
import { cities } from "@/lib/cities";

const INST_STATIC = [
  {
    id: "questura" as const,
    emoji: "🚔",
    docs: ["Permesso di Soggiorno"],
    color: "border-blue-200",
    badge: "bg-blue-50",
  },
  {
    id: "comune" as const,
    emoji: "🏛️",
    docs: ["Residenza", "Carta d'identità"],
    color: "border-green-200",
    badge: "bg-green-50",
  },
  {
    id: "agenzia_entrate" as const,
    emoji: "💼",
    docs: ["Codice Fiscale"],
    color: "border-orange-200",
    badge: "bg-orange-50",
  },
  {
    id: "asl" as const,
    emoji: "🏥",
    docs: ["Tessera Sanitaria"],
    color: "border-red-200",
    badge: "bg-red-50",
  },
];

const EXTRA_INST = [
  {
    id: "caf",
    emoji: "📝",
    name: "CAF — Centro di Assistenza Fiscale",
    subtitle: "Несколько точек по городу",
    address: "Varie sedi in città",
    hours: [{ days: "Пн–Пт", time: "9:00–13:00" }],
    docs: ["Помощь с бюрократией"],
    color: "border-purple-200",
    badge: "bg-purple-50",
  },
  {
    id: "patronato",
    emoji: "🤝",
    name: "Patronato",
    subtitle: "INCA / ACLI / ITAL",
    address: "Varie sedi in città",
    hours: [{ days: "Пн–Пт", time: "9:00–12:00" }],
    docs: ["Permesso di Soggiorno", "Помощь с бюрократией"],
    color: "border-teal-200",
    badge: "bg-teal-50",
  },
];

export default function InstitutionsPage() {
  const { t } = useLanguage();
  const { city } = useCity();
  const p = t.institutionsPage;
  const cityData = cities[city];

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
          {INST_STATIC.map((s, i) => {
            const inst = cityData.institutions[s.id];
            const tr = p.institutions[i];
            const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(inst.address)}`;
            const hourParts = inst.hours.split(" · ");
            return (
              <div key={s.id} className={`${s.badge} border-2 ${s.color} rounded-2xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{s.emoji}</span>
                    <div>
                      <div className="font-bold text-gray-900">{inst.name}</div>
                      <div className="text-xs text-gray-400">{cityData.label}</div>
                    </div>
                  </div>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-colors whitespace-nowrap"
                  >
                    {p.map_btn}
                  </a>
                </div>

                <p className="text-gray-500 text-sm mb-4">{tr?.desc}</p>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="flex-shrink-0">📍</span>
                    <span>{inst.address}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="flex-shrink-0">🕐</span>
                    <div>
                      {hourParts.map((h) => (
                        <div key={h}>{h}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {s.docs.map((doc) => (
                    <span key={doc} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-500">
                      {doc}
                    </span>
                  ))}
                </div>

                {tr?.note && (
                  <div className="mt-3 bg-white/70 rounded-xl px-4 py-2 text-xs text-gray-500 border border-gray-100">
                    ⚠️ {tr.note}
                  </div>
                )}
              </div>
            );
          })}

          {EXTRA_INST.map((inst) => (
            <div key={inst.id} className={`${inst.badge} border-2 ${inst.color} rounded-2xl p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{inst.emoji}</span>
                  <div>
                    <div className="font-bold text-gray-900">{inst.name}</div>
                    <div className="text-xs text-gray-400">{inst.subtitle}</div>
                  </div>
                </div>
              </div>

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
              </div>

              <div className="flex flex-wrap gap-2">
                {inst.docs.map((doc) => (
                  <span key={doc} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-500">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
