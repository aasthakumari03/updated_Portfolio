"use client";
import React from 'react';
import Magnetic from './Magnetic';

export default function Navbar({ isMinimal = false }: { isMinimal?: boolean }) {
    return (
        <nav className={`flex items-center gap-4 transition-all duration-500 ${isMinimal
            ? 'bg-transparent border-none shadow-none px-0 py-0'
            : 'bg-transparent px-2 py-0 border-none shadow-none'
            }`}>
            <Magnetic strength={0.12}>
                <a
                    href="#about"
                    className="group relative text-sm font-bold tracking-widest text-[var(--foreground)]/60 transition-all duration-500 hover:text-white px-2 uppercase"
                >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-500 group-hover:w-full" />
                </a>
            </Magnetic>

            <Magnetic strength={0.12}>
                <a
                    href="#projects"
                    className="group relative text-sm font-bold tracking-widest text-[var(--foreground)]/60 transition-all duration-500 hover:text-white px-2 uppercase"
                >
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-400 transition-all duration-500 group-hover:w-full" />
                </a>
            </Magnetic>

            <Magnetic strength={0.08}>
                <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3 text-sm font-bold text-white transition-all duration-500 hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-900/40"
                >
                    <span className="relative z-10 tracking-[0.2em] uppercase">Connect</span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
            </Magnetic>
        </nav>
    );
}
