import Link from "next/link";
import Navbar from "@/components/Navbar";

const institutions = [
  {
    id: "questura",
    emoji: "🚔",
    name: "Questura di Genova",
    subtitle: "Ufficio Immigrazione",
    desc: "Подача и получение permesso di soggiorno, все вопросы по иммиграционному статусу.",
    address: "Via Bartolomeo Bosco 24, 16121 Genova",
    hours: [
      { days: "Пн–Вт, Чт", time: "8:30–12:30" },
      { days: "Ср, Пт", time: "8:30–12:30" },
    ],
    phone: "+39 010 5366 1",
    docs: ["Permesso di Soggiorno"],
    color: "border-blue-200",
    badge: "bg-blue-50",
    mapUrl: "https://maps.google.com/?q=Via+Bartolomeo+Bosco+24+Genova",
    note: "Приём только по записи через kit postale. Без записи не принимают.",
  },
  {
    id: "comune",
    emoji: "🏛️",
    name: "Comune di Genova",
    subtitle: "Ufficio Anagrafe",
    desc: "Прописка (residenza), carta d'identità, семейные документы, изменение данных.",
    address: "Via di Francia 1, 16149 Genova",
    hours: [
      { days: "Пн–Пт", time: "8:30–13:00" },
      { days: "Вт, Чт", time: "14:30–16:30" },
    ],
    phone: "+39 010 5574 1",
    docs: ["Residenza", "Carta d'identità"],
    color: "border-green-200",
    badge: "bg-green-50",
    mapUrl: "https://maps.google.com/?q=Via+di+Francia+1+Genova",
    note: "Запись онлайн на сайте comune.genova.it или через sportello.",
  },
  {
    id: "agenzia",
    emoji: "💼",
    name: "Agenzia delle Entrate",
    subtitle: "Ufficio di Genova",
    desc: "Получение codice fiscale, налоговые вопросы, ISEE, dichiarazioni fiscali.",
    address: "Via De Marini 1, 16149 Genova",
    hours: [
      { days: "Пн–Вт", time: "8:30–13:00, 14:00–16:30" },
      { days: "Ср", time: "8:30–13:00" },
    ],
    phone: "+39 0964 19 11",
    docs: ["Codice Fiscale"],
    color: "border-orange-200",
    badge: "bg-orange-50",
    mapUrl: "https://maps.google.com/?q=Via+De+Marini+1+Genova",
    note: "Codice fiscale выдают без записи по живой очереди.",
  },
  {
    id: "asl",
    emoji: "🏥",
    name: "ASL 3 Genovese",
    subtitle: "Sportello Stranieri",
    desc: "Tessera sanitaria, выбор medico di base, запись к врачам, медицинские справки.",
    address: "Via Bertani 4, 16125 Genova",
    hours: [
      { days: "Пн–Пт", time: "8:00–12:30" },
    ],
    phone: "+39 010 849 4690",
    docs: ["Tessera Sanitaria"],
    color: "border-red-200",
    badge: "bg-red-50",
    mapUrl: "https://maps.google.com/?q=Via+Bertani+4+Genova",
    note: "Есть районные отделения по всей Генуе — проверь ближайшее на сайте asl3.liguria.it.",
  },
  {
    id: "caf",
    emoji: "📝",
    name: "CAF — Centro di Assistenza Fiscale",
    subtitle: "Несколько точек по городу",
    desc: "Бесплатная помощь в заполнении форм, ISEE, dichiarazione dei redditi, pratiche burocratiche.",
    address: "Varie sedi in città",
    hours: [
      { days: "Пн–Пт", time: "9:00–13:00 (зависит от точки)" },
    ],
    phone: null,
    docs: ["Помощь с бюрократией"],
    color: "border-purple-200",
    badge: "bg-purple-50",
    mapUrl: "https://maps.google.com/?q=CAF+Genova",
    note: "Ищи CAF ACLI, CAF CGIL или CAF CISL рядом с домом. Услуги бесплатные.",
  },
  {
    id: "patronato",
    emoji: "🤝",
    name: "Patronato",
    subtitle: "INCA / ACLI / ITAL",
    desc: "Бесплатная помощь с документами для иммигрантов: permesso, ricongiungimento familiare, sussidi.",
    address: "Varie sedi in città",
    hours: [
      { days: "Пн–Пт", time: "9:00–12:00 (зависит от точки)" },
    ],
    phone: null,
    docs: ["Permesso di Soggiorno", "Помощь с бюрократией"],
    color: "border-teal-200",
    badge: "bg-teal-50",
    mapUrl: "https://maps.google.com/?q=Patronato+Genova",
    note: "Patronato — главный помощник для иммигрантов. Всё бесплатно. Ищи INCA CGIL, Patronato ACLI.",
  },
  {
    id: "prefettura",
    emoji: "🏢",
    name: "Prefettura di Genova",
    subtitle: "Ufficio Territoriale del Governo",
    desc: "Запросы на гражданство (cittadinanza), апелляции по иммиграционным вопросам.",
    address: "Largo Lanfranco 1, 16121 Genova",
    hours: [
      { days: "Пн–Пт", time: "9:00–12:00" },
    ],
    phone: "+39 010 54 991",
    docs: ["Гражданство"],
    color: "border-gray-200",
    badge: "bg-gray-50",
    mapUrl: "https://maps.google.com/?q=Largo+Lanfranco+1+Genova",
    note: null,
  },
];

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Учреждения</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Учреждения Генуи</h1>
        <p className="text-gray-500 text-lg mb-12">
          Адреса, расписания и контакты всех важных офисов для иммигрантов.
        </p>

        {/* Tip */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-10">
          <div className="font-semibold text-orange-700 mb-1">💡 Совет</div>
          <div className="text-sm text-orange-600">
            Перед визитом всегда проверяй расписание — оно может меняться в праздники и летом. Бери с собой копии ВСЕХ документов.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {institutions.map((inst) => (
            <div key={inst.id} className={`${inst.badge} border-2 ${inst.color} rounded-2xl p-6`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{inst.emoji}</span>
                  <div>
                    <div className="font-bold text-gray-900">{inst.name}</div>
                    <div className="text-xs text-gray-400">{inst.subtitle}</div>
                  </div>
                </div>
                <a
                  href={inst.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-colors whitespace-nowrap"
                >
                  📍 На карте
                </a>
              </div>

              <p className="text-gray-500 text-sm mb-4">{inst.desc}</p>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="flex-shrink-0">📍</span>
                  <span>{inst.address}</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="flex-shrink-0">🕐</span>
                  <div>
                    {inst.hours.map((h) => (
                      <div key={h.days}><span className="text-gray-400">{h.days}:</span> {h.time}</div>
                    ))}
                  </div>
                </div>
                {inst.phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>📞</span>
                    <a href={`tel:${inst.phone}`} className="hover:text-orange-500">{inst.phone}</a>
                  </div>
                )}
              </div>

              {/* Linked docs */}
              <div className="flex flex-wrap gap-2 mb-3">
                {inst.docs.map((doc) => (
                  <span key={doc} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-500">
                    {doc}
                  </span>
                ))}
              </div>

              {inst.note && (
                <div className="mt-3 bg-white/70 rounded-xl px-4 py-2 text-xs text-gray-500 border border-gray-100">
                  ⚠️ {inst.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
