"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCity } from "@/contexts/CityContext";
import { getDocTranslation } from "@/lib/doc-translations";
import { cities, DOC_INSTITUTION_MAP } from "@/lib/cities";

const ALERT_STYLES = {
  red: { wrap: "bg-red-50 border-red-200", title: "text-red-700", text: "text-red-600" },
  yellow: { wrap: "bg-yellow-50 border-yellow-200", title: "text-yellow-700", text: "text-yellow-600" },
  green: { wrap: "bg-green-50 border-green-200", title: "text-green-700", text: "text-green-600" },
};

export default function DocPage({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const { city } = useCity();
  const d = getDocTranslation(slug, lang);

  const institutionKey = DOC_INSTITUTION_MAP[slug];
  const cityData = cities[city];
  const cityInstitution = institutionKey ? cityData.institutions[institutionKey] : null;

  if (!d) return null;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">{t.documentsPage.breadcrumb_home}</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">{t.nav.documents}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">{d.breadcrumb_doc}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="text-5xl mb-4">{d.emoji}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{d.title}</h1>
          <p className="text-gray-500 text-lg mb-5">{d.description}</p>
          <div className="flex flex-wrap gap-3">
            {d.badges.map((b) => (
              <span key={b.text} className={`${b.bg} ${b.text_color} text-sm px-3 py-1 rounded-full font-medium`}>{b.text}</span>
            ))}
          </div>
        </div>

        {/* Alert (warning/info) */}
        {d.alert && (() => {
          const s = ALERT_STYLES[d.alert!.color];
          return (
            <div className={`${s.wrap} border rounded-2xl p-5 mb-8`}>
              <div className={`font-semibold ${s.title} mb-1`}>{d.alert!.title}</div>
              <div className={`text-sm ${s.text}`}>{d.alert!.text}</div>
            </div>
          );
        })()}

        {/* What you need */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">{d.needed_title}</h2>
          <ul className="space-y-2">
            {d.needed.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 text-green-500 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <h2 className="font-bold text-gray-800 text-xl mb-6">{d.steps_title}</h2>
        <div className="space-y-4 mb-10">
          {d.steps.map((step) => (
            <div key={step.n} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">{step.title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  {step.tip && (
                    <div className="mt-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 text-sm text-orange-700">
                      💡 {step.tip}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Address — city-specific */}
        {(cityInstitution || d.address) && (() => {
          const inst = cityInstitution ?? { name: d.address!.name, address: d.address!.address, hours: d.address!.hours };
          const title = d.address?.title ?? `📍 Где в ${cityData.label}`;
          return (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <h2 className="font-bold text-blue-800 mb-3">📍 Где в {cityData.label}</h2>
              <div className="text-sm text-blue-700 space-y-1">
                <div className="font-medium">{inst.name}</div>
                <div>{inst.address}</div>
                <div>{inst.hours}</div>
              </div>
            </div>
          );
        })()}

        {/* FAQ */}
        {d.faq && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
            <h2 className="font-bold text-gray-800 mb-4">{d.faq.title}</h2>
            <div className="space-y-4 text-sm">
              {d.faq.items.map((item) => (
                <div key={item.q}>
                  <div className="font-medium text-gray-700 mb-1">{item.q}</div>
                  <div className="text-gray-500">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next step */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">{d.next.title}</div>
            <div className="text-sm text-gray-500">{d.next.desc}</div>
          </div>
          <Link
            href={d.next.href}
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            {d.next.btn}
          </Link>
        </div>
      </div>
    </div>
  );
}
