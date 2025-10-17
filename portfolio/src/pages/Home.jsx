import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
