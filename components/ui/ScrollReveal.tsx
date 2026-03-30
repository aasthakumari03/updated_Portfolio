"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    threshold?: number; // 0-1, amount of element visible before triggering
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 0.8,
    threshold = 0.2,
    className = ""
}: ScrollRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
