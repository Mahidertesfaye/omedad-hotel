import { BOOK_NOW_HREF } from "@/constants/navigation";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/constants/site";
import type { FooterContent, FooterSocialLink } from "@/types/footer";

export const FOOTER_CONTENT: FooterContent = {
  tagline: "Refined luxury and Ethiopian hospitality in the heart of Addis Ababa.",
  navHeading: "Explore",
  contactHeading: "Contact",
  socialHeading: "Follow Us",
  newsletter: {
    heading: "Stay Informed",
    description: "Receive exclusive offers, seasonal menus, and hotel news.",
    placeholder: "Your email address",
    submitLabel: "Subscribe",
    successMessage: "Thank you for subscribing. We look forward to welcoming you.",
    errorMessage: "Something went wrong. Please try again shortly.",
  },
};

export const FOOTER_NAV_LINKS = [
  ...NAV_LINKS,
  { label: "Book Now", href: BOOK_NOW_HREF },
] as const;

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    platform: "instagram",
    href: SOCIAL_LINKS.instagram,
    label: "Follow Omedad Hotel on Instagram",
  },
  {
    platform: "facebook",
    href: SOCIAL_LINKS.facebook,
    label: "Follow Omedad Hotel on Facebook",
  },
  {
    platform: "twitter",
    href: SOCIAL_LINKS.twitter,
    label: "Follow Omedad Hotel on X (Twitter)",
  },
];

export const FOOTER_CONTACT = CONTACT;
