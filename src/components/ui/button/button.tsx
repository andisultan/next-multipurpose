import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";
import { type ButtonSize, type ButtonVariants, buttonVariants } from "./button.styles";
import { ButtonSpinner } from "./button-spinner";

type IconOnlyProps =
  | {
      size: "icon";
      "aria-label": string;
    }
  | {
      size?: Exclude<ButtonSize, "icon">;
      "aria-label"?: string;
    };

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "aria-label"> &
  Omit<ButtonVariants, "size"> &
  IconOnlyProps & {
    isLoading?: boolean;
  };

export function Button({
  variant,
  size = "md",
  isLoading = false,
  disabled = false,
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {isLoading && <ButtonSpinner />}
      {children}
    </button>
  );
}
