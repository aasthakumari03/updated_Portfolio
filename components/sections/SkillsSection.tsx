"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    SiJavascript, 
    SiTypescript, 
    SiTailwindcss, 
    SiNextdotjs, 
    SiPython, 
    SiReact, 
    SiTensorflow, 
    SiFigma, 
    SiGithub 
} from "react-icons/si";

const SKILLS = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical <span className="text-teal-400">Stack</span></h2>
                    <p className="text-white/50 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal-400/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                            <skill.icon 
                                className="text-4xl mb-3 transition-colors duration-300" 
                                style={{ color: skill.color }}
                            />
                            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
