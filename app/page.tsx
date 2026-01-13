"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import Background from "@/components/Background";
import Marquee from "@/components/Marquee";
import { FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPython, SiFigma, SiReact } from "react-icons/si";

export default function Home() {
  const companies = [
    { name: "ENGINEERS BUILT", icon: SiNextdotjs },
    { name: "MASTERS' UNION", icon: SiReact },
    { name: "whatfix", icon: SiJavascript },
    { name: "ENGINEERS BUILT", icon: SiPython },
    { name: "MASTERS' UNION", icon: SiTailwindcss },
    { name: "whatfix", icon: SiTypescript },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-teal-500/30">
      <Background />
      <NavHeader />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Avaiblity Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight animate-fade-in [animation-delay:200ms]">
              Welcome to <br />
              my humble digital abode!
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:400ms]">
              Hi I am Aastha, a passionate first-year AI & ML student. <br />
              My interest lies in brand experience, and user experience.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in [animation-delay:600ms]">
              <button className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center gap-2">
                👋 Let's talk
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                My resume <FaArrowRight className="-rotate-45" />
              </button>
            </div>
          </div>

          {/* Social Proof Marquee */}
          <div className="mt-32 w-full max-w-5xl animate-fade-in [animation-delay:800ms]">
            <Marquee speed={30}>
              {companies.map((company, i) => (
                <div key={i} className="flex items-center gap-3 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
                  <company.icon size={24} />
                  <span className="text-xl font-bold tracking-tighter whitespace-nowrap">{company.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Existing Sections Placeholder - Will refine below common areas */}
        <section id="projects" className="py-20 px-6">
          {/* Rest of the content following same theme... */}
        </section>
      </main>
    </div>
  );
}
