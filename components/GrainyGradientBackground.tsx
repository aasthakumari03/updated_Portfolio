"use client";

import React from "react";

const GrainyGradientBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
            {/* Moving Blurred Blobs (Big Light Particles) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/25 rounded-full blur-[120px] animate-blob-float mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-700/20 rounded-full blur-[150px] animate-blob-float-reverse mix-blend-screen" />
            <div className="absolute top-[30%] left-[20%] w-[45vw] h-[45vw] bg-blue-800/15 rounded-full blur-[120px] animate-blob-pulse mix-blend-screen" />
            <div className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] bg-indigo-900/15 rounded-full blur-[130px] animate-float-slow mix-blend-screen" />
            <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] bg-purple-800/15 rounded-full blur-[110px] animate-float-delayed mix-blend-screen" />

            {/* Noise Overlay Filter (Grainy Texture) */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.35] pointer-events-none mix-blend-overlay">
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
