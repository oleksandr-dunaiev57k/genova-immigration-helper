import Link from "next/link";
import Navbar from "@/components/Navbar";

const steps = [
  {
    n: 1,
    title: "Найди ближайшую Agenzia delle Entrate",
    body: "В Генуе: Via De Marini 1, 16149 Genova. Часы работы: пн–вт 8:30–13:00, 14:00–16:30; ср 8:30–13:00.",
    tip: null,
  },
  {
    n: 2,
    title: "Возьми талон и жди очереди",
    body: "На входе есть автомат с талонами. Выбери «Codice Fiscale / Tessera Sanitaria». Ожидание обычно 20–60 минут.",
    tip: "Приди пораньше — лучше к открытию. Ближе к концу дня очереди меньше.",
  },
  {
    n: 3,
    title: "Подай документы",
    body: "Подай паспорт (оригинал + копию) и заполненную форму AA4/8. Форму можно взять прямо там или скачать заранее.",
    tip: null,
  },
  {
    n: 4,
    title: "Получи карточку",
    body: "Codice Fiscale выдают сразу на месте в виде пластиковой карточки — обычно за 10–15 минут.",
    tip: "Сфотографируй карточку сразу и сохрани в телефоне — цифровая копия принимается везде.",
  },
];

const needed = [
  "Паспорт (оригинал)",
  "Копия паспорта (1 страница с фото)",
  "Форма AA4/8 (можно заполнить на месте)",
];

export default function CodiceFiscalePage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <Link href="/documents" className="hover:text-orange-500">Документы</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Codice Fiscale</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="text-5xl mb-4">🪪</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Codice Fiscale</h1>
          <p className="text-gray-500 text-lg mb-5">
            Итальянский налоговый номер — уникальный код из 16 символов. Нужен буквально для всего: открыть счёт в банке, снять квартиру, записаться к врачу, купить SIM-карту.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">⏱ Занимает 1 день</span>
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">✅ Легко</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">🆓 Бесплатно</span>
          </div>
        </div>

        {/* What you need */}
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

        {/* Steps */}
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

        {/* Address */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-blue-800 mb-3">📍 Где в Генуе</h2>
          <div className="text-sm text-blue-700 space-y-1">
            <div className="font-medium">Agenzia delle Entrate — Genova</div>
            <div>Via De Marini 1, 16149 Genova</div>
            <div>Пн–Вт: 8:30–13:00, 14:00–16:30 · Ср: 8:30–13:00</div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-10">
          <h2 className="font-bold text-gray-800 mb-4">❓ Частые вопросы</h2>
          <div className="space-y-4 text-sm">
            <div>
              <div className="font-medium text-gray-700 mb-1">Можно ли получить онлайн?</div>
              <div className="text-gray-500">Да, через сайт Agenzia delle Entrate, но только если уже есть SPID (итальянская цифровая идентификация). Новичкам — только лично.</div>
            </div>
            <div>
              <div className="font-medium text-gray-700 mb-1">Нужен ли permesso di soggiorno?</div>
              <div className="text-gray-500">Нет. Codice Fiscale выдаётся только по паспорту — это первый документ.</div>
            </div>
            <div>
              <div className="font-medium text-gray-700 mb-1">Действует ли codice fiscale бессрочно?</div>
              <div className="text-gray-500">Да, он не истекает и привязан к тебе навсегда.</div>
            </div>
          </div>
        </div>

        {/* Next step */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="font-semibold text-gray-800 mb-1">Следующий шаг →</div>
            <div className="text-sm text-gray-500">После codice fiscale нужно подать на permesso di soggiorno</div>
          </div>
          <Link
            href="/documents/permesso-di-soggiorno"
            className="bg-orange-500 text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap"
          >
            Permesso →
          </Link>
        </div>
      </div>
    </div>
  );
}
