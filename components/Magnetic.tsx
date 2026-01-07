"use client";

import React, { useRef, useState, useEffect } from 'react';

interface MagneticProps {
    children: React.ReactElement;
    strength?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const x = clientX - centerX;
        const y = clientY - centerY;

        // Check if mouse is within a reasonable range for magnetism
        const distance = Math.sqrt(x * x + y * y);
        const triggerRange = width * 1.5;

        if (distance < triggerRange) {
            // Soft dampening/falloff as distance increases
            const dampening = 1 - (distance / triggerRange);
            // Use a power function for smoother falloff (less 'snappy')
            const smoothDampening = Math.pow(dampening, 1.25);

            setPosition({
                x: x * strength * smoothDampening,
                y: y * strength * smoothDampening
            });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                transition: position.x === 0 && position.y === 0
                    ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' // Smoother return
                    : 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    );
};

export default Magnetic;
