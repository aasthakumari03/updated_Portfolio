"use client";
import React, { useState } from 'react';

interface LogoProps {
    className?: string;
    variant?: "FT" | "AK";
}

export default function Logo({ className = "w-10 h-10", variant = "AK" }: LogoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState("AK");

    React.useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const fullName = "AASTHA KUMARI";

        if (isHovered) {
            let currentIndex = 0;
            // Clear "AK" and start typing "A..."
            setDisplayText("");

            const typeNextChar = () => {
                if (currentIndex < fullName.length) {
                    setDisplayText(fullName.slice(0, currentIndex + 1));
                    currentIndex++;
                    timeoutId = setTimeout(typeNextChar, 100); // Speed of typing
                }
            };

            // Small delay start or immediate? Immediate feels snappier but let's clear first.
            typeNextChar();

        } else {
            // Reset immediately on hover out
            setDisplayText("AK");
        }

        return () => clearTimeout(timeoutId);
    }, [isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative flex items-center bg-black/40 backdrop-blur-xl p-3 rounded-full transition-all duration-500 border border-white/10 hover:border-white/40 cursor-pointer shadow-[0_0_25px_rgba(191,0,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.7)] hover:scale-110 ${isHovered ? 'pr-8' : ''}`}
        >
            {/* Dynamic Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 pointer-events-none" />

            <div className="flex items-center justify-center relative z-10">
                <span className={`font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[var(--neon-blue)] whitespace-nowrap transition-all duration-500 ease-in-out ${isHovered ? 'text-lg' : 'text-xl'}`}>
                    {displayText}
                </span>
            </div>
        </div>
    );
}
