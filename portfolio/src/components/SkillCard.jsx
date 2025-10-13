import React from "react";
import useReveal from "../hooks/useReveal";

export default function SkillCard({ icon, name, level, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${
        visible ? "visible" : ""
      } bg-white/60 dark:bg-zinc-900/60 backdrop-blur rounded-xl p-5 shadow-md border border-gray-200 dark:border-zinc-700`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 text-white text-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {level}%
            </span>
          </div>
          <div className="w-full h-2 rounded bg-gray-200 dark:bg-zinc-700 overflow-hidden">
            <div
              className="h-full rounded bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-700"
              style={{ width: `${level}%` }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
