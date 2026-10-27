import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#F4F0E9]/[0.08] bg-[#0B0D10]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        
        {/* Brand Group */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.autoweltschweiz.ch/"
            className="flex flex-col text-left transition-opacity hover:opacity-85"
            aria-label="Autowelt Schweiz AG Home"
          >
            <span className="font-editorial text-sm font-semibold tracking-wider text-[#F4F0E9]">
              AUTOWELT SCHWEIZ
            </span>
            <span className="font-mono-tag text-[9.5px] uppercase tracking-[0.2em] text-[#C3AD90]">
              AUTOMOTIVE ATELIER · ZÜRICH
            </span>
          </a>
        </div>

        {/* Lightweight Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs font-mono-tag uppercase tracking-widest text-[#F4F0E9]/70"
          aria-label="Main Navigation"
        >
          <a
            href="https://autoweltschweiz.ch/fahrzeuge/"
            className="transition-colors hover:text-[#F4F0E9]"
          >
            Fahrzeuge
          </a>
          <a
            href="https://www.autoweltschweiz.ch/porsche/"
            className="transition-colors hover:text-[#F4F0E9]"
          >
            Marken
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

        {/* Persistent Concept Demo Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 rounded-xs border border-[#C3AD90]/30 bg-[#C3AD90]/10 px-2.5 py-1 text-[9.5px] font-mono-tag uppercase tracking-wider text-[#C3AD90]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
            <span>INDEPENDENT CONCEPT DEMO</span>
          </div>
        </div>

      </div>
    </header>
  );
}
