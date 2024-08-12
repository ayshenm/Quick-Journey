import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "rounded-lg text-foreground text-lg font-medium bg-foreground text-white transition-colors duration-300 ease-in-out hover:bg-muted hover:text-foreground !px-5 !py-5",
        destructive:
          "bg-input text-destructive border border-2 hover:bg-destructive/90",
        outline:
          "rounded-lg !text-foreground text-lg font-medium bg-muted text-white transition-colors duration-300 ease-in-out hover:bg-foreground hover:!text-muted",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success: "bg-green-900 text-white hover:bg-green-900/80",
        ghost: "bg-[rgba(0,0,0,0.06)] rounded-lg hover:bg-accent hover:text-accent-foreground text-accent-foreground font-bold text-base",
        // link: "text-primary underline-offset-4 hover:underline",
        link:"rounded-xl bg-background text-secondary-foreground gap-2",
        icon: "",
      },
      size: {
        default: "h-10 px-10 py-[1.1rem]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        disabled={loading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading && (
          <Loader2
            className={`${size !== "icon" && "mr-2"} h-4 w-4 animate-spin`}
          />
        )}
        {loading ? (size === "icon" ? "" : children) : children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
