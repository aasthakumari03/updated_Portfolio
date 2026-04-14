"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// --- Main Hero Component ---
export const WovenLightHero = () => {
    const textControls = useAnimation();
    const buttonControls = useAnimation();

    useEffect(() => {
        textControls.start(i => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                delay: i * 0.1 + 1.5,
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }));
        buttonControls.start({
            opacity: 1,
            transition: { delay: 2.5, duration: 1 }
        });
    }, [textControls, buttonControls]);

    const headline = "AASTHA KUMARI";

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center">
            <div className="relative z-10 px-4 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-[8rem] font-medium text-white leading-[0.8] tracking-[0.15em]" style={{ fontFamily: "var(--font-premium)", textShadow: '0 0 100px rgba(255, 255, 255, 0.4)' }}>
                    {headline.split(" ").map((word, i) => (
                        <span key={i} className="block md:inline-block mx-4">
                            {word.split("").map((char, j) => (
                                <motion.span key={j} custom={i * 7 + j} initial={{ opacity: 0, y: 100, rotateX: -90 }} animate={textControls} style={{ display: 'inline-block' }}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>

                <div className="mt-12 space-y-4">
                    <motion.p
                        custom={headline.length + 5}
                        initial={{ opacity: 0, y: 30 }}
                        animate={textControls}
                        className="text-xl md:text-4xl font-medium text-white/90 uppercase tracking-widest bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10 inline-block"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Aspiring Software Developer
                    </motion.p>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-16 flex flex-wrap items-center justify-center gap-6">
                    <a href="#projects" className="group relative rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="relative z-10">My Work</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                    </a>

                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative rounded-full border border-white/10 bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/5 hover:border-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <span className="relative z-10">Resume</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};
