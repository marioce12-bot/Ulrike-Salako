// Contenu de départ du site — repris du portfolio d'origine.
// Ces valeurs ne s'affichent que tant qu'aucun document n'a encore été
// enregistré dans Firestore depuis la page admin.
export const DEFAULT_CONTENT = {
  hero: {
    eyebrowLeft: "Портфолио — Модель",
    eyebrowRight: "Астрахань, Россия",
    namePlain: "Ulrike",
    nameItalic: "Salako",
    subtitle:
      "Новое лицо. Рост 183 см — стройный силуэт, естественность перед камерой. Открыта для фотосъёмок, показов и сотрудничества.",
    scrollHint: "Листать",
  },
  about: {
    quote: "«Силуэт, которому нужен лишь объектив, чтобы раскрыться».",
    paragraph:
      "Ульрике Салако начинает карьеру модели с внешностью, которая выделяется от природы: рост 183 см, стройная стать и естественность перед камерой. Живёт в России, открыта как для местных, так и для международных проектов.",
    badges: [
      "Новое лицо — портфолио в разработке",
      "Студентка архитектурного факультета — АГТУ, Россия",
    ],
  },
  specs: [
    { label: "Рост", value: "183 см" },
    { label: "Вес", value: "62 кг" },
    { label: "Опыт", value: "Новое лицо" },
    { label: "Локация", value: "Россия" },
    { label: "Учёба", value: "Архитектура — АГТУ" },
  ],
  galleryIntro: {
    title: "Галерея",
    text: "Подборка недавних снимков — портфолио в процессе формирования.",
  },
  gallery: [],
  contact: {
    heading: "Давайте<br>работать вместе.",
    phoneLabel: "Телефон",
    phone: "+7 996 588 70 82",
    phoneHref: "tel:+79965887082",
    emailLabel: "Эл. почта",
    email: "salakoulrik@gmail.com",
    instagramLabel: "Инстаграм",
    instagramText: "Ulrike Salako",
    instagramUrl: "https://instagram.com/",
  },
  footer: {
    left: "© 2026 Ulrike Salako",
    right: "Портфолио модели",
  },
};
