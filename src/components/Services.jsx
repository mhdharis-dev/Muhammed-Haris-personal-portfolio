import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={32} className="text-[#2952E3]" />,
    title: 'Mobile App Development',
    description: 'Building high-performance, cross-platform mobile applications for iOS and Android using Flutter & Dart.',
  },
  {
    icon: <Layout size={32} className="text-[#2952E3]" />,
    title: 'UI/UX Design Systems',
    description: 'Designing intuitive, modern, and user-centric interfaces with polished micro-interactions and design tokens.',
  },
  {
    icon: <Code size={32} className="text-[#2952E3]" />,
    title: 'Custom Web & Admin Portals',
    description: 'Developing tailored admin dashboards and web applications integrated with real-time backends like Firebase & Supabase.',
  },
  {
    icon: <Zap size={32} className="text-[#2952E3]" />,
    title: 'App Optimization & Architecture',
    description: 'Refactoring state management and optimizing existing apps for peak performance, smoother UI rendering, and clean code principles.',
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center scroll-mt-24 overflow-hidden bg-[#F4F7FF]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="section-badge">Services</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1736] font-['Nobile']"
          >
            What I Do Best
          </motion.h3>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="scholo-card p-6 sm:p-7 lg:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#EEF3FF] border border-[rgba(41,82,227,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2952E3] transition-all duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-[#0B1736] mb-3 font-['Nobile'] group-hover:text-[#2952E3] transition-colors">
                  {service.title}
                </h4>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(11,23,54,0.06)] text-xs font-bold text-[#2952E3] tracking-wider uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More &rarr;
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

