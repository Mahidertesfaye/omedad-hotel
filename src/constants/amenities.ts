import type { Amenity } from "@/types/amenities";

export const AMENITIES_CONTENT = {
  overline: "Amenities & Services",
  heading: "Comforts for business and leisure",
  description:
    "From all-day dining to wellness and meetings — services designed for travelers arriving in Addis Ababa.",
} as const;

/** Facilities highlighted on Omedad Hotel's official website. */
export const AMENITIES: Amenity[] = [
  {
    id: "restaurant",
    title: "All-Day Dining",
    description:
      "Global flavors, fresh ingredients, and Ethiopian hospitality throughout the day — 6:30 AM to 11:00 PM.",
    icon: "restaurant",
  },
  {
    id: "bar",
    title: "Bar & Lounge",
    description:
      "A space to relax with drinks and light snacks after a flight or a day in the city.",
    icon: "bar",
  },
  {
    id: "gym",
    title: "Fitness Center",
    description:
      "A state-of-the-art fitness center with modern equipment and personal trainers.",
    icon: "gym",
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    description:
      "A luxury spa incorporating traditional Ethiopian healing techniques.",
    icon: "spa",
  },
  {
    id: "conference",
    title: "Meetings & Events",
    description:
      "Modern spaces for meetings, conferences, and professional gatherings in the heart of Addis Ababa.",
    icon: "conference",
  },
  {
    id: "reception",
    title: "24-Hour Reception",
    description:
      "Round-the-clock reception so arrivals and departures fit your schedule — day or night.",
    icon: "reception",
  },
  {
    id: "concierge",
    title: "Concierge",
    description:
      "Attentive concierge service with convenient access to major business destinations.",
    icon: "concierge",
  },
];
