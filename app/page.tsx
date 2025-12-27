import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import CloudFog from "@/components/CloudFog";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 text-slate-800 selection:bg-white selection:text-sky-600">
      {/* Navigation / Logo */}
      <div className="fixed top-8 left-8 z-50 flex items-center gap-6">
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

      <div className="fixed top-8 right-8 z-50">
        <Navbar />
      </div>

      {/* Cloud Fog Animation */}
      <CloudFog />

      {/* Main Content */}
      <div className="relative z-20">
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
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-white/10 backdrop-blur-sm mt-20">
          <h2 className="text-5xl font-black text-white mb-16 tracking-tighter">FEATURED <span className="text-indigo-600">PROJECTS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 transition-all duration-500 hover:scale-105 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]">
                <div className="aspect-video bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center text-white/20">
                  <span className="text-4xl font-bold">Project {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Stellar Web App {i}</h3>
                  <p className="text-slate-400 text-sm">A cutting-edge solution built with Next.js and Tailwind CSS.</p>
                </div>
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-indigo-900/10 backdrop-blur-sm">
          <h2 className="text-5xl font-black text-white mb-16 tracking-tighter">TECHNICAL <span className="text-purple-600">ARSENAL</span></h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
            {['React', 'Next.js', 'Typescript', 'Tailwind', 'Node.js', 'Python', 'Figma', 'GraphQL'].map((skill) => (
              <div key={skill} className="flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:rotate-[360deg] group-hover:scale-110 shadow-lg">
                  <span className="text-xs font-bold uppercase">{skill}</span>
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer/Contact Info */}
        <section id="contact" className="py-24 px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">LET'S <span className="text-sky-600">CONNECT</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">I'm always open to new opportunities and creative collaborations. Let's build something amazing together.</p>
          <a href="mailto:hello@aastha.art" className="inline-block bg-white text-indigo-900 px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">Get In Touch</a>
        </section>
      </div>
    </div>
  );
}
