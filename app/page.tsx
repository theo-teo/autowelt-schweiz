"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LenisScroll from "@/components/LenisScroll";
import {
  ShieldCheck,
  Zap,
  Gauge,
  Flame,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { sound } from "@/lib/audio";

const FLEET = [
  {
    name: "BUGATTI TOURBILLON",
    category: "V16 HYBRID HYPERCAR",
    power: "1,800 PS",
    engine: "8.3L V16 Sauger + 3 E-Motoren",
    vmax: "445 km/h",
    accel: "0-100 in 2.0s",
    status: "STRENG LIMITIERT (250 EXEMPLARE)",
    image: "/img/bugatti-cockpit.jpg",
    badge: "WELTPREMIERE"
  },
  {
    name: "CHIRON SUPER SPORT",
    category: "QUAD-TURBO GRAN TURISMO",
    power: "1,600 PS",
    engine: "8.0L W16 Quad-Turbo",
    vmax: "440 km/h",
    accel: "0-100 in 2.4s",
    status: "SOFORTIGE ALLOKATION ZÜRICH",
    image: "/img/bugatti-bumper-level.jpg",
    badge: "LAGERND ZÜRICH"
  },
  {
    name: "BUGATTI BOLIDE",
    category: "TRACK ONLY WEAPON",
    power: "1,850 PS",
    engine: "8.0L W16 Rennstrecken-Setup",
    vmax: "> 500 km/h (Simulation)",
    accel: "0-100 in 2.17s",
    status: "OFF-MARKET ZUTEILUNG",
    image: "/img/bugatti-drift.jpg",
    badge: "CIRCUIT ONLY"
  }
];

export default function Home() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTelemetryBeep();
    setFormSent(true);
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-[#F3F4F6] selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      
      {/* Momentum Smooth Scroll */}
      <LenisScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section: Fast & Furious Drone Racetrack Experience */}
      <HeroSection />

      {/* =========================================================================
          SECTION 2: DIE HYPERCAR-FLOTTE (MOLSHEIM ALLOCATION)
      ========================================================================= */}
      <section id="flotte" className="relative border-t border-white/10 bg-[#0A0D15] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-telemetry uppercase tracking-widest text-[#00E5FF]">
                <ShieldCheck className="h-4 w-4 text-[#00E5FF]" />
                <span>AUTOWELT SCHWEIZ AG · PORTFOLIO</span>
              </div>
              <h2 className="mt-3 font-display-hyper text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                ZUTEILUNGEN & ALLOKATIONEN
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Direkter Zugang zu Werkskontingenten und diskreten Sammlungsauflösungen. Jedes Fahrzeug verifiziert mit Molsheim-Ursprungszertifikat.
            </p>
          </div>

          {/* Hypercar Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {FLEET.map((car, idx) => (
              <div
                key={car.name}
                className="group relative flex flex-col justify-between rounded-xs border border-white/10 bg-[#0D121F] p-5 transition-all duration-300 hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono-telemetry text-[10px] tracking-wider text-[#00E5FF]">
                      0{idx + 1} / PORTFOLIO
                    </span>
                    <span className="rounded-xs bg-[#0026FF]/30 border border-[#0026FF]/60 px-2 py-0.5 text-[10px] font-mono-telemetry font-semibold text-[#00E5FF]">
                      {car.badge}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative mt-4 h-48 w-full overflow-hidden rounded-xs border border-white/10">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-transparent to-transparent" />
                  </div>

                  {/* Details */}
                  <h3 className="mt-4 font-display-hyper text-2xl font-bold uppercase text-white">
                    {car.name}
                  </h3>
                  <p className="font-mono-telemetry text-xs text-white/50">{car.category}</p>

                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs font-mono-telemetry">
                    <div className="flex justify-between">
                      <span className="text-white/40">LEISTUNG:</span>
                      <span className="text-white font-semibold">{car.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">ANTRIEB:</span>
                      <span className="text-white">{car.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">0–100 KM/H:</span>
                      <span className="text-[#00E5FF] font-semibold">{car.accel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">V-MAX:</span>
                      <span className="text-white">{car.vmax}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href="#anfrage"
                  onClick={() => sound.playTelemetryBeep()}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xs border border-white/20 bg-white/5 py-3 text-xs font-mono-telemetry font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-[#00E5FF] hover:bg-[#0026FF] hover:text-white"
                >
                  <span>Zuteilung anfragen</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DISKRETE MANDATSANFRAGE / VIP TERMIN
      ========================================================================= */}
      <section id="anfrage" className="relative border-t border-white/10 bg-[#07090E] py-24 lg:py-32 scanline">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          
          <div className="rounded-xs border border-[#00E5FF]/30 bg-[#0B0F19]/90 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="flex items-center gap-2 font-mono-telemetry text-xs uppercase tracking-widest text-[#00E5FF]">
              <Lock className="h-4 w-4 text-[#00E5FF]" />
              <span>DISCRETION GUARANTEED · SWISS CONFIDENTIAL</span>
            </div>

            <h2 className="mt-3 font-display-hyper text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              PRIVATEN BESICHTIGUNGSTERMIN VEREINBAREN
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Vereinbaren Sie eine diskrete Besprechung in unserem Showroom nahe Zürich-Flughafen oder fordern Sie die vertraulichen Unterlagen zu aktuellen Bugatti-Quoten an.
            </p>

            {formSent ? (
              <div className="mt-8 rounded-xs border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
                <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-400" />
                <h4 className="mt-3 font-display-hyper text-lg font-bold uppercase text-white">
                  ANFRAGE ERFOLGREICH ÜBERMITTELT
                </h4>
                <p className="mt-2 text-xs font-mono-telemetry text-white/70">
                  Unser Concierge für Hypercar-Allokationen wird sich innerhalb von 2 Stunden diskret mit Ihnen in Verbindung setzen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase tracking-wider text-white/50">
                      Vollständiger Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Dr. Alexander von Bern"
                      className="mt-1.5 w-full rounded-xs border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E5FF] focus:outline-none font-mono-telemetry"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase tracking-wider text-white/50">
                      Telefonnummer (Direkt) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+41 44 ..."
                      className="mt-1.5 w-full rounded-xs border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E5FF] focus:outline-none font-mono-telemetry"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase tracking-wider text-white/50">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@familyoffice.ch"
                      className="mt-1.5 w-full rounded-xs border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E5FF] focus:outline-none font-mono-telemetry"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-telemetry uppercase tracking-wider text-white/50">
                      Gewünschtes Modell
                    </label>
                    <select className="mt-1.5 w-full rounded-xs border border-white/15 bg-black/50 px-4 py-3 text-sm text-white focus:border-[#00E5FF] focus:outline-none font-mono-telemetry">
                      <option value="tourbillon">Bugatti Tourbillon (V16 Hybrid)</option>
                      <option value="chiron">Bugatti Chiron Super Sport</option>
                      <option value="bolide">Bugatti Bolide (Track Only)</option>
                      <option value="mistral">Bugatti W16 Mistral</option>
                      <option value="general">Allgemeine Sammler-Allokation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-telemetry uppercase tracking-wider text-white/50">
                    Spezifische Anforderungen oder Wunschtermin
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Individuelle Farbkonfiguration, Zuteilungsjahr 2026/2027 oder Inzahlungnahme..."
                    className="mt-1.5 w-full rounded-xs border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00E5FF] focus:outline-none font-mono-telemetry"
                  />
                </div>

                <button
                  type="submit"
                  className="conic-border-glow w-full bg-[#0026FF] py-4 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(0,38,255,0.6)] transition-all hover:bg-[#0038FF] hover:shadow-[0_0_35px_rgba(0,38,255,0.8)]"
                >
                  VERTRAULICHE ALLOCATION-ANFRAGE ABSENDEN
                </button>
              </form>
            )}

            {/* Direct Contact Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-mono-telemetry text-white/60">
              <a href="tel:+41448885577" className="flex items-center gap-2 hover:text-[#00E5FF]">
                <Phone className="h-4 w-4 text-[#00E5FF]" />
                <span>+41 44 888 55 77 (VIP Desk)</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#00E5FF]" />
                <span>Autowelt Schweiz AG · Lindbergh-Allee 1 · 8152 Glattpark / Zürich</span>
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FOOTER
      ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#05060A] py-8 text-center text-xs font-mono-telemetry text-white/40">
        <div className="mx-auto max-w-7xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 AUTOWELT SCHWEIZ AG · INDEPENDENT HYPERCAR ATELIER</span>
          <span>BUGATTI MOLSHEIM ALLOCATION SPECIALISTS · ZÜRICH</span>
        </div>
      </footer>

    </div>
  );
}