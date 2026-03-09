"use client";

import React, { useState, useEffect } from "react";
import { FaUser, FaBriefcase, FaEnvelope, FaFileAlt } from "react-icons/fa";
import Magnetic from "./Magnetic";
import { usePathname } from "next/navigation";

const NavHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const items = [
        { label: "About", href: "/about", icon: FaUser },
        { label: "Works", href: "#projects", icon: FaBriefcase },
        { label: "Connect", href: "#connect", icon: FaEnvelope },
        { label: "Resume", href: "/resume.pdf", icon: FaFileAlt },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (pathname !== '/') {
                setScrolled(true);
                return;
            }
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

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
        <div className={`fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}>
            <nav>
                <div className={`flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 backdrop-blur-md border ${scrolled ? 'bg-black/60 border-white/10 shadow-lg shadow-black/20' : 'bg-transparent border-transparent'}`}>
                    {items.map((item, idx) => (
                        <Magnetic key={idx} strength={0.1}>
                            <a
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <item.icon className="text-white/40 group-hover:text-white/90 transition-colors duration-300" size={14} />
                                {item.label}
                            </a>
                        </Magnetic>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;
