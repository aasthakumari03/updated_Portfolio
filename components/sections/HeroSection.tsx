
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Magnetic from "@/components/Magnetic";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Main Heading */}
                <div className="relative w-full flex justify-center">
                    <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-gothic leading-none tracking-tight animate-fade-in [animation-delay:100ms] text-white whitespace-nowrap relative z-10 w-full text-center">
                        <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent hover:brightness-125 transition-all duration-700">
                            Aastha Kumari
                        </span>
                    </h1>
                    <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 animate-pulse-slow max-w-4xl mx-auto"></div>
                </div>

                {/* Professional Title Card */}
                <div className="animate-fade-in [animation-delay:300ms] flex justify-center">
                    <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md cursor-default transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                        <span className="text-xs md:text-sm font-medium text-white/80 tracking-[0.2em] transition-colors duration-300">
                            SOFTWARE DEVELOPER
                        </span>
                    </div>
                </div>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:400ms]">
                    Hi, I’m Aastha. A first-year AI & ML student dedicated to <br />
                    <span className="text-white">crafting digital experiences</span> that blend logic with artistry.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in [animation-delay:600ms]">
                    <Magnetic strength={0.2}>
                        <a href="#projects" className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-teal-400 hover:text-black transition-all duration-500 flex items-center gap-3 shadow-xl shadow-white/5 hover:scale-105 active:scale-95">
                            📂 My work
                        </a>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                        <button className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-500 flex items-center gap-2 backdrop-blur-sm hover:border-teal-400/30">
                            My resume <FaArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </Magnetic>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1s] opacity-50 hover:opacity-100 transition-opacity duration-300">
                <a href="#about" className="flex flex-col items-center gap-3">
                    <span className="text-[10px] font-medium text-white/40 uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
                        <div className="w-1 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
