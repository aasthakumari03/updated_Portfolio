"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });

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
            // Lerp factors
            const dotLerp = 1; // Instant for precision
            const outlineLerp = 0.15; // Smooth lag for the circle

            // Calculate new positions
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * dotLerp;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * dotLerp;

            outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * outlineLerp;
            outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * outlineLerp;

            // Apply styles directly to DOM
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0)`;
            }
            if (outlineRef.current) {
                const size = isHovering ? 64 : 40;
                outlineRef.current.style.transform = `translate3d(${outlinePos.current.x - size / 2}px, ${outlinePos.current.y - size / 2}px, 0)`;
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
        <>
            {/* Small Dot (Precision) */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 0 : 1,
                    willChange: 'transform'
                }}
            />
            {/* Smooth Outer Circle */}
            <div
                ref={outlineRef}
                className={`fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out`}
                style={{
                    width: isHovering ? '64px' : '40px',
                    height: isHovering ? '64px' : '40px',
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                    boxShadow: isHovering ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none',
                    willChange: 'transform, width, height'
                }}
            />
        </>
    );
};

export default CustomCursor;
