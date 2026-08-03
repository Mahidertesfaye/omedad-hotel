"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { TESTIMONIALS } from "@/constants/testimonials";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./TestimonialsCarousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function TestimonialsCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[A11y, Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={650}
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        a11y={{
          prevSlideMessage: "Previous testimonial",
          nextSlideMessage: "Next testimonial",
        }}
        className={styles.swiper}
        aria-label="Guest testimonials carousel"
      >
        {TESTIMONIALS.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className={styles.slide}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        <button
          ref={prevRef}
          type="button"
          className={`${styles.navButton} ${styles.navPrev}`}
          aria-label="Previous testimonial"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          ref={nextRef}
          type="button"
          className={`${styles.navButton} ${styles.navNext}`}
          aria-label="Next testimonial"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
