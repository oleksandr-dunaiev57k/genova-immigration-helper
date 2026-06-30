"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const { t } = useLanguage();
  const p = t.faqPage;

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-orange-500">{p.breadcrumb_home}</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">FAQ</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{p.title}</h1>
        <p className="text-gray-400 mb-10">{p.subtitle}</p>

        <div className="space-y-10">
          {p.categories.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                      >
                        <span className="text-sm font-medium text-gray-800">{item.q}</span>
                        <span className="text-orange-400 text-lg flex-shrink-0">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
          <p className="text-gray-600 text-sm mb-4">{p.not_found}</p>
          <Link
            href="/chat"
            className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm"
          >
            {p.ask_ai}
          </Link>
        </div>
      </div>
    </div>
  );
}
