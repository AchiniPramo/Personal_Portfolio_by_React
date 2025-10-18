import React, { useState } from "react";
import useReveal from "../hooks/useReveal";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCloud,
  FiTerminal,
  FiGitBranch,
  FiZap
} from "react-icons/fi";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const revealRef = useReveal();

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      ref={revealRef}
      className="relative py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950 overflow-hidden"
    >
      {/* Interactive Background */}
      <div
        className="absolute pointer-events-none w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 dark:opacity-10 animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {i % 3 === 0 && (
              <div className="w-16 h-16 border-2 border-purple-500 rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-12 h-12 bg-blue-500 rounded-full" />
            )}
            {i % 3 === 2 && <div className="w-20 h-8 bg-cyan-500 rounded-lg" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-xl mb-8 border border-purple-200/50 dark:border-purple-800/50">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
              <FiCode className="text-white text-lg" />
            </div>
            <span className="text-sm font-bold text-purple-700 dark:text-purple-300 tracking-wide">
              ABOUT ME
            </span>
          </div>

          {/* Animated Name Reveal */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 blur-2xl opacity-20 animate-pulse" />
            <h1 className="relative text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-fade-in-up mb-4 tracking-tight">
              ACHINI
            </h1>
            <h2 className="relative text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 animate-fade-in-up animation-delay-300 tracking-wide">
              PRAMODHYA
            </h2>
          </div>

          {/* Creative Bio Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                    <FiZap className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Innovator</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  A passionate fullstack developer who transforms complex ideas into elegant digital solutions.
                  I craft scalable web applications that not only function flawlessly but also deliver
                  unforgettable user experiences through cutting-edge technologies.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                    <FiTerminal className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Explorer</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From React ecosystems to Node.js architectures, I continuously push boundaries.
                  Currently diving deep into AI integration, advanced web technologies, and cloud-native
                  solutions to stay ahead of the innovation curve.
                </p>
              </div>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50">
                <div className="text-center">
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                    💡 My Philosophy
                  </h3>
                  <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                      I believe in the transformative power of technology to solve real-world problems and enhance human experiences.
                      Every line of code I write is an opportunity to create something meaningful, something that makes a difference.
                    </p>
                    <p className="font-semibold text-purple-600 dark:text-purple-400">
                      "Code is poetry in motion. Design is emotion made tangible. Innovation is the bridge between imagination and reality."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Expertise Grid */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Core Expertise
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mastering the full spectrum of modern development technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiCode,
                title: "Frontend Mastery",
                description: "React, Next.js, TypeScript, Tailwind CSS, Vue.js",
                skills: ["Component Architecture", "Performance Optimization", "UI/UX Implementation"],
                color: "from-blue-500 to-cyan-500",
                glowColor: "from-blue-400/20 to-cyan-400/20"
              },
              {
                icon: FiServer,
                title: "Backend Engineering",
                description: "Node.js, Express, Java, Spring Boot, Python",
                skills: ["RESTful APIs", "Microservices", "Authentication"],
                color: "from-purple-500 to-pink-500",
                glowColor: "from-purple-400/20 to-pink-400/20"
              },
              {
                icon: FiDatabase,
                title: "Database Architecture",
                description: "MySQL, MongoDB, PostgreSQL, Redis",
                skills: ["Schema Design", "Query Optimization", "Data Modeling"],
                color: "from-green-500 to-emerald-500",
                glowColor: "from-green-400/20 to-emerald-400/20"
              },
              {
                icon: FiCloud,
                title: "Cloud & DevOps",
                description: "AWS, Docker, Kubernetes, CI/CD",
                skills: ["Infrastructure as Code", "Auto-scaling", "Monitoring"],
                color: "from-orange-500 to-red-500",
                glowColor: "from-orange-400/20 to-red-400/20"
              }
            ].map((expertise, index) => (
              <div
                key={expertise.title}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${expertise.glowColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50 dark:border-zinc-700/50 group-hover:border-purple-300/50 dark:group-hover:border-purple-600/50">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${expertise.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <expertise.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {expertise.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {expertise.description}
                  </p>

                  <div className="space-y-2">
                    {expertise.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span className="text-xs text-gray-500 dark:text-gray-500">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${expertise.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: '0%',
                          animation: `progress-fill 2s ease-out ${index * 0.3}s forwards`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Stats Section */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Journey in Numbers
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Quantifying the impact of passion and persistence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: FiCode,
                value: "50+",
                label: "Projects Built",
                description: "From concept to deployment",
                color: "from-blue-500 to-cyan-500",
                progress: 85
              },
              {
                icon: FiLayers,
                value: "3+",
                label: "Years Experience",
                description: "Continuous learning journey",
                color: "from-purple-500 to-pink-500",
                progress: 75
              },
              {
                icon: FiZap,
                value: "15+",
                label: "Technologies",
                description: "Tools in my arsenal",
                color: "from-green-500 to-emerald-500",
                progress: 90
              },
              {
                icon: FiGitBranch,
                value: "1000+",
                label: "Git Commits",
                description: "Lines of dedication",
                color: "from-orange-500 to-red-500",
                progress: 95
              }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated Counter Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center border border-gray-200/50 dark:border-zinc-700/50 group-hover:border-purple-300/50 dark:group-hover:border-purple-600/50">
                  <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-r ${stat.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <stat.icon className="text-white text-3xl" />
                  </div>

                  <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    {stat.value}
                  </div>

                  <div className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {stat.description}
                  </div>

                  {/* Progress Ring */}
                  <div className="relative w-16 h-16 mx-auto">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        strokeDasharray={`${stat.progress}, 100`}
                        className="transition-all duration-1000 ease-out"
                        style={{ strokeDashoffset: 0 }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                          <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">{stat.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Vision & Values */}
        <div className="relative mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
              Vision & Values
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Beyond code: A commitment to excellence, innovation, and meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
                    <FiZap className="text-white text-2xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Mission</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  To architect digital solutions that transcend expectations. I craft experiences that don't just
                  work—they inspire, they transform, they create lasting value in an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                    <FiCode className="text-white text-2xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Vision</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pioneering the future of web development by seamlessly blending cutting-edge technology with
                  human-centered design. I envision a world where digital experiences are as intuitive as they are powerful.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50 hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
                    <FiLayers className="text-white text-2xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Values</h4>
                </div>
                <div className="space-y-3">
                  {[
                    "Innovation over imitation",
                    "Quality over quantity",
                    "Collaboration over competition",
                    "Learning over knowing"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center">
          {/* Social Links with Enhanced Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/AchiniPramo",
                  label: "GitHub",
                  color: "from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black",
                  description: "View my code repositories"
                },
                {
                  icon: FiLinkedin,
                  href: "https://linkedin.com/in/achini-pramodhya",
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900",
                  description: "Connect professionally"
                },
                {
                  icon: FiMail,
                  href: "mailto:achini@gmail.com",
                  label: "Email",
                  color: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
                  description: "Send me a message"
                }
              ].map(({ icon: Icon, href, label, color, description }) => (
                <div key={label} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-r ${color} text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group`}
                  >
                    <Icon className="text-3xl" />
                    <div className="text-center">
                      <div className="font-bold text-sm">{label}</div>
                      <div className="text-xs opacity-90 mt-1">{description}</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Status & CTA */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-zinc-700/50">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur animate-pulse" />
                    <span className="relative px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-lg font-bold shadow-lg flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      Available for Projects
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-center sm:text-left">
                    Ready to bring your ideas to life
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/cv.pdf"
                    download
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-bold shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
                  >
                    <FiDownload className="text-lg group-hover:animate-bounce" />
                    Download Resume
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all hover:scale-105 shadow-lg"
                  >
                    <FiMail className="text-lg" />
                    Let's Talk
                    <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes float-random {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }
        .animate-float-random {
          animation: float-random 6s ease-in-out infinite;
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
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        @keyframes progress-fill {
          0% {
            width: 0%;
          }
          100% {
            width: var(--progress-width);
          }
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}