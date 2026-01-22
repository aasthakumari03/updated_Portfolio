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

    return (
        <>
            {/* Logo - Positioned independently at top-left */}
            <div
                className="fixed top-12 left-8 z-[100] flex items-center gap-3 cursor-pointer group"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}
            >
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all group-hover:rotate-12 duration-500 z-10 shrink-0 shadow-lg shadow-teal-500/20">
                    AK
                </div>
                <div className="logo-typing-text overflow-hidden whitespace-nowrap">
                    <span className="text-white font-bold text-lg tracking-tighter uppercase drop-shadow-md">
                        Aastha Kumari
                    </span>
                </div>
            </div>

            {/* Navigation Links - Centered floating pill */}
            <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-[100]">
                <div className="flex items-center gap-10 px-10 py-4 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl shadow-black/50">
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
