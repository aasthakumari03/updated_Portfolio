"use client";

import React from 'react';

interface TerminalDisplayProps {
    isVisible: boolean;
    onClose: () => void;
}

const TerminalDisplay: React.FC<TerminalDisplayProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in zoom-in duration-500">
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                {/* The "Computer" Base */}
                <div className="relative bg-black rounded-lg p-1 border border-white/10 shadow-2xl overflow-hidden min-w-[300px]">
                    {/* Screen Content */}
                    <div className="relative bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 p-6 rounded border border-white/5 overflow-hidden">
                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-20"
                            style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }} />

                        {/* Pixel Grid */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

                        <div className="relative z-10 font-mono text-center space-y-2">
                            <h3 className="text-white text-lg font-bold tracking-tighter uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                Aastha's Portfolio
                            </h3>
                            <div className="w-full h-px bg-white/20"></div>
                            <p className="text-indigo-200 text-xs tracking-widest leading-relaxed">
                                thank you for visiting, <br />
                                have a great day!
                            </p>
                        </div>

                        {/* Close trigger */}
                        <button
                            onClick={onClose}
                            className="absolute top-1 right-1 text-white/40 hover:text-white transition-colors cursor-pointer group/btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Physical Base Shadow */}
                    <div className="mt-1 h-3 bg-gradient-to-b from-slate-900 to-black rounded-b-xl border-x border-white/5"></div>
                </div>
            </div>
        </div>
    );
};

export default TerminalDisplay;
