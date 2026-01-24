"use client";

import React from "react";
import { FaHome, FaUser, FaFolderOpen, FaListUl, FaEnvelope } from "react-icons/fa";
import Magnetic from "./Magnetic";

const Dock = () => {
    const items = [
        { icon: FaHome, label: "Home", href: "#home" },
        { icon: FaUser, label: "About", href: "/about" },
        { icon: FaFolderOpen, label: "Portfolio", href: "#projects" },
        { icon: FaEnvelope, label: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {items.map((item, idx) => (
                    <Magnetic key={idx} strength={0.2}>
                        <a
                            href={item.href}
                            className="group relative p-4 flex items-center justify-center transition-all duration-500 ease-out hover:scale-125"
                            title={item.label}
                        >
                            <item.icon size={24} className="text-white/70 group-hover:text-white transition-colors" />
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                                {item.label}
                            </div>
                        </a>
                    </Magnetic>
                ))}
            </div>
        </div>
    );
};

export default Dock;
