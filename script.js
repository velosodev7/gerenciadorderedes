const toggleBtn = document.getElementById("toggleTheme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Carregar tema salvo ou padrão do sistema
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && prefersDark)
) {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "🌞";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
