import React from "react";
import { FaCode, FaTools, FaLaptopCode, FaDatabase } from "react-icons/fa";

const TechnicalArsenal = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <FaCode className="text-blue-400" />,
            skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
        },
        {
            title: "Frameworks & Libs",
            icon: <FaLaptopCode className="text-purple-400" />,
            skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Express.js"],
        },
        {
            title: "Databases",
            icon: <FaDatabase className="text-emerald-400" />,
            skills: ["MySQL", "MongoDB", "Firebase"],
        },
        {
            title: "Tools & Others",
            icon: <FaTools className="text-amber-400" />,
            skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
        },
    ];

    return (
        <section id="arsenal" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-4 mb-24 group/header">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover/header:scale-y-150 transition-transform duration-500" />
                        <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/40">The tools powering my universe</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#818cf8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer group-hover/header:scale-105 transition-transform duration-500">
                        Technical Arsenal
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                            className="glass-card spotlight-card shimmer-border shimmer-surface p-12 rounded-[40px] before:rounded-[40px] group hover:scale-[1.03] transition-all duration-700 relative overflow-hidden active:scale-[0.98]"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700"></div>

                            <div className="flex flex-col items-start gap-8 mb-10 relative z-10">
                                <div className="p-5 bg-white/5 rounded-3xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700 text-3xl">
                                    {category.icon}
                                </div>
                                <h3 className="font-black text-3xl tracking-tight text-white/90">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-base font-bold text-white/50 group-hover:text-white group-hover:border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-110"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalArsenal;
