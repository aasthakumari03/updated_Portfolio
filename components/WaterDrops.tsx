"use client";

import React, { useEffect, useState, useRef } from "react";

interface Drop {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    delay: number;
    shape: string;
}

const WaterDrops = () => {
    const [drops, setDrops] = useState<Drop[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Generate drops in clusters
        const newDrops: Drop[] = [];
        const clusters = 12;
        const dropsPerCluster = 4;

        for (let i = 0; i < clusters; i++) {
            const clusterX = Math.random() * 100;
            const clusterY = Math.random() * 100;

            for (let j = 0; j < dropsPerCluster; j++) {
                const offsetX = (Math.random() - 0.5) * 15;
                const offsetY = (Math.random() - 0.5) * 15;
                const size = 15 + Math.random() * 40;

                // Random organic border-radius shapes
                const r1 = 30 + Math.random() * 40;
                const r2 = 30 + Math.random() * 40;
                const r3 = 30 + Math.random() * 40;
                const r4 = 30 + Math.random() * 40;
                const r5 = 30 + Math.random() * 40;
                const r6 = 30 + Math.random() * 40;
                const r7 = 30 + Math.random() * 40;
                const r8 = 30 + Math.random() * 40;
                const shape = `${r1}% ${100 - r1}% ${r2}% ${100 - r2}% / ${r3}% ${r4}% ${100 - r4}% ${100 - r3}%`;

                newDrops.push({
                    id: i * dropsPerCluster + j,
                    x: clusterX + offsetX,
                    y: clusterY + offsetY,
                    size: size,
                    opacity: 0.4 + Math.random() * 0.4,
                    speed: 0.5 + Math.random() * 1.5,
                    delay: Math.random() * 5,
                    shape: shape
                });
            }
        }
        setDrops(newDrops);

        const handleMouseMove = (e: MouseEvent) => {
            // Track normalized mouse position (-0.5 to 0.5)
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5),
                y: (e.clientY / window.innerHeight - 0.5)
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
            style={{ filter: 'url(#gooey-water)' }}
        >
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="gooey-water">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {drops.map((drop) => {
                // Movement opposite to cursor
                const tx = mousePos.x * -60 * drop.speed;
                const ty = mousePos.y * -60 * drop.speed;

                return (
                    <div
                        key={drop.id}
                        className="absolute bg-white/10 backdrop-blur-[4px] border border-white/20 transition-transform duration-1000 ease-out"
                        style={{
                            left: `${drop.x}%`,
                            top: `${drop.y}%`,
                            width: `${drop.size}px`,
                            height: `${drop.size}px`,
                            borderRadius: drop.shape,
                            opacity: drop.opacity,
                            transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`,
                            boxShadow: `
                                inset 4px 4px 6px rgba(255, 255, 255, 0.4),
                                inset -4px -4px 6px rgba(0, 0, 0, 0.1),
                                2px 2px 10px rgba(0, 0, 0, 0.05)
                            `,
                        }}
                    >
                        {/* Shimmer Highlight */}
                        <div
                            className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white/40 rounded-full blur-[2px]"
                            style={{ borderRadius: '50%' }}
                        />
                    </div>
                );
            })}

            <style jsx>{`
                div {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default WaterDrops;
