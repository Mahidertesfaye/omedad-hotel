import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0b1f3a",
          color: "#ffffff",
          fontSize: 96,
          fontFamily: "Georgia, serif",
          border: "2px solid rgb(255 255 255 / 0.35)",
          borderRadius: 8,
        }}
      >
        O
      </div>
    ),
    { ...size },
  );
}
