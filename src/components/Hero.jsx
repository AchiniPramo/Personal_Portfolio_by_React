import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiCode, FiDatabase, FiServer, FiLayers, FiZap, FiCloud } from "react-icons/fi";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const [ref, visible] = useReveal({ threshold: 0.12 });

  const techStack = [
    { icon: <FiServer className="text-blue-500" />, label: "Backend" },
    { icon: <FiDatabase className="text-green-500" />, label: "Database" },
    { icon: <FiLayers className="text-purple-500" />, label: "Frontend" },
    { icon: <FiCode className="text-red-500" />, label: "APIs" },
    { icon: <FiZap className="text-yellow-500" />, label: "Performance" },
    { icon: <FiCloud className="text-cyan-500" />, label: "Cloud" }
  ];

  return (
    <section
      id="hero"
      ref={ref}
      className={`reveal ${
        visible ? "visible" : ""
      } h-screen relative overflow-hidden flex items-center`}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-950 dark:via-blue-950 dark:to-purple-950" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 dark:via-zinc-900/60 to-transparent animate-shimmer" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
          <div className="space-y-8">
            {/* Text Content with Typewriter Effect */}
            <div className="space-y-4 portrait-center">
              <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 animate-fade-in-up">
                Welcome to my creative portfolio
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                Hi, I'm Achini Pramodhya
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient-x">
                  Fullstack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
                Crafting extraordinary digital experiences from concept to deployment.
                I bridge the gap between beautiful interfaces and powerful backend
                architectures, creating scalable solutions that delight users and
                drive business success.
              </p>
            </div>

            {/* Enhanced Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-600 portrait-justify-center">
              {techStack.map((tech, index) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-zinc-700/50 animate-slide-in"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {tech.icon}
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-800 portrait-justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium shadow-lg shadow-purple-500/25 transition-all hover:scale-105 hover:shadow-xl"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-300 dark:border-purple-600 hover:border-purple-500 dark:hover:border-purple-400 rounded-full font-medium transition-all hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                Let's Connect
              </a>
 {/* Social Links */}
            <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-400 animate-fade-in-up animation-delay-1000 portrait-justify-center">
              <a
                aria-label="GitHub"
                href="https://github.com/AchiniPramo"
                className="hover:text-purple-600 transition-colors hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/achini-pramodhya-24a555318/"
                className="hover:text-purple-600 transition-colors hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                aria-label="Email"
                href="#contact"
                className="hover:text-purple-600 transition-colors hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
            </div>

           
          {/* Creative Fullstack Visual */}
          <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] animate-fade-in-up animation-delay-600">
            {/* Layered Architecture Visualization */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
              {/* Database Layer */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-16 sm:w-56 sm:h-18 md:w-64 md:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg shadow-2xl animate-slide-up">
                <div className="flex items-center justify-center h-full">
                  <FiDatabase className="text-white text-2xl md:text-3xl mr-2" />
                  <span className="text-white font-bold text-sm md:text-base">Database Layer</span>
                </div>
              </div>

              {/* Backend Layer */}
              <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-54 h-18 sm:w-64 sm:h-22 md:w-72 md:h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-2xl animate-slide-up animation-delay-200">
                <div className="flex items-center justify-center h-full">
                  <FiServer className="text-white text-2xl md:text-3xl mr-2" />
                  <span className="text-white font-bold text-sm md:text-base">Backend Logic</span>
                </div>
              </div>

              {/* Frontend Layer */}
              <div className="absolute bottom-32 sm:bottom-40 md:bottom-44 left-1/2 transform -translate-x-1/2 w-60 h-20 sm:w-72 sm:h-24 md:w-80 md:h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-2xl animate-slide-up animation-delay-400">
                <div className="flex items-center justify-center h-full">
                  <FiLayers className="text-white text-2xl md:text-3xl mr-2" />
                  <span className="text-white font-bold text-sm md:text-base">Frontend UI</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <path d="M192 304 L192 280" stroke="url(#lineGradient)" strokeWidth="3" className="animate-draw-line" />
                <path d="M192 256 L192 232" stroke="url(#lineGradient)" strokeWidth="3" className="animate-draw-line animation-delay-200" />
              </svg>

              {/* Floating Code Snippets */}
              <div className="absolute top-10 left-10 animate-float-code bg-black/80 text-green-400 p-3 rounded-lg font-mono text-sm shadow-lg">
                <div>const app = express();</div>
                <div>app.listen(3000);</div>
              </div>
              <div className="absolute top-20 right-10 animate-float-code animation-delay-500 bg-black/80 text-blue-400 p-3 rounded-lg font-mono text-sm shadow-lg">
                <div>function Component() &#123;</div>
                <div>&nbsp;&nbsp;return <div>Hello</div>;</div>
                <div>&#125;</div>
              </div>
            </div>

            {/* Animated Orbiting Icons */}
            <div className="absolute inset-0 animate-spin-slow">
              <FiCode className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-red-500" />
            </div>
            <div className="absolute inset-0 animate-spin-reverse-slow">
              <FiZap className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-4xl text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(32px, 32px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes draw-line {
          from { stroke-dasharray: 0 100; }
          to { stroke-dasharray: 100 0; }
        }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-float-random { animation: float-random ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in { animation: slide-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 6s linear infinite; }
        .animate-draw-line { animation: draw-line 2s ease-out forwards; stroke-dasharray: 0 100; }
        .animate-float-code { animation: float-random 4s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }

        @media (orientation: portrait) {
          .portrait-center {
            text-align: center;
          }
          .portrait-justify-center {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
