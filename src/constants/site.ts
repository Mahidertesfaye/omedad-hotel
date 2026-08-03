export const SITE_NAME = "Omedad Hotel";

export const SITE_DESCRIPTION =
  "Experience refined luxury and authentic Ethiopian hospitality at Omedad Hotel — where warm welcome meets timeless elegance in the heart of Addis Ababa.";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://omedadhotel.com";

export const SITE_LOCALE = "en";

export const CONTACT = {
  phone: "+251 11 551 1234",
  email: "reservations@omedadhotel.com",
  address: "Bole Road, Addis Ababa, Ethiopia",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/omedadhotel",
  facebook: "https://facebook.com/omedadhotel",
  twitter: "https://twitter.com/omedadhotel",
} as const;

export const NAV_LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#restaurant" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
] as const;
