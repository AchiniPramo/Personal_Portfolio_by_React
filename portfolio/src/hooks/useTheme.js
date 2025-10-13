import { useEffect, useState } from "react";

function readInitialTheme() {
  // Always start in dark mode when the project first opens
  document.documentElement.classList.add("dark");
  return "dark";
}

export default function useTheme() {
  // Start in dark theme
  const [theme, setTheme] = useState(() => readInitialTheme());

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  // Optional smooth transition
  function setThemeWithTransition(value) {
    document.documentElement.classList.add("theme-transition");
    setTheme(value);
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 380);
  }

  return [theme, setThemeWithTransition];
}
