import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aastha's Portfolio Website",
  description: "Personal portfolio of Aastha Kumari",
};

import CustomCursor from "@/components/CustomCursor";
import BackgroundDepth from "@/components/BackgroundDepth";
import UniverseBackground from "@/components/UniverseBackground";
import GrainyGradientBackground from "@/components/GrainyGradientBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GrainyGradientBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
