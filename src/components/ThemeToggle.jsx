import React from 'react';
import useTheme from '../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        background: 'var(--surface)',
        color: 'var(--text)',
        border: '1px solid var(--primary)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <FiSun 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
          }`}
          style={{ color: 'var(--primary)' }}
        />
        <FiMoon 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
          style={{ color: 'var(--primary)' }}
        />
      </div>
    </button>
  );
}
