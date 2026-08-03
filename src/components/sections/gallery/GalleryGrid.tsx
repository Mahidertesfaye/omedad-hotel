"use client";

import { GALLERY_IMAGES } from "@/constants/gallery";
import { useGalleryLightbox } from "@/hooks/useGalleryLightbox";
import { GalleryItem } from "./GalleryItem";
import { GalleryLightbox } from "./GalleryLightbox";
import styles from "./GalleryGrid.module.css";

export function GalleryGrid() {
  const { activeIndex, isOpen, open, close, next, prev } = useGalleryLightbox(
    GALLERY_IMAGES.length,
  );

  return (
    <>
      <ul className={styles.masonry} aria-label="Hotel photo gallery">
        {GALLERY_IMAGES.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            index={index}
            onOpen={open}
          />
        ))}
      </ul>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        activeIndex={activeIndex}
        isOpen={isOpen}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
