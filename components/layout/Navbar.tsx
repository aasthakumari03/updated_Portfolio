"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NAV_ITEMS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            // Basic intersection observer logic for active section
            const sections = NAV_ITEMS.map(item => item.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`
                    pointer-events-auto
                    px-2 py-2 rounded-full 
                    bg-white/5 backdrop-blur-xl 
                    border border-white/10
                    flex items-center gap-1
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                    transition-all duration-500
                    ${scrolled ? "scale-100" : "scale-105"}
                `}
            >
                {NAV_ITEMS.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="relative px-4 py-2 text-sm font-medium transition-colors group"
                    >
                        <span className={`relative z-10 ${activeSection === item.href.substring(1) ? "text-white" : "text-white/50 group-hover:text-white/80 transition-colors"}`}>
                            {item.name}
                        </span>
                        
                        {activeSection === item.href.substring(1) && (
                            <motion.div 
                                layoutId="nav-active"
                                className="absolute inset-0 bg-white/10 rounded-full z-0"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        
                        <motion.div 
                            className="absolute inset-0 bg-white/5 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            transition={{ duration: 0.3 }}
                        />
                    </Link>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;
