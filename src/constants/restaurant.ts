import type { RestaurantContent, RestaurantMedia } from "@/types/restaurant";

export const RESTAURANT_CONTENT: RestaurantContent = {
  overline: "Dining",
  heading: "Ethiopian flavors, international favorites, all-day dining",
  description: [
    "Our restaurant combines traditional Ethiopian cuisine with modern culinary techniques — offering authentic injera and wot dishes alongside international favorites, prepared with locally sourced ingredients.",
    "Enjoy a traditional Ethiopian coffee ceremony, a contemporary fusion menu, an extensive wine list, and light snacks in the bar & lounge. All-day dining from 6:30 AM to 11:00 PM.",
  ],
  cta: {
    label: "View the Menu",
    href: "/menu",
  },
};

/**
 * Swap src to replace placeholder with production photography.
 */
export const RESTAURANT_MEDIA: RestaurantMedia = {
  src: "/images/restaurant/placeholder.svg",
  alt: "Restaurant dining at Omedad Hotel — Ethiopian and international cuisine",
};
