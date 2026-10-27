import { NextResponse } from "next/server";
import { HiggsfieldClient, DoPModel, SoulSize } from "@higgsfield/client";

export async function GET() {
  try {
    const apiKey = process.env.HF_KEY || process.env.HIGGSFIELD_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing HF_KEY" }, { status: 500 });
    }

    const client = new HiggsfieldClient({ apiKey });
    const motions = await client.getMotions();

    return NextResponse.json({
      status: "connected",
      motionsCount: motions.length,
      availablePresets: [
        "FPV Drone",
        "360 Orbit",
        "Car Chasing",
        "Dolly Zoom In",
        "Crane Down",
      ],
      dopModel: DoPModel.STANDARD,
      targetResolution: SoulSize.LANDSCAPE_2048x1152,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
