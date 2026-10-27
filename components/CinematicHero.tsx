"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import HeroActions from "@/components/HeroActions";

interface CinematicHeroProps {
  mode: "day" | "night";
}

export default function CinematicHero({ mode }: CinematicHeroProps) {
  const dayVideoRef = useRef<HTMLVideoElement>(null);
  const nightVideoRef = useRef<HTMLVideoElement>(null);

  // Synchronize playback position between Day and Night videos
  useEffect(() => {
    const currentVideo = mode === "day" ? dayVideoRef.current : nightVideoRef.current;
    const nextVideo = mode === "day" ? nightVideoRef.current : dayVideoRef.current;

    if (currentVideo && nextVideo && !isNaN(currentVideo.currentTime)) {
      nextVideo.currentTime = currentVideo.currentTime;
      nextVideo.play().catch(() => {});
    }
  }, [mode]);

  return (
    <section className="relative w-full min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden bg-[#0B0D10] text-[#F4F0E9]">
      
      {/* =========================================================================
          1. CINEMATIC VIDEO STAGE (Synchronized Day / Night Seamless Crossfade)
      ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* DAY VIDEO LAYER */}
        <video
          ref={dayVideoRef}
          src="/media/hero-day-desktop.mp4"
          poster="/media/hero-day-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            mode === "day" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* NIGHT VIDEO LAYER */}
        <video
          ref={nightVideoRef}
          src="/media/hero-night-desktop.mp4"
          poster="/media/hero-night-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            mode === "night" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* 
            Subtle Architectural Vignette:
            Light, transparent gradient scrim so the cars and test circuit 
            remain fully visible and emotional, while guaranteeing AAA text contrast.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-[#0B0D10]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/70 via-[#0B0D10]/20 to-transparent pointer-events-none max-w-2xl" />
      </div>

      {/* =========================================================================
          2. EDITORIAL FLOATING TYPOGRAPHY (Quiet Luxury, No Tile Clutter)
      ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-10 sm:pt-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl rounded-xs bg-[#0B0D10]/25 p-4 sm:p-6 backdrop-blur-[2px] border border-white/[0.04]"
        >
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="font-mono-tag text-[10px] sm:text-[10.5px] uppercase tracking-[0.25em] text-[#C3AD90]">
              AUTOWELT SCHWEIZ / CONCEPT
            </span>
          </div>

          {/* Headline: Clean, elegant, non-intrusive */}
          <h1 className="mt-3 font-editorial text-3xl sm:text-5xl lg:text-[3.85rem] font-normal uppercase tracking-tight text-[#F4F0E9] leading-[1.04]">
            EXTRAORDINARY, <br />
            BY DESIGN.
          </h1>

          {/* Subcopy: max 18 words, transparent and restrained */}
          <p className="mt-3.5 max-w-md text-xs sm:text-sm leading-relaxed text-[#F4F0E9]/75 font-light">
            A more cinematic way to discover exceptional vehicles. Curated allocations and private acquisitions in Switzerland.
          </p>

          {/* Actions */}
          <div className="mt-6">
            <HeroActions />
          </div>

        </motion.div>
      </div>

      {/* =========================================================================
          3. RESTRAINED MINIMAL FOOTER BAR
      ========================================================================= */}
      <div className="relative z-10 border-t border-[#F4F0E9]/[0.08] bg-[#0B0D10]/75 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-[10.5px] font-mono-tag text-[#F4F0E9]/60 sm:px-8">
          
          {/* Location & Heritage */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="text-[#F4F0E9]">ZÜRICH-GLATTPARK</span>
            <span className="text-[#F4F0E9]/30">/</span>
            <span>LINDBERGH-ALLEE 1</span>
          </div>

          {/* Current Mode Status */}
          <div className="flex items-center gap-2 text-[#C3AD90]">
            <span className="uppercase">{mode} MODE ACTIVE</span>
            <span className="text-white/20">·</span>
            <span className="text-[#F4F0E9]/50">12S CINEMATIC TRACK MOVE</span>
          </div>

          {/* Uncommissioned Demo Notice */}
          <div className="text-[9.5px] text-[#F4F0E9]/40">
            INDEPENDENT PITCH CONCEPT · AUTOWELT SCHWEIZ AG
          </div>

        </div>
      </div>

    </section>
  );
}
