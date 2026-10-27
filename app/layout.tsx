import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autowelt Schweiz AG · Bugatti Hypercar Allocation · Zürich",
  description: "Exklusive Zuteilungen & weltweite Quoten für Bugatti Tourbillon, Chiron Super Sport, Bolide & W16 Mistral. Autowelt Schweiz AG, Zürich.",
  openGraph: {
    title: "Autowelt Schweiz AG · Bugatti Hypercar Allocation",
    description: "Die schnellsten Hypercars der Erde. Diskrete Vermittlung von Molsheim-Allokationen in der Schweiz.",
    images: ["/img/bugatti-drone-high.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth bg-[#07090E]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#07090E] text-[#F3F4F6] antialiased selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
        {children}
      </body>
    </html>
  );
}
