import React from "react";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiServer,
  FiDatabase,
  FiLayers
} from "react-icons/fi";

export default function About() {
  const skills = [
    {
      category: "Backend Development",
      icon: <FiServer className="text-blue-500" size={24} />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      category: "Database & Storage",
      icon: <FiDatabase className="text-green-500" size={24} />,
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      category: "Frontend Development",
      icon: <FiLayers className="text-purple-500" size={24} />,
      items: [
        { name: "React.js", level: 85 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "Responsive Design", level: 80 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <FiServer className="text-red-500" size={24} />,
      items: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "AWS", level: 75 }
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/5 dark:via-blue-900/5 to-transparent" />
      <div className="absolute inset-0 grid grid-cols-8 gap-4 -skew-y-12 opacity-5">
        {[...Array(32)].map((_, i) => (
          <div
            key={i}
            className="h-32 bg-gradient-to-b from-blue-500/20 to-transparent"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Introduction Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="leading-relaxed">
              Hello! I'm Achini Pramodhya, a passionate Full Stack Developer
              with expertise in building end-to-end web applications. I
              specialize in creating robust backend systems, efficient
              databases, and intuitive user interfaces.
            </p>
            <p className="leading-relaxed">
              My approach combines strong backend architecture with seamless
              frontend experiences. I'm proficient in developing RESTful APIs,
              designing database schemas, implementing authentication systems,
              and creating responsive user interfaces.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={skillSet.category}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg dark:shadow-zinc-900/30"
            >
              <div className="flex items-center gap-3 mb-6">
                {skillSet.icon}
                <h3 className="text-xl font-semibold">{skillSet.category}</h3>
              </div>
              <div className="space-y-4">
                {skillSet.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          index === 0
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : index === 1
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : index === 2
                            ? "bg-gradient-to-r from-purple-500 to-purple-600"
                            : "bg-gradient-to-r from-red-500 to-red-600"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-gray-600 dark:text-gray-400">Sri Lanka</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Role</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Languages</h4>
            <p className="text-gray-600 dark:text-gray-400">English, Sinhala</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Availability</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Open to Opportunities
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/AchiniPramo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/achini-pramodhya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:achini@gmail.com"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Resume Download */}
        <div className="mt-8 flex justify-center">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-colors"
          >
            <FiDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
