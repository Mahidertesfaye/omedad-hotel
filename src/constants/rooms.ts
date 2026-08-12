import type { FeaturedRoom } from "@/types/rooms";

export const FEATURED_ROOMS_CONTENT = {
  overline: "Featured Rooms",
  heading: "Spaces crafted for comfort, elegance, and rest",
} as const;

/**
 * Swap image src values to replace placeholders with production photography.
 */
export const FEATURED_ROOMS: FeaturedRoom[] = [
  {
    id: "deluxe-king",
    title: "Deluxe King Room",
    description:
      "A serene retreat with floor-to-ceiling windows, bespoke furnishings, and refined touches throughout.",
    amenities: ["King Bed", "City View", "Marble Bath", "Smart TV"],
    price: { amount: 280, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "Deluxe King Room — spacious bedroom with city views",
    },
    href: "/rooms",
  },
  {
    id: "executive-suite",
    title: "Executive Suite",
    description:
      "Generous living space with a separate lounge, premium amenities, and panoramic views of Addis Ababa.",
    amenities: ["Separate Lounge", "Panoramic View", "Rain Shower", "Minibar"],
    price: { amount: 420, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "Executive Suite — elegant living area with panoramic windows",
    },
    href: "/rooms",
  },
  {
    id: "presidential-suite",
    title: "Presidential Suite",
    description:
      "Our most distinguished accommodation — expansive layout, private dining, and dedicated concierge service.",
    amenities: ["Private Dining", "Butler Service", "Jacuzzi", "Terrace"],
    price: { amount: 780, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "Presidential Suite — luxurious suite with private terrace",
    },
    href: "/rooms",
  },
];
