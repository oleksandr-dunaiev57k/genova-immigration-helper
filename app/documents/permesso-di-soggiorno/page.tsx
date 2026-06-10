import Link from "next/link";
import Navbar from "@/components/Navbar";

const steps = [
  {
    n: 1,
    title: "Купи kit postale в любом почтовом отделении",
    body: "Это специальный пакет с формами для подачи на permesso. Стоит около €30. Скажи на почте: \"Kit per permesso di soggiorno\".",
    tip: null,
  },
  {
    n: 2,
    title: "Заполни анкету (Modulo 209)",
    body: "Заполни форму на итальянском. Укажи основание для пребывания: lavoro (работа), famiglia (семья), protezione internazionale (для украинцев) и т.д.",
    tip: "Если не уверен в основании — спроси в ближайшем CAF или Patronato, они помогут бесплатно.",
  },
  {
    n: 3,
    title: "Отправь пакет на почте",
    body: "Сдай заполненный пакет обратно на той же почте. Тебе дадут квитанцию и дату встречи в Questura (полиции).",
    tip: "Сохрани квитанцию — это временное подтверждение что ты подал заявку.",
  },
  {
    n: 4,
    title: "Приди в Questura в назначенный день",
    body: "В Questura снимут отпечатки пальцев, сфотографируют и проверят документы. Дадут талон для отслеживания статуса.",
    tip: "Questura Genova: Via Bartolomeo Bosco 24. Возьми с собой ВСЕ оригиналы документов.",
  },
  {
    n: 5,
    title: "Жди и следи за статусом",
    body: "Ожидание — от 2 до 6 месяцев. Статус можно отслеживать на сайте questure.poliziadistato.it. Когда готово — придут SMS или письмо.",
    tip: null,
  },
  {
    n: 6,
    title: "Забери permesso в Questura",
    body: "Когда статус «Pronto», нужно лично прийти с документами и забрать permesso di soggiorno.",
    tip: null,
  },
];

const needed = [
  "Паспорт (оригинал + 2 копии всех страниц)",
  "4 фотографии 3×4",
  "Kit postale (куплен на почте, ~€30)",
  "Документы, подтверждающие основание пребывания",
  "Codice fiscale",
  "Для украинцев: документ о временной защите (protezione temporanea)",
];

export default function PermessoPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Permesso di Soggiorno</span>
        </div>

        <div className="mb-10">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Permesso di Soggiorno</h1>
          <p className="text-gray-500 text-lg mb-5">
            Разрешение на пребывание в Италии. Обязательно для всех иностранцев не из ЕС. Нужно подать в течение 8 рабочих дней с момента въезда.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-medium">⏱ 2–6 месяцев</span>
            <span className="bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full font-medium">⚠️ Сложно</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">💶 ~€30 + марки</span>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
          <div className="font-semibold text-red-700 mb-1">⚠️ Важно для украинцев</div>
          <div className="text-sm text-red-600">
            Граждане Украины с 2022 года могут получить Protezione Temporanea — упрощённую временную защиту. Это не то же самое что обычный permesso, но даёт право жить и работать в Италии.
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">📎 Что взять с собой</h2>
          <ul className="space-y-2">
            {needed.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 text-green-500 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-bold text-gray-800 text-xl mb-6">Пошаговая инструкция</h2>
        <div className="space-y-4 mb-10">
          {steps.map((step) => (
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

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-blue-800 mb-3">📍 Где в Генуе</h2>
          <div className="text-sm text-blue-700 space-y-1">
            <div className="font-medium">Questura di Genova — Ufficio Immigrazione</div>
            <div>Via Bartolomeo Bosco 24, 16121 Genova</div>
            <div>Часы: по записи через kit postale</div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Следующий шаг →</div>
            <div className="text-sm text-gray-500">После подачи — оформить прописку (residenza)</div>
          </div>
          <Link
            href="/documents/residenza"
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            Residenza →
          </Link>
        </div>
      </div>
    </div>
  );
}
