"use client";
import NavHeader from "@/components/NavHeader";
import Image from "next/image";
import Marquee from "@/components/Marquee";
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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12">


          {/* Main Heading */}
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-gothic leading-none tracking-tight animate-fade-in [animation-delay:100ms] text-white whitespace-nowrap relative z-10">
              <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent hover:brightness-125 transition-all duration-700">
                Aastha Kumari
              </span>
            </h1>
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>
          </div>

          {/* Professional Title Shining Card */}
          <div className="animate-fade-in [animation-delay:300ms] flex justify-center pt-4">
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

        {/* Social Proof Marquee */}
        <div className="mt-48 w-full max-w-6xl animate-fade-in [animation-delay:800ms] opacity-60 hover:opacity-100 transition-opacity duration-1000">
          <Marquee speed={40}>
            {companies.map((company, i) => (
              <div key={i} className="flex items-center gap-3 mx-6 grayscale hover:grayscale-0 transition-all duration-700 cursor-default group">
                <company.icon size={24} className="text-white/30 group-hover:text-teal-400 transition-colors" />
                <span className="text-xl font-bold tracking-tighter whitespace-nowrap text-white/20 group-hover:text-white transition-colors">{company.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Section 2: About Me */}
      <section id="about" className="py-64 px-12 max-w-5xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
        <div className="space-y-10">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white">About Me</h2>
          <p className="text-2xl md:text-4xl text-white/70 leading-tight font-serif italic border-l-4 border-teal-500/50 pl-12">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="prose prose-invert prose-2xl max-w-none space-y-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-teal-400 tracking-tight">My Journey</h3>
            <p className="text-white/50 leading-relaxed text-xl font-medium">
              As a first-year Computer Science student specializing in <span className="text-white">Artificial Intelligence</span> and <span className="text-white">Machine Learning</span>, I find myself at the exciting intersection of logic and creativity.
            </p>
            <p className="text-white/50 leading-relaxed text-xl font-medium">
              I am dedicated to mastering the art of building intelligent systems while ensuring they remain deeply human-centric.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-y border-white/5">
            <div className="space-y-6">
              <h4 className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">Philosophy</h4>
              <p className="text-white/40 text-lg leading-relaxed">
                I believe in the power of simplicity. Every element in a digital experience should serve a clear purpose and evoke a sense of calm.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs">Ambition</h4>
              <p className="text-white/40 text-lg leading-relaxed">
                I aim to leverage AI to create adaptive interfaces that learn from users, creating more personal and intuitive digital worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects */}
      <section id="projects" className="py-64 px-12 max-w-7xl mx-auto space-y-24 min-h-screen flex flex-col justify-center">
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white">Technical Arsenal</h2>
          <p className="text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
            A showcase of my projects where I merge my technical skills in <span className="text-teal-400">AI & ML</span> with refined UI/UX design.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <ProjectCard
            title="Celestial Portfolio"
            category="Creative Dev"
            year="2024"
            tags={["Next.js", "Framer Motion", "Tailwind CSS"]}
            features={[
              "Modern universe-themed aesthetic",
              "Smooth GSAP & Lenis scrolling",
              "Interactive spotlight components"
            ]}
            image="#"
            mockupType="desktop"
          />
          <ProjectCard
            title="Fitlife Tracker"
            category="Health & Fitness"
            year="2025"
            tags={["React", "Firebase", "Chart.js"]}
            features={[
              "AI-driven workout recommendations",
              "Real-time nutritional tracking",
              "Interactive progress analytics"
            ]}
            image="#"
            mockupType="mobile"
            reversed
          />
          <ProjectCard
            title="Next Big Idea"
            category="Coming Soon"
            year="2026"
            tags={["Innovation", "AI", "Design"]}
            features={[
              "Exploring new frontiers in AI",
              "Minimalist design philosophy",
              "Launching very soon"
            ]}
            image="#"
            mockupType="desktop"
          />
        </div>
      </section>

      {/* Section 4: Skills */}
      <section id="skills" className="py-64 px-12 max-w-7xl mx-auto space-y-32 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white">Skills & Tools</h2>
            <p className="text-xl text-white/40 leading-relaxed border-l-4 border-teal-500/50 pl-12">
              Building at the intersection of <span className="text-white">Intelligent Systems</span> and <span className="text-white">Human-Centric Design</span>. My toolkit is constantly evolving.
            </p>
          </div>
          <div className="animate-pulse-slow">
            <div className="w-24 h-24 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center backdrop-blur-3xl">
              <SiTensorflow size={40} className="text-teal-400/50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, i) => (
            <div key={i} className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:border-teal-400/20 transition-all duration-700 hover:-translate-y-2">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-teal-400/30"></span>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover/item:text-teal-400 group-hover/item:bg-teal-400/10 transition-all duration-500">
                      <tool.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-white/40 group-hover/item:text-white transition-colors duration-500 uppercase tracking-wider">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Connect */}
      <section id="connect" className="py-64 px-12 max-w-6xl mx-auto space-y-32 min-h-screen flex flex-col justify-center">
        <div className="space-y-10 text-center max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white">Let's Connect</h2>
          <p className="text-2xl text-white/40 font-medium leading-tight">
            Have a project in mind? Or just want to say hi? My inbox is <span className="text-teal-400 italic">always open.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] pl-6">Full Name</label>
                <input type="text" placeholder="Jan Doe" className="w-full px-8 py-5 bg-white/[0.02] border border-white/5 rounded-[2rem] outline-none focus:border-teal-400/30 focus:bg-white/[0.04] transition-all duration-700 text-lg font-medium placeholder:text-white/10" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] pl-6">Email Address</label>
                <input type="email" placeholder="jan@example.com" className="w-full px-8 py-5 bg-white/[0.02] border border-white/5 rounded-[2rem] outline-none focus:border-teal-400/30 focus:bg-white/[0.04] transition-all duration-700 text-lg font-medium placeholder:text-white/10" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] pl-6">Message</label>
                <textarea rows={6} placeholder="Tell me about your project..." className="w-full px-8 py-5 bg-white/[0.02] border border-white/5 rounded-[2rem] outline-none focus:border-teal-400/30 focus:bg-white/[0.04] transition-all duration-700 text-lg font-medium resize-none placeholder:text-white/10" />
              </div>
            </div>
            <button className="w-full py-6 bg-white text-black rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-teal-400 transition-all duration-500 active:scale-[0.98] shadow-2xl shadow-teal-500/10">
              Send Message <FaPaperPlane size={22} />
            </button>
          </div>

          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-[0.4em] italic pl-2">Social Channels</h3>
              <div className="grid grid-cols-1 gap-6 text-left">
                {[
                  { name: "LinkedIn", icon: FaLinkedin, link: "#" },
                  { name: "GitHub", icon: FaGithub, link: "#" },
                  { name: "Twitter", icon: FaTwitter, link: "#" },
                  { name: "Instagram", icon: FaInstagram, link: "#" },
                  { name: "Email", icon: FaEnvelope, link: "mailto:aastha0328kumari@gmail.com" },
                ].map((social, i) => (
                  <a key={i} href={social.link} className="flex items-center justify-between p-6 bg-white/[0.01] border border-white/5 rounded-[2rem] transition-all duration-700 hover:bg-white/[0.04] group hover:border-teal-500/20">
                    <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-teal-400 transition-colors duration-500 group-hover:scale-110">
                        <social.icon size={22} />
                      </div>
                      <span className="text-xl font-bold tracking-tighter text-white/40 group-hover:text-white transition-colors duration-500">{social.name}</span>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110">
                      <FaArrowRight className="-rotate-45" size={20} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
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
