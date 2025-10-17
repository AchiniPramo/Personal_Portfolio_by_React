import React, { useState, useEffect } from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiGlobe,
  FiServer,
  FiDatabase,
  FiLayers,
  FiZap,
  FiCloud,
  FiTerminal,
  FiGitBranch,
  FiMonitor,
  FiSmartphone,
  FiShield,
} from "react-icons/fi";
import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden"
    >
      {/* Interactive Mouse Follower */}
      <div
        className="absolute pointer-events-none w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating code particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          "</div>", "{ }", "=>", "const", "function", "<Component>", "import", "export"
        ].map((code, i) => (
          <div
            key={i}
            className="absolute text-gray-400/30 dark:text-gray-600/30 font-mono text-sm animate-float-code-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center lg:text-left space-y-8">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin opacity-75 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 dark:ring-zinc-800/50 backdrop-blur-sm">
                <img
                  src="/profile.jpg"
                  alt="Achini Pramodhya"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Floating tech icons around profile */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FiCode className="text-white text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce animation-delay-500">
                <FiTerminal className="text-white text-xl" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                Achini Pramodhya
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                Creative Fullstack Developer
              </p>

              <p className="max-w-lg text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                🌟 Crafting digital magic from code to cloud! I blend creativity with cutting-edge tech
                to build fullstack solutions that captivate users and scale effortlessly.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6">
              {[
                { icon: FiGithub, href: "https://github.com/AchiniPramo", label: "GitHub" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/achini-pramodhya", label: "LinkedIn" },
                { icon: FiMail, href: "mailto:achini@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative p-4 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="pt-4">
              <a
                href="/cv.pdf"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <FiDownload className="text-xl group-hover:rotate-12 transition-transform" />
                Download Resume
                <FiZap className="text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="space-y-8">
           <div className="text-center lg:text-left">
             <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
               🛠️ Tech Superpowers
             </h3>
             <p className="text-lg text-gray-600 dark:text-gray-400">
               Where innovation meets implementation - turning wild ideas into reality!
             </p>
           </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: FiServer,
                  title: "Fullstack Wizardry",
                  description: "🚀 Building epic applications from database to UI with Java, Node.js, and cutting-edge frameworks.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "hover:shadow-blue-500/20",
                  technologies: ["Java", "Node.js", "React", "Spring Boot"]
                },
                {
                  icon: FiCloud,
                  title: "Cloud Architect",
                  description: "☁️ Deploying scalable solutions on AWS with Docker containers and automated pipelines.",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "hover:shadow-purple-500/20",
                  technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
                },
                {
                  icon: FiLayers,
                  title: "UI/UX Sorcerer",
                  description: "✨ Crafting pixel-perfect interfaces that users fall in love with using modern design tools.",
                  color: "from-pink-500 to-rose-500",
                  bgColor: "hover:shadow-pink-500/20",
                  technologies: ["React", "Figma", "Tailwind", "TypeScript"]
                },
                {
                  icon: FiDatabase,
                  title: "Data Maestro",
                  description: "📊 Designing efficient databases and optimizing queries for lightning-fast applications.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "hover:shadow-green-500/20",
                  technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
                }
              ].map((skill, index) => (
                <div
                  key={skill.title}
                  className={`group p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl ${skill.bgColor} transition-all duration-500 cursor-pointer border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <skill.icon className="text-white text-xl" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                      {skill.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 group-hover:bg-opacity-80 transition-all"
                        style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover effect line */}
                  <div className={`h-1 bg-gradient-to-r ${skill.color} rounded-full mt-4 transition-all duration-300 ${activeCard === index ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>

            {/* Fun Stats Section */}
             <div className="grid grid-cols-3 gap-4 pt-8">
               {[
                 { number: "50+", label: "Code Adventures", icon: FiCode },
                 { number: "3+", label: "Years Crafting", icon: FiGitBranch },
                 { number: "15+", label: "Tech Weapons", icon: FiZap }
               ].map((stat, index) => (
                 <div
                   key={stat.label}
                   className="text-center p-6 bg-gradient-to-br from-white/70 via-purple-50/30 to-pink-50/30 dark:from-zinc-900/70 dark:via-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200/20 dark:border-purple-800/20"
                   style={{ animationDelay: `${index * 200}ms` }}
                 >
                   <stat.icon className="text-3xl text-purple-600 mx-auto mb-3 animate-pulse" />
                   <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stat.number}</div>
                   <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                 </div>
               ))}
             </div>

            {/* Fun Status Badges */}
             <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
               {[
                 { text: "� Sri Lankan Dev", bg: "bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30", textColor: "text-blue-700 dark:text-blue-300" },
                 { text: "� Hiring Me? Let's Talk!", bg: "bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30", textColor: "text-green-700 dark:text-green-300" },
                 { text: "� Forever Student", bg: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30", textColor: "text-purple-700 dark:text-purple-300" },
                 { text: "�️ Code in Any Language!", bg: "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30", textColor: "text-orange-700 dark:text-orange-300" }
               ].map((badge, index) => (
                 <span
                   key={badge.text}
                   className={`px-5 py-3 ${badge.bg} ${badge.textColor} rounded-full font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-opacity-20 hover:border-opacity-40`}
                   style={{ animationDelay: `${index * 100}ms` }}
                 >
                   {badge.text}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes float-code-random {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-10px) translateX(5px) rotate(2deg); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(-5px) rotate(-2deg); opacity: 0.4; }
          75% { transform: translateY(-10px) translateX(3px) rotate(1deg); opacity: 0.5; }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        .animate-float-code-random { animation: float-code-random 8s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animation-delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}

