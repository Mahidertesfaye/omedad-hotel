import type { ComponentProps } from "react";
import { Button } from "@/components/common/Button";

type SecondaryButtonProps = Omit<ComponentProps<typeof Button>, "variant">;

export function SecondaryButton(props: SecondaryButtonProps) {
  return <Button variant="secondary" {...props} />;
}
