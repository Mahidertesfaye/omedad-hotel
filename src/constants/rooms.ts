import type { FeaturedRoom } from "@/types/rooms";

export const FEATURED_ROOMS_CONTENT = {
  overline: "Featured Rooms",
  heading: "Spaces crafted for comfort and rest",
  exploreMore: {
    label: "Explore More",
    href: "/rooms",
  },
} as const;

/**
 * Homepage showcase — first three rooms from the official listing.
 * Full catalog (Suite Room, King-Extra, etc.) lives on `/rooms`.
 */
export const FEATURED_ROOMS: FeaturedRoom[] = [
  {
    id: "king-standard",
    title: "King Standard",
    description:
      "Experience luxury and comfort in our beautifully appointed rooms.",
    amenities: ["2 Adults", "Buffet Breakfast", "Shuttle Service"],
    price: { amount: 55, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "King Standard room at Omedad Hotel",
    },
    href: "/rooms#king-standard",
  },
  {
    id: "twin-standard",
    title: "Twin Standard",
    description:
      "Perfect for friends or colleagues, this room offers two cozy twin beds with all the essentials for comfort.",
    amenities: ["2 Adults", "Buffet Breakfast", "Shuttle Service"],
    price: { amount: 75, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "Twin Standard room at Omedad Hotel",
    },
    href: "/rooms#twin-standard",
  },
  {
    id: "junior-deluxe",
    title: "Junior Deluxe",
    description: "The ultimate in comfort and convenience.",
    amenities: ["2 Adults", "Buffet Breakfast", "Shuttle Service"],
    price: { amount: 60, currency: "USD", period: "night" },
    image: {
      src: "/images/rooms/placeholder.svg",
      alt: "Junior Deluxe room at Omedad Hotel",
    },
    href: "/rooms#junior-deluxe",
  },
];
