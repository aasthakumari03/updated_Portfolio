"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const secondaryCursorRef = useRef<HTMLDivElement>(null);

    const mousePos = useRef({ x: 0, y: 0 });
    const cursorDelayedPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            if (cursorRef.current && secondaryCursorRef.current) {
                // Direct follow for the main dot
                cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;

                // Smooth follow for the secondary circle
                const easing = 0.15;
                cursorDelayedPos.current.x += (mousePos.current.x - cursorDelayedPos.current.x) * easing;
                cursorDelayedPos.current.y += (mousePos.current.y - cursorDelayedPos.current.y) * easing;

                secondaryCursorRef.current.style.transform = `translate3d(${cursorDelayedPos.current.x}px, ${cursorDelayedPos.current.y}px, 0)`;
            }
            requestAnimationFrame(animate);
        };

        const rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
            {/* Secondary Outer Circle */}
            <div
                ref={secondaryCursorRef}
                className="fixed top-0 left-0 w-8 h-8 border border-teal-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
            />
        </div>
    );
};

export default CustomCursor;
