import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CartaIdentitaPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Carta d'identità</span>
        </div>
        <div className="mb-10">
          <div className="text-5xl mb-4">🪪</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Carta d'identità</h1>
          <p className="text-gray-500 text-lg mb-5">
            Итальянское удостоверение личности. Действует 10 лет. Принимается как документ во всех странах ЕС. Выдаётся только после получения residenza.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">⏱ 1–2 недели</span>
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Легко</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">💶 ~€22</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">📎 Что взять с собой</h2>
          <ul className="space-y-2">
            {["Паспорт (оригинал)", "Codice Fiscale / Tessera Sanitaria", "Документ о residenza", "1 фотография 3×4", "Оплата €22 (на месте)"].map((item) => (
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
            { n: 1, title: "Запишись в Comune онлайн", body: "Запись через сайт Comune di Genova или агрегатор prenotami.it. Без записи обычно не принимают.", tip: "Записи бывают загружены на 2–3 недели вперёд. Бронируй заранее." },
            { n: 2, title: "Приди в Anagrafe с документами", body: "В назначенное время приди в Comune. Сотрудник проверит документы, снимет отпечатки и сделает фото.", tip: null },
            { n: 3, title: "Получи карточку через 6–10 дней", body: "Carta d'identità электронная (CIE) отправляется по почте на адрес прописки. Временный документ дают сразу.", tip: null },
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
            <div>Via di Francia 1, 16149 Genova</div>
            <div>Пн–Пт: 8:30–13:00</div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Все документы →</div>
            <div className="text-sm text-gray-500">Вернуться к списку всех документов</div>
          </div>
          <Link href="/documents" className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap">
            К списку →
          </Link>
        </div>
      </div>
    </div>
  );
}
