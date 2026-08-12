import type { Metadata } from "next";
import { MenuHero, MenuListing } from "@/components/menu";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Dining Menu",
  description:
    "Ethiopian cuisine, international favorites, coffee ceremony, and all-day dining at Omedad Hotel — 6:30 AM to 11:00 PM.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `Dining at Omedad | ${SITE_NAME}`,
    description:
      "Traditional Ethiopian dishes and international favorites at Omedad Hotel in Bole, Addis Ababa.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuListing />
    </>
  );
}
