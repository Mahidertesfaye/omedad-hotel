import type { GalleryContent, GalleryImage } from "@/types/gallery";

export const GALLERY_CONTENT: GalleryContent = {
  overline: "Gallery",
  heading: "A glimpse into life at Omedad",
  description:
    "Explore the spaces that define the Omedad Hotel experience — rooms, dining, wellness, and gathering places in Bole.",
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "hotel-lobby",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Hotel lobby and reception at Omedad Hotel",
    title: "Reception Lobby",
    category: "Interior",
    aspectRatio: "tall",
  },
  {
    id: "king-standard",
    src: "/images/gallery/placeholder-02.svg",
    alt: "King Standard room at Omedad Hotel",
    title: "King Standard",
    category: "Rooms",
    aspectRatio: "landscape",
  },
  {
    id: "restaurant-dining",
    src: "/images/gallery/placeholder-03.svg",
    alt: "Restaurant dining at Omedad Hotel",
    title: "All-Day Dining",
    category: "Dining",
    aspectRatio: "square",
  },
  {
    id: "spa-wellness",
    src: "/images/gallery/placeholder-04.svg",
    alt: "Spa and wellness at Omedad Hotel",
    title: "Spa & Wellness",
    category: "Wellness",
    aspectRatio: "portrait",
  },
  {
    id: "bar-lounge",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Bar and lounge at Omedad Hotel",
    title: "Bar & Lounge",
    category: "Lifestyle",
    aspectRatio: "wide",
  },
  {
    id: "twin-standard",
    src: "/images/gallery/placeholder-02.svg",
    alt: "Twin Standard room at Omedad Hotel",
    title: "Twin Standard",
    category: "Rooms",
    aspectRatio: "tall",
  },
  {
    id: "coffee-ceremony",
    src: "/images/gallery/placeholder-03.svg",
    alt: "Traditional Ethiopian coffee ceremony",
    title: "Coffee Ceremony",
    category: "Dining",
    aspectRatio: "landscape",
  },
  {
    id: "fitness-center",
    src: "/images/gallery/placeholder-04.svg",
    alt: "Fitness center at Omedad Hotel",
    title: "Fitness Center",
    category: "Amenities",
    aspectRatio: "square",
  },
  {
    id: "meeting-space",
    src: "/images/gallery/placeholder-01.svg",
    alt: "Meeting and event space at Omedad Hotel",
    title: "Meetings & Events",
    category: "Events",
    aspectRatio: "portrait",
  },
];
