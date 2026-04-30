import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={40} className="text-primary mb-4" />,
    title: 'Mobile App Development',
    description: 'Building high-performance, cross-platform mobile applications for iOS and Android using Flutter.',
  },
  {
    icon: <Layout size={40} className="text-secondary mb-4" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive, beautiful, and user-centric interfaces that provide exceptional experiences.',
  },
  {
    icon: <Code size={40} className="text-primary mb-4" />,
    title: 'Custom Software',
    description: 'Developing tailored software solutions to solve unique business challenges with clean, scalable code.',
  },
  {
    icon: <Zap size={40} className="text-secondary mb-4" />,
    title: 'App Optimization',
    description: 'Refactoring and optimizing existing apps for better performance, faster load times, and smoother UI.',
  },
];

const Services = () => {
  return (
    <section id="services" className="w-screen h-screen flex items-center justify-center scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-textPrimary"
          >
            What I Do Best
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-slate-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-textPrimary mb-3">{service.title}</h4>
              <p className="text-textSecondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
