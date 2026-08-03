"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { FeaturedRoom } from "@/types/rooms";
import { FeaturedRoomCard } from "./FeaturedRoomCard";
import styles from "./FeaturedRoomsSlider.module.css";

import "swiper/css";
import "swiper/css/pagination";

interface FeaturedRoomsSliderProps {
  rooms: FeaturedRoom[];
}

export function FeaturedRoomsSlider({ rooms }: FeaturedRoomsSliderProps) {
  return (
    <div className={styles.slider} aria-label="Featured room carousel">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {rooms.map((room) => (
          <SwiperSlide key={room.id} className={styles.slide}>
            <FeaturedRoomCard room={room} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
