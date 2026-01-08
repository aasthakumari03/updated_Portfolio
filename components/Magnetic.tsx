"use client";

import React, { useRef, useState, useEffect } from 'react';

interface MagneticProps {
    children: React.ReactElement;
    strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const x = clientX - centerX;
            const y = clientY - centerY;

            const distance = Math.sqrt(x * x + y * y);
            const triggerRange = width * 1.5;

            if (distance < triggerRange) {
                const dampening = 1 - (distance / triggerRange);
                const smoothDampening = Math.pow(dampening, 1.25);
                targetPos.current = {
                    x: x * strength * smoothDampening,
                    y: y * strength * smoothDampening
                };
            } else {
                targetPos.current = { x: 0, y: 0 };
            }
        };

        const handleMouseLeave = () => {
            targetPos.current = { x: 0, y: 0 };
        };

        window.addEventListener('mousemove', handleMouseMove);

        let rafId: number;
        const animate = () => {
            const lerpFactor = 0.15;

            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpFactor;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpFactor;

            if (ref.current) {
                ref.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [strength]);

    return (
        <div
            ref={ref}
            style={{
                display: 'inline-block',
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
};

export default Magnetic;
