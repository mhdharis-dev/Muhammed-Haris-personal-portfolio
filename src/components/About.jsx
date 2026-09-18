import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Code, MapPin } from 'lucide-react';
import aboutImage from '../assets/about-image-3.svg';

const About = () => {
  const infoCards = [
    { label: 'Name', value: 'Muhammed Haris', icon: <User size={18} className="text-[#2952E3]" /> },
    { label: 'Age', value: '16 Years Old', icon: <Calendar size={18} className="text-[#2952E3]" /> },
    { label: 'Role', value: 'Expert Flutter Developer', icon: <Code size={18} className="text-[#2952E3]" /> },
    { label: 'Location', value: 'Malappuram, Kerala', icon: <MapPin size={18} className="text-[#2952E3]" /> },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-24 flex items-center justify-center scroll-mt-24 overflow-hidden bg-[#EEF4FD]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full max-w-md mx-auto md:mr-auto">
              <div className="absolute inset-0 bg-[#2952E3] translate-x-3 translate-y-3 rounded-3xl opacity-20 -z-10"></div>
              <div className="w-full h-96 bg-white rounded-3xl border border-[rgba(41,82,227,0.15)] shadow-[0_12px_32px_rgba(11,23,54,0.06)] overflow-hidden flex items-center justify-center p-6">
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
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1736] mb-6 leading-tight font-['Nobile']">
              A passionate developer building the future
            </h3>
            
            <p className="text-[#475569] text-base sm:text-lg mb-6 leading-relaxed">
              Hi, I'm Muhammed Haris. At 16 years old, I've immersed myself in cross-platform mobile software engineering, specializing as an Expert Flutter Developer. My journey began with curiosity about application internals and evolved into crafting production-grade software solutions.
            </p>
            
            <p className="text-[#475569] text-base sm:text-lg mb-8 leading-relaxed">
              I love turning complex requirements into simple, beautiful, and intuitive user experiences. When I'm not writing Dart & Flutter code, I'm exploring new web technologies, UI design paradigms, and scalable backend infrastructure.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((info, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-[rgba(41,82,227,0.12)] shadow-sm flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">{info.label}</span>
                    <span className="text-sm font-bold text-[#0B1736] block">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

