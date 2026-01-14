"use client";

import React from "react";
import Magnetic from "./Magnetic";

const NavHeader = () => {
    const items = [
        { label: "Work", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Resume", href: "/resume.pdf" },
    ];

    return (
        <nav className="fixed top-8 left-[calc(50%+160px)] -translate-x-1/2 z-[100] w-full max-w-2xl">
            <div className="flex items-center justify-between px-6 py-3 bg-[#0a192f]/80 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl">
                {/* Logo */}
                <div className="flex items-center gap-1.5 group cursor-pointer">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        A
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight relative overflow-hidden">
                        rnab
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-8">
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
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
