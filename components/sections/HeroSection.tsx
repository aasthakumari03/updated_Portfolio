"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const WovenLightHero = dynamic(() => import("@/components/ui/woven-light-hero").then(mod => mod.WovenLightHero), { ssr: false });
import PerformanceBackground from "@/components/ui/PerformanceBackground";

const HeroSection = () => {
    return (
        <section id="home" className="relative">
            <PerformanceBackground density={30} />
            <WovenLightHero />
        </section>
    );
};

export default HeroSection;
