import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-6 lg:px-8 max-w-330", className)} {...props}>
      {children}
    </div>
  );
}
