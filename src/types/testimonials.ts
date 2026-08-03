export interface TestimonialPhoto {
  src: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  photo: TestimonialPhoto;
}

export interface TestimonialsContent {
  overline: string;
  heading: string;
  description: string;
}
