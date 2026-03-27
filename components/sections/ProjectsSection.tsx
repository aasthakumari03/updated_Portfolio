"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/app/constants/data";

const ProjectsSection = () => {
    // Define bento grid spans for each project
    const getBentoClass = (index: number) => {
        switch (index) {
            case 0: return "md:col-span-8 md:row-span-2 min-h-[500px]"; // Celestial (Large)
            case 1: return "md:col-span-4 md:row-span-1 min-h-[300px]"; // Fitlife
            case 2: return "md:col-span-4 md:row-span-1 min-h-[300px]"; // Paceforge
            case 3: return "md:col-span-12 md:row-span-1 min-h-[400px]"; // Shadowchat (Wide)
            default: return "md:col-span-6";
        }
    };

    return (
        <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
            <div className="space-y-6 text-center max-w-3xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white"
                >
                    Selected Works
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/40 leading-relaxed"
                >
                    A curated collection of projects where <span className="text-teal-400">Artificial Intelligence</span> meets <br className="hidden md:block" /> refined engineering and intuitive design.
                </motion.p>
            </div>

            <div className="bento-grid">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        category={project.category}
                        year={project.year}
                        tags={project.tags}
                        features={project.features}
                        backgroundImage={project.backgroundImage}
                        className={getBentoClass(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
