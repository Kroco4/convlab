import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/config";

// Self-hosted DM Sans (variable). Keine externe Google-Fonts-Request → schneller + besserer Lighthouse-Score.
const dmSans = localFont({
  src: "./fonts/DMSans-Variable.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ConvLab — 3 Conversion-Bugs in 7 Tagen, gefixt im Code",
  description:
    "Productized Audit-Service für DACH SaaS-Solo-Founder. 1.490 CHF Festpreis. Bug-Findungs-Garantie. Microsoft Clarity Setup, Tracking-Verifikation, Code-Fixes inklusive.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ConvLab — 3 Conversion-Bugs in 7 Tagen, gefixt im Code",
    description:
      "Productized Audit-Service für DACH SaaS-Solo-Founder. 1.490 CHF Festpreis. Bug-Findungs-Garantie.",
    url: SITE_URL,
    siteName: "ConvLab",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvLab — 3 Conversion-Bugs in 7 Tagen, gefixt im Code",
    description:
      "Productized Audit-Service für DACH SaaS-Solo-Founder. 1.490 CHF Festpreis. Bug-Findungs-Garantie.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
