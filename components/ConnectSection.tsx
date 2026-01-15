"use client";

import React from "react";
import { FaLinkedinIn, FaInstagram, FaDribbble, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Magnetic from "./Magnetic";

const ConnectSection = () => {
    const [copied, setCopied] = React.useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("aastha0328kumari@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socials = [
        { icon: FaLinkedinIn, color: "bg-[#0077b5]", href: "#" },
        { icon: FaXTwitter, color: "bg-black border border-white/20", href: "#" },
        { icon: FaInstagram, color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]", href: "#" },
        { icon: FaDribbble, color: "bg-[#ea4c89]", href: "#" },
        { icon: FaMediumM, color: "bg-black border border-white/20", href: "#" },
    ];

    return (
        <section className="py-24 px-6 flex flex-col items-center justify-center relative min-h-[600px]">
            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl rounded-[40px] overflow-hidden group">
                {/* Distressed Background Container */}
                <div className="absolute inset-0 bg-[#050505] transition-transform duration-700 group-hover:scale-105">
                    {/* Dark texture overlay (representing the scratched metal look) */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                        style={{
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")',
                            filter: 'contrast(150%) brightness(50%)'
                        }}>
                    </div>
                    {/* Radial glow */}
                    <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/5 to-transparent"></div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 py-32 px-12 text-center flex flex-col items-center">
                    <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-white/50 max-w-lg mx-auto mb-16 leading-relaxed">
                        Have a project, a question, or just want to chat about design? Drop me a message!
                    </p>

                    {/* Email Copy Button */}
                    <div className="mb-16 relative">
                        <button
                            onClick={copyEmail}
                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold flex items-center gap-3 hover:bg-white/10 transition-all group/btn"
                        >
                            <span>aastha0328kumari@gmail.com</span>
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover/btn:scale-110 transition-transform text-[10px]">
                                COPY
                            </div>
                        </button>
                        {copied && (
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg animate-fade-in">
                                Email Copied!
                            </div>
                        )}
                    </div>

                    {/* Socials */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {socials.map((social, idx) => (
                            <Magnetic key={idx} strength={0.3}>
                                <a
                                    href={social.href}
                                    className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white transition-all hover:scale-110 shadow-xl ${social.color}`}
                                >
                                    <social.icon size={28} />
                                </a>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Divider */}
            <div className="mt-24 mb-12 flex flex-col items-center opacity-40">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 20C10 20 25 10 40 20C55 30 70 20 70 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M50 20C50 20 65 10 80 20C95 30 110 20 110 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="60" cy="20" r="3" fill="white" />
                </svg>
            </div>

            {/* Footer Text */}
            <div className="text-center text-white/30 text-sm font-medium tracking-wide space-y-2">
                <p className="flex items-center justify-center gap-2">
                    <span>© 2025 Arnab</span>
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    <span>All rights reserved</span>
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    <span>It's not a Framer template</span>
                </p>
                <p>
                    Built with pixels, music, caffeine, snacks and a dash of AI magic
                </p>
            </div>
        </section>
    );
};

export default ConnectSection;
