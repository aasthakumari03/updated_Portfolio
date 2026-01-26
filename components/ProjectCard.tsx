"use client";

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
    image: string;
    mockupType?: "mobile" | "desktop";
    reversed?: boolean;
    backgroundImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    category,
    year,
    title,
    features,
    tags = [],
    image,
    mockupType = "mobile",
    reversed = false,
    backgroundImage,
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
        {/* Content Section */ }
        < div className = "flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center space-y-8 z-10 relative" >
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
            </div >
        </div >
    );
};

export default ProjectCard;
