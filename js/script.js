
const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");

// THEME SWITCHER

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.innerHTML = isLight
      ? '<i data-lucide="moon"></i>'
      : '<i data-lucide="sun"></i>';

    if (window.lucide) {
      lucide.createIcons();
    }
  });
}

// LANGUAGE TRANSLATIONS

const translations = {
  en: {
    navProjects: "Projects",
    navContact: "Contact",
    heroRole: "Frontend Developer",
    heroDescription:
      "A creative and detail-oriented Frontend Developer passionate about building digital experiences.",
    heroButton: "Explore my work ↗",
    projectsTitle: "Selected Projects.",
    contactTitle: "Let's work together.",
    contactName: "Your name",
    contactEmail: "Your email",
    contactMessage: "Your message",
    contactSend: "Send message"
  },

  pl: {
    navProjects: "Projekty",
    navContact: "Kontakt",
    heroRole: "Frontend Developer",
    heroDescription:
      "Kreatywna i dokładna Frontend Developerka, pasjonująca się tworzeniem cyfrowych doświadczeń.",
    heroButton: "Zobacz moje projekty ↗",
    projectsTitle: "Wybrane projekty.",
    contactTitle: "Porozmawiajmy o współpracy.",
    contactName: "Twoje imię",
    contactEmail: "Twój adres e-mail",
    contactMessage: "Twoja wiadomość",
    contactSend: "Wyślij wiadomość"
  },

  es: {
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroRole: "Frontend Developer",
    heroDescription:
      "Una desarrolladora Frontend creativa y detallista, apasionada por crear experiencias digitales.",
    heroButton: "Ver mis proyectos ↗",
    projectsTitle: "Proyectos destacados.",
    contactTitle: "Trabajemos juntos.",
    contactName: "Tu nombre",
    contactEmail: "Tu correo electrónico",
    contactMessage: "Tu mensaje",
    contactSend: "Enviar mensaje"
  }
};

function changeLanguage(language) {
  const selectedTranslations = translations[language];

  if (!selectedTranslations) return;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (selectedTranslations[key]) {
      element.placeholder = selectedTranslations[key];
    }
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    changeLanguage(languageSelect.value);
  });

  changeLanguage(languageSelect.value);
}
