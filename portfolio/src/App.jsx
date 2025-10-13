import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon
} from "react-icons/fa";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";

export default function App() {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  // If the user has no saved preference, show dark briefly then switch to light.
  React.useEffect(() => {
    let timer;
    try {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        // only schedule the switch if current theme is dark
        if (theme === "dark") {
          timer = setTimeout(() => {
            setTheme("light");
          }, 900); // delay ~900ms so user sees the initial dark paint
        }
      }
    } catch (e) {
      // ignore
    }
    return () => clearTimeout(timer);
  }, [theme, setTheme]);

  return (
    <div className="font-sans pt-20">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <footer className="border-t py-6 text-center text-sm muted">
        © {new Date().getFullYear()} Achini Pramodhya
      </footer>
    </div>
  );
}
