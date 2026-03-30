"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Magnetic from "./Magnetic";

interface ProjectCardProps {
    category: string;
    year: string;
    title: string;
    description?: string;
    features: string[];
    tags: string[];
    backgroundImage?: string;
    hasContentBorder?: boolean;
    className?: string; // Add className for bento spanning
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    category,
    year,
    title,
    features,
    tags = [],
    backgroundImage,
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`group relative overflow-hidden glass-card rounded-3xl spotlight-border ${className}`}
        >
            {/* Background Image with Parallax & Overlay */}
            <div className="absolute inset-0 z-0">
                {backgroundImage ? (
                    <motion.div style={{ y: yMove }} className="relative h-[120%] w-full">
                        <Image
                            src={backgroundImage}
                            alt={title}
                            fill
                            className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </motion.div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-indigo-500/5 opacity-50" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent z-10" />
            </div>

            {/* Content Section */}
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-end z-20">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                                {category}
                            </span>
                            {year && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-white/40 font-medium text-[10px] uppercase tracking-widest">{year}</span>
                                </>
                            )}
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-[1.1] group-hover:translate-x-2 transition-transform duration-500">
                            {title}
                        </h3>
                    </div>

                    {/* Features & Tags Container */}
                    <div className="space-y-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <ul className="space-y-3">
                            {features.slice(0, 2).map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-white/50 text-sm md:text-base">
                                    <FaCheckCircle className="text-teal-400/40 shrink-0" size={14} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:border-teal-400/20 transition-all"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                        <Magnetic strength={0.2}>
                            <button className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-full font-bold text-xs transition-all duration-500 group/btn shadow-xl hover:shadow-teal-500/20">
                                Explore <FaArrowRight className="-rotate-45 group-hover/btn:rotate-0 transition-transform" />
                            </button>
                        </Magnetic>
                        
                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-teal-400/30 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
