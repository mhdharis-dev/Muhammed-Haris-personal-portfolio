import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles, FileText, Download, Globe } from 'lucide-react';

const Home = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative w-full min-h-screen pt-40 sm:pt-44 pb-24 flex items-center justify-center scroll-mt-24 overflow-hidden bg-[#F4F7FF]">
      {/* Scholomates Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2952E3]/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="section-badge">
              <Sparkles size={14} /> Expert Flutter Developer
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-4 text-[#0B1736] leading-tight font-['Nobile'] tracking-tight"
          >
            Muhammed Haris
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#475569]"
          >
            Crafting <span className="typing-text font-bold">Cross-Platform Apps...</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#475569] mb-8 max-w-lg mx-auto md:mx-0 text-base sm:text-lg leading-relaxed"
          >
            Specializing in high-performance Flutter mobile & web architectures. Transforming complex ideas into sleek, scalable, and intuitive digital products.
          </motion.p>

          {/* CTA Action Buttons - Balanced Mobile & Desktop Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center md:justify-start gap-3 w-full max-w-sm xs:max-w-none mx-auto md:mx-0"
          >
            <a href="#contact" className="scholo-btn-primary px-7 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#2952E3]/20">
              Hire Me <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-2 w-full xs:w-auto">
              <button
                onClick={onOpenResume}
                className="scholo-btn-secondary px-6 py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 grow xs:grow-0"
              >
                <FileText size={18} className="text-[#2952E3]" /> View Resume
              </button>
              <a
                href="/Muhammed_Haris_Resume.pdf"
                download="Muhammed_Haris_Resume.pdf"
                className="scholo-btn-secondary p-3.5 text-sm flex items-center justify-center text-[#475569] hover:text-[#2952E3] shrink-0"
                title="Download Resume PDF"
                aria-label="Download Resume PDF"
              >
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
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
              className="w-11 h-11 rounded-full bg-white border border-[rgba(41,82,227,0.12)] text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm flex items-center justify-center"
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
              className="w-11 h-11 rounded-full bg-white border border-[rgba(41,82,227,0.12)] text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm flex items-center justify-center"
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
              className="w-11 h-11 rounded-full bg-white border border-[rgba(41,82,227,0.12)] text-[#475569] hover:bg-[#2952E3] hover:text-white transition-all shadow-sm flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3" />
                <path d="M18 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.09-3.5s-1.28-.35-3.03 1.48A13.38 13.38 0 0 0 10 2.5c-3.73-1.83-5-1.48-5-1.48A5.07 5.07 0 0 0 2 4.77 5.44 5.44 0 0 0 1 11.13c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 18.13V22" />
              </svg>
            </a>
            <a
              href="https://www.scholomates.com/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#2952E3]/10 border border-[rgba(41,82,227,0.25)] text-[#2952E3] hover:bg-[#2952E3] hover:text-white transition-all flex items-center gap-2 font-bold text-xs sm:text-sm shadow-sm"
            >
              <Globe size={15} />
              <span>scholomates.com</span>
            </a>
            <a
              href="tel:+919544234298"
              className="px-4 py-2.5 rounded-full bg-[#EEF3FF] border border-[rgba(41,82,227,0.15)] text-[#2952E3] hover:bg-[#2952E3] hover:text-white transition-all flex items-center gap-2 font-semibold text-xs sm:text-sm"
            >
              <Phone size={15} />
              <span>+91 9544234298</span>
            </a>
          </motion.div>
        </div>

        {/* Profile Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2952E3] to-[#0EA5E9] rounded-full opacity-20 blur-2xl"></div>
            <div className="w-full h-full rounded-full border-4 border-[#EEF3FF] p-2 relative z-10 overflow-hidden bg-white shadow-[0_20px_48px_rgba(41,82,227,0.15)] flex items-center justify-center">
              <img
                src="/profile.png"
                alt="Muhammed Haris"
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

