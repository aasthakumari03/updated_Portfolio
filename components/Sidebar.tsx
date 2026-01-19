"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaUser, FaCheckCircle, FaProjectDiagram, FaCode, FaHeadset, FaBriefcase } from "react-icons/fa";

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { label: "Profile", href: "#home", id: "home", icon: FaUser },
        { label: "About", href: "#about", id: "about", icon: FaCheckCircle },
        { label: "Projects", href: "#projects", id: "projects", icon: FaProjectDiagram },
        { label: "Skills", href: "#skills", id: "skills", icon: FaCode },
        { label: "Connect", href: "#connect", id: "connect", icon: FaHeadset },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
        window.history.pushState(null, '', href);
    };

    return (
        <aside className="group fixed left-0 top-0 h-screen w-20 hover:w-72 bg-black/20 hover:bg-black/60 backdrop-blur-xl border-r border-white/5 flex flex-col p-4 hover:p-8 z-50 overflow-hidden transition-all duration-700 ease-in-out opacity-40 hover:opacity-100">
            {/* Header Info */}
            <div className="space-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-nowrap overflow-hidden">
                <div className="space-y-1 text-center">
                    <h1 className="text-xl font-bold text-white tracking-tight">AASTHA KUMARI</h1>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] pb-1">Aspiring Developer</p>
                    <div className="flex items-center justify-center gap-2 text-white/50 text-[10px] font-medium">
                        <span>@aastha</span>
                        <span>-</span>
                        <span className="flex items-center gap-1">📍 India</span>
                    </div>
                </div>

                <div className="pt-2 text-center">
                    <div className="flex justify-center">
                        <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-teal-400">
                            <FaBriefcase size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 space-y-3 flex-grow overflow-hidden">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white text-black shadow-2xl shadow-white/10' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        >
                            <item.icon className={`shrink-0 ${isActive ? 'text-black/60' : 'text-white/20'}`} size={20} />
                            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">{item.label}</span>
                        </a>
                    );
                })}
            </div>

            {/* Footer / Bookmark */}
            <div className="pt-8 mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <button className="w-full h-12 flex items-center justify-center gap-3 px-6 border border-white/10 rounded-full text-white/70 font-bold hover:bg-white/5 transition-all text-sm whitespace-nowrap">
                    <FaBookmark size={14} className="text-white/30" />
                    <span>Bookmark</span>
                </button>
            </div>
        </aside>
    );
    );
};

export default Sidebar;
