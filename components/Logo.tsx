"use client";
import React from 'react';

interface LogoProps {
    className?: string;
    variant?: "FT" | "AK";
}

export default function Logo({ className = "w-10 h-10", variant = "AK" }: LogoProps) {
    return (
        <div className="group relative flex items-center bg-black/60 backdrop-blur-xl p-3 rounded-2xl transition-all duration-500 hover:pr-8 shadow-2xl shadow-white/5 overflow-hidden max-w-fit border border-white/20 hover:border-white/40 decoration-none no-underline cursor-pointer">
            {/* Dynamic Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <svg
                        viewBox="0 0 400 200"
                        className={`${className} relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Letter A (Slanted) */}
                        <path d="M40 160L140 40L240 160H190L165 125H115L90 160H40Z" />
                        <path d="M140 90L152 75H128L140 90Z" fill="black" opacity="0.1" />
                        {/* Letter K (Slanted) */}
                        <path d="M245 40L205 160H255L295 40H245Z" />
                        <path d="M285 40L385 40L315 105L285 40Z" />
                        <path d="M305 115L385 160H335L270 115L305 115Z" />
                    </svg>

                    {/* Typing Text Effect */}
                    <span className="logo-typing-text whitespace-nowrap overflow-hidden border-r-2 border-transparent text-white font-bold tracking-widest text-lg uppercase">
                        AASTHA KUMARI
                    </span>
                </div>
            </div>
        </div>
    );
}
