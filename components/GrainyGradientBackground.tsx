"use client";

import React from "react";

const GrainyGradientBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a] pointer-events-none">
            {/* Moving Blurred Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] animate-blob-float mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-700/15 rounded-full blur-[150px] animate-blob-float-reverse mix-blend-screen" />
            <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px] animate-blob-pulse mix-blend-screen" />

            {/* Noise Overlay Filter */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.25] pointer-events-none mix-blend-overlay">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Very subtle grid for depth */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a0a0a]/50" />
        </div>
    );
};

export default GrainyGradientBackground;
