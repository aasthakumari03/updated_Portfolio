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
        const shootingStars: ShootingStar[] = [];
        const numStars = 250;

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
                this.size = Math.random() * 1.5;
                this.speed = Math.random() * 0.01;
                this.opacity = Math.random();
                this.fadeSpeed = Math.random() * 0.005 + 0.002;
            }

            update() {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.y = height;
                    this.x = Math.random() * width;
                }

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

        class ShootingStar {
            x!: number;
            y!: number;
            len!: number;
            speed!: number;
            size!: number;
            opacity!: number;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = 0;
                this.len = Math.random() * 80 + 10;
                this.speed = Math.random() * 5 + 3;
                this.size = Math.random() * 1 + 0.5;
                this.opacity = 1;
            }

            update() {
                this.x -= this.speed;
                this.y += this.speed;
                this.opacity -= 0.01;

                if (this.opacity <= 0 || this.x < 0 || this.y > height) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx || this.opacity <= 0) return;
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = this.size;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.len, this.y - this.len);
                ctx.stroke();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        for (let i = 0; i < 4; i++) {
            shootingStars.push(new ShootingStar());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            shootingStars.forEach((sStar) => {
                sStar.update();
                sStar.draw();
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
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {/* Background Glow Transition (Black to Blue) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#05112e]" />

            {/* Hard, Grainy, Dotted Moon */}
            <div className="absolute top-16 right-16 w-32 h-32 rounded-full bg-[#0a0a0a] shadow-[inset_-15px_-15px_30px_rgba(0,0,0,1),0_0_60px_rgba(255,255,255,0.03)] overflow-hidden border border-white/5 animate-float-slow">
                {/* Moon Surface Texture */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <svg width="100%" height="100%">
                        <filter id="moonGrain">
                            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                            <feColorMatrix type="saturate" values="0" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#moonGrain)" />
                    </svg>
                </div>
                {/* Dotted Craters (Hard, Black, Dotted Appearance) */}
                <div className="absolute inset-0">
                    <div className="absolute top-6 left-8 w-6 h-6 rounded-full bg-black/60 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-16 left-16 w-8 h-8 rounded-full bg-black/50 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-22 left-6 w-4 h-4 rounded-full bg-black/70 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-4 left-20 w-3 h-3 rounded-full bg-black/40 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-24 left-18 w-5 h-5 rounded-full bg-black/60 shadow-inner blur-[0.5px]" />
                    {/* Small Dotted Details */}
                    <div className="absolute top-10 left-10 w-1 h-1 rounded-full bg-black opacity-80" />
                    <div className="absolute top-14 left-24 w-1.5 h-1.5 rounded-full bg-black opacity-80" />
                    <div className="absolute top-20 left-12 w-1 h-1 rounded-full bg-black opacity-80" />
                </div>
                {/* Moon Lighting / Crescent Fade */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-50" />
            </div>

            <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-white/5 blur-[100px] pointer-events-none" />

            {/* Ethereal Nebulae/Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-blue-600/20 rounded-full blur-[180px] mix-blend-screen" />

            {/* Canvas Stars */}
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

            {/* Vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-60" />
        </div>
    );
};

export default UniverseBackground;
