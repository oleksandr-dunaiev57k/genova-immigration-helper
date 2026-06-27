"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    category: "Codice Fiscale",
    questions: [
      {
        q: "Сколько стоит получить Codice Fiscale?",
        a: "Бесплатно. Codice Fiscale выдаётся в Agenzia delle Entrate без какой-либо оплаты.",
      },
      {
        q: "Нужно ли записываться заранее для получения Codice Fiscale?",
        a: "Обычно нет — можно прийти без записи. Но лучше уточнить на сайте agenziadelleentrate.gov.it или позвонить заранее, так как иногда бывают очереди.",
      },
      {
        q: "Какой документ нужен для Codice Fiscale?",
        a: "Достаточно паспорта. Гражданам Украины и СНГ нужен загранпаспорт. Адрес в Италии не обязателен.",
      },
      {
        q: "Как долго делается Codice Fiscale?",
        a: "Выдают в тот же день. Вы получаете временный листок сразу, пластиковая карта приходит по почте через 2–4 недели.",
      },
    ],
  },
  {
    category: "Permesso di Soggiorno",
    questions: [
      {
        q: "Сколько времени есть на подачу Permesso после въезда?",
        a: "8 рабочих дней с момента въезда в Италию. Для украинцев с временной защитой (Protezione Temporanea) — отдельная процедура через Questura.",
      },
      {
        q: "Где подавать документы на Permesso di Soggiorno?",
        a: "Комплект документов подаётся через почтовое отделение Poste Italiane (Kit Postale), затем Questura вызывает на приём. Questura Genova: Via Bartolomeo Bosco 24.",
      },
      {
        q: "Сколько стоит Permesso di Soggiorno?",
        a: "Государственная пошлина от €40 до €100 в зависимости от типа и срока. Плюс марки и почтовые сборы — итого около €100–130.",
      },
      {
        q: "Можно ли работать пока ждёшь Permesso?",
        a: "Да, если у вас есть квитанция о подаче (ricevuta della domanda) — она заменяет Permesso на время ожидания.",
      },
    ],
  },
  {
    category: "Tessera Sanitaria",
    questions: [
      {
        q: "Tessera Sanitaria — это то же самое что Codice Fiscale?",
        a: "Нет. Codice Fiscale — налоговый номер. Tessera Sanitaria — медицинская карта. Физически это одна и та же пластиковая карта, но Tessera выдаётся только после регистрации в системе здравоохранения ASL.",
      },
      {
        q: "Как записаться к врачу с Tessera Sanitaria?",
        a: "После получения Tessera вы выбираете medico di base (семейного врача) в ASL 3. Это бесплатно. Потом записываетесь к нему онлайн или по телефону.",
      },
      {
        q: "Нужна ли Residenza для Tessera Sanitaria?",
        a: "Желательно, но не всегда обязательно. Украинцы с Protezione Temporanea могут получить Tessera и без Residenza — уточняйте в ASL 3 Genova (Via Bertani 4).",
      },
    ],
  },
  {
    category: "Residenza (прописка)",
    questions: [
      {
        q: "Можно ли жить в Италии без Residenza?",
        a: "Технически да, но без Residenza вы не сможете оформить многие документы, получить Carta d'identità, записать детей в школу. Лучше оформить как можно раньше.",
      },
      {
        q: "Нужно ли согласие хозяина квартиры для Residenza?",
        a: "Да, владелец жилья должен дать письменное согласие (nulla osta). Без этого Residenza не оформить. Если хозяин отказывает — это нарушение ваших прав, можно обратиться в Comune.",
      },
      {
        q: "Сколько времени занимает оформление Residenza?",
        a: "После подачи документов в Comune приходит проверка (vigile urbano). Срок — до 45 дней. После проверки Residenza оформляется официально.",
      },
    ],
  },
  {
    category: "Дети и школа",
    questions: [
      {
        q: "Можно ли записать ребёнка в итальянскую школу без Residenza?",
        a: "Да. Право на образование гарантировано всем детям независимо от статуса документов. Обратитесь в ближайшую школу или в Ufficio Scolastico.",
      },
      {
        q: "Нужно ли знать итальянский язык для поступления в школу?",
        a: "Нет. Итальянские школы обязаны принять ребёнка без знания языка и обеспечить языковую поддержку. Многие школы Генуи имеют опыт работы с иностранными детьми.",
      },
      {
        q: "Какие документы нужны для записи в школу?",
        a: "Паспорт ребёнка, документы о предыдущем образовании (если есть), Codice Fiscale ребёнка. Permesso di Soggiorno желателен, но не всегда обязателен.",
      },
    ],
  },
  {
    category: "Общие вопросы",
    questions: [
      {
        q: "Нужен ли переводчик в итальянских учреждениях?",
        a: "В крупных учреждениях (Questura, Comune) иногда есть переводчики или волонтёры. Но лучше приходить с кем-то кто знает итальянский, или использовать переводчик на телефоне.",
      },
      {
        q: "Где найти бесплатную юридическую помощь в Генуе?",
        a: "CAF и Patronato — бесплатные консультации по документам. Также можно обратиться в Caritas Genova, UNHCR, или украинские сообщества города.",
      },
      {
        q: "Что такое CAF и Patronato?",
        a: "CAF (Centro di Assistenza Fiscale) — помогает с налогами и документами. Patronato — помогает с социальными пособиями, разрешениями, пенсиями. Оба работают бесплатно для физических лиц.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">FAQ</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Частые вопросы</h1>
        <p className="text-gray-400 mb-10">Ответы на самые популярные вопросы иммигрантов из СНГ в Генуе</p>

        <div className="space-y-10">
          {faqs.map((section) => (
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
          <p className="text-gray-600 text-sm mb-4">Не нашли ответ на свой вопрос?</p>
          <Link
            href="/chat"
            className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm"
          >
            💬 Спросить ИИ-ассистента
          </Link>
        </div>
      </div>
    </div>
  );
}
