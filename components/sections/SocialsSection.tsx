"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from "@/app/constants/data";
import Magnetic from "@/components/ui/Magnetic";

const SocialsSection = () => {
    return (
        <section id="socials" className="py-24 px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Spotlight Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="space-y-24 relative z-10">
                <div className="space-y-6 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
                        style={{ fontFamily: "var(--font-royal)" }}
                    >
                        Social Presence
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-px w-24 bg-teal-500/50 mx-auto mb-6 origin-center"
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto italic font-medium"
                    >
                        Bridging development and design across major tech communities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {SOCIAL_LINKS.map((social, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: i * 0.15 + 0.5, 
                                duration: 1,
                                ease: [0.2, 0.65, 0.3, 0.9]
                            }}
                        >
                            <Magnetic strength={0.05}>
                                <a 
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 backdrop-blur-xl transition-all duration-700 overflow-hidden hover:bg-zinc-900/60"
                                >
                                    {/* Brand Color Aura */}
                                    <div 
                                        className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-[80px]"
                                        style={{ backgroundColor: social.color }}
                                    />
                                    
                                    {/* Hover Highlight Border */}
                                    <div 
                                        className="absolute inset-0 rounded-[2.5rem] border border-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 pointer-events-none"
                                        style={{ borderColor: `${social.color}44`, boxShadow: `inset 0 0 20px ${social.color}11` }}
                                    />
                                    
                                    <div className="relative z-20 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
                                        <div 
                                            className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] relative overflow-hidden"
                                            style={{ color: social.color }}
                                        >
                                            <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                            <social.icon size={36} className="relative z-10" />
                                        </div>
                                        
                                        <div className="flex-1 space-y-6">
                                            <div className="space-y-1">
                                                <h3 className="text-3xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: "var(--font-royal)" }}>
                                                    {social.name}
                                                </h3>
                                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
                                                    Professional Profile
                                                </p>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="space-y-1 border-l border-white/5 pl-4">
                                                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Followers</span>
                                                    <span className="block text-xl font-bold text-teal-400/90 tracking-tight">{social.followers}</span>
                                                </div>
                                                <div className="space-y-1 border-l border-white/5 pl-4">
                                                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Footprint</span>
                                                    <span className="block text-xs font-medium text-white/50 italic leading-tight">{social.footprint}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="self-center md:self-stretch flex items-center">
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white">
                                                <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
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
