import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-[100%] blur-[100px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-hover border border-border rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-textSecondary">Available for new projects</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-textPrimary mb-6"
        >
          Building Digital <br />
          Products that Scale.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-textSecondary max-w-2xl mb-10 leading-relaxed"
        >
          I'm <span className="text-textPrimary font-medium">Mir</span>, a Full-Stack Engineer specializing in high-performance web applications, modern UIs, and seamless user experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="#work"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 font-medium text-white transition-all duration-300 hover:w-40 w-36 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            <div className="absolute top-0 -left-[100%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] transition-all duration-1000 group-hover:left-[200%]" />
            <span className="mr-2">View Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 font-medium text-textPrimary transition-colors hover:bg-hover"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Tech Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative w-full max-w-4xl p-1 rounded-xl bg-gradient-to-b from-border to-transparent backdrop-blur-sm"
        >
          <div className="relative rounded-lg bg-surface/80 backdrop-blur-sm border border-border overflow-hidden aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
            <div className="grid grid-cols-3 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex flex-col items-center gap-2"><Code2 size={40} className="text-blue-400" /><span className="text-xs font-mono text-textSecondary">REACT</span></div>
               <div className="flex flex-col items-center gap-2"><Code2 size={40} className="text-yellow-400" /><span className="text-xs font-mono text-textSecondary">NODE</span></div>
               <div className="flex flex-col items-center gap-2"><Code2 size={40} className="text-teal-400" /><span className="text-xs font-mono text-textSecondary">TAILWIND</span></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;