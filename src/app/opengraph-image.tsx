import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";
import { getOmedadLogoDataUrl } from "@/lib/brand-logo";

export const alt = `${SITE_NAME} — luxury hospitality in Addis Ababa`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoSrc = await getOmedadLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background:
            "linear-gradient(145deg, #081624 0%, #0b1f3a 45%, #12325a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={96}
            height={84}
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              fontSize: 56,
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.02em",
            }}
          >
            {SITE_NAME}
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.5,
            maxWidth: 820,
            color: "rgb(255 255 255 / 0.72)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size },
  );
}
