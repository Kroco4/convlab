import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// ConvLab — emerald CL favicon to match the dark-theme landing.
export default function Icon() {
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
          color: "#34d399",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          borderRadius: 6,
          fontFamily: "sans-serif",
        }}
      >
        CL
      </div>
    ),
    { ...size }
  );
}
