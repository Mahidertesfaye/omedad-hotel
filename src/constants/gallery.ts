import type { GalleryContent, GalleryImage } from "@/types/gallery";

export const GALLERY_CONTENT: GalleryContent = {
  overline: "Gallery",
  heading: "A glimpse into life at Omedad",
  description:
    "Explore the spaces, details, and moments that define the Omedad Hotel experience — from sunlit suites to candlelit evenings.",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "grand-lobby",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Grand lobby with marble floors and natural light",
    title: "Grand Lobby",
    category: "Interior",
    aspectRatio: "tall",
  },
  {
    id: "executive-suite",
    src: "/images/gallery/placeholder-02.svg",
    alt: "Executive suite with panoramic city views",
    title: "Executive Suite",
    category: "Rooms",
    aspectRatio: "landscape",
  },
  {
    id: "fine-dining",
    src: "/images/gallery/placeholder-03.svg",
    alt: "Fine dining table setting at The Grand Table",
    title: "The Grand Table",
    category: "Dining",
    aspectRatio: "square",
  },
  {
    id: "spa-retreat",
    src: "/images/gallery/placeholder-04.svg",
    alt: "Spa treatment room with serene ambiance",
    title: "Spa Retreat",
    category: "Wellness",
    aspectRatio: "portrait",
  },
  {
    id: "rooftop-lounge",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Rooftop lounge overlooking the city skyline",
    title: "Rooftop Lounge",
    category: "Lifestyle",
    aspectRatio: "wide",
  },
  {
    id: "deluxe-room",
    src: "/images/gallery/placeholder-02.svg",
    alt: "Deluxe room with refined contemporary furnishings",
    title: "Deluxe Room",
    category: "Rooms",
    aspectRatio: "tall",
  },
  {
    id: "breakfast-service",
    src: "/images/gallery/placeholder-03.svg",
    alt: "Artfully plated breakfast service",
    title: "Morning Service",
    category: "Dining",
    aspectRatio: "landscape",
  },
  {
    id: "pool-terrace",
    src: "/images/gallery/placeholder-04.svg",
    alt: "Outdoor pool terrace with loungers",
    title: "Pool Terrace",
    category: "Amenities",
    aspectRatio: "square",
  },
  {
    id: "event-space",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Elegant event space prepared for a reception",
    title: "Event Space",
    category: "Events",
    aspectRatio: "portrait",
  },
];
