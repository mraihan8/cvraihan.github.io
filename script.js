// Auto detect dark mode
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

document.getElementById("themeToggle").onclick = function(){
  document.body.classList.toggle("dark");
};

// Bilingual
const translations = {
  id: {
    tagline: "Individu aktif dalam organisasi & pengembangan diri",
    aboutTitle: "Tentang Saya",
    aboutDesc: "Individu yang aktif dalam organisasi, olahraga (Silat & Badminton), serta kegiatan keagamaan dan pengembangan diri.",
    previewBtn: "Preview CV"
  },
  en: {
    tagline: "Active individual in organization & self development",
    aboutTitle: "About Me",
    aboutDesc: "Active in organization, sports (Silat & Badminton), and religious & self development activities.",
    previewBtn: "Preview CV"
  }
};

let currentLang = "id";

document.getElementById("langToggle").onclick = function(){
  currentLang = currentLang === "id" ? "en" : "id";
  this.textContent = currentLang === "id" ? "EN" : "ID";

  document.querySelectorAll("[data-id]").forEach(el=>{
    const key = el.getAttribute("data-id");
    if(translations[currentLang][key]){
      el.textContent = translations[currentLang][key];
    }
  });
};

// Scroll animation
ScrollReveal().reveal('.section', {
  distance: '40px',
  duration: 800,
  origin: 'bottom',
  interval: 200
});

// Preview Modal
function openPreview(){
  document.getElementById("previewModal").style.display="block";
}

function closePreview(){
  document.getElementById("previewModal").style.display="none";
}

// Download tracking
let count = localStorage.getItem("downloadCount") || 0;
document.getElementById("downloadCount").textContent = count;

function trackDownload(){
  count++;
  localStorage.setItem("downloadCount", count);
  document.getElementById("downloadCount").textContent = count;
}
