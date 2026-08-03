import type { ComponentProps } from "react";
import { Button } from "@/components/common/Button";

type OutlineButtonProps = Omit<ComponentProps<typeof Button>, "variant">;

export function OutlineButton(props: OutlineButtonProps) {
  return <Button variant="outline" {...props} />;
}
