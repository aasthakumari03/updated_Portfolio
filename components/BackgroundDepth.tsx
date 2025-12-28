"use client";

import React from "react";

const BackgroundDepth = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen bg-black">
            {/* Deep Space Base */}
            <div className="absolute inset-0 bg-[#020205]" />

            {/* Nebula Blobs */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
                style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-15 blur-[150px] animate-float-slow"
                style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />
            <div
                className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full opacity-10 blur-[100px] animate-float-delayed"
                style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
            />

            {/* Subtle Grid / Texture for Depth */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        </div>
    );
};

export default BackgroundDepth;
