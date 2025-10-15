import React from "react";
import useReveal from "../hooks/useReveal";

export default function ServiceCard({ Icon, title, desc, accent }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      ref={ref}
      className={`reveal ${
        visible ? "visible" : ""
      } group relative p-6 rounded-3xl overflow-hidden transform-gpu`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: "1000px",
        transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)"
      }}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute inset-0 -z-20 opacity-40 blur-3xl transition-all duration-700 group-hover:opacity-70 group-hover:scale-110"
        style={{
          background: accent,
          transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)"
        }}
        aria-hidden
      />

      {/* Floating Particles */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce delay-200" />

      {/* Main Card */}
      <div className="relative h-[220px] rounded-3xl border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform-gpu group-hover:-translate-y-3 group-hover:rotate-y-2 group-hover:scale-105">

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full rounded-3xl bg-white/95 dark:bg-zinc-900/95" />
        </div>

        <div className="relative p-8 h-full flex flex-col">
          {/* Icon Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl transition-all duration-500 transform-gpu group-hover:scale-110 group-hover:rotate-12`}
                 style={{
                   background: accent,
                   boxShadow: isHovered ? `0 0 30px ${accent.replace('linear-gradient(90deg,', '').replace(')', '').split(',')[0].trim()}` : 'none'
                 }}>
              {Icon && <Icon className="transition-transform duration-300 group-hover:scale-110" />}
              {/* Icon Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300">
                {title}
              </h4>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
              {desc}
            </p>

            {/* Animated Progress Bar */}
            <div className="mt-6">
              <div className="w-full h-1 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isHovered ? '100%' : '20%',
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0.8)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Subtle Inner Shadow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)"
      }} />
    </div>
  );
}
