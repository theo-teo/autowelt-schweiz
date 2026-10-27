# 📋 ASSET REQUIREMENTS SPECIFICATION — AUTOWELT SCHWEIZ PITCH
**Document Version:** 1.0.0  
**Project:** Autowelt Schweiz AG · Concept Demo Hero  
**Author:** Principal Frontend Engineer & Creative Technologist  
**Status:** Creative Brief / Production Contract (Gate 1)

---

## 1. LEGAL, RIGHTS & COMMERCIAL PROVENANCE
- **Source Rights:** All hero media must carry formal written commercial licensing or direct manufacturer/client release for digital pitch and public web deployment.
- **Brand Representation:** Do NOT use scraped, hotlinked, or unauthorized imagery of Ferrari, Lamborghini, McLaren, Porsche, or Bugatti.
- **Stock Integrity:** No invented vehicle prices, fabricated VINs, or fictional allocation stock. All public-facing vehicle references must link exclusively to official Autowelt Schweiz inventory channels (`https://autoweltschweiz.ch/fahrzeuge/`).

---

## 2. CINEMATOGRAPHIC SCENE BRIEF (12-SECOND CAMERA MOVE)

### Setting
- **Location:** Private automotive circuit or architectural modern pit lane (e.g., Circuit Paul Ricard, Bilster Berg, or Swiss private proving ground facility).
- **Architecture:** Smooth concrete, restrained architectural pit garages, clean track curbs, open negative space above horizon line.
- **Atmosphere:** Natural, restrained lighting. Never generic neon tunnels, artificial digital confetti, or over-saturated cyber aesthetic.

### Vehicle Lineup (Three Vehicles)
1. **Vehicle 1 (Left / Fore):** Mid-engine sports/supercar (Curated concept color: Deep Liquid Red).
2. **Vehicle 2 (Center / Hero):** Aerodynamic high-performance supercar (Curated concept color: Vibrant Papaya Orange).
3. **Vehicle 3 (Right / Flank):** Grand touring / muscular supercar (Curated concept color: Metallic Graphite Grey).

### Camera Path & Choreography
- **0.0s – 3.0s:** High 3/4 aerial establishing shot (drone altitude ~25–30m), smooth forward glide along circuit axis.
- **3.0s – 6.0s:** Controlled descending crane arc down to eye/bumper level in front of the vehicle lineup; vehicle forms remain crisp and readable.
- **6.0s – 9.0s:** Measured lateral arc along vehicle flanks toward rear quarter, revealing rear light signatures and aero diffuser lines.
- **9.0s – 12.0s:** Settles on a balanced, stable wide editorial lock-off shot with clean negative space for typography, smoothly looping back to the head of the sequence without visual jump cuts.

---

## 3. TECHNICAL DELIVERABLES MATRIX

| Asset Role | Filename | Format | Resolution | Aspect Ratio | Color / Codec |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop Day Video** | `hero-day-desktop.mp4` | MP4 (H.264 / AAC silent) | 2560 × 1440 (or 1920 × 1080) | 16:9 | Rec.709, 24/30 fps, < 14 MB |
| **Desktop Night Video** | `hero-night-desktop.mp4` | MP4 (H.264 / AAC silent) | 2560 × 1440 (or 1920 × 1080) | 16:9 | Physical headlights on, track floodlights, < 14 MB |
| **Mobile Day Video** | `hero-day-mobile.mp4` | MP4 (H.264 / AAC silent) | 1080 × 1920 | 9:16 | Vertical centered crop, < 8 MB |
| **Mobile Night Video** | `hero-night-mobile.mp4` | MP4 (H.264 / AAC silent) | 1080 × 1920 | 9:16 | Vertical centered crop, < 8 MB |
| **Desktop Day Poster** | `hero-day-poster.webp` | WebP | 2560 × 1440 | 16:9 | High quality (q85), < 250 KB |
| **Desktop Night Poster**| `hero-night-poster.webp` | WebP | 2560 × 1440 | 16:9 | High quality (q85), < 250 KB |
| **Mobile Day Poster** | `hero-day-poster-mobile.webp` | WebP | 1080 × 1920 | 9:16 | High quality (q85), < 150 KB |
| **Mobile Night Poster** | `hero-night-poster-mobile.webp` | WebP | 1080 × 1920 | 9:16 | High quality (q85), < 150 KB |

---

## 4. DAY / NIGHT SYNCHRONIZATION REQUIREMENT
- **Rule:** The Day and Night video exports MUST be generated from the exact same 3D scene/camera path with **identical duration, frame rate, camera transform keyframes, and vehicle positioning**.
- **Execution:** Night mode is NOT a client-side blue CSS filter. It must render authentic physical lighting changes: illuminated LED headlight beams cutting across tarmac, reflective track markers, instrument cluster glows, and ambient twilight skydome.
