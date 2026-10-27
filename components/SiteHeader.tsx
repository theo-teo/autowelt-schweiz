"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import DayNightToggle from "@/components/DayNightToggle";

const BRANDS = [
  { name: "Porsche", href: "https://www.autoweltschweiz.ch/porsche/" },
  { name: "Ferrari", href: "https://www.autoweltschweiz.ch/ferrari/" },
  { name: "Lamborghini", href: "https://www.autoweltschweiz.ch/lamborghini/" },
  { name: "Bugatti", href: "https://www.autoweltschweiz.ch/bugatti/" },
  { name: "Koenigsegg", href: "https://www.autoweltschweiz.ch/koenigsegg/" },
  { name: "Pagani", href: "https://www.autoweltschweiz.ch/pagani/" },
  { name: "Aston Martin", href: "https://www.autoweltschweiz.ch/aston-martin/" },
  { name: "Bentley", href: "https://www.autoweltschweiz.ch/bentley/" },
  { name: "Mercedes-Benz", href: "https://www.autoweltschweiz.ch/mercedes-benz/" },
  { name: "McLaren & Rolls-Royce", href: "https://www.autoweltschweiz.ch/fahrzeuge/" },
];

interface SiteHeaderProps {
  mode: "day" | "night";
  onToggleMode: (mode: "day" | "night") => void;
}

export default function SiteHeader({ mode, onToggleMode }: SiteHeaderProps) {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F4F0E9]/[0.08] bg-[#0B0D10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        
        {/* Brand Group */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.autoweltschweiz.ch/"
            className="flex flex-col text-left transition-opacity hover:opacity-80"
            aria-label="Autowelt Schweiz AG Home"
          >
            <span className="font-editorial text-sm font-semibold tracking-wider text-[#F4F0E9]">
              AUTOWELT SCHWEIZ
            </span>
            <span className="font-mono-tag text-[9px] uppercase tracking-[0.2em] text-[#C3AD90]">
              AUTOMOTIVE ATELIER · ZÜRICH
            </span>
          </a>

          {/* Mercedes-Benz Inspired Clean Brand Dropdown (Desktop) */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setBrandsOpen(!brandsOpen)}
              onBlur={() => setTimeout(() => setBrandsOpen(false), 250)}
              className="inline-flex items-center gap-1.5 rounded-xs border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono-tag uppercase tracking-wider text-[#F4F0E9]/80 transition-colors hover:border-[#C3AD90] hover:text-[#F4F0E9]"
              aria-expanded={brandsOpen}
              aria-label="Marken Portfolio Auswählen"
            >
              <span>Marken Portfolio</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${brandsOpen ? "rotate-180 text-[#C3AD90]" : ""}`} />
            </button>

            {brandsOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xs border border-[#F4F0E9]/15 bg-[#0B0D10]/98 p-2 shadow-2xl backdrop-blur-xl z-50">
                <div className="px-2.5 py-1.5 text-[9.5px] font-mono-tag uppercase tracking-widest text-[#C3AD90] border-b border-white/10">
                  Offizielle Marken & Allokationen
                </div>
                <div className="mt-1 divide-y divide-white/5">
                  {BRANDS.map((brand) => (
                    <a
                      key={brand.name}
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-2.5 py-2 text-xs font-mono-tag text-[#F4F0E9]/80 transition-colors hover:bg-white/5 hover:text-[#C3AD90]"
                    >
                      <span>{brand.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center/Right Nav Links & Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          <nav
            className="hidden lg:flex items-center gap-6 text-xs font-mono-tag uppercase tracking-wider text-[#F4F0E9]/70"
            aria-label="Main Navigation"
          >
            <a
              href="https://autoweltschweiz.ch/fahrzeuge/"
              className="transition-colors hover:text-[#F4F0E9]"
            >
              Fahrzeuge
            </a>
            <a
              href="https://www.autoweltschweiz.ch/ueberuns/"
              className="transition-colors hover:text-[#F4F0E9]"
            >
              Über uns
            </a>
            <a
              href="https://www.autoweltschweiz.ch/kontakt/"
              className="transition-colors hover:text-[#F4F0E9]"
            >
              Kontakt
            </a>
          </nav>

          {/* Day / Night Mood Switcher */}
          <DayNightToggle mode={mode} onToggle={onToggleMode} />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-xs border border-white/10 text-white/70 hover:text-white"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0D10]/98 px-5 py-4 divide-y divide-white/10">
          <div className="py-2 space-y-1">
            <p className="font-mono-tag text-[9.5px] uppercase tracking-widest text-[#C3AD90]">
              Markenportfolio
            </p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {BRANDS.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xs border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-mono-tag text-[#F4F0E9]/80 hover:border-[#C3AD90] hover:text-[#C3AD90]"
                >
                  {brand.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-3 pb-1 flex justify-between items-center text-xs font-mono-tag uppercase text-white/60">
            <a href="https://autoweltschweiz.ch/fahrzeuge/" className="hover:text-white">Fahrzeuge</a>
            <a href="https://www.autoweltschweiz.ch/ueberuns/" className="hover:text-white">Über uns</a>
            <a href="https://www.autoweltschweiz.ch/kontakt/" className="hover:text-white">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  );
}
