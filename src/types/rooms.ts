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
  price: FeaturedRoomPrice;
  image: FeaturedRoomImage;
  href: string;
}

/** Full room catalog entry for the dedicated Rooms page. */
export interface RoomImage {
  src: string;
  alt: string;
}

export type RoomType = "deluxe" | "suite" | "presidential" | "standard";

export type BedType = "King" | "Queen" | "Twin" | "King + Sofa Bed";

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: RoomImage;
  gallery: RoomImage[];
  price: number;
  currency: string;
  size: string;
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
  priceRange: "all" | "under-300" | "300-500" | "over-500";
}
