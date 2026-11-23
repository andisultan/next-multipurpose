import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md",
    "transition",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-500",
    "focus-visible:ring-offset-2",
    "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-secondary text-primary hover:bg-primary hover:text-white",
        secondary: "bg-primary text-secondary hover:bg-secondary hover:text-primary",
        outline: "border border-primary bg-transparent text-primary hover:bg-secondary",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-8 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonSize = NonNullable<ButtonVariants["size"]>;
