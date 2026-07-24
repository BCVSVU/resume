document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const sunIcon = themeToggleBtn.querySelector(".sun-icon");
  const moonIcon = themeToggleBtn.querySelector(".moon-icon");

  function initTheme() {
    const savedTheme = localStorage.getItem("bcr_theme") || "light";
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bcr_theme", theme);
    if (theme === "dark") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }

  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  initTheme();

  // Print PDF Resume Action
  const printPdfBtn = document.getElementById("print-pdf-btn");
  if (printPdfBtn) {
    printPdfBtn.addEventListener("click", () => {
      window.print();
    });
  }
});
