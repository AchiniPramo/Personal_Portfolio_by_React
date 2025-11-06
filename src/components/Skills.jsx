import React, { useState, useEffect } from "react";

// Icon Components (replacing react-icons/fi)
const FiTarget = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const skills = [
  {
    name: "React",
    level: 95,
    icon: "⚛️",
    category: "Frontend",
    color: "#61DAFB"
  },
  {
    name: "TypeScript",
    level: 88,
    icon: "🟦",
    category: "Frontend",
    color: "#3178C6"
  },
  {
    name: "Next.js",
    level: 90,
    icon: "▲",
    category: "Frontend",
    color: "#000000"
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: "🎨",
    category: "Frontend",
    color: "#06B6D4"
  },
  {
    name: "Node.js",
    level: 85,
    icon: "🟩",
    category: "Backend",
    color: "#339933"
  },
  {
    name: "Express.js",
    level: 82,
    icon: "🚂",
    category: "Backend",
    color: "#000000"
  },
  {
    name: "Java",
    level: 78,
    icon: "☕",
    category: "Backend",
    color: "#ED8B00"
  },
  {
    name: "Spring Boot",
    level: 75,
    icon: "🌱",
    category: "Backend",
    color: "#6DB33F"
  },
  {
    name: "MySQL",
    level: 80,
    icon: "🐬",
    category: "Database",
    color: "#4479A1"
  },
  {
    name: "MongoDB",
    level: 78,
    icon: "🍃",
    category: "Database",
    color: "#47A248"
  },
  {
    name: "PostgreSQL",
    level: 76,
    icon: "🐘",
    category: "Database",
    color: "#336791"
  },
  { name: "AWS", level: 72, icon: "☁️", category: "Cloud", color: "#FF9900" },
  {
    name: "Docker",
    level: 80,
    icon: "🐳",
    category: "DevOps",
    color: "#2496ED"
  },
  { name: "Git", level: 90, icon: "📚", category: "Tools", color: "#F05032" },
  { name: "Figma", level: 85, icon: "🎯", category: "Design", color: "#F24E1E" }
];

// Triple the skills for seamless loop
const duplicatedSkills = [...skills, ...skills, ...skills];

const SkillIcon = ({ name }) => {
  const icons = {
    React: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2C6.5 8 2 10 2 12s4 4 10 10c6-6 10-8 10-10s-4-4-10-10z" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)" fillOpacity="0.3" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.412l-.725 8.219 6.937 1.855-.074-8.572 2.426-.414v-2.62h-2.639l.082-2.576z"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2l8 6v8l-8 6-8-6v-8l8-6z" />
        <path d="M12 8l-4 3v4l4 3 4-3v-4l-4-3z" fillOpacity="0.4" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M6 12c0-2.5 1.5-5 4-6 1-0.3 1.5 0.2 1.5 1s-0.3 1.2-1 1.5c-1.5 0.5-2.5 1.8-2.5 3.5 0 1.7 1 3 2.5 3.5 0.7 0.3 1 0.8 1 1.5s-0.5 1.3-1.5 1c-2.5-1-4-3.5-4-6z" />
        <path d="M18 6c0-0.8 0.7-1.5 1.5-1.5S21 5.2 21 6v12c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5V6z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2m0 2l8 4v8l-8 4-8-4v-8l8-4z" />
        <circle cx="12" cy="12" r="3" fillOpacity="0.5" />
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <rect x="3" y="5" width="18" height="14" rx="2" fillOpacity="0.3" />
        <path d="M7 12h10M12 8v8" strokeWidth="1.5" stroke="currentColor" fill="none" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M9 3c-2 0-2 2-2 4s2 2 2 4-2 2-2 4 2 4 4 4h6c2 0 4-2 4-4s-2-2-2-4 2-2 2-4-2-4-4-4h-8z" />
        <circle cx="12" cy="12" r="1.5" fillOpacity="0.4" />
      </svg>
    ),
    "Spring Boot": (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <ellipse cx="12" cy="8" rx="5" ry="3" />
        <path d="M7 8v6c0 1.66 2.24 3 5 3s5-1.34 5-3v-6" fillOpacity="0.5" />
        <ellipse cx="12" cy="17" rx="5" ry="3" fillOpacity="0.3" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M6 9l6-5 6 5v6l-6 5-6-5v-6zm6-2l-4 3v4l4 3 4-3v-4l-4-3z" />
        <circle cx="12" cy="12" r="1.5" fillOpacity="0.4" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <rect x="3" y="8" width="3" height="3" />
        <rect x="8" y="8" width="3" height="3" />
        <rect x="13" y="8" width="3" height="3" />
        <rect x="18" y="8" width="3" height="3" />
        <rect x="8" y="12" width="3" height="3" />
        <rect x="13" y="12" width="3" height="3" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fillOpacity="0.4" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" fillOpacity="0.6" />
        <circle cx="8" cy="16" r="2.5" fillOpacity="0.6" />
        <circle cx="16" cy="16" r="2.5" fillOpacity="0.4" />
      </svg>
    ),
  };

  return icons[name] || <div className="w-full h-full" />;
};

function SkillCard({ icon, name, category, color }) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 2) % 360);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getCategoryColor = () => {
    switch (category) {
      case "Frontend":
        return { glow: "#7c3aed", light: "rgba(124, 58, 237, 0.15)" };
      case "Backend":
        return { glow: "#06b6d4", light: "rgba(6, 182, 212, 0.15)" };
      case "Database":
        return { glow: "#10b981", light: "rgba(16, 185, 129, 0.15)" };
      case "Cloud":
        return { glow: "#f97316", light: "rgba(249, 115, 22, 0.15)" };
      case "DevOps":
        return { glow: "#ec4899", light: "rgba(236, 72, 153, 0.15)" };
      case "Tools":
        return { glow: "#6b7280", light: "rgba(107, 114, 128, 0.15)" };
      case "Design":
        return { glow: "#8b5cf6", light: "rgba(139, 92, 246, 0.15)" };
      default:
        return { glow: "#7c3aed", light: "rgba(124, 58, 237, 0.15)" };
    }
  };

  const colors = getCategoryColor();

  return (
    <div
      className="relative flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 h-28 sm:h-32 md:h-36"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating border */}
      <div
        className="absolute inset-0 rounded-xl border-2 border-dashed opacity-20 transition-opacity duration-300"
        style={{
          borderColor: colors.glow,
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear',
          opacity: isHovered ? 0.4 : 0.2
        }}
      />

      {/* Glow background */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-500"
        style={{
          background: colors.light,
          opacity: isHovered ? 1 : 0,
          filter: `blur(20px)`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Main card */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200/50 dark:border-zinc-700/50 bg-white/80 dark:bg-zinc-900/80 transition-all duration-300"
        style={{
          boxShadow: isHovered
            ? `inset 0 1px 2px rgba(255,255,255,0.1), 0 0 30px ${colors.glow}40, 0 0 60px ${colors.glow}20`
            : `inset 0 1px 2px rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.1)`,
          transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)'
        }}
      >
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-2 px-3 sm:px-4">
          {/* Icon */}
          <div
            className="transition-all duration-300 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            style={{
              color: colors.glow,
              transform: isHovered ? 'scale(1.2) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
              filter: `drop-shadow(0 0 ${isHovered ? 12 : 4}px ${colors.glow}80)`
            }}
          >
            <SkillIcon name={name} />
          </div>

          {/* Name */}
          <span
            className="text-xs sm:text-sm md:text-base font-bold text-center leading-tight text-gray-800 dark:text-gray-100 transition-colors duration-300"
            style={{
              color: isHovered ? colors.glow : undefined
            }}
          >
            {name}
          </span>

          {/* Animated line */}
          <div
            className="h-0.5 rounded-full transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
              width: isHovered ? '80%' : '30%'
            }}
          />

          {/* Category badge */}
          <div
            className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all duration-300"
            style={{
              color: colors.glow,
              backgroundColor: `${colors.glow}15`,
              opacity: isHovered ? 1 : 0.7,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            {category}
          </div>
        </div>

        {/* Top gradient shine */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Corner accent */}
        <div 
          className="absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-300"
          style={{
            backgroundColor: colors.glow,
            opacity: isHovered ? 0.6 : 0.2,
            boxShadow: isHovered ? `0 0 10px ${colors.glow}` : 'none'
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 dark:opacity-10 animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 4 === 0 && (
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-purple-500 rotate-45" />
            )}
            {i % 4 === 1 && (
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-full" />
            )}
            {i % 4 === 2 && <div className="w-16 h-6 sm:w-20 sm:h-8 bg-cyan-500 rounded-lg" />}
            {i % 4 === 3 && (
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-pink-500 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        {/* Header */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/50 dark:to-pink-900/50 mb-4 sm:mb-6">
            <FiTarget className="text-indigo-600 dark:text-indigo-400" size={16} />
            <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 px-4">
            Advanced Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Professional expertise across modern technologies and frameworks
          </p>
        </div>
      </div>

      {/* Skills Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* First Row - Moving Right to Left */}
        <div className="relative overflow-hidden mb-8 sm:mb-12 group">
          <div
            className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            style={{
              animation: 'scroll-left 60s linear infinite',
              willChange: 'transform',
              width: 'max-content'
            }}
          >
            {duplicatedSkills.map((skill, i) => (
              <SkillCard key={`${skill.name}-${i}`} {...skill} />
            ))}
          </div>

          {/* Gradient fade edges - matching theme */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, var(--bg) 0%, var(--bg) 20%, transparent 100%)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, var(--bg) 0%, var(--bg) 20%, transparent 100%)`
            }}
          />
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="relative overflow-hidden group">
          <div
            className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            style={{
              animation: 'scroll-right 60s linear infinite',
              willChange: 'transform',
              width: 'max-content'
            }}
          >
            {duplicatedSkills.reverse().map((skill, i) => (
              <SkillCard key={`${skill.name}-row2-${i}`} {...skill} />
            ))}
          </div>

          {/* Gradient fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, var(--bg) 0%, var(--bg) 20%, transparent 100%)`
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, var(--bg) 0%, var(--bg) 20%, transparent 100%)`
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-random {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(5deg);
          }
          66% {
            transform: translateY(15px) rotate(-5deg);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Pause animation on hover */
        .group:hover > div {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}