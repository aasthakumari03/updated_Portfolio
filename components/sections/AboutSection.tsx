
import React from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";

const AboutSection = () => {
    return (
        <section id="about" className="py-32 px-12 max-w-5xl mx-auto space-y-12 min-h-screen flex flex-col justify-start items-center text-center">
            <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">About Me</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="prose prose-invert prose-2xl max-w-none text-center">
                <div className="space-y-4 max-w-4xl mx-auto">
                    <p className="text-white/60 leading-tight text-2xl font-serif italic hover:text-white/90 transition-colors duration-500 cursor-default">
                        "In code and in life, I break things before I understand them."
                    </p>
                    <p className="text-white/60 leading-tight text-2xl font-serif italic hover:text-white/90 transition-colors duration-500 cursor-default">
                        "As a CSE (AI & ML) student, debugging taught me that progress comes from fixing, not quitting."
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default AboutSection;
