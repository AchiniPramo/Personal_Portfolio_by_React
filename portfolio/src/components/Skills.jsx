import React from "react";
import SkillCard from "./SkillCard";

const skills = [
  { name: "React", level: 92, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "🟦" },
  { name: "Tailwind CSS", level: 90, icon: "🎨" },
  { name: "Node.js", level: 80, icon: "🟩" },
  { name: "Vite / Next", level: 88, icon: "🚀" },
  { name: "UI/UX", level: 78, icon: "🖌️" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Skills & Expertise
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
              I’m Achini Pramodhya — I build elegant, performant web experiences
              using modern technologies. Here are the tools I use and the
              proficiency I bring to each.
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 text-sm font-medium">
              Open to work
            </span>
            <a
              href="https://github.com/AchiniPramo"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={s.name} {...s} delay={i * 90} />
          ))}
        </div>

        <div className="mt-10">
          <div className="rounded-xl p-6 bg-gradient-to-r from-indigo-50 via-white to-pink-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Design Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I focus on accessible, performant interfaces with clean
              interactions and clear hierarchy. I combine research, design
              systems and component-led development to ship polished
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
