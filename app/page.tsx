import Image from "next/image";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import CloudFog from "@/components/CloudFog";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-400 to-sky-200 text-slate-800 selection:bg-white selection:text-sky-600">
      {/* Navigation / Logo */}
      <div className="absolute top-8 left-8 z-30 flex items-center gap-6">
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
            {/* Instagram Gradient Hover Effect via background clip or just color change. 
                    Simple color change to a 'pink' is easier, but gradienttext is requested?
                    "original logo... should shine when hovered" - Logo should shine.
                    "create the original logo of ... beside 'AK' logo"
                    I'll stick to a nice hover color or gradient. Instagram is gradient.
                    I can use a wrapper or just a simplistic hover color like pink for now to match 'original' vibe which usually means the colorful icon.
                */}
            <div className="relative overflow-hidden rounded-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888]">
              <FaInstagram size={20} />
            </div>
          </a>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-30">
        <Navbar />
      </div>

      {/* Cloud Fog Animation */}
      <CloudFog />

      {/* Main Content */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center select-none">
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
      </main>

    </div>
  );
}
