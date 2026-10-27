"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const LOCATIONS = [
  {
    name: "Showroom & Lounge Zürich",
    street: "Badenerstrasse 567",
    city: "8048 Zürich",
    hours: "Mo–Fr: 09:00 – 18:30 · Sa: Nach Vereinbarung",
    role: "Fahrzeugübergaben & Private Viewing",
  },
  {
    name: "High-Tech Atelier Glattpark",
    street: "Lindbergh-Allee 1",
    city: "8152 Glattpark",
    hours: "Mo–Fr: 08:00 – 18:00",
    role: "Hofele Bespoke Veredelung & Service",
  },
];

export default function ConciergeBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carInterest: "Porsche 911 GT3 RS",
    preferredLocation: "Showroom Zürich (Badenerstrasse)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 bg-[#0B0D10] text-[#F4F0E9] border-t border-white/10 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3AD90]" />
              <span className="font-mono-tag text-[10px] uppercase tracking-[0.3em] text-[#C3AD90]">
                (04) — PRIVATE CONCIERGE · TERMINVEREINBARUNG
              </span>
            </div>
            <h2 className="mt-2 font-editorial text-3xl sm:text-5xl uppercase tracking-tight text-[#F4F0E9]">
              Private Viewing. <br />
              <span className="text-white/50">Ihr persönlicher Empfang.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2 font-mono-tag text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[#C3AD90]" />
              <span>Direkter Draht:</span>
              <a href="tel:+41448885577" className="text-[#C3AD90] hover:underline font-medium">
                +41 44 888 55 77
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-[#C3AD90]" />
              <a href="mailto:info@autoweltschweiz.ch" className="hover:text-white transition-colors">
                info@autoweltschweiz.ch
              </a>
            </div>
          </div>
        </div>

        {/* Content Columns: Locations & Booking Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Locations & Schweizer Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <p className="font-mono-tag text-[10px] uppercase tracking-widest text-[#C3AD90]">
                Standorte in Zürich
              </p>
              
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="p-5 rounded-xs border border-white/10 bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4 text-[#C3AD90]" />
                    <h4 className="font-editorial text-lg">{loc.name}</h4>
                  </div>
                  <p className="mt-1 text-xs text-white/80 font-mono-tag">
                    {loc.street}, {loc.city}
                  </p>
                  <p className="mt-2 text-[11px] text-white/50">
                    {loc.hours}
                  </p>
                  <div className="mt-3 pt-2 border-t border-white/5 text-[10px] font-mono-tag text-[#C3AD90]">
                    {loc.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xs border border-[#C3AD90]/20 bg-[#C3AD90]/5">
              <p className="font-mono-tag text-[10px] uppercase tracking-wider text-[#C3AD90]">
                Schweizer Diskretions-Versprechen
              </p>
              <p className="mt-1 text-xs text-white/70 font-light leading-relaxed">
                Jedes Gespräch und jede Besichtigung wird auf Wunsch vollständig anonym und unter bilateraler Geheimhaltungsvereinbarung (NDA) abgewickelt.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive VIP Booking Card */}
          <div className="lg:col-span-7 rounded-xs border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md">
            
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="h-12 w-12 text-[#C3AD90] mx-auto" />
                <h3 className="font-editorial text-2xl uppercase text-white">
                  Anfrage erfolgreich übermittelt
                </h3>
                <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                  Vielen Dank. Unser Schweizer Concierge-Team wird sich innerhalb von zwei Stunden diskret mit Ihnen in Verbindung setzen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xs border border-white/20 px-4 py-2 text-xs font-mono-tag uppercase text-white hover:border-[#C3AD90]"
                >
                  Weitere Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-editorial text-2xl uppercase tracking-tight text-white">
                    Private Viewing anfordern
                  </h3>
                  <p className="mt-1 text-xs text-white/60 font-light">
                    Wählen Sie Ihr Wunschfahrzeug und Ihren bevorzugten Zürcher Standort.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[10px] font-mono-tag uppercase text-white/60 mb-1.5">
                      Fahrzeug von Interesse
                    </label>
                    <select
                      value={formData.carInterest}
                      onChange={(e) => setFormData({ ...formData, carInterest: e.target.value })}
                      className="w-full rounded-xs border border-white/10 bg-[#0B0D10] px-3.5 py-2.5 text-xs text-white font-mono-tag focus:border-[#C3AD90] focus:outline-hidden"
                    >
                      <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS / Heritage</option>
                      <option value="Lamborghini Aventador SVJ">Lamborghini Aventador SVJ Roadster</option>
                      <option value="Hofele HG63 Bespoke">Hofele HG63 Bespoke (Mercedes-AMG G63)</option>
                      <option value="Ferrari SF90 Stradale">Ferrari SF90 Stradale / V12</option>
                      <option value="Bugatti Tourbillon">Bugatti Tourbillon / Chiron</option>
                      <option value="Koenigsegg Jesko Attack">Koenigsegg Jesko Attack / Megacars</option>
                      <option value="Pagani Utopia">Pagani Utopia / Huayra</option>
                      <option value="Allgemeine Fahrzeugsuche">Individuelle Fahrzeugsuche</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tag uppercase text-white/60 mb-1.5">
                      Bevorzugter Standort
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full rounded-xs border border-white/10 bg-[#0B0D10] px-3.5 py-2.5 text-xs text-white font-mono-tag focus:border-[#C3AD90] focus:outline-hidden"
                    >
                      <option value="Showroom Zürich (Badenerstrasse)">Showroom Zürich (Badenerstrasse 567)</option>
                      <option value="Atelier Glattpark (Lindbergh-Allee)">Atelier Glattpark (Lindbergh-Allee 1)</option>
                      <option value="Vor-Ort-Besichtigung Schweiz">Diskrete Vor-Ort-Zustellung Schweiz</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-tag uppercase text-white/60 mb-1.5">
                      Vollständiger Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Marc Keller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xs border border-white/10 bg-[#0B0D10] px-3.5 py-2.5 text-xs text-white font-mono-tag focus:border-[#C3AD90] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tag uppercase text-white/60 mb-1.5">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+41 79 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xs border border-white/10 bg-[#0B0D10] px-3.5 py-2.5 text-xs text-white font-mono-tag focus:border-[#C3AD90] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tag uppercase text-white/60 mb-1.5">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="keller@example.ch"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xs border border-white/10 bg-[#0B0D10] px-3.5 py-2.5 text-xs text-white font-mono-tag focus:border-[#C3AD90] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <p className="text-[10px] text-white/40 font-mono-tag">
                    Ihre Daten werden vertraulich gemäss Schweizer Datenschutzgesetz verarbeitet.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xs bg-[#C3AD90] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0D10] hover:bg-white transition-all cursor-pointer shrink-0"
                  >
                    <span>Termin Anfragen</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
