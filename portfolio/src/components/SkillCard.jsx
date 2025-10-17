import React, { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";

export default function SkillCard({ icon, name, level, color, category, delay = 0 }) {
  const [ref, visible] = useReveal();
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (visible) {
      const newParticles = [...Array(30)].map((_, i) => ({
        id: i,
        angle: (i * 360) / 30,
        distance: 80 + Math.random() * 40,
        speed: 0.5 + Math.random() * 1.5,
        size: 2 + Math.random() * 3
      }));
      setParticles(newParticles);
    }
  }, [visible]);

  const gradientColor = color ?
    `from-[${color}] to-[${color}CC]` :
    category === "Frontend" ? "from-purple-500 to-pink-500" :
    category === "Backend" ? "from-blue-500 to-cyan-500" :
    category === "Database" ? "from-green-500 to-emerald-500" :
    category === "Cloud" ? "from-orange-500 to-red-500" :
    category === "DevOps" ? "from-cyan-500 to-blue-500" :
    category === "Tools" ? "from-gray-500 to-slate-500" :
    "from-indigo-500 to-purple-500";

  const getCategoryColor = () => {
    switch(category) {
      case "Frontend": return "#a855f7";
      case "Backend": return "#3b82f6";
      case "Database": return "#10b981";
      case "Cloud": return "#f97316";
      case "DevOps": return "#06b6d4";
      case "Tools": return "#6b7280";
      default: return color || "#8b5cf6";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal relative ${visible ? "visible" : ""} flex flex-col items-center justify-center py-12 px-6`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isHovered && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main orb container */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        {/* Outer rotating ring */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-dashed opacity-30"
          style={{
            borderColor: getCategoryColor(),
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.05s linear'
          }}
        />

        {/* Middle ring */}
        <div 
          className="absolute inset-4 rounded-full border border-dashed opacity-20"
          style={{
            borderColor: getCategoryColor(),
            transform: `rotate(${-rotation * 1.5}deg)`,
            transition: 'transform 0.05s linear'
          }}
        />

        {/* Orbiting particles */}
        {particles.map((particle) => {
          const angle = (particle.angle + rotation * particle.speed) * (Math.PI / 180);
          const x = Math.cos(angle) * particle.distance;
          const y = Math.sin(angle) * particle.distance;
          
          return (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: getCategoryColor(),
                boxShadow: `0 0 ${particle.size * 3}px ${getCategoryColor()}`,
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                opacity: isHovered ? 0.8 : 0.4,
                transition: 'opacity 0.5s ease'
              }}
            />
          );
        })}

        {/* Central orb */}
        <div className="relative z-10">
          {/* Pulsing glow layers */}
          <div 
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientColor} blur-3xl opacity-40 group-hover:opacity-60 animate-pulse`}
            style={{ 
              transform: 'scale(1.8)',
              animationDuration: '3s'
            }}
          />
          <div 
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientColor} blur-2xl opacity-50 animate-pulse`}
            style={{ 
              transform: 'scale(1.5)',
              animationDuration: '2s',
              animationDelay: '0.5s'
            }}
          />

          {/* Main sphere */}
          <div
            className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-700`}
            style={{
              transform: isHovered ? 'scale(1.15) rotateY(20deg)' : 'scale(1)',
              boxShadow: isHovered 
                ? `0 20px 60px ${getCategoryColor()}80, 0 0 100px ${getCategoryColor()}40`
                : `0 10px 40px ${getCategoryColor()}60`
            }}
          >
            {/* Sphere texture */}
            <div className="absolute inset-0 opacity-20">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent"
                style={{ transform: `rotate(${rotation * 0.5}deg)` }}
              />
            </div>

            {/* Animated light rays */}
            {isHovered && [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  opacity: 0.3
                }}
              >
                <div 
                  className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-white via-white/50 to-transparent"
                  style={{
                    transform: 'translateX(-50%) translateY(-50%)',
                    animation: 'pulse 2s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              </div>
            ))}

            {/* Icon */}
            <div 
              className="relative z-10 text-6xl text-white filter drop-shadow-lg"
              style={{
                transform: isHovered ? 'scale(1.1) rotateZ(10deg)' : 'scale(1)',
                transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
            >
              {icon}
            </div>

            {/* Shine effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"
              style={{
                transform: `translate(${isHovered ? '100%' : '-100%'}, ${isHovered ? '100%' : '-100%'})`,
                transition: 'transform 1s ease-in-out'
              }}
            />
          </div>
        </div>

        {/* Energy rings on hover */}
        {isHovered && [...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 opacity-0 animate-ping"
            style={{
              borderColor: getCategoryColor(),
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Skill name with holographic effect */}
      <div className="relative text-center mb-4 group">
        <h3 
          className="text-4xl font-black relative inline-block"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        >
          <span 
            className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
            style={{
              filter: isHovered ? `drop-shadow(0 0 20px ${getCategoryColor()})` : 'none',
              backgroundSize: '200% 200%',
              animation: isHovered ? 'gradient-shift 3s ease infinite' : 'none'
            }}
          >
            {name}
          </span>
          
          {/* Glitch effect */}
          {isHovered && (
            <>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent opacity-70"
                style={{
                  transform: 'translate(-2px, -2px)',
                  mixBlendMode: 'screen'
                }}
              >
                {name}
              </span>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent opacity-70"
                style={{
                  transform: 'translate(2px, 2px)',
                  mixBlendMode: 'screen'
                }}
              >
                {name}
              </span>
            </>
          )}
        </h3>

        {/* Underline animation */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-500"
          style={{
            width: isHovered ? '100%' : '0%',
            boxShadow: isHovered ? `0 0 20px ${getCategoryColor()}` : 'none'
          }}
        />
      </div>

      {/* Floating category badge */}
      {category && (
        <div className="relative">
          {/* Badge glow */}
          <div 
            className={`absolute inset-0 blur-xl bg-gradient-to-r ${gradientColor} opacity-0 transition-opacity duration-500`}
            style={{ opacity: isHovered ? 0.6 : 0 }}
          />
          
          {/* Badge */}
          <div 
            className={`relative px-8 py-3 bg-gradient-to-r ${gradientColor} rounded-full shadow-lg backdrop-blur-sm border border-white/30 transform transition-all duration-500`}
            style={{
              transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
              boxShadow: isHovered ? `0 10px 40px ${getCategoryColor()}60` : '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            <div className="flex items-center gap-3">
              {/* Animated indicator */}
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                <div className="absolute inset-0 rounded-full bg-white" />
              </div>
              
              <span className="text-white font-bold text-base uppercase tracking-widest">
                {category}
              </span>
              
              {/* Animated indicator */}
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" style={{ animationDelay: '500ms' }} />
                <div className="absolute inset-0 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connection lines to edges */}
      {isHovered && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id={`lineGrad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={getCategoryColor()} stopOpacity="0" />
              <stop offset="50%" stopColor={getCategoryColor()} stopOpacity="0.8" />
              <stop offset="100%" stopColor={getCategoryColor()} stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="50%" y1="50%" x2="0%" y2="0%" stroke={`url(#lineGrad-${name})`} strokeWidth="2" className="animate-pulse" />
          <line x1="50%" y1="50%" x2="100%" y2="0%" stroke={`url(#lineGrad-${name})`} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <line x1="50%" y1="50%" x2="0%" y2="100%" stroke={`url(#lineGrad-${name})`} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <line x1="50%" y1="50%" x2="100%" y2="100%" stroke={`url(#lineGrad-${name})`} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        </svg>
      )}

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}