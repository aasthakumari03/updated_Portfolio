import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, Cinzel } from "next/font/google";

const cinzel = Cinzel({
  variable: "--font-premium",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

import React from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aastha Kumari | Portfolio",
  description: "Aspiring Software Developer & AI/ML Student. Explore my portfolio showcasing projects in Web Development, Artificial Intelligence, and Machine Learning.",
  keywords: ["Aastha Kumari", "Portfolio", "Software Developer", "AI", "ML", "Web Development", "React", "Next.js", "Python"],
  authors: [{ name: "Aastha Kumari" }],
  colorScheme: "dark",
  openGraph: {
    title: "Aastha Kumari | Portfolio",
    description: "Aspiring Software Developer & AI/ML Student.",
    type: "website",
    locale: "en_US",
    siteName: "Aastha Kumari Portfolio",
  },
};

import { ClientProviders } from "@/components/ClientProviders";
import Logo from "@/components/layout/Logo";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body { background: #020202 !important; color: white !important; color-scheme: dark !important; }
          .dark { color-scheme: dark !important; }
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              document.documentElement.classList.add('dark');
              document.documentElement.style.colorScheme = 'dark';
            } catch (e) {}
          })();
        ` }} />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${playfair.variable} ${cinzel.variable} antialiased bg-[#020202] text-white relative flex flex-col min-h-screen selection:bg-teal-500/30 overflow-x-hidden`}
      >
        {/* Background Layers */}
        <ClientProviders>
          <div className="fixed inset-0 bg-black/50 z-[-1] pointer-events-none" />
          
          <SmoothScroll>
            <Logo />
            <Navbar />

            <main className="flex-grow relative z-10 min-h-screen">
              {children}
            </main>
          </SmoothScroll>
        </ClientProviders>
      </body>
    </html>
  );
}
