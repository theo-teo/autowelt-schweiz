"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Wrench, Shield, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

const ATELIER_FEATURES = [
  {
    title: "HOFELE Bespoke Partner",
    desc: "Offizielle Individualisierung für Mercedes-AMG G63, Maybach und GLS mit maßgeschneiderten Widebody-Kits, Schmiederädern und Karbon-Aero.",
    stat: "1 of 1",
    label: "Manufaktur Unikate",
  },
  {
    title: "Glattpark High-Tech Werkstatt",
    desc: "Modernste Diagnose- und Wartungstechnologie an der Lindbergh-Allee 1. Spezialisiert auf V12-Sauger, Biturbo-Aggregate und Hybrid-Antriebsstränge.",
    stat: "8152",
    label: "Zürich-Glattpark",
  },
  {
    title: "Handgefertigte Leder-Ateliers",
    desc: "Exklusive Sattlerarbeiten in Schweizer Perfektion: Nappaleder, Alcantara-Dachhimmel und individuelle Kontraststeppungen nach Kundenwunsch.",
    stat: "100%",
    label: "Swiss Craftsmanship",
  },
];

export default function AtelierSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 bg-[#0B0D10] text-[#F4F0E9] border-t border-white/10 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C3AD90]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
              <span className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-[#C3AD90]">
                (02) — ATELIER & VEREDELUNG · GLATTPARK
              </span>
            </div>
            <h2 className="mt-2 font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-[#F4F0E9]">
              Schweizer Präzision. <br />
              <span className="text-white/50">Bespoke Handwerkskunst.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            In unserem High-End Atelier an der Lindbergh-Allee 1 in Glattpark verwandeln wir automobile Ikonen in unverwechselbare Sammlerstücke — von Werksabnahmen bis zur massgeschneiderten Hofele-Bespoke Veredelung.
          </div>
        </div>

        {/* Feature Grid & Visual Stage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Feature Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {ATELIER_FEATURES.map((feat, idx) => (
              <div
                key={feat.title}
                onClick={() => setActiveTab(idx)}
                className={`group p-6 rounded-xs border transition-all cursor-pointer ${
                  activeTab === idx
                    ? "border-[#C3AD90] bg-white/[0.04] shadow-xl shadow-[#C3AD90]/5"
                    : "border-white/10 bg-white/[0.01] hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tag text-[10px] uppercase tracking-widest text-[#C3AD90]">
                    {feat.label}
                  </span>
                  <span className="font-editorial text-xl text-white/40 group-hover:text-white transition-colors">
                    {feat.stat}
                  </span>
                </div>
                <h3 className="mt-2 font-editorial text-lg sm:text-xl font-normal text-white">
                  {feat.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70 font-light">
                  {feat.desc}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="https://www.autoweltschweiz.ch/mercedes-benz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xs border border-[#C3AD90]/40 bg-[#0B0D10]/80 px-5 py-3 text-xs font-mono-tag uppercase tracking-wider text-[#C3AD90] hover:bg-[#C3AD90] hover:text-[#0B0D10] transition-all"
              >
                <span>Hofele Bespoke Portfolio ansehen</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Atelier Stage Visual */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-xs border border-white/10 overflow-hidden bg-black/60 shadow-2xl">
            <Image
              src="/media/inventory/mercedes-hofele-g63.jpg"
              alt="Hofele Bespoke HG63 Mercedes-AMG im Glattpark Atelier"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            
            {/* Atelier Meta Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/95 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="font-mono-tag text-[9.5px] uppercase tracking-widest text-[#C3AD90]">
                  Glattpark Flagship Atelier
                </span>
                <p className="font-editorial text-xl text-white">
                  Hofele HG63 Schwarzglanz Edition
                </p>
                <p className="text-[11px] font-mono-tag text-white/60">
                  Lindbergh-Allee 1 · 8152 Glattpark / Zürich
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 rounded-xs bg-[#0B0D10]/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono-tag text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Atelierbetrieb aktiv</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
