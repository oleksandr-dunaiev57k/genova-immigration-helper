import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TesseraSanitariaPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Tessera Sanitaria</span>
        </div>
        <div className="mb-10">
          <div className="text-5xl mb-4">🏥</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Tessera Sanitaria</h1>
          <p className="text-gray-500 text-lg mb-5">
            Итальянская медицинская карта. Даёт доступ к бесплатному врачу общей практики (medico di base), субсидированным лекарствам и медицинским услугам по льготным ценам.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">⏱ 1–3 дня</span>
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Легко</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">🆓 Бесплатно</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">📎 Что взять с собой</h2>
          <ul className="space-y-2">
            {["Паспорт (оригинал + копия)", "Codice Fiscale", "Permesso di Soggiorno или квитанция о подаче", "Документ о прописке (если есть)"].map((item) => (
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
            { n: 1, title: "Иди в ASL (Azienda Sanitaria Locale)", body: "В Генуе главный офис: Via Bertani 4. Также есть районные офисы по всему городу.", tip: null },
            { n: 2, title: "Попроси записать к medico di base", body: "На месте скажи что хочешь iscriversi al Servizio Sanitario Nazionale (записаться в нац. систему здравоохранения). Тебе дадут выбрать врача из списка в своём районе.", tip: "Выбирай врача ближе к дому — это важно, т.к. он будет твоим постоянным терапевтом." },
            { n: 3, title: "Получи tessera sanitaria", body: "Карточку выдают сразу или отправляют почтой в течение нескольких дней. Она совмещена с codice fiscale.", tip: null },
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
            <div className="font-medium">ASL 3 Genovese</div>
            <div>Via Bertani 4, 16125 Genova</div>
            <div>Пн–Пт: 8:00–12:30</div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Следующий шаг →</div>
            <div className="text-sm text-gray-500">Оформить прописку (residenza)</div>
          </div>
          <Link href="/documents/residenza" className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap">
            Residenza →
          </Link>
        </div>
      </div>
    </div>
  );
}
