"use client";

import React from "react";
import Image from "next/image";
import { Lock, ShieldCheck, KeyRound, ArrowUpRight, Award } from "lucide-react";

const VAULT_ITEMS = [
  {
    brand: "Bugatti Molsheim",
    model: "Tourbillon & Bolide",
    status: "Private Werkszuteilung",
    desc: "Persönliche Konfiguration im Château Saint-Jean. W16 & V16 Meisterwerke mit Schweizer Zulassungsbegleitung.",
    link: "https://www.autoweltschweiz.ch/bugatti/",
  },
  {
    brand: "Pagani Automobili",
    model: "Utopia & Huayra BC",
    status: "Strictly Off-Market",
    desc: "Unikate in Sichtcarbon und Carbo-Titanium. Direkter Kontakt nach San Cesario sul Panaro für Sammler in Zürich.",
    link: "https://www.autoweltschweiz.ch/pagani/",
  },
  {
    brand: "Koenigsegg",
    model: "Jesko Attack & Gemera",
    status: "Allokation gesichert",
    desc: "Schwedische Rekord-Megacars mit 1'600 PS. Diskrete Vermittlung über unser internationales Partnernetzwerk.",
    link: "https://www.autoweltschweiz.ch/koenigsegg/",
  },
];

export default function CollectorVault() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-8 bg-[#0B0D10] text-[#F4F0E9] border-t border-white/10 overflow-hidden">
      
      {/* Background Radial Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(195,173,144,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
              <span className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-[#C3AD90]">
                (03) — COLLECTOR VAULT · SCHWEIZER DISKRETION
              </span>
            </div>
            <h2 className="mt-2 font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-[#F4F0E9]">
              Off-Market Allokationen. <br />
              <span className="text-white/50">Direkter Manufaktur-Zugang.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Streng limitierte Hypercars werden nicht inseriert. Wir pflegen seit über zwei Jahrzehnten direkte Kontakte zu Werksteams und Sammlern weltweit und sichern Quoten mit Schweizer Treuhand-Sicherheit.
          </div>
        </div>

        {/* Cinematic Visual Banner */}
        <div className="mt-12 relative w-full aspect-[21/9] min-h-[300px] rounded-xs border border-white/10 overflow-hidden bg-black/80 shadow-2xl">
          <Image
            src="/media/collector_vault_hypercars.jpg"
            alt="Autowelt Schweiz Hypercar Collector Vault in Zürich mit Bugatti Tourbillon und Pagani Utopia"
            fill
            className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-black/40 pointer-events-none" />

          {/* Floating Vault Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 rounded-xs bg-[#0B0D10]/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-[10px] font-mono-tag uppercase tracking-widest text-[#C3AD90]">
            <Lock className="h-3.5 w-3.5" />
            <span>Diskrete Zürcher Allokationen</span>
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-lg">
            <span className="font-mono-tag text-[9.5px] uppercase tracking-wider text-white/60">
              Bugatti Tourbillon & Pagani Utopia Atelier
            </span>
            <p className="mt-1 font-editorial text-lg sm:text-2xl text-white">
              Das automobile Äquivalent eines Schweizer Private-Banking-Tresors.
            </p>
          </div>
        </div>

        {/* Three Tier Vault Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {VAULT_ITEMS.map((item) => (
            <div
              key={item.brand}
              className="flex flex-col justify-between p-6 rounded-xs border border-white/10 bg-white/[0.02] hover:border-[#C3AD90]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tag text-[9.5px] uppercase tracking-wider text-[#C3AD90]">
                    {item.brand}
                  </span>
                  <span className="text-[10px] font-mono-tag text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-xs bg-emerald-500/10">
                    {item.status}
                  </span>
                </div>
                <h3 className="mt-2 font-editorial text-xl font-normal text-white">
                  {item.model}
                </h3>
                <p className="mt-2.5 text-xs text-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tag uppercase tracking-wider text-[#C3AD90] hover:text-white transition-colors"
                >
                  <span>Marken-Dossier öffnen</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <span className="text-[10px] font-mono-tag text-white/40">
                  Schweiz / Escrow
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
