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
                                    className="group relative block p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 overflow-hidden"
                                    style={{ 
                                        boxShadow: `0 0 0px transparent`,
                                    }}
                                >
                                    {/* Hover Highlight Border */}
                                    <div 
                                        className="absolute inset-0 rounded-[2rem] border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                                        style={{ borderColor: social.color, filter: `drop-shadow(0 0 10px ${social.color})` }}
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-20 flex flex-col items-center text-center space-y-6">
                                        <div 
                                            className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                                            style={{ color: social.color }}
                                        >
                                            <social.icon size={32} />
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-royal)" }}>
                                                {social.name}
                                            </h3>
                                            
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Followers:</span>
                                                    <span className="text-sm font-bold text-teal-400">{social.followers}</span>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Footprint:</span>
                                                    <span className="text-[11px] font-medium text-white/60 italic">{social.footprint}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 border-b border-white/20 pb-1">
                                                View Profile
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
