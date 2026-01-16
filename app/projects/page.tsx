"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
    const projects = [
        {
            title: "Fitlife Tracker",
            desc: "A comprehensive health and fitness companion with a data-driven interface for tracking workouts, nutrition, and progress.",
            tech: ["React", "Firebase", "Chart.js"],
            link: "#",
        },
        {
            title: "Celestial Portfolio",
            desc: "A futuristic universe-themed portfolio showcasing art and code with smooth animations and atmospheric effects.",
            tech: ["Next.js", "Framer Motion", "Tailwind"],
            link: "#",
        },
        {
            title: "Neural Vision",
            desc: "An AI-powered image recognition tool built to explore the fundamentals of computer vision and deep learning.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            link: "#",
        },
        {
            title: "EcoSphere",
            desc: "A sustainability-focused app that helps users track their carbon footprint and discover eco-friendly lifestyle changes.",
            tech: ["React Native", "Node.js", "MongoDB"],
            link: "#",
        }
    ];

    return (
        <div className="animate-fade-in py-32 px-12 max-w-6xl mx-auto space-y-20 min-h-screen">
            <NavHeader />

            <div className="space-y-6 text-center">
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight">Technical Arsenal</h1>
                <p className="text-xl text-white/40 max-w-2xl mx-auto">
                    A showcase of my projects where I merge my technical skills in AI & ML with refined UI/UX design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project, i) => (
                    <div key={i} className="group glass-card p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal-500/30 transition-all duration-700 space-y-8 cursor-default translate-y-0 hover:-translate-y-2">
                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-4xl font-serif tracking-tight group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <FaGithub className="text-white/20 hover:text-white cursor-pointer transition-colors" size={20} />
                                    <FaExternalLinkAlt className="text-white/20 hover:text-white cursor-pointer transition-colors" size={18} />
                                </div>
                            </div>
                            <p className="text-white/50 text-lg leading-relaxed font-medium">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, idx) => (
                                <span key={idx} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs font-bold text-teal-500/50 uppercase tracking-[0.2em]">Featured Project</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <FaArrowRight className="-rotate-45" size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
