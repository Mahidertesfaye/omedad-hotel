"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer, PrimaryButton } from "@/components/ui";
import styles from "./error.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.page} aria-labelledby="error-heading">
      <PageContainer className={styles.container}>
        <p className={styles.code} aria-hidden="true">
          Error
        </p>

        <h1 id="error-heading" className={styles.heading}>
          Something went wrong
        </h1>

        <p className={styles.description}>
          An unexpected error occurred while loading this page. Please try
          again, or return to the homepage.
        </p>

        <div className={styles.actions}>
          <PrimaryButton type="button" size="lg" onClick={reset}>
            Try Again
          </PrimaryButton>

          <Link href="/" className={styles.secondaryLink}>
            Back to Home
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
