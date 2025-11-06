import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiUser } from 'react-icons/fi';

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);

  const aboutData = [
    {
      title: "About Me",
      icon: "👨‍💻",
      bgImage: "src/assets/about-me.jpg",
      content: (
        <div className="space-y-4">
          <p className="text-gray-100 leading-relaxed">
            Hi, I'm Achini Pramodya Boralessa, a passionate technologist and futurist. With over a decade of experience in cutting-edge tech, I've been at the forefront of innovations that are shaping our world.
          </p>
        </div>
      )
    },
    {
      title: "Education",
      icon: "🎓",
      bgImage: "src/assets/education.jpg",
      content: (
        <div className="space-y-3">
          <ul className="space-y-3 text-gray-100">
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Mapalagama Sirisunanda National College (2008 - 2018)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Sanghamiththa Girls' Collage (2019 - 2021)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Institute Of Software Engineering (2023)</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "As A Person",
      icon: "🌟",
      bgImage: "src/assets/person.jpg",
      content: (
        <ul className="space-y-3 text-gray-100">
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Curious and driven individual with a passion for innovation and problem-solving</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Described by friends as empathetic, reliable, and always eager to learn</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Thrive in collaborative environments but also enjoy the focus of solo work</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Avid hiker and amateur astronomer</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Dedicated volunteer at local STEM education programs</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Believe in maintaining a healthy work-life balance</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
            <span>Continuously strive for personal growth in all aspects of life</span>
          </li>
        </ul>
      )
    },
    {
      title: "Skills",
      icon: "💡",
      bgImage: "src/assets/skills.jpg",
      content: (
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Technical Expertise:</h3>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Proficiency in multiple programming languages (Python, Java, C++, JavaScript)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Deep understanding of machine learning and AI algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Experience with cloud platforms (AWS, Google Cloud, Azure)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Strong background in data analysis and visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Familiarity with blockchain technology and smart contracts</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Soft Skills:</h3>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Excellence in project management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Strong communication abilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Adept at explaining complex concepts to diverse audiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Skilled in agile methodologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
                <span>Knack for user-centered design principles</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Future Plans",
      icon: "🚀",
      bgImage: "src/assets/future-plan.jpg",
      content: (
        <div className="space-y-4 text-gray-100">
          <p className="leading-relaxed">Looking ahead, I'm excited about several ambitious goals:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Leading a breakthrough project in quantum computing applications for AI</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Founding a startup focused on sustainable technology solutions for urban environments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Contributing to open-source projects that bridge the digital divide in underserved communities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Pursuing further education in the emerging field of neuroengineering</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-300 mt-1.5 text-lg flex-shrink-0">•</span>
              <span>Writing a book on the ethical implications of advanced AI systems</span>
            </li>
          </ul>
          <p className="leading-relaxed">
            I'm committed to staying at the forefront of technological advancements while ensuring that these innovations benefit society as a whole. My ultimate aim is to leave a lasting positive impact on the world through responsible and innovative use of technology.
          </p>
        </div>
      )
    }
  ];

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotation with improved logic
  const startAutoRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (!hasInteracted) {
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % aboutData.length);
        }
      }, 5000);
    }
  }, [isHovering, hasInteracted, aboutData.length]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      startAutoRotation();
    }, 2000);

    return () => {
      clearTimeout(initialDelay);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoRotation]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCardClick = useCallback((index) => {
    setActiveIndex(index);
    setHasInteracted(true);
    setIsHovering(true);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const handleMouseEnter = useCallback((index) => {
    setActiveIndex(index);
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleTouchStart = useCallback((e, index) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    handleCardClick(index);
  }, [handleCardClick]);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartRef.current) {
      const deltaX = Math.abs(e.changedTouches[0].clientX - touchStartRef.current.x);
      const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartRef.current.y);
      
      if (deltaX < 10 && deltaY < 10) {
        setIsHovering(true);
      }
    }
    touchStartRef.current = null;
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Interactive Mouse-Following Background */}
      <div
        className="absolute pointer-events-none w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192
        }}
      />

      {/* Enhanced Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 dark:opacity-20 animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          >
            {i % 4 === 0 && (
              <div className="w-12 h-12 border border-purple-400 rotate-45 animate-spin-slow" />
            )}
            {i % 4 === 1 && (
              <div className="w-8 h-8 bg-blue-400 rounded-full animate-pulse" />
            )}
            {i % 4 === 2 && (
              <div className="w-6 h-6 bg-cyan-400 rounded-lg animate-bounce" />
            )}
            {i % 4 === 3 && (
              <div className="w-10 h-10 border-2 border-pink-400 rounded-full animate-ping" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/50 dark:to-pink-900/50 mb-4 sm:mb-6">
            <FiUser className="text-indigo-600 dark:text-indigo-400" size={16} />
            <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 px-4">
            My Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Explore different aspects of my journey, skills, and aspirations
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Intro Text with Theme Colors */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-200/50 dark:border-zinc-700/50 shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  I'm a passionate software developer and UI designer with a keen eye for detail and a love for creating beautiful, functional digital experiences. With years of experience in both front-end and back-end development, I bring a holistic approach to every project I undertake.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion-style Gallery */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Mobile Hint */}
            <div className="landscape:hidden text-center mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400 animate-pulse">
                Tap a card to explore
              </p>
            </div>

            {/* Advanced Bordered Container */}
            <div className="relative group/container">
              {/* Animated gradient border background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-sm opacity-75 group-hover/container:opacity-100 transition duration-1000 animate-gradient-xy"></div>
              
              {/* Static gradient border for depth */}
              <div className="absolute -inset-[3px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl opacity-50"></div>
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl"></div>

              {/* Main content container with border */}
              <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-3">
                  <div className="flex flex-col landscape:flex-row gap-2 sm:gap-3 h-auto landscape:h-[500px] xl:h-[600px]">
              {aboutData.map((item, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out group ${
                    activeIndex === index 
                      ? 'landscape:flex-[5] h-[500px] landscape:h-auto' 
                      : 'landscape:flex-[0.5] landscape:hover:flex-[0.7] h-16 landscape:h-auto'
                  }`}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchEnd={handleTouchEnd}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(index);
                    }
                  }}
                  aria-expanded={activeIndex === index}
                  aria-label={`${item.title} section`}
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 100}ms both`
                  }}
                >
                  {/* Background Image with improved loading */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${item.bgImage})`,
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                    loading="lazy"
                  />
                  
                  {/* Improved Gradient Overlay - Reduced opacity for better image visibility */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10 transition-opacity duration-700 ${
                    activeIndex === index ? 'opacity-95' : 'opacity-75 group-hover:opacity-80'
                  }`} />

                  {/* Gradient Border on Active - Theme Colors */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-opacity duration-500 blur ${
                    activeIndex === index ? 'opacity-60' : 'opacity-0'
                  }`} />

                  {/* Content */}
                  <div className={`relative h-full flex flex-col transition-all duration-700 ${
                    activeIndex === index ? 'p-5 sm:p-6 lg:p-8' : 'p-4 justify-center landscape:justify-end'
                  }`}>
                    
                    {/* Collapsed State */}
                    {activeIndex !== index && (
                      <div className="flex landscape:absolute landscape:inset-0 items-center justify-start landscape:justify-center gap-3">
                        <span className="text-2xl landscape:text-3xl">{item.icon}</span>
                        <h3 className="text-white font-bold text-base sm:text-lg landscape:text-xl lg:text-2xl landscape:transform landscape:-rotate-90 landscape:origin-center whitespace-nowrap tracking-wide drop-shadow-lg">
                          {item.title}
                        </h3>
                      </div>
                    )}

                    {/* Expanded State */}
                    {activeIndex === index && (
                      <>
                        {/* Header with better contrast for image visibility */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30 flex-shrink-0">
                            <span className="text-xl sm:text-2xl lg:text-3xl">{item.icon}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                            {item.title}
                          </h3>
                        </div>

                        {/* Content - Scrollable with better mobile support and improved readability */}
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/20">
                          <div className="text-xs sm:text-sm lg:text-base">
                            {item.content}
                          </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-4 right-4 text-white/50 text-xs hidden landscape:block animate-bounce">
                          ↓ Scroll
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Indicators - Theme Colors */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-5 sm:mt-6 lg:mt-8">
              {aboutData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    activeIndex === index 
                      ? 'w-8 sm:w-10 lg:w-12 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 shadow-lg' 
                      : 'w-2 sm:w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110'
                  }`}
                  aria-label={`Go to ${item.title}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float-random {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-5px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-20px) rotate(270deg) scale(1.05);
          }
        }
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          transition: background 0.2s;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;