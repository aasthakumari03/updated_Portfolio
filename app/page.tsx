
"use client";

import GridBackground from "@/components/GridBackground";
import FogSeparator from "@/components/FogSeparator";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import ConnectSection from "@/components/sections/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="animate-fade-in flex flex-col">
      <GridBackground />
      <HeroSection />
      <FogSeparator />
      <AboutSection />
      <FogSeparator />
      <ProjectsSection />
      <UpdatesSection />
      <FogSeparator />
      <ConnectSection />
      <Footer />
    </div>
  );
}
