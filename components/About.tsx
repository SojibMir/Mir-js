import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, Globe, FileText, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
         {/* Title */}
         <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-6">About <span className="text-textSecondary">Me</span></h2>
                <p className="text-textSecondary max-w-2xl text-lg">
                Self-motivated and hard-working developer with a passion for creating innovative web solutions.
                </p>
            </div>
            {/* Download CV Button Placeholder */}
            <button className="flex items-center gap-2 bg-surface border border-border text-textPrimary px-6 py-3 rounded-full hover:bg-hover transition-colors">
                <Download size={18} />
                <span>Download Resume</span>
            </button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Bio & Education */}
            <div className="lg:col-span-2 space-y-12">
                {/* Career Objective */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border rounded-2xl p-8"
                >
                    <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
                        <User className="text-indigo-500" /> Career Objective
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                        Searching for desirable opportunity with which I will have the scope in utilizing my skills and potential to do something innovative for the benefit of Marketing and the society as well and from which I will be able to enhance my knowledge and efficiency.
                    </p>
                </motion.div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-6 flex items-center gap-2">
                        <GraduationCap className="text-indigo-500" /> Education
                    </h3>
                    <div className="space-y-6">
                        {/* BBA */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-border p-6 rounded-xl hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                <h4 className="text-lg font-bold text-textPrimary">Bachelor of Business Administration (BBA)</h4>
                                <span className="inline-block self-start text-xs font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">Ongoing</span>
                            </div>
                            <p className="text-textSecondary mb-2 font-medium">Bangladesh Institute of Science & Technology (National University)</p>
                            <p className="text-sm text-textSecondary">Result: Will be declared soon</p>
                        </motion.div>

                        {/* HSC */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-surface border border-border p-6 rounded-xl hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                <h4 className="text-lg font-bold text-textPrimary">Higher Secondary Certificate (H.S.C)</h4>
                                <span className="inline-block self-start text-xs font-medium text-textSecondary bg-hover px-3 py-1 rounded-full">2017</span>
                            </div>
                            <p className="text-textSecondary mb-2 font-medium">Group: Business Studies | Board: Dhaka</p>
                            <p className="text-sm text-textSecondary">Result: GPA- 2.92 (Out of 5.00)</p>
                        </motion.div>

                        {/* SSC */}
                         <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-surface border border-border p-6 rounded-xl hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                <h4 className="text-lg font-bold text-textPrimary">Secondary School Certificate (S.S.C)</h4>
                                <span className="inline-block self-start text-xs font-medium text-textSecondary bg-hover px-3 py-1 rounded-full">2015</span>
                            </div>
                            <p className="text-textSecondary mb-2 font-medium">Group: Business Studies | Board: Dhaka</p>
                            <p className="text-sm text-textSecondary">Result: GPA- 4.00 (Out of 5.00)</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sidebar - Personal Info & Languages */}
            <div className="space-y-8">
                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border border-border rounded-2xl p-8"
                 >
                    <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2">
                        <FileText className="text-indigo-500" /> Personal Details
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex flex-col border-b border-border pb-3 last:border-0 last:pb-0">
                            <span className="text-textSecondary mb-1">Full Name</span>
                            <span className="text-textPrimary font-medium">Shafikul Islam Sojib</span>
                        </li>
                        <li className="flex flex-col border-b border-border pb-3 last:border-0 last:pb-0">
                            <span className="text-textSecondary mb-1">Father's Name</span>
                            <span className="text-textPrimary font-medium">Habibur Rahman</span>
                        </li>
                        <li className="flex flex-col border-b border-border pb-3 last:border-0 last:pb-0">
                            <span className="text-textSecondary mb-1">Date of Birth</span>
                            <span className="text-textPrimary font-medium">12th January 1999</span>
                        </li>
                        <li className="flex flex-col border-b border-border pb-3 last:border-0 last:pb-0">
                            <span className="text-textSecondary mb-1">Nationality</span>
                            <span className="text-textPrimary font-medium">Bangladeshi</span>
                        </li>
                        <li className="flex flex-col border-b border-border pb-3 last:border-0 last:pb-0">
                             <span className="text-textSecondary mb-1">Permanent Address</span>
                             <span className="text-textPrimary font-medium leading-relaxed">Vill: Hogla, P.O: Kalta, P.S: Bauphal, Dist: Patuakhali.</span>
                        </li>
                    </ul>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface border border-border rounded-2xl p-8"
                 >
                    <h3 className="text-xl font-bold text-textPrimary mb-6 flex items-center gap-2">
                        <Globe className="text-indigo-500" /> Languages
                    </h3>
                     <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-textPrimary font-medium">Bengali</span>
                                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Mother Tongue</span>
                            </div>
                            <div className="h-1.5 bg-hover rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-full rounded-full"></div>
                            </div>
                        </div>
                         <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-textPrimary font-medium">English</span>
                                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Excellent</span>
                            </div>
                            <div className="h-1.5 bg-hover rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[95%] rounded-full"></div>
                            </div>
                            <p className="text-xs text-textSecondary mt-2">Reading, writing & speaking</p>
                        </div>
                     </div>
                 </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default About;