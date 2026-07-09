import type { Lang } from "./i18n";

export interface DocStep {
  n: number;
  title: string;
  body: string;
  tip?: string;
}

export interface DocAlert {
  color: "red" | "yellow" | "green";
  title: string;
  text: string;
}

export interface DocFaqItem {
  q: string;
  a: string;
}

export interface DocPageData {
  breadcrumb_doc: string;
  emoji: string;
  title: string;
  description: string;
  badges: { text: string; bg: string; text_color: string }[];
  needed_title: string;
  needed: string[];
  steps_title: string;
  steps: DocStep[];
  address?: { title: string; name: string; address: string; hours: string };
  alert?: DocAlert;
  faq?: { title: string; items: DocFaqItem[] };
  next: { title: string; desc: string; href: string; btn: string };
}

const docs: Record<string, Record<Lang, DocPageData>> = {
  "codice-fiscale": {
    ru: {
      breadcrumb_doc: "Codice Fiscale",
      emoji: "🪪",
      title: "Codice Fiscale",
      description: "Итальянский налоговый номер — уникальный код из 16 символов. Нужен буквально для всего: открыть счёт в банке, снять квартиру, записаться к врачу, купить SIM-карту.",
      badges: [
        { text: "⏱ Занимает 1 день", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "🆓 Бесплатно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Что взять с собой",
      needed: ["Паспорт (оригинал)", "Копия паспорта (1 страница с фото)", "Форма AA4/8 (можно заполнить на месте)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Найди ближайшую Agenzia delle Entrate", body: "Адрес и часы работы твоего города — в карточке ниже на этой странице. Приди лично с документами." },
        { n: 2, title: "Возьми талон и жди очереди", body: "На входе есть автомат с талонами. Выбери «Codice Fiscale / Tessera Sanitaria». Ожидание обычно 20–60 минут.", tip: "Приди пораньше — лучше к открытию. Ближе к концу дня очереди меньше." },
        { n: 3, title: "Подай документы", body: "Подай паспорт (оригинал + копию) и заполненную форму AA4/8. Форму можно взять прямо там или скачать заранее." },
        { n: 4, title: "Получи карточку", body: "Codice Fiscale выдают сразу на месте в виде пластиковой карточки — обычно за 10–15 минут.", tip: "Сфотографируй карточку сразу и сохрани в телефоне — цифровая копия принимается везде." },
      ],
      address: { title: "📍 Где в Генуе", name: "Agenzia delle Entrate — Genova", address: "Via De Marini 1, 16149 Genova", hours: "Пн–Вт: 8:30–13:00, 14:00–16:30 · Ср: 8:30–13:00" },
      faq: {
        title: "❓ Частые вопросы",
        items: [
          { q: "Можно ли получить онлайн?", a: "Да, через сайт Agenzia delle Entrate, но только если уже есть SPID (итальянская цифровая идентификация). Новичкам — только лично." },
          { q: "Нужен ли permesso di soggiorno?", a: "Нет. Codice Fiscale выдаётся только по паспорту — это первый документ." },
          { q: "Действует ли codice fiscale бессрочно?", a: "Да, он не истекает и привязан к тебе навсегда." },
        ],
      },
      next: { title: "Следующий шаг →", desc: "После codice fiscale нужно подать на permesso di soggiorno", href: "/documents/permesso-di-soggiorno", btn: "Permesso →" },
    },
    ua: {
      breadcrumb_doc: "Codice Fiscale",
      emoji: "🪪",
      title: "Codice Fiscale",
      description: "Італійський податковий номер — унікальний код з 16 символів. Потрібен буквально для всього: відкрити рахунок у банку, зняти квартиру, записатися до лікаря, купити SIM-карту.",
      badges: [
        { text: "⏱ Займає 1 день", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "🆓 Безкоштовно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Що взяти з собою",
      needed: ["Паспорт (оригінал)", "Копія паспорта (1 сторінка з фото)", "Форма AA4/8 (можна заповнити на місці)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Знайди найближче Agenzia delle Entrate", body: "Адреса та години роботи твого міста — у картці нижче на цій сторінці. Прийди особисто з документами." },
        { n: 2, title: "Візьми талон і чекай черги", body: "На вході є автомат з талонами. Вибери «Codice Fiscale / Tessera Sanitaria». Очікування зазвичай 20–60 хвилин.", tip: "Приходь раніше — краще до відкриття. Ближче до кінця дня черги менше." },
        { n: 3, title: "Подай документи", body: "Подай паспорт (оригінал + копію) та заповнену форму AA4/8. Форму можна взяти прямо там або завантажити заздалегідь." },
        { n: 4, title: "Отримай картку", body: "Codice Fiscale видають одразу на місці у вигляді пластикової картки — зазвичай за 10–15 хвилин.", tip: "Сфотографуй картку одразу і збережи в телефоні — цифрова копія приймається скрізь." },
      ],
      address: { title: "📍 Де в Генуї", name: "Agenzia delle Entrate — Genova", address: "Via De Marini 1, 16149 Genova", hours: "Пн–Вт: 8:30–13:00, 14:00–16:30 · Ср: 8:30–13:00" },
      faq: {
        title: "❓ Часті запитання",
        items: [
          { q: "Чи можна отримати онлайн?", a: "Так, через сайт Agenzia delle Entrate, але тільки якщо вже є SPID (італійська цифрова ідентифікація). Новачкам — тільки особисто." },
          { q: "Чи потрібен permesso di soggiorno?", a: "Ні. Codice Fiscale видається тільки за паспортом — це перший документ." },
          { q: "Чи діє codice fiscale безстроково?", a: "Так, він не закінчується та прив'язаний до тебе назавжди." },
        ],
      },
      next: { title: "Наступний крок →", desc: "Після codice fiscale потрібно подати на permesso di soggiorno", href: "/documents/permesso-di-soggiorno", btn: "Permesso →" },
    },
  },

  "permesso-di-soggiorno": {
    ru: {
      breadcrumb_doc: "Permesso di Soggiorno",
      emoji: "📋",
      title: "Permesso di Soggiorno",
      description: "Разрешение на пребывание в Италии. Обязательно для всех иностранцев не из ЕС. Нужно подать в течение 8 рабочих дней с момента въезда.",
      badges: [
        { text: "⏱ 2–6 месяцев", bg: "bg-orange-100", text_color: "text-orange-700" },
        { text: "⚠️ Сложно", bg: "bg-red-100", text_color: "text-red-700" },
        { text: "💶 ~€30 + марки", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Что взять с собой",
      needed: ["Паспорт (оригинал + 2 копии всех страниц)", "4 фотографии 3×4", "Kit postale (куплен на почте, ~€30)", "Документы, подтверждающие основание пребывания", "Codice fiscale", "Для украинцев: документ о временной защите (protezione temporanea)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Купи kit postale в любом почтовом отделении", body: "Это специальный пакет с формами для подачи на permesso. Стоит около €30. Скажи на почте: «Kit per permesso di soggiorno»." },
        { n: 2, title: "Заполни анкету (Modulo 209)", body: "Заполни форму на итальянском. Укажи основание для пребывания: lavoro (работа), famiglia (семья), protezione internazionale (для украинцев).", tip: "Если не уверен в основании — спроси в ближайшем CAF или Patronato, они помогут бесплатно." },
        { n: 3, title: "Отправь пакет на почте", body: "Сдай заполненный пакет обратно на той же почте. Тебе дадут квитанцию и дату встречи в Questura.", tip: "Сохрани квитанцию — это временное подтверждение что ты подал заявку." },
        { n: 4, title: "Приди в Questura в назначенный день", body: "В Questura снимут отпечатки пальцев, сфотографируют и проверят документы. Дадут талон для отслеживания статуса.", tip: "Адрес Questura твоего города — в карточке ниже. Возьми с собой ВСЕ оригиналы документов." },
        { n: 5, title: "Жди и следи за статусом", body: "Ожидание — от 2 до 6 месяцев. Статус можно отслеживать на сайте questure.poliziadistato.it." },
        { n: 6, title: "Забери permesso в Questura", body: "Когда статус «Pronto», нужно лично прийти с документами и забрать permesso di soggiorno." },
      ],
      address: { title: "📍 Где в Генуе", name: "Questura di Genova — Ufficio Immigrazione", address: "Via Bartolomeo Bosco 24, 16121 Genova", hours: "По записи через kit postale" },
      alert: { color: "red", title: "⚠️ Важно для украинцев", text: "Граждане Украины с 2022 года могут получить Protezione Temporanea — упрощённую временную защиту. Это не то же самое что обычный permesso, но даёт право жить и работать в Италии." },
      next: { title: "Следующий шаг →", desc: "После подачи — оформить прописку (residenza)", href: "/documents/residenza", btn: "Residenza →" },
    },
    ua: {
      breadcrumb_doc: "Permesso di Soggiorno",
      emoji: "📋",
      title: "Permesso di Soggiorno",
      description: "Дозвіл на перебування в Італії. Обов'язковий для всіх іноземців не з ЄС. Потрібно подати протягом 8 робочих днів з моменту в'їзду.",
      badges: [
        { text: "⏱ 2–6 місяців", bg: "bg-orange-100", text_color: "text-orange-700" },
        { text: "⚠️ Складно", bg: "bg-red-100", text_color: "text-red-700" },
        { text: "💶 ~€30 + марки", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Що взяти з собою",
      needed: ["Паспорт (оригінал + 2 копії всіх сторінок)", "4 фотографії 3×4", "Kit postale (куплено на пошті, ~€30)", "Документи, що підтверджують підставу перебування", "Codice fiscale", "Для українців: документ про тимчасовий захист (protezione temporanea)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Купи kit postale в будь-якому поштовому відділенні", body: "Це спеціальний пакет з формами для подачі на permesso. Коштує близько €30. Скажи на пошті: «Kit per permesso di soggiorno»." },
        { n: 2, title: "Заповни анкету (Modulo 209)", body: "Заповни форму італійською. Вкажи підставу для перебування: lavoro (робота), famiglia (сім'я), protezione internazionale (для українців).", tip: "Якщо не впевнений у підставі — запитай у найближчому CAF або Patronato, вони допоможуть безкоштовно." },
        { n: 3, title: "Відправ пакет на пошті", body: "Здай заповнений пакет назад на тій самій пошті. Тобі дадуть квитанцію та дату зустрічі в Questura.", tip: "Збережи квитанцію — це тимчасове підтвердження що ти подав заявку." },
        { n: 4, title: "Прийди до Questura у призначений день", body: "У Questura знімуть відбитки пальців, сфотографують та перевірять документи.", tip: "Адреса Questura твого міста — у картці нижче. Візьми з собою ВСІ оригінали документів." },
        { n: 5, title: "Чекай та стеж за статусом", body: "Очікування — від 2 до 6 місяців. Статус можна відстежувати на сайті questure.poliziadistato.it." },
        { n: 6, title: "Забери permesso у Questura", body: "Коли статус «Pronto», потрібно особисто прийти з документами та забрати permesso di soggiorno." },
      ],
      address: { title: "📍 Де в Генуї", name: "Questura di Genova — Ufficio Immigrazione", address: "Via Bartolomeo Bosco 24, 16121 Genova", hours: "За записом через kit postale" },
      alert: { color: "red", title: "⚠️ Важливо для українців", text: "Громадяни України з 2022 року можуть отримати Protezione Temporanea — спрощений тимчасовий захист. Це не те саме що звичайний permesso, але дає право жити та працювати в Італії." },
      next: { title: "Наступний крок →", desc: "Після подачі — оформити реєстрацію (residenza)", href: "/documents/residenza", btn: "Residenza →" },
    },
  },

  "tessera-sanitaria": {
    ru: {
      breadcrumb_doc: "Tessera Sanitaria",
      emoji: "🏥",
      title: "Tessera Sanitaria",
      description: "Итальянская медицинская карта. Даёт доступ к бесплатному врачу общей практики (medico di base), субсидированным лекарствам и медицинским услугам по льготным ценам.",
      badges: [
        { text: "⏱ 1–3 дня", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "🆓 Бесплатно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Что взять с собой",
      needed: ["Паспорт (оригинал + копия)", "Codice Fiscale", "Permesso di Soggiorno или квитанция о подаче", "Документ о прописке (если есть)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Иди в ASL (Azienda Sanitaria Locale)", body: "Адрес и часы работы ASL твоего города — в карточке ниже на этой странице. Также есть районные офисы по всему городу." },
        { n: 2, title: "Попроси записать к medico di base", body: "На месте скажи что хочешь iscriversi al Servizio Sanitario Nazionale. Тебе дадут выбрать врача из списка.", tip: "Выбирай врача ближе к дому — он будет твоим постоянным терапевтом." },
        { n: 3, title: "Получи tessera sanitaria", body: "Карточку выдают сразу или отправляют почтой в течение нескольких дней. Она совмещена с codice fiscale." },
      ],
      address: { title: "📍 Где в Генуе", name: "ASL 3 Genovese", address: "Via Bertani 4, 16125 Genova", hours: "Пн–Пт: 8:00–12:30" },
      next: { title: "Следующий шаг →", desc: "Оформить прописку (residenza)", href: "/documents/residenza", btn: "Residenza →" },
    },
    ua: {
      breadcrumb_doc: "Tessera Sanitaria",
      emoji: "🏥",
      title: "Tessera Sanitaria",
      description: "Італійська медична картка. Дає доступ до безкоштовного сімейного лікаря (medico di base), субсидованих ліків та медичних послуг за пільговими цінами.",
      badges: [
        { text: "⏱ 1–3 дні", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "🆓 Безкоштовно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Що взяти з собою",
      needed: ["Паспорт (оригінал + копія)", "Codice Fiscale", "Permesso di Soggiorno або квитанція про подачу", "Документ про реєстрацію (якщо є)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Іди до ASL (Azienda Sanitaria Locale)", body: "Адреса та години роботи ASL твого міста — у картці нижче на цій сторінці. Також є районні офіси по всьому місту." },
        { n: 2, title: "Попроси записати до medico di base", body: "На місці скажи що хочеш iscriversi al Servizio Sanitario Nazionale. Тобі дадуть вибрати лікаря зі списку.", tip: "Вибирай лікаря ближче до дому — він буде твоїм постійним терапевтом." },
        { n: 3, title: "Отримай tessera sanitaria", body: "Картку видають одразу або відправляють поштою протягом кількох днів. Вона суміщена з codice fiscale." },
      ],
      address: { title: "📍 Де в Генуї", name: "ASL 3 Genovese", address: "Via Bertani 4, 16125 Genova", hours: "Пн–Пт: 8:00–12:30" },
      next: { title: "Наступний крок →", desc: "Оформити реєстрацію (residenza)", href: "/documents/residenza", btn: "Residenza →" },
    },
  },

  "residenza": {
    ru: {
      breadcrumb_doc: "Residenza",
      emoji: "🏠",
      title: "Residenza",
      description: "Регистрация по месту жительства. Без residenza сложно открыть банковский счёт, получить carta d'identità и ряд социальных льгот. Нужен договор аренды или согласие хозяина жилья.",
      badges: [
        { text: "⏱ 1–3 месяца", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "📋 Средне", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "🆓 Бесплатно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Что взять с собой",
      needed: ["Паспорт (оригинал + копия)", "Codice Fiscale", "Permesso di Soggiorno (оригинал + копия)", "Договор аренды или dichiarazione ospitalità от хозяина", "Заполненная форма (выдают в Comune)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Запишись в Comune", body: "Записаться можно онлайн через сайт Comune твоего города или прийти лично в ближайший sportello anagrafe." },
        { n: 2, title: "Подай заявление на residenza", body: "Заполни модуль cambiamento di residenza. Укажи адрес где живёшь. Сдай все документы.", tip: "Сотрудник общины проверит документы и скажет всё ли в порядке." },
        { n: 3, title: "Жди визита муниципального инспектора", body: "В течение 45 дней к тебе домой может прийти vigile urbano (городской инспектор), чтобы проверить что ты действительно живёшь по этому адресу.", tip: "Это нормальная процедура. Достаточно просто быть дома и показать что ты там живёшь." },
        { n: 4, title: "Получи подтверждение residenza", body: "После проверки через 1–3 месяца residenza будет зарегистрирована. Можно будет запросить certificato di residenza в Comune." },
      ],
      address: { title: "📍 Где в Генуе", name: "Comune di Genova — Anagrafe", address: "Via di Francia 1, 16149 Genova", hours: "Пн–Пт: 8:30–13:00" },
      alert: { color: "yellow", title: "⚠️ Нужно жильё", text: "Для residenza нужен либо договор аренды, либо письменное согласие хозяина квартиры. Без этого зарегистрироваться не получится." },
      next: { title: "Следующий шаг →", desc: "После residenza можно получить carta d'identità", href: "/documents/carta-identita", btn: "Carta d'identità →" },
    },
    ua: {
      breadcrumb_doc: "Residenza",
      emoji: "🏠",
      title: "Residenza",
      description: "Реєстрація за місцем проживання. Без residenza важко відкрити банківський рахунок, отримати carta d'identità та ряд соціальних пільг. Потрібен договір оренди або згода господаря житла.",
      badges: [
        { text: "⏱ 1–3 місяці", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "📋 Середньо", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "🆓 Безкоштовно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Що взяти з собою",
      needed: ["Паспорт (оригінал + копія)", "Codice Fiscale", "Permesso di Soggiorno (оригінал + копія)", "Договір оренди або dichiarazione ospitalità від господаря", "Заповнена форма (видають у Comune)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Запишись до Comune", body: "Записатися можна онлайн на сайті Comune твого міста або прийти особисто до найближчого sportello anagrafe." },
        { n: 2, title: "Подай заяву на residenza", body: "Заповни модуль cambiamento di residenza. Вкажи адресу де живеш. Здай всі документи.", tip: "Співробітник громади перевірить документи та скаже чи все гаразд." },
        { n: 3, title: "Чекай візиту муніципального інспектора", body: "Протягом 45 днів до тебе додому може прийти vigile urbano (міський інспектор), щоб перевірити що ти дійсно живеш за цією адресою.", tip: "Це нормальна процедура. Достатньо просто бути вдома і показати що ти там живеш." },
        { n: 4, title: "Отримай підтвердження residenza", body: "Після перевірки через 1–3 місяці residenza буде зареєстрована. Можна буде запросити certificato di residenza у Comune." },
      ],
      address: { title: "📍 Де в Генуї", name: "Comune di Genova — Anagrafe", address: "Via di Francia 1, 16149 Genova", hours: "Пн–Пт: 8:30–13:00" },
      alert: { color: "yellow", title: "⚠️ Потрібне житло", text: "Для residenza потрібен або договір оренди, або письмова згода господаря квартири. Без цього зареєструватися не вийде." },
      next: { title: "Наступний крок →", desc: "Після residenza можна отримати carta d'identità", href: "/documents/carta-identita", btn: "Carta d'identità →" },
    },
  },

  "carta-identita": {
    ru: {
      breadcrumb_doc: "Carta d'identità",
      emoji: "🪪",
      title: "Carta d'identità",
      description: "Итальянское удостоверение личности. Действует 10 лет. Принимается как документ во всех странах ЕС. Выдаётся только после получения residenza.",
      badges: [
        { text: "⏱ 1–2 недели", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "💶 ~€22", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Что взять с собой",
      needed: ["Паспорт (оригинал)", "Codice Fiscale / Tessera Sanitaria", "Документ о residenza", "1 фотография 3×4", "Оплата €22 (на месте)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Запишись в Comune онлайн", body: "Запись через сайт Comune твоего города или агрегатор prenotami.it. Без записи обычно не принимают.", tip: "Записи бывают загружены на 2–3 недели вперёд. Бронируй заранее." },
        { n: 2, title: "Приди в Anagrafe с документами", body: "В назначенное время приди в Comune. Сотрудник проверит документы, снимет отпечатки и сделает фото." },
        { n: 3, title: "Получи карточку через 6–10 дней", body: "Carta d'identità электронная (CIE) отправляется по почте на адрес прописки. Временный документ дают сразу." },
      ],
      address: { title: "📍 Где в Генуе", name: "Comune di Genova — Anagrafe", address: "Via di Francia 1, 16149 Genova", hours: "Пн–Пт: 8:30–13:00" },
      next: { title: "Все документы →", desc: "Вернуться к списку всех документов", href: "/documents", btn: "К списку →" },
    },
    ua: {
      breadcrumb_doc: "Carta d'identità",
      emoji: "🪪",
      title: "Carta d'identità",
      description: "Італійське посвідчення особи. Діє 10 років. Приймається як документ у всіх країнах ЄС. Видається лише після отримання residenza.",
      badges: [
        { text: "⏱ 1–2 тижні", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "✅ Легко", bg: "bg-green-100", text_color: "text-green-700" },
        { text: "💶 ~€22", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Що взяти з собою",
      needed: ["Паспорт (оригінал)", "Codice Fiscale / Tessera Sanitaria", "Документ про residenza", "1 фотографія 3×4", "Оплата €22 (на місці)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Запишись до Comune онлайн", body: "Запис через сайт Comune твого міста або агрегатор prenotami.it. Без запису зазвичай не приймають.", tip: "Записи бувають завантажені на 2–3 тижні вперед. Бронюй заздалегідь." },
        { n: 2, title: "Прийди до Anagrafe з документами", body: "У призначений час прийди до Comune. Співробітник перевірить документи, зніме відбитки і зробить фото." },
        { n: 3, title: "Отримай картку через 6–10 днів", body: "Carta d'identità електронна (CIE) відправляється поштою на адресу реєстрації. Тимчасовий документ дають одразу." },
      ],
      address: { title: "📍 Де в Генуї", name: "Comune di Genova — Anagrafe", address: "Via di Francia 1, 16149 Genova", hours: "Пн–Пт: 8:30–13:00" },
      next: { title: "Всі документи →", desc: "Повернутися до списку всіх документів", href: "/documents", btn: "До списку →" },
    },
  },

  "scuola": {
    ru: {
      breadcrumb_doc: "Запись в школу",
      emoji: "🎓",
      title: "Запись детей в школу",
      description: "В Италии обучение обязательно с 6 до 16 лет. Записать ребёнка в школу можно в любое время года — не нужно ждать сентября.",
      badges: [
        { text: "⏱ 1–2 недели", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "📋 Средне", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "🆓 Бесплатно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Документы на ребёнка",
      needed: ["Паспорт или свидетельство о рождении ребёнка", "Codice Fiscale ребёнка", "Школьные документы с предыдущего места учёбы (если есть)", "Медицинская справка о прививках", "Документы родителей (паспорт + codice fiscale)"],
      steps_title: "Пошаговая инструкция",
      steps: [
        { n: 1, title: "Найди ближайшую школу нужного уровня", body: "Scuola Primaria (6–11 лет), Scuola Media (11–14), Scuola Superiore (14–19). Найти школы по адресу можно на сайте Ufficio Scolastico Regionale." },
        { n: 2, title: "Свяжись с секретариатом школы", body: "Позвони или зайди лично в сегретерию (секретариат) выбранной школы. Спроси об iscrizione (записи) и договорись о встрече.", tip: "Во многих школах есть сотрудники, говорящие на других языках." },
        { n: 3, title: "Подай документы и заполни форму записи", body: "Принеси все документы, заполни domanda di iscrizione. Директор школы определит в какой класс зачислить ребёнка.", tip: "Если ребёнок не знает итальянского — это нормально. Школы обязаны обеспечить поддержку по итальянскому (L2)." },
        { n: 4, title: "Первый день в школе", body: "Школа предоставит расписание. В первые недели к ребёнку могут прикрепить специального педагога для помощи с языком." },
      ],
      alert: { color: "green", title: "✅ Хорошие новости", text: "Дети иммигрантов принимаются в школу независимо от статуса документов родителей. Отказать в приёме незаконно." },
      next: { title: "Все документы →", desc: "Вернуться к списку всех документов", href: "/documents", btn: "К списку →" },
    },
    ua: {
      breadcrumb_doc: "Запис до школи",
      emoji: "🎓",
      title: "Запис дітей до школи",
      description: "В Італії навчання обов'язкове з 6 до 16 років. Записати дитину до школи можна у будь-який час року — не потрібно чекати вересня.",
      badges: [
        { text: "⏱ 1–2 тижні", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "📋 Середньо", bg: "bg-yellow-100", text_color: "text-yellow-700" },
        { text: "🆓 Безкоштовно", bg: "bg-blue-100", text_color: "text-blue-700" },
      ],
      needed_title: "📎 Документи на дитину",
      needed: ["Паспорт або свідоцтво про народження дитини", "Codice Fiscale дитини", "Шкільні документи з попереднього місця навчання (якщо є)", "Медична довідка про щеплення", "Документи батьків (паспорт + codice fiscale)"],
      steps_title: "Покрокова інструкція",
      steps: [
        { n: 1, title: "Знайди найближчу школу потрібного рівня", body: "Scuola Primaria (6–11 років), Scuola Media (11–14), Scuola Superiore (14–19). Знайти школи за адресою можна на сайті Ufficio Scolastico Regionale." },
        { n: 2, title: "Зв'яжись із секретаріатом школи", body: "Зателефонуй або зайди особисто до сегретерії (секретаріату) обраної школи. Запитай про iscrizione (запис) і домовся про зустріч.", tip: "У багатьох школах є співробітники, які розмовляють іншими мовами." },
        { n: 3, title: "Подай документи та заповни форму запису", body: "Принеси всі документи, заповни domanda di iscrizione. Директор школи визначить до якого класу зарахувати дитину.", tip: "Якщо дитина не знає італійської — це нормально. Школи зобов'язані забезпечити підтримку з італійської (L2)." },
        { n: 4, title: "Перший день у школі", body: "Школа надасть розклад. У перші тижні до дитини можуть прикріпити спеціального педагога для допомоги з мовою." },
      ],
      alert: { color: "green", title: "✅ Хороші новини", text: "Діти іммігрантів приймаються до школи незалежно від статусу документів батьків. Відмовити у прийомі незаконно." },
      next: { title: "Всі документи →", desc: "Повернутися до списку всіх документів", href: "/documents", btn: "До списку →" },
    },
  },
};

export function getDocTranslation(slug: string, lang: Lang): DocPageData | null {
  return docs[slug]?.[lang] ?? null;
}
