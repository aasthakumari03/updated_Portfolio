
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiTensorflow,
    SiFigma,
    SiGithub,
} from "react-icons/si";

export const SOCIAL_LINKS = [
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/aastha-kumari-2116a837a", color: "#0077b5", stats: "1800+ Connections", followers: "1800+", footprint: "Connecting with 2K+ Professionals" },
    { name: "GitHub", icon: FaGithub, link: "https://github.com/aasthakumari03", color: "#ffffff", stats: "400+ Commits", followers: "400+", footprint: "Active on 4 Core Repositories" },
    { name: "X", icon: FaXTwitter, link: "https://x.com/Nytheris0329", color: "#ffffff", stats: "0 Followers", followers: "0", footprint: "Growing AI & ML Influence" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/the_nytheris/", color: "#E4405F", stats: "29 Followers", followers: "29", footprint: "0 Posts • Building Visual Identity" },
];

export const PROJECTS = [
    {
        title: "Celestial Portfolio",
        category: "Creative Development",
        year: "2025",
        tags: ["GSAP", "Three.js", "Lenis"],
        features: [
            "Modern universe-themed aesthetic",
            "Smooth GSAP & Lenis scrolling",
            "Interactive spotlight components"
        ],
        backgroundImage: "/celestial-portfolio.png",
        accentColor: "#2dd4bf", // Teal
        secondaryColor: "#6366f1", // Indigo
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "FitLife Tracker",
        category: "Health & AI",
        year: "2025",
        tags: ["Next.js", "Firebase", "TensorFlow"],
        features: [
            "AI-driven workout recommendations",
            "Real-time nutritional tracking",
            "Interactive progress analytics"
        ],
        backgroundImage: "/images/fitlife.png",
        accentColor: "#f43f5e", // Rose
        secondaryColor: "#fb923c", // Orange
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "Paceforge",
        category: "Productivity",
        year: "2026",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        features: [
            "Artificial Urgency Logic Engine",
            "Cinematic Golden Hour Aesthetic",
            "Full-stack Task Management System"
        ],
        backgroundImage: "/images/paceforge.png",
        accentColor: "#eab308", // Yellow/Gold
        secondaryColor: "#f97316", // Orange
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "Shadowchat",
        category: "Cybersecurity",
        year: "2026",
        tags: ["WebRTC", "AES-256", "Next.js"],
        features: [
            "Dynamic Session-based Identity",
            "Encrypted Real-time Communication",
            "Biometric Access Simulation"
        ],
        backgroundImage: "/images/shadowchat.png",
        accentColor: "#a855f7", // Purple
        secondaryColor: "#3b82f6", // Blue
        hasContentBorder: true,
        link: "#"
    }
];

export const UPDATES = [
    {
        title: "Deep Learning",
        description: "Currently diving deep into Neural Networks and Computer Vision. Experimenting with TensorFlow to build more robust image recognition models.",
        icon: SiPython,
        colorClass: "text-teal-400",
        bgClass: "bg-teal-400/10"
    },
    {
        title: "Building FitLife",
        description: "Refining the FitLife Tracker app. Focusing on optimizing the backend data flow with Firebase and enhancing the dashboard UI.",
        icon: SiNextdotjs,
        colorClass: "text-purple-400",
        bgClass: "bg-purple-400/10"
    },
    {
        title: "Reading & Research",
        description: "Exploring research papers on Agentic AI workflows and their application in modern software development.",
        // using a generic icon here as FaExternalLinkAlt was used in page.tsx
        // You might want to import it if you want to be exact, or use a purely data approach
        icon: null,
        colorClass: "text-blue-400",
        bgClass: "bg-blue-400/10"
    }
];
