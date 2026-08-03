export const HERO_CONTENT = {
  overline: "Addis Ababa, Ethiopia",
  headline: "Where Ethiopian Warmth Meets Refined Hospitality",
  subtitle:
    "A sanctuary of timeless design, gracious service, and modern comfort — crafted for the discerning traveler in Africa's diplomatic capital.",
  cta: {
    label: "Explore Our Rooms",
    href: "#rooms",
  },
} as const;

/**
 * Swap this config to replace placeholder media with production assets.
 * Supports image or video backgrounds without changing layout code.
 */
export const HERO_MEDIA = {
  type: "image" as const,
  src: "/images/hero/placeholder.svg",
  alt: "Omedad Hotel — luxury hospitality atmosphere in Addis Ababa",
  /** Uncomment for video background:
  type: "video" as const,
  src: "/videos/hero.mp4",
  poster: "/images/hero/poster.jpg",
  */
} as const;

export const HERO_OVERLAY = {
  color: "var(--color-primary-navy)",
  opacity: 0.62,
} as const;
