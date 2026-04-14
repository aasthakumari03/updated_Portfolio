"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const WovenLightHero = dynamic(() => import("@/components/ui/woven-light-hero").then(mod => mod.WovenLightHero), { ssr: false });
const HeroSection = () => {
    return (
        <section id="home" className="relative">
            <WovenLightHero />
        </section>
    );
};

export default HeroSection;
