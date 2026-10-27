"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Shield, Radio, ArrowUpRight } from "lucide-react";
import { sound } from "@/lib/audio";

export default function Navbar() {
  const [isAudioLive, setIsAudioLive] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("de-CH", {
          timeZone: "Europe/Zurich",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSound = () => {
    const nextState = sound.toggleMute();
    setIsAudioLive(nextState);
    if (nextState) {
      sound.playW16Rev();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#07090E]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        
        {/* Brand Group */}
        <div className="flex items-center gap-4">
          <a href="#" className="group flex items-center gap-3">
            {/* Bugatti / Autowelt Emblem */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xs border border-[#00E5FF]/40 bg-[#0B101D] text-[#00E5FF] shadow-[0_0_20px_-4px_rgba(0,229,255,0.4)] transition-transform group-hover:scale-105">
              <span className="font-mono-telemetry text-xs font-bold tracking-tighter text-[#00E5FF]">EB</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display-hyper text-sm font-bold uppercase tracking-wider text-white">
                  AUTOWELT SCHWEIZ
                </span>
                <span className="rounded-xs bg-[#E60000] px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider text-white">
                  BUGATTI
                </span>
              </div>
              <span className="font-mono-telemetry text-[10px] tracking-widest text-white/45">
                OFFICIAL HYPERCAR ALLOCATION · ZÜRICH
              </span>
            </div>
          </a>
        </div>

        {/* Center Live Telemetry */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono-telemetry text-white/70">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#00E5FF] opacity-75" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            </span>
            <span className="text-white/40">ZRH</span>
            <span className="text-white font-medium">{time || "08:42:15"}</span>
            <span className="text-white/20">|</span>
            <span className="text-[#00E5FF]">CIRCUIT TRACK · DUSK</span>
          </div>
        </div>

        {/* Right Action Hub: Sound & Allocation Button */}
        <div className="flex items-center gap-3.5">
          
          {/* Audio Engine Trigger */}
          <button
            onClick={handleToggleSound}
            className={`group flex items-center gap-2 rounded-xs border px-3 py-1.5 text-xs font-mono-telemetry uppercase tracking-wider transition-all duration-300 ${
              isAudioLive
                ? "border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                : "border-white/15 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
            }`}
          >
            {isAudioLive ? (
              <>
                <Volume2 className="h-3.5 w-3.5 animate-pulse text-[#00E5FF]" />
                <span className="hidden sm:inline">W16 AUDIO: LIVE</span>
                {/* Visualizer bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-[#00E5FF] h-2 animate-pulse" />
                  <span className="w-0.5 bg-[#00E5FF] h-3 animate-ping" />
                  <span className="w-0.5 bg-[#00E5FF] h-1.5 animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5 text-white/40" />
                <span className="hidden sm:inline">W16 SOUND: OFF</span>
              </>
            )}
          </button>

          {/* Allocation CTA with Forge Automotive Conic Glow */}
          <a
            href="#anfrage"
            onClick={() => sound.playTelemetryBeep()}
            className="conic-border-glow group relative inline-flex items-center gap-2 bg-[#0026FF] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#0038FF] hover:shadow-[0_0_25px_rgba(0,38,255,0.6)]"
          >
            <span className="relative z-10">ALLOCATION ANFRAGEN</span>
            <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

        </div>

      </div>
    </header>
  );
}