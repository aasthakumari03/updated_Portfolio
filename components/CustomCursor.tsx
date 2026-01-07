"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Position tracking
    const mousePos = useRef({ x: 0, y: 0 }); // Target
    const dotPos = useRef({ x: 0, y: 0 });   // Inner dot lerped
    const ringPos = useRef({ x: 0, y: 0 });  // Outer ring lerped (slower)

    // Scale & Momentum tracking
    const dotScale = useRef(1);
    const ringScale = useRef(1);
    const ringOpacity = useRef(0.4);

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleScroll = () => {
            const el = document.elementFromPoint(mousePos.current.x, mousePos.current.y);
            if (el) {
                const isOverInteractive = el.closest('a, button, [role="button"], .cursor-pointer, .hover-word, span[class*="skill"]');
                setIsHovering(!!isOverInteractive);
            }
        };

        const handleInteractiveEnter = () => setIsHovering(true);
        const handleInteractiveLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('mouseenter', () => setIsVisible(true));
        document.addEventListener('mouseleave', () => setIsVisible(false));

        const attachListeners = () => {
            const interactives = document.querySelectorAll(
                'a, button, [role="button"], .cursor-pointer, .hover-word, span[class*="skill"]'
            );
            interactives.forEach(el => {
                el.addEventListener('mouseenter', handleInteractiveEnter);
                el.addEventListener('mouseleave', handleInteractiveLeave);
            });
        };

        attachListeners();
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        let rafId: number;

        const animate = () => {
            // Tiered lerp factors for "smooth scrolling" momentum
            const dotLerp = 0.25;  // Responsive inner dot
            const ringLerp = 0.08; // High-momentum outer ring (slower)
            const scaleLerp = 0.15;

            // Fluid movement calculations
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp;

            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

            // Interactive scaling logic
            const targetDotScale = isHovering ? 0.5 : 1;
            const targetRingScale = isHovering ? 2.5 : 1;
            const targetRingOpacity = isHovering ? 0.8 : 0.4;

            dotScale.current += (targetDotScale - dotScale.current) * scaleLerp;
            ringScale.current += (targetRingScale - ringScale.current) * scaleLerp;
            ringOpacity.current += (targetRingOpacity - ringOpacity.current) * scaleLerp;

            if (dotRef.current && ringRef.current) {
                const dotSize = 8;
                const ringSize = 35;

                // Position Dot
                dotRef.current.style.transform = `translate3d(${dotPos.current.x - dotSize / 2}px, ${dotPos.current.y - dotSize / 2}px, 0) scale(${dotScale.current})`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";

                // Position Ring
                ringRef.current.style.transform = `translate3d(${ringPos.current.x - ringSize / 2}px, ${ringPos.current.y - ringSize / 2}px, 0) scale(${ringScale.current})`;
                ringRef.current.style.opacity = isVisible ? `${ringOpacity.current}` : "0";
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
            {/* Inner Dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10001] shadow-[0_0_10px_rgba(255,255,255,1)]"
                style={{ opacity: 0, willChange: 'transform, opacity' }}
            />
            {/* Trailing Outer Ring */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-[35px] h-[35px] border border-white/40 rounded-full pointer-events-none z-[10000] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                style={{ opacity: 0, scale: 1, willChange: 'transform, opacity' }}
            />
        </>
    );
};

export default CustomCursor;
