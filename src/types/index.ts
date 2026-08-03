import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type SectionVariant = "default" | "alt" | "dark";

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
}

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: ReactNode;
}

export type {
  HeroMediaConfig,
  HeroMediaType,
  HeroImageMedia,
  HeroVideoMedia,
} from "./hero";

export type {
  BookingSearchValues,
  BookingSearchVariant,
} from "./booking";

export type { AboutStat } from "./about";

export type {
  FeaturedRoom,
  FeaturedRoomImage,
  FeaturedRoomPrice,
} from "./rooms";

export type { Amenity, AmenityIcon } from "./amenities";

export type {
  RestaurantContent,
  RestaurantCta,
  RestaurantMedia,
} from "./restaurant";

export type {
  GalleryAspectRatio,
  GalleryContent,
  GalleryImage,
} from "./gallery";

export type {
  Testimonial,
  TestimonialPhoto,
  TestimonialsContent,
} from "./testimonials";

export type {
  Coordinates,
  LocationContact,
  LocationContent,
  LocationData,
  LocationMapConfig,
  LocationMarker,
  LocationMarkerType,
} from "./location";

export type {
  FooterContent,
  FooterNewsletterContent,
  FooterSocialLink,
  NewsletterStatus,
  SocialPlatform,
} from "./footer";
