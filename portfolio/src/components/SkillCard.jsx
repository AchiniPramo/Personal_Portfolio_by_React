import React, { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";

export default function SkillCard({ icon, name, level, color, category, delay = 0 }) {
  const [ref, visible] = useReveal();
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay + 200);
      return () => clearTimeout(timer);
    }
  }, [visible, level, delay]);

  const gradientColor = color ?
    `from-[${color}] to-[${color}CC]` :
    category === "Frontend" ? "from-purple-500 to-pink-500" :
    category === "Backend" ? "from-blue-500 to-cyan-500" :
    category === "Database" ? "from-green-500 to-emerald-500" :
    category === "Cloud" ? "from-orange-500 to-red-500" :
    category === "DevOps" ? "from-cyan-500 to-blue-500" :
    category === "Tools" ? "from-gray-500 to-slate-500" :
    "from-indigo-500 to-purple-500";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal group ${
        visible ? "visible" : ""
      } bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 transition-all duration-500 hover:scale-105 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-tr ${gradientColor} text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
          style={{ filter: isHovered ? `drop-shadow(0 0 20px ${color || '#8B5CF6'}40)` : 'none' }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
              {name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {animatedLevel}%
              </span>
              {category && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-xs font-medium rounded-full text-gray-600 dark:text-gray-400">
                  {category}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="relative">
        <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-zinc-700 overflow-hidden shadow-inner">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${gradientColor} transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${animatedLevel}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {/* Pulsing glow */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientColor} blur-sm opacity-50 group-hover:opacity-75 transition-opacity`}
              style={{ width: `${animatedLevel}%` }}
            />
          </div>
        </div>

        {/* Skill level indicator */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span>Beginner</span>
          <span className={`font-medium transition-colors ${animatedLevel >= 75 ? 'text-green-600 dark:text-green-400' : animatedLevel >= 50 ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500'}`}>
            {animatedLevel >= 90 ? 'Expert' : animatedLevel >= 75 ? 'Advanced' : animatedLevel >= 50 ? 'Intermediate' : 'Beginner'}
          </span>
          <span>Expert</span>
        </div>
      </div>

      {/* Hover effect particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      )}

      {/* Category badge with glow */}
      {category && (
        <div className={`absolute top-4 right-4 px-2 py-1 bg-gradient-to-r ${gradientColor} text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg`}>
          {category}
        </div>
      )}
    </div>
  );
}
