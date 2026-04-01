"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

// --- Main Hero Component ---
export const WovenLightHero = () => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    textControls.start(i => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1 + 1.5,
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }));
    buttonControls.start({
        opacity: 1,
        transition: { delay: 2.5, duration: 1 }
    });
  }, [textControls, buttonControls]);

  const headline = "AASTHA KUMARI";
  
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center">
      <WovenCanvas />
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-[8rem] font-semibold text-white leading-[0.8] tracking-wider" style={{ fontFamily: "var(--font-royal)", textShadow: '0 0 100px rgba(255, 255, 255, 0.5)' }}>
            {headline.split(" ").map((word, i) => (
                <span key={i} className="block md:inline-block mx-4">
                    {word.split("").map((char, j) => (
                        <motion.span key={j} custom={i * 7 + j} initial={{ opacity: 0, y: 100, rotateX: -90 }} animate={textControls} style={{ display: 'inline-block' }}>
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </h1>
        
        <div className="mt-12 space-y-4">
            <motion.p
              custom={headline.length + 5}
              initial={{ opacity: 0, y: 30 }}
              animate={textControls}
              className="text-xl md:text-4xl font-medium text-white/90 uppercase tracking-widest bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10 inline-block"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Aspiring Software Developer
            </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <a href="#projects" className="group relative rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="relative z-10">My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative rounded-full border border-white/10 bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/5 hover:border-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};


// --- Three.js Canvas Component ---
const WovenCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const mouse = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const isDarkMode = true; // Forcing dark mode based on portfolio theme

    // --- Woven Silk ---
    const particleCount = 8000; // Optimized from 50000
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);
    const torusKnotPositions = torusKnot.attributes.position;

    for (let i = 0; i < particleCount; i++) {
        const vertexIndex = i % torusKnotPositions.count;
        const x = torusKnotPositions.getX(vertexIndex);
        const y = torusKnotPositions.getY(vertexIndex);
        const z = torusKnotPositions.getZ(vertexIndex);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        originalPositions[i * 3] = x;
        originalPositions[i * 3 + 1] = y;
        originalPositions[i * 3 + 2] = z;

        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.1 + 0.5, 0.8, isDarkMode ? 0.5 : 0.7); // Focused on teal/indigo range
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        
        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.025, // Slightly larger particles to compensate for lower count
        vertexColors: true,
        blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
        transparent: true,
        opacity: isDarkMode ? 0.6 : 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    // Reuse these vectors to avoid GC pressure
    const mouseWorld = new THREE.Vector3();
    const currentPos = new THREE.Vector3();
    const originalPos = new THREE.Vector3();
    const velocity = new THREE.Vector3();
    const tempVec = new THREE.Vector3();

    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        
        mouseWorld.set(mouse.x * 3, mouse.y * 3, 0);
        const currentPositions = geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            currentPos.set(currentPositions[ix], currentPositions[iy], currentPositions[iz]);
            originalPos.set(originalPositions[ix], originalPositions[iy], originalPositions[iz]);
            velocity.set(velocities[ix], velocities[iy], velocities[iz]);

            // use squared distance for performance
            const distSq = currentPos.distanceToSquared(mouseWorld);
            if (distSq < 2.25) { // 1.5 * 1.5
                const dist = Math.sqrt(distSq);
                const force = (1.5 - dist) * 0.01;
                tempVec.subVectors(currentPos, mouseWorld).normalize();
                velocity.add(tempVec.multiplyScalar(force));
            }

            // Return to original position (smooth spring effect)
            tempVec.subVectors(originalPos, currentPos).multiplyScalar(0.005);
            velocity.add(tempVec);
            
            // Damping (snappier physics)
            velocity.multiplyScalar(0.92);

            currentPositions[ix] += velocity.x;
            currentPositions[iy] += velocity.y;
            currentPositions[iz] += velocity.z;
            
            velocities[ix] = velocity.x;
            velocities[iy] = velocity.y;
            velocities[iz] = velocity.z;
        }
        geometry.attributes.position.needsUpdate = true;

        points.rotation.y = elapsedTime * 0.05;
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        if (mountRef.current?.contains(renderer.domElement)) {
            mountRef.current.removeChild(renderer.domElement);
        }
        torusKnot.dispose();
        geometry.dispose();
        material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};
