
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
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/aastha-kumari-2116a837a", color: "#0077b5" },
    { name: "GitHub", icon: FaGithub, link: "https://github.com/aasthakumari03", color: "#ffffff" },
    { name: "X", icon: FaXTwitter, link: "https://x.com/Nytheris0329", color: "#ffffff" },
    { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/the_nytheris/", color: "#E4405F" },
    { name: "Email", icon: FaEnvelope, link: "mailto:aastha0328kumari@gmail.com", color: "#EA4335" },
];

export const PROJECTS = [
    {
        title: "Celestial Portfolio",
        category: "",
        year: "",
        tags: [],
        features: [
            "Modern universe-themed aesthetic",
            "Smooth GSAP & Lenis scrolling",
            "Interactive spotlight components"
        ],
        backgroundImage: "/celestial-portfolio.png",
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "Fitlife Tracker",
        category: "Health & Fitness",
        year: "2025",
        tags: [],
        features: [
            "AI-driven workout recommendations",
            "Real-time nutritional tracking",
            "Interactive progress analytics"
        ],
        backgroundImage: "",
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "Paceforge",
        category: "Productivity & Automation",
        year: "2026",
        tags: ["Next.js", "MongoDB", "Tailwind"],
        features: [
            "Artificial Urgency Logic Engine",
            "Cinematic Golden Hour Aesthetic",
            "Full-stack Task Management System"
        ],
        backgroundImage: "/images/paceforge.png",
        hasContentBorder: true,
        link: "#"
    },
    {
        title: "Shadowchat",
        category: "Secure Dynamic Messaging",
        year: "2026",
        tags: ["Next.js", "Firebase", "Framer Motion"],
        features: [
            "Glassmorphism UI Design",
            "Dynamic Session-based Identity",
            "Encrypted Real-time Communication"
        ],
        backgroundImage: "/images/shadowchat.png",
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
