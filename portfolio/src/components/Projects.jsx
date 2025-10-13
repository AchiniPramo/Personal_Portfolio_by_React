import React from "react";
import useReveal from "../hooks/useReveal";
import { FiGithub, FiExternalLink, FiFolder, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    live: "https://ecommerce-demo.com",
    github: "https://github.com/username/ecommerce",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Task Manager",
    desc: "Smart task management app using AI to prioritize and categorize tasks automatically.",
    image: "/projects/taskmanager.jpg",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    live: "https://ai-tasks-demo.com",
    github: "https://github.com/username/ai-tasks",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Real-time Analytics",
    desc: "Dashboard for real-time data visualization with customizable widgets and alerts.",
    image: "/projects/analytics.jpg",
    tech: ["Vue.js", "D3.js", "WebSocket", "Redis"],
    live: "https://analytics-demo.com",
    github: "https://github.com/username/analytics",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Social Platform",
    desc: "Feature-rich social platform with real-time chat, posts, and content sharing.",
    image: "/projects/social.jpg",
    tech: ["React", "GraphQL", "Node.js", "PostgreSQL"],
    live: "https://social-demo.com",
    github: "https://github.com/username/social",
    gradient: "from-orange-500 to-red-500"
  }
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = React.useState(null);
  const [ref, visible] = useReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg muted max-w-2xl">
              Innovative solutions across web, mobile, and cloud platforms. Each
              project represents a unique challenge solved with modern
              technology.
            </p>
          </div>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            View All Projects <FiExternalLink />
          </a>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`group relative p-2 rounded-2xl bg-gradient-to-r ${
                project.gradient
              } reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className="relative h-full rounded-xl bg-white dark:bg-zinc-900 overflow-hidden">
                {/* Project Screenshot */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-30`}
                  />
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}
                    >
                      <FiFolder />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
