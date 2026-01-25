import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, Pirata_One } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const pirata = Pirata_One({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: ["400"],
});
import React from "react";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";


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
  description: "AI & ML Student & Developer",
};

import Background from "@/components/Background";
import NavHeader from "@/components/NavHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${playfair.variable} ${pirata.variable} antialiased bg-black text-white relative flex selection:bg-teal-500/30`}
      >
        <CustomCursor />
        <Background />
        <NavHeader />

        <main className="flex-grow relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
