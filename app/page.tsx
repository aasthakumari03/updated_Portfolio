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
    </div>
  );
}
