import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXTRAORDINARY, BY DESIGN · Autowelt Schweiz (Concept Demo)",
  description: "Curated allocations and private acquisitions of the world’s most distinguished sports and supercars. Independent pitch concept for Autowelt Schweiz AG.",
  openGraph: {
    title: "EXTRAORDINARY, BY DESIGN · Autowelt Schweiz",
    description: "Curated allocations and private acquisitions of the world’s most distinguished sports and supercars.",
    images: ["/media/hero-circuit-static-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth bg-[#0B0D10]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0B0D10] text-[#F4F0E9] antialiased selection:bg-[#C3AD90]/25 selection:text-[#F4F0E9]">
        {children}
      </body>
    </html>
  );
}
