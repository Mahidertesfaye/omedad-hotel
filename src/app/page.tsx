import {
  About,
  Amenities,
  Booking,
  FeaturedRooms,
  Gallery,
  Hero,
  Location,
  Restaurant,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <FeaturedRooms />

      <Restaurant />

      <Amenities />

      <Gallery />

      <Testimonials />

      <Location />

      <Booking />
    </>
  );
}
