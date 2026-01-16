"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookmark, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaCheckCircle, FaBriefcase, FaUser, FaProjectDiagram, FaCode, FaHeadset } from "react-icons/fa";

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "Profile", href: "/", icon: FaUser },
        { label: "About", href: "/about", icon: FaCheckCircle },
        { label: "Projects", href: "/projects", icon: FaProjectDiagram },
        { label: "Skills", href: "/skills", icon: FaCode },
        { label: "Connect", href: "/connect", icon: FaHeadset },
    ];

    return (
        <aside className="w-80 h-screen fixed left-0 top-0 bg-black/40 backdrop-blur-3xl border-r border-white/5 flex flex-col p-8 z-50 overflow-y-auto">
            {/* Header Info */}
            <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                    <Image
                        src="/avatar.png"
                        alt="Aastha Kumari"
                        fill
                        className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
                    />
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Aastha Kumari</h1>
                    <div className="flex items-center justify-center gap-2 text-white/50 text-sm font-medium">
                        <span>@aastha</span>
                        <span>-</span>
                        <span className="flex items-center gap-1">📍 India</span>
                    </div>
                    <p className="text-teal-400/80 font-semibold text-sm pt-1 uppercase tracking-tight">CSE 1st Year (AI & ML)</p>
                </div>

                <div className="pt-4 text-center">
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest leading-relaxed">
                        1 Year Experience Includes:
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-teal-400 shadow-sm">
                            <FaBriefcase size={22} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 space-y-3 flex-grow">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${isActive ? 'bg-white text-black shadow-2xl shadow-white/10' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}
                        >
                            <item.icon className={isActive ? 'text-black/60' : 'text-white/20'} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>

            {/* Footer / Bookmark */}
            <div className="pt-8 mt-auto">
                <button className="w-full h-14 flex items-center justify-center gap-3 px-8 border border-white/10 rounded-full text-white/70 font-bold hover:bg-white/5 transition-all shadow-sm">
                    <FaBookmark size={16} className="text-white/30" />
                    <span>Bookmark</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
