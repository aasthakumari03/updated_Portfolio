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
                <div className="text-center mb-24">
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-700 hover:scale-[1.02]">
                        Technical Arsenal
                    </h2>
                    <p className="text-white/40 font-bold tracking-[0.4em] uppercase text-sm md:text-base">
                        The tools powering my universe
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-12 rounded-[40px] group hover:scale-[1.03] transition-all duration-700 relative overflow-hidden"
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
                                        className="px-5 py-2.5 bg-white/5 border border-white/5 rounded-full text-base font-bold text-white/50 group-hover:text-white group-hover:border-white/20 transition-all duration-300 hover:bg-white/10"
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
