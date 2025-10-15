import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiCode, FiDatabase, FiServer, FiLayers } from "react-icons/fi";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const [ref, visible] = useReveal({ threshold: 0.12 });

  const techStack = [
    { icon: <FiServer className="text-blue-500" />, label: "Backend" },
    { icon: <FiDatabase className="text-green-500" />, label: "Database" },
    { icon: <FiLayers className="text-purple-500" />, label: "Frontend" },
    { icon: <FiCode className="text-red-500" />, label: "APIs" }
  ];

  return (
    <section
      ref={ref}
      className={`reveal ${
        visible ? "visible" : ""
      } min-h-screen relative overflow-hidden flex items-center`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/5 dark:via-blue-900/5 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 dark:via-zinc-900/90 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 relative">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-500">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm Achini Pramodhya
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                I create end-to-end web solutions with robust backend systems,
                efficient databases, and elegant user interfaces. Specializing
                in scalable applications and modern web technologies.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 shadow-md"
                >
                  {tech.icon}
                  <span className="text-sm font-medium">{tech.label}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-400">
              <a
                aria-label="GitHub"
                href="https://github.com/AchiniPramo"
                className="hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/achini-pramodhya-24a555318/"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                aria-label="Email"
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Creative Visual Element (no profile image) */}
          <div className="relative flex items-center justify-center min-h-[340px]">
            {/* Animated Gradient Blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-pink-500 blur-3xl opacity-40 animate-pulse scale-110" />
            </div>
            {/* Floating Tech Icons */}
            <div className="absolute left-4 top-8 animate-float-slow">
              <FiServer className="text-5xl text-blue-400 drop-shadow-lg" />
            </div>
            <div className="absolute right-8 top-12 animate-float">
              <FiDatabase className="text-5xl text-green-400 drop-shadow-lg" />
            </div>
            <div className="absolute left-10 bottom-8 animate-float-1">
              <FiLayers className="text-5xl text-purple-400 drop-shadow-lg" />
            </div>
            <div className="absolute right-10 bottom-8 animate-float-2">
              <FiCode className="text-5xl text-pink-400 drop-shadow-lg" />
            </div>
            {/* Centered Code Symbol */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-xl p-10 flex flex-col items-center border-2 border-blue-100 dark:border-zinc-800">
                <FiCode className="text-6xl text-blue-500 mb-2 animate-pulse" />
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-wide">
                  Creative Coding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
