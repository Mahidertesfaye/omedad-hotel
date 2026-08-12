import type { Metadata } from "next";
import { MenuHero, MenuListing } from "@/components/menu";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Dining Menu",
  description:
    "Browse a demo dining menu at Omedad Hotel — Ethiopian specialties and international cuisine. Official menu details coming soon.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: `Dining at Omedad | ${SITE_NAME}`,
    description:
      "Discover Ethiopian favorites and international cuisine at Omedad Hotel.",
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
