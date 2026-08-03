import type { Testimonial, TestimonialsContent } from "@/types/testimonials";

export const TESTIMONIALS_CONTENT: TestimonialsContent = {
  overline: "Guest Experiences",
  heading: "Words from those who have stayed with us",
  description:
    "Our guests come from around the world. Here is what they share about their time at Omedad Hotel.",
};

const AVATAR_PLACEHOLDER = "/images/testimonials/avatar-placeholder.svg";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    rating: 5,
    review:
      "From the moment we arrived, every detail felt considered. The suite was immaculate, the staff remembered our preferences, and dining at The Grand Table was an experience we will not soon forget.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Portrait of Sarah Mitchell",
    },
  },
  {
    id: "james-chen",
    name: "James Chen",
    country: "Singapore",
    rating: 5,
    review:
      "A rare balance of grandeur and warmth. The lobby alone sets the tone, but it is the thoughtful service throughout the stay that truly distinguishes Omedad Hotel from other luxury properties.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Portrait of James Chen",
    },
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    country: "Italy",
    rating: 5,
    review:
      "We chose Omedad for a special anniversary and were delighted at every turn. The spa, the room, the quiet attention to detail — everything felt personal, unhurried, and genuinely luxurious.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Portrait of Elena Rossi",
    },
  },
  {
    id: "david-okonkwo",
    name: "David Okonkwo",
    country: "Nigeria",
    rating: 5,
    review:
      "I travel frequently for business and Omedad stands out for its consistency. Fast WiFi, a well-equipped gym, seamless airport transfer, and a team that makes you feel welcome after a long flight.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Portrait of David Okonkwo",
    },
  },
  {
    id: "marie-dubois",
    name: "Marie Dubois",
    country: "France",
    rating: 5,
    review:
      "An elegant hotel with a sense of place. The design is refined without being cold, and the city views from our room at sunset over Addis Ababa were simply unforgettable. We will return on our next visit to Ethiopia.",
    photo: {
      src: AVATAR_PLACEHOLDER,
      alt: "Portrait of Marie Dubois",
    },
  },
];
