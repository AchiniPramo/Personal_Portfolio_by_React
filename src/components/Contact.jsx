import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'achinipramodhya4@gmail.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+94 76 648 3520',
      href: 'tel:+15551234567'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Galle, Sri Lanka',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AchiniPramo', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/achini-pramodhya-24a555318/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/40 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 mb-4 sm:mb-6">
            <FiMail className="text-emerald-600 dark:text-emerald-400" size={16} />
            <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300">Let's Connect</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            I'm always excited to discuss new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Form Background */}
              <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-zinc-800/50" />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-200 dark:border-zinc-700 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                          <FiAlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <FiAlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-200 dark:border-zinc-700 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                          <FiAlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <FiAlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 resize-none ${
                          errors.message
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-200 dark:border-zinc-700 focus:ring-emerald-500 focus:border-emerald-500'
                        }`}
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {errors.message && (
                        <div className="absolute right-3 top-3 text-red-500">
                          <FiAlertCircle size={18} />
                        </div>
                      )}
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <FiAlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
                      {formData.message.length}/500
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheck size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-white/20 dark:border-zinc-700/50 hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-white/20 dark:border-zinc-700/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200/50 dark:border-emerald-800/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-medium text-emerald-700 dark:text-emerald-300">Available for new projects</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently accepting freelance work and full-time opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
