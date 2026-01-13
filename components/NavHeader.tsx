"use client";

import React from "react";
import Magnetic from "./Magnetic";

const NavHeader = () => {
    const items = [
        { label: "Home", href: "#home" },
        { label: "Works", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#contact" },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100]">
            <div className="flex items-center gap-1 px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                {items.map((item, idx) => (
                    <Magnetic key={idx} strength={0.1}>
                        <a
                            href={item.href}
                            className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            {item.label}
                        </a>
                    </Magnetic>
                ))}
            </div>
        </nav>
    );
};

export default NavHeader;
