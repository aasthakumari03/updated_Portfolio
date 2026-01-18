"use client";
import NavHeader from "@/components/NavHeader";
import Image from "next/image";
import Marquee from "@/components/Marquee";


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
            <a href="#connect" className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-teal-400 hover:text-black transition-all duration-500 flex items-center gap-2 shadow-xl shadow-white/5 hover:scale-105 active:scale-95">
              👋 Let's talk
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
          <p className="text-xl text-white/40 leading-relaxed">
            A showcase of my projects where I merge my technical skills in <span className="text-teal-400">AI & ML</span> with refined UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group glass-card p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-teal-500/20 transition-all duration-1000 space-y-8 cursor-default translate-y-0 hover:-translate-y-4 shadow-2xl hover:shadow-teal-500/5">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl font-serif tracking-tight group-hover:text-teal-400 transition-colors duration-700">
                    {project.title}
                  </h3>
                  <div className="flex gap-6">
                    <FaGithub className="text-white/20 hover:text-white cursor-pointer transition-colors duration-500" size={24} />
                    <FaExternalLinkAlt className="text-white/20 hover:text-white cursor-pointer transition-colors duration-500" size={20} />
                  </div>
                </div>
                <p className="text-white/40 text-lg leading-relaxed font-medium line-clamp-3 group-hover:text-white/60 transition-colors duration-700">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/30 uppercase tracking-[0.2em] group-hover:border-teal-500/20 group-hover:text-teal-400/60 transition-all duration-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-teal-500/30 uppercase tracking-[0.3em] group-hover:text-teal-400 transition-colors duration-700">Featured Project</span>
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 group-hover:scale-110">
                  <FaArrowRight className="-rotate-45" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Skills */}
      <section id="skills" className="py-64 px-12 max-w-7xl mx-auto space-y-32 min-h-screen flex flex-col justify-center">
        <div className="space-y-8 max-w-3xl">
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white">Skills & Tools</h2>
          <p className="text-2xl text-white/40 font-serif italic border-l-4 border-teal-500/50 pl-12 leading-snug">
            Blending the logic of computer science with the emotional resonance of <span className="text-white">high-end design.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-left">
          {skills.map((category, i) => (
            <div key={i} className="space-y-12 group">
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-[0.4em] flex items-center gap-6">
                <span className="w-16 h-[2px] bg-teal-400/50"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {category.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white/[0.01] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-700 cursor-default group/tool">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover/tool:text-teal-400 transition-colors duration-500 group-hover/tool:scale-110">
                      <tool.icon size={24} />
                    </div>
                    <span className="text-lg font-bold text-white/40 group-hover/tool:text-white transition-colors duration-500 tracking-tight">{tool.name}</span>
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
                <label className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] pl-6 italic">Full Name</label>
                <input type="text" placeholder="Jan Doe" className="w-full px-8 py-5 bg-white/[0.01] border border-white/5 rounded-[2rem] outline-none focus:border-teal-500/30 transition-all duration-700 text-lg font-medium placeholder:text-white/10" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] pl-6 italic">Email Address</label>
                <input type="email" placeholder="jan@example.com" className="w-full px-8 py-5 bg-white/[0.01] border border-white/5 rounded-[2rem] outline-none focus:border-teal-500/30 transition-all duration-700 text-lg font-medium placeholder:text-white/10" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] pl-6 italic">Message</label>
                <textarea rows={6} placeholder="Tell me about your project..." className="w-full px-8 py-5 bg-white/[0.01] border border-white/5 rounded-[2rem] outline-none focus:border-teal-500/30 transition-all duration-700 text-lg font-medium resize-none placeholder:text-white/10" />
              </div>
            </div>
            <button className="w-full py-6 bg-white text-black rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-teal-400 transition-all duration-500 active:scale-[0.98] shadow-2xl shadow-white/5">
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
        <div className="px-4 py-2 bg-white text-black text-[10px] font-bold rounded-lg shadow-xl uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
          Made with ❤️ By Aastha
        </div>
      </div>
    </div>
  );
}
