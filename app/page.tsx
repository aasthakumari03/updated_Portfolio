"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import Marquee from "@/components/Marquee";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaPaperPlane, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPython, SiReact, SiTensorflow, SiFigma } from "react-icons/si";

export default function Home() {
  const companies = [
    { name: "ENGINEERS BUILT", icon: SiNextdotjs },
    { name: "MASTERS' UNION", icon: SiReact },
    { name: "whatfix", icon: SiJavascript },
    { name: "ENGINEERS BUILT", icon: SiPython },
    { name: "MASTERS' UNION", icon: SiTailwindcss },
    { name: "whatfix", icon: SiTypescript },
  ];

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

  const skills = [
    {
      name: "Frontend", tools: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Typescript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]
    },
    {
      name: "AI & ML", tools: [
        { name: "Python", icon: SiPython },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Prompt Engineering", icon: SiNextdotjs },
      ]
    },
    {
      name: "Design", tools: [
        { name: "Figma", icon: SiFigma },
        { name: "Brand Design", icon: SiFigma },
        { name: "UX Research", icon: SiFigma },
      ]
    },
    {
      name: "Development", tools: [
        { name: "Node.js", icon: SiJavascript },
        { name: "GitHub", icon: SiGithub },
        { name: "Agile Development", icon: SiGithub },
      ]
    }
  ];

  return (
    <div className="animate-fade-in flex flex-col">
      <NavHeader />

      {/* Section 1: Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-12 pb-20 text-center relative">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="relative w-32 h-32 mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <Image
              src="/avatar.png"
              alt="Aastha Kumari"
              width={128}
              height={128}
              className="relative z-10 rounded-full border-2 border-white/10 p-2 bg-white/5 backdrop-blur-sm shadow-2xl"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold animate-fade-in text-sky-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight animate-fade-in [animation-delay:200ms]">
            Welcome to <br />
            my humble digital abode!
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:400ms]">
            Hi I am Aastha, a passionate first-year AI & ML student. <br />
            My interest lies in brand experience, and user experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in [animation-delay:600ms]">
            <a href="#connect" className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center gap-2">
              👋 Let's talk
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
              My resume <FaArrowRight className="-rotate-45" />
            </button>
          </div>
        </div>
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

      {/* Section 2: About Me */}
      <section id="about" className="py-32 px-12 max-w-4xl mx-auto space-y-16 min-h-screen flex flex-col justify-center">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight">About Me</h2>
          <p className="text-2xl md:text-3xl text-white/70 leading-relaxed font-serif italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-teal-400">My Journey</h3>
            <p className="text-white/60 leading-relaxed text-xl">
              As a first-year Computer Science student specializing in AI & ML, I find myself at the exciting intersection of logic and creativity.
            </p>
            <p className="text-white/60 leading-relaxed text-xl">
              I am dedicated to mastering the art of building intelligent systems while ensuring they remain deeply human-centric.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-white/10">
            <div className="space-y-4">
              <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Philosophy</h4>
              <p className="text-white/50 text-lg">I believe in the power of simplicity.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Ambition</h4>
              <p className="text-white/50 text-lg">I aim to leverage AI to create adaptive interfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section id="projects" className="py-32 px-12 max-w-6xl mx-auto space-y-20 min-h-screen flex flex-col justify-center">
        <div className="space-y-6 text-center">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight">Technical Arsenal</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            A showcase of my projects where I merge my technical skills with refined UI/UX design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="group glass-card p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal-500/30 transition-all duration-700 space-y-8 cursor-default translate-y-0 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-serif tracking-tight group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <FaGithub className="text-white/20 hover:text-white cursor-pointer transition-colors" size={20} />
                    <FaExternalLinkAlt className="text-white/20 hover:text-white cursor-pointer transition-colors" size={18} />
                  </div>
                </div>
                <p className="text-white/50 text-lg leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/40 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-teal-500/50 uppercase tracking-[0.2em]">Featured Project</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <FaArrowRight className="-rotate-45" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Skills */}
      <section id="skills" className="py-32 px-12 max-w-6xl mx-auto space-y-24 min-h-screen flex flex-col justify-center text-left">
        <div className="space-y-6">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight">Skills & Tools</h2>
          <p className="text-2xl text-white/40 max-w-2xl font-serif italic">
            Blending the logic of computer science with the emotional resonance of design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.map((category, i) => (
            <div key={i} className="space-y-10 group">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-10 h-[1px] bg-teal-400"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-teal-400 transition-colors">
                      <tool.icon size={20} />
                    </div>
                    <span className="text-lg font-medium text-white/60">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Connect */}
      <section id="connect" className="py-32 px-12 max-w-4xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
        <div className="space-y-8 text-center">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tight">Let's Connect</h2>
          <p className="text-2xl text-white/50 max-w-xl mx-auto font-medium">
            Have a project in mind? Or just want to say hi?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Full Name</label>
                <input type="text" placeholder="Jan Doe" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Email Address</label>
                <input type="email" placeholder="jan@example.com" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg resize-none" />
              </div>
            </div>
            <button className="w-full py-6 bg-white text-black rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-white/90 transition-all">
              Send Message <FaPaperPlane size={18} />
            </button>
          </div>
          <div className="space-y-12">
            <h3 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Socials</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "LinkedIn", icon: FaLinkedin, link: "#" },
                { name: "GitHub", icon: FaGithub, link: "#" },
                { name: "Twitter", icon: FaTwitter, link: "#" },
                { name: "Instagram", icon: FaInstagram, link: "#" },
              ].map((social, i) => (
                <a key={i} href={social.link} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl transition-all hover:bg-white/[0.05] group">
                  <div className="flex items-center gap-4">
                    <social.icon size={22} className="text-white/20 group-hover:text-teal-400 transition-colors" />
                    <span className="text-xl font-bold tracking-tight">{social.name}</span>
                  </div>
                  <FaArrowRight className="-rotate-45 text-white/20 group-hover:text-white" size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Made with Badge */}
      <div className="fixed bottom-8 right-8 z-[100] animate-fade-in [animation-delay:1s]">
        <div className="px-4 py-2 bg-white text-black text-[10px] font-bold rounded-lg shadow-xl uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
          Made with ❤️
        </div>
      </div>
    </div>
  );
}
