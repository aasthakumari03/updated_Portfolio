"use client";

import React, { useEffect, useRef } from 'react';

const SpiralAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let w: number, h: number;
        let particles: Particle[] = [];
        const particleCount = 150;
        const speed = 0.05;

        class Particle {
            angle: number;
            radius: number;
            size: number;
            color: string;
            speed: number;
            opacity: number;

            constructor() {
                this.angle = Math.random() * Math.PI * 2;
                this.radius = Math.random() * Math.max(w, h);
                this.size = Math.random() * 2 + 1;
                this.speed = (Math.random() * 0.02 + 0.01);
                this.opacity = Math.random() * 0.5 + 0.2;
                
                // Varied teal/indigo colors
                const r = Math.floor(Math.random() * 100);
                if (r < 50) this.color = `rgba(45, 212, 191, ${this.opacity})`; // Teal
                else if (r < 80) this.color = `rgba(99, 102, 241, ${this.opacity})`; // Indigo
                else this.color = `rgba(255, 255, 255, ${this.opacity})`; // White
            }

            update() {
                this.angle += this.speed;
                this.radius -= 0.5;

                if (this.radius <= 0) {
                    this.radius = Math.max(w, h) * (0.6 + Math.random() * 0.4);
                    this.angle = Math.random() * Math.PI * 2;
                }
            }

            draw() {
                if (!ctx) return;
                const x = w / 2 + Math.cos(this.angle) * this.radius;
                const y = h / 2 + Math.sin(this.angle) * this.radius;

                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const setup = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const render = () => {
            ctx.fillStyle = 'rgba(2, 2, 2, 0.1)'; // Slight trail effect
            ctx.fillRect(0, 0, w, h);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', setup);
        setup();
        render();

        return () => {
            window.removeEventListener('resize', setup);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[-2]"
            style={{ filter: 'blur(1px)' }}
        />
    );
};

export default SpiralAnimation;
