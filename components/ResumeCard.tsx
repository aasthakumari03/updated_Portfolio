"use client";

import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const ResumeCard = () => {
    return (
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="group relative w-48 h-28 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:scale-110 flex flex-col items-center justify-center p-4 cursor-pointer overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/10 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                        <FaFilePdf size={20} />
                    </div>

                    <div className="text-center">
                        <h3 className="text-lg font-bold text-[var(--foreground)] uppercase tracking-wider">Resume</h3>
                    </div>
                </div>

                {/* Download Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600/90 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0">
                    <a
                        href="/Aastha_Resume.pdf"
                        download
                        className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-black text-[10px] shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                        <FaDownload size={12} />
                        DOWNLOAD
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
