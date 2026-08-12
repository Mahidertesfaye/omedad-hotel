export const SITE_NAME = "Omedad Hotel";

/** Official hotel classification used across OTAs and partner listings. */
export const HOTEL_STAR_RATING = 4;

export const SITE_DESCRIPTION =
  "Omedad Hotel — a 4-star city hotel in Bole, Addis Ababa, approximately 6 minutes from Bole International Airport, welcoming business and leisure travelers with Ethiopian hospitality.";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omedadhotel.com";

export const SITE_LOCALE = "en";

export const CONTACT = {
  /** Primary number for schema / metadata */
  phone: "+251 155 798 18",
  phones: [
    {
      display: "+251 155 798 18 / 19 / 20",
      href: "tel:+25115579818",
    },
    {
      display: "+251 954 960 000",
      href: "tel:+251954960000",
    },
  ],
  email: "reservation@omedadhotel.com",
  address: "Airport Road, African Avenue, Bole, Addis Ababa, Ethiopia",
  addressDetail: "Kirkos Sub-city, W-01",
  reception: "24/7",
  restaurantHours: "6:30 AM – 11:00 PM",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/omedadhotel",
  facebook: "https://facebook.com/omedadhotel",
  twitter: "https://twitter.com/omedadhotel",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About", href: "/#about" },
  { label: "Rooms", href: "/rooms", sectionId: "rooms" },
  { label: "Dining", href: "/menu", sectionId: "restaurant" },
  { label: "Experience", href: "/#amenities" },
] as const;
