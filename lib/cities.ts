export type CityCode = "genova" | "milano" | "roma" | "torino" | "napoli" | "bologna" | "firenze" | "palermo";

export interface Institution {
  name: string;
  address: string;
  hours: string;
}

export interface CityInstitutions {
  agenzia_entrate: Institution;
  questura: Institution;
  comune: Institution;
  asl: Institution;
}

export const cities: Record<CityCode, { label: string; institutions: CityInstitutions }> = {
  genova: {
    label: "Генуя",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Genova",
        address: "Via De Marini 1, 16149 Genova",
        hours: "Пн–Вт: 8:30–13:00, 14:00–16:30 · Ср: 8:30–13:00",
      },
      questura: {
        name: "Questura di Genova - Ufficio Immigrazione",
        address: "Via Gabriele D'Annunzio 80, 16121 Genova",
        hours: "Пн–Чт: 8:30–13:30, 15:00–18:00 · Пт: 8:30–13:30 (тільки за записом)",
      },
      comune: {
        name: "Comune di Genova - Sportello Anagrafe",
        address: "Via di Francia 1, 16149 Genova",
        hours: "Пн–Пт: 8:30–12:30 · Вт–Чт: 14:00–16:00",
      },
      asl: {
        name: "ASL 3 Genovese",
        address: "Via Bertani 4, 16125 Genova",
        hours: "Пн–Вт: 8:00–13:00, 14:00–16:00 · Ср–Пт: 8:00–13:00",
      },
    },
  },
  milano: {
    label: "Милан",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Milano",
        address: "Corso di Porta Romana 110, 20122 Milano",
        hours: "Пн–Пт: 8:30–12:30 · Пн–Вт–Чт: 14:00–16:00",
      },
      questura: {
        name: "Questura di Milano - Ufficio Immigrazione",
        address: "Via Montebello 26, 20121 Milano",
        hours: "Пн–Пт: за записом",
      },
      comune: {
        name: "Comune di Milano - Sportello Anagrafe",
        address: "Via Larga 12, 20122 Milano",
        hours: "Пн–Пт: 8:30–12:00 · Вт–Чт: 14:00–15:30",
      },
      asl: {
        name: "ATS Milano - Sportello Stranieri",
        address: "Via Ricordi 7, 20131 Milano",
        hours: "Пн–Пт: 8:30–12:30",
      },
    },
  },
  roma: {
    label: "Рим",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Roma",
        address: "Via Cristoforo Colombo 426, 00145 Roma",
        hours: "Пн–Пт: 8:30–12:30 · Пн–Чт: 14:00–16:00",
      },
      questura: {
        name: "Questura di Roma - Ufficio Immigrazione",
        address: "Via Teofilo Patini 23, 00155 Roma",
        hours: "Пн–Пт: 8:00–13:30 · Вт–Чт: 15:00–17:00",
      },
      comune: {
        name: "Comune di Roma - Municipio",
        address: "Via Luigi Petroselli 52, 00186 Roma",
        hours: "Пн–Пт: 8:30–12:30 · Вт–Чт: 14:30–16:30",
      },
      asl: {
        name: "ASL Roma - Sportello Stranieri",
        address: "Viale Jonio 96, 00141 Roma",
        hours: "Пн–Пт: 8:30–12:30",
      },
    },
  },
  torino: {
    label: "Турин",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Torino",
        address: "Corso Bolzano 30, 10121 Torino",
        hours: "Пн–Вт–Чт: 8:30–13:00, 14:00–16:30 · Ср–Пт: 8:30–13:00",
      },
      questura: {
        name: "Questura di Torino - Ufficio Immigrazione",
        address: "Via Fratelli Ruffini 11, 10122 Torino",
        hours: "Пн–Чт: 8:30–13:30 · Пт: 8:30–13:00",
      },
      comune: {
        name: "Comune di Torino - Sportello Anagrafe",
        address: "Via Corte d'Appello 16, 10122 Torino",
        hours: "Пн–Пт: 8:30–12:30 · Вт–Чт: 14:00–16:00",
      },
      asl: {
        name: "ASL Città di Torino",
        address: "Via della Consolata 10, 10122 Torino",
        hours: "Пн–Пт: 8:00–12:30",
      },
    },
  },
  napoli: {
    label: "Неаполь",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Napoli",
        address: "Via Diocleziano 328, 80124 Napoli",
        hours: "Пн–Пт: 8:30–12:30 · Пн–Чт: 14:00–16:00",
      },
      questura: {
        name: "Questura di Napoli - Ufficio Immigrazione",
        address: "Via Galileo Ferraris 131, 80142 Napoli",
        hours: "Пн–Пт: 8:30–13:00 · Пн–Чт: 14:30–17:00",
      },
      comune: {
        name: "Comune di Napoli - Anagrafe",
        address: "Via Verdi 35, 80138 Napoli",
        hours: "Пн–Вт–Пт: 9:00–12:30 · Вт–Чт: 14:00–16:00",
      },
      asl: {
        name: "ASL Napoli 1 Centro",
        address: "Via G. Quagliariello 54, 80131 Napoli",
        hours: "Пн–Пт: 8:00–13:00",
      },
    },
  },
  bologna: {
    label: "Болонья",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Bologna",
        address: "Via Amendola 2, 40121 Bologna",
        hours: "Пн–Пт: 8:30–12:30 · Вт–Чт: 14:00–16:00",
      },
      questura: {
        name: "Questura di Bologna - Ufficio Immigrazione",
        address: "Via Bovi Campeggi 13/3, 40131 Bologna",
        hours: "Пн–Пт: 8:30–12:30",
      },
      comune: {
        name: "Comune di Bologna - Anagrafe",
        address: "Piazza Liber Paradisus 10, 40129 Bologna",
        hours: "Пн–Пт: 8:30–13:00 · Вт–Чт: 14:30–16:30",
      },
      asl: {
        name: "AUSL Bologna - Sportello Stranieri",
        address: "Via Castiglione 29, 40124 Bologna",
        hours: "Пн–Пт: 8:00–13:00",
      },
    },
  },
  firenze: {
    label: "Флоренция",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate - Firenze",
        address: "Via dei Servi 15, 50122 Firenze",
        hours: "Пн–Вт–Чт: 8:30–13:00, 14:00–16:30 · Ср–Пт: 8:30–13:00",
      },
      questura: {
        name: "Questura di Firenze - Ufficio Immigrazione",
        address: "Via della Fortezza 17, 50129 Firenze",
        hours: "Пн–Пт: 8:30–12:30",
      },
      comune: {
        name: "Comune di Firenze - Anagrafe",
        address: "Via Cesare Lombroso 3, 50134 Firenze",
        hours: "Пн–Пт: 9:00–13:00 · Вт–Чт: 14:30–16:30",
      },
      asl: {
        name: "ASL Toscana Centro - Sportello Stranieri",
        address: "Via di San Salvi 12, 50135 Firenze",
        hours: "Пн–Пт: 8:30–12:30",
      },
    },
  },
  palermo: {
    label: "Палермо",
    institutions: {
      agenzia_entrate: {
        name: "Agenzia delle Entrate -Palermo",
        address: "Viale della Regione Siciliana 452, 90146 Palermo",
        hours: "Пн–Пт: 8:30–12:30 · Пн–Чт: 14:00–16:00",
      },
      questura: {
        name: "Questura di Palermo - Ufficio Immigrazione",
        address: "Via San Lorenzo Colli 271, 90146 Palermo",
        hours: "Пн–Пт: 8:30–12:30",
      },
      comune: {
        name: "Comune di Palermo - Anagrafe",
        address: "Piazza Pretoria 1, 90133 Palermo",
        hours: "Пн–Пт: 9:00–13:00 · Вт–Чт: 15:00–17:00",
      },
      asl: {
        name: "ASP Palermo - Sportello Stranieri",
        address: "Via G. Cusmano 24, 90141 Palermo",
        hours: "Пн–Пт: 8:00–13:00",
      },
    },
  },
};

export const CITY_LIST = Object.entries(cities).map(([code, data]) => ({
  code: code as CityCode,
  label: data.label,
}));

// Maps document slug to institution key
export const DOC_INSTITUTION_MAP: Record<string, keyof CityInstitutions> = {
  "codice-fiscale": "agenzia_entrate",
  "tessera-sanitaria": "asl",
  "permesso-di-soggiorno": "questura",
  residenza: "comune",
  "carta-identita": "comune",
  scuola: "comune",
};
