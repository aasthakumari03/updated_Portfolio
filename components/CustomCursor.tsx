"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Position states
    const mousePos = useRef({ x: 0, y: 0 }); // Target
    const dotPos = useRef({ x: 0, y: 0 });   // Layer 1
    const ringPos = useRef({ x: 0, y: 0 });  // Layer 2

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleScroll = () => {
            // No direct update needed as the RAF loop will use the latest viewport coordinates 
            // but we can force a small update logic if needed.
        };

        const handleInteractiveEnter = () => setIsHovering(true);
        const handleInteractiveLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
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
            // Tiered lerp factors
            const dotLerp = 0.4;
            const ringLerp = 0.15;

            // Calculate Dot Position (Fast follow)
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp;

            // Calculate Ring Position (Slow trailing follow)
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

            // Apply Styles to Dot
            if (dotRef.current) {
                const size = 6;
                dotRef.current.style.transform = `translate3d(${dotPos.current.x - size / 2}px, ${dotPos.current.y - size / 2}px, 0)`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
                dotRef.current.style.scale = isHovering ? "0" : "1";
            }

            // Apply Styles to Ring
            if (ringRef.current) {
                const size = 40;
                ringRef.current.style.transform = `translate3d(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px, 0)`;
                ringRef.current.style.opacity = isVisible ? "1" : "0";
                ringRef.current.style.scale = isHovering ? "1.5" : "1";
                ringRef.current.style.borderColor = isHovering ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)";
                ringRef.current.style.backgroundColor = isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent";
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, [isVisible, isHovering]);

    return (
        <>
            {/* Primary Sharp Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_white] transition-transform duration-300 ease-out"
                style={{ willChange: 'transform, opacity, scale' }}
            />
            {/* Trailing Fluid Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] transition-[scale,background-color,border-color] duration-500 ease-out backdrop-blur-[2px]"
                style={{ willChange: 'transform, opacity, scale' }}
            />
        </>
    );
};

export default CustomCursor;

