const map = {
  en: { home: "Home", projects: "Projects", contact: "Contact" },
  fr: { home: "Accueil", projects: "Projets", contact: "Contact" }
};

function switchLanguage() {
  const sel = document.getElementById('languageSelect');
  const lang = sel?.value;
  if (!lang || !map[lang]) return;
  const content = map[lang];

  
  document.getElementById("nav-home")?.innerText     = content.home;
  document.getElementById("nav-projects")?.innerText = content.projects;
  document.getElementById("nav-contact")?.innerText  = content.contact;

  
  document.getElementById("projectsTitle")?.innerText = content.projects;

  
  document.title = content.projects + " | Kavya Varma";

  
  localStorage.setItem('language', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  
  const stored = localStorage.getItem('language');
  if (stored && document.getElementById('languageSelect')) {
    document.getElementById('languageSelect').value = stored;
    switchLanguage();
  }

  
  document.getElementById('languageSelect')
    ?.addEventListener('change', switchLanguage);
});