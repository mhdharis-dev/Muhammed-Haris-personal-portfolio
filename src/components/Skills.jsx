import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Flutter', level: 98 },
  { name: 'Dart', level: 90 },
  { name: 'Firebase', level: 89 },
  { name: 'HTML / CSS', level: 77 },
  { name: 'JavaScript', level: 70 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Supabase', level: 65 },
  { name: 'Java / C', level: 65 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Git & GitHub', level: 95 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-[#F4F7FF]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
          
          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="section-badge">My Skills</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1736] mb-4 sm:mb-6 font-['Nobile'] leading-tight"
            >
              Technical Expertise
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#475569] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed"
            >
              I've spent years honing my skills in mobile and web software engineering. While Flutter & Dart are my core domain, I am proficient across full-stack tools, ensuring seamless design-to-code execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[rgba(41,82,227,0.12)] shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EEF3FF] text-[#2952E3] flex items-center justify-center font-bold text-xl">
                  98%
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1736]">Primary Focus</h4>
                  <p className="text-xs text-[#64748B]">Cross-Platform Mobile App Development</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Skills Progress Grid */}
          <div className="grid gap-3.5 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="scholo-card p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-[#0B1736] font-['Nobile']">{skill.name}</span>
                  <span className="text-xs font-extrabold text-[#2952E3] bg-[#EEF3FF] px-2.5 py-1 rounded-full border border-[rgba(41,82,227,0.15)]">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-3 w-full rounded-full bg-[#EEF3FF] overflow-hidden border border-[rgba(41,82,227,0.1)]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#2952E3] to-[#0EA5E9] shadow-[0_0_12px_rgba(41,82,227,0.4)]"
                  />
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

