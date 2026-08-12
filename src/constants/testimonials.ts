import type { Testimonial, TestimonialsContent } from "@/types/testimonials";

export const TESTIMONIALS_CONTENT: TestimonialsContent = {
  overline: "Guest Experiences",
  heading: "What guests appreciate about their stay",
  description:
    "Guests often mention airport convenience, comfortable rooms, attentive staff, and well-equipped meeting spaces — themes reflected on Omedad Hotel’s own guest testimonials.",
};

const AVATAR_PLACEHOLDER = "/images/testimonials/avatar-placeholder.svg";

/**
 * Theme-aligned guest feedback based on emphases shown on the official website.
 * Replace with verified quotes and attribution when the hotel supplies them.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "airport-convenience",
    name: "Business traveler",
    country: "Addis Ababa stay",
    rating: 5,
    review:
      "The location near Bole International Airport made arrivals and departures effortless. Reception was ready around the clock, and the stay felt calm after a long flight.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Guest avatar placeholder",
    },
  },
  {
    id: "rooms-comfort",
    name: "Leisure guest",
    country: "Addis Ababa stay",
    rating: 5,
    review:
      "Spacious, clean rooms and a comfortable bed made rest easy. Housekeeping was attentive, and the hotel felt modern without losing Ethiopian warmth.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Guest avatar placeholder",
    },
  },
  {
    id: "meeting-facilities",
    name: "Conference guest",
    country: "Addis Ababa stay",
    rating: 5,
    review:
      "The meeting venue was modern, spacious, and well-equipped for professional gatherings. Staff were attentive from setup through to the end of the day.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Guest avatar placeholder",
    },
  },
  {
    id: "city-access",
    name: "City visitor",
    country: "Addis Ababa stay",
    rating: 5,
    review:
      "A convenient base for exploring landmarks and business destinations across Addis Ababa — close to the airport, with a team that made every request feel simple.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Guest avatar placeholder",
    },
  },
];
