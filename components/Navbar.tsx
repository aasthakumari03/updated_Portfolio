"use client";
import React from 'react';

export default function Navbar() {
    return (
        <nav className="flex items-center gap-4 bg-[var(--card-bg)]/60 backdrop-blur-3xl px-6 py-3 rounded-full border border-[var(--card-border)] shadow-[0_8px_32px_rgba(79,70,229,0.1)] transition-all hover:border-indigo-300 hover:shadow-[0_12px_42px_rgba(79,70,229,0.15)]">
            <a
                href="#about"
                className="text-sm font-bold tracking-widest text-[var(--foreground)]/60 transition-all duration-300 hover:text-blue-600 hover:scale-110 active:scale-95 px-2 uppercase"
            >
                About
            </a>

            <div className="h-4 w-[1px] bg-[var(--section-divider)]" />

            <a
                href="#projects"
                className="text-sm font-bold tracking-widest text-[var(--foreground)]/60 transition-all duration-300 hover:text-indigo-600 hover:scale-110 active:scale-95 px-2 uppercase"
            >
                Projects
            </a>

            <a
                href="#skills"
                className="text-sm font-bold tracking-widest text-[var(--foreground)]/60 transition-all duration-300 hover:text-purple-600 hover:scale-110 active:scale-95 px-2 uppercase"
            >
                Skills
            </a>

            <div className="h-4 w-[1px] bg-[var(--section-divider)]" />

            <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
            >
                <span className="relative z-10 tracking-[0.2em] uppercase">Connect</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
        </nav>
    );
}
