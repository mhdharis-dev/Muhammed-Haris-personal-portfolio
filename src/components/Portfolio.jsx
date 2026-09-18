import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Layers, Sparkles } from 'lucide-react';
import scholoImage from '../assets/portfolio-scholo.svg';
import nextPlateImage from '../assets/portfolio-nextplate.svg';
import adminImage from '../assets/portfolio-admin.svg';
import tenraImage from '../assets/portfolio-tenra.svg';
import typingImage from '../assets/portfolio-typing.svg';
import tanzeemImage from '../assets/portfolio-tanzeem.svg';

const projects = [
  {
    id: 'scholomates',
    title: 'ScholoMates Ecosystem',
    category: 'EdTech & School Management',
    type: 'flutter',
    description: 'ScholoMates (www.scholomates.com) is a full-featured school digitization platform. It unifies Admin Web Dashboards, Teacher Suites (attendance, timetables, marks, PDF reports), and Parent Tracking Apps into a single ecosystem.',
    image: scholoImage,
    tags: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'GoRouter', 'Cloudinary', 'PDF'],
    link: 'https://www.scholomates.com/',
    github: 'https://github.com/mhdharis-dev/ScholoMates'
  },
  {
    id: 'tenra',
    title: 'Tenra Stationery',
    category: 'E-Commerce & Brand Platform',
    type: 'web',
    description: 'Modern stationery-brand web application featuring product showcases, detailed item views, user customer interface, responsive web design, and admin product management portal.',
    image: tenraImage,
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'HTML/CSS'],
    link: '#',
    github: 'https://github.com/mhdharis-dev/Tenra.Stationery'
  },
  {
    id: 'typing-platform',
    title: 'Typing & Document Services',
    category: 'Service & Document Platform',
    type: 'flutter',
    description: 'Cross-platform document assistance platform enabling typing service requests, online submissions, customer dashboard, and administrative service management.',
    image: typingImage,
    tags: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Material 3'],
    link: '#',
    github: 'https://github.com/mhdharis-dev/-Typing-Document-Services-Platform'
  },
  {
    id: 'tanzeem',
    title: 'Tanzeem MPC Coordinator',
    category: 'Event & Program Coordination',
    type: 'web',
    description: 'Meelad festival and program coordination platform designed for event scheduling, participant tracking, program management, and coordinator administration.',
    image: tanzeemImage,
    tags: ['Flutter Web', 'Dart', 'Firebase', 'Event System'],
    link: '#',
    github: 'https://github.com/mhdharis-dev/tanzeem-mpc'
  },
  {
    id: 'next-plate',
    title: 'Next Plate',
    category: 'Food Delivery Platform',
    type: 'flutter',
    description: 'Intuitive food ordering and delivery application with real-time driver tracking, elegant user interface, and seamless backend integration.',
    image: nextPlateImage,
    tags: ['Flutter', 'Supabase', 'Dart'],
    link: '#',
    github: 'https://github.com/jasim1t/next-plate'
  },
  {
    id: 'scholo-admin',
    title: 'Scholo Admin Web',
    category: 'EdTech Web Dashboard',
    type: 'web',
    description: 'Admin web portal for educators to manage course schedules, track student performance metrics, generate PDF reports, and handle school queues.',
    image: adminImage,
    tags: ['Flutter Web', 'Firebase', 'Dart'],
    link: 'https://www.scholomates.com/',
    github: 'https://github.com/mhdharis-dev/Scholo-Admin'
  }
];

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Flutter & Mobile', value: 'flutter' },
  { label: 'Web & Platforms', value: 'web' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="w-full min-h-screen py-16 sm:py-20 lg:py-24 flex items-center justify-center scroll-mt-24 overflow-hidden bg-[#EEF4FD]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="section-badge">Portfolio</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1736] font-['Nobile'] mb-4"
          >
            Featured Projects & Engineering Work
          </motion.h3>

          <p className="text-[#475569] text-base leading-relaxed">
            Explore my latest cross-platform mobile apps, web solutions, and full-stack software management platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat.value
                  ? 'bg-[#2952E3] text-white shadow-md shadow-[#2952E3]/25 scale-105'
                  : 'bg-white text-[#475569] border border-[rgba(41,82,227,0.12)] hover:border-[#2952E3] hover:text-[#2952E3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="scholo-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Project Banner Image */}
                  <div className="h-52 w-full relative overflow-hidden bg-[#EEF3FF]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1736]/70 via-transparent to-transparent"></div>
                    <span className="absolute left-5 bottom-4 text-white font-bold text-xl font-['Nobile'] drop-shadow-md">
                      {project.title}
                    </span>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-[#EEF3FF] text-[#2952E3] text-[11px] font-bold rounded-full mb-3 uppercase tracking-wider border border-[rgba(41,82,227,0.12)]">
                      {project.category}
                    </span>
                    
                    <p className="text-[#475569] text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[#F4F7FF] text-[#475569] text-[11px] font-semibold rounded-full border border-[rgba(11,23,54,0.08)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Card Footer Links */}
                <div className="px-6 pb-6 pt-0 flex justify-between items-center border-t border-[rgba(11,23,54,0.06)] pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[#64748B] hover:text-[#2952E3] flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <GitBranch size={15} /> Source
                  </a>
                  <a 
                    href={project.link !== '#' ? project.link : project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2952E3] hover:text-[#1E40C2] flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    {project.link !== '#' ? 'Live Platform' : 'View Project'} <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;


