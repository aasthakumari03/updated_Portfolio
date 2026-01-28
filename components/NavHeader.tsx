"use client";

import React from "react";
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from "react-icons/fa";
import Magnetic from "./Magnetic";
import { usePathname } from "next/navigation";

const NavHeader = () => {
    const items = [
        { label: "About", href: "/about", icon: FaUser },
        { label: "Works", href: "#projects", icon: FaBriefcase },
        { label: "Connect", href: "#connect", icon: FaEnvelope },
        { label: "Resume", href: "/resume.pdf", icon: FaFileAlt },
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
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            if (pathname !== '/') {
                setScrollProgress(1);
                return;
            }

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
    }, [pathname]);

    return (
        <div
            className="fixed top-0 left-0 w-full z-[100] flex items-center justify-center transition-all duration-300 pointer-events-none"
            style={{ paddingTop: scrollProgress > 0.1 ? '1rem' : '2rem' }}
        >
            {/* Logo */}
            <div
                className="flex items-center gap-3 cursor-pointer group transition-all duration-75 ease-linear pointer-events-auto ml-8"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}
            >
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all group-hover:rotate-12 duration-500 shrink-0 shadow-lg shadow-teal-500/20">
                    AK
                </div>
                <div className="logo-typing-text overflow-hidden whitespace-nowrap">
                    <span className="text-white font-bold text-lg tracking-tighter uppercase drop-shadow-md ml-3">
                        Aastha Kumari
                    </span>
                </div>
            </div>

            {/* Dynamic Spacer */}
            <div
                style={{
                    // When scroll is 0, we want a large gap (e.g. 60vw or bounded max)
                    // When scroll is 1, we want a small gap (e.g. 1rem / 16px)
                    width: `calc(max(12px, 80vw * (1 - ${scrollProgress})))`,
                    transition: 'width 0.1s linear'
                }}
            />

            {/* Navigation Links */}
            <nav className="transition-all duration-75 ease-linear pointer-events-auto">
                <div
                    className="flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-xl"
                    style={{
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
                                className="group flex items-center gap-2 text-sm font-bold font-[family-name:var(--font-plus-jakarta-sans)] text-teal-50/90 hover:text-white transition-all duration-500 ease-out uppercase tracking-widest hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
                            >
                                <item.icon className="text-teal-400/70 group-hover:text-teal-300 transition-colors duration-300" size={14} />
                                {item.label}
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;
