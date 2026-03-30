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
            {/* Main Dot */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full z-50 fixed top-0 left-0"
            />

            {/* Trailing Outer Ring */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(45, 212, 191, 0.15)" : "transparent",
                    borderColor: isHovered ? "rgba(45, 212, 191, 0.4)" : "rgba(255, 255, 255, 0.2)",
                    width: isHovered ? 40 : 28,
                    height: isHovered ? 40 : 28,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 border rounded-full z-40 backdrop-blur-[2px]"
            />
            
            {/* Glow Effect */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    opacity: isHovered ? 0.3 : 0,
                    scale: isHovered ? 2 : 1
                }}
                className="fixed top-0 left-0 w-20 h-20 bg-teal-400/20 rounded-full blur-2xl z-30"
            />
        </div>
    );
};

export default CustomCursor;
