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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    category,
    year,
    title,
    features,
    tags,
    image,
    mockupType = "mobile",
    reversed = false,
}) => {
    return (
        <div className={`group relative w-full overflow-hidden rounded-[2.5rem] project-card-gradient grainy-overlay mb-12 flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''}`}>
            {/* Content Section */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 z-10">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">
                            {category} • {year}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                        {title}
                    </h2>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-white/60 text-lg">
                            <FaCheckCircle className="text-blue-500/30 shrink-0" size={18} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-4">
                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-white/90 transition-all">
                        View Case Study <FaArrowRight className="-rotate-45" size={12} />
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative min-h-[400px] md:min-h-auto flex items-center justify-center p-8 md:p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                    {mockupType === "mobile" ? (
                        <div className="relative w-[280px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden bg-black">
                            {/* Speaker/Camera Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="relative w-full aspect-video rounded-xl border-[4px] border-zinc-800 shadow-2xl overflow-hidden bg-zinc-900 mt-12">
                            <div className="absolute top-0 left-0 w-full h-6 bg-zinc-800 flex items-center gap-1.5 px-3">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="w-full h-full pt-6">
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
