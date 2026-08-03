import type { ImageProps } from "next/image";
import Image from "next/image";
import { cn } from "@/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
};

/**
 * Shared next/image wrapper with sensible defaults for layout and performance.
 */
export function OptimizedImage({
  className,
  fill,
  sizes,
  priority = false,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      className={cn(className)}
      fill={fill}
      sizes={sizes ?? (fill ? "100vw" : undefined)}
      priority={priority}
      quality={quality}
      {...props}
    />
  );
}
