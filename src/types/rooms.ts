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
