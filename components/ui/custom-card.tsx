import type React from "react"
import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-lg overflow-hidden", {
  variants: {
    variant: {
      default: "bg-white border border-gray-200",
      elevated: "bg-white shadow-md",
      outlined: "bg-white border-2 border-black",
      filled: "bg-gray-100",
      gradient: "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200",
    },
    hover: {
      none: "",
      lift: "transition-all hover:-translate-y-1 hover:shadow-lg",
      glow: "transition-all hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",
      border: "transition-all hover:border-black",
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7",
    },
  },
  defaultVariants: {
    variant: "default",
    hover: "none",
    padding: "md",
  },
})

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  as?: React.ElementType
}

const CustomCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, padding, as: Component = "div", ...props }, ref) => {
    return <Component ref={ref} className={cn(cardVariants({ variant, hover, padding, className }))} {...props} />
  },
)
CustomCard.displayName = "CustomCard"

const CustomCardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CustomCardHeader.displayName = "CustomCardHeader"

const CustomCardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
CustomCardTitle.displayName = "CustomCardTitle"

const CustomCardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />,
)
CustomCardDescription.displayName = "CustomCardDescription"

const CustomCardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CustomCardContent.displayName = "CustomCardContent"

const CustomCardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CustomCardFooter.displayName = "CustomCardFooter"

export { CustomCard, CustomCardHeader, CustomCardFooter, CustomCardTitle, CustomCardDescription, CustomCardContent }
