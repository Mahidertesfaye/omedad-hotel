export const ABOUT_CONTENT = {
  overline: "About Omedad Hotel",
  heading: "A modern city hotel built on a legacy of trust",
  description: [
    "With over 30 years of trusted experience in Ethiopia, Omedad is proud to expand its legacy with the opening of a modern city hotel. Built on a foundation of integrity and quality, we now bring the same commitment to excellence into hospitality — offering comfort, service, and warmth for both business and leisure travelers.",
    "Located just 6 minutes from the airport and ideally situated for major business destinations across Addis Ababa, the hotel offers 24-hour reception and concierge services for efficient check-in and check-out.",
    "Omedad Hotel continues to grow with a commitment to meeting the needs of its esteemed guests.",
  ],
  cta: {
    label: "Explore Amenities",
    href: "#amenities",
  },
} as const;

export const ABOUT_STATS = [
  {
    id: "stars",
    label: "Star Hotel",
    value: 4,
    suffix: "",
    decimals: 0,
  },
  {
    id: "rating",
    label: "Tripadvisor Rating",
    value: 4.9,
    suffix: "/5",
    decimals: 1,
  },
  {
    id: "rooms",
    label: "Rooms",
    value: 72,
    suffix: "",
    decimals: 0,
  },
  {
    id: "airport",
    label: "Airport Distance",
    value: 6,
    suffix: " min",
    decimals: 0,
  },
] as const;

/**
 * Swap src to replace placeholder with production photography.
 */
export const ABOUT_MEDIA = {
  src: "/images/about/placeholder.svg",
  alt: "Omedad Hotel — modern city hotel in Bole, Addis Ababa",
} as const;
