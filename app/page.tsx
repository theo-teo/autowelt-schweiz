"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import CinematicHero from "@/components/CinematicHero";
import ScrollytellingFleetStage from "@/components/ScrollytellingFleetStage";
import AtelierSection from "@/components/AtelierSection";
import CollectorVault from "@/components/CollectorVault";
import ConciergeBooking from "@/components/ConciergeBooking";
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
    <main className="min-h-screen bg-[#0B0D10] text-[#F4F0E9] flex flex-col selection:bg-[#C3AD90]/25 selection:text-[#F4F0E9] scroll-smooth">
      {/* Mercedes-Benz Caliber Header with Brand Portfolio Dropdown */}
      <SiteHeader mode={mode} onToggleMode={setMode} />
      
      {/* Phase 00: The Alpine Circuit Cinematic Video Hero Stage */}
      <CinematicHero mode={mode} />

      {/* Phase 01: Scrollytelling Interactive Fleet Stage (Viktor Oddy / Opus 5.5 Architecture) */}
      <ScrollytellingFleetStage mode={mode} />

      {/* Phase 02: Glattpark High-Tech Atelier & Hofele Bespoke Veredelung */}
      <AtelierSection />

      {/* Phase 03: Off-Market Collector Vault (Bugatti, Pagani, Koenigsegg Escrow) */}
      <CollectorVault />

      {/* Phase 04: Private Concierge & VIP Appointment Booking (Zürich Badenerstrasse) */}
      <ConciergeBooking />

      {/* Persistent Fullscreen Sortiment Drawer */}
      <SortimentDrawer
        isOpen={sortimentOpen}
        onClose={() => setSortimentOpen(false)}
        selectedBrandFilter={selectedBrand}
      />
    </main>
  );
}
