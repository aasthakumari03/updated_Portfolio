"use client";

import React from "react";

const BackgroundDepth = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen bg-[#080916]">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[#080916]" />

            {/* Milky Way Band - Whitish Bluish */}
            <div
                className="absolute top-1/2 left-1/2 w-[200%] h-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] opacity-40 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(224, 242, 254, 0.25) 0%, rgba(186, 230, 253, 0.1) 50%, transparent 80%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Milky Way Core - Brightest Part */}
            <div
                className="absolute top-1/2 left-1/2 w-[150%] h-[15%] -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] opacity-30 pointer-events-none animate-pulse-slow"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(224, 242, 254, 0.3), rgba(255, 255, 255, 0.2), transparent)",
                    filter: "blur(40px)",
                }}
            />

            {/* Blackish Dust Clouds (Dark Blobs) for Depth/Contrast */}
            <div
                className="absolute top-[40%] left-[30%] w-[30%] h-[20%] rounded-full opacity-60 blur-[100px] -rotate-[15deg]"
                style={{ background: "radial-gradient(circle, #020205 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[30%] right-[20%] w-[40%] h-[25%] rounded-full opacity-50 blur-[120px] -rotate-[35deg]"
                style={{ background: "radial-gradient(circle, #020205 0%, transparent 70%)" }}
            />

            {/* Nebula Blobs - Enhanced Colors (Whitish Bluish) */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-35 blur-[120px] animate-pulse-slow"
                style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-30 blur-[150px] animate-float-slow"
                style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
            />
            <div
                className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-25 blur-[100px] animate-float-delayed"
                style={{ background: "radial-gradient(circle, #7dd3fc 0%, transparent 70%)" }}
            />

            {/* Additional Deep Depth Layer */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
                    backgroundSize: "100px 100px",
                    transform: "translateZ(-100px) scale(2)",
                }}
            />

            {/* Subtle Grid / Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)", backgroundSize: "50px 50px" }} />
        </div>
    );
};

export default BackgroundDepth;
