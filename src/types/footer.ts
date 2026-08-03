export interface FooterNewsletterContent {
  heading: string;
  description: string;
  placeholder: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface FooterContent {
  tagline: string;
  navHeading: string;
  contactHeading: string;
  socialHeading: string;
  newsletter: FooterNewsletterContent;
}

export type SocialPlatform = "instagram" | "facebook" | "twitter";

export interface FooterSocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export type NewsletterStatus = "idle" | "submitting" | "success" | "error";
