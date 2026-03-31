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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
