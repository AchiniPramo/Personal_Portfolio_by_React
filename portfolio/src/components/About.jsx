import React from "react";
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
} from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute -top-32 -right-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <div className="relative">
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30">
              <img
                src="/profile.jpg"
                alt="Achini Pramodhya"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
              <FiCode size={24} />
            </div>
          </div>

          <h2 className="mt-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Achini Pramodhya
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Full Stack Developer
          </p>

          <p className="mt-6 max-w-md text-gray-700 dark:text-gray-300 leading-relaxed">
            A passionate full-stack developer who loves crafting interactive
            digital experiences. I blend creative design with strong backend
            logic to build seamless, scalable, and user-focused web
            applications.
          </p>

          <div className="mt-8 flex gap-5 justify-center lg:justify-start">
            <a
              href="https://github.com/AchiniPramo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg hover:text-blue-600 transition-all"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/achini-pramodhya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg hover:text-blue-600 transition-all"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="mailto:achini@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-zinc-800 shadow-md hover:shadow-lg hover:text-blue-600 transition-all"
            >
              <FiMail size={22} />
            </a>
          </div>

          <div className="mt-10">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition-transform"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Skill Section */}
        <div className="grid gap-6">
          <h3 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            What I Do
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <FiServer className="text-blue-600" size={22} />
                <h4 className="text-lg font-semibold">Backend Development</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Building scalable APIs and microservices using Java, Node.js,
                and Spring Boot, ensuring high performance and secure
                architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <FiDatabase className="text-green-600" size={22} />
                <h4 className="text-lg font-semibold">Database Management</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Designing optimized data models and managing SQL & NoSQL
                databases like MySQL and MongoDB with a focus on efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <FiLayers className="text-purple-600" size={22} />
                <h4 className="text-lg font-semibold">Frontend Engineering</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Crafting dynamic, responsive interfaces using React, Tailwind,
                and JavaScript for intuitive user experiences.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-white/60 dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-3">
                <FiGlobe className="text-pink-600" size={22} />
                <h4 className="text-lg font-semibold">DevOps & Cloud</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Streamlining deployments with GitHub Actions, Docker, and AWS to
                deliver reliable and automated CI/CD workflows.
              </p>
            </div>
          </div>

          {/* Extra Info */}
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
              🌍 Based in Sri Lanka
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
              💼 Open to Opportunities
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
              💬 English & Sinhala
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
