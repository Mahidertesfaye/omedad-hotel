import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { ButtonSize, ButtonVariant } from "@/types";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  inverse?: boolean;
  href?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export type ButtonVariantProps = Omit<ButtonProps, "variant">;
