import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";
import { type ButtonSize, type ButtonVariants, buttonVariants } from "./button.styles";

type IconOnlyProps =
  | {
      size: "icon";
      "aria-label": string;
    }
  | {
      size?: Exclude<ButtonSize, "icon">;
      "aria-label"?: string;
    };

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className" | "aria-label"> &
  Omit<ButtonVariants, "size"> &
  IconOnlyProps & {
    className?: string;
  };

export function ButtonLink({ variant, size = "md", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
