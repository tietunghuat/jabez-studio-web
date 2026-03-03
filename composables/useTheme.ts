// composables/useTheme.ts
export function useTheme() {
  const isDark = useState("theme-dark", () => false);

  function initTheme() {
    if (process.client) {
      const stored = localStorage.getItem("jabez-theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      isDark.value = stored ? stored === "dark" : prefersDark;
      applyTheme();
    }
  }

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value;
    if (process.client) {
      localStorage.setItem("jabez-theme", isDark.value ? "dark" : "light");
    }
    applyTheme();
  }

  return { isDark, toggleTheme, initTheme };
}
