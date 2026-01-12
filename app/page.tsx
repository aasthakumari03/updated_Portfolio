"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dock from "@/components/Dock";
import { FaCode, FaRobot, FaBrain, FaDatabase, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-900/30 font-sans">
      {/* Central Glow Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-950/20 rounded-full blur-[120px] opacity-60" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 max-w-6xl">
          <div className="space-y-8 animate-fade-in">
            {/* Greed Eyebrow Tag */}
            <div className="inline-block px-0 py-1 border-none bg-transparent">
              <span className="text-[#A3E635] text-sm md:text-base font-bold tracking-tight">
                AI & ML Student
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-extrabold leading-[0.9] tracking-tighter">
              Hi,<br />
              I m <span className="text-white">Aastha Kumari</span>
            </h1>

            {/* Description Subtext */}
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed font-medium">
              A curious first-year B.Tech CSE (AI & ML) student who loves breaking code to fix it better.
              Learning fast, collaborating openly, chasing opportunities—and having fun while doing it.
            </p>

            {/* Tech Stack / Companies Section */}
            <div className="pt-20 space-y-6">
              <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/20 uppercase">
                COMPANIES & PROJECTS I&apos;VE WORKED WITH
              </p>
              <div className="flex flex-wrap gap-x-16 gap-y-8 items-center opacity-20 grayscale hover:opacity-40 transition-all duration-700 ease-in-out cursor-default">
                <div className="flex items-center gap-3">
                  <SiPython size={28} />
                  <span className="text-lg font-bold tracking-tighter">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiJavascript size={28} />
                  <span className="text-lg font-bold tracking-tighter">JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaReact size={28} />
                  <span className="text-lg font-bold tracking-tighter">React</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiNextdotjs size={28} />
                  <span className="text-lg font-bold tracking-tighter">Next.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTailwindcss size={28} />
                  <span className="text-lg font-bold tracking-tighter">Tailwind</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBrain size={28} />
                  <span className="text-lg font-bold tracking-tighter">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified About Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 max-w-6xl">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">About</h2>
            <p className="text-2xl md:text-4xl text-white/60 leading-tight tracking-tight">
              Whether it&apos;s code or real life, I believe most
              <span className="text-white"> problems just need patience and logic</span>.
              Currently exploring the depths of AI and Machine Learning.
            </p>
          </div>
        </section>

        {/* Simplified Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 max-w-6xl">
          <div className="space-y-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Portfolio</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Fitlife Tracker",
                  desc: "A comprehensive health and fitness companion.",
                  tech: "React, JavaScript, Firebase"
                },
                {
                  title: "Celestial Portfolio",
                  desc: "A universe that showcases art and code.",
                  tech: "Next.js, Tailwind, Framer Motion"
                }
              ].map((project, i) => (
                <div key={i} className="group space-y-4 border-b border-white/10 pb-12 hover:border-white/30 transition-colors">
                  <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed">{project.desc}</p>
                  <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-32 max-w-6xl">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Let&apos;s Connect</h2>
            <p className="text-2xl md:text-4xl text-white/60 leading-tight tracking-tight max-w-4xl">
              My universe is always expanding. Whether you have a project in mind or just want to say hello,
              <span className="text-white"> my signal is always on</span>.
            </p>
            <div className="flex gap-8 pt-8">
              <a href="mailto:aastha0328kumari@gmail.com" className="text-xl md:text-2xl font-bold border-b-2 border-white pb-1 hover:text-white/60 hover:border-white/30 transition-all">
                aastha0328kumari@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Dock />
    </div>
  );
}
