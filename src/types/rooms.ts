export interface FeaturedRoomImage {
  src: string;
  alt: string;
}

export interface FeaturedRoomPrice {
  amount: number;
  currency: string;
  period: string;
}

export interface FeaturedRoom {
  id: string;
  title: string;
  description: string;
  amenities: string[];
  /** Starting rate — shown as a top-right image overlay on cards. */
  price?: FeaturedRoomPrice | null;
  availabilityLabel?: string;
  image: FeaturedRoomImage;
  href: string;
}

/** Full room catalog entry for the dedicated Rooms page. */
export interface RoomImage {
  src: string;
  alt: string;
}

export type RoomType = "king" | "twin" | "junior" | "suite" | "extra";

export type BedType = "King" | "Twin";

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: RoomImage;
  gallery: RoomImage[];
  /** Starting nightly rate — shown as a top-right image overlay on cards. */
  price?: number | null;
  currency?: string;
  size?: string;
  bedType: BedType;
  guests: number;
  amenities: string[];
  featured: boolean;
  roomType: RoomType;
}

export interface RoomFiltersState {
  roomType: RoomType | "all";
  guests: number | "all";
  bedType: BedType | "all";
}
