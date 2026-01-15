"use client";

import React from "react";
import Image from "next/image";
import { FaBookmark, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaCheckCircle, FaBriefcase } from "react-icons/fa";

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
    return (
        <aside className="w-80 h-screen fixed left-0 top-0 bg-[#ffffff] border-r border-gray-100 flex flex-col p-8 z-50 overflow-y-auto">
            {/* Header Info */}
            <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                    <Image
                        src="/avatar.png"
                        alt="Aastha Kumari"
                        fill
                        className="rounded-full object-cover border-4 border-gray-50 shadow-sm"
                    />
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Aastha Kumari</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
                        <span>@aastha</span>
                        <span>-</span>
                        <span className="flex items-center gap-1">📍 India</span>
                    </div>
                    <p className="text-gray-600 font-semibold text-sm pt-1">UI/UX Designer</p>
                </div>

                <div className="pt-4 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                        1 Year Experience Includes:
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                            <FaBriefcase size={22} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 space-y-4 flex-grow">
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'profile' ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                >
                    <FaCheckCircle className={activeTab === 'profile' ? 'text-white/40' : 'text-gray-300'} />
                    <span>Profile</span>
                </button>
                <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === 'portfolio' ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                >
                    <div className={`w-5 h-3 border-2 rounded-sm relative ${activeTab === 'portfolio' ? 'border-white/30' : 'border-gray-200'}`}>
                        <div className={`absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[2px] ${activeTab === 'portfolio' ? 'bg-white/30' : 'bg-gray-200'}`}></div>
                    </div>
                    <span>Portfolio</span>
                </button>
            </div>

            {/* Footer / Bookmark */}
            <div className="pt-8 mt-auto">
                <button className="w-full h-14 flex items-center justify-center gap-3 px-8 border border-gray-200 rounded-full text-gray-700 font-bold hover:bg-gray-50 transition-all shadow-sm">
                    <FaBookmark size={16} className="text-gray-400" />
                    <span>Bookmark</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
