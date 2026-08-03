export const ABOUT_CONTENT = {
  overline: "About Omedad Hotel",
  heading: "A sanctuary of refined hospitality in the heart of Addis Ababa",
  description: [
    "Omedad Hotel blends timeless elegance with the warmth of Ethiopian hospitality, offering an atmosphere where every detail has been considered for the discerning traveler.",
    "From thoughtfully designed accommodations to attentive, personalized service — including our signature coffee ceremony welcome — we invite you to experience hospitality that feels both grand and genuinely warm.",
  ],
  cta: {
    label: "Explore Amenities",
    href: "#amenities",
  },
} as const;

export const ABOUT_STATS = [
  {
    id: "experience",
    label: "Years of Experience",
    value: 25,
    suffix: "+",
    decimals: 0,
  },
  {
    id: "rating",
    label: "Guest Rating",
    value: 4.9,
    suffix: "/5",
    decimals: 1,
  },
  {
    id: "rooms",
    label: "Rooms",
    value: 120,
    suffix: "",
    decimals: 0,
  },
  {
    id: "airport",
    label: "Airport Distance",
    value: 15,
    suffix: " min",
    decimals: 0,
  },
] as const;

/**
 * Swap src to replace placeholder with production photography.
 */
export const ABOUT_MEDIA = {
  src: "/images/about/placeholder.svg",
  alt: "Omedad Hotel — elegant interior lounge in Addis Ababa",
} as const;
