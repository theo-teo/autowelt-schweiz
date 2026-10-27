"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Gauge,
  Flame,
  Zap,
  Play,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Activity,
  Layers,
  Sparkles,
  Volume2
} from "lucide-react";
import { sound } from "@/lib/audio";

type PerspectiveStage = "drone_high" | "bumper_apex" | "drift_apex" | "cockpit_pov";

interface StageConfig {
  id: PerspectiveStage;
  title: string;
  tagline: string;
  altitude: string;
  speed: string;
  gForce: string;
  image: string;
  spec: string;
}

const STAGES: StageConfig[] = [
  {
    id: "drone_high",
    title: "FPV DRONE GRID DIVE",
    tagline: "Vogelperspektive Startaufstellung · Formationsüberflug",
    altitude: "120 METER",
    speed: "185 KM/H",
    gForce: "1.2 G",
    image: "/img/bugatti-drone-high.jpg",
    spec: "5× BUGATTI FORMATION (CHIRON, BOLIDE, DIVO, PUR SPORT)"
  },
  {
    id: "bumper_apex",
    title: "30CM BUMPER LOCK",
    tagline: "Frontaler Sturzflug auf Stoßstangenhöhe · Hufeisen-Grill",
    altitude: "0.3 METER",
    speed: "0 KM/H (STAND)",
    gForce: "0.0 G",
    image: "/img/bugatti-bumper-level.jpg",
    spec: "BUGATTI ENAMEL MACARON & CRYSTAL QUAD-LED LASER"
  },
  {
    id: "drift_apex",
    title: "TWILIGHT APEX DRIFT",
    tagline: "Highspeed-Schikane · Glühende Carbon-Keramik-Bremsscheiben",
    altitude: "1.2 METER",
    speed: "260 KM/H",
    gForce: "1.85 G",
    image: "/img/bugatti-drift.jpg",
    spec: "BLUE TITANIUM EXHAUST FLAME & ROOSTER WATER PLUME"
  },
  {
    id: "cockpit_pov",
    title: "400 KM/H HYPER-COCKPIT",
    tagline: "Schweizer Uhrmacher-Präzisionsinstrumente · Nachtflug",
    altitude: "0.9 METER",
    speed: "420 KM/H",
    gForce: "1.4 G",
    image: "/img/bugatti-cockpit.jpg",
    spec: "SKELETON TITANIUM GAUGES BY SWISS HOROLOGISTS"
  }
];

export default function HeroSection() {
  const [currentStage, setCurrentStage] = useState<PerspectiveStage>("drone_high");
  const [liveSpeed, setLiveSpeed] = useState(185);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const activeConfig = STAGES.find((s) => s.id === currentStage) || STAGES[0];

  // Dynamic speedometer simulation
  useEffect(() => {
    let target = 185;
    if (currentStage === "drone_high") target = 190;
    if (currentStage === "bumper_apex") target = 0;
    if (currentStage === "drift_apex") target = 265;
    if (currentStage === "cockpit_pov") target = 432;

    const interval = setInterval(() => {
      setLiveSpeed((prev) => {
        if (prev < target) return Math.min(target, prev + 12);
        if (prev > target) return Math.max(target, prev - 15);
        return target;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [currentStage]);

  // Stage Switch Handler with Spatial Audio
  const handleStageSelect = (stageId: PerspectiveStage) => {
    setCurrentStage(stageId);
    sound.playTelemetryBeep();
    if (stageId === "drone_high" || stageId === "bumper_apex") {
      sound.playDroneWhoosh();
    } else {
      sound.playW16Rev();
    }
  };

  const handleTestDriveRev = () => {
    sound.setMuted(false);
    sound.playW16Rev();
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-69px)] overflow-hidden bg-[#07090E] text-white flex flex-col justify-between scanline select-none">
      
      {/* =========================================================================
          1. CINEMATIC BACKDROP WITH HIGH-CONTRAST DUST & VIGNETTE
      ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConfig.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={activeConfig.image}
              alt={activeConfig.title}
              fill
              priority
              className="object-cover object-center brightness-95"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered High-Octane Contrast Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/95 via-[#07090E]/70 to-[#07090E]/35 lg:via-[#07090E]/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-[#07090E]/75" />
        
        {/* Electric Cyan & Racing Blue Ambient Beams */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-[550px] w-[550px] rounded-full bg-[#0026FF]/15 blur-[150px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-[#00E5FF]/10 blur-[140px]" />
      </div>

      {/* =========================================================================
          2. TOP CONTROL HUD: DRONE FLIGHT ALTITUDE & STAGE CONTROLLER
      ========================================================================= */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
          
          {/* Flight Path Mode Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-xl">
            <span className="flex items-center gap-1 px-3 text-[10px] font-mono-telemetry uppercase tracking-widest text-[#00E5FF]">
              <Compass className="h-3 w-3 animate-spin text-[#00E5FF]" style={{ animationDuration: "12s" }} />
              <span className="hidden sm:inline">DROHNE:</span>
            </span>

            {STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(stage.id)}
                className={`relative flex items-center gap-1.5 rounded-full px-3 py-1 text-[10.5px] font-mono-telemetry uppercase tracking-wider transition-all duration-300 ${
                  currentStage === stage.id
                    ? "bg-[#0026FF] text-white font-medium shadow-[0_0_15px_rgba(0,38,255,0.6)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-[9px] opacity-50">0{idx + 1}</span>
                <span>{stage.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Telemetry Status Capsule */}
          <div className="flex items-center gap-3 text-xs font-mono-telemetry text-white/70">
            <div className="flex items-center gap-1.5 rounded-xs border border-white/10 bg-white/5 px-2.5 py-1">
              <Activity className="h-3 w-3 text-[#00E5FF]" />
              <span className="text-white/40">HÖHE:</span>
              <span className="text-white font-medium">{activeConfig.altitude}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 rounded-xs border border-white/10 bg-white/5 px-2.5 py-1">
              <Zap className="h-3 w-3 text-[#00E5FF]" />
              <span className="text-white/40">G-FORCE:</span>
              <span className="text-white font-medium">{activeConfig.gForce}</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. MAIN STAGE: ASYMMETRIC FORGE AUTOMOTIVE TELEMETRY COMPOSITION
      ========================================================================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-6 lg:px-8 flex-1 flex items-center">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 w-full">
          
          {/* -------------------------------------------------------------------
              LEFT: THE KINETIC MASTERHEAD (7 Columns)
          ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Exclusivity Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start rounded-xs border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-3 py-1 backdrop-blur-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#00E5FF]" />
              <span className="font-mono-telemetry text-[10.5px] font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
                AUTOWELT SCHWEIZ AG · OFF-MARKET HYPERCAR ALLOCATION
              </span>
            </motion.div>

            {/* Brutalist Fast & Furious Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 font-display-hyper text-5xl font-black uppercase leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]"
            >
              DIE SCHNELLSTEN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#0044FF] to-[#D1D5DB]">
                HYPERCARS DER ERDE.
              </span>
            </motion.h1>

            {/* Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-[#D1D5DB] sm:text-base font-light"
            >
              Ein Bugatti ist keine Maschine – er ist ein unbezähmbares physikalisches Monument. Über die <strong className="font-medium text-white">Autowelt Schweiz AG</strong> erhalten anspruchsvolle Sammler direkten Zugang zu weltweiten Quoten, Off-Market-Zuteilungen und Einzelstücken aus Molsheim.
            </motion.p>

            {/* Forge-Style Action Hub */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              {/* Primary Conic-Border Button */}
              <a
                href="#anfrage"
                onClick={() => sound.playTelemetryBeep()}
                className="conic-border-glow group relative inline-flex items-center gap-3 bg-[#0026FF] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(0,38,255,0.5)] transition-all duration-300 hover:bg-[#0038FF] hover:shadow-[0_0_40px_rgba(0,38,255,0.7)]"
              >
                <span>ALLOCATION ZÜRICH ANFRAGEN</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Sound Engine Rev Trigger */}
              <button
                onClick={handleTestDriveRev}
                className="group flex items-center gap-2.5 rounded-xs border border-white/20 bg-black/40 px-5 py-4 text-xs font-mono-telemetry uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#00E5FF] hover:bg-white/5"
              >
                <Flame className="h-4 w-4 text-[#E60000] transition-transform duration-300 group-hover:scale-125" />
                <span>W16 MOTORSTART ZÜNDEN</span>
              </button>
            </motion.div>

            {/* Molsheim Performance Pillars (Forge Automotive Telemetry) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 sm:grid-cols-4"
            >
              <div className="space-y-0.5 border-l border-[#00E5FF]/40 pl-3">
                <span className="font-mono-telemetry text-2xl font-bold tracking-tight text-white">
                  1,600 <span className="text-xs font-normal text-[#00E5FF]">PS</span>
                </span>
                <p className="font-mono-telemetry text-[10px] uppercase tracking-wider text-white/50">
                  LEISTUNG
                </p>
                <p className="text-[11px] text-white/80">1,177 kW @ 7,100 RPM</p>
              </div>

              <div className="space-y-0.5 border-l border-[#00E5FF]/40 pl-3">
                <span className="font-mono-telemetry text-2xl font-bold tracking-tight text-white">
                  1,600 <span className="text-xs font-normal text-[#00E5FF]">NM</span>
                </span>
                <p className="font-mono-telemetry text-[10px] uppercase tracking-wider text-white/50">
                  DREHMOMENT
                </p>
                <p className="text-[11px] text-white/80">2,000–6,000 RPM</p>
              </div>

              <div className="space-y-0.5 border-l border-[#00E5FF]/40 pl-3">
                <span className="font-mono-telemetry text-2xl font-bold tracking-tight text-white">
                  2.4 <span className="text-xs font-normal text-[#00E5FF]">S</span>
                </span>
                <p className="font-mono-telemetry text-[10px] uppercase tracking-wider text-white/50">
                  0–100 KM/H
                </p>
                <p className="text-[11px] text-white/80">0–300 in 12.1s</p>
              </div>

              <div className="space-y-0.5 border-l border-[#00E5FF]/40 pl-3">
                <span className="font-mono-telemetry text-2xl font-bold tracking-tight text-white">
                  440 <span className="text-xs font-normal text-[#00E5FF]">KM/H</span>
                </span>
                <p className="font-mono-telemetry text-[10px] uppercase tracking-wider text-white/50">
                  V-MAX
                </p>
                <p className="text-[11px] text-white/80">Elektronisch limitiert</p>
              </div>
            </motion.div>

          </div>

          {/* -------------------------------------------------------------------
              RIGHT: LIVE TELEMETRY COCKPIT CARD (5 Columns)
          ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 }}
              className="relative w-full max-w-[390px] rounded-xs border border-white/15 bg-[#0B0F19]/90 p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-[#00E5FF]/20"
            >
              
              {/* Precision Laser Brackets */}
              <div className="pointer-events-none absolute -left-[1px] -top-[1px] h-3 w-3 border-l-2 border-t-2 border-[#00E5FF]" />
              <div className="pointer-events-none absolute -right-[1px] -top-[1px] h-3 w-3 border-r-2 border-t-2 border-[#00E5FF]" />
              <div className="pointer-events-none absolute -bottom-[1px] -left-[1px] h-3 w-3 border-b-2 border-l-2 border-[#00E5FF]" />
              <div className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 border-[#00E5FF]" />

              {/* Header Telemetry Status */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="font-mono-telemetry text-[10.5px] uppercase tracking-widest text-[#00E5FF]">
                    TELEMETRIE · MOLSHEIM OS
                  </span>
                </div>
                <span className="font-mono-telemetry text-[10px] tracking-wider text-white/40">
                  CH-8302 KLOTEN
                </span>
              </div>

              {/* Dynamic Digital Speed Gauge */}
              <div className="mt-3 rounded-xs border border-white/10 bg-[#070A11] p-3 text-center">
                <span className="font-mono-telemetry text-[10px] uppercase tracking-widest text-white/40">
                  ECHTZEIT-GESCHWINDIGKEIT
                </span>
                <div className="mt-1 flex items-baseline justify-center gap-2">
                  <span className="font-mono-telemetry text-5xl font-extrabold tracking-tight text-white tabular-nums">
                    {liveSpeed}
                  </span>
                  <span className="font-mono-telemetry text-sm font-semibold text-[#00E5FF]">
                    KM/H
                  </span>
                </div>
                {/* Speed bar line */}
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00E5FF] to-[#0026FF] transition-all duration-300"
                    style={{ width: `${(liveSpeed / 440) * 100}%` }}
                  />
                </div>
              </div>

              {/* Active Perspective Telemetry Details */}
              <div className="mt-3.5 space-y-2 text-xs font-mono-telemetry">
                <div className="flex items-center justify-between border-b border-white/5 py-1">
                  <span className="text-white/50">MODUS:</span>
                  <span className="font-medium text-white">{activeConfig.title}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 py-1">
                  <span className="text-white/50">FLUGHÖHE:</span>
                  <span className="text-[#00E5FF] font-medium">{activeConfig.altitude}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 py-1">
                  <span className="text-white/50">MOTOR:</span>
                  <span className="text-white">8.0L W16 QUAD-TURBO</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-white/50">ZUTEILUNG:</span>
                  <span className="text-emerald-400 font-semibold">SOFORT VERFÜGBAR</span>
                </div>
              </div>

              {/* Perspective Quick Switch Buttons inside Card */}
              <div className="mt-4 grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                {STAGES.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => handleStageSelect(stage.id)}
                    className={`rounded-xs border px-2 py-1.5 text-left font-mono-telemetry text-[10px] uppercase transition-all duration-300 ${
                      currentStage === stage.id
                        ? "border-[#00E5FF] bg-[#00E5FF]/10 text-white font-medium"
                        : "border-white/10 bg-white/[0.02] text-white/50 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="block truncate">{stage.title.split(" ")[0]}</span>
                    <span className="block text-[9px] text-white/30 truncate">{stage.altitude}</span>
                  </button>
                ))}
              </div>

              {/* VIP Besichtigung CTA */}
              <a
                href="#anfrage"
                onClick={() => sound.playTelemetryBeep()}
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xs border border-white/20 bg-white/5 py-2.5 text-center font-mono-telemetry text-[11px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#00E5FF] hover:bg-white/10"
              >
                <span>Private Besichtigung vereinbaren</span>
                <ChevronRight className="h-3.5 w-3.5 text-[#00E5FF]" />
              </a>

            </motion.div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          4. ARCHITECTURAL BOTTOM MARQUEE: MOLSHEIM & ZÜRICH DNA
      ========================================================================= */}
      <div className="relative z-10 border-t border-white/10 bg-[#07090E]/95 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 text-[11px] font-mono-telemetry text-white/60 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-white font-medium">MODELLREIHEN ALLOKATION:</span>
          </div>
          <span className="hover:text-white transition-colors">BUGATTI TOURBILLON (V16 HYBRID)</span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white transition-colors">CHIRON SUPER SPORT 300+</span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white transition-colors">BUGATTI BOLIDE (TRACK WEAPON)</span>
          <span className="text-white/20">·</span>
          <span className="hover:text-white transition-colors">W16 MISTRAL ROADSTER</span>
        </div>
      </div>

    </section>
  );
}