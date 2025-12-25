import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-muted hover:text-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative overflow-hidden border-2 border-accent bg-transparent text-foreground font-semibold tracking-wider uppercase before:absolute before:inset-0 before:bg-accent before:translate-y-full before:transition-transform before:duration-300 hover:text-accent-foreground hover:before:translate-y-0 [&>*]:relative [&>*]:z-10",
        accent: "bg-accent text-accent-foreground font-semibold hover:bg-accent/90 shadow-accent rounded-md",
        industrial: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold uppercase tracking-widest hover:shadow-glow rounded-md",
        glass: "backdrop-blur-xl bg-card/60 text-foreground hover:bg-card/80 border border-border/50 rounded-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
