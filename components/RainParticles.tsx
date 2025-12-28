"use client";

import React, { useMemo } from "react";

const RainParticles = () => {
    const drops = useMemo(() => {
        // 3 layers of rain for depth
        const layers = [
            { count: 40, sizeScale: 1.2, speedScale: 0.8, opacityScale: 1, color: "rgba(255, 255, 255, 0.4)" }, // Front
            { count: 60, sizeScale: 0.8, speedScale: 1.2, opacityScale: 0.6, color: "rgba(129, 140, 248, 0.3)" }, // Middle (Indigo tint)
            { count: 80, sizeScale: 0.5, speedScale: 1.5, opacityScale: 0.3, color: "rgba(167, 139, 250, 0.2)" }, // Back (Purple tint)
        ];

        return layers.flatMap((layer, layerIdx) =>
            Array.from({ length: layer.count }).map((_, i) => ({
                id: `${layerIdx}-${i}`,
                left: `${Math.random() * 100}%`,
                delay: `${Math.random() * 5}s`,
                duration: `${(1 + Math.random() * 1) / layer.speedScale}s`,
                opacity: (0.1 + Math.random() * 0.2) * layer.opacityScale,
                scale: (0.5 + Math.random() * 0.5) * layer.sizeScale,
                color: layer.color,
                zIndex: 5 - layerIdx,
            }))
        );
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="rain-drop"
                    style={{
                        left: drop.left,
                        animationDuration: drop.duration,
                        animationDelay: drop.delay,
                        animationName: 'rain',
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        opacity: drop.opacity,
                        transform: `scaleY(${drop.scale})`,
                        background: `linear-gradient(to bottom, transparent, ${drop.color})`,
                        zIndex: drop.zIndex,
                    }}
                />
            ))}
        </div>
    );
};

export default RainParticles;
