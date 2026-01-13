"use client";

import React from "react";
import Image from "next/image";
import { FaBookmark, FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaCheckCircle, FaBriefcase } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-80 h-screen fixed left-0 top-0 bg-white border-r border-gray-100 flex flex-col p-8 z-50 overflow-y-auto">
            {/* Header Info */}
            <div className="space-y-6">
                <div className="relative w-24 h-24">
                    <Image
                        src="/avatar.png"
                        alt="Aastha Kumari"
                        fill
                        className="rounded-full object-cover border-4 border-gray-50 shadow-sm"
                    />
                </div>
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Aastha Kumari</h1>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <span>@aastha</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">📍 India</span>
                    </div>
                    <p className="text-gray-600 font-semibold text-sm pt-1">AI & ML Student</p>
                </div>

                <div className="pt-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        1 Year Experience Includes:
                    </p>
                    <div className="mt-3 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                        <FaBriefcase size={20} />
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 space-y-3 flex-grow">
                <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-50 text-gray-400 font-bold transition-all hover:bg-gray-100">
                    <FaCheckCircle className="text-gray-300" />
                    <span>Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-900 text-white font-bold transition-all shadow-lg shadow-gray-200">
                    <div className="w-5 h-3 border-2 border-white/30 rounded-sm relative">
                        <div className="absolute left-1/2 -ml-[1px] top-0 bottom-0 w-[2px] bg-white/30"></div>
                    </div>
                    <span>Portfolio</span>
                </button>
            </div>

            {/* Footer / Bookmark */}
            <div className="pt-8 mt-auto">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-gray-100 rounded-2xl text-gray-600 font-bold hover:bg-gray-50 transition-all">
                    <FaBookmark size={14} className="text-gray-400" />
                    <span>Bookmark</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
