import type { RestaurantContent, RestaurantMedia } from "@/types/restaurant";

export const RESTAURANT_CONTENT: RestaurantContent = {
  overline: "Fine Dining",
  heading: "Where every course tells a story of craft and refinement",
  description: [
    "The Grand Table offers an intimate dining experience rooted in seasonal ingredients, classical technique, and the warm hospitality Omedad Hotel is known for.",
    "From leisurely breakfasts to candlelit dinners, our chefs compose menus that celebrate Ethiopian heritage — from the coffee ceremony to regional flavors — while embracing contemporary elegance. A destination in itself for discerning guests and Addis Ababa locals alike.",
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
  alt: "The Grand Table — elegant restaurant interior at Omedad Hotel",
};
