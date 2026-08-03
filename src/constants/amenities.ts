import type { Amenity } from "@/types/amenities";

export const AMENITIES_CONTENT = {
  overline: "Amenities & Services",
  heading: "Every comfort, thoughtfully considered",
  description:
    "From fine dining to restorative wellness, discover a curated collection of services designed to elevate every moment of your stay.",
} as const;

export const AMENITIES: Amenity[] = [
  {
    id: "restaurant",
    title: "Restaurant",
    description:
      "Savor refined cuisine and traditional Ethiopian coffee in an elegant dining room with impeccable service.",
    icon: "restaurant",
  },
  {
    id: "wifi",
    title: "High-Speed WiFi",
    description:
      "Stay seamlessly connected with complimentary high-speed wireless internet throughout the hotel.",
    icon: "wifi",
  },
  {
    id: "conference",
    title: "Conference Room",
    description:
      "Host meetings and events in sophisticated spaces equipped with modern audiovisual technology.",
    icon: "conference",
  },
  {
    id: "shuttle",
    title: "Airport Shuttle",
    description:
      "Arrive and depart with ease via our complimentary shuttle service to and from the airport.",
    icon: "shuttle",
  },
  {
    id: "gym",
    title: "Fitness Center",
    description:
      "Maintain your routine in a fully equipped gym with premium cardio and strength training facilities.",
    icon: "gym",
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description:
      "Unwind with bespoke treatments and tranquil therapies designed to restore body and mind.",
    icon: "spa",
  },
  {
    id: "parking",
    title: "Valet Parking",
    description:
      "Enjoy the convenience of secure on-site parking with attentive valet service upon arrival.",
    icon: "parking",
  },
];
