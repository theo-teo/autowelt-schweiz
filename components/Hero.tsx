import React from "react";
import Image from "next/image";
import HeroActions from "@/components/HeroActions";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden bg-[#0B0D10] text-[#F4F0E9]">
      
      {/* =========================================================================
          1. CINEMATIC 16:9 VISUAL STAGE (Private Test Circuit / Architectural Pit)
      ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/hero-circuit-static-preview.jpg"
          alt="Three distinct sports and supercars in red, orange, and graphite staged at a private architectural circuit facility in Switzerland"
          fill
          priority
          className="object-cover object-bottom md:object-center"
          sizes="100vw"
        />

        {/* Natural Vignette & Soft Gradient for Text Legibility (No artificial neon) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-[#0B0D10]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/85 via-[#0B0D10]/40 to-transparent max-w-3xl" />
      </div>

      {/* =========================================================================
          2. EDITORIAL TYPOGRAPHY & ACTIONS (Clear Negative Space Above Rooflines)
      ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-8 sm:pt-14 sm:px-8">
        <div className="max-w-2xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="font-mono-tag text-[10.5px] uppercase tracking-[0.25em] text-[#C3AD90]">
              AUTOWELT SCHWEIZ / CONCEPT
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-3.5 font-editorial text-4xl sm:text-6xl lg:text-[4.25rem] font-medium uppercase tracking-tight text-[#F4F0E9] leading-[1.02]">
            EXTRAORDINARY, <br />
            BY DESIGN.
          </h1>

          {/* Short Subcopy: Exactly 13 words (Contract limit: max 18 words) */}
          <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#F4F0E9]/80 font-light">
            Curated allocations and private acquisitions of the world’s most distinguished sports and supercars.
          </p>

          {/* Action Pair */}
          <div className="mt-6 sm:mt-8">
            <HeroActions />
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. RESTRAINED FOOTER METADATA BAR (Context & Legal Clarity)
      ========================================================================= */}
      <div className="relative z-10 border-t border-[#F4F0E9]/[0.08] bg-[#0B0D10]/85 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-[11px] font-mono-tag text-[#F4F0E9]/60 sm:px-8">
          
          {/* Technical Location Indicator */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="text-[#F4F0E9]">ZÜRICH-GLATTPARK</span>
            <span className="text-[#F4F0E9]/30">/</span>
            <span>LINDBERGH-ALLEE 1</span>
          </div>

          {/* Concept Lineup Legend */}
          <div className="hidden sm:flex items-center gap-3 text-[#F4F0E9]/50">
            <span>CONCEPT LINEUP: RED · ORANGE · GRAPHITE</span>
            <span className="text-[#F4F0E9]/30">·</span>
            <span>GATE 1 STATIC CONTRACT</span>
          </div>

          {/* Disclaimer */}
          <div className="text-[10px] text-[#C3AD90]">
            UNCOMMISSIONED CONCEPT DEMO · NOT AFFILIATED OFFICIALLY
          </div>

        </div>
      </div>

    </section>
  );
}
