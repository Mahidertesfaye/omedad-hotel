export type GalleryAspectRatio =
  | "portrait"
  | "landscape"
  | "square"
  | "tall"
  | "wide";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  aspectRatio: GalleryAspectRatio;
}

export interface GalleryContent {
  overline: string;
  heading: string;
  description: string;
}
