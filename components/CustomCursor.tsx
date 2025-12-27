"use client";

import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
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

        const handleMouseOut = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    // Trailing effect using requestAnimationFrame for smoothness
    useEffect(() => {
        let requestId: number;

        const updateTrailing = () => {
            setTrailingPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.35,
                y: prev.y + (mousePosition.y - prev.y) * 0.35
            }));
            requestId = requestAnimationFrame(updateTrailing);
        };

        requestId = requestAnimationFrame(updateTrailing);
        return () => cancelAnimationFrame(requestId);
    }, [mousePosition]);

    if (!isVisible) return null;

    return (
        <>
            {/* Small Dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
                    transition: 'transform 0.15s ease-out', // Only for the scale part
                }}
            />
            {/* Big Trailing Circle */}
            <div
                className={`fixed top-0 left-0 border-2 border-white rounded-full pointer-events-none z-[9998] ${isHovering ? 'w-16 h-16 bg-white/20' : 'w-10 h-10'}`}
                style={{
                    transform: `translate3d(${trailingPosition.x - (isHovering ? 32 : 20)}px, ${trailingPosition.y - (isHovering ? 32 : 20)}px, 0)`,
                    borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                    boxShadow: isHovering ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none',
                    transition: 'width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out'
                }}
            />
        </>
    );
};

export default CustomCursor;
