import type { Metadata } from "next";
import { RoomsHero, RoomsListing } from "@/components/rooms";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "King Standard, Twin Standard, Junior Deluxe, Suite Room, and King-Extra at Omedad Hotel — a 4-star hotel in Bole, Addis Ababa.",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: `Rooms & Suites | ${SITE_NAME}`,
    description:
      "Five room types at Omedad Hotel — comfort for business and leisure travelers near Bole Airport.",
    url: "/rooms",
  },
};

export default function RoomsPage() {
  return (
    <>
      <RoomsHero />
      <RoomsListing />
    </>
  );
}
