"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);

    // Position tracking
    const mousePos = useRef({ x: 0, y: 0 }); // Target
    const dotPos = useRef({ x: 0, y: 0 });   // Inner dot lerped

    // Scale tracking
    const dotScale = useRef(1);

    // Speed/Velocity tracking
    const scrollPos = useRef(0);
    const scrollVelocity = useRef(0);

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            scrollVelocity.current = currentScroll - scrollPos.current;
            scrollPos.current = currentScroll;

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
            const dotLerp = 0.25;  // Smoother movement for a single dot
            const scaleLerp = 0.15;
            const velocityLerp = 0.1;

            // Fluid movement calculations
            dotPos.current.x += (mousePos.current.x - dotPos.current.x) * dotLerp;
            dotPos.current.y += (mousePos.current.y - dotPos.current.y) * dotLerp;

            // Decay scroll velocity for a smoother "tail"
            scrollVelocity.current *= 0.9;

            // Interactive scaling logic - disabled as per user request
            const targetDotScale = 1;
            dotScale.current += (targetDotScale - dotScale.current) * scaleLerp;

            // Calculate stretch based on velocity
            const stretchAmount = Math.min(Math.abs(scrollVelocity.current) * 0.05, 1.2);
            const scaleX = 1 - (stretchAmount * 0.3);
            const scaleY = 1 + stretchAmount;

            if (dotRef.current) {
                const dotSize = 24;

                // Position Dot
                dotRef.current.style.transform = `translate3d(${dotPos.current.x - dotSize / 2}px, ${dotPos.current.y - dotSize / 2}px, 0) scale(${scaleX}, ${scaleY})`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseenter', () => setIsVisible(true));
            document.removeEventListener('mouseleave', () => setIsVisible(false));
            observer.disconnect();
            cancelAnimationFrame(rafId);
        };
    }, [isVisible, isHovering]);

    return (
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-6 h-6 bg-[#e2e8f0] border border-white/40 rounded-full pointer-events-none z-[10001] shadow-[0_0_15px_rgba(255,255,255,0.6),0_0_25px_rgba(148,163,184,0.3)]"
            style={{ opacity: 0, willChange: 'transform, opacity' }}
        />
    );
};

export default CustomCursor;
