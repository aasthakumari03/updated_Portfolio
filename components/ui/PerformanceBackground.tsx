"use client";

import React, { useEffect, useRef } from 'react';

interface PerformanceBackgroundProps {
    interactive?: boolean;
    density?: number;
    color?: string;
}

const PerformanceBackground: React.FC<PerformanceBackgroundProps> = ({ 
    interactive = true, 
    density = 40,
    color = "rgba(45, 212, 191, 0.15)" // Teal-400 with low opacity
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const isInView = useRef(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Observer to stop animation when out of view
        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView.current = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);

        let animationFrameId: number;
        let w: number, h: number;
        let particles: { x: number; y: number; vx: number; vy: number }[] = [];

        const setup = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            
            // Adjust density based on screen size
            const count = Math.min(density, (w * h) / 30000);
            particles = Array.from({ length: Math.floor(count) }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
            }));
        };

        const draw = () => {
            if (!isInView.current) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            ctx.clearRect(0, 0, w, h);
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                // Draw node
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
                ctx.fill();

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.globalAlpha = 1 - dist / 150;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }

                // Mouse interaction
                if (interactive) {
                    const mdx = p.x - mouseRef.current.x;
                    const mdy = p.y - mouseRef.current.y;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < 200) {
                        ctx.globalAlpha = 0.4 * (1 - mdist / 200);
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseRef.current = { 
                x: e.clientX - rect.left, 
                y: e.clientY - rect.top 
            };
        };

        window.addEventListener('resize', setup);
        window.addEventListener('mousemove', handleMouseMove);
        
        setup();
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setup);
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, [density, color, interactive]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none opacity-50 overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default PerformanceBackground;
