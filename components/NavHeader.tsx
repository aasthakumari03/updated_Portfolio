"use client";

import React from "react";
import Magnetic from "./Magnetic";

const NavHeader = () => {
    const items = [
        { label: "About", href: "#about" },
        { label: "Works", href: "#projects" },
        { label: "Connect", href: "#connect" },
        { label: "Resume", href: "/resume.pdf" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
    };

    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            // Animate over the first 100vh of scroll. 
            // Clamp between 0 (top) and 1 (scrolled past 100vh)
            const progress = Math.min(Math.max(scrollY / viewportHeight, 0), 1);
            setScrollProgress(progress);
        };

        // Initial call
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Logo - Positioned independently at top-left, moves to center on scroll */}
            <div
                className="fixed top-12 left-8 z-[100] flex items-center gap-3 cursor-pointer group transition-all duration-75 ease-linear"
                style={{
                    // Interpolate left position from 2rem (32px) to roughly calc(50% - 15rem)
                    // We use CSS calc with the progress variable for smooth updates
                    left: `calc(2rem * (1 - ${scrollProgress}) + (50% - 15rem) * ${scrollProgress})`,
                    // Optional: Fade out text slightly or scale down if needed? 
                    // Keeping it simple as requested: "come closer to combine"
                }}
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}
            >
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all group-hover:rotate-12 duration-500 z-10 shrink-0 shadow-lg shadow-teal-500/20">
                    AK
                </div>
                <div
                    className="logo-typing-text overflow-hidden whitespace-nowrap transition-all duration-300"
                    style={{
                        opacity: 1 - scrollProgress * 0.5, // Fade text slightly when merged? Or keep visible? User said "combine", implies full visibility.
                        maxWidth: scrollProgress > 0.8 ? '0px' : '200px', // Hiding text at full merge to simulate "Logo Icon + Nav"? 
                        // Actually user said "Aastha Kumari, AK logo... should be in the left side... alone it".
                        // Then "combine". 
                        // If I hide the text, it becomes just "AK" combining with Nav. This might be cleaner.
                        // Let's try hiding text as it merges.
                    }}
                >
                    <span className="text-white font-bold text-lg tracking-tighter uppercase drop-shadow-md ml-3">
                        Aastha Kumari
                    </span>
                </div>
            </div>

            {/* Navigation Links - Centered floating pill */}
            <nav
                className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] transition-all duration-75 ease-linear"
                style={{
                    // Shift slightly right to make room for the incoming logo icon?
                    // target shift: maybe 2rem to right?
                    transform: `translateX(calc(-50% + (2rem * ${scrollProgress})))`,
                }}
            >
                <div className="flex items-center gap-10 px-10 py-4 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl shadow-black/50 transition-all duration-300">
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-xs font-bold text-white/60 hover:text-white transition-all duration-300 uppercase tracking-widest hover:scale-105"
                            >
                                {item.label}
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default NavHeader;
