import Link from "next/link";
import { cn } from "@/utils";
import type { ButtonProps } from "./types";
import styles from "./Button.module.css";

export type { ButtonProps, ButtonVariantProps } from "./types";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  inverse = false,
  href,
  external,
  type = "button",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    inverse && styles.inverse,
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          aria-disabled={disabled || undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        aria-disabled={disabled || undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
