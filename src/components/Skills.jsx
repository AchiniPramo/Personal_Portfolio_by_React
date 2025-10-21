import React, { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import useTheme from "../hooks/useTheme";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCloud,
  FiZap,
  FiShield,
  FiSmartphone,
  FiMonitor,
  FiGitBranch
} from "react-icons/fi";

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

// Duplicate skills for seamless loop
const duplicatedSkills = [...skills, ...skills, ...skills];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
  "Design"
];

const SkillIcon = ({ name }) => {
  const icons = {
    React: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2C6.5 8 2 10 2 12s4 4 10 10c6-6 10-8 10-10s-4-4-10-10z" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" fillOpacity="0.3" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)" fillOpacity="0.3" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.412l-.725 8.219 6.937 1.855-.074-8.572 2.426-.414v-2.62h-2.639l.082-2.576z"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2l8 6v8l-8 6-8-6v-8l8-6z" />
        <path d="M12 8l-4 3v4l4 3 4-3v-4l-4-3z" fillOpacity="0.4" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M6 12c0-2.5 1.5-5 4-6 1-0.3 1.5 0.2 1.5 1s-0.3 1.2-1 1.5c-1.5 0.5-2.5 1.8-2.5 3.5 0 1.7 1 3 2.5 3.5 0.7 0.3 1 0.8 1 1.5s-0.5 1.3-1.5 1c-2.5-1-4-3.5-4-6z" />
        <path d="M18 6c0-0.8 0.7-1.5 1.5-1.5S21 5.2 21 6v12c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5V6z" />
        <path d="M12 4c0.8 0 1.5 0.7 1.5 1.5S12.8 7 12 7s-1.5-0.7-1.5-1.5S11.2 4 12 4z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2m0 2l8 4v8l-8 4-8-4v-8l8-4z" />
        <circle cx="12" cy="12" r="3" fillOpacity="0.5" />
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect x="3" y="5" width="18" height="14" rx="2" fillOpacity="0.3" />
        <path d="M7 12h10M12 8v8" strokeWidth="1.5" stroke="currentColor" fill="none" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M9 3c-2 0-2 2-2 4s2 2 2 4-2 2-2 4 2 4 4 4h6c2 0 4-2 4-4s-2-2-2-4 2-2 2-4-2-4-4-4h-8z" />
        <circle cx="12" cy="12" r="1.5" fillOpacity="0.4" />
      </svg>
    ),
    "Spring Boot": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <ellipse cx="12" cy="8" rx="5" ry="3" />
        <path d="M7 8v6c0 1.66 2.24 3 5 3s5-1.34 5-3v-6" fillOpacity="0.5" />
        <ellipse cx="12" cy="17" rx="5" ry="3" fillOpacity="0.3" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M6 9l6-5 6 5v6l-6 5-6-5v-6zm6-2l-4 3v4l4 3 4-3v-4l-4-3z" />
        <circle cx="12" cy="12" r="1.5" fillOpacity="0.4" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect x="3" y="8" width="3" height="3" />
        <rect x="8" y="8" width="3" height="3" />
        <rect x="13" y="8" width="3" height="3" />
        <rect x="18" y="8" width="3" height="3" />
        <rect x="8" y="12" width="3" height="3" />
        <rect x="13" y="12" width="3" height="3" />
        <rect x="18" y="12" width="3" height="3" />
        <rect x="13" y="16" width="3" height="3" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fillOpacity="0.4" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" fillOpacity="0.6" />
        <circle cx="8" cy="16" r="2.5" fillOpacity="0.6" />
        <circle cx="16" cy="16" r="2.5" fillOpacity="0.4" />
      </svg>
    ),
  };

  return icons[name] || <div className="w-8 h-8" />;
};

function SkillCard({ icon, name, color, category }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
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
        return { glow: "var(--primary)", light: "rgba(124, 58, 237, 0.1)" };
      case "Backend":
        return { glow: "var(--secondary)", light: "rgba(6, 182, 212, 0.1)" };
      case "Database":
        return { glow: "#10b981", light: "rgba(16, 185, 129, 0.1)" };
      case "Cloud":
        return { glow: "#f97316", light: "rgba(249, 115, 22, 0.1)" };
      case "DevOps":
        return { glow: "var(--accent)", light: "rgba(236, 72, 153, 0.1)" };
      case "Tools":
        return { glow: "var(--muted)", light: "rgba(107, 114, 128, 0.1)" };
      default:
        return { glow: "var(--primary)", light: "rgba(124, 58, 237, 0.1)" };
    }
  };

  const colors = getCategoryColor();

  return (
    <div
      className="relative flex-shrink-0 w-48 h-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating border */}
      <div
        className="absolute inset-0 rounded-xl border border-dashed opacity-20"
        style={{
          borderColor: colors.glow,
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear'
        }}
      />

      {/* Glow background */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-all duration-500"
        style={{
          background: colors.light,
          opacity: isHovered ? 1 : 0,
          filter: `blur(20px)`
        }}
      />

      {/* Main card */}
      <div
        className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm border transition-all duration-500 card"
        style={{
          boxShadow: isHovered
            ? `inset 0 1px 2px rgba(255,255,255,0.1), 0 0 30px ${colors.glow}40, 0 0 60px ${colors.glow}20`
            : `inset 0 1px 2px rgba(255,255,255,0.05), 0 0 20px ${colors.glow}20`,
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
        }}
      >
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-2.5 px-4">
          {/* Icon */}
          <div
            className="transition-all duration-500"
            style={{
              color: colors.glow,
              transform: isHovered ? 'scale(1.15)' : 'scale(1)',
              filter: `drop-shadow(0 0 ${isHovered ? 12 : 4}px ${colors.glow}80)`
            }}
          >
            <SkillIcon name={name} />
          </div>

          {/* Name */}
          <span 
            className="text-sm font-bold text-center leading-tight"
            style={{ color: 'var(--text)' }}
          >
            {name}
          </span>

          {/* Animated line */}
          <div
            className="h-0.5 rounded-full transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
              width: isHovered ? '100%' : '30%'
            }}
          />

          {/* Category */}
          <div
            className="text-[10px] font-semibold uppercase tracking-widest opacity-70 transition-opacity duration-500"
            style={{ color: colors.glow, opacity: isHovered ? 1 : 0.7 }}
          >
            {category}
          </div>
        </div>

        {/* Top gradient shine */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

export default function Skills() {
  const [theme] = useTheme();
  const isDark = theme === 'dark';

  const skills = [
    { icon: "React", name: "React", category: "Frontend" },
    { icon: "Tailwind", name: "Tailwind CSS", category: "Frontend" },
    { icon: "Node.js", name: "Node.js", category: "Backend" },
    { icon: "Python", name: "Python", category: "Backend" },
    { icon: "PostgreSQL", name: "PostgreSQL", category: "Database" },
    { icon: "Firebase", name: "Firebase", category: "Database" },
    { icon: "AWS", name: "AWS", category: "Cloud" },
    { icon: "Docker", name: "Docker", category: "DevOps" },
    { icon: "Git", name: "Git", category: "Tools" },
    { icon: "Webpack", name: "Webpack", category: "Tools" },
  ];

  const skills2 = [
    { icon: "Vue.js", name: "Vue.js", category: "Frontend" },
    { icon: "Next.js", name: "Next.js", category: "Frontend" },
    { icon: "Express", name: "Express.js", category: "Backend" },
    { icon: "Java", name: "Java", category: "Backend" },
    { icon: "MongoDB", name: "MongoDB", category: "Database" },
    { icon: "GraphQL", name: "GraphQL", category: "Database" },
    { icon: "Kubernetes", name: "Kubernetes", category: "Cloud" },
    { icon: "Jenkins", name: "Jenkins", category: "DevOps" },
    { icon: "VS Code", name: "VS Code", category: "Tools" },
    { icon: "Figma", name: "Figma", category: "Tools" },
  ];

  return (
    <div 
      className="w-screen min-h-screen overflow-x-hidden py-20 px-0"
      style={{ background: 'var(--bg)' }}
    >
      <div className="absolute inset-0 pointer-events-none">
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
              <div className="w-16 h-16 border-2 border-purple-500 rotate-45" />
            )}
            {i % 4 === 1 && (
              <div className="w-12 h-12 bg-blue-500 rounded-full" />
            )}
            {i % 4 === 2 && <div className="w-20 h-8 bg-cyan-500 rounded-lg" />}
            {i % 4 === 3 && (
              <div className="w-10 h-10 border-2 border-pink-500 rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="w-full mb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Advanced Skills
          </h1>
          <p 
            className="text-lg sm:text-xl"
            style={{ color: 'var(--muted)' }}
          >
            Professional expertise across modern technologies
          </p>
        </div>
      </div>

      {/* Scrolling Skills Animation */}
        <div className="w-full overflow-hidden mb-16">
          {/* First Row - Moving Right to Left */}
          <div className="w-screen overflow-hidden mb-12 group">
            <div
              className="flex gap-4 sm:gap-6 px-4"
              style={{
                animation: 'scroll-left 70s linear infinite',
                willChange: 'transform'
              }}
            >
              {duplicatedSkills.map((skill, i) => (
                <SkillCard key={`${skill.name}-${i}`} {...skill} />
              ))}
            </div>

            {/* Gradient fade edges */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r z-10 pointer-events-none" 
              style={{
                background: `linear-gradient(to right, var(--bg), rgba(0,0,0,0.5), transparent)`
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l z-10 pointer-events-none" 
              style={{
                background: `linear-gradient(to left, var(--bg), rgba(0,0,0,0.5), transparent)`
              }}
            />
          </div>

          {/* Second Row - Moving Left to Right */}
          <div className="w-screen overflow-hidden group relative">
            <div
              className="flex gap-4 sm:gap-6 px-4"
              style={{
                animation: 'scroll-right 70s linear infinite',
                willChange: 'transform'
              }}
            >
              {duplicatedSkills.map((skill, i) => (
                <SkillCard key={`${skill.name}-row2-${i}`} {...skill} />
              ))}
            </div>

            {/* Gradient fade edges */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r z-10 pointer-events-none" 
              style={{
                background: `linear-gradient(to right, var(--bg), rgba(0,0,0,0.5), transparent)`
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l z-10 pointer-events-none" 
              style={{
                background: `linear-gradient(to left, var(--bg), rgba(0,0,0,0.5), transparent)`
              }}
            />
          </div>
        </div>


<style jsx>{`
        @keyframes float-random {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes draw-path {
          from {
            stroke-dasharray: 0 100;
          }
          to {
            stroke-dasharray: 100 0;
          }
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .group:hover > div {
          animation-play-state: paused;
        }

        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-draw-path {
          animation: draw-path 2s ease-out forwards;
          stroke-dasharray: 0 100;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
