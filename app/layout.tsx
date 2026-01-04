import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Alex_Brush, Pacifico, Plus_Jakarta_Sans } from "next/font/google";
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

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aastha's Portfolio Website",
  description: "Personal portfolio of Aastha Kumari",
};

import CustomCursor from "@/components/CustomCursor";
import BackgroundDepth from "@/components/BackgroundDepth";
import UniverseBackground from "@/components/UniverseBackground";
import WhiteTransparentBackground from "@/components/WhiteTransparentBackground";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${alexBrush.variable} ${pacifico.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <SmoothScroll>
          <BackgroundDepth />
          <UniverseBackground />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
