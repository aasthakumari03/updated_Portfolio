
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full">
            <div className="pt-20 pb-4 text-center">
                <p className="text-sm font-bold text-white/15 uppercase tracking-[0.4em]">
                    ALL RIGHTS RESERVED | <span className="font-[family-name:var(--font-gothic)] font-bold text-lg tracking-normal">AASTHA KUMARI | {currentYear}</span>
                </p>
            </div>

            {/* Made with Badge */}
            <div className="fixed bottom-8 right-8 z-[100] animate-fade-in [animation-delay:1s]">
                <div className="px-5 py-2.5 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-white/50 text-[10px] font-bold rounded-2xl shadow-2xl uppercase tracking-[0.2em] flex items-center gap-3 hover:text-white transition-all duration-500 group cursor-default">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                    Made with ❤️ By Aastha
                </div>
            </div>
        </footer>
    );
};

export default Footer;
