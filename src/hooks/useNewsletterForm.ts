"use client";

import { useCallback, useState } from "react";
import { FOOTER_CONTENT } from "@/constants/footer";
import type { NewsletterStatus } from "@/types/footer";

export interface UseNewsletterFormResult {
  email: string;
  status: NewsletterStatus;
  message: string | null;
  setEmail: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}

/**
 * Newsletter form state. Currently simulates a successful submission;
 * replace the submit handler with an API call when the backend is ready.
 *
 * @example
 * // Future integration:
 * // await fetch("/api/newsletter", {
 * //   method: "POST",
 * //   headers: { "Content-Type": "application/json" },
 * //   body: JSON.stringify({ email }),
 * // });
 */
export function useNewsletterForm(): UseNewsletterFormResult {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const reset = useCallback(() => {
    setEmail("");
    setStatus("idle");
    setMessage(null);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const trimmed = email.trim();
      if (!trimmed) {
        setStatus("error");
        setMessage("Please enter a valid email address.");
        return;
      }

      setStatus("submitting");
      setMessage(null);

      try {
        // Placeholder until API endpoint is available
        await new Promise((resolve) => setTimeout(resolve, 600));

        setStatus("success");
        setMessage(FOOTER_CONTENT.newsletter.successMessage);
        setEmail("");
      } catch {
        setStatus("error");
        setMessage(FOOTER_CONTENT.newsletter.errorMessage);
      }
    },
    [email],
  );

  return {
    email,
    status,
    message,
    setEmail,
    handleSubmit,
    reset,
  };
}
