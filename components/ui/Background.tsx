"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Background = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; delay: string; duration: string }[]>([]);
    const [comets, setComets] = useState<{ id: number; top: string; left: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const starCount = 40; // Reduced from 50
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`,
            delay: `${Math.random() * 10}s`,
            duration: `${Math.random() * 10 + 5}s`,
        }));
        setStars(newStars);

        const cometCount = 5; // Reduced from 8
        const newComets = Array.from({ length: cometCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * -20}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 20}s`,
            duration: `${Math.random() * 5 + 3}s`,
        }));
        setComets(newComets);
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#020202] overflow-hidden pointer-events-none noise-overlay">
            {/* Animated Blobs */}
            <div className="absolute inset-0 z-0 opacity-30">
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-teal-500/20 blur-[80px] will-change-transform"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 60, 0],
                        y: [0, 100, -40, 0],
                        scale: [1, 0.8, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[100px] will-change-transform"
                />
                <motion.div
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, 80, -60, 0],
                        scale: [1, 1.1, 1.3, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[80px] will-change-transform"
                />
            </div>

            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full opacity-20 animate-twinkle z-10"
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
                    className="absolute w-[1px] h-[120px] bg-gradient-to-b from-white/40 to-transparent opacity-0 animate-comet z-10"
                    style={{
                        top: comet.top,
                        left: comet.left,
                        animationDelay: comet.delay,
                        animationDuration: comet.duration,
                    }}
                />
            ))}
        </div>
    );
};

export default Background;
