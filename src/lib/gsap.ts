import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

/** Registers GSAP plugins once per client session. */
export function ensureGsap(): typeof gsap {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }

  return gsap;
}

export { gsap, ScrollTrigger };
