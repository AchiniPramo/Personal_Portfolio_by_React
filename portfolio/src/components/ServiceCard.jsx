import React from "react";
import useReveal from "../hooks/useReveal";

export default function ServiceCard({ Icon, title, desc, accent }) {
  const [ref, visible] = useReveal({ threshold: 0.12 });
  return (
    <div
      ref={ref}
      className={`reveal ${
        visible ? "visible" : ""
      } group relative p-6 rounded-2xl overflow-hidden`}
    >
      <div
        className="absolute inset-0 -z-10 opacity-60 blur-2xl"
        style={{ background: accent }}
        aria-hidden
      />
      <div className="relative h-[180px] p-6 rounded-2xl border border-transparent bg-white/60 dark:bg-zinc-900/50 shadow hover:shadow-lg transition-transform transform-gpu group-hover:-translate-y-2">
        <div className="flex flex-col h-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg text-white text-xl bg-gradient-to-r from-indigo-500 to-pink-500">
              {Icon ? <Icon /> : null}
            </div>
            <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-sm muted mt-4 line-clamp-3">{desc}</p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      />
    </div>
  );
}
