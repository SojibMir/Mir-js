import React, { useState, useEffect } from 'react';
import { SKILLS, SERVICES } from '../constants';
import { ArrowUpRight, Terminal, Cpu, Zap, Code2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeSimulator = () => {
  const [code, setCode] = useState('');
  const fullCode = `const developer = {
  name: 'Mir',
  skills: ['React', 'Next.js', 'Node'],
  hardWorker: true,
  status: 'Ready to Ship 🚀'
};

await developer.buildFuture();`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(timer);
        setTimeout(() => {
           i = 0;
           setCode('');
           // simple reset loop for visual interest
        }, 5000); 
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed text-indigo-300">
      <pre className="whitespace-pre-wrap">{code}<span className="animate-pulse">|</span></pre>
    </div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-background transition-colors duration-300 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
             <div className="h-1 w-10 bg-indigo-500 rounded-full" />
             <span className="text-indigo-500 font-mono text-sm tracking-wider uppercase">System Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">The Future</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-textSecondary max-w-2xl text-lg"
          >
            Deploying high-performance solutions with cutting-edge technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          
          {/* Card 1: The Code Editor (Simulation) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-1 rounded-3xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group shadow-2xl shadow-black/50"
          >
            {/* Window Header */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 px-3 py-1 bg-black/40 rounded text-[10px] text-gray-400 font-mono flex items-center gap-2">
                 <Code2 size={10} /> developer.ts
              </div>
            </div>
            
            {/* Editor Body */}
            <div className="pt-16 pb-8 px-8 h-full relative z-10">
               <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
               <CodeSimulator />
            </div>

            {/* Glow Effects */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-500" />
          </motion.div>


          {/* Card 2: Tech Stack Hologram */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="row-span-2 rounded-3xl p-8 bg-surface border border-white/10 relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                     <Cpu size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-textPrimary">Tech Arsenal</h3>
                </div>

                <div className="space-y-4">
                  {SKILLS.map((skill, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-crosshair group/item"
                    >
                      <div className="flex items-center gap-3">
                        <skill.icon size={18} className="text-textSecondary group-hover/item:text-indigo-400 transition-colors" />
                        <div>
                           <div className="text-sm font-medium text-textPrimary group-hover/item:text-white transition-colors">{skill.name}</div>
                           <div className="text-[10px] text-textSecondary uppercase tracking-widest">{skill.description.split(',')[0]}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </motion.div>


          {/* Card 3: Dynamic Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 bg-surface border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Animated Gradient Border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20">
                   <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">{SERVICES[0].title}</h3>
                <p className="text-sm text-textSecondary">{SERVICES[0].description}</p>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium text-violet-400 gap-1 group-hover:gap-2 transition-all">
                <span>Explore Service</span> <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Global Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl p-8 bg-surface border border-white/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] group-hover:bg-blue-500/30 transition-colors" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                   <Globe className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">{SERVICES[2].title}</h3>
                <p className="text-sm text-textSecondary">{SERVICES[2].description}</p>
              </div>
               <div className="mt-4 flex items-center text-xs font-medium text-blue-400 gap-1 group-hover:gap-2 transition-all">
                <span>View Specs</span> <ArrowUpRight size={14} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;