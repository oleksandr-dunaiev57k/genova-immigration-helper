export default function HomeVariant2() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "#faf7f2" }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🇮🇹</span>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-tight">Genova Helper</div>
              <div className="text-xs text-gray-400">для своих</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="/documents" className="hover:text-orange-500 transition-colors">Документы</a>
            <a href="/institutions" className="hover:text-orange-500 transition-colors">Учреждения</a>
            <a href="/faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="/chat" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              💬 Спросить
            </a>
          </nav>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <button className="px-2 py-1 rounded-full bg-orange-100 text-orange-600 font-medium">RU</button>
            <button className="px-2 py-1 rounded-full hover:bg-gray-100">UA</button>
            <button className="px-2 py-1 rounded-full hover:bg-gray-100">EN</button>
            <button className="px-2 py-1 rounded-full hover:bg-gray-100">IT</button>
          </div>
        </div>
      </header>

      {/* Hero — two columns */}
      <section className="relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-10">
          {/* Text */}
          <div className="flex-1">
            <div className="inline-block bg-orange-100 text-orange-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
              🌊 Генуя, Италия
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Переехать в Италию —<br />
              <span className="text-orange-500">это реально просто</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg mb-10">
              Собрали всё что нужно знать иммигрантам из СНГ в Генуе. Без бюрократического языка.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/documents"
                className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 text-sm"
              >
                С чего начать? →
              </a>
              <a
                href="/chat"
                className="bg-white text-gray-700 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                💬 Спросить ИИ
              </a>
            </div>
          </div>

          {/* Flag — waving in the wind */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center" style={{ width: "420px", height: "320px" }}>
            <svg
              width="380"
              height="253"
              viewBox="0 0 380 253"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.22))", borderRadius: "4px", overflow: "visible" }}
            >
              <defs>
                <filter id="wave" x="-5%" y="-5%" width="110%" height="110%">
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.015 0.08"
                    numOctaves="3"
                    seed="2"
                    result="turbulence"
                  >
                    <animate
                      attributeName="baseFrequency"
                      values="0.015 0.08;0.018 0.09;0.013 0.07;0.015 0.08"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="turbulence"
                    scale="14"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  >
                    <animate
                      attributeName="scale"
                      values="14;18;12;16;14"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </feDisplacementMap>
                </filter>
                <linearGradient id="shading" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.08)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="70%" stopColor="rgba(0,0,0,0.04)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
                </linearGradient>
              </defs>
              <g filter="url(#wave)">
                <rect x="0" y="0" width="126.6" height="253" fill="#009246" />
                <rect x="126.6" y="0" width="126.8" height="253" fill="#f5f5f5" />
                <rect x="253.4" y="0" width="126.6" height="253" fill="#ce2b37" />
                {/* Fabric shading overlay */}
                <rect x="0" y="0" width="380" height="253" fill="url(#shading)" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Document cards */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Самые нужные документы</h2>
          <p className="text-gray-400 text-center mb-10">Нажми на любой — расскажем как получить</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: "🪪", title: "Codice Fiscale", desc: "Налоговый номер. Нужен для всего.", color: "bg-blue-50 border-blue-100", href: "/documents/codice-fiscale" },
              { emoji: "📋", title: "Permesso di Soggiorno", desc: "Вид на жительство. Первый приоритет.", color: "bg-red-50 border-red-100", href: "/documents/permesso-di-soggiorno" },
              { emoji: "🏥", title: "Tessera Sanitaria", desc: "Медицинская карта. Бесплатная.", color: "bg-green-50 border-green-100", href: "/documents/tessera-sanitaria" },
              { emoji: "🏠", title: "Residenza", desc: "Прописка по месту жительства.", color: "bg-yellow-50 border-yellow-100", href: "/documents/residenza" },
              { emoji: "🪪", title: "Carta d'identità", desc: "Итальянское удостоверение.", color: "bg-purple-50 border-purple-100", href: "/documents/carta-identita" },
              { emoji: "🎓", title: "Школа", desc: "Запись детей в итальянскую школу.", color: "bg-orange-50 border-orange-100", href: "/documents/scuola" },
            ].map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className={`${doc.color} border rounded-2xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-3">{doc.emoji}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{doc.title}</div>
                <div className="text-gray-400 text-xs">{doc.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat promo */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-10 text-white text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-3">Есть вопрос? Просто спроси</h3>
            <p className="text-orange-100 mb-8 max-w-md mx-auto">
              ИИ-ассистент знает всё о документах, учреждениях и процедурах в Генуе. Отвечает на русском и украинском.
            </p>
            <a
              href="/chat"
              className="inline-block bg-white text-orange-500 font-semibold px-8 py-3 rounded-2xl hover:bg-orange-50 transition-colors"
            >
              Начать чат →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>🇮🇹 Genova Helper — сделано с душой для своих</div>
          <div className="flex gap-4">
            <a href="/documents" className="hover:text-gray-600">О проекте</a>
            <a href="/documents" className="hover:text-gray-600">Контакты</a>
            <a href="/documents" className="hover:text-gray-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
