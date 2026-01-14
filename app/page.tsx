"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import Background from "@/components/Background";
import Marquee from "@/components/Marquee";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import ConnectSection from "@/components/ConnectSection";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPython, SiReact } from "react-icons/si";

export default function Home() {
  const [activeTab, setActiveTab] = React.useState("portfolio");

  const companies = [
    { name: "ENGINEERS BUILT", icon: SiNextdotjs },
    { name: "MASTERS' UNION", icon: SiReact },
    { name: "whatfix", icon: SiJavascript },
    { name: "ENGINEERS BUILT", icon: SiPython },
    { name: "MASTERS' UNION", icon: SiTailwindcss },
    { name: "whatfix", icon: SiTypescript },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-teal-500/30 overflow-hidden flex">
      <Background />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow ml-80 relative z-10 h-screen overflow-y-auto overflow-x-hidden custom-scrollbar">
        <NavHeader />

        {activeTab === "portfolio" ? (
          <div className="animate-fade-in shadow-2xl">
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center relative">
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto animate-fade-in">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                  <Image
                    src="/avatar.png"
                    alt="Arnab Debnath"
                    width={128}
                    height={128}
                    className="relative z-10 rounded-full border-2 border-white/10 p-2 bg-white/5 backdrop-blur-sm shadow-2xl"
                  />
                </div>
                {/* Availability Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold animate-fade-in">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Available for opportunities
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight animate-fade-in [animation-delay:200ms]">
                  Let's Connect
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:400ms]">
                  Have a project, a question, or just want to chat about design? <br />
                  Drop me a message!
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

            {/* Projects Preview */}
            <section id="projects" className="py-32 px-6 max-w-6xl mx-auto text-center space-y-20">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif tracking-tight">Selected Works</h2>
                <p className="text-white/40 text-lg">A collection of projects where code meets creativity.</p>
              </div>

              <div className="flex flex-col gap-16">
                {[
                  {
                    category: "APP DESIGN",
                    year: "2024",
                    title: "Curating AI experiences while travelling with DestGo",
                    features: [
                      "Making travel planning a less tedious process",
                      "Get AI generated custom itineraries",
                      "Discover the undiscovered",
                    ],
                    image: "/projects/destgo.png",
                    mockupType: "mobile" as const,
                  },
                  {
                    category: "WEBSITE UI DESIGN",
                    year: "2023",
                    title: "Building an attractive and responsive dashboard",
                    features: [
                      "Renno is a platform for any sort of home renovation",
                      "Seamless contractor management system",
                      "Interactive project gallery and tracking",
                    ],
                    image: "/projects/renno.png",
                    mockupType: "desktop" as const,
                  }
                ].map((project, i) => (
                  <ProjectCard key={i} {...project} />
                ))}
              </div>
            </section>

            {/* New Connect Section */}
            <ConnectSection />
          </div>
        ) : (
          <div className="animate-fade-in py-32 px-12 max-w-4xl mx-auto space-y-16">
            <h1 className="text-6xl font-serif">About Me</h1>
            <p className="text-2xl text-white/70 leading-relaxed font-serif italic">
              A curiosity-driven first-year student exploring the fascinating intersection of human creativity and artificial intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              <div className="space-y-4">
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Skills</h3>
                <div className="flex flex-wrap gap-2 text-white/60">
                  <span>UX Design</span> • <span>UI Design</span> • <span>Interaction Design</span> • <span>Design Thinking</span> • <span>User Research</span> • <span>Prototyping</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Education</h3>
                <p className="text-white/60">B.Tech CSE (AI & ML) - 1st Year</p>
              </div>
            </div>
            <div className="pt-12 border-t border-white/10">
              <p className="text-white/50 leading-relaxed text-lg">
                I blend technical logic with visual storytelling to create intuitive and engaging interfaces. My passion lies in designing meaningful products that solve real problems through empathy and creativity.
              </p>
            </div>
            {/* New Connect Section also in About tab if desired, or keep as is */}
            <ConnectSection />
          </div>
        )}

        {/* Made with Badge */}
        <div className="fixed bottom-8 right-8 z-[100] animate-fade-in [animation-delay:1s]">
          <div className="px-4 py-2 bg-white text-black text-[10px] font-bold rounded-lg shadow-xl uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
            Made with ❤️
          </div>
        </div>
      </main>
    </div>
  );
}
