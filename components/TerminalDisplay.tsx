"use client";

import React from 'react';

interface TerminalDisplayProps {
    isVisible: boolean;
    onClose: () => void;
}

const TerminalDisplay: React.FC<TerminalDisplayProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in zoom-in slide-in-from-bottom-10 duration-700">
            <div className="relative group">
                {/* Holographic Rays Effect */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-64 bg-indigo-500/20 blur-[60px] rounded-full skew-y-12 animate-pulse pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-white/40 to-transparent blur-sm opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 left-[40%] w-px h-24 bg-gradient-to-t from-indigo-300/30 to-transparent blur-[1px] -rotate-12 pointer-events-none" />
                <div className="absolute bottom-0 right-[40%] w-px h-24 bg-gradient-to-t from-purple-300/30 to-transparent blur-[1px] rotate-12 pointer-events-none" />

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/40 via-purple-600/40 to-blue-500/40 rounded-lg blur-[20px] opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                {/* The "Computer" Display */}
                <div className="relative bg-black/90 rounded-lg p-1.5 border border-white/20 shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden min-w-[320px]">
                    {/* Screen Content */}
                    <div className="relative bg-gradient-to-br from-[#0a0a25] via-indigo-950 to-purple-950 p-8 rounded border border-indigo-500/30 overflow-hidden">
                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-30"
                            style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.04))', backgroundSize: '100% 3px, 2px 100%' }} />

                        {/* Pixel Grid */}
                        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '6px 6px' }} />

                        {/* Glowing Aura within screen */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 blur-[40px] rounded-full pointer-events-none" />

                        <div className="relative z-10 font-mono text-center space-y-4">
                            <h3 className="text-white text-xl font-black tracking-tighter uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse">
                                Aastha's Portfolio
                            </h3>
                            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                            <p className="text-indigo-100 text-[11px] font-bold tracking-[0.25em] leading-relaxed uppercase">
                                thank you for visiting,<br />
                                <span className="text-white/80">explore the universe!</span>
                            </p>
                        </div>

                        {/* Close trigger */}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-white/40 hover:text-white hover:scale-125 transition-all cursor-none z-50 p-1 bg-white/5 rounded-md border border-white/10"
                            title="Close Terminal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Holographic Base Shadow Enhancement */}
                    <div className="mt-1 h-3 bg-gradient-to-b from-indigo-900/40 to-black rounded-b-xl border-x border-white/10 blur-[1px]"></div>
                </div>
            </div>
        </div>
    );
};

export default TerminalDisplay;
