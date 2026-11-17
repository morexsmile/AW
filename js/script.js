
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  themeToggle.innerHTML = isLight
    ? '<i data-lucide="moon"></i>'
    : '<i data-lucide="sun"></i>';

  lucide.createIcons();
});
