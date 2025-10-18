import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf = null;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-b border-gray-100 dark:border-zinc-800 transform transition-transform duration-200 ${
        scrolled ? "-translate-y-2" : "translate-y-0"
      }`}
    >
      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Achini Pramodhya</div>
        <div className="flex items-center gap-4">
          <div className="space-x-6 flex">
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
