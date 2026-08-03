import { PrimaryButton } from "@/components/ui";
import { cn } from "@/utils";
import styles from "./NavBookButton.module.css";

interface NavBookButtonProps {
  href: string;
  isScrolled: boolean;
  inverse?: boolean;
  className?: string;
  onNavigate?: () => void;
}

export function NavBookButton({
  href,
  isScrolled,
  inverse = false,
  className,
  onNavigate,
}: NavBookButtonProps) {
  const useInverse = inverse || !isScrolled;

  return (
    <PrimaryButton
      href={href}
      size="sm"
      inverse={useInverse}
      className={cn(styles.bookButton, className)}
      onClick={onNavigate}
    >
      Book Now
    </PrimaryButton>
  );
}
