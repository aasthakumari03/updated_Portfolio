
import React from 'react';
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/app/constants/data";

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-12 max-w-7xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
            <ScrollReveal>
                <div className="space-y-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">My Work</h2>
                    <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
                        A showcase of my projects where I merge my technical skills in <span className="text-teal-400">AI & ML</span> with refined UI/UX design.
                    </p>
                </div>
            </ScrollReveal>

            <div className="flex flex-col gap-12">
                {PROJECTS.map((project, index) => (
                    <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                        <ProjectCard
                            title={project.title}
                            category={project.category}
                            year={project.year}
                            tags={project.tags}
                            features={project.features}
                            backgroundImage={project.backgroundImage}
                            hasContentBorder={project.hasContentBorder}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
