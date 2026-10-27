"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

interface DayNightToggleProps {
  mode: "day" | "night";
  onToggle: (mode: "day" | "night") => void;
}

export default function DayNightToggle({ mode, onToggle }: DayNightToggleProps) {
  return (
    <div
      role="group"
      aria-label="Day and Night Mood Selection"
      className="inline-flex items-center gap-1 rounded-full border border-[#F4F0E9]/15 bg-[#0B0D10]/80 p-1 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={() => onToggle("day")}
        aria-pressed={mode === "day"}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono-tag uppercase tracking-wider transition-all duration-300 ${
          mode === "day"
            ? "bg-[#F4F0E9] text-[#0B0D10] font-medium shadow-sm"
            : "text-[#F4F0E9]/60 hover:text-[#F4F0E9]"
        }`}
      >
        <Sun className="h-3 w-3" aria-hidden="true" />
        <span>Day</span>
      </button>

      <button
        type="button"
        onClick={() => onToggle("night")}
        aria-pressed={mode === "night"}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono-tag uppercase tracking-wider transition-all duration-300 ${
          mode === "night"
            ? "bg-[#C3AD90] text-[#0B0D10] font-medium shadow-sm"
            : "text-[#F4F0E9]/60 hover:text-[#F4F0E9]"
        }`}
      >
        <Moon className="h-3 w-3" aria-hidden="true" />
        <span>Night</span>
      </button>
    </div>
  );
}
