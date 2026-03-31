"use client";
import React, { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

const ConnectSection = () => {
    const [copied, setCopied] = useState(false);
    const email = "aastha0328kumari@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="connect" className="py-24 px-12 max-w-6xl mx-auto min-h-screen flex flex-col">
            <div className="flex-1 flex flex-col justify-center space-y-32 w-full">
                <div className="max-w-4xl mx-auto w-full group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 via-purple-500/30 to-teal-500/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative border border-white/10 rounded-[2rem] p-12 bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-md hover:border-teal-400 hover:shadow-[0_0_80px_rgba(45,212,191,0.4)] transition-all duration-700">
                        <div className="space-y-10 text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-zinc-300">Let's Connect</h2>
                            <div className="text-2xl text-white/40 font-medium leading-tight flex flex-col items-center gap-4">
                                <p>Have a project in mind? Or just want to say hi?</p>

                                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-teal-400/50 transition-all group/email">
                                    <a href={`mailto:${email}`} className="text-teal-400 italic hover:text-teal-300 transition-colors">
                                        {email}
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors relative"
                                        title="Copy email"
                                    >
                                        {copied ? <FaCheck className="text-green-400" size={16} /> : <FaCopy className="text-white/40 group-hover/email:text-white transition-colors" size={16} />}
                                        {copied && (
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded border border-white/10">Copied!</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <a 
                                href="https://topmate.io/aastha_kumari" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/btn relative px-8 py-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-teal-400/50 hover:bg-teal-400/5 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                <div className="relative flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Mentorship</p>
                                        <p className="text-sm font-bold text-white tracking-widest">TOPMATE</p>
                                    </div>
                                </div>
                            </a>

                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/btn relative px-8 py-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-purple-400/50 hover:bg-purple-400/5 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                <div className="relative flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Curriculum Vitae</p>
                                        <p className="text-sm font-bold text-white tracking-widest">RESUME</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ConnectSection;
