"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import TerminalDisplay from "@/components/TerminalDisplay";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDesktop } from "react-icons/fa";

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

      {/* Navigation / Logo */}
      <div className={`fixed top-8 left-8 z-50 flex items-center gap-6 transition-all duration-700 ${isScrolled || loadingPhase !== 'done' ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <Logo className="w-10 h-10 text-indigo-950" />

        {/* Social Icons */}
        <div className="flex items-center gap-4 pl-4 border-l border-indigo-200">
          <a
            href="https://github.com/aasthakumari03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aastha-kumari-2116a837a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)]/70 hover:text-blue-600 transition-colors duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/the_nytheris/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors duration-300 hover:scale-110"
          >
            <div className="relative overflow-hidden rounded-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]">
              <FaInstagram size={20} />
            </div>
          </a>
        </div>
      </div>

      <div className={`fixed top-8 right-8 z-50 transition-all duration-700 ${isScrolled || loadingPhase !== 'done' ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className={`relative z-20 transition-all duration-1000 ${loadingPhase === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 overflow-hidden'}`}>
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center select-none">
          <div className="max-w-5xl space-y-12">
            {/* Eyebrow Text */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-8xl md:text-[10rem] font-black tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-pulse-slow text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-blue-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                Aastha Kumari
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in opacity-0 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 drop-shadow-sm" style={{ animationDelay: '0.4s' }}>
              CRAFTING MY <br />
              UNIVERSE
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/80 sm:text-xl font-light tracking-wide animate-fade-in opacity-0 leading-relaxed drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
              {"Explore a galaxy of art and code. Where every project is a star in my creative sky.".split(" ").map((word, i) => (
                <span key={i} className="hover-word">{word}{" "}</span>
              ))}
            </p>

            <div className="flex justify-center pt-8 -translate-x-10">
              <ResumeCard />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent">
          <div className="max-w-6xl text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 tracking-tighter uppercase font-[family-name:var(--font-playfair)]">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-[var(--foreground)]/80 font-semibold leading-relaxed max-w-3xl mx-auto">
              {"First-year AI & ML student passionate about coding and debugging. Whether it’s code or real life, I believe most problems just need patience and logic.".split(" ").map((word, i) => (
                <span key={i} className="hover-word">{word}{" "}</span>
              ))}
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent mt-20">
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tighter uppercase font-[family-name:var(--font-playfair)] mb-4">
              Featured <br />
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="relative w-full py-10 overflow-x-auto custom-scrollbar">
            <div className="flex flex-nowrap justify-start md:justify-center gap-6 max-w-7xl mx-auto px-10 pb-10">
              {[
                {
                  id: 1,
                  title: "Portfolio Website",
                  desc: "A sleek, responsive portfolio featuring custom animations and a modern galaxy theme.",
                  link: "https://github.com/aasthakumari03/updated_Portfolio"
                },
                {
                  id: 2,
                  title: "Fit-Tracker",
                  desc: "A comprehensive fitness tracking application with workout logs and progress analytics.",
                  link: "https://github.com/aasthakumari03/fitlife-tracker"
                },
                {
                  id: 3,
                  title: "Coming Soon",
                  desc: "A new celestial project is being crafted in my creative workshop. Stay tuned.",
                  link: "#"
                },
                {
                  id: 4,
                  title: "Coming Soon",
                  desc: "Another star is about to be born in this galaxy of code and art.",
                  link: "#"
                }
              ].map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-72 h-72 overflow-visible transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105 hover:-translate-y-6 flex-shrink-0 block"
                >
                  {/* Star Border Overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-500"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
                      fill="none"
                      className="stroke-indigo-900/10 group-hover:stroke-indigo-500 transition-all duration-500"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <div
                    className="absolute inset-0 bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-sm transition-all duration-500 group-hover:from-indigo-500/90 group-hover:to-purple-500/90 group-hover:drop-shadow-[0_0_30px_rgba(129,140,248,0.4)]"
                    style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
                  >
                    {/* Background Text Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-white/40 to-slate-100/40 flex items-center justify-center text-indigo-900/20 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110 p-12 text-center">
                      <span className={`text-xl font-bold transition-colors duration-500 uppercase tracking-tighter text-transparent bg-clip-text ${project.id === 1 ? 'bg-gradient-to-r from-blue-600 to-cyan-500' :
                        project.id === 2 ? 'bg-gradient-to-r from-emerald-600 to-teal-500' :
                          project.id === 3 ? 'bg-gradient-to-r from-purple-600 to-pink-500' :
                            'bg-gradient-to-r from-rose-600 to-orange-500'
                        }`}>
                        {project.title}
                      </span>
                    </div>

                    {/* Firecracker Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(32)].map((_, i) => (
                        <div
                          key={i}
                          className="firecracker-particle"
                          style={{
                            '--tw-translate-x': `${Math.cos((i * 11.25) * Math.PI / 180) * (150 + Math.random() * 100)}px`,
                            '--tw-translate-y': `${Math.sin((i * 11.25) * Math.PI / 180) * (150 + Math.random() * 100)}px`,
                            backgroundColor: ['#ff0055', '#ffea00', '#00ff88', '#00ccff', '#ff8800', '#cc00ff', '#ffffff'][i % 7],
                            animationDelay: `${Math.random() * 0.2}s`
                          } as any}
                        />
                      ))}
                    </div>

                    {/* Project Details (Delayed Animation) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-indigo-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[500ms]">
                      <h3 className="text-lg font-bold text-indigo-100 mb-2 leading-tight">{project.title}</h3>
                      <p className="text-indigo-200 text-[10px] leading-tight mb-4">{project.desc}</p>
                      <div className="bg-white text-indigo-900 px-5 py-1.5 rounded-full text-[10px] font-bold shadow-2xl">
                        View Project
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-transparent">
          <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 mb-16 tracking-tighter uppercase font-[family-name:var(--font-playfair)] tracking-[0.2em]">TECHNICAL ARSENAL</h2>
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

            <p className="text-xl md:text-2xl text-[var(--foreground)]/80 max-w-2xl mx-auto leading-relaxed font-semibold">
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
