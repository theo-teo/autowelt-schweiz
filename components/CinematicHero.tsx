"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import HeroActions from "@/components/HeroActions";

const BRAND_STRIP = [
  "PORSCHE",
  "FERRARI",
  "LAMBORGHINI",
  "BUGATTI",
  "KOENIGSEGG",
  "PAGANI",
  "ASTON MARTIN",
  "BENTLEY",
  "MERCEDES-BENZ",
  "MCLAREN",
];

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
          className={`absolute inset-0 h-full w-full object-cover object-bottom md:object-center transition-opacity duration-1000 ease-in-out ${
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
          className={`absolute inset-0 h-full w-full object-cover object-bottom md:object-center transition-opacity duration-1000 ease-in-out ${
            mode === "night" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* 
            Subtle Architectural Vignette:
            Light, transparent gradient scrim so the cars and test circuit 
            remain fully visible and emotional, while guaranteeing AAA text contrast.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-[#0B0D10]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/70 via-[#0B0D10]/20 to-transparent pointer-events-none max-w-2xl" />
      </div>

      {/* =========================================================================
          2. EDITORIAL FLOATING TYPOGRAPHY (Quiet Luxury, No Clutter)
      ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-8 sm:pt-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl rounded-xs bg-[#0B0D10]/20 p-4 sm:p-6 backdrop-blur-[2px] border border-white/[0.04]"
        >
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="font-mono-tag text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C3AD90]">
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
          3. BRAND TICKER STRIP & RESTRAINED FOOTER
      ========================================================================= */}
      <div className="relative z-10 border-t border-[#F4F0E9]/[0.08] bg-[#0B0D10]/80 backdrop-blur-md">
        
        {/* Brand Showcase Line */}
        <div className="mx-auto max-w-7xl px-5 py-2.5 border-b border-white/5 sm:px-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono-tag tracking-wider text-white/50 shrink-0">
            <span className="text-[#C3AD90] uppercase font-medium">Offizielles Portfolio:</span>
            {BRAND_STRIP.map((brand, idx) => (
              <React.Fragment key={brand}>
                <span className="hover:text-white transition-colors cursor-default">{brand}</span>
                {idx < BRAND_STRIP.length - 1 && <span className="text-white/15">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Detailed Address & Contact Metadata */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-2.5 text-[10px] font-mono-tag text-[#F4F0E9]/60 sm:px-8">
          
          {/* Location & Heritage */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="text-[#F4F0E9]">SHOWROOM: BADENERSTRASSE 567, 8048 ZÜRICH</span>
            <span className="text-[#F4F0E9]/30">|</span>
            <span>ATELIER: LINDBERGH-ALLEE 1, 8152 GLATTPARK</span>
            <span className="text-[#F4F0E9]/30">|</span>
            <a href="tel:+41448885577" className="text-[#C3AD90] hover:underline">+41 44 888 55 77</a>
          </div>

          {/* Current Mode Status */}
          <div className="flex items-center gap-2 text-[#C3AD90]">
            <span className="uppercase">{mode} MODE ACTIVE</span>
            <span className="text-white/20">·</span>
            <span className="text-[#F4F0E9]/50">12S CINEMATIC TRACK MOVE</span>
          </div>

        </div>
      </div>

    </section>
  );
}
