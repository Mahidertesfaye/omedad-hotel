import type { Metadata } from "next";
import { RoomsHero, RoomsListing } from "@/components/rooms";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore deluxe rooms and suites at Omedad Hotel in Addis Ababa. Demo listings for browsing — official room details coming soon.",
  alternates: {
    canonical: "/rooms",
  },
  openGraph: {
    title: `Rooms & Suites | ${SITE_NAME}`,
    description:
      "Choose accommodation crafted for comfort and refined rest at Omedad Hotel.",
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
