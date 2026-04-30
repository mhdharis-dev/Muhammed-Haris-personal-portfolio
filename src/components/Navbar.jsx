import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md py-4">
      <div className="flex justify-between items-center px-6">
        
        <h1 className="text-xl font-bold text-primary">Haris.dev</h1>

        {/* Desktop */}
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-textSecondary hover:text-primary">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar