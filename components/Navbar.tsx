"use client";
import React from 'react';

export default function Navbar() {
    return (
        <nav className="flex items-center gap-4 bg-black/20 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all hover:border-[var(--neon-blue)] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
            <a
                href="#projects"
                className="text-sm font-medium tracking-widest text-white/60 transition-all duration-300 hover:text-[var(--neon-blue)] hover:scale-110 active:scale-95 px-2 uppercase"
            >
                Projects
            </a>

            <div className="h-4 w-[1px] bg-white/10" />

            <a
                href="#skills"
                className="text-sm font-medium tracking-widest text-white/60 transition-all duration-300 hover:text-[var(--neon-purple)] hover:scale-110 active:scale-95 px-2 uppercase"
            >
                Skills
            </a>

            <div className="h-4 w-[1px] bg-white/10" />

            <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[var(--neon-purple)] hover:text-white hover:scale-105 active:scale-95 border border-white/10 shadow-lg shadow-black/20"
            >
                <span className="relative z-10 tracking-[0.2em] uppercase">Connect</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
        </nav>
    );
}
