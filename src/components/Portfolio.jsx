import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import scholoImage from '../assets/portfolio-scholo.svg';
import nextPlateImage from '../assets/portfolio-nextplate.svg';
import adminImage from '../assets/portfolio-admin.svg';

const projects = [
  {
    title: 'Scholo',
    category: 'EdTech App',
    description: 'A comprehensive educational platform designed to streamline the learning experience. Features include progress tracking, interactive lessons, and real-time collaboration.',
    image: scholoImage,
    tags: ['Flutter', 'Firebase', 'Dart'],
    link: '#',
    github: 'https://github.com/mhdharis-dev/Scholo-User#'
  },
  {
    title: 'Next Plate',
    category: 'Food Delivery',
    description: 'An intuitive food ordering and delivery application with real-time driver tracking, elegant UI, and seamless payment integration.',
    image: nextPlateImage,
    tags: ['Flutter', 'Supabase', 'Dart'],
    link: '#',
    github: 'https://github.com/jasim1t/next-plate'
  },
  {
    title: 'Scholo Admin',
    category: 'EdTech Web App',
    description: 'An admin dashboard for Scholo, providing educators with powerful tools to manage courses, track student progress, and analyze engagement metrics.',
    image: adminImage,
    tags: ['Flutter', 'Firebase', 'Dart'],
    link: '#',
    github: 'https://github.com/mhdharis-dev/Scholo-Admin'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full min-h-screen py-24 flex items-center justify-center scroll-mt-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-textPrimary"
          >
            My Latest Work
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-surface rounded-2xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-colors group"
            >
              <div className="h-48 w-full relative overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <span className="absolute left-5 bottom-4 text-white font-bold text-2xl z-10 drop-shadow-md">
                  {project.title}
                </span>
              </div>
              
              <div className="p-6">
                <span className="text-primary text-sm font-medium mb-2 block">{project.category}</span>
                <h4 className="text-2xl font-bold text-textPrimary mb-3">{project.title}</h4>
                <p className="text-textSecondary mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-xs text-textSecondary rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center border-t border-slate-700 pt-4">
                  <a href={project.github} className="text-textSecondary hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                    <GitBranch size={18} /> Source
                  </a>
                  <a href={project.link} className="text-primary hover:text-blue-400 flex items-center gap-2 text-sm font-medium transition-colors">
                    Live Preview <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
