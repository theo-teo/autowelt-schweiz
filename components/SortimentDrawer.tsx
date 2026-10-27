"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowUpRight, ShieldCheck, Sparkles, Phone, Compass } from "lucide-react";

export interface SortimentItem {
  id: string;
  brand: string;
  model: string;
  category: string;
  image: string;
  description: string;
  officialLink: string;
  highlights: string[];
  allocationStatus: "Verfügbar" | "Allokation gesichert" | "Auf Anfrage";
}

export const SORTIMENT_ITEMS: SortimentItem[] = [
  {
    id: "lamborghini-svj",
    brand: "Lamborghini",
    model: "Aventador SVJ Roadster",
    category: "V12 Squadra Corse · Bianco Monocerus",
    image: "/media/inventory/lamborghini-svj-roadster.jpg",
    description: "770 PS Sauger-V12 mit ALA 2.0 Aerodynamica Lamborghini Attiva. Eines der seltensten und gefragtesten Sammler-Roadster weltweit.",
    officialLink: "https://www.autoweltschweiz.ch/lamborghini/",
    highlights: ["6.5L V12 Saugmotor", "770 PS / 720 Nm", "0-100 km/h: 2.9s", "Carbon Monocoque"],
    allocationStatus: "Verfügbar",
  },
  {
    id: "porsche-gt",
    brand: "Porsche",
    model: "911 GT3 RS & Heritage Atelier",
    category: "High-Downforce Rennsport · Weissach Paket",
    image: "/media/inventory/porsche-dsc2708.jpg",
    description: "Kompromisslose Motorsporttechnik mit DRS Flügelsystem und Doppelquerlenker-Vorderachse direkt aus Flacht für die Rennstrecke und Schweizer Pässe.",
    officialLink: "https://www.autoweltschweiz.ch/porsche/",
    highlights: ["4.0L 6-Zylinder Boxer", "525 PS / 9000 U/min", "DRS Aerodynamik", "Magnesium Schmiederäder"],
    allocationStatus: "Allokation gesichert",
  },
  {
    id: "hofele-hg63",
    brand: "Mercedes-Benz / Hofele",
    model: "Hofele HG63 'Bespoke Luxury'",
    category: "Atelier Veredelung · Schwarzglanz Edition",
    image: "/media/inventory/mercedes-hofele-g63.jpg",
    description: "Bespoke Designikone auf Basis des Mercedes-AMG G63 mit exklusivem Hofele Exterieurpaket, 24-Zoll Schmiederädern und handgenähtem Lederinterieur.",
    officialLink: "https://www.autoweltschweiz.ch/mercedes-benz/",
    highlights: ["4.0L V8 Biturbo", "585 PS / 850 Nm", "Hofele Bespoke Atelier", "Zürich Showroom Lounge"],
    allocationStatus: "Verfügbar",
  },
  {
    id: "ferrari-maranello",
    brand: "Ferrari",
    model: "SF90 Stradale & V12 Atelier",
    category: "Maranello Hybrid Hypercar · Rosso Corsa",
    image: "/media/inventory/ferrari-hero.jpg",
    description: "V8 Biturbo mit drei Elektromotoren und Allradantrieb. Die Synthese aus Scuderia Rennsporterfahrung und höchstem Gran Turismo Komfort.",
    officialLink: "https://www.autoweltschweiz.ch/ferrari/",
    highlights: ["1000 PS Systemleistung", "0-100 km/h: 2.5s", "Assetto Fiorano Allokation", "Offizielle Schweizer Herkunft"],
    allocationStatus: "Allokation gesichert",
  },
  {
    id: "bugatti-molsheim",
    brand: "Bugatti",
    model: "Bugatti Tourbillon & Chiron",
    category: "Molsheim Hypercar · Schweizer Zuteilung",
    image: "/media/inventory/bugatti-hero.jpg",
    description: "Unvergleichliche Uhrmacher-Mechanik und Hypercar-Ingenieurskunst. Zugang zu geschlossenen Werkskonfigurationen für Schweizer Bugatti-Liebhaber.",
    officialLink: "https://www.autoweltschweiz.ch/bugatti/",
    highlights: ["Cosworth V16 Sauger + Hybrid", "1800 PS Gesamtleistung", "Titan-Instrumententräger", "Streng limitierte Auflage"],
    allocationStatus: "Auf Anfrage",
  },
  {
    id: "koenigsegg-megacar",
    brand: "Koenigsegg",
    model: "Jesko & Gemera Megacars",
    category: "Swedish Innovation · Rekord-Aerodynamik",
    image: "/media/inventory/koenigsegg-banner.jpg",
    description: "Extreme Aerodynamik mit LST Light Speed Transmission und revolutionärem Freeventil-Antrieb. Weltweiter Zugang über Autowelt Schweiz.",
    officialLink: "https://www.autoweltschweiz.ch/koenigsegg/",
    highlights: ["1600 PS (E85)", "Light Speed Gearbox (LST)", "Aero Downforce 1400 kg", "Ängelholm Handfertigung"],
    allocationStatus: "Auf Anfrage",
  },
  {
    id: "pagani-arte",
    brand: "Pagani",
    model: "Utopia & Huayra Roadster",
    category: "San Cesario sul Panaro · Carbo-Titanium",
    image: "/media/inventory/pagani-hero.jpg",
    description: "Rollende Kunstwerke mit handgeschaltetem AMG-V12 Biturbo und unlackiertem Sichtcarbon. Höchste Sammler-Exklusivität.",
    officialLink: "https://www.autoweltschweiz.ch/pagani/",
    highlights: ["6.0L V12 Twin-Turbo AMG", "864 PS / 1100 Nm", "Manuelles 7-Gang-Getriebe", "Carbo-Titanium Monocoque"],
    allocationStatus: "Auf Anfrage",
  },
  {
    id: "aston-martin-gaydon",
    brand: "Aston Martin",
    model: "Valkyrie & DBS 770 Ultimate",
    category: "Gaydon Handcraft · Formel-1-DNA",
    image: "/media/inventory/aston-martin-hero.jpg",
    description: "Britisches Understatement und kompromisslose Adrian-Newey Aerodynamik. Exklusive Zuteilungen für Schweizer Enthusiasten.",
    officialLink: "https://www.autoweltschweiz.ch/aston-martin/",
    highlights: ["Cosworth 6.5L V12", "1160 PS Formel-1-Technik", "Underfloor Venturi-Kanäle", "Limitierte Sammlerzuteilung"],
    allocationStatus: "Allokation gesichert",
  },
  {
    id: "bentley-crewe",
    brand: "Bentley",
    model: "Continental GT Mulliner & Flying Spur",
    category: "Crewe Grand Touring · Souveräner Luxus",
    image: "/media/inventory/bentley-hero.jpg",
    description: "Höchste britische Handwerkskunst, diamanten-gestepptes Nappaleder und unerschöpfliche Souveränität für Schweizer Alpenfahrten.",
    officialLink: "https://www.autoweltschweiz.ch/bentley/",
    highlights: ["W12 / V8 Ultra-Performance", "Mulliner Handwerksmanufaktur", "Allradantrieb & Wankstabilisierung", "Zürich Showroom Lounge"],
    allocationStatus: "Verfügbar",
  },
];

interface SortimentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBrandFilter?: string | null;
}

export default function SortimentDrawer({ isOpen, onClose, selectedBrandFilter }: SortimentDrawerProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedBrandFilter || "ALLE");

  if (!isOpen) return null;

  const brands = ["ALLE", "PORSCHE", "FERRARI", "LAMBORGHINI", "BUGATTI", "KOENIGSEGG", "PAGANI", "MERCEDES-BENZ", "ASTON MARTIN", "BENTLEY"];

  const filteredItems = activeTab === "ALLE"
    ? SORTIMENT_ITEMS
    : SORTIMENT_ITEMS.filter((item) => item.brand.toUpperCase().includes(activeTab.toUpperCase()) || activeTab.toUpperCase().includes(item.brand.toUpperCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0D10]/90 backdrop-blur-xl transition-all">
      <div className="relative flex flex-col w-full h-full max-w-7xl max-h-[94vh] m-auto rounded-xs border border-white/10 bg-[#0B0D10] text-[#F4F0E9] shadow-2xl overflow-hidden">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#0B0D10]">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
              <span className="font-mono-tag text-[10px] uppercase tracking-[0.25em] text-[#C3AD90]">
                AUTOWELT SCHWEIZ · OFFIZIELLES SORTIMENT & ALLOKATIONEN
              </span>
            </div>
            <h2 className="mt-1 font-editorial text-2xl font-normal uppercase tracking-tight text-[#F4F0E9]">
              Exklusive Fahrzeug-Kollektion
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-xs border border-white/10 p-2 text-white/70 hover:border-white/40 hover:text-white transition-colors"
            aria-label="Sortiment Schliessen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Brand Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-white/5 px-6 py-3 overflow-x-auto no-scrollbar bg-white/[0.02]">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setActiveTab(b)}
              className={`rounded-xs px-3 py-1.5 text-xs font-mono-tag uppercase tracking-wider transition-all shrink-0 ${
                activeTab === b
                  ? "bg-[#C3AD90] text-[#0B0D10] font-semibold"
                  : "border border-white/10 text-white/60 hover:text-white hover:border-white/25"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Inventory Cards Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((car) => (
            <div
              key={car.id}
              className="group flex flex-col justify-between rounded-xs border border-white/10 bg-white/[0.02] hover:border-[#C3AD90]/60 transition-all duration-300 overflow-hidden"
            >
              {/* Car Image with Badge */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/50">
                <Image
                  src={car.image}
                  alt={car.model}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#0B0D10]/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded-xs">
                  <span className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#C3AD90]">
                    {car.brand}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-[#0B0D10]/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded-xs">
                  <span className="font-mono-tag text-[9px] uppercase tracking-wider text-[#F4F0E9]/80 flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {car.allocationStatus}
                  </span>
                </div>
              </div>

              {/* Vehicle Meta */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <p className="font-mono-tag text-[10px] uppercase tracking-widest text-[#C3AD90]">
                    {car.category}
                  </p>
                  <h3 className="mt-1 font-editorial text-xl font-normal text-[#F4F0E9]">
                    {car.model}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70 font-light">
                    {car.description}
                  </p>

                  {/* Technical Highlights */}
                  <div className="mt-4 grid grid-cols-2 gap-1.5 pt-3 border-t border-white/5">
                    {car.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] font-mono-tag text-white/55">
                        · {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <a
                    href={car.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono-tag text-[#C3AD90] hover:text-[#F4F0E9] transition-colors"
                  >
                    <span>Offizielle Seite</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href="https://www.autoweltschweiz.ch/kontakt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xs border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-mono-tag uppercase tracking-wider text-white hover:border-[#C3AD90] hover:bg-[#C3AD90] hover:text-[#0B0D10] transition-colors"
                  >
                    Anfragen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer Contact Bar */}
        <div className="border-t border-white/10 bg-[#0B0D10] px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tag text-white/60">
          <div className="flex items-center gap-3">
            <span className="text-[#C3AD90]">Autowelt Schweiz AG</span>
            <span>·</span>
            <span>Showroom: Badenerstrasse 567, Zürich</span>
            <span>·</span>
            <a href="tel:+41448885577" className="text-[#C3AD90] hover:underline">+41 44 888 55 77</a>
          </div>

          <div className="text-[10px] text-white/40 uppercase">
            Alle Marken & Daten stammen aus dem offiziellen Autowelt Schweiz Sortiment
          </div>
        </div>

      </div>
    </div>
  );
}
