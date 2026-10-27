import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
      {/* Primary CTA */}
      <a
        href="https://autoweltschweiz.ch/fahrzeuge/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xs bg-[#F4F0E9] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0B0D10] transition-colors hover:bg-white"
        aria-label="Explore Vehicles on official Autowelt Schweiz inventory"
      >
        <span>EXPLORE VEHICLES</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>

      {/* Secondary CTA */}
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
