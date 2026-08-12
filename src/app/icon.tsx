import { ImageResponse } from "next/og";
import { getOmedadLogoDataUrl } from "@/lib/brand-logo";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          width={32}
          height={28}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
