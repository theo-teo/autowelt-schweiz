"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, MapPin, ShieldCheck, Sun, Moon } from "lucide-react";

export interface FleetVehicle {
  id: string;
  brand: string;
  model: string;
  ghostTitle: string;
  tagline: string;
  dayImage: string;
  nightImage: string;
  engine: string;
  power: string;
  acceleration: string;
  location: string;
  status: string;
  officialUrl: string;
  headlightSignature: string;
}

const FLEET_DATA: FleetVehicle[] = [
  {
    id: "porsche-gt3rs",
    brand: "PORSCHE",
    model: "911 GT3 RS",
    ghostTitle: "911 GT3 RS.",
    tagline: "Aerodynamische Perfektion aus Flacht mit DRS-Flügelsystem für Schweizer Alpenpässe.",
    dayImage: "/media/inventory/porsche-dsc2708.jpg",
    nightImage: "/media/inventory/porsche-hero.jpg",
    engine: "4.0L Sauger-Boxer",
    power: "525 PS / 9'000 U/min",
    acceleration: "0–100 km/h: 3.2s",
    location: "Atelier Glattpark · Lindbergh-Allee 1",
    status: "Allokation gesichert",
    officialUrl: "https://www.autoweltschweiz.ch/porsche/",
    headlightSignature: "4-Punkt LED-Matrix aktiv",
  },
  {
    id: "lamborghini-svj",
    brand: "LAMBORGHINI",
    model: "Aventador SVJ Roadster",
    ghostTitle: "AVENTADOR SVJ.",
    tagline: "Kompromissloser V12-Sauger in Bianco Monocerus mit aktiver Aerodynamik ALA 2.0.",
    dayImage: "/media/inventory/lamborghini-svj-roadster.jpg",
    nightImage: "/media/inventory/lamborghini-hero.jpg",
    engine: "6.5L V12 Saugmotor",
    power: "770 PS / 720 Nm",
    acceleration: "0–100 km/h: 2.9s",
    location: "Showroom Zürich · Badenerstrasse 567",
    status: "Verfügbar",
    officialUrl: "https://www.autoweltschweiz.ch/lamborghini/",
    headlightSignature: "Y-förmige Laser-Signatur aktiv",
  },
  {
    id: "hofele-hg63",
    brand: "HOFELE / MERCEDES",
    model: "Hofele HG63 'Bespoke Luxury'",
    ghostTitle: "HG63 BESPOKE.",
    tagline: "Exklusive Veredelungsikone in Schwarzglanz auf Basis des Mercedes-AMG G63.",
    dayImage: "/media/inventory/mercedes-hofele-g63.jpg",
    nightImage: "/media/inventory/mercedes-benz-hero.jpg",
    engine: "4.0L V8 Biturbo",
    power: "585 PS / 850 Nm",
    acceleration: "0–100 km/h: 4.5s",
    location: "Zürich Showroom Lounge",
    status: "Verfügbar",
    officialUrl: "https://www.autoweltschweiz.ch/mercedes-benz/",
    headlightSignature: "Multibeam LED Ringe aktiv",
  },
  {
    id: "ferrari-sf90",
    brand: "FERRARI",
    model: "SF90 Stradale",
    ghostTitle: "SF90 STRADALE.",
    tagline: "Maranello Hybrid-Technologie mit 1'000 PS Systemleistung in klassischem Rosso Corsa.",
    dayImage: "/media/inventory/ferrari-hero.jpg",
    nightImage: "/media/inventory/ferrari-hero.jpg",
    engine: "V8 Turbo + 3 E-Motoren",
    power: "1'000 PS Hybrid",
    acceleration: "0–100 km/h: 2.5s",
    location: "Private Collector Vault",
    status: "Allokation gesichert",
    officialUrl: "https://www.autoweltschweiz.ch/ferrari/",
    headlightSignature: "Horizontale Matrix-LEDs aktiv",
  },
  {
    id: "bugatti-tourbillon",
    brand: "BUGATTI",
    model: "Bugatti Tourbillon",
    ghostTitle: "TOURBILLON.",
    tagline: "Molsheim V16-Saugmotor mit Uhrmacher-Mechanik und unübertroffener Handwerkskunst.",
    dayImage: "/media/inventory/bugatti-home.jpg",
    nightImage: "/media/inventory/bugatti-hero.jpg",
    engine: "Cosworth 8.3L V16",
    power: "1'800 PS Hybrid",
    acceleration: "0–100 km/h: 2.0s",
    location: "Direct Factory Allocation",
    status: "Auf Anfrage",
    officialUrl: "https://www.autoweltschweiz.ch/bugatti/",
    headlightSignature: "4-LED Hufeisen-Flutlicht aktiv",
  },
  {
    id: "koenigsegg-jesko",
    brand: "KOENIGSEGG",
    model: "Jesko Attack",
    ghostTitle: "JESKO ATTACK.",
    tagline: "Schwedische Megacar-Ingenieurkunst mit Light Speed Transmission und 1'400 kg Downforce.",
    dayImage: "/media/inventory/koenigsegg-banner.jpg",
    nightImage: "/media/inventory/koenigsegg-banner.jpg",
    engine: "5.0L V8 Twin-Turbo",
    power: "1'600 PS (E85)",
    acceleration: "0–100 km/h: 2.4s",
    location: "Direct Factory Allocation",
    status: "Auf Anfrage",
    officialUrl: "https://www.autoweltschweiz.ch/koenigsegg/",
    headlightSignature: "Aero-Laserlicht aktiv",
  },
];

interface ScrollytellingFleetStageProps {
  mode: "day" | "night";
}

export default function ScrollytellingFleetStage({ mode }: ScrollytellingFleetStageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const car = FLEET_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FLEET_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FLEET_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#0B0D10] text-[#F4F0E9] border-t border-white/10 overflow-hidden">
      
      {/* Background Architectural Grid & Subtle Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(195,173,144,0.06),transparent_80%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Editorial Section Header inspired by Viktor Oddy reference */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span className="font-mono-tag text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#C3AD90]">
              (01) — THE STANDARD · AUTOWELT SCHWEIZ
            </span>
          </div>

          <h2 className="mt-3 font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#F4F0E9] leading-[1.08]">
            Every vehicle in our atelier <br className="hidden sm:inline" />
            <span className="text-white/60">is chosen for one thing:</span> <br />
            <span className="text-[#C3AD90] italic font-light lowercase">the emotion it ignites.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-white/70 max-w-xl font-light leading-relaxed">
            Five icons, one Swiss standard. Each car is fully documented, inspected in our Glattpark Atelier, and waiting wherever your journey begins.
          </p>
        </div>

        {/* Thumbnail Car Lineup Bar (IMG_8748 & IMG_8749 Style) */}
        <div className="mt-12 flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {FLEET_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`group flex items-center gap-2.5 rounded-xs px-3.5 py-2 text-xs font-mono-tag uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                currentIndex === idx
                  ? "bg-[#C3AD90] text-[#0B0D10] font-semibold shadow-lg shadow-[#C3AD90]/10"
                  : "border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              <span className="text-[10px] opacity-60">0{idx + 1}</span>
              <span>{item.brand} {item.model}</span>
            </button>
          ))}
        </div>

        {/* Interactive Car Stage Container (IMG_8750 Style) */}
        <div className="relative mt-8 min-h-[460px] sm:min-h-[540px] flex flex-col justify-between items-center rounded-xs border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-10 overflow-hidden">
          
          {/* Ghosted Large Typography in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="font-editorial text-[14vw] font-bold uppercase tracking-tighter text-white/[0.025] whitespace-nowrap">
              {car.ghostTitle}
            </span>
          </div>

          {/* Active Headlight Glow Indicator (Day vs Night Mode) */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-[#0B0D10]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xs text-[10px] font-mono-tag">
            <span className={`h-2 w-2 rounded-full ${mode === "night" ? "bg-amber-300 shadow-[0_0_8px_#fde047]" : "bg-emerald-400"}`} />
            <span className="uppercase text-white/80">
              {mode === "night" ? `Nachtscheinwerfer: ${car.headlightSignature}` : "Tageslicht Präsentation"}
            </span>
          </div>

          {/* Vehicle Visual Showcase with Smooth Transition */}
          <div className="relative z-10 w-full max-w-4xl h-56 sm:h-80 my-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${car.id}-${mode}`}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={mode === "night" ? car.nightImage : car.dayImage}
                  alt={car.model}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />

                {/* Night Headlight Beam Simulation Overlay */}
                {mode === "night" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/10 via-transparent to-transparent pointer-events-none mix-blend-screen" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimalist Floating Cards (IMG_8750 exact pattern) */}
          <div className="relative z-10 w-full max-w-4xl mt-6 flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/10">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="flex items-center justify-center h-12 w-12 rounded-xs border border-white/15 bg-white/[0.03] text-white hover:border-[#C3AD90] hover:text-[#C3AD90] transition-colors"
              aria-label="Vorheriges Fahrzeug"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Card 1: Model & Performance */}
            <div className="flex-1 min-w-[180px] rounded-xs border border-white/10 bg-[#0B0D10]/70 p-3 sm:p-4 backdrop-blur-md">
              <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#C3AD90]">
                Modell & Leistung
              </p>
              <h4 className="mt-0.5 font-editorial text-base sm:text-lg font-normal text-white">
                {car.brand} {car.model}
              </h4>
              <p className="text-[11px] font-mono-tag text-white/60">
                {car.power} · {car.engine}
              </p>
            </div>

            {/* Card 2: Location & Atelier */}
            <div className="flex-1 min-w-[180px] rounded-xs border border-white/10 bg-[#0B0D10]/70 p-3 sm:p-4 backdrop-blur-md">
              <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#C3AD90] flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Standort Zürich
              </p>
              <h4 className="mt-0.5 font-editorial text-sm sm:text-base font-normal text-white">
                {car.location}
              </h4>
              <p className="text-[11px] font-mono-tag text-emerald-400">
                Status: {car.status}
              </p>
            </div>

            {/* Card 3: Direct Action CTA */}
            <div className="flex-1 min-w-[180px] rounded-xs border border-[#C3AD90]/30 bg-[#C3AD90]/10 p-3 sm:p-4 backdrop-blur-md flex flex-col justify-between">
              <div>
                <p className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#C3AD90]">
                  Offizieller Erwerb
                </p>
                <p className="text-[11px] font-mono-tag text-white/80">
                  {car.acceleration}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href={car.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#C3AD90] hover:text-white transition-colors"
                >
                  <span>Atelier Zuteilung</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex items-center justify-center h-12 w-12 rounded-xs border border-white/15 bg-white/[0.03] text-white hover:border-[#C3AD90] hover:text-[#C3AD90] transition-colors"
              aria-label="Nächstes Fahrzeug"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>

        {/* Closing Concierge Trust Bar (IMG_8751 Style) */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#F4F0E9]">
              Ready when you are.
            </h3>
            <p className="mt-1 text-xs text-white/60 font-light">
              You take the wheel. We take care of transport, escrow, and custom configuration.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono-tag text-xs text-white/70">
            <div>
              <span className="text-[#C3AD90] block text-[9.5px] uppercase">Private Concierge:</span>
              <a href="tel:+41448885577" className="hover:text-white transition-colors">+41 44 888 55 77</a>
            </div>
            <div className="h-6 w-px bg-white/15" />
            <div>
              <span className="text-[#C3AD90] block text-[9.5px] uppercase">Standorte:</span>
              <span>Zürich · Glattpark · Genf</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
