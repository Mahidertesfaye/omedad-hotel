import Link from "next/link";
import { PageContainer, PrimaryButton } from "@/components/ui";
import { SITE_NAME } from "@/constants/site";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-heading">
      <PageContainer className={styles.container}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>

        <h1 id="not-found-heading" className={styles.heading}>
          This page could not be found
        </h1>

        <p className={styles.description}>
          The page you are looking for may have been moved or no longer exists.
          Return to {SITE_NAME} to continue exploring our rooms, dining, and
          amenities.
        </p>

        <div className={styles.actions}>
          <PrimaryButton href="/" size="lg">
            Back to Home
          </PrimaryButton>

          <Link href="/#booking" className={styles.secondaryLink}>
            Book a Stay
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
