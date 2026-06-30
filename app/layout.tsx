import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ConvLab — Wir schicken den Fix, nicht den Report.",
  description:
    "Productized Conversion-Audit fuer DACH SaaS-Solo-Founder. 3 Bugs in 7 Tagen, gefixt im Code. Ab CHF 490.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ConvLab — Wir schicken den Fix, nicht den Report.",
    description:
      "Productized Conversion-Audit fuer DACH SaaS-Solo-Founder. 3 Bugs in 7 Tagen, gefixt im Code. Ab CHF 490.",
    url: SITE_URL,
    siteName: "ConvLab",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvLab — Wir schicken den Fix, nicht den Report.",
    description:
      "Productized Conversion-Audit fuer DACH SaaS-Solo-Founder. 3 Bugs in 7 Tagen, gefixt im Code. Ab CHF 490.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${grotesk.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
