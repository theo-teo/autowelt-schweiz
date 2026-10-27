# 📋 ASSET REQUIREMENTS SPECIFICATION — AUTOWELT SCHWEIZ PITCH
**Document Version:** 2.0.0 (Scrollytelling & AI Motion Contract)  
**Project:** Autowelt Schweiz AG · Concept Demo & Atelier Experience  
**Showroom:** Badenerstrasse 567, 8048 Zürich · **Atelier:** Lindbergh-Allee 1, 8152 Glattpark  
**Author:** Principal Frontend Engineer & Creative Technologist  
**Status:** Approved Master Contract (Gates 1 & 2)

---

## 1. LEGAL, RIGHTS & COMMERCIAL PROVENANCE
- **Source Rights:** All hero media must carry formal written commercial licensing or direct manufacturer/client release for digital pitch and public web deployment.
- **Brand Representation:** Do NOT use scraped or unauthorized low-res imagery. Use the genuine downloaded Swiss Atelier assets located in `/public/media/inventory/` or approved AI-generated commercial photography.
- **Stock Integrity:** No invented vehicle prices or fake VINs. All vehicles link directly to verified official Autowelt Schweiz portfolio pages (`https://autoweltschweiz.ch/fahrzeuge/`).

---

## 2. SCROLL STORYTELLING CHOREOGRAPHY (6 PHASES)

### Phase 1: High Alpine Establishing Shot (0.0s – 3.0s)
- **Setting:** Swiss private proving ground surrounded by alpine peaks under crisp morning daylight or twilight blue hour.
- **Camera:** High 3/4 drone glide (30m altitude) descending smoothly toward the circuit finish straight.

### Phase 2: The Multi-Car Lineup Hero (3.0s – 6.0s)
- **Lineup:**
  1. **Lamborghini Aventador SVJ Roadster** (Bianco Monocerus) in 3/4 foreground.
  2. **Porsche 911 GT3 RS** (Graphite / Carbon swan-neck wing) beside it.
  3. **Ferrari SF90 Stradale** (Rosso Corsa) with illuminated LED daylight ribbons.
  4. **Bugatti / Koenigsegg** hypercar silhouette by the minimalist concrete pit pavilion.

### Phase 3: Glattpark Atelier & Hofele Bespoke (6.0s – 9.0s)
- **Subject:** Smooth lateral arc highlighting carbon aero diffusers, forged wheels, and Hofele HG63 luxury styling.
- **Lighting:** Matched Day (golden sun rim light) and Night (laser headlights + interior architectural glow).

### Phase 4: Curated Inventory Vault (Interactive Drawer)
- **Interaction:** Fullscreen translucent drawer featuring the 9 official brands:
  - Porsche, Ferrari, Lamborghini, Bugatti, Koenigsegg, Pagani, Mercedes-Benz/Hofele, Aston Martin, Bentley.

### Phase 5 & 6: Sound & Private Concierge
- **Audio:** Spatial V12 engine acoustics, wind, and mechanical chronograph clicks.
- **Conversion:** Direct telephone connection (`+41 44 888 55 77`) and Private Viewing VIP booking.

---

## 3. HIGGSFIELD AI KOPPLUNGSSPEZIFIKATION
- **API Token:** `HIGGSFIELD_API_KEY` (in `.env.local`).
- **Endpoint:** `https://api.higgsfield.ai/v1/generate/video`
- **Engine:** `higgsfield-dop-v2` (Director of Photography Camera Control).
- **Camera Trajectory Matrix:**
  - `t=0s`: `[x: 0, y: 25, z: -40, pitch: -25]` (Aerial Establishing)
  - `t=4s`: `[x: 0, y: 1.2, z: -12, pitch: -4]` (Eye Level Hero Front)
  - `t=8s`: `[x: 8, y: 1.0, z: -4, pitch: 0]` (Flank Arc / Aero Diffuser)
  - `t=12s`: `[x: 0, y: 1.5, z: -10, pitch: -5]` (Loop Lock-off)

---

## 4. CURRENT DELIVERABLES IN REPOSITORY

| Asset Role | Filename | Format | Source / Generation |
| :--- | :--- | :--- | :--- |
| **Day Lineup Video** | `/public/media/hero-day-desktop.mp4` | MP4 (H.264, 60fps) | 12s Camera Glide, Multi-Car Alpine Lineup |
| **Night Lineup Video** | `/public/media/hero-night-desktop.mp4` | MP4 (H.264, 60fps) | 12s Camera Glide, Matched Night LEDs |
| **Day Poster** | `/public/media/hero-day-poster.jpg` | High-res JPEG | Ultra-clean Alpine Daylight |
| **Night Poster** | `/public/media/hero-night-poster.jpg` | High-res JPEG | Charcoal & Laser Headlights |
| **Inventory Assets** | `/public/media/inventory/*.jpg` | JPEGs (13 files) | Official Autowelt Schweiz Photography |
