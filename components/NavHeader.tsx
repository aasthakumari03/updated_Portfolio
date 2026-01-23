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
                    // Interpolate left position
                    // Start: 2rem (32px)
                    // End: Center - Offset. (50% - ~18rem) to fit with larger pill
                    left: `calc(2rem * (1 - ${scrollProgress}) + (50% - 18rem) * ${scrollProgress})`,
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
                        opacity: 1 - scrollProgress * 0.5,
                        maxWidth: scrollProgress > 0.8 ? '0px' : '200px',
                    }}
                >
                    <span className="text-white font-bold text-lg tracking-tighter uppercase drop-shadow-md ml-3">
                        Aastha Kumari
                    </span>
                </div>
            </div>

            {/* Navigation Links - Top-Right initially, moves to Center-Right on scroll */}
            <nav
                className="fixed top-12 z-[100] transition-all duration-75 ease-linear"
                style={{
                    // Position logic:
                    // Start (p=0): Right aligned (right: 2rem), Centered vertically (top-12)
                    // End (p=1): Centered horizontally.
                    // Implementation:
                    // We use `left: 50%` as the base for the centered state.
                    // We use `transform` to shift it.
                    // But transitioning from `right` to `left` is hard.
                    // Let's stick to `right`.
                    // Start: right: 2rem.
                    // End: right: 50% (minus half width).
                    // Actually, easiest way to Center from Right using only `right`:
                    // right: 50%, transform: translateX(50%).
                    // So:
                    // right: calc(2rem * (1 - p) + 50% * p)
                    // transform: translateX(calc(50% * p))
                    right: `calc(2rem * (1 - ${scrollProgress}) + 50% * ${scrollProgress})`,
                    transform: `translateX(calc(50% * ${scrollProgress}))`,
                }}
            >
                <div
                    className="flex items-center gap-10 px-12 py-5 rounded-full transition-all duration-300 backdrop-blur-xl"
                    style={{
                        // Theme Styling: Teal/Dark Glow
                        backgroundColor: 'rgba(5, 10, 10, 0.6)',
                        borderColor: 'rgba(45, 212, 191, 0.2)',
                        borderWidth: '1px',
                        boxShadow: '0 0 30px -10px rgba(45, 212, 191, 0.15), 0 10px 30px -10px rgba(0,0,0,0.5)',
                    }}
                >
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-sm font-bold font-[family-name:var(--font-plus-jakarta-sans)] text-teal-50/90 hover:text-white transition-all duration-500 ease-out uppercase tracking-widest hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
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
