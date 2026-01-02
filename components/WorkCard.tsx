"use client";

import React from 'react';
import { FaCode, FaArrowRight } from 'react-icons/fa';

const WorkCard = () => {
    return (
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="group relative w-36 h-20 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:scale-110 flex items-center justify-center p-3 cursor-pointer overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />

                <a href="#projects" className="relative z-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                        <FaCode size={16} />
                    </div>

                    <div className="text-left">
                        <h3 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wider">My Work</h3>
                    </div>
                </a>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 text-white font-black text-[10px] tracking-widest">
                    <span className="flex items-center gap-2">VIEW PROJECTS <FaArrowRight size={10} /></span>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
