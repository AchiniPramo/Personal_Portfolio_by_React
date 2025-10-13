import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto p-6 card rounded-lg">
        <h2 className="text-3xl font-bold">About me</h2>
        <p className="mt-4 muted">
          I’m a frontend developer with experience building responsive, fast and
          accessible user interfaces. I enjoy clean code, good design, and
          performance optimization.
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 muted">
          <li>
            <strong>Location:</strong> City, Country
          </li>
          <li>
            <strong>Experience:</strong> 3+ years
          </li>
          <li>
            <strong>Skills:</strong> React, TypeScript, Tailwind, Vite
          </li>
          <li>
            <strong>Availability:</strong> Open to work
          </li>
        </ul>
      </div>
    </section>
  );
}
