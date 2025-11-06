import React from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

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
          <div className="space-x-6 hidden md:flex">
              <a href="#hero" className="hover:notunderline">
                Home
              </a>
              <a href="#about" className="hover:notunderline">
                About
              </a>
              <a href="#skills" className="hover:notunderline">
                Skills
              </a>
              <a href="#services" className="hover:notunderline">
                Services
              </a>
              <a href="#projects" className="hover:notunderline">
                Projects
              </a>
              <a href="#contact" className="hover:notunderline">
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
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#hero" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="hover:underline" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#services" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#projects" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#skills" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#contact" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
        </div>
      )}
    </nav>
  );
}
