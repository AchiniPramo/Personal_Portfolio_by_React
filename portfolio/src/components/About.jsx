import React, { useState, useEffect, useRef } from "react";

// SVG Icons as components
const Download = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Code = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Server = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const Database = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Layers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const Zap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const Cloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const Terminal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const GitBranch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSkill, setActiveSkill] = useState(0);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      icon: Server,
      title: "Fullstack Wizardry",
      description: "Building epic applications from database to UI with Java, Node.js, and cutting-edge frameworks.",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      technologies: ["Java", "Node.js", "React", "Spring Boot"],
      gradient: "bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud Architect",
      description: "Deploying scalable solutions on AWS with Docker containers and automated pipelines.",
      color: "from-purple-500 via-pink-500 to-rose-500",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      gradient: "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20"
    },
    {
      icon: Layers,
      title: "UI/UX Sorcerer",
      description: "Crafting pixel-perfect interfaces that users fall in love with using modern design tools.",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      technologies: ["React", "Figma", "Tailwind", "TypeScript"],
      gradient: "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20"
    },
    {
      icon: Database,
      title: "Data Maestro",
      description: "Designing efficient databases and optimizing queries for lightning-fast applications.",
      color: "from-green-500 via-emerald-500 to-teal-500",
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
      gradient: "bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${10 + particle.id}s infinite ease-in-out`,
              animationDelay: `${particle.id * 0.2}s`
            }}
          />
        ))}

        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `perspective(500px) rotateX(60deg) translateZ(${scrollY * 0.1}px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section with Floating Profile */}
        <div className="flex flex-col items-center mb-32">
          {/* 3D Floating Profile */}
          <div 
            className="relative mb-12"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotateY(${mousePosition.x * 10 - 5}deg) rotateX(${mousePosition.y * 10 - 5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="relative w-80 h-80">
              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse" />
              <div className="absolute inset-8 rounded-full border-2 border-pink-500/30 animate-spin-slow" style={{ animationDelay: '1s' }} />
              
              {/* Profile Image */}
              <div className="absolute inset-12 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Achini Pramodhya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent" />
              </div>

              {/* Orbiting Icons */}
              {[
                { icon: Code, angle: 0, color: 'from-blue-500 to-cyan-500' },
                { icon: Terminal, angle: 90, color: 'from-purple-500 to-pink-500' },
                { icon: GitBranch, angle: 180, color: 'from-green-500 to-emerald-500' },
                { icon: Zap, angle: 270, color: 'from-orange-500 to-yellow-500' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-16 h-16"
                  style={{
                    transform: `rotate(${item.angle + scrollY * 0.1}deg) translateX(180px) rotate(-${item.angle + scrollY * 0.1}deg)`,
                    marginLeft: '-32px',
                    marginTop: '-32px'
                  }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform`}>
                    <item.icon className="text-white text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Name and Title with Glitch Effect */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient relative">
              <span className="relative inline-block">
                Achini Pramodhya
                <span className="absolute inset-0 text-blue-500 opacity-50 animate-glitch">Achini Pramodhya</span>
                <span className="absolute inset-0 text-pink-500 opacity-50 animate-glitch-reverse">Achini Pramodhya</span>
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <p className="text-2xl text-gray-300 font-light tracking-wider">Creative Fullstack Developer</p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
              Crafting digital magic from code to cloud! I blend creativity with cutting-edge tech
              to build fullstack solutions that captivate users and scale effortlessly.
            </p>
          </div>

          {/* Social Links - Floating Bubbles */}
          <div className="flex gap-6 mb-8">
            {[
              { icon: Github, href: "https://github.com/AchiniPramo", label: "GitHub", color: 'from-gray-700 to-gray-900' },
              { icon: Linkedin, href: "https://linkedin.com/in/achini-pramodhya", label: "LinkedIn", color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: "mailto:achini@gmail.com", label: "Email", color: 'from-purple-600 to-pink-600' }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group relative p-5 rounded-2xl bg-gradient-to-br ${color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                <Icon size={28} className="text-white relative z-10" />
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
              </a>
            ))}
          </div>

          {/* Download Button */}
          <a
            href="/cv.pdf"
            download
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="text-xl group-hover:animate-bounce" />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Skills - Interactive Sphere Layout */}
        <div className="relative">
          <h3 className="text-5xl font-black text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Tech Arsenal
          </h3>

          {/* Central Display */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Skill Orbits */}
            {skills.map((skill, index) => {
              const angle = (index * 90) + scrollY * 0.05;
              const radius = 250;
              const isActive = activeSkill === index;
              
              return (
                <div key={index}>
                  {/* Orbit Dot */}
                  <div
                    className="absolute top-1/2 left-1/2 cursor-pointer"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                      marginLeft: '-40px',
                      marginTop: '-40px',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveSkill(index)}
                    onMouseEnter={() => setActiveSkill(index)}
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/20 ${isActive ? 'scale-125' : 'scale-100'}`}>
                      <skill.icon className="text-white text-3xl" />
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent animate-ping" />
                    )}
                  </div>

                  {/* Connecting Line to Center */}
                  <div
                    className="absolute top-1/2 left-1/2 h-0.5 origin-left transition-all duration-300"
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${angle}deg)`,
                      background: isActive ? `linear-gradient(to right, transparent, ${index === 0 ? '#3b82f6' : index === 1 ? '#a855f7' : index === 2 ? '#f97316' : '#10b981'})` : 'transparent'
                    }}
                  />
                </div>
              );
            })}

            {/* Center Content Display */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]">
              <div className={`p-8 rounded-3xl ${skills[activeSkill].gradient} backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${skills[activeSkill].color} shadow-lg`}>
                    {React.createElement(skills[activeSkill].icon, { className: "text-white text-3xl" })}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{skills[activeSkill].title}</h4>
                </div>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {skills[activeSkill].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills[activeSkill].technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30 hover:bg-white/30 transition-all"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Orbit Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-white/10" />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-32 grid grid-cols-3 gap-8">
          {[
            { number: "50+", label: "Projects Completed", icon: Code, color: 'from-blue-500 to-cyan-500' },
            { number: "3+", label: "Years Experience", icon: GitBranch, color: 'from-purple-500 to-pink-500' },
            { number: "15+", label: "Technologies", icon: Zap, color: 'from-orange-500 to-yellow-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <stat.icon className={`text-5xl mx-auto mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
            </div>
          ))}
        </div>

        {/* Status Badges - Floating at Bottom */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {[
            { text: "🌏 Sri Lankan Dev", color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/50', textColor: 'text-blue-300' },
            { text: "💼 Open to Opportunities", color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/50', textColor: 'text-green-300' },
            { text: "📚 Forever Learning", color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/50', textColor: 'text-purple-300' },
            { text: "🗣️ Multilingual Coder", color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/50', textColor: 'text-orange-300' }
          ].map((badge, index) => (
            <span
              key={badge.text}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${badge.color} backdrop-blur-sm border ${badge.border} ${badge.textColor} font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-2px, -2px); }
        }
        @keyframes glitch-reverse {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          75% { transform: translate(2px, 2px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-glitch { animation: glitch 0.3s infinite; }
        .animate-glitch-reverse { animation: glitch-reverse 0.3s infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}