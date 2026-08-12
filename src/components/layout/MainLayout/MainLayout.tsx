import type { ReactNode } from "react";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/navigation";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
