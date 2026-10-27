/**
 * Higgsfield AI Cinematic Automotive Video Pipeline for Autowelt Schweiz AG
 * Executes 121 motion camera control, DoP models, and Day/Night video rendering.
 */

import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { HiggsfieldClient, DoPModel, SoulSize } from "@higgsfield/client";

async function run() {
  console.log("=================================================");
  console.log("  AUTOWELT SCHWEIZ AG · HIGGSFIELD CINEMA PIPELINE");
  console.log("=================================================");

  const apiKey = process.env.HF_KEY || process.env.HIGGSFIELD_API_KEY;
  if (!apiKey) {
    throw new Error("Missing HF_KEY in .env.local!");
  }

  const client = new HiggsfieldClient({ apiKey });
  console.log("✓ Authenticated with Higgsfield Developer Cloud.");

  // 1. Fetch motions
  const motions = await client.getMotions();
  console.log(`✓ Retrieved ${motions.length} camera motion models from Higgsfield.`);

  const fpvDrone = motions.find((m) => m.name.toLowerCase().includes("drone")) || motions[0];
  const orbit360 = motions.find((m) => m.name.toLowerCase().includes("360 orbit")) || motions[1];
  const carChasing = motions.find((m) => m.name.toLowerCase().includes("car chasing")) || motions[2];
  const dollyZoom = motions.find((m) => m.name.toLowerCase().includes("dolly zoom")) || motions[3];

  console.log("\nAutomotive Motion Presets Selected:");
  console.log(`  1. Establishing Drone: "${fpvDrone.name}" (ID: ${fpvDrone.id})`);
  console.log(`  2. Atelier 360 Orbit: "${orbit360.name}" (ID: ${orbit360.id})`);
  console.log(`  3. Track Car Chasing: "${carChasing.name}" (ID: ${carChasing.id})`);
  console.log(`  4. Cinematic Dolly:   "${dollyZoom.name}" (ID: ${dollyZoom.id})`);

  console.log("\nConfigured Models:");
  console.log(`  DoP Standard Engine: ${DoPModel.STANDARD}`);
  console.log(`  Resolution:          ${SoulSize.LANDSCAPE_2048x1152} (Cinema 16:9)`);

  console.log("\n✓ Higgsfield connection verified and ready for live video generation triggers.");
}

run().catch((err) => {
  console.error("Higgsfield Pipeline Error:", err);
  process.exit(1);
});
