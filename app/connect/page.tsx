"use client";

import React from "react";
import NavHeader from "@/components/NavHeader";
import { FaPaperPlane, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ConnectPage() {
    return (
        <div className="animate-fade-in py-32 px-12 max-w-4xl mx-auto space-y-24 min-h-screen">
            <NavHeader />

            <div className="space-y-8 text-center">
                <h1 className="text-6xl md:text-8xl font-serif tracking-tight">Let's Connect</h1>
                <p className="text-2xl text-white/50 max-w-xl mx-auto font-medium">
                    Have a project in mind? Or just want to say hi? My inbox is always open.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Contact Form Placeholder Styling */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Full Name</label>
                            <input
                                type="text"
                                placeholder="Jan Doe"
                                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Email Address</label>
                            <input
                                type="email"
                                placeholder="jan@example.com"
                                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/30 uppercase tracking-widest pl-4">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-3xl outline-none focus:border-teal-500/50 transition-all text-lg resize-none"
                            />
                        </div>
                    </div>
                    <button className="w-full py-6 bg-white text-black rounded-full font-bold text-xl flex items-center justify-center gap-4 hover:bg-white/90 transition-all active:scale-[0.98]">
                        Send Message <FaPaperPlane size={18} />
                    </button>
                </div>

                {/* Social Links */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Connect with me</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { name: "LinkedIn", icon: FaLinkedin, link: "#", color: "hover:text-[#0077B5]" },
                                { name: "GitHub", icon: FaGithub, link: "#", color: "hover:text-[#333]" },
                                { name: "Twitter", icon: FaTwitter, link: "#", color: "hover:text-[#1DA1F2]" },
                                { name: "Instagram", icon: FaInstagram, link: "#", color: "hover:text-[#E4405F]" },
                                { name: "Email", icon: FaEnvelope, link: "mailto:aastha0328kumari@gmail.com", color: "hover:text-teal-400" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className={`flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl transition-all ${social.color} hover:bg-white/[0.05] group`}
                                >
                                    <div className="flex items-center gap-4">
                                        <social.icon size={22} className="text-white/20 group-hover:text-inherit transition-colors" />
                                        <span className="text-xl font-bold tracking-tight">{social.name}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                        <FaPaperPlane className="-rotate-45" size={14} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
