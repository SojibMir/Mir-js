import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-4">Selected <span className="text-textSecondary">Works</span></h2>
            <p className="text-textSecondary text-lg">A curated selection of projects designed for performance and scale.</p>
          </div>
          <a 
            href="https://github.com/SojibMir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-textPrimary border-b border-textPrimary pb-1 hover:text-textSecondary transition-colors"
          >
            View Github
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 } 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-textPrimary/10 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative bg-gray-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-textSecondary px-2 py-1 bg-hover rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                     <a href={project.link} className="text-textSecondary hover:text-textPrimary transition-colors hover:scale-110 transform">
                       <Github size={20} />
                     </a>
                     <a href={project.link} className="text-textSecondary hover:text-textPrimary transition-colors hover:scale-110 transform">
                       <ExternalLink size={20} />
                     </a>
                  </div>
                </div>
                <p className="text-textSecondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;