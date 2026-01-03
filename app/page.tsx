"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import WorkCard from '@/components/WorkCard';
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
              className={`absolute text-7xl md:text-9xl font-black tracking-tighter uppercase flex text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600`}
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
              className={`absolute text-7xl md:text-9xl font-black tracking-tighter uppercase transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-600 ${loadingPhase === 'namaste' ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-[3] blur-[120px]'
                }`}
            >
              Namaste
            </h1>
          </div>
        </div>
      )}

      {/* Unified Navigation Header */}
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${loadingPhase !== 'done' ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className={`mx-auto flex items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled
          ? 'max-w-fit mt-4 bg-[var(--card-bg)]/60 backdrop-blur-3xl px-8 py-3 rounded-full border border-[var(--card-border)] shadow-[0_8px_32px_rgba(79,70,229,0.1)] gap-10'
          : 'max-w-full justify-between gap-0 bg-transparent border-none shadow-none py-6 px-12 md:px-24'
          }`}>

          <div className="flex items-center gap-6">
            <Logo className="w-12 h-12 text-indigo-950" />
          </div>

          <div className="flex items-center gap-8">
            {/* Social Icons - Now on the right */}
            <div className={`flex items-center gap-6 transition-all duration-500 ${isScrolled ? 'opacity-0 w-0 -mr-6 pointer-events-none' : 'opacity-100 w-auto text-white/40'}`}>
              {[
                { icon: FaGithub, href: "https://github.com/aasthakumari03", color: "hover:text-[var(--foreground)]" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/aastha-kumari-2116a837a", color: "hover:text-blue-600" },
                {
                  icon: FaInstagram, href: "https://www.instagram.com/the_nytheris/", isInstagram: true
                }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-2 ${social.isInstagram ? 'hover:text-[var(--foreground)]' : social.color} transition-all duration-300 hover:scale-125 overflow-hidden rounded-lg`}
                >
                  {/* Shine Overlay */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10" />

                  {social.isInstagram ? (
                    <div className="relative overflow-hidden group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]">
                      <social.icon size={22} />
                    </div>
                  ) : (
                    <social.icon size={22} className="relative z-0" />
                  )}
                </a>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="flex items-center">
              <Navbar isMinimal={isScrolled} />
            </div>
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
              <span className="text-8xl md:text-[10rem] font-black tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)] animate-shimmer text-transparent bg-clip-text bg-[linear-gradient(110deg,#f8fafc,45%,#bae6fd,55%,#f8fafc)] bg-[length:200%_100%] transition-transform duration-500 cursor-default select-none inline-block -translate-y-4">
                Aastha Kumari
              </span>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <ResumeCard />
              <WorkCard />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-[120vh] flex flex-col items-center justify-center py-48 px-12 md:px-24 bg-transparent">
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 md:gap-24">
            {/* Header Side */}
            <div className="flex items-center gap-4 shrink-0 pt-2 group/header">
              <div className="w-1.5 h-6 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover/header:scale-y-150 transition-transform duration-500" />
              <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#60a5fa,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer group-hover/header:scale-110 transition-transform duration-500">
                just an intro
              </h2>
            </div>

            {/* Content Side */}
            <div className="flex-1 group/content">
              <p className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight transition-all duration-700 group-hover/content:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="text-white/40 group-hover/content:text-white/60 transition-colors duration-500">I'm a </span>
                <span className="text-white font-bold group-hover/content:text-blue-200 transition-colors duration-500">first-year AI & ML student</span>
                <span className="text-white/40 group-hover/content:text-white/60 transition-colors duration-500"> passionate about </span>
                <span className="text-white font-bold group-hover/content:text-indigo-200 transition-colors duration-500">coding and debugging</span>
                <span className="text-white/40 group-hover/content:text-white/60 transition-colors duration-500">. Whether it’s code or real life, I believe most </span>
                <span className="text-white font-bold group-hover/content:text-sky-200 transition-colors duration-500">problems just need patience and logic</span>
                <span className="text-white/40 group-hover/content:text-white/60 transition-colors duration-500">.</span>
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-32 px-6 bg-transparent">
          <div className="text-center mb-24 group/projects-header">
            <h2 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-[linear-gradient(110deg,#fb7185,45%,#3b82f6,55%,#fb7185)] bg-[length:200%_100%] animate-shimmer tracking-tighter uppercase font-mono mb-6 group-hover/projects-header:scale-105 transition-transform duration-700">
              Featured <br />
              Projects
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(244,63,94,0.3)] group-hover/projects-header:w-48 transition-all duration-700"></div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto space-y-12">
            {[
              {
                id: 1,
                title: "A celestial portfolio universe that showcases art and code through dynamic animations.",
                type: "CURRENT WORK",
                desc: "The very portfolio you are browsing, built with Next.js, Tailwind CSS, and Framer Motion.",
                link: "https://github.com/aasthakumari03/updated_Portfolio",
                color: "bg-[#DCFCE7]",
                textColor: "text-[#064E3B]",
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
                color: "bg-[#FCE7F3]",
                textColor: "text-[#500724]",
                images: [
                  "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=400&q=80",
                  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=400&q=80"
                ]
              }
            ].map((project, index) => (
              <div
                key={project.id}
                className={`group relative w-full ${project.color} ${project.textColor} rounded-[48px] overflow-hidden min-h-[400px] flex flex-col md:flex-row transition-all duration-700 hover:scale-[1.02] shadow-[0_40px_100px_rgba(0,0,0,0.2)]`}
              >
                {/* Content Side */}
                <div className="flex-1 p-10 md:p-16 flex flex-col justify-center items-start space-y-6 z-10">
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
                    <div className="relative w-[220px] h-[450px] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-800 overflow-hidden transform rotate-[-5deg] z-20">
                      <Image
                        src={project.images[0]}
                        alt="Mobile UI 1"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="relative w-[220px] h-[450px] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-800 overflow-hidden transform translate-x-[-100px] translate-y-16 z-10 scale-95 opacity-90">
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

        {/* Footer/Contact Info / Connect Page */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent">
          <div className="max-w-4xl w-full text-center space-y-12">
            <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 tracking-tighter uppercase">
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
