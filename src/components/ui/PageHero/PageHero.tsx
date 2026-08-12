"use client";

import { motion } from "framer-motion";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/common/Breadcrumb";
import { PageContainer } from "@/components/ui/PageContainer";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import styles from "./PageHero.module.css";

export interface PageHeroProps {
  title: string;
  description: string;
  breadcrumb: readonly BreadcrumbItem[];
  imageSrc: string;
  headingId: string;
  pattern?: "geometric" | "weave";
  className?: string;
}

export function PageHero({
  title,
  description,
  breadcrumb,
  imageSrc,
  headingId,
  pattern = "geometric",
  className,
}: PageHeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={cn(styles.hero, className)}
      aria-labelledby={headingId}
    >
      <div className={styles.media} aria-hidden="true">
        <OptimizedImage
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay} />
        <div
          className={cn(
            styles.pattern,
            pattern === "weave" ? styles.patternWeave : styles.patternGeometric,
          )}
        />
      </div>

      <PageContainer className={styles.content}>
        <motion.div
          className={styles.inner}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Breadcrumb items={breadcrumb} tone="light" />

          <h1 id={headingId} className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>{description}</p>
        </motion.div>
      </PageContainer>
    </section>
  );
}
