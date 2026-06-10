import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ResidenzaPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Residenza</span>
        </div>
        <div className="mb-10">
          <div className="text-5xl mb-4">🏠</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Residenza</h1>
          <p className="text-gray-500 text-lg mb-5">
            Регистрация по месту жительства. Без residenza сложно открыть банковский счёт, получить carta d'identità и ряд социальных льгот. Нужен договор аренды или согласие хозяина жилья.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">⏱ 1–3 месяца</span>
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">📋 Средне</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">🆓 Бесплатно</span>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-8">
          <div className="font-semibold text-yellow-700 mb-1">⚠️ Нужно жильё</div>
          <div className="text-sm text-yellow-600">Для residenza нужен либо договор аренды, либо письменное согласие хозяина квартиры. Без этого зарегистрироваться не получится.</div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">📎 Что взять с собой</h2>
          <ul className="space-y-2">
            {["Паспорт (оригинал + копия)", "Codice Fiscale", "Permesso di Soggiorno (оригинал + копия)", "Договор аренды или dichiarazione ospitalità от хозяина", "Заполненная форма (выдают в Comune)"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 text-green-500 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-bold text-gray-800 text-xl mb-6">Пошаговая инструкция</h2>
        <div className="space-y-4 mb-10">
          {[
            { n: 1, title: "Запишись в Comune di Genova", body: "Записаться можно онлайн на сайте comune.genova.it или прийти лично в ближайший sportello anagrafe.", tip: null },
            { n: 2, title: "Подай заявление на residenza", body: "Заполни модуль cambiamento di residenza. Укажи адрес где живёшь. Сдай все документы.", tip: "Сотрудник общины проверит документы и скажет всё ли в порядке." },
            { n: 3, title: "Жди визита муниципального инспектора", body: "В течение 45 дней к тебе домой может прийти vigile urbano (городской инспектор), чтобы проверить что ты действительно живёшь по этому адресу.", tip: "Это нормальная процедура. Достаточно просто быть дома и показать что ты там живёшь." },
            { n: 4, title: "Получи подтверждение residenza", body: "После проверки через 1–3 месяца residenza будет зарегистрирована. Можно будет запросить certificato di residenza в Comune.", tip: null },
          ].map((step) => (
            <div key={step.n} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{step.n}</div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">{step.title}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                  {step.tip && <div className="mt-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 text-sm text-orange-700">💡 {step.tip}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-blue-800 mb-3">📍 Где в Генуе</h2>
          <div className="text-sm text-blue-700 space-y-1">
            <div className="font-medium">Comune di Genova — Anagrafe</div>
            <div>Via di Francia 1, 16149 Genova (sede principale)</div>
            <div>Пн–Пт: 8:30–13:00</div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Следующий шаг →</div>
            <div className="text-sm text-gray-500">После residenza можно получить carta d'identità</div>
          </div>
          <Link href="/documents/carta-identita" className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap">
            Carta d'identità →
          </Link>
        </div>
      </div>
    </div>
  );
}
