"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import TerminalDisplay from "@/components/TerminalDisplay";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDesktop, FaRunning, FaRocket, FaCode } from "react-icons/fa";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState<'hello' | 'namaste' | 'fading' | 'done'>('hello');
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Stage 1: "Hello" (1.5s)
    const helloTimer = setTimeout(() => {
      setLoadingPhase('namaste');
    }, 1500);

    // Stage 2: "Namaste" (2s)
    const namasteTimer = setTimeout(() => {
      setLoadingPhase('fading');
    }, 3500);

    // Stage 3: Fade out / Vapour Effect (1.5s)
    const doneTimer = setTimeout(() => {
      setLoadingPhase('done');
    }, 5000);

    return () => {
      clearTimeout(helloTimer);
      clearTimeout(namasteTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll past 50 pixels, hide the header
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-[var(--foreground)] selection:bg-indigo-100/30 selection:text-indigo-900">
      {/* Welcome Sequence Screen */}
      {loadingPhase !== 'done' && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none transition-all duration-1500 ease-out ${loadingPhase === 'fading' ? 'opacity-0 scale-[1.5] blur-3xl' : 'opacity-100 scale-100'}`}>
          <div className="relative text-center overflow-hidden h-48 w-full max-w-4xl flex items-center justify-center">
            <h1
              className={`absolute text-7xl md:text-9xl font-black tracking-tighter uppercase font-[family-name:var(--font-playfair)] flex text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600`}
            >
              {"Hello".split("").map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-[1200ms] ${loadingPhase === 'hello'
                    ? 'opacity-100 scale-110 blur-0 translate-y-0'
                    : 'opacity-0 scale-[4] blur-[120px] -translate-y-20 rotate-12'
                    }`}
                  style={{ transitionDelay: `${i * 50}ms`, transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <h1
              className={`absolute text-7xl md:text-9xl font-black tracking-tighter uppercase font-[family-name:var(--font-playfair)] transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 ${loadingPhase === 'namaste' ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-[3] blur-[120px]'
                }`}
            >
              Namaste
            </h1>
          </div>
        </div>
      )}

      {/* Unified Navigation Header */}
      <header className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${loadingPhase !== 'done' ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className={`mx-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled
          ? 'max-w-fit bg-[var(--card-bg)]/60 backdrop-blur-3xl px-6 py-2 rounded-full border border-[var(--card-border)] shadow-[0_8px_32px_rgba(79,70,229,0.1)] gap-8'
          : 'max-w-full justify-between gap-0'
          }`}>

          {/* Logo & Socials Group */}
          <div className="flex items-center gap-6">
            <Logo className="w-10 h-10 text-indigo-950" />

            {/* Social Icons - Hidden on scroll to keep it clean, or kept if preferred */}
            <div className={`flex items-center gap-4 pl-4 border-l border-indigo-200 transition-all duration-500 ${isScrolled ? 'opacity-0 w-0 -ml-4 pointer-events-none' : 'opacity-100 w-auto'}`}>
              <a
                href="https://github.com/aasthakumari03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-all duration-300 hover:scale-125"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aastha-kumari-2116a837a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--foreground)]/70 hover:text-blue-600 transition-all duration-300 hover:scale-125"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/the_nytheris/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-all duration-300 hover:scale-125"
              >
                <div className="relative overflow-hidden rounded-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]">
                  <FaInstagram size={20} />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <Navbar isMinimal={isScrolled} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`relative z-20 transition-all duration-1000 ${loadingPhase === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 overflow-hidden'}`}>
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center select-none">
          <div className="max-w-5xl space-y-12">
            {/* Eyebrow Text */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-8xl md:text-[10rem] font-black tracking-tighter drop-shadow-[0_0_60px_rgba(244,114,182,0.4)] animate-pulse-slow text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition-transform duration-500 cursor-default" style={{ fontFamily: "'Playfair Display', serif" }}>
                Aastha Kumari
              </span>
            </div>

            <div className="flex justify-center pt-8 -translate-x-10">
              <ResumeCard />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-[120vh] flex flex-col items-center justify-center py-48 px-12 md:px-24 bg-transparent">
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 md:gap-24">
            {/* Header Side */}
            <div className="flex items-center gap-4 shrink-0 pt-2">
              <div className="w-1.5 h-6 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
              <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white/90">
                just an intro
              </h2>
            </div>

            {/* Content Side */}
            <div className="flex-1">
              <p className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight transition-all duration-700">
                <span className="text-white/40">I'm a </span>
                <span className="text-white font-bold">first-year AI & ML student</span>
                <span className="text-white/40"> passionate about </span>
                <span className="text-white font-bold">coding and debugging</span>
                <span className="text-white/40">. Whether it’s code or real life, I believe most </span>
                <span className="text-white font-bold">problems just need patience and logic</span>
                <span className="text-white/40">.</span>
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-black">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-teal-300 to-emerald-400 tracking-tighter uppercase font-[family-name:var(--font-playfair)] mb-6">
              Featured <br />
              Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(244,63,94,0.3)]"></div>
          </div>

          <div className="relative w-full max-w-5xl mx-auto space-y-24">
            {[
              {
                id: 1,
                title: "A celestial portfolio universe that showcases art and code through dynamic animations.",
                type: "CURRENT WORK",
                desc: "The very portfolio you are browsing, built with Next.js, Tailwind CSS, and Framer Motion.",
                link: "https://github.com/aasthakumari03/updated_Portfolio",
                color: "bg-[#D1E5FF]",
                textColor: "text-[#002D62]",
                images: [
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80"
                ]
              },
              {
                id: 2,
                title: "Fitlife-Tracker: A comprehensive health and fitness companion.",
                type: "FEATURED PROJECT",
                desc: "Track workouts, monitor nutrition, and visualize your progress with a sleek, data-driven interface.",
                link: "https://github.com/aasthakumari03/fitlife-tracker",
                color: "bg-[#FFFFFF]",
                textColor: "text-[#111111]",
                images: [
                  "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=80"
                ]
              }
            ].map((project, index) => (
              <div
                key={project.id}
                className={`group relative w-full ${project.color} ${project.textColor} rounded-[48px] overflow-hidden min-h-[600px] flex flex-col md:flex-row transition-all duration-700 hover:scale-[1.02] shadow-[0_40px_100px_rgba(0,0,0,0.2)]`}
              >
                {/* Content Side */}
                <div className="flex-1 p-12 md:p-20 flex flex-col justify-center items-start space-y-8 z-10">
                  <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-60">
                    {project.type}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-lg">
                      {project.title}
                    </h3>
                    <p className="text-lg opacity-80 max-w-sm font-medium">
                      {project.desc}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl mt-4"
                  >
                    View Project
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>

                {/* Mockup Side */}
                <div className="flex-1 relative min-h-[400px] md:min-h-full overflow-hidden">
                  {/* Phone Frames Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center translate-x-12 md:translate-x-24">
                    <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden transform rotate-[-5deg] z-20">
                      <Image
                        src={project.images[0]}
                        alt="Mobile UI 1"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden transform translate-x-[-120px] translate-y-20 z-10 scale-95 opacity-90">
                      <Image
                        src={project.images[1]}
                        alt="Mobile UI 2"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent">
          <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-500 to-purple-600 mb-16 tracking-tighter uppercase font-[family-name:var(--font-playfair)] tracking-[0.2em]">TECHNICAL ARSENAL</h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
            {['React', 'Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Python', 'Figma', 'GraphQL'].map((skill) => (
              <div key={skill} className="flex flex-col items-center gap-6 group">
                <div className="w-28 h-28 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white group-hover:rotate-[360deg] group-hover:scale-125 shadow-lg group-hover:shadow-[0_0_40px_rgba(79,70,229,0.3)]">
                  <span className="text-xs font-black uppercase tracking-widest">{skill}</span>
                </div>
                <span className="text-sm font-bold text-[var(--foreground)]/40 group-hover:text-[var(--foreground)] transition-all duration-500 group-hover:translate-y-2 uppercase tracking-tighter opacity-0 group-hover:opacity-100">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer/Contact Info / Connect Page */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent">
          <div className="max-w-4xl w-full text-center space-y-12">
            <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 tracking-tighter uppercase font-[family-name:var(--font-playfair)]">
              Let's <br />
              Connect
            </h2>

            <p className="text-lg md:text-xl text-[var(--foreground)]/80 max-w-2xl mx-auto leading-relaxed font-semibold">
              {"My universe is always expanding, and I'm constantly looking for new stars to collaborate with. Whether you have a project in mind or just want to say hello, my signal is always on.".split(" ").map((word, i) => (
                <span key={i} className="hover-word">{word}{" "}</span>
              ))}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-6">
                <a
                  href="mailto:aastha0328kumari@gmail.com"
                  className="group relative inline-block px-12 py-4 rounded-full bg-[var(--button-bg)] text-[var(--button-text)] font-black text-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--button-gradient-from)] to-[var(--button-gradient-to)] border-[var(--card-border)] shadow-lg shadow-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="mailto:aastha0328kumari@gmail.com"
                  className="w-16 h-16 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)]/60 hover:text-[var(--foreground)] hover:bg-indigo-100 transition-all duration-300 hover:scale-110 active:scale-95"
                  title="Email Me"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>

              <div className="flex items-center gap-6 px-8 py-4 bg-[var(--card-bg)] rounded-full border border-[var(--card-border)] shadow-sm backdrop-blur-xl">
                <a href="https://github.com/aasthakumari03" target="_blank" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/aastha-kumari-2116a837a" target="_blank" className="text-[var(--foreground)]/60 hover:text-blue-600 transition-colors"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com/the_nytheris/" target="_blank" className="text-[var(--foreground)]/60 hover:text-pink-600 transition-colors"><FaInstagram size={24} /></a>
              </div>
            </div>

            <TerminalDisplay isVisible={showTerminal} onClose={() => setShowTerminal(false)} />
          </div>

          {/* Copyright Line at the absolute bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/20 uppercase w-full text-center">
            All Rights Reserved | AASTHA KUMARI | 2025
          </div>

          {/* Lower bottom trigger - positioned relative to section bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <button
              onClick={() => setShowTerminal(true)}
              className="group flex flex-col items-center gap-3 cursor-none"
            >
              <div className="w-4 h-4 rounded-full border border-[var(--section-divider)] bg-[var(--card-bg)] animate-pulse group-hover:bg-indigo-600 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(79,70,229,0.2)]" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-[var(--foreground)]/30 group-hover:text-[var(--foreground)] uppercase transition-colors">Click here</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
