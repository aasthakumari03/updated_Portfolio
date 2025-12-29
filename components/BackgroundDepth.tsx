"use client";

import React from "react";

const BackgroundDepth = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen bg-black">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[#020208]" />

            {/* Milky Way Band - Whitish Bluish */}
            <div
                className="absolute top-1/2 left-1/2 w-[200%] h-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] opacity-30 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(200, 220, 255, 0.15) 0%, rgba(100, 150, 255, 0.05) 50%, transparent 80%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Milky Way Core - Brightest Part */}
            <div
                className="absolute top-1/2 left-1/2 w-[150%] h-[15%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] opacity-20 pointer-events-none animate-pulse-slow"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), rgba(180, 210, 255, 0.2), rgba(255, 255, 255, 0.1), transparent)",
                    filter: "blur(40px)",
                }}
            />

            {/* Blackish Dust Clouds (Dark Blobs) for Depth/Contrast */}
            <div
                className="absolute top-[40%] left-[30%] w-[30%] h-[20%] rounded-full opacity-40 blur-[100px] -rotate-[15deg]"
                style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[30%] right-[20%] w-[40%] h-[25%] rounded-full opacity-30 blur-[120px] -rotate-[35deg]"
                style={{ background: "radial-gradient(circle, #000 0%, transparent 70%)" }}
            />

            {/* Nebula Blobs - Enhanced Colors */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-25 blur-[120px] animate-pulse-slow"
                style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-20 blur-[150px] animate-float-slow"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />
            <div
                className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-15 blur-[100px] animate-float-delayed"
                style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
            />

            {/* Additional Deep Depth Layer */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px)",
                    backgroundSize: "100px 100px",
                    transform: "translateZ(-100px) scale(2)",
                }}
            />

            {/* Subtle Grid / Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "50px 50px" }} />
        </div>
    );
};

export default BackgroundDepth;
