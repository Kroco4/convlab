import { ImageResponse } from "next/og";

export const alt = "ConvLab — 3 Conversion-Bugs in 7 Tagen, gefixt im Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0D1117",
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
              background: "#1A6BFF",
              color: "#fff",
              fontSize: "36px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CL
          </div>
          <div style={{ color: "#fff", fontSize: "40px", fontWeight: 700 }}>
            ConvLab
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fff",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            3 Conversion-Bugs in 7 Tagen.
          </div>
          <div style={{ color: "#788AAA", fontSize: "44px", fontWeight: 600 }}>
            Gefixt im Code.
          </div>
        </div>
        <div style={{ color: "#1A6BFF", fontSize: "32px", fontWeight: 700 }}>
          Funnel-Audit ab 1.490 CHF · Bug-Findungs-Garantie
        </div>
      </div>
    ),
    { ...size }
  );
}
