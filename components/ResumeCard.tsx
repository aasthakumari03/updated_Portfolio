"use client";

import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const ResumeCard = () => {
    return (
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="group relative w-72 h-44 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_50px_rgba(79,70,229,0.2)] flex flex-col items-center justify-center p-6 cursor-pointer overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Lines/Decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-all duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                        <FaFilePdf size={28} />
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1">Resume</h3>
                        <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Aastha_Kumari_Resume.pdf</p>
                    </div>
                </div>

                {/* Download Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0">
                    <a
                        href="/Aastha_Resume.pdf"
                        download
                        className="flex items-center gap-3 bg-white text-indigo-600 px-6 py-3 rounded-full font-black text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                        <FaDownload size={14} />
                        DOWNLOAD NOW
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
