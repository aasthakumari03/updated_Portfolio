"use client";

import React, { useEffect, useState } from "react";

const Background = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string }[]>([]);

    useEffect(() => {
        const starCount = 30;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 4 + 1}px`,
            delay: `${Math.random() * 5}s`,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-mesh overflow-hidden pointer-events-none">
            {/* Concentric Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square max-w-[1200px]">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="concentric-ring animate-ring-pulse"
                        style={{
                            width: `${(i + 1) * 20}%`,
                            height: `${(i + 1) * 20}%`,
                            animationDelay: `${i * 1.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Scattered Glints/Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full animate-glint blur-[1px]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        opacity: 0.3,
                    }}
                />
            ))}

            {/* Large Soft Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>
    );
};

export default Background;
