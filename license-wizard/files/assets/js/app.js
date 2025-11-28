/* --------------------------------------------------
   UI / Page Navigation / Fade Transitions
-------------------------------------------------- */

let currentPage = 1;
const totalPages = 6;

function showPage(num) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => {
    p.classList.remove("active", "fade-page");
  });

  const page = document.getElementById(`page-${num}`);
  page.classList.add("active");

  // force reflow so fade applies
  void page.offsetWidth;
  page.classList.add("fade-page");
}

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById("back-btn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

/* Sidebar navigation */
document.querySelectorAll("#sidebar li").forEach(li => {
  li.addEventListener("click", () => {
    const step = parseInt(li.getAttribute("data-step"));

    currentPage = step;
    showPage(step);

    document.querySelectorAll("#sidebar li").forEach(x => x.classList.remove("active"));
    li.classList.add("active");
  });
});

/* Fade on first load */
document.addEventListener("DOMContentLoaded", () => {
  showPage(1);
});

/* --------------------------------------------------
   Theme Switcher
-------------------------------------------------- */

window.setTheme = function(theme) {
  document.body.classList.remove("theme-github", "theme-vercel", "theme-terminal");
  document.body.classList.add(`theme-${theme}`);
};

/* --------------------------------------------------
   Explanation “?” bubbles
-------------------------------------------------- */

document.addEventListener("click", e => {
  if (e.target.classList.contains("help-bubble")) {
    const expl = e.target.nextElementSibling;
    expl.classList.toggle("visible");
  }
});

/* --------------------------------------------------
   PDF Export
-------------------------------------------------- */

window.exportPDF = function() {
  const target = document.getElementById("license-output").value;
  const loading = document.getElementById("pdf-loading");
  loading.style.display = "block";

  // Lazy import html2pdf
  import("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js")
    .then(() => {
      const element = document.createElement("div");
      element.innerText = target;
      const opt = {
        margin: 0.5,
        filename: "LICENSE.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      };
      html2pdf().from(element).set(opt).save();
      loading.style.display = "none";
    });
};

/* --------------------------------------------------
   Copy to clipboard
-------------------------------------------------- */

window.copyLicense = function() {
  const text = document.getElementById("license-output").value;
  navigator.clipboard.writeText(text);
  alert("LICENSE copied!");
};

/* --------------------------------------------------
   Trigger generation
-------------------------------------------------- */
document.getElementById("generate-btn").addEventListener("click", () => {
  const result = window.buildLicense();
  document.getElementById("license-output").value = result;
});
