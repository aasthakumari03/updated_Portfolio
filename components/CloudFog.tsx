"use client";

import React, { useMemo, useState, useEffect } from "react";

const CloudFog = () => {
  // Generate a simple SVG noise texture as a Data URI to avoid external requests
  const [noiseUrl, setNoiseUrl] = useState("");

  useEffect(() => {
    // Create a noise SVG string
    // feTurbulence creates the texture
    // feColorMatrix converts it to grayscale/alpha logic if needed, but direct use is often fine
    // We'll use a simple turbulence and use filter to make it white/grey smoke
    const svgString = `
      <svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
        <filter id='noiseFilter'>
          <feTurbulence 
            type='fractalNoise' 
            baseFrequency='0.005' 
            numOctaves='3' 
            stitchTiles='stitch' />
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0" />
        </filter>
        <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.8'/>
      </svg>
    `;
    // Encode to base64
    const base64 = typeof window !== 'undefined' ? window.btoa(svgString) : "";
    setNoiseUrl(`data:image/svg+xml;base64,${base64}`);
  }, []);

  if (!noiseUrl) return null;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden h-full w-full">
      {/* 
        We create multiple layers with delayed animations.
        The animation 'fog-fly' scales them up and fades them in/out.
        'mix-blend-screen' or 'overlay' helps them look like light smoke on black.
      */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="cloud-layer absolute inset-0 bg-repeat bg-center opacity-0"
          style={{
            backgroundImage: `url("${noiseUrl}")`,
            animation: `fog-fly 20s linear infinite`,
            animationDelay: `${i * 4}s`,
            // Tinting the smoke slightly bluish/grey can look nice, but let's stick to white smoke first
            // We use a mask to fade edges if we want a 'tunnel' feel, but fullscreen scale is also fine.
            // Let's add a radial gradient mask to simulate the "tunnel" hole in center if desired?
            // "Coming towards" usually means passing THROUGH the clouds.
            // So the center should be clearer? Or the clouds start small in center and grow?
            // fog-fly does scale(1) -> scale(3), so they grow TOWARDS user.
          }}
        >
          {/* Gradient overlay for depth/tint */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)" }}></div>
        </div>
      ))}

      {/* Global vignette to focus center */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle, transparent 20%, #000 100%)" }} />
    </div>
  );
};

export default CloudFog;
