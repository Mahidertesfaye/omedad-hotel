import type { Room, RoomFiltersState } from "@/types/rooms";

/**
 * Official room catalog from the omedadhotel.com /rooms listing.
 * Names, descriptions, amenities, and nightly rates copied from that page
 * (listing only — room detail routes 404 on the live site).
 */

const ROOM_IMAGE = {
  src: "/images/rooms/placeholder.svg",
  alt: "Room placeholder — photography to be added",
} as const;

const SHARED_AMENITIES = [
  "2 Adults",
  "Buffet Breakfast",
  "Shuttle Service",
] as const;

export const ROOMS_PAGE_CONTENT = {
  title: "Our Rooms",
  description:
    "Our hotel features 72 thoughtfully designed rooms to suit every type of traveler—whether you’re here for business, leisure, or a bit of both. Each room is a relaxing retreat, blending modern amenities with warm, welcoming interiors to ensure your stay is as comfortable as it is memorable.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms" },
  ],
  notice:
    "Rates shown are per night as listed on our rooms page and may vary by date. Contact us to confirm current availability.",
  filtersLabel: "Filter rooms",
  emptyMessage: "No rooms match your current filters. Try adjusting your selection.",
  bookHref: "/#booking",
  availabilityLabel: "Check availability",
} as const;

export const ROOMS: Room[] = [
  {
    id: "king-standard",
    name: "King Standard",
    slug: "king-standard",
    description:
      "Experience luxury and comfort in our beautifully appointed rooms.",
    image: {
      ...ROOM_IMAGE,
      alt: "King Standard room at Omedad Hotel",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 55,
    currency: "USD",
    bedType: "King",
    guests: 2,
    amenities: [...SHARED_AMENITIES],
    featured: true,
    roomType: "king",
  },
  {
    id: "twin-standard",
    name: "Twin Standard",
    slug: "twin-standard",
    description:
      "Perfect for friends or colleagues, this room offers two cozy twin beds with all the essentials for comfort.",
    image: {
      ...ROOM_IMAGE,
      alt: "Twin Standard room at Omedad Hotel",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 75,
    currency: "USD",
    bedType: "Twin",
    guests: 2,
    amenities: [...SHARED_AMENITIES],
    featured: true,
    roomType: "twin",
  },
  {
    id: "junior-deluxe",
    name: "Junior Deluxe",
    slug: "junior-deluxe",
    description: "The ultimate in comfort and convenience.",
    image: {
      ...ROOM_IMAGE,
      alt: "Junior Deluxe room at Omedad Hotel",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 60,
    currency: "USD",
    bedType: "King",
    guests: 2,
    amenities: [...SHARED_AMENITIES],
    featured: true,
    roomType: "junior",
  },
  {
    id: "suite-room",
    name: "Suite Room",
    slug: "suite-room",
    description: "Perfect for families seeking comfort and space.",
    image: {
      ...ROOM_IMAGE,
      alt: "Suite Room at Omedad Hotel",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 100,
    currency: "USD",
    bedType: "King",
    guests: 2,
    amenities: [...SHARED_AMENITIES],
    featured: true,
    roomType: "suite",
  },
  {
    id: "king-extra",
    name: "King-Extra",
    slug: "king-extra",
    description:
      "An upgraded king room with added space and amenities, offering enhanced comfort for longer or more indulgent stays.",
    image: {
      ...ROOM_IMAGE,
      alt: "King-Extra room at Omedad Hotel",
    },
    gallery: [{ ...ROOM_IMAGE }],
    price: 80,
    currency: "USD",
    bedType: "King",
    guests: 2,
    amenities: [...SHARED_AMENITIES],
    featured: true,
    roomType: "extra",
  },
];

export const DEFAULT_ROOM_FILTERS: RoomFiltersState = {
  roomType: "all",
  guests: "all",
  bedType: "all",
};

export const ROOM_TYPE_OPTIONS = [
  { value: "all", label: "All Rooms" },
  { value: "king", label: "King" },
  { value: "twin", label: "Twin" },
  { value: "junior", label: "Junior" },
  { value: "suite", label: "Suite" },
  { value: "extra", label: "King-Extra" },
] as const;

export const GUEST_OPTIONS = [
  { value: "all", label: "Any guests" },
  { value: 1, label: "1+" },
  { value: 2, label: "2+" },
] as const;

export const BED_TYPE_OPTIONS = [
  { value: "all", label: "Any bed" },
  { value: "King", label: "King" },
  { value: "Twin", label: "Twin" },
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

    return true;
  });
}

export function getRoomBySlug(slug: string): Room | undefined {
  return ROOMS.find((room) => room.slug === slug);
}
