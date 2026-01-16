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
        <nav className="fixed top-12 left-[calc(50%+160px)] -translate-x-1/2 z-[100] w-full max-w-2xl px-8">
            <div className="flex items-center justify-between px-10 py-5 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl shadow-black/50">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', '#home');
                }}>
                    <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12 duration-500">
                        A
                    </div>
                    <span className="text-white font-bold text-2xl tracking-tighter relative overflow-hidden hidden sm:block">
                        astha
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-10">
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="text-sm font-bold text-white/40 hover:text-white transition-all duration-500 uppercase tracking-widest"
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
