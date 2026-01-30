"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
        company: "Masters' Union",
        role: "Product Designer (Intern)",
        period: "2024 - Present",
        description: "Designing educational platforms and student experience tools. Focusing on user-centric design and interactive prototyping.",
        achievements: ["Improved student dashboard engagement by 15%", "Designed a new course discovery layout"]
    },
    {
        company: "Whatfix",
        role: "UX Design Associate",
        period: "2023 - 2024",
        description: "Assisted in creating digital adoption flows for enterprise clients. Collaborated with product teams to refine UI components.",
        achievements: ["Created 20+ design system components", "Enhanced onboarding flows for major clients"]
    },
    {
        company: "Engineers Built",
        role: "Founding Designer",
        period: "2022 - 2023",
        description: "Led the visual identity and initial product design for a builder-focused platform. Established brand guidelines and core UI.",
        achievements: ["Launched MVP in 3 months", "Established brand identity and design system"]
    }
];

const ExperienceTimeline = () => {
    return (
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/20 before:to-transparent">
            {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <FaBriefcase size={14} />
                    </div>
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-white text-lg">{exp.company}</div>
                            <time className="font-serif italic text-blue-400 text-sm">{exp.period}</time>
                        </div>
                        <div className="text-white/40 font-bold text-xs uppercase tracking-widest mb-4">{exp.role}</div>
                        <div className="text-white/60 mb-4">{exp.description}</div>
                        <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0"></span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTimeline;
