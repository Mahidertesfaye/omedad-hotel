import type { ElementType, ReactNode } from "react";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/utils";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
  titleAs?: ElementType;
  id?: string;
}

export function SectionHeader({
  title,
  subtitle,
  lead,
  align = "center",
  inverse = false,
  className,
  titleAs = "h2",
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        styles.header,
        styles[`align-${align}`],
        inverse && styles.inverse,
        className,
      )}
    >
      {subtitle ? (
        <SectionSubtitle align={align} inverse={inverse}>
          {subtitle}
        </SectionSubtitle>
      ) : null}

      <SectionTitle
        id={id}
        as={titleAs}
        align={align}
        inverse={inverse}
        className={styles.title}
      >
        {title}
      </SectionTitle>

      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </header>
  );
}
