"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring configuration for trailing effect
    const springConfig = { damping: 25, stiffness: 200, restDelta: 0.001 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') || 
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Single Elegant Filled Circle */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovered ? 48 : 12,
                    height: isHovered ? 48 : 12,
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: isHovered ? "blur(4px)" : "blur(0px)",
                    boxShadow: isHovered 
                        ? "0 0 30px rgba(255, 255, 255, 0.3)" 
                        : "0 0 10px rgba(255, 255, 255, 0.1)",
                }}
                transition={{ 
                    duration: 0.3, 
                    ease: "circOut"
                }}
                className="fixed top-0 left-0 rounded-full z-50 border border-white/20"
            />
        </div>
    );
};

export default CustomCursor;
