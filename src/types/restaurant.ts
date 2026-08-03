export interface RestaurantMedia {
  src: string;
  alt: string;
}

export interface RestaurantCta {
  label: string;
  href: string;
}

export interface RestaurantContent {
  overline: string;
  heading: string;
  description: readonly string[];
  cta: RestaurantCta;
}
