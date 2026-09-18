import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onOpenResume }) => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'services', name: 'Services', href: '#services' },
    { id: 'portfolio', name: 'Portfolio', href: '#portfolio' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180; // offset for navbar height

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <nav 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-md border border-[rgba(41,82,227,0.15)] shadow-[0_8px_30px_rgb(11,23,54,0.08)] py-2.5 px-4 sm:py-3 sm:px-6' 
            : 'bg-white/60 backdrop-blur-sm border border-transparent py-3 px-4 sm:py-4 sm:px-6'
        }`}
      >
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2952E3] flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md shadow-[#2952E3]/25 group-hover:scale-105 transition-transform">
              H
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-[#0B1736] tracking-tight font-['Nobile']">
              Haris<span className="text-[#2952E3]">.dev</span>
            </span>
          </a>

          {/* Desktop Links (1024px+) */}
          <ul className="hidden lg:flex items-center gap-1 bg-[#F4F7FF] p-1.5 rounded-full border border-[rgba(41,82,227,0.1)] relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="relative z-10">
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors duration-200 relative block whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-[#475569] hover:text-[#2952E3]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTabPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-[#2952E3] rounded-full shadow-md shadow-[#2952E3]/25 -z-10"
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenResume}
              className="scholo-btn-secondary px-3.5 py-2 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1.5"
            >
              <FileText size={13} /> Resume
            </button>
            <a
              href="#contact"
              className="scholo-btn-primary px-4 py-2 text-xs uppercase tracking-wider font-bold inline-flex items-center gap-1.5"
            >
              <Sparkles size={13} /> Hire Me
            </a>
          </div>

          {/* Mobile/Tablet Drawer Toggle */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden w-10 h-10 rounded-full bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center transition-all hover:bg-[#2952E3] hover:text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-6xl mx-auto mt-2 bg-white rounded-3xl border border-[rgba(41,82,227,0.15)] shadow-xl overflow-hidden p-5"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`block px-4 py-3 rounded-2xl font-semibold transition-colors ${
                        isActive 
                          ? 'bg-[#2952E3] text-white shadow-md shadow-[#2952E3]/20' 
                          : 'text-[#0B1736] hover:bg-[#EEF3FF] hover:text-[#2952E3]'
                      }`}
                      onClick={() => {
                        setActiveSection(link.id);
                        setOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="scholo-btn-secondary block text-center py-3 text-sm font-bold uppercase tracking-wider mt-1 sm:mt-0 w-full"
                >
                  View Resume
                </button>
                <a
                  href="#contact"
                  className="scholo-btn-primary block text-center py-3 text-sm font-bold uppercase tracking-wider w-full"
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar