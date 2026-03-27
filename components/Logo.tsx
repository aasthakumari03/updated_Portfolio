"use client";

import React, { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import Link from "next/link";

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const fullName = "AASTHA KUMARI";
    
    // We want to skip 'A' and 'K' in the typing if they are already part of the static logo,
    // but the user said "it should type the letter of my name 'AASTHA KUMARI'".
    // Let's make the logo show "AK" and then "ASTHA KUMARI" following it.
    // Or replace AK? No, "AK" is the logo. "ASTHA KUMARI" should appear after it.
    const nameToType = "ASTHA KUMARI"; 

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isHovered) {
            let i = 0;
            setDisplayText("");
            timer = setInterval(() => {
                if (i <= nameToType.length) {
                    setDisplayText(nameToType.slice(0, i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 60);
        } else {
            setDisplayText("");
        }
        return () => clearInterval(timer);
    }, [isHovered, nameToType]);

    return (
        <div className="fixed top-8 left-8 z-[100]">
            <Magnetic strength={0.2}>
                <Link 
                    href="/" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group flex items-center gap-0 font-[family-name:var(--font-handwritten)] text-3xl text-white/90 hover:text-white transition-all duration-500"
                >
                    <div className="flex items-center relative">
                        <span className="text-4xl font-bold tracking-tighter">A</span>
                        <span className="text-4xl font-bold tracking-tighter">K</span>
                        
                        <div className="ml-3 overflow-hidden whitespace-nowrap flex items-center min-w-[200px]">
                            <span className="text-2xl font-medium tracking-normal text-white">
                                {displayText}
                                {isHovered && displayText.length < nameToType.length && (
                                    <span className="animate-pulse ml-0.5 opacity-50">|</span>
                                )}
                            </span>
                        </div>
                    </div>
                </Link>
            </Magnetic>
        </div>
    );
};

export default Logo;
