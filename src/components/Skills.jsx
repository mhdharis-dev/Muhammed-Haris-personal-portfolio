import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Flutter', level: 98 },
  { name: 'Dart', level: 90 },
  { name: 'Firebase', level: 89 },
  { name: 'HTML/CSS', level: 77 },
  { name: 'JavaScript', level: 70 },
  { name: 'C', level: 60 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Java', level: 65 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Supabase', level: 65 },
  { name: 'Git & GitHub', level: 95 },

];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
            >
              My Skills
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-textPrimary mb-6"
            >
              Technical Expertise
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-textSecondary text-lg mb-8 leading-relaxed max-w-lg"
            >
              I've spent years honing my skills in mobile and web development. While Flutter is my core expertise, I'm adaptable and proficient across the modern stack, ensuring I can bring any vision to life.
            </motion.p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl bg-surface/30 border border-slate-700/40 p-5 shadow-lg shadow-slate-950/10"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2 gap-3">
                    <span className="text-lg font-semibold text-textPrimary">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="relative h-4 w-full rounded-full bg-slate-200/20 overflow-hidden border border-slate-700/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.08 }}
                        className="absolute inset-y-0 left-0 h-full rounded-full bg-[#6366f1] shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                        style={{ width: `${skill.level}%` }}
                      />
                      <div
                        className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#6366f1] shadow-lg"
                        style={{ left: `calc(${skill.level}% - 0.75rem)` }}
                      />
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
