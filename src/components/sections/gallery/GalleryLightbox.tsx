"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { GalleryImage } from "@/types/gallery";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import styles from "./GalleryLightbox.module.css";

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
  }, [isOpen, activeIndex]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && activeImage && activeIndex !== null && (
        <motion.div
          className={styles.root}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} — image viewer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.button
            type="button"
            className={styles.backdrop}
            onClick={onClose}
            aria-label="Close gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
          />

          <div className={styles.toolbar}>
            <p className={styles.counter}>
              {activeIndex + 1} / {images.length}
            </p>

            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight aria-hidden="true" />
          </button>

          <motion.figure
            key={activeImage.id}
            className={styles.figure}
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <OptimizedImage
              src={activeImage.src}
              alt={activeImage.alt}
              width={1200}
              height={900}
              sizes="100vw"
              priority
              className={styles.image}
              draggable={false}
            />
            <figcaption className={styles.caption}>
              <span className={styles.captionCategory}>
                {activeImage.category}
              </span>
              <span className={styles.captionTitle}>{activeImage.title}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
