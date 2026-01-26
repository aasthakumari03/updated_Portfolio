"use client";
import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";



import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import ScrollReveal from "@/components/ScrollReveal";
import FogSeparator from "@/components/FogSeparator";

export default function Home() {



  const projects = [
    {
      title: "Fitlife Tracker",
      desc: "A comprehensive health and fitness companion with a data-driven interface for tracking workouts, nutrition, and progress.",
      tech: ["React", "Firebase", "Chart.js"],
      link: "#",
    },
    {
      title: "Celestial Portfolio",
      desc: "A futuristic universe-themed portfolio showcasing art and code with smooth animations and atmospheric effects.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      link: "#",
    },
    {
      title: "Neural Vision",
      desc: "An AI-powered image recognition tool built to explore the fundamentals of computer vision and deep learning.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      link: "#",
    },
    {
      title: "EcoSphere",
      desc: "A sustainability-focused app that helps users track their carbon footprint and discover eco-friendly lifestyle changes.",
      tech: ["React Native", "Node.js", "MongoDB"],
      link: "#",
    }
  ];



  return (
    <div className="animate-fade-in flex flex-col">


      {/* Section 1: Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8">



          {/* Main Heading */}
          <div className="relative w-full flex justify-center">
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-gothic leading-none tracking-tight animate-fade-in [animation-delay:100ms] text-white whitespace-nowrap relative z-10 w-full text-center">
              <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent hover:brightness-125 transition-all duration-700">
                Aastha Kumari
              </span>
            </h1>
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 animate-pulse-slow max-w-4xl mx-auto"></div>
          </div>

          {/* Professional Title Shining Card */}
          <div className="animate-fade-in [animation-delay:300ms] flex justify-center">

            <div className="shimmer-border shimmer-surface px-8 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md group cursor-default shadow-2xl shadow-teal-500/10">
              <span className="text-xs md:text-sm font-bold text-teal-400 uppercase tracking-[0.5em] drop-shadow-[0_0_10px_rgba(45,212,191,0.3)] group-hover:text-white transition-colors duration-500">
                Aspiring Software Developer
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:400ms]">
            Hi, I’m Aastha. A first-year AI & ML student dedicated to <br />
            <span className="text-white">crafting digital experiences</span> that blend logic with artistry.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in [animation-delay:600ms]">
            <a href="#projects" className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-teal-400 hover:text-black transition-all duration-500 flex items-center gap-3 shadow-xl shadow-white/5 hover:scale-105 active:scale-95">
              📂 My work
            </a>
            <button className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-500 flex items-center gap-2 backdrop-blur-sm hover:border-teal-400/30">
              My resume <FaArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1.2s]">
          <a href="#about" className="flex flex-col items-center gap-4 group">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] group-hover:text-teal-400 transition-colors">Scroll</span>
            <div className="w-6 h-10 rounded-full border border-white/10 flex justify-center p-1.5 group-hover:border-teal-400/50 transition-colors">
              <div className="w-1 h-2 bg-white/20 rounded-full animate-bounce group-hover:bg-teal-400"></div>
            </div>
          </a>
        </div>


      </section>

      <FogSeparator />

      {/* Section 2: About Me */}
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

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full items-center mt-16 max-w-4xl">
          <ScrollReveal delay={0.2} className="relative group w-64">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-teal-500/5 group-hover:shadow-teal-500/30 group-hover:-translate-y-2 transition-all duration-700">
              <Image
                src="/images/mahadev.png"
                alt="Mahadev Trishul - Symbol of Core Beliefs"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            </div>
            <p className="mt-4 text-teal-400 font-bold tracking-[0.2em] uppercase text-xs text-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Spiritual Root • Mahadev Bhakt
            </p>
            <p className="mt-2 text-teal-200/80 text-[10px] uppercase tracking-widest text-center font-medium opacity-90 transition-opacity duration-500">
              Grounded in faith, driven by purpose.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="relative group w-64">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-teal-500/5 group-hover:shadow-teal-500/30 group-hover:-translate-y-2 transition-all duration-700">
              <Image
                src="/images/coding.png"
                alt="Futuristic Coding Interface"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            </div>
            <p className="mt-4 text-teal-400 font-bold tracking-[0.2em] uppercase text-xs text-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Passion • Code & Debug
            </p>
            <p className="mt-2 text-teal-200/80 text-[10px] uppercase tracking-widest text-center font-medium opacity-90 transition-opacity duration-500">
              Crafting logic into digital art.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FogSeparator />

      {/* Section 3: Projects */}
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
          {/* We can animate cards in stagger if we map them or just individually */}
          <ScrollReveal delay={0.1}>
            <ProjectCard
              title="Celestial Portfolio"
              category=""
              year=""
              tags={[]}
              features={[
                "Modern universe-themed aesthetic",
                "Smooth GSAP & Lenis scrolling",
                "Interactive spotlight components"
              ]}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ProjectCard
              title="Fitlife Tracker"
              category="Health & Fitness"
              year="2025"
              tags={[]}
              features={[
                "AI-driven workout recommendations",
                "Real-time nutritional tracking",
                "Interactive progress analytics"
              ]}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ProjectCard
              title="Paceforge"
              category="Productivity & Automation"
              year="2026"
              tags={["Next.js", "MongoDB", "Tailwind"]}
              features={[
                "Artificial Urgency Logic Engine",
                "Cinematic Golden Hour Aesthetic",
                "Full-stack Task Management System"
              ]}
              features={[
                "Artificial Urgency Logic Engine",
                "Cinematic Golden Hour Aesthetic",
                "Full-stack Task Management System"
              ]}
              backgroundImage="/images/paceforge.png"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <ProjectCard
              title="Future Vision"
              category="Coming Soon"
              year="2026"
              tags={[]}
              features={[
                "Pioneering spatial experiences",
                "Seamless web integration",
                "Stay tuned for updates"
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: What I've Been Up To */}
      <section id="updates" className="py-24 px-12 max-w-7xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">What I've Been Up To</h2>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            Constantly learning, building, and exploring. Here’s a snapshot of my current <span className="text-teal-400">focus</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Learning */}
          <div className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-teal-400/30 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 w-12 h-12 rounded-full bg-teal-400/10 flex items-center justify-center text-teal-400">
              <SiPython size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Deep Learning</h3>
            <p className="text-white/40 leading-relaxed">
              Currently diving deep into Neural Networks and Computer Vision. Experimenting with <span className="text-white">TensorFlow</span> to build more robust image recognition models.
            </p>
          </div>

          {/* Card 2: Building */}
          <div className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-teal-400/30 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400">
              <SiNextdotjs size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Building FitLife</h3>
            <p className="text-white/40 leading-relaxed">
              Refining the <span className="text-white">FitLife Tracker</span> app. Focusing on optimizing the backend data flow with Firebase and enhancing the dashboard UI.
            </p>
          </div>

          {/* Card 3: Reading */}
          <div className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-teal-400/30 hover:bg-zinc-900/60 transition-all duration-500 hover:-translate-y-2">
            <div className="mb-6 w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400">
              <FaExternalLinkAlt size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Reading & Research</h3>
            <p className="text-white/40 leading-relaxed">
              Exploring research papers on <span className="text-white">Agentic AI</span> workflows and their application in modern software development.
            </p>
          </div>
        </div>
      </section>

      <FogSeparator />

      {/* Section 5: Connect */}
      <section id="connect" className="py-24 px-12 max-w-6xl mx-auto min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center space-y-32 w-full">
          <div className="max-w-4xl mx-auto w-full group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 via-purple-500/30 to-teal-500/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative border border-white/10 rounded-[2rem] p-12 bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-md hover:border-teal-400 hover:shadow-[0_0_80px_rgba(45,212,191,0.4)] transition-all duration-700">
              <div className="space-y-10 text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">Let's Connect</h2>
                <p className="text-2xl text-white/40 font-medium leading-tight">
                  Have a project in mind? Or just want to say hi? Shoot me an email at <a href="mailto:aastha0328kumari@gmail.com" className="text-teal-400 italic hover:underline hover:text-teal-300 transition-colors">aastha0328kumari@gmail.com</a>
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-bold text-teal-400 uppercase tracking-[0.4em] italic text-center">Social Channels</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/aastha-kumari-2116a837a", color: "#0077b5" },
                    { name: "GitHub", icon: FaGithub, link: "https://github.com/aasthakumari03", color: "#ffffff" },
                    { name: "X", icon: FaXTwitter, link: "https://x.com/Nytheris0329", color: "#ffffff" },
                    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/the_nytheris/", color: "#E4405F" },
                    { name: "Email", icon: FaEnvelope, link: "mailto:aastha0328kumari@gmail.com", color: "#EA4335" },
                  ].map((social, i) => (
                    <a key={i} href={social.link} className="flex items-center gap-4 px-6 py-3 bg-white/[0.01] border border-white/5 rounded-full transition-all duration-700 hover:bg-white/[0.04] group/item hover:border-white/20">
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-500 group-hover/item:scale-110" style={{ color: social.color }}>
                        <social.icon size={18} className="opacity-60 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm font-bold tracking-tight text-white/40 group-hover/item:text-white transition-colors duration-500">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Line */}
        <div className="pt-20 pb-4 text-center">
          <p className="text-sm font-bold text-white/15 uppercase tracking-[0.4em]">
            ALL RIGHTS RESERVED | AASTHA KUMARI
          </p>
        </div>
      </section>

      {/* Made with Badge */}
      <div className="fixed bottom-8 right-8 z-[100] animate-fade-in [animation-delay:1s]">
        <div className="px-5 py-2.5 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-white/50 text-[10px] font-bold rounded-2xl shadow-2xl uppercase tracking-[0.2em] flex items-center gap-3 hover:text-white transition-all duration-500 group cursor-default">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
          Made with ❤️ By Aastha
        </div>
      </div>
    </div>
  );
}
