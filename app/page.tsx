"use client";
 
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SocialsSection from "@/components/sections/SocialsSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SocialsSection />
      <ConnectSection />
      
      {/* Footer Line */}
      <footer className="py-12 border-t border-white/5 mx-auto w-full max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-medium text-center">
              ALL RIGHTS RESERVED | 2025 | AASTHA KUMARI
          </p>
      </footer>
    </div>
  );
}
