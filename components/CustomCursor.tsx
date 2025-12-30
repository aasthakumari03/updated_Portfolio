"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            isHoveringRef.current = !!isClickable;
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
            const dotLerp = 0.25;

            // Calculate new positions
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * dotLerp;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * dotLerp;

            // Apply styles directly to DOM for maximum performance
            if (dotRef.current) {
                const isHovering = isHoveringRef.current;
                const size = 8;
                const scale = isHovering ? 2.5 : 1;

                // Use translate3d for GPU acceleration
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0) scale(${scale})`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    return (
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] border border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)] opacity-0"
            style={{
                willChange: 'transform, opacity',
                transition: 'opacity 0.3s ease-out'
            }}
        />
    );
};

export default CustomCursor;

