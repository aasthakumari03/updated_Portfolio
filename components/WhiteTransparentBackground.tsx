"use client";

import React, { useEffect, useRef } from "react";

const WhiteTransparentBackground = () => {
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
        <div ref={containerRef} className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--background)] pointer-events-none backdrop-blur-[2px]">
            {/* Theme-Aware Base Layer */}
            <div className="absolute inset-0 bg-[var(--overlay-bg)]" />

            {/* User-Customizable Color Blobs */}
            <div
                className="absolute top-[25%] left-[20%] w-[60vw] h-[60vw] bg-indigo-400/20 rounded-full blur-[120px] animate-blob-float transition-transform duration-700 ease-out"
                style={{
                    transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
                    opacity: 'var(--blob-opacity)'
                }}
            />
            <div
                className="absolute top-[30%] left-[45%] w-[55vw] h-[55vw] bg-purple-400/15 rounded-full blur-[140px] animate-blob-float-reverse transition-transform duration-1000 ease-out"
                style={{
                    transform: 'translate(calc(var(--mouse-x, 0) * -1.2), calc(var(--mouse-y, 0) * -1.2))',
                    opacity: 'var(--blob-opacity)'
                }}
            />
            <div
                className="absolute top-[40%] left-[15%] w-[50vw] h-[50vw] bg-blue-300/20 rounded-full blur-[130px] animate-blob-pulse transition-transform duration-500 ease-out"
                style={{
                    transform: 'translate(calc(var(--mouse-x, 0) * 0.8), calc(var(--mouse-y, 0) * 0.8))',
                    opacity: 'var(--blob-opacity)'
                }}
            />
            <div
                className="absolute top-[20%] left-[60%] w-[45vw] h-[45vw] bg-pink-300/15 rounded-full blur-[150px] animate-float-slow transition-transform duration-1200 ease-out"
                style={{
                    transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
                    opacity: 'var(--blob-opacity)'
                }}
            />

            {/* Grainy Texture Overlay */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    opacity: 'var(--noise-opacity)',
                    mixBlendMode: 'var(--noise-blend)' as any
                }}
            >
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

            {/* Soft Edge Masking */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-40" />
        </div>
    );
};

export default WhiteTransparentBackground;
