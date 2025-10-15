import React from "react";
import ServiceCard from "./ServiceCard";
import {
  FiMonitor,
  FiSmartphone,
  FiShield,
  FiCpu,
  FiCloud,
  FiBarChart2,
  FiGitBranch,
  FiGrid,
  FiShoppingCart
} from "react-icons/fi";

const services = [
  {
    Icon: FiMonitor,
    title: "Web Development",
    desc: "Creating responsive and scalable web applications using cutting-edge technologies and frameworks.",
    accent: "linear-gradient(90deg,#6366f1,#ec4899)"
  },
  {
    Icon: FiSmartphone,
    title: "Mobile App Development",
    desc: "Developing high-performance, cross-platform mobile applications for iOS and Android.",
    accent: "linear-gradient(90deg,#06b6d4,#7c3aed)"
  },
  {
    Icon: FiShield,
    title: "Cybersecurity",
    desc: "Implementing advanced security measures to protect digital assets and ensure data integrity.",
    accent: "linear-gradient(90deg,#f97316,#f43f5e)"
  },
  {
    Icon: FiCpu,
    title: "AI & Machine Learning",
    desc: "Leveraging artificial intelligence and machine learning algorithms to solve complex business problems.",
    accent: "linear-gradient(90deg,#8b5cf6,#d946ef)"
  },
  {
    Icon: FiCloud,
    title: "Cloud Computing",
    desc: "Designing and implementing scalable cloud solutions for improved performance and cost-efficiency.",
    accent: "linear-gradient(90deg,#0ea5e9,#22d3ee)"
  },
  {
    Icon: FiBarChart2,
    title: "Data Analytics",
    desc: "Extracting valuable insights from large datasets to drive informed business decisions.",
    accent: "linear-gradient(90deg,#14b8a6,#84cc16)"
  },
  {
    Icon: FiGitBranch,
    title: "DevOps",
    desc: "Streamlining development and operations processes for faster deployment and improved collaboration.",
    accent: "linear-gradient(90deg,#f43f5e,#fb7185)"
  },
  {
    Icon: FiGrid,
    title: "IoT Solutions",
    desc: "Developing interconnected systems and devices for smart, data-driven environments.",
    accent: "linear-gradient(90deg,#0284c7,#38bdf8)"
  },
  {
    Icon: FiShoppingCart,
    title: "POS Development",
    desc: "Developing advanced Point of Sale solutions for streamlined transactions and efficient business operations.",
    accent: "linear-gradient(90deg,#059669,#34d399)"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 mb-6">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Expert Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions across web, mobile, cloud, and AI domains.
            From concept to deployment, security to scalability - we deliver excellence.
          </p>
        </div>

        {/* Services Grid with Enhanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="h-full transform transition-all duration-500 hover:scale-105"
              style={{
                transitionDelay: `${idx * 100}ms`,
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              <ServiceCard {...s} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-white/20 dark:border-zinc-800/50 hover:bg-white/70 dark:hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
            <span>Discuss Your Project</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
