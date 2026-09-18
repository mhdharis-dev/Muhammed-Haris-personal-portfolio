import React from 'react';
import { Globe } from 'lucide-react';

const Footer = ({ onOpenResume }) => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0B1736] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-7 h-7 rounded-full bg-[#2952E3] flex items-center justify-center text-white font-bold text-xs">
                H
              </div>
              <span className="text-lg font-bold font-['Nobile'] text-white">
                Muhammed Haris <span className="text-[#2952E3]">.dev</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} Muhammed Haris. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 max-w-xl mx-auto md:mx-0">
              Expert Flutter & Cross-Platform Software Developer available for mobile apps, web solutions, and technical consultations.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
              <a href="#home" className="hover:text-[#2952E3] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#2952E3] transition-colors">About</a>
              <a href="#services" className="hover:text-[#2952E3] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#2952E3] transition-colors">Portfolio</a>
              <a href="https://www.scholomates.com/" target="_blank" rel="noreferrer" className="hover:text-[#2952E3] transition-colors text-[#2952E3] flex items-center gap-1 font-bold">
                <Globe size={13} /> ScholoMates
              </a>
              <button onClick={onOpenResume} className="hover:text-[#2952E3] transition-colors uppercase font-bold text-xs">Resume</button>
              <a href="#contact" className="hover:text-[#2952E3] transition-colors">Contact</a>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <a
                href="https://wa.me/919544234298?text=Hi%20Muhammed%20Haris%2C%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hariiiissz/?__pwa=1#"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2952E3] transition-all"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M16.5 7.5h.01" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-haris-/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoIt8t%2FvwQ6mrwEP89j2SwQ%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2952E3] transition-all"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h4v12H4z" />
                  <circle cx="6" cy="6" r="2" />
                  <path d="M9 12v9h4v-5.5c0-2.5 3-2.7 3 0V21h4v-6.5c0-5-5-4.8-7-2.4" />
                </svg>
              </a>
              <a
                href="https://github.com/mhdharis-dev"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#2952E3] transition-all"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3" />
                  <path d="M18 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.09-3.5s-1.28-.35-3.03 1.48A13.38 13.38 0 0 0 10 2.5c-3.73-1.83-5-1.48-5-1.48A5.07 5.07 0 0 0 2 4.77 5.44 5.44 0 0 0 1 11.13c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6.5 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

