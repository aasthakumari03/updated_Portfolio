"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            if (cursorRef.current) {
                // Direct follow for the single dot
                cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
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
            {/* Single Small Greyish-White Circle */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-[#D1D5DB] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
        </div>
    );
};

export default CustomCursor;
