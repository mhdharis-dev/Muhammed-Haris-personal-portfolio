import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/80 text-slate-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-sm md:text-base text-white font-semibold">
              Designed by ©2025 All rights reserved | Muhammed Haris
            </p>
            <p className="text-sm text-slate-400 max-w-xl mx-auto md:mx-0">
              Available for freelance work, mobile app development, UI/UX design and long-term software collaborations.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-end">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-slate-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a href="https://www.instagram.com/hariiiissz/?__pwa=1#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M16.5 7.5h.01" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/muhammed-haris-/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoIt8t%2FvwQ6mrwEP89j2SwQ%3D%3D" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h4v12H4z" />
                  <circle cx="6" cy="6" r="2" />
                  <path d="M9 12v9h4v-5.5c0-2.5 3-2.7 3 0V21h4v-6.5c0-5-5-4.8-7-2.4" />
                </svg>
              </a>
              <a href="https://github.com/mhdharis-dev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3" />
                  <path d="M16 17.5c4 0 5-2 5-6.5 0-4-3-7-8-7s-8 3-8 7c0 4.5 1 6.5 5 6.5" />
                  <path d="M12 11.5c0 1.4-1.2 2.5-2.7 2.5-1.5 0-2.7-1.1-2.7-2.5 0-1.4 1.2-2.5 2.7-2.5 1.5 0 2.7 1.1 2.7 2.5Z" />
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
