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
        <section id="arsenal" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Technical Arsenal
                    </h2>
                    <p className="text-white/40 font-medium tracking-widest uppercase text-xs">
                        The tools powering my universe
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-8 rounded-[32px] group hover:scale-[1.03] transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-xl tracking-tight text-white/90">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-sm font-semibold text-white/60 group-hover:text-white group-hover:border-white/20 transition-all duration-300"
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
