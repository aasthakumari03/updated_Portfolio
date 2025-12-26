"use client";
import React from 'react';

export default function Navbar() {
    return (
        <nav className="flex items-center gap-6 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <a
                href="#projects"
                className="text-sm font-semibold text-white/70 transition-all duration-300 hover:text-white hover:scale-110 active:scale-95 px-2"
            >
                Projects
            </a>

            <div className="h-4 w-[1px] bg-white/20" />

            <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/20 px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 border border-white/20 shadow-lg shadow-white/5"
            >
                <span className="relative">Get in touch</span>
            </a>
        </nav>
    );
}
