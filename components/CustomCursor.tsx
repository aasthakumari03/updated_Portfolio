"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 }); // Target
    const cursorPos = useRef({ x: 0, y: 0 });   // Layer 1

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleInteractiveEnter = () => setIsHovering(true);
        const handleInteractiveLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', () => setIsVisible(true));
        document.addEventListener('mouseleave', () => setIsVisible(false));

        // Add listeners for all interactive elements
        const attachListeners = () => {
            const interactives = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', handleInteractiveEnter);
                el.addEventListener('mouseleave', handleInteractiveLeave);
            });
        };

        attachListeners();
        // Re-attach in case of dynamic content (simple version)
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        let rafId: number;

        const animate = () => {
            // Lerp factor
            const lerpFactor = 0.25;

            // Calculate Cursor Position
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

            // Apply Styles to Dot
            if (dotRef.current) {
                const size = 20;
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0)`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
                dotRef.current.style.scale = isHovering ? "1.5" : "1";
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, [isVisible, isHovering]);

    return (
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-5 h-5 bg-[#e2e8f0] rounded-full pointer-events-none z-[10000] border-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_30px_rgba(148,163,184,0.2)] opacity-0 transition-opacity duration-300 ease-out"
            style={{ willChange: 'transform, opacity, scale' }}
        />
    );
};

export default CustomCursor;
