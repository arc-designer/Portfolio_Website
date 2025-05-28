// js/controller.js

// Simple English/French map
const map = {
  en: { home: "Home", projects: "Projects", contact: "Contact" },
  fr: { home: "Accueil", projects: "Projets", contact: "Contact" }
};

function switchLanguage() {
  const sel = document.getElementById('languageSelect');
  const lang = sel?.value;
  if (!lang || !map[lang]) return;
  const content = map[lang];

  // Nav links
  document.getElementById("nav-home")?.innerText     = content.home;
  document.getElementById("nav-projects")?.innerText = content.projects;
  document.getElementById("nav-contact")?.innerText  = content.contact;

  // Page heading
  document.getElementById("projectsTitle")?.innerText = content.projects;

  // Browser tab title
  document.title = content.projects + " | Kavya Varma";

  // Persist preference
  localStorage.setItem('language', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  // Restore language
  const stored = localStorage.getItem('language');
  if (stored && document.getElementById('languageSelect')) {
    document.getElementById('languageSelect').value = stored;
    switchLanguage();
  }

  // Hook selector
  document.getElementById('languageSelect')
    ?.addEventListener('change', switchLanguage);
});