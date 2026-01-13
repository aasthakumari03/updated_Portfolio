"use client";

import React from "react";

const Marquee = ({ children, reverse = false, speed = 20 }: { children: React.ReactNode, reverse?: boolean, speed?: number }) => {
    return (
        <div className="flex overflow-hidden select-none gap-10 mask-fade">
            <div
                className={`flex flex-shrink-0 justify-around items-center gap-10 min-w-full animate-marquee ${reverse ? 'animate-reverse' : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
            </div>
            <div
                className={`flex flex-shrink-0 justify-around items-center gap-10 min-w-full animate-marquee ${reverse ? 'animate-reverse' : ''}`}
                aria-hidden="true"
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
            </div>
        </div>
    );
};

export default Marquee;
