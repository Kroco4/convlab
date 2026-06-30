import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// ConvLab — emerald CL Apple touch icon, matching the dark-theme landing.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0f1112",
            border: "2px solid #34d399",
            borderRadius: 28,
            color: "#34d399",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          CL
        </div>
      </div>
    ),
    { ...size }
  );
}
