import React, { useState, useEffect } from "react";
import SkillCard from "./SkillCard";
import { FiCode, FiServer, FiDatabase, FiLayers, FiCloud, FiZap, FiShield, FiSmartphone, FiMonitor, FiGitBranch } from "react-icons/fi";

const skills = [
  { name: "React", level: 95, icon: "⚛️", category: "Frontend", color: "#61DAFB" },
  { name: "TypeScript", level: 88, icon: "🟦", category: "Frontend", color: "#3178C6" },
  { name: "Next.js", level: 90, icon: "▲", category: "Frontend", color: "#000000" },
  { name: "Tailwind CSS", level: 92, icon: "🎨", category: "Frontend", color: "#06B6D4" },
  { name: "Node.js", level: 85, icon: "🟩", category: "Backend", color: "#339933" },
  { name: "Express.js", level: 82, icon: "🚂", category: "Backend", color: "#000000" },
  { name: "Java", level: 78, icon: "☕", category: "Backend", color: "#ED8B00" },
  { name: "Spring Boot", level: 75, icon: "🌱", category: "Backend", color: "#6DB33F" },
  { name: "MySQL", level: 80, icon: "🐬", category: "Database", color: "#4479A1" },
  { name: "MongoDB", level: 78, icon: "🍃", category: "Database", color: "#47A248" },
  { name: "PostgreSQL", level: 76, icon: "🐘", category: "Database", color: "#336791" },
  { name: "AWS", level: 72, icon: "☁️", category: "Cloud", color: "#FF9900" },
  { name: "Docker", level: 80, icon: "🐳", category: "DevOps", color: "#2496ED" },
  { name: "Git", level: 90, icon: "📚", category: "Tools", color: "#F05032" },
  { name: "Figma", level: 85, icon: "🎯", category: "Design", color: "#F24E1E" }
];

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "Tools", "Design"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
      {/* Interactive Background */}
      <div
        className="absolute pointer-events-none w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 dark:opacity-10 animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {i % 4 === 0 && <div className="w-16 h-16 border-2 border-purple-500 rotate-45" />}
            {i % 4 === 1 && <div className="w-12 h-12 bg-blue-500 rounded-full" />}
            {i % 4 === 2 && <div className="w-20 h-8 bg-cyan-500 rounded-lg" />}
            {i % 4 === 3 && <div className="w-10 h-10 border-2 border-pink-500 rounded-full" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <FiCode className="text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Fullstack Mastery</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 mb-6">
            Technical Expertise
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Mastering the complete development stack with cutting-edge technologies.
            From pixel-perfect interfaces to scalable backend architectures,
            I bring comprehensive skills to every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-zinc-800 shadow-md'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <SkillCard {...skill} delay={i * 50} />
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: FiCode, value: "15+", label: "Technologies", color: "from-blue-500 to-cyan-500" },
            { icon: FiLayers, value: "50+", label: "Projects", color: "from-purple-500 to-pink-500" },
            { icon: FiGitBranch, value: "1000+", label: "Commits", color: "from-green-500 to-emerald-500" },
            { icon: FiZap, value: "3+", label: "Years Exp", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border border-gray-200/50 dark:border-zinc-700/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}>
                <stat.icon className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                  Development Philosophy
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I believe in creating technology that serves humanity. Every line of code should solve real problems,
                  every interface should delight users, and every system should scale gracefully.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Performance First",
                    "User-Centric Design",
                    "Scalable Architecture",
                    "Clean Code",
                    "Continuous Learning"
                  ].map((principle, index) => (
                    <span
                      key={principle}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {principle}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Animated tech stack visualization */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: FiMonitor, label: "Frontend", color: "text-purple-500" },
                    { icon: FiServer, label: "Backend", color: "text-blue-500" },
                    { icon: FiDatabase, label: "Database", color: "text-green-500" },
                    { icon: FiCloud, label: "Cloud", color: "text-cyan-500" },
                    { icon: FiShield, label: "Security", color: "text-red-500" },
                    { icon: FiSmartphone, label: "Mobile", color: "text-pink-500" }
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <item.icon className={`text-2xl ${item.color} mb-2 group-hover:scale-125 transition-transform`} />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting lines animation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M20 20 L50 20 L50 50 L80 50" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="animate-draw-path" />
                  <path d="M20 80 L50 80 L50 50" stroke="url(#lineGrad)" strokeWidth="2" fill="none" className="animate-draw-path animation-delay-500" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium animate-pulse">
              🚀 Open to Opportunities
            </span>
            <a
              href="https://github.com/AchiniPramo"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-medium shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes draw-path {
          from { stroke-dasharray: 0 100; }
          to { stroke-dasharray: 100 0; }
        }
        .animate-float-random { animation: float-random 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-draw-path { animation: draw-path 2s ease-out forwards; stroke-dasharray: 0 100; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}
