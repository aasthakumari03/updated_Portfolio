"use client";

import React, { useEffect, useState } from "react";

const Background = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string; duration: string }[]>([]);
    const [comets, setComets] = useState<{ id: number; top: string; left: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const starCount = 50;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            delay: `${Math.random() * 10}s`,
            duration: `${Math.random() * 10 + 5}s`,
        }));
        setStars(newStars);

        const cometCount = 10;
        const newComets = Array.from({ length: cometCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * -20}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 15}s`,
            duration: `${Math.random() * 3 + 2}s`,
        }));
        setComets(newComets);
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#020202] overflow-hidden pointer-events-none">
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full opacity-20 animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animationDelay: star.delay,
                        animationDuration: star.duration,
                    }}
                />
            ))}

            {/* Comets (Falling Stars) */}
            {comets.map((comet) => (
                <div
                    key={comet.id}
                    className="absolute w-[1px] h-[100px] bg-gradient-to-b from-white to-transparent opacity-0 animate-comet"
                    style={{
                        top: comet.top,
                        left: comet.left,
                        animationDelay: comet.delay,
                        animationDuration: comet.duration,
                    }}
                />
            ))}

            {/* Aura Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute -bottom-1/4 left-1/4 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />
            <div className="absolute -bottom-1/4 right-1/4 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[150px]" />
        </div>
    );
};

export default Background;
