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
        <nav className="fixed top-12 left-[calc(50%+160px)] -translate-x-1/2 z-[100] w-full max-w-xl px-8">
            <div className="flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-2xl shadow-black/50">
                {/* Logo */}
                <div className="flex items-center gap-0 group cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}>
                    <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all group-hover:rotate-12 duration-500 z-10">
                        AK
                    </div>
                    <div className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-in-out">
                        <span className="text-white font-bold text-lg tracking-tighter whitespace-nowrap pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            Aastha Kumari
                        </span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-10">
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-xs font-bold text-white/40 hover:text-white transition-all duration-500 uppercase tracking-widest"
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
