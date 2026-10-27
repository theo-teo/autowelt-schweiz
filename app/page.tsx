"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import CinematicHero from "@/components/CinematicHero";
import ScrollytellingFleetStage from "@/components/ScrollytellingFleetStage";
import SortimentDrawer from "@/components/SortimentDrawer";

export default function Home() {
  const [mode, setMode] = useState<"day" | "night">("day");
  const [sortimentOpen, setSortimentOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleOpenSortiment = (brand?: string) => {
    setSelectedBrand(brand || null);
    setSortimentOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F4F0E9] flex flex-col selection:bg-[#C3AD90]/25 selection:text-[#F4F0E9]">
      <SiteHeader mode={mode} onToggleMode={setMode} />
      
      {/* 1. Cinematic Video Hero Stage */}
      <CinematicHero mode={mode} />

      {/* 2. Scrollytelling Interactive Fleet Stage (Inspired by Viktor Oddy reference) */}
      <ScrollytellingFleetStage mode={mode} />

      {/* 3. Official Full Sortiment Modal Drawer */}
      <SortimentDrawer
        isOpen={sortimentOpen}
        onClose={() => setSortimentOpen(false)}
        selectedBrandFilter={selectedBrand}
      />
    </main>
  );
}
