import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about-image-3.svg';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-24 flex items-center justify-center scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="relative w-full max-w-md mx-auto md:mr-auto">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-50"></div>
              <div className="w-full h-96 bg-surface rounded-2xl border border-slate-700 shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src={aboutImage}
                  alt="About illustration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-textPrimary mb-6">A passionate developer building the future</h3>
            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              Hi, I'm Muhammed Haris. At just 16 years old, I've immersed myself in the world of software development, specializing as an Expert Flutter Developer. My journey began with a curiosity about how applications work, which quickly turned into a passion for creating them.
            </p>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, I'm constantly learning new technologies and pushing the boundaries of what I can build next.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-textPrimary font-bold text-xl">Name</h4>
                <p className="text-textSecondary">Muhammed Haris</p>
              </div>
              <div>
                <h4 className="text-textPrimary font-bold text-xl">Age</h4>
                <p className="text-textSecondary">16</p>
              </div>
              <div>
                <h4 className="text-textPrimary font-bold text-xl">Role</h4>
                <p className="text-textSecondary">Flutter Developer</p>
              </div>
              <div>
                <h4 className="text-textPrimary font-bold text-xl">Location</h4>
                <p className="text-textSecondary">Global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
