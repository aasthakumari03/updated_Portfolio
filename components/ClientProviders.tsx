"use client";

import dynamic from "next/dynamic";
import React from "react";

const Background = dynamic(() => import("@/components/ui/Background"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <CustomCursor />
      {children}
    </>
  );
}
