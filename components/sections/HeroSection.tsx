"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import Magnetic from "@/components/Magnetic";

const HeroSection = () => {
    const name = "Aastha Kumari";
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.05 * i + 0.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            }
        })
    };

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center relative overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto space-y-12"
            >
                {/* Professional Title Badge */}
                <motion.div variants={itemVariants} className="flex justify-center">
                    <div className="relative group p-[1px] rounded-full overflow-hidden bg-white/10 hover:bg-white/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        <div className="px-6 py-1.5 bg-black/40 rounded-full backdrop-blur-xl border border-white/5 relative z-10">
                            <span className="text-[10px] md:text-xs font-bold text-white/60 tracking-[0.3em] uppercase">
                                Software Developer & AI/ML Student
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Heading with Letter Reveal */}
                <div className="relative w-full flex justify-center overflow-hidden py-4">
                    <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif leading-none tracking-tighter text-white whitespace-nowrap relative z-10 w-full text-center flex justify-center">
                        {name.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className={char === " " ? "mx-4" : "inline-block"}
                            >
                                <span className="bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent hover:text-teal-400 transition-colors duration-500 cursor-default">
                                    {char}
                                </span>
                            </motion.span>
                        ))}
                    </h1>
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40%] bg-teal-500/10 blur-[120px] -z-10 rounded-full scale-150 opacity-50" />
                </div>

                {/* Subtext */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
                        Crafting <span className="text-white font-medium">high-performance</span> digital systems <br className="hidden md:block" />
                        where pure logic meets <span className="text-teal-400 font-medium italic">exceptional design</span>.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
                    <Magnetic strength={0.1}>
                        <a href="#projects" className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                            <div className="absolute inset-0 bg-teal-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            <span className="relative z-10 flex items-center gap-3">
                                View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </Magnetic>
                    <Magnetic strength={0.1}>
                        <button className="group px-10 py-5 bg-transparent border border-white/10 rounded-full font-bold text-lg hover:border-white/30 transition-all duration-500 backdrop-blur-sm flex items-center gap-3">
                            Read Resume <FaArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </Magnetic>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hover:opacity-100 transition-opacity duration-300"
            >
                <a href="#about" className="flex flex-col items-center gap-4">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Explore</span>
                    <div className="w-6 h-10 rounded-full border border-white/10 flex justify-center p-1.5">
                        <motion.div 
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default HeroSection;
