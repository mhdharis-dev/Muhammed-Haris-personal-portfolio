import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // Close mobile menu on scroll or resize for better UX
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">

        <h1 className="text-xl font-bold text-primary">Haris.dev</h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-textSecondary hover:text-primary transition-colors font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-textPrimary hover:text-primary transition-colors focus:outline-none">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-surface border-t border-slate-700/50 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-textSecondary hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar