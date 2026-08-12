import { ImageResponse } from "next/og";
import { getOmedadLogoDataUrl } from "@/lib/brand-logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logoSrc = await getOmedadLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={160}
          height={140}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
