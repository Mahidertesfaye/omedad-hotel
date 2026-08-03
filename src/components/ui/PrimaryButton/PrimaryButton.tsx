import type { ComponentProps } from "react";
import { Button } from "@/components/common/Button";

type PrimaryButtonProps = Omit<ComponentProps<typeof Button>, "variant">;

export function PrimaryButton(props: PrimaryButtonProps) {
  return <Button variant="primary" {...props} />;
}
