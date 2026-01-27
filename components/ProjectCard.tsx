'use client';

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

interface ProjectCardProps {
    category: string;
    year: string;
    title: string;
    description?: string;
    features: string[];
    tags: string[];
    // Removed image and mockupType as requested
    reversed?: boolean;
    backgroundImage?: string;
    hasContentBorder?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    category,
    year,
    title,
    features,
    tags = [],
    reversed = false,
    backgroundImage,
    hasContentBorder = false,
}) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`group relative w-full overflow-hidden rounded-[2.5rem] bg-black/90 backdrop-blur-xl border border-white/5 spotlight-card spotlight-border hover-lift-up mb-12 flex flex-col items-center hover:border-teal-300 hover:shadow-[0_0_80px_rgba(45,212,191,0.5),inset_0_0_30px_rgba(45,212,191,0.2)] transition-all duration-700`}
        >
            {/* Background Image (Optional) */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage}
                        alt="Background"
                        fill
                        className="object-cover opacity-30 blur-[3px] group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                </div>
            )}

            {/* Content Section */}
            <div className={`w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center space-y-8 z-10 relative ${hasContentBorder ? 'm-4 border border-white/30 rounded-2xl bg-[#020617]/80 backdrop-blur-md shadow-inner shadow-white/5' : ''}`}>
                <div className="space-y-4 flex flex-col items-center">
                    {(category || year) && (
                        <div className="flex items-center justify-center">
                            <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                                {category}{category && year && " • "}{year}
                            </span>
                        </div>
                    )}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight group-hover:text-teal-400 transition-colors duration-700">
                        {title}
                    </h2>
                    {/* Tags */}
                    {tags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:border-teal-400/20 transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <ul className="space-y-4 flex flex-col items-center">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-white/50 text-base md:text-lg group-hover:text-white/70 transition-colors">
                            <FaCheckCircle className="text-teal-500/30 shrink-0" size={18} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-4">
                    <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-teal-400 transition-all duration-500 shadow-xl shadow-white/5 hover:scale-105 active:scale-95">
                        Explore Project <FaArrowRight className="-rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
