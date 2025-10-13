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
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Professional Services
          </h2>
          <p className="mt-2 muted max-w-3xl">
            Comprehensive technology solutions across web, mobile, cloud, and AI
            domains. From development to deployment, security to scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="h-full"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
