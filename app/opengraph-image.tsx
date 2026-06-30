import { ImageResponse } from "next/og";

export const alt =
  "ConvLab — Andere schicken dir einen Report. Wir schicken den Fix.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ConvLab — emerald dark-theme OG card mirroring the new landing hero.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(60% 60% at 30% 0%, rgba(52,211,153,0.18) 0%, rgba(10,10,11,0) 70%), #0a0a0b",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#0f1112",
              border: "2px solid #34d399",
              color: "#34d399",
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CL
          </div>
          <div
            style={{
              color: "#e6e7eb",
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            ConvLab
          </div>
          <div
            style={{
              marginLeft: "16px",
              color: "#34d399",
              fontFamily: "monospace",
              fontSize: "18px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {"// productized conversion audit"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              color: "#e6e7eb",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Andere schicken dir einen Report.
          </div>
          <div
            style={{
              color: "#34d399",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Wir schicken den Fix.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            color: "#9aa0a6",
            fontFamily: "monospace",
            fontSize: "20px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#34d399" }}>●</span> Bug-Findungs-Garantie
          <span style={{ color: "#34d399" }}>●</span> 7-Tage-Turnaround
          <span style={{ color: "#34d399" }}>●</span> Code-PR statt PDF
        </div>
      </div>
    ),
    { ...size }
  );
}
