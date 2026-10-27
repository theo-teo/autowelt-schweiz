"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import CinematicHero from "@/components/CinematicHero";

export default function Home() {
  const [mode, setMode] = useState<"day" | "night">("day");

  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F4F0E9] flex flex-col selection:bg-[#C3AD90]/25 selection:text-[#F4F0E9]">
      <SiteHeader mode={mode} onToggleMode={setMode} />
      <CinematicHero mode={mode} />
    </main>
  );
}
