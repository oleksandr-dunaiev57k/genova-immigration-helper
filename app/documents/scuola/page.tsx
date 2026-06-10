import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ScuolaPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Запись в школу</span>
        </div>
        <div className="mb-10">
          <div className="text-5xl mb-4">🎓</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Запись детей в школу</h1>
          <p className="text-gray-500 text-lg mb-5">
            В Италии обучение обязательно с 6 до 16 лет. Записать ребёнка в школу можно в любое время года — не нужно ждать сентября.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">⏱ 1–2 недели</span>
            <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">📋 Средне</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">🆓 Бесплатно</span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <div className="font-semibold text-green-700 mb-1">✅ Хорошие новости</div>
          <div className="text-sm text-green-600">Дети иммигрантов принимаются в школу независимо от статуса документов родителей. Отказать в приёме незаконно.</div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">📎 Документы на ребёнка</h2>
          <ul className="space-y-2">
            {["Паспорт или свидетельство о рождении ребёнка", "Codice Fiscale ребёнка", "Школьные документы с предыдущего места учёбы (если есть)", "Медицинская справка о прививках", "Документы родителей (паспорт + codice fiscale)"].map((item) => (
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
            { n: 1, title: "Найди ближайшую школу нужного уровня", body: "Scuola Primaria (6–11 лет), Scuola Media (11–14), Scuola Superiore (14–19). Найти школы по адресу можно на сайте Ufficio Scolastico Regionale.", tip: null },
            { n: 2, title: "Свяжись с секретариатом школы", body: "Позвони или зайди лично в сегретерию (секретариат) выбранной школы. Спроси об iscrizione (записи) и договорись о встрече.", tip: "Позвони заранее — иногда нужна запись. Во многих школах есть сотрудники, говорящие на других языках." },
            { n: 3, title: "Подай документы и заполни форму записи", body: "Принеси все документы, заполни domanda di iscrizione. Директор школы определит в какой класс зачислить ребёнка.", tip: "Если ребёнок не знает итальянского — это нормально. Школы обязаны обеспечить поддержку по итальянскому (L2)." },
            { n: 4, title: "Первый день в школе", body: "Школа предоставит расписание. В первые недели к ребёнку могут прикрепить специального педагога для помощи с языком.", tip: null },
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
