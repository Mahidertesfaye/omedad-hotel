import type { Room, RoomFiltersState } from "@/types/rooms";

/**
 * Demo room catalog for the dedicated Rooms page.
 * Placeholder content only — replace with real Omedad Hotel inventory later.
 * Keep this module as the single data source so a future API can swap in cleanly.
 */

const ROOM_IMAGE = {
  src: "/images/rooms/placeholder.svg",
  alt: "Room placeholder — photography to be added",
} as const;

export const ROOMS_PAGE_CONTENT = {
  title: "Rooms & Suites",
  description:
    "Choose a space shaped for rest and refined comfort — from serene deluxe rooms to expansive suites overlooking Addis Ababa.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/rooms" },
  ],
  demoNotice:
    "Demo content for layout and browsing. Room details and photography will be updated with official Omedad Hotel information.",
  filtersLabel: "Filter rooms",
  emptyMessage: "No rooms match your current filters. Try adjusting your selection.",
  bookHref: "/#booking",
} as const;

export const ROOMS: Room[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    slug: "deluxe-king",
    description:
      "A calm retreat with floor-to-ceiling windows, bespoke furnishings, and thoughtful details for restful nights in the city.",
    image: {
      ...ROOM_IMAGE,
      alt: "Deluxe King Room — spacious bedroom with city views",
    },
    gallery: [{ ...ROOM_IMAGE }, { ...ROOM_IMAGE }],
    price: 280,
    currency: "USD",
    size: "32 m²",
    bedType: "King",
    guests: 2,
    amenities: ["King Bed", "City View", "Marble Bath", "Smart TV", "Work Desk"],
    featured: true,
    roomType: "deluxe",
  },
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    slug: "deluxe-twin",
    description:
      "Thoughtfully appointed twin beds and a bright layout suited for colleagues or companions traveling together.",
    image: {
      ...ROOM_IMAGE,
      alt: "Deluxe Twin Room — twin beds in a refined layout",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 265,
    currency: "USD",
    size: "30 m²",
    bedType: "Twin",
    guests: 2,
    amenities: ["Twin Beds", "City View", "Rain Shower", "Smart TV"],
    featured: false,
    roomType: "deluxe",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    slug: "executive-suite",
    description:
      "A generous suite with a separate lounge, premium amenities, and panoramic views across Addis Ababa.",
    image: {
      ...ROOM_IMAGE,
      alt: "Executive Suite — elegant living area with panoramic windows",
    },
    gallery: [{ ...ROOM_IMAGE }, { ...ROOM_IMAGE }],
    price: 420,
    currency: "USD",
    size: "58 m²",
    bedType: "King",
    guests: 3,
    amenities: ["Separate Lounge", "Panoramic View", "Rain Shower", "Minibar", "Nespresso"],
    featured: true,
    roomType: "suite",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    slug: "family-suite",
    description:
      "Spacious accommodation with a king bed and sofa bed — designed for families who value comfort and privacy.",
    image: {
      ...ROOM_IMAGE,
      alt: "Family Suite — spacious suite for families",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 480,
    currency: "USD",
    size: "64 m²",
    bedType: "King + Sofa Bed",
    guests: 4,
    amenities: ["King Bed", "Sofa Bed", "Living Area", "Bathtub", "Smart TV"],
    featured: false,
    roomType: "suite",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    slug: "presidential-suite",
    description:
      "Our most distinguished accommodation — an expansive layout, private dining, and dedicated concierge service.",
    image: {
      ...ROOM_IMAGE,
      alt: "Presidential Suite — luxurious suite with private terrace",
    },
    gallery: [{ ...ROOM_IMAGE }, { ...ROOM_IMAGE }, { ...ROOM_IMAGE }],
    price: 780,
    currency: "USD",
    size: "120 m²",
    bedType: "King",
    guests: 4,
    amenities: ["Private Dining", "Butler Service", "Jacuzzi", "Terrace", "Dressing Room"],
    featured: true,
    roomType: "presidential",
  },
  {
    id: "standard-queen",
    name: "Classic Queen Room",
    slug: "classic-queen",
    description:
      "An elegant essentials room with a queen bed, soft lighting, and everything needed for a restorative stay.",
    image: {
      ...ROOM_IMAGE,
      alt: "Classic Queen Room — comfortable queen bedroom",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 195,
    currency: "USD",
    size: "24 m²",
    bedType: "Queen",
    guests: 2,
    amenities: ["Queen Bed", "Walk-in Shower", "Smart TV", "Work Desk"],
    featured: false,
    roomType: "standard",
  },
];

export const DEFAULT_ROOM_FILTERS: RoomFiltersState = {
  roomType: "all",
  guests: "all",
  bedType: "all",
  priceRange: "all",
};

export const ROOM_TYPE_OPTIONS = [
  { value: "all", label: "All types" },
  { value: "standard", label: "Classic" },
  { value: "deluxe", label: "Deluxe" },
  { value: "suite", label: "Suite" },
  { value: "presidential", label: "Presidential" },
] as const;

export const GUEST_OPTIONS = [
  { value: "all", label: "Any guests" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
  { value: 3, label: "3+" },
  { value: 4, label: "4+" },
] as const;

export const BED_TYPE_OPTIONS = [
  { value: "all", label: "Any bed" },
  { value: "King", label: "King" },
  { value: "Queen", label: "Queen" },
  { value: "Twin", label: "Twin" },
  { value: "King + Sofa Bed", label: "King + Sofa" },
] as const;

export const PRICE_RANGE_OPTIONS = [
  { value: "all", label: "Any price" },
  { value: "under-300", label: "Under $300" },
  { value: "300-500", label: "$300 – $500" },
  { value: "over-500", label: "Over $500" },
] as const;

/** Filter rooms client-side. Swap this for an API query later without changing the UI. */
export function filterRooms(
  rooms: readonly Room[],
  filters: RoomFiltersState,
): Room[] {
  return rooms.filter((room) => {
    if (filters.roomType !== "all" && room.roomType !== filters.roomType) {
      return false;
    }

    if (filters.guests !== "all" && room.guests < filters.guests) {
      return false;
    }

    if (filters.bedType !== "all" && room.bedType !== filters.bedType) {
      return false;
    }

    if (filters.priceRange === "under-300" && room.price >= 300) {
      return false;
    }

    if (
      filters.priceRange === "300-500" &&
      (room.price < 300 || room.price > 500)
    ) {
      return false;
    }

    if (filters.priceRange === "over-500" && room.price <= 500) {
      return false;
    }

    return true;
  });
}

export function getRoomBySlug(slug: string): Room | undefined {
  return ROOMS.find((room) => room.slug === slug);
}
