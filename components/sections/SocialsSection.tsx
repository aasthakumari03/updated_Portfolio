"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from "@/app/constants/data";
import Magnetic from "@/components/ui/Magnetic";

const SocialsSection = () => {
    return (
        <section id="socials" className="py-24 px-12 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
            <div className="space-y-16">
                <div className="space-y-4 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                        style={{ fontFamily: "var(--font-royal)" }}
                    >
                        Social Presence
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto"
                    >
                        Connect with me across various platforms to stay updated with my latest projects and research.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOCIAL_LINKS.map((social, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Magnetic strength={0.1}>
                                <a 
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md hover:border-teal-400/50 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                        <div 
                                            className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                                            style={{ color: social.color }}
                                        >
                                            <social.icon size={32} />
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                                {social.name}
                                            </h3>
                                            <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                                                {social.stats}
                                            </p>
                                        </div>

                                        <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                                                Follow & Connect →
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Magnetic>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialsSection;
