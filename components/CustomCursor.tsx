"use client";

import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 }); // Target mouse coordinates
    const cursorPos = useRef({ x: 0, y: 0 });   // Lerped cursor coordinates
    const cursorScale = useRef(1); // Lerped scale factor

    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        // Re-evaluate hover element on scroll
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
            const moveLerp = 0.12;
            const scaleLerp = 0.15;

            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * moveLerp;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * moveLerp;

            const targetScale = isHovering ? 1.5 : 1;
            cursorScale.current += (targetScale - cursorScale.current) * scaleLerp;

            if (dotRef.current) {
                const size = 20;
                dotRef.current.style.transform = `translate3d(${cursorPos.current.x - size / 2}px, ${cursorPos.current.y - size / 2}px, 0) scale(${cursorScale.current})`;
                dotRef.current.style.opacity = isVisible ? "1" : "0";
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
        <div
            ref={dotRef}
            className="fixed top-0 left-0 w-5 h-5 bg-[#e2e8f0] rounded-full pointer-events-none z-[10000] border-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4),0_0_30px_rgba(148,163,184,0.2)] opacity-0"
            style={{ willChange: 'transform, opacity' }}
        />
    );
};

export default CustomCursor;
