# 🏁 AUTOWELT SCHWEIZ AG — SCROLL STORYTELLING & AI CINEMA BLUEPRINT
**Document Version:** 2.0.0 (Master Production Contract)  
**Atelier & Dealership:** Autowelt Schweiz AG (`https://www.autoweltschweiz.ch/`)  
**Locations:** Showroom: Badenerstrasse 567, 8048 Zürich · Atelier: Lindbergh-Allee 1, 8152 Glattpark · Tel: `+41 44 888 55 77`  
**Core Creative Concept:** Cinematic Scrollytelling Video Pipeline with Higgsfield AI & Mercedes-Benz Caliber Art Direction  

---

## 1. DIE KERN-USP VON AUTOWELT SCHWEIZ AG
Dieses Konzept ist **kein generischer Autohändler-Webauftritt**, sondern das digitale Äquivalent eines diskreten Schweizer Private-Banking-Tresors für die seltensten Automobile der Welt:

1. **Diskrete Off-Market Allokationen:**
   - Zugang zu streng limitierten Werkskontingenten (Bugatti Tourbillon & Chiron, Pagani Utopia, Koenigsegg Jesko & Gemera, Porsche Heritage / GT-Modelle, Ferrari Icona Serie).
   - Internationales Sammlernetzwerk ohne öffentliche Inserate.

2. **Offizieller Veredelungs-Partner & Schweizer Atelier:**
   - Exklusiver Partner für **HOFELE Bespoke Design** (maßgeschneiderte Mercedes-AMG G63, Maybach und GLS Veredelungen).
   - High-Tech Atelier & Werkstatt in der **Lindbergh-Allee 1, Glattpark** + Flagship Lounge **Badenerstrasse 567, Zürich**.

3. **Direkter Werkserwerb (Direct Factory Allocation):**
   - Persönliche Begleitung der Kunden direkt in die Manufakturen (Molsheim, Maranello, Sant'Agata Bolognese, Ängelholm, Affalterbach, Gaydon).

4. **Schweizer Exzellenz & Private Proving Ground:**
   - Probefahrten und Fahrzeugabnahmen auf exklusiven privaten Rundkursen in den Schweizer Alpen und Südfrankreich.

---

## 2. SCROLL STORYTELLING ARCHITEKTUR (6-PHASEN JOURNEY)

Das gesamte Frontend wird als nahtloser, hardwarebeschleunigter **Scrollytelling-Film** geführt. Der User steuert durch sanftes Scrollen die Kamerafahrt und wechselt zwischen Tag- und Nachtmodus.

```
[ SCROLL PHASE 1: DER SCHWEIZER ALPEN-RUNDKURS ]
   ├── Drohnen-Anflug (30m Höhe) über die Bergkulisse
   ├── Landung auf der Zielgeraden der privaten Teststrecke
   └── Hero-Schlagzeile: "EXTRAORDINARY, BY DESIGN."

[ SCROLL PHASE 2: DIE LINEUP-ENTHÜLLUNG ]
   ├── Kamera senkt sich auf 50cm Bodenhöhe
   ├── Vorbei an: Lamborghini Aventador SVJ Roadster (Bianco Monocerus)
   ├── Flankiert von: Porsche 911 GT3 RS (Graphit/Carbon) & Ferrari SF90 Stradale
   └── Im Hintergrund: Bugatti Hypercar Silhouette & Hofele HG63

[ SCROLL PHASE 3: ATELIER & VEREDELUNG (HOFELE / BESPOKE) ]
   ├── Nahtlose Kamerafahrt in die Glas-Architektur des Glattpark-Ateliers
   ├── Detail-Zoom auf Sichtcarbon-Strukturen, handgenähtes Leder & Titan-Auspuff
   └── Interaktiver 360°-Orbit mit Day/Night-Lichtwechsel

[ SCROLL PHASE 4: DAS REALE SORTIMENT (INTERAKTIVER VAULT) ]
   ├── Horizontales Scrollytelling durch die 9 Kernmarken:
   │   Porsche · Ferrari · Lamborghini · Bugatti · Koenigsegg · Pagani · Mercedes-AMG · Aston Martin · Bentley
   └── Direkter Abruf von Fahrzeugspezifikationen, Zuteilungsstatus & offiziellem Link

[ SCROLL PHASE 5: SOUND & EMOTIONEN ]
   ├── Synthetisierter oder realer V12/Sauger-Motorsound reagiert dynamisch auf Scrollgeschwindigkeit
   └── Reifengeräusche, Windkanal-Akustik und diskreter mechanischer Chronographen-Klick

[ SCROLL PHASE 6: PRIVATE CONCIERGE & ALLOKATIONS-ANFRAGE ]
   ├── Kamera hält an einer minimalistischen Schweizer Lounge-Komposition
   └── Primäre CTAs: "REQUEST PRIVATE VIEWING" · "DIRECT FACTORY ALLOCATION" · "TELEFONISCH VERBINDEN"
```

---

## 3. HIGGSFIELD AI — KOPPLUNG & INTEGRATIONS-SPEZIFIKATION

Um Videos auf Hollywood- und Mercedes-Benz-Niveau zu erzeugen, nutzen wir die **Higgsfield AI Video Diffusion API** (State-of-the-Art Kamerasteuerung wie Dolly Zoom, Crane, Bullet-Time und Arc Shots).

### Was wir für die direkte Higgsfield-Kopplung benötigen:
1. **Higgsfield API Key:**
   - Format: `hf_live_xxxxxxxxxxxxxxxxxxxxxxxx` (oder Higgsfield Cloud Enterprise Token).
   - Hinterlegt in: `.env.local` als `HIGGSFIELD_API_KEY`.
2. **Endpoint URL & Version:**
   - Standard: `https://api.higgsfield.ai/v1/generate/video` oder Higgsfield WebSocket Stream.
3. **Model Selection:**
   - `higgsfield-dop-v2` (Director of Photography) für präzise Kamerabahn-Koordinaten `[x, y, z, pitch, yaw, roll]`.
   - `higgsfield-cinematic-render` für physikalisch akkurate LED- und Tarmac-Reflektionen.
4. **Webhook URL (Optional für asynchrones 4K-Rendering):**
   - Eigene Vercel Serverless Route: `https://autowelt-schweiz.vercel.app/api/webhooks/higgsfield` zur automatischen Speicherung in `/public/media/`.

### Higgsfield Prompt & Kamera-Choreografie:
```json
{
  "model": "higgsfield-dop-v2",
  "prompt": "Commercial automotive masterwork, Swiss Alps private proving ground. Prestigious multi-car lineup: Bianco Monocerus Lamborghini Aventador SVJ Roadster in foreground, Porsche 911 GT3 RS with carbon swan-neck wing, Rosso Corsa Ferrari SF90 Stradale. Smooth asphalt with rain-slicked golden reflections. Minimalist concrete pit pavilion in background.",
  "camera_motion": {
    "type": "crane_descend_and_orbit",
    "trajectory": [
      {"time": 0.0, "x": 0, "y": 25, "z": -40, "pitch": -25},
      {"time": 4.0, "x": 0, "y": 1.2, "z": -12, "pitch": -4},
      {"time": 8.0, "x": 8, "y": 1.0, "z": -4, "pitch": 0},
      {"time": 12.0, "x": 0, "y": 1.5, "z": -10, "pitch": -5}
    ]
  },
  "lighting": {
    "day_mode": "Alpine morning sun, soft haze, 4500K golden hour rim lighting",
    "night_mode": "Deep charcoal blue hour, sharp Y-shaped LED laser headlights, wet asphalt specular streaks"
  },
  "duration_seconds": 12,
  "fps": 60,
  "resolution": "3840x2160"
}
```

---

## 4. CLI-INTEGRATION & WORKFLOW

Sie können dieses Projekt direkt über die Kommandozeile steuern und nahtlos deployen:

1. **Vercel CLI:**
   - Deployment Live: `vercel --prod`
   - Realtime Logs: `vercel logs autowelt-schweiz`
   - Domain-Verknüpfung: `vercel alias set <id> autowelt-schweiz.vercel.app`

2. **Git & GitHub Pipeline:**
   - Remote Repository: `https://github.com/theo-teo/autowelt-schweiz`
   - Branch: `main` (automatischer CI/CD Build via Vercel GitHub Integration)

3. **Media Pipeline CLI:**
   - Lokales Rendering mit `ffmpeg`:
     ```bash
     ffmpeg -loop 1 -i autowelt-lineup-daylight.jpg -filter_complex "scale=3840:-1,zoompan=..." -t 12 hero-day-desktop.mp4
     ```

---

## 5. ART DIRECTION & DESIGN SYSTEM (MERCEDES-BENZ LEVEL)

- **Primärfarben:**
  - Obsidian Charcoal: `#0B0D10` (Hintergrund-Tiefe, absorbiert Reflexionen)
  - Raw Ivory: `#F4F0E9` (Edle Typografie, kein hartes 100% Weiss)
  - Swiss Champagne Gold: `#C3AD90` (Feine Akzente, Status-Tags, Badges)
  - Racing Tarmac Grey: `#1A1D24` (Karten- und Dropdown-Strukturen)
- **Typografie:**
  - Headlines: Grotesk / Editorial Serif im Wechsel mit ultrakomprimierter sans-serif
  - Body / Subcopy: Feine, semitransparente Schnitte (Font-Weight 300, Opacity 75-80%)
  - Tags: Monospace mit 0.25em Letterspacing
- **Emotionale Priorität:**
  - Der Hintergrund und die Fahrzeuge stehen zu jedem Zeitpunkt an erster Stelle.
  - Typografie und Navigation schweben transparent wie in einem High-End-Architekturmagazin darüber.
