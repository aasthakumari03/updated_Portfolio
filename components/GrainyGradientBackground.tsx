"use client";

import React, { useEffect, useRef } from "react";

const GrainyGradientBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            containerRef.current.style.setProperty('--mouse-x', `${xPos}px`);
            containerRef.current.style.setProperty('--mouse-y', `${yPos}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
            {/* Bunched Moving Blurred Blobs (Big Light Particles) */}
            <div
                className="absolute top-[35%] left-[32%] w-[55vw] h-[55vw] bg-indigo-600/25 rounded-full blur-[130px] animate-blob-float mix-blend-screen transition-transform duration-700 ease-out"
                style={{ transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' }}
            />
            <div
                className="absolute top-[38%] left-[38%] w-[65vw] h-[65vw] bg-purple-700/20 rounded-full blur-[160px] animate-blob-float-reverse mix-blend-screen transition-transform duration-1000 ease-out"
                style={{ transform: 'translate(calc(var(--mouse-x, 0) * -1.2), calc(var(--mouse-y, 0) * -1.2))' }}
            />
            <div
                className="absolute top-[42%] left-[30%] w-[50vw] h-[50vw] bg-blue-800/15 rounded-full blur-[140px] animate-blob-pulse mix-blend-screen transition-transform duration-500 ease-out"
                style={{ transform: 'translate(calc(var(--mouse-x, 0) * 0.8), calc(var(--mouse-y, 0) * 0.8))' }}
            />
            <div
                className="absolute top-[40%] left-[35%] w-[45vw] h-[45vw] bg-indigo-900/15 rounded-full blur-[150px] animate-float-slow mix-blend-screen transition-transform duration-1200 ease-out"
                style={{ transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))' }}
            />

            {/* Noise Overlay Filter (Grainy Texture) */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.4] pointer-events-none mix-blend-overlay">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Deep Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
        </div>
    );
};

export default GrainyGradientBackground;
