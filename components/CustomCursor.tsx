"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        let rafId: number;

        const animate = () => {
            // Lerp factor
            const dotLerp = 0.25; // Smooth movement

            // Calculate new positions
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * dotLerp;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * dotLerp;

            // Apply styles directly to DOM
            if (dotRef.current) {
                const size = isHovering ? 12 : 8;
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0) scale(${isHovering ? 1.5 : 1})`;
            }

            rafId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isHovering, isVisible]);

    if (!isVisible) return null;

    return (
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-all duration-300 border border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{
                willChange: 'transform'
            }}
        />
    );
};

export default CustomCursor;

