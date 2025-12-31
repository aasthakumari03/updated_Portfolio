"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        let rafId: number;

        const animate = () => {
            // Lerp factor
            const dotLerp = 0.35;

            // Calculate new positions
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * dotLerp;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * dotLerp;

            // Apply styles directly to DOM for maximum performance
            if (dotRef.current) {
                const size = 20;

                // Use translate3d for GPU acceleration
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0)`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    return (
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-5 h-5 bg-[#020617] rounded-full pointer-events-none z-[9999] border-2 border-white/20 shadow-[0_0_15px_rgba(2,6,23,0.4),0_0_30px_rgba(30,41,59,0.2)] opacity-0"
            style={{
                willChange: 'transform, opacity',
                transition: 'opacity 0.3s ease-out'
            }}
        />
    );
};

export default CustomCursor;

