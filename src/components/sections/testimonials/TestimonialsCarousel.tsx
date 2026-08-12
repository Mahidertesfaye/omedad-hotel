"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { TESTIMONIALS } from "@/constants/testimonials";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./TestimonialsCarousel.module.css";

import "swiper/css";
import "swiper/css/pagination";

const PAGINATION_SELECTOR = "[data-testimonials-pagination]";

export function TestimonialsCarousel() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const canNavigate = TESTIMONIALS.length > 1;

  const goPrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const goNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[A11y, Autoplay, Pagination]}
        onSwiper={(instance) => {
          setSwiper(instance);

          if (
            canNavigate &&
            typeof instance.params.pagination === "object" &&
            instance.params.pagination
          ) {
            instance.params.pagination.el = PAGINATION_SELECTOR;
            instance.pagination.init();
            instance.pagination.render();
            instance.pagination.update();
          }
        }}
        slidesPerView={1}
        spaceBetween={32}
        loop={canNavigate}
        speed={prefersReducedMotion ? 0 : 550}
        autoplay={
          prefersReducedMotion || !canNavigate
            ? false
            : {
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        pagination={
          canNavigate
            ? {
                el: PAGINATION_SELECTOR,
                clickable: true,
                bulletClass: styles.bullet,
                bulletActiveClass: styles.bulletActive,
              }
            : false
        }
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous testimonial",
          nextSlideMessage: "Next testimonial",
          paginationBulletMessage: "Go to testimonial {{index}}",
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

      {canNavigate ? (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            aria-label="Previous testimonial"
            onClick={goPrev}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <div
            className={styles.pagination}
            data-testimonials-pagination
          />

          <button
            type="button"
            className={styles.navButton}
            aria-label="Next testimonial"
            onClick={goNext}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
