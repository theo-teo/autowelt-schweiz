import React from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroActionsProps {
  onOpenSortiment?: () => void;
}

export default function HeroActions({ onOpenSortiment }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
      {/* Primary CTA: Open Interactive Sortiment Showcase */}
      <button
        onClick={onOpenSortiment}
        className="inline-flex items-center justify-center gap-2 rounded-xs bg-[#F4F0E9] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0D10] transition-all hover:bg-white hover:shadow-lg cursor-pointer"
        aria-label="Fahrzeug Sortiment & Allokationen öffnen"
      >
        <span>EXPLORE SORTIMENT</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </button>

      {/* Secondary CTA: Official Private Viewing */}
      <a
        href="https://www.autoweltschweiz.ch/kontakt/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xs border border-[#C3AD90]/40 bg-[#0B0D10]/60 px-6 py-3.5 text-xs font-mono-tag uppercase tracking-wider text-[#F4F0E9] backdrop-blur-sm transition-colors hover:border-[#C3AD90] hover:text-[#C3AD90]"
        aria-label="Request a Private Viewing on official Autowelt Schweiz contact page"
      >
        <span>REQUEST A PRIVATE VIEWING</span>
      </a>
    </div>
  );
}
