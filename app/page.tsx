"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import CloudFog from "@/components/CloudFog";
import ResumeCard from "@/components/ResumeCard";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState<'hello' | 'namaste' | 'fading' | 'done'>('hello');

  useEffect(() => {
    // Stage 1: "Hello" (2s)
    const helloTimer = setTimeout(() => {
      setLoadingPhase('namaste');
    }, 2000);

    // Stage 2: "Namaste" (2s)
    const namasteTimer = setTimeout(() => {
      setLoadingPhase('fading');
    }, 4000);

    // Stage 3: Fade out (1s)
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
    <div className="relative min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 text-slate-800 selection:bg-white selection:text-sky-600">
      {/* Welcome Sequence Screen */}
      {loadingPhase !== 'done' && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-white pointer-events-none transition-opacity duration-1000 ${loadingPhase === 'fading' ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative text-center overflow-hidden h-32 w-full max-w-2xl flex items-center justify-center">
            <h1
              className={`absolute text-7xl md:text-9xl font-black text-black tracking-tighter uppercase font-[family-name:var(--font-playfair)] transition-all duration-1000 ease-in-out ${loadingPhase === 'hello' ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-90 blur-xl'
                }`}
            >
              Hello
            </h1>
            <h1
              className={`absolute text-7xl md:text-9xl font-black text-black tracking-tighter uppercase font-[family-name:var(--font-playfair)] transition-all duration-1000 ease-in-out ${loadingPhase === 'namaste' ? 'opacity-100 scale-110 blur-0' : 'opacity-0 scale-90 blur-xl'
                }`}
            >
              Namaste
            </h1>
          </div>
        </div>
      )}

      {/* Navigation / Logo */}
      <div className={`fixed top-8 left-8 z-50 flex items-center gap-6 transition-all duration-700 ${isScrolled || loadingPhase !== 'done' ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <Logo className="w-10 h-10 text-white" />

        {/* Social Icons */}
        <div className="flex items-center gap-4 pl-4 border-l border-white/20">
          <a
            href="https://github.com/aasthakumari03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/aastha-kumari-2116a837a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-200 transition-colors duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/the_nytheris/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-white/80 hover:text-white transition-colors duration-300 hover:scale-110"
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

      {/* Cloud Fog Animation */}
      <CloudFog />

      {/* Main Content */}
      <div className={`relative z-20 transition-all duration-1000 ${loadingPhase === 'done' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 overflow-hidden'}`}>
        {/* Hero Section */}
        <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center select-none">
          <div className="max-w-5xl space-y-12">
            {/* Eyebrow Text */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <span className="text-8xl font-extrabold drop-shadow-lg font-serif" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", color: '#B36A6A' }}>
                Aastha Kumari
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in opacity-0 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
              CRAFTING MY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">
                UNIVERSE
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-700 sm:text-xl font-light tracking-wide animate-fade-in opacity-0 leading-relaxed drop-shadow-sm" style={{ animationDelay: '0.6s' }}>
              Explore a galaxy of art and code. Where every project is a <span className="text-slate-900 font-medium">star</span> in my creative sky.
            </p>

            <div className="flex justify-center pt-8">
              <ResumeCard />
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-white/10 backdrop-blur-sm mt-20">
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase font-[family-name:var(--font-playfair)] mb-4">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-pulse">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="relative w-full overflow-hidden py-10">
            <div className="animate-marquee flex gap-12">
              {[
                {
                  id: 1,
                  title: "Personal Portfolio",
                  desc: "A sleek, responsive portfolio featuring custom animations and a modern galaxy theme.",
                  link: "https://github.com/aasthakumari03/updated_Portfolio"
                },
                {
                  id: 2,
                  title: "Stellar App 2",
                  desc: "A cutting-edge solution built with Next.js and Tailwind CSS.",
                  link: "#"
                },
                {
                  id: 3,
                  title: "Stellar App 3",
                  desc: "A cutting-edge solution built with Next.js and Tailwind CSS.",
                  link: "#"
                },
                {
                  id: 4,
                  title: "Stellar App 4",
                  desc: "A cutting-edge solution built with Next.js and Tailwind CSS.",
                  link: "#"
                }
              ].map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-56 h-56 rounded-full overflow-hidden bg-black/40 border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 hover:border-indigo-500/50 hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] flex-shrink-0 block"
                >
                  {/* Background Text Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-slate-900 flex items-center justify-center text-white/20 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white/30 group-hover:text-white/50 transition-colors duration-500">Project {project.id}</span>
                  </div>

                  {/* Firecracker Particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="firecracker-particle"
                        style={{
                          '--tw-translate-x': `${Math.cos((i * 22.5) * Math.PI / 180) * 150}px`,
                          '--tw-translate-y': `${Math.sin((i * 22.5) * Math.PI / 180) * 150}px`,
                          backgroundColor: ['#ff0055', '#ffea00', '#00ff88', '#00ccff', '#ff8800', '#cc00ff'][i % 6]
                        } as any}
                      />
                    ))}
                  </div>

                  {/* Project Details (Delayed Animation) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[2500ms]">
                    <h3 className="text-lg font-bold text-indigo-300 mb-1 leading-tight">{project.title}</h3>
                    <p className="text-slate-300 text-[10px] leading-tight mb-3">{project.desc}</p>
                    <div className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold shadow-2xl">
                      View Project
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-indigo-900/10 backdrop-blur-sm">
          <h2 className="text-5xl font-black text-white mb-16 tracking-tighter uppercase font-[family-name:var(--font-playfair)] tracking-[0.2em]">TECHNICAL <span className="text-purple-600">ARSENAL</span></h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
            {['React', 'Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Python', 'Figma', 'GraphQL'].map((skill) => (
              <div key={skill} className="flex flex-col items-center gap-6 group">
                <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:rotate-[360deg] group-hover:scale-125 shadow-xl group-hover:shadow-[0_0_40px_rgba(79,70,229,0.4)]">
                  <span className="text-xs font-black uppercase tracking-widest">{skill}</span>
                </div>
                <span className="text-sm font-bold text-white/40 group-hover:text-white transition-all duration-500 group-hover:translate-y-2 uppercase tracking-tighter opacity-0 group-hover:opacity-100">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer/Contact Info / Connect Page */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-black/20 backdrop-blur-md">
          <div className="max-w-4xl w-full text-center space-y-12">
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase font-[family-name:var(--font-playfair)]">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 animate-pulse">
                Connect
              </span>
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              My universe is always expanding, and I'm constantly looking for new stars to collaborate with.
              Whether you have a project in mind or just want to say hello, my signal is always on.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-6">
                <a
                  href="mailto:aastha0328kumari@gmail.com"
                  className="group relative inline-block px-12 py-4 rounded-full bg-white text-indigo-900 font-black text-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="mailto:aastha0328kumari@gmail.com"
                  className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
                  title="Email Me"
                >
                  <FaEnvelope size={28} />
                </a>
              </div>

              <div className="flex items-center gap-6 px-8 py-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
                <a href="https://github.com/aasthakumari03" target="_blank" className="text-white/60 hover:text-white transition-colors"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/aastha-kumari-2116a837a" target="_blank" className="text-white/60 hover:text-blue-400 transition-colors"><FaLinkedin size={24} /></a>
                <a href="https://www.instagram.com/the_nytheris/" target="_blank" className="text-white/60 hover:text-pink-500 transition-colors"><FaInstagram size={24} /></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
