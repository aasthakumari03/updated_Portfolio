"use client";

import React, { useEffect, useRef } from "react";

const UniverseBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const stars: Star[] = [];
        const numStars = 200;

        class Star {
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
            fadeSpeed: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.speed = Math.random() * 0.05;
                this.opacity = Math.random();
                this.fadeSpeed = Math.random() * 0.01 + 0.002;
            }

            update() {
                this.y -= this.speed;
                // Wrap around
                if (this.y < 0) {
                    this.y = height;
                    this.x = Math.random() * width;
                }

                // Twinkle
                this.opacity += this.fadeSpeed;
                if (this.opacity > 1 || this.opacity < 0.2) {
                    this.fadeSpeed = -this.fadeSpeed;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach((star) => {
                star.update();
                star.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#000000] via-[#020210] to-[#000000] pointer-events-none">
            {/* Ethereal Dreamy Nebulae */}
            <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-500/25 rounded-full blur-[150px] animate-float-slow mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-purple-900/20 rounded-full blur-[180px] animate-float-delayed mix-blend-screen" />
            <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-blue-900/12 rounded-full blur-[160px] animate-pulse-slow mix-blend-screen" />

            {/* Star Grid Overlay (Static subtle grid for "sci-fi" feel - optional, keeping it simple first) */}

            {/* Canvas Stars */}
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
        </div>
    );
};

export default UniverseBackground;
