export type HeroMediaType = "image" | "video";

export interface HeroImageMedia {
  type: "image";
  src: string;
  alt: string;
}

export interface HeroVideoMedia {
  type: "video";
  src: string;
  poster: string;
  alt?: string;
}

export type HeroMediaConfig = HeroImageMedia | HeroVideoMedia;
