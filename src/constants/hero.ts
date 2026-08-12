export const HERO_CONTENT = {
  overline: "Bole, Addis Ababa",
  starRating: 4,
  starLabel: "4-Star Hotel",
  headline: "A Modern City Hotel Near Bole Airport",
  subtitle:
    "With over 30 years of trusted experience — comfort, service, and warmth for business and leisure travelers, just 6 minutes from the airport.",
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
  alt: "Omedad Hotel — modern hospitality on Airport Road, Addis Ababa",
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
