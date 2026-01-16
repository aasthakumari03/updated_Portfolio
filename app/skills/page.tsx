"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiTensorflow, SiFigma, SiGithub } from "react-icons/si";

export default function SkillsPage() {
    const skills = [
        {
            name: "Frontend", tools: [
                { name: "React", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Typescript", icon: SiTypescript },
                { name: "Tailwind CSS", icon: SiTailwindcss },
            ]
        },
        {
            name: "AI & ML", tools: [
                { name: "Python", icon: SiPython },
                { name: "TensorFlow", icon: SiTensorflow },
                { name: "Prompt Engineering", icon: SiNextdotjs },
            ]
        },
        {
            name: "Design", tools: [
                { name: "Figma", icon: SiFigma },
                { name: "Brand Design", icon: SiFigma },
                { name: "UX Research", icon: SiFigma },
            ]
        },
        {
            name: "Development", tools: [
                { name: "Node.js", icon: SiJavascript },
                { name: "GitHub", icon: SiGithub },
                { name: "Agile Development", icon: SiGithub },
            ]
        }
    ];

    return (
        <div className="animate-fade-in py-32 px-12 max-w-6xl mx-auto space-y-24 min-h-screen">
            <NavHeader />

            <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight">Technical Arsenal</h1>
                <p className="text-2xl text-white/40 max-w-2xl font-serif italic">
                    Blending the logic of computer science with the emotional resonance of high-end design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {skills.map((category, i) => (
                    <div key={i} className="space-y-10 group">
                        <h2 className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] flex items-center gap-4">
                            <span className="w-10 h-[1px] bg-teal-400"></span>
                            {category.name}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {category.tools.map((tool, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-default">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-teal-400 transition-colors">
                                        <tool.icon size={20} />
                                    </div>
                                    <span className="text-lg font-medium text-white/60">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-24 border-t border-white/5">
                <div className="p-12 rounded-[3rem] bg-teal-500/5 border border-teal-500/10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-3xl font-serif">Open for Collaborations</h3>
                        <p className="text-white/50 text-lg">Looking for an enthusiastic AI & ML student for your next project?</p>
                    </div>
                    <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all">
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
}
