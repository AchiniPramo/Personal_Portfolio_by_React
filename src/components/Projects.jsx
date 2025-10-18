import React from "react";
import useReveal from "../hooks/useReveal";
import { FiGithub, FiExternalLink, FiFolder, FiCode, FiEye, FiZap } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/username/ecommerce",
    gradient: "from-purple-500 to-pink-500",
    category: "Web App",
    features: ["Real-time Inventory", "Secure Payments", "Admin Dashboard"]
  },
  {
    title: "AI Task Manager",
    desc: "Smart task management app using AI to prioritize and categorize tasks automatically.",
    image: "/projects/taskmanager.jpg",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    live: "https://ai-tasks-demo.com",
    github: "https://github.com/username/ai-tasks",
    gradient: "from-blue-500 to-cyan-500",
    category: "AI/ML",
    features: ["Smart Prioritization", "Auto Categorization", "ML Insights"]
  },
  {
    title: "Real-time Analytics",
    desc: "Dashboard for real-time data visualization with customizable widgets and alerts.",
    image: "/projects/analytics.jpg",
    tech: ["Vue.js", "D3.js", "WebSocket", "Redis"],
    live: "https://analytics-demo.com",
    github: "https://github.com/username/analytics",
    gradient: "from-green-500 to-emerald-500",
    category: "Dashboard",
    features: ["Live Data", "Custom Widgets", "Smart Alerts"]
  },
  {
    title: "Social Platform",
    desc: "Feature-rich social platform with real-time chat, posts, and content sharing.",
    image: "/projects/social.jpg",
    tech: ["React", "GraphQL", "Node.js", "PostgreSQL"],
    live: "https://social-demo.com",
    github: "https://github.com/username/social",
    gradient: "from-orange-500 to-red-500",
    category: "Social",
    features: ["Real-time Chat", "Content Sharing", "User Communities"]
  }
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = React.useState(null);
  const [ref, visible] = useReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/50 dark:to-pink-900/50 mb-6">
            <FiZap className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6">
            Innovative Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital reality. Each project showcases cutting-edge technology,
            creative design, and innovative problem-solving approaches.
          </p>
        </div>

        {/* Projects Grid with 3D Effects */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`group relative reveal ${visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${idx * 150}ms`,
                perspective: "1000px"
              }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* 3D Card Container */}
              <div
                className="relative h-full transform-gpu transition-all duration-500 ease-out hover:rotate-y-12 hover:rotate-x-6 hover:scale-105"
                style={{
                  transformStyle: "preserve-3d",
                  transform: activeIdx === idx
                    ? "rotateY(12deg) rotateX(6deg) scale(1.05) translateZ(50px)"
                    : "rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)"
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card Content */}
                <div className="relative h-full rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">

                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-zinc-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-white/20 dark:border-zinc-700/50`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-black/80 text-white hover:bg-black backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      >
                        <FiGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-lg"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <FiFolder size={20} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {project.desc}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FiEye className="text-indigo-500" size={16} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Features</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, fidx) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/30 dark:to-pink-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50 group-hover:scale-105 transition-transform duration-200"
                            style={{ animationDelay: `${fidx * 100}ms` }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FiCode className="text-purple-500" size={16} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, tidx) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-indigo-100 group-hover:to-pink-100 dark:group-hover:from-indigo-900/50 dark:group-hover:to-pink-900/50 group-hover:scale-105 transition-all duration-300`}
                            style={{ animationDelay: `${tidx * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse delay-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
            <span>Explore More Projects</span>
            <FiExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
