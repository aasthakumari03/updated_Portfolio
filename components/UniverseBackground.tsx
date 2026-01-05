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
        const numStars = 150;

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
                this.y += this.speed;
                this.x += this.speed * 0.3; // Subtle drift from left

                if (this.y > height || this.x > width) {
                    this.y = Math.random() * -100;
                    this.x = Math.random() * width - (width * 0.2);
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
                // Favor the left/top-left for starting positions
                this.x = Math.random() * (width * 0.6) - (width * 0.1);
                this.y = Math.random() * (height * 0.4) - (height * 0.2);
                this.len = Math.random() * 80 + 10;
                this.speed = Math.random() * 5 + 3;
                this.size = Math.random() * 1 + 0.5;
                this.opacity = 1;
            }

            update() {
                this.x += this.speed; // Move right
                this.y += this.speed; // Move down
                this.opacity -= 0.005; // Slower decay for longer visibility

                if (this.opacity <= 0 || this.x > width || this.y > height) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx || this.opacity <= 0) return;
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = this.size * 2; // Thicker trail for better visibility
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                // Tail extends back towards top-left
                ctx.lineTo(this.x - this.len, this.y - this.len);
                ctx.stroke();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        for (let i = 0; i < 3; i++) {
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
            {/* Absolute Matte Black Base */}
            <div className="absolute inset-0 bg-[#000000]" />

            {/* Top Darkness Overlay (Ensures top is solid black) */}
            <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-black via-black/80 to-transparent z-[1]" />

            {/* Intensified Central Blue Aura (High Contrast) - Lowered and reduced height */}
            <div className="absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[70vh] bg-blue-600/25 rounded-full blur-[180px] mix-blend-screen" />

            {/* Darker Deep Blue Layer for Atmosphere - Lowered and reduced height */}
            <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] h-[80vh] bg-indigo-900/10 rounded-full blur-[200px] mix-blend-screen" />

            {/* Intense Bottom Bluish-Cyan Aura (Refined to match image) */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-[#001242]/40 rounded-full blur-[150px] mix-blend-screen" />

            {/* Vibrant Cyan Core Highlight */}
            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-cyan-500/30 rounded-full blur-[120px] mix-blend-screen" />

            {/* Supplemental Dark Blue Glow */}
            <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-blue-700/20 rounded-full blur-[160px] mix-blend-screen" />

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
                {/* Dotted Craters */}
                <div className="absolute inset-0">
                    <div className="absolute top-6 left-8 w-6 h-6 rounded-full bg-black/60 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-16 left-16 w-8 h-8 rounded-full bg-black/50 shadow-inner blur-[0.5px]" />
                    <div className="absolute top-22 left-6 w-4 h-4 rounded-full bg-black/70 shadow-inner blur-[0.5px]" />
                </div>
                {/* Moon Lighting */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-50" />
            </div>

            {/* Canvas Stars */}
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-80" />

            {/* Subtle Vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_95%)] opacity-40" />
        </div>
    );
};

export default UniverseBackground;
