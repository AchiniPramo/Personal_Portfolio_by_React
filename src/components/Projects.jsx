 import React, { useState, useEffect, useRef } from 'react';

// Icon Components (replacing react-icons/fi)
const FiGithub = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const FiExternalLink = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const FiFolder = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const FiCode = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const FiEye = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const FiZap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const sliderRef = useRef(null);
  const panelRef = useRef(null);

  // Your projects data - replace with actual data
  const projectsData = [
    {
      id: 1,
      title: 'ToolNest-Hardware',
      category: 'projects',
      desc: 'Full-stack e-commerce platform for tire selling with secure payments and real-time inventory management.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'Bootstrap', 'PayHere'],
      details: 'Engineered a secure e-commerce platform using Spring Boot, MySQL, & JWT with token-based authentication. Integrated the PayHere gateway to enable seamless online payments, resulting in a 30% reduction in transaction friction.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
      live: 'https://youtu.be/wRwXEhW_y3Y?si=9PzGcMVkGX7SbnJe',
      github: 'https://github.com/AchiniPramo/ToolNest_Hardware.git',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Secure Payments', 'Real-time Inventory', 'JWT Auth']
    },
    {
  id: 2,
  title: 'ReadHub Library System',
  category: 'projects',
  desc: 'A full-stack library management system that simplifies book tracking, user registration, and borrowing processes.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Developed a comprehensive library management application using Spring Boot with MySQL integration. The system enables users to register, borrow, and return books efficiently with an intuitive UI.',
  image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/ReadHub_Library.git',
  gradient: 'from-green-600 to-emerald-500',
  features: [
    'Book Borrowing and Returning',
    'Member Registration',
    'Database Connectivity',
    'Responsive User Interface',
    'Secure Access Control'
  ]
},
   

     {
  id: 3,
  title: 'Smart Parking Management System',
  category: 'projects',
  desc: 'A smart parking management system designed to handle vehicle entry, exit, and slot allocation efficiently.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Developed a full-stack parking management web application using Spring Boot and MySQL, enabling efficient vehicle tracking, slot management, and report generation for administrators.',
  image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/Parking_Management_System.git',
  gradient: 'from-sky-500 to-blue-600',
  features: [
    'Vehicle Entry & Exit Tracking',
    'Slot Availability Monitoring',
    'Admin Dashboard',
    'Responsive UI Design',
    'Database Integration'
  ]
},
  
    {
  id: 4,
  title: 'CashFlowr Finance Management System',
  category: 'projects',
  desc: 'A web-based finance management system for tracking expenses, income, and generating insights.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Developed a full-stack finance management application that helps users monitor their financial activities, view reports, and manage transactions securely.',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/CashFlowr.git',
  gradient: 'from-indigo-500 to-purple-500',
  features: [
    'Expense & Income Tracking',
    'Data Visualization',
    'User Authentication',
    'Responsive Dashboard',
  ]
},
  {
  id: 6,
  title: 'Ecommerce',
  category: 'projects',
  desc: 'An online shopping platform built to showcase full e-commerce functionality including product listings, cart, and checkout.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Developed a full-stack e-commerce web application with secure user authentication, product management, shopping cart logic, and payment simulation.',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/Ecommerce.git',
  gradient: 'from-red-500 to-orange-500',
  features: ['Product Catalog', 'Shopping Cart', 'Checkout Simulation', 'Admin Panel', 'Responsive Design']
},

    {
  id: 7,
  title: 'Recipe-Site',
  category: 'projects',
  desc: 'A website to share and browse various recipes with clean UI and functionality.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  details: 'Created a recipe sharing website using modern web practices to allow users to view, search and save recipes easily.',
  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
  live: 'https://recipe-site-jet.vercel.app/',
  github: 'https://github.com/AchiniPramo/Recipe-Site.git',
  gradient: 'from-teal-500 to-green-500',
  features: [
    'Recipe Browsing',
    'Search Functionality',
    'Responsive Layout'
  ]
},
    {
  id: 8,
  title: 'Point Of Sale System',
  category: 'projects',
  desc: 'A full-stack web application for retail sales, inventory and transaction management.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Designed and built a complete Point of Sale system to streamline sales, product inventory tracking, and transaction reporting for retail environments.',
  image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
  live: 'https://point-of-sale-system-two.vercel.app/',
  github: 'https://github.com/AchiniPramo/Point-Of-Sale-System.git',
  gradient: 'from-indigo-500 to-blue-600',
  features: [
    'Sales & Transactions Management',
    'Inventory & Stock Control',
    'Responsive Dashboard',
    'User Authentication & Roles',
    'Database Integration'
  ]
},

    {
  id: 9,
  title: 'Elysian Haven Hotel Website',
  category: 'assignments',
  desc: 'A responsive hotel booking website built using Bootstrap.',
  tech: ['HTML', 'CSS', 'Bootstrap'],
  details: 'Created a multi-page responsive hotel website using Bootstrap with animations and clean layout.',
  image: 'https://yourimageurl.com/hotel.jpg',
  live: 'https://yourliveprojectlink.com',
  github: 'https://github.com/AchiniPramo/Elysian_Haven_Hotel',
  gradient: 'from-yellow-500 to-orange-500',
  features: ['Responsive Design', 'Bootstrap Grid', 'Clean UI']
},

 {
    id: 10,
    title: 'Simple Calculator',
    category: 'assignments',
    desc: 'A functional calculator built using HTML and CSS.',
    tech: ['HTML', 'CSS'],
    details: 'Built a simple calculator UI using CSS grid and button layout principles.',
    image: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&h=600&fit=crop',
    github: 'https://github.com/AchiniPramo/Calculator',
    gradient: 'from-gray-500 to-blue-400',
    features: ['Clean Layout', 'User-Friendly Interface']
  },

  {
  id: 11,
  title: 'Traffic Racer Game',
  category: 'assignments',
  desc: 'A browser-based driving game where users avoid traffic and collect points.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  details: 'Developed a simple yet engaging game using vanilla JavaScript. Players steer a vehicle, navigate through traffic lanes and aim for high scores.',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
  live: 'https://traffic-racer-game.vercel.app/',
  github: 'https://github.com/AchiniPramo/Traffic-Racer-Game.git',
  gradient: 'from-yellow-400 to-red-500',
  features: [
    'Lane Steering Mechanics',
    'Score Tracking',
    'Responsive Gameplay'
  ]
},

{
  id: 12,
  title: 'Culinary Academy System',
  category: 'projects',
  desc: 'A full-stack web application for managing culinary course enrollments, instructor assignments, and student progress.',
  tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  details: 'Developed a comprehensive system to handle course scheduling, instructor-student matching, and progress tracking for a culinary training academy.',
  image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/Culinary_Academy_System.git',
  gradient: 'from-orange-400 to-red-500',
  features: [
    'Course Enrollment Management',
    'Instructor Assignment',
    'Student Progress Tracking',
    'User Authentication',
    'Responsive Dashboard'
  ]
},

{
  id: 13,
  title: 'Java-Script Queue',
  category: 'assignments',
  desc: 'A data structure implementation of a Queue using pure JavaScript.',
  tech: ['JavaScript', 'HTML', 'CSS'],
  details: 'Developed a queue system in JavaScript following FIFO rules, including enqueue, dequeue, peek, isEmpty operations and user interface to test the functionality.',
  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
  live: 'https://java-script-queue.vercel.app/',
  github: 'https://github.com/AchiniPramo/Java-Script-Queue.git',
  gradient: 'from-cyan-500 to-teal-500',
  features: [
    'FIFO Implementation',
    'User Interface',
    'Interactive Testing'
  ]
},

{
  id: 14,
  title: 'Knight-Rider Light Effect',
  category: 'assignments',
  desc: 'A visual effect simulating the classic “Knight Rider” running LED bar using JavaScript.',
  tech: ['JavaScript', 'HTML', 'CSS'],
  details: 'Created an interactive web-based simulation of the Knight-Rider LED effect, with lights animating left-to-right and back, and UI controls to adjust speed.',
  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
  live: 'https://knight-rider.vercel.app/',
  github: 'https://github.com/AchiniPramo/Knight-Rider-Light-Effect.git',
  gradient: 'from-yellow-400 to-red-500',
  features: [
    'LED “chasing” animation effect',
    'Speed control UI',
    'Responsive design for multiple screens'
  ]
},

{
  id: 15,
  title: 'HTML - CSS Assignment 04',
  category: 'assignments',
  desc: 'Front-end assignment focusing on HTML structure and CSS styling.',
  tech: ['HTML', 'CSS'],
  details: 'Completed the fourth assignment in the course, designing the page layout and styles entirely using semantic HTML and modular CSS.',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  live: 'https://html-css-assignment-04-rho.vercel.app/',
  github: 'https://github.com/AchiniPramo/HTML-CSS-Assignment-04.git',
  gradient: 'from-purple-500 to-indigo-500',
  features: [
    'Semantic HTML5 markup',
    'Responsive CSS styling',
    'Clean Page Layout'
  ]
},

{
  id: 16,
  title: 'HTML-CSS Cases',
  category: 'assignments',
  desc: 'A collection of HTML and CSS case studies focusing on layout, design and style practices.',
  tech: ['HTML', 'CSS'],
  details: 'Completed multiple case study exercises that explore advanced HTML semantic structure and responsive CSS techniques.',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  live: 'https://html-css-cases.vercel.app/',
  github: 'https://github.com/AchiniPramo/HTML-CSS-Cases.git',
  gradient: 'from-teal-500 to-green-500',
  features: [
    'Semantic HTML5 usage',
    'Responsive CSS Grid & Flexbox',
    'Clean & Maintainable Styles'
  ]
},

{
  id: 17,
  title: 'Finance Project - Layered',
  category: 'projects',
  desc: 'A layered architecture finance web app built with separation of concerns.',
  tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  details: 'Developed a multi-layered finance application using Spring Boot for backend, MySQL for data persistence, and HTML/CSS/JS for the frontend, organized into presentation, service and data layers.',
  image: 'https://images.unsplash.com/photo-1581091870622-7e0cdfbb6797?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/Finance-Project---Layered.git',
  gradient: 'from-indigo-500 to-blue-500',
  features: [
    'Layered Architecture',
    'Finance Tracking',
    'Secure Data Handling',
    'Responsive UI'
  ]
},

{
  id: 23,
  title: 'QuietSpace',
  category: 'projects',
  desc: 'A calming web environment designed for mental wellness and focus improvement.',
  tech: ['React', 'TypeScript', 'CSS', 'HTML'],
  details: 'Developed a focused web-app to support mindfulness and productivity, featuring ambient soundscapes, session timers, and clean UI design.',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
  github: 'https://github.com/AchiniPramo/QuietSpace.git',
  gradient: 'from-lime-400 to-green-500',
  features: [
    'Ambient Soundplay',
    'Session Timer',
    'Minimalist UI',
    'Responsive Design'
  ]
},

  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleCards);

  // Update slider position
  useEffect(() => {
    if (sliderRef.current && panelRef.current) {
      const buttons = panelRef.current.querySelectorAll('.panel-button');
      const activeButton = Array.from(buttons).find(btn => 
        btn.classList.contains('active')
      );
      
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const panelRect = panelRef.current.getBoundingClientRect();
        
        sliderRef.current.style.width = `${buttonRect.width}px`;
        sliderRef.current.style.left = `${buttonRect.left - panelRect.left}px`;
      }
    }
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCards(6);
  };

  const handleSeeMore = () => {
    setVisibleCards(prev => prev + 6);
  };

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-pink-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/50 dark:to-pink-900/50 mb-4 sm:mb-6">
            <FiZap className="text-indigo-600 dark:text-indigo-400" size={16} />
            <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 px-4">
            Innovative Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Transforming ideas into digital reality. Each project showcases cutting-edge technology,
            creative design, and innovative problem-solving approaches.
          </p>

          {/* Filter Panel */}
          <div className="inline-flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-xl max-w-full overflow-x-auto" ref={panelRef}>
            <button 
              className={`panel-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === 'all' ? 'active text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
              onClick={() => handleFilterChange('all')}
            >
              All Projects
            </button>
            <button 
              className={`panel-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === 'projects' ? 'active text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
              onClick={() => handleFilterChange('projects')}
            >
              Projects
            </button>
            <button 
              className={`panel-button px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeFilter === 'assignments' ? 'active text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
              onClick={() => handleFilterChange('assignments')}
            >
              Assignments
            </button>
            <div 
              ref={sliderRef}
              className="slider absolute h-8 sm:h-10 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-300 -z-10"
              style={{ top: '6px' }}
            />
          </div>
        </div>

        {/* Projects Grid with 3D Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12">
          {displayedProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative cursor-pointer"
              style={{
                perspective: '1000px',
                animation: `fadeInUp 0.6s ease-out ${idx * 150}ms both`
              }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              onClick={() => openPopup(project)}
            >
              {/* 3D Card Container */}
              <div
                className="relative h-full transform-gpu transition-all duration-500 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: activeIdx === idx
                    ? 'rotateY(8deg) rotateX(4deg) scale(1.02) translateZ(20px)'
                    : 'rotateY(0deg) rotateX(0deg) scale(1) translateZ(0px)'
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card Content */}
                <div className="relative h-full rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">

                  {/* Image Section */}
                  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-zinc-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm border border-white/20 dark:border-zinc-700/50 capitalize">
                        {project.category === 'projects' ? 'Project' : 'Assignment'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-black/80 text-white hover:bg-black backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={16} className="sm:hidden" />
                        <FiGithub size={18} className="hidden sm:block" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={16} className="sm:hidden" />
                        <FiExternalLink size={18} className="hidden sm:block" />
                      </a>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <FiFolder size={18} className="sm:hidden" />
                          <FiFolder size={20} className="hidden sm:block" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 transition-all duration-300 line-clamp-2">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        <FiEye className="text-indigo-500" size={14} />
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Key Features</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.features.map((feature, fidx) => (
                          <span
                            key={feature}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/30 dark:to-pink-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50 group-hover:scale-105 transition-transform duration-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                        <FiCode className="text-purple-500" size={14} />
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech, tidx) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-indigo-100 group-hover:to-pink-100 dark:group-hover:from-indigo-900/50 dark:group-hover:to-pink-900/50 group-hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        {visibleCards < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>See More Projects</span>
              <FiExternalLink size={16} className="sm:hidden group-hover:translate-x-1 transition-transform duration-300" />
              <FiExternalLink size={18} className="hidden sm:block group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isPopupOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300`}
          onClick={closePopup}
        />
        
        {selectedProject && (
          <div className={`relative bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ${isPopupOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'}`}>
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white text-gray-600 dark:text-gray-300 transition-all duration-300 hover:rotate-90 text-lg sm:text-xl"
            >
              ✕
            </button>
            
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${selectedProject.gradient} flex items-center justify-center text-white shadow-lg mb-4 sm:mb-6`}>
              <FiFolder size={20} className="sm:hidden" />
              <FiFolder size={28} className="hidden sm:block" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600 mb-3 sm:mb-4 pr-8">
              {selectedProject.title}
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">
              {selectedProject.details}
            </p>
            
            <div className="mb-5 sm:mb-6">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <FiEye className="text-indigo-500" size={16} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-900/30 dark:to-pink-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <FiCode className="text-purple-500" size={16} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
              >
                <FiGithub size={18} />
                View Code
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        )}
      </div>

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

        .slider {
          z-index: 0;
        }

        .panel-button {
          position: relative;
          z-index: 1;
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

export default ProjectsSection;