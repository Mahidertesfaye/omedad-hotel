import type { ImageProps } from "next/image";
import Image from "next/image";
import { cn } from "@/utils";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
};

function isSvgSrc(src: ImageProps["src"]) {
  if (typeof src !== "string") return false;
  return src.split("?")[0]?.toLowerCase().endsWith(".svg") ?? false;
}

/**
 * Shared next/image wrapper with sensible defaults for layout and performance.
 * SVGs are served unoptimized — the image optimizer's SVG security headers
 * (attachment + CSP sandbox) break rendering in <img>.
 */
export function OptimizedImage({
  className,
  fill,
  sizes,
  priority = false,
  quality = 85,
  unoptimized,
  src,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      className={cn(className)}
      src={src}
      fill={fill}
      sizes={sizes ?? (fill ? "100vw" : undefined)}
      priority={priority}
      quality={quality}
      unoptimized={unoptimized ?? isSvgSrc(src)}
      {...props}
    />
  );
}
