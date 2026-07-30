import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen pt-32 pb-24 flex items-center justify-center scroll-mt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-wider mb-4 uppercase"
          >
            Hello, I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-textPrimary leading-tight"
          >
            Muhammed Haris
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-6 text-textSecondary"
          >
            Expert <span className="typing-text font-semibold">Flutter Developer...</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-textSecondary mb-10 max-w-lg mx-auto md:mx-0 text-lg"
          >
            Crafting beautiful, high-performance cross-platform applications at 16. Turning complex ideas into elegant digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="#contact" className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              Hire Me <ArrowRight size={20} />
            </a>
            <a href="#portfolio" className="px-8 py-4 bg-surface hover:bg-slate-700 text-textPrimary rounded-full font-medium transition-all border border-slate-600 flex items-center justify-center gap-2">
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3 justify-center md:justify-start"
          >
            <a
              href="https://www.instagram.com/hariiiissz/?__pwa=1#"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full bg-slate-900 text-textSecondary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <path d="M16.5 7.5h.01" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-haris-/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoIt8t%2FvwQ6mrwEP89j2SwQ%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full bg-slate-900 text-textSecondary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9h4v12H4z" />
                <circle cx="6" cy="6" r="2" />
                <path d="M9 12v9h4v-5.5c0-2.5 3-2.7 3 0V21h4v-6.5c0-5-5-4.8-7-2.4" />
              </svg>
            </a>
            <a
              href="https://github.com/mhdharis-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full bg-slate-900 text-textSecondary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3" />
                <path d="M18 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.09-3.5s-1.28-.35-3.03 1.48A13.38 13.38 0 0 0 10 2.5c-3.73-1.83-5-1.48-5-1.48A5.07 5.07 0 0 0 2 4.77 5.44 5.44 0 0 0 1 11.13c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 18.13V22" />
              </svg>
            </a>
            <a
              href="tel:+919544234298"
              className="px-4 py-3 rounded-full bg-slate-800 text-textSecondary hover:bg-primary hover:text-white transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="text-sm">+91 9544234298</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Using a placeholder for the hero image. Provide an image in public/ or src/assets/ later */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
            <div className="w-full h-full rounded-full border-2 border-primary/30 p-2 relative z-10 overflow-hidden bg-surface shadow-2xl flex items-center justify-center text-6xl">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
