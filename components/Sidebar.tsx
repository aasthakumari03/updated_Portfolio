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
        <aside className="w-80 h-screen fixed left-0 top-0 bg-black/40 backdrop-blur-3xl border-r border-white/5 flex flex-col p-8 z-50 overflow-y-auto">
            {/* Header Info */}
            <div className="space-y-6">

                <div className="space-y-1 text-center">
                    <h1 className="text-2xl font-bold text-white tracking-tight">Aastha Kumari</h1>
                    <div className="flex items-center justify-center gap-2 text-white/50 text-xs font-medium">
                        <span>@aastha</span>
                        <span>-</span>
                        <span className="flex items-center gap-1">📍 India</span>
                    </div>
                    <p className="text-teal-400/80 font-semibold text-xs pt-1 uppercase tracking-tight">CSE 1st Year (AI & ML)</p>
                </div>

                <div className="pt-4 text-center">
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest leading-relaxed">
                        1 Year Experience Includes:
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-teal-400 shadow-sm">
                            <FaBriefcase size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 space-y-3 flex-grow">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                            className={`w-full flex items-center gap-4 px-6 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white text-black shadow-2xl shadow-white/10' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        >
                            <item.icon className={isActive ? 'text-black/60' : 'text-white/20'} size={18} />
                            <span className="text-sm">{item.label}</span>
                        </a>
                    );
                })}
            </div>

            {/* Footer / Bookmark */}
            <div className="pt-8 mt-auto">
                <button className="w-full h-12 flex items-center justify-center gap-3 px-6 border border-white/10 rounded-full text-white/70 font-bold hover:bg-white/5 transition-all shadow-sm text-sm">
                    <FaBookmark size={14} className="text-white/30" />
                    <span>Bookmark</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
