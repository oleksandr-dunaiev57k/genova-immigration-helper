import Link from "next/link";
import Navbar from "@/components/Navbar";

const documents = [
  {
    slug: "codice-fiscale",
    emoji: "🪪",
    title: "Codice Fiscale",
    subtitle: "Налоговый номер",
    desc: "Первое что нужно получить. Без него не открыть счёт, не снять жильё, не оформить ни один документ.",
    time: "1 день",
    difficulty: "Легко",
    diffColor: "text-green-600 bg-green-50",
    color: "border-blue-200 hover:border-blue-400",
    badge: "bg-blue-50",
  },
  {
    slug: "permesso-di-soggiorno",
    emoji: "📋",
    title: "Permesso di Soggiorno",
    subtitle: "Вид на жительство",
    desc: "Обязательно для всех иностранцев. Подать заявку нужно в течение 8 дней после приезда.",
    time: "2–6 месяцев",
    difficulty: "Сложно",
    diffColor: "text-red-600 bg-red-50",
    color: "border-red-200 hover:border-red-400",
    badge: "bg-red-50",
  },
  {
    slug: "tessera-sanitaria",
    emoji: "🏥",
    title: "Tessera Sanitaria",
    subtitle: "Медицинская карта",
    desc: "Бесплатная медицинская карта. Даёт право на бесплатного врача и субсидированные лекарства.",
    time: "1–3 дня",
    difficulty: "Легко",
    diffColor: "text-green-600 bg-green-50",
    color: "border-green-200 hover:border-green-400",
    badge: "bg-green-50",
  },
  {
    slug: "residenza",
    emoji: "🏠",
    title: "Residenza",
    subtitle: "Прописка",
    desc: "Регистрация по месту жительства в Comune di Genova. Нужна для многих льгот и документов.",
    time: "1–3 месяца",
    difficulty: "Средне",
    diffColor: "text-yellow-600 bg-yellow-50",
    color: "border-yellow-200 hover:border-yellow-400",
    badge: "bg-yellow-50",
  },
  {
    slug: "carta-identita",
    emoji: "🪪",
    title: "Carta d'identità",
    subtitle: "Итальянское удостоверение",
    desc: "Итальянское удостоверение личности. Выдаётся после получения residenza.",
    time: "1–2 недели",
    difficulty: "Легко",
    diffColor: "text-green-600 bg-green-50",
    color: "border-purple-200 hover:border-purple-400",
    badge: "bg-purple-50",
  },
  {
    slug: "scuola",
    emoji: "🎓",
    title: "Zapись в школу",
    subtitle: "Для детей",
    desc: "Как записать ребёнка в итальянскую школу, какие документы нужны и как проходит адаптация.",
    time: "1–2 недели",
    difficulty: "Средне",
    diffColor: "text-yellow-600 bg-yellow-50",
    color: "border-orange-200 hover:border-orange-400",
    badge: "bg-orange-50",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Документы</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Документы для иммигрантов в Генуе</h1>
        <p className="text-gray-500 text-lg mb-12">
          Пошаговые гайды на русском — что делать, куда идти, что взять с собой.
        </p>

        {/* Recommended order */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-10">
          <div className="font-semibold text-orange-700 mb-2">📌 Рекомендуемый порядок</div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            {["1. Codice Fiscale", "2. Permesso di Soggiorno", "3. Residenza", "4. Tessera Sanitaria", "5. Carta d'identità"].map((step) => (
              <span key={step} className="bg-white px-3 py-1 rounded-full border border-orange-200">{step}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {documents.map((doc) => (
            <Link
              key={doc.slug}
              href={`/documents/${doc.slug}`}
              className={`${doc.badge} border-2 ${doc.color} rounded-2xl p-6 transition-all hover:shadow-md block`}
            >
              <div className="text-3xl mb-3">{doc.emoji}</div>
              <div className="font-bold text-gray-900 mb-0.5">{doc.title}</div>
              <div className="text-xs text-gray-400 mb-3">{doc.subtitle}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{doc.desc}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">⏱ {doc.time}</span>
                <span className={`px-2 py-1 rounded-full font-medium ${doc.diffColor}`}>{doc.difficulty}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
