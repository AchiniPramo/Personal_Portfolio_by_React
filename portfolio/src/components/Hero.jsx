import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const [ref, visible] = useReveal({ threshold: 0.12 });
  return (
    <section
      ref={ref}
      className={`reveal ${
        visible ? "visible" : ""
      } min-h-[70vh] flex items-center`}
    >
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I’m Achini Pramodhya
            <span className="text-accent"> — a Frontend Developer</span>
          </h1>
          <p className="mt-6 text-lg muted">
            I build beautiful, accessible web apps using React, Tailwind and
            modern tools. Currently open to freelance and full-time
            opportunities.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-md shadow btn-ghost"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md"
            >
              Contact me
            </a>
          </div>
          <div className="mt-8 flex gap-4 text-2xl">
            <a aria-label="GitHub" href="https://github.com/AchiniPramo">
              <FaGithub />
            </a>
            <a aria-label="LinkedIn" href="#">
              <FaLinkedin />
            </a>
            <a aria-label="Email" href="#contact">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 floaty bg-gradient-to-br from-primary to-accent rounded-2xl shadow-2xl flex items-center justify-center text-white text-xl font-semibold">
            Your Portrait
          </div>
        </div>
      </div>
    </section>
  );
}
