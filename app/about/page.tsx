"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";

export default function AboutPage() {
    return (
        <div className="animate-fade-in py-32 px-12 max-w-4xl mx-auto space-y-16 min-h-screen">
            <NavHeader />

            <div className="space-y-8">
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight">More About Me</h1>
                <p className="text-2xl md:text-3xl text-white/70 leading-relaxed font-serif italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-12">
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif text-teal-400">My Journey</h2>
                    <p className="text-white/60 leading-relaxed text-xl">
                        As a first-year Computer Science student specializing in Artificial Intelligence and Machine Learning, I find myself at the exciting intersection of logic and creativity. My journey began with a simple curiosity about how digital interfaces can influence human behavior and emotions.
                    </p>
                    <p className="text-white/60 leading-relaxed text-xl">
                        I am dedicated to mastering the art of building intelligent systems while ensuring they remain deeply human-centric. Whether it's through a lines of code or a Figma canvas, my goal is to create products that feel as good as they look.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
                    <div className="space-y-4">
                        <h3 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Philosopy</h3>
                        <p className="text-white/50 text-lg">
                            I believe in the power of simplicity. Every element in a digital experience should serve a clear purpose and guide the user toward their goal with elegance and ease.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Ambition</h3>
                        <p className="text-white/50 text-lg">
                            I aim to leverage AI to create adaptive interfaces that learn from users, providing a truly personalized experience that anticipates needs before they are even expressed.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-serif text-teal-400">Education</h2>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                        <h3 className="text-xl font-bold">B.Tech in Computer Science (AI & ML)</h3>
                        <p className="text-white/40">1st Year Student</p>
                        <p className="mt-4 text-white/60">Currently exploring the foundations of programming, data structures, and the mathematical principles behind neural networks.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
