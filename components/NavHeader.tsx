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
        <nav className="fixed top-8 left-[calc(50%+160px)] -translate-x-1/2 z-[100] w-full max-w-2xl px-4">
            <div className="flex items-center justify-between px-6 py-3 bg-[#0a192f]/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
                {/* Logo */}
                <div className="flex items-center gap-1.5 group cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}>
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        A
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight relative overflow-hidden">
                        astha
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-8">
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-sm font-bold text-white/70 hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavHeader;
