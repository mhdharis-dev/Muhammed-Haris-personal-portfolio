import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Code, MapPin, Globe } from 'lucide-react';
import aboutImage from '../assets/about-image-3.svg';

const About = () => {
  const infoCards = [
    { label: 'Name', value: 'Muhammed Haris', icon: <User size={18} className="text-[#2952E3]" /> },
    { label: 'Live Platform', value: 'scholomates.com', icon: <Globe size={18} className="text-[#2952E3]" />, link: 'https://www.scholomates.com/' },
    { label: 'Role', value: 'Expert Flutter Developer', icon: <Code size={18} className="text-[#2952E3]" /> },
    { label: 'Location', value: 'Malappuram, Kerala', icon: <MapPin size={18} className="text-[#2952E3]" /> },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center scroll-mt-24 overflow-hidden bg-[#EEF4FD]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16">
          
          {/* Left Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto md:mr-auto">
              <div className="absolute inset-0 bg-[#2952E3] translate-x-3 translate-y-3 rounded-3xl opacity-20 -z-10"></div>
              <div className="w-full h-80 sm:h-96 bg-white rounded-3xl border border-[rgba(41,82,227,0.15)] shadow-[0_12px_32px_rgba(11,23,54,0.06)] overflow-hidden flex items-center justify-center p-6">
                <img
                  src={aboutImage}
                  alt="About illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="mb-3">
              <span className="section-badge">About Me</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1736] mb-4 sm:mb-6 leading-tight font-['Nobile']">
              A passionate developer building the future
            </h3>
            
            <p className="text-[#475569] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
              Hi, I'm Muhammed Haris. At 16 years old, I've immersed myself in cross-platform mobile software engineering, specializing as an Expert Flutter Developer. My journey began with curiosity about application internals and evolved into crafting production-grade software solutions.
            </p>
            
            <p className="text-[#475569] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              I love turning complex requirements into simple, beautiful, and intuitive user experiences. When I'm not writing Dart & Flutter code, I'm exploring new web technologies, UI design paradigms, and scalable backend infrastructure.
            </p>

            {/* ScholoMates Highlight Card */}
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-[rgba(41,82,227,0.18)] shadow-sm text-left flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#2952E3] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#2952E3]/20 mt-0.5">
                <Globe size={20} />
              </div>
              <div className="grow min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h4 className="font-bold text-[#0B1736] text-sm sm:text-base font-['Nobile']">ScholoMates Ecosystem</h4>
                  <a
                    href="https://www.scholomates.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-[#2952E3] hover:underline inline-flex items-center gap-1 shrink-0"
                  >
                    www.scholomates.com &rarr;
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  ScholoMates is an all-in-one school digitization platform that streamlines student attendance, teacher suites, exam marks, parent tracking, and automated academic PDF reports.
                </p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {infoCards.map((info, idx) => {
                const CardWrapper = info.link ? 'a' : 'div';
                const wrapperProps = info.link ? { href: info.link, target: '_blank', rel: 'noreferrer' } : {};
                return (
                  <CardWrapper
                    key={idx}
                    {...wrapperProps}
                    className={`bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-3.5 transition-all min-w-0 ${
                      info.link ? 'hover:border-[#2952E3] hover:shadow-md group' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">{info.label}</span>
                      <span className={`text-xs sm:text-sm font-bold text-[#0B1736] block break-words ${info.link ? 'group-hover:text-[#2952E3] transition-colors' : ''}`}>
                        {info.value}
                      </span>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

