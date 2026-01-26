"use client";

import React from "react";

const FogSeparator = () => {
    return (
        <div className="relative w-full h-32 md:h-48 overflow-hidden pointer-events-none -my-16 z-20">
            {/* Top Fade */}
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black/20" />

            {/* Glow Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.15)_0%,transparent_70%)] blur-3xl opacity-60" />

            {/* Horizontal Line Effect */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent blur-[1px]" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-transparent to-black/20" />
        </div>
    );
};

export default FogSeparator;
