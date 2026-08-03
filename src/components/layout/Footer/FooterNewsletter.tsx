"use client";

import { Button } from "@/components/common/Button";
import { FOOTER_CONTENT } from "@/constants/footer";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import styles from "./FooterNewsletter.module.css";

export function FooterNewsletter() {
  const { email, status, message, setEmail, handleSubmit } = useNewsletterForm();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isSubmitting = status === "submitting";
  const { newsletter } = FOOTER_CONTENT;

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.heading}>{newsletter.heading}</h2>
      <p className={styles.description}>{newsletter.description}</p>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-busy={isSubmitting}
      >
        <div className={styles.field}>
          <label htmlFor="footer-newsletter-email" className="sr-only">
            Email address for newsletter
          </label>
          <input
            id="footer-newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={newsletter.placeholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
            disabled={isSubmitting || status === "success"}
            aria-describedby={
              message ? "footer-newsletter-status" : undefined
            }
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            inverse
            disabled={isSubmitting || status === "success"}
            className={styles.submit}
          >
            {isSubmitting ? "Subscribing…" : newsletter.submitLabel}
          </Button>
        </div>

        <div
          id="footer-newsletter-status"
          role="status"
          aria-live="polite"
          className={styles.status}
          data-status={status}
          data-reduced-motion={prefersReducedMotion ? "true" : undefined}
        >
          {message}
        </div>
      </form>
    </div>
  );
}
