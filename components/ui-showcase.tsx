"use client"

import { useState } from "react"
import { ArrowRight, Check, ChevronRight, Heart, Mail, Plus, Star } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import {
  CustomCard,
  CustomCardContent,
  CustomCardDescription,
  CustomCardFooter,
  CustomCardHeader,
  CustomCardTitle,
} from "@/components/ui/custom-card"

export function UIShowcase() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="space-y-12">
      {/* Button Showcase */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Button Components</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton>Default</CustomButton>
              <CustomButton variant="primary">Primary</CustomButton>
              <CustomButton variant="secondary">Secondary</CustomButton>
              <CustomButton variant="outline">Outline</CustomButton>
              <CustomButton variant="ghost">Ghost</CustomButton>
              <CustomButton variant="link">Link</CustomButton>
              <CustomButton variant="gradient">Gradient</CustomButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <CustomButton size="sm">Small</CustomButton>
              <CustomButton size="default">Default</CustomButton>
              <CustomButton size="lg">Large</CustomButton>
              <CustomButton size="xl">Extra Large</CustomButton>
              <CustomButton size="icon">
                <Plus />
              </CustomButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button with Icons</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton leftIcon={<Mail />}>Email Us</CustomButton>
              <CustomButton rightIcon={<ArrowRight />}>Next Step</CustomButton>
              <CustomButton leftIcon={<Star />} rightIcon={<ChevronRight />}>
                Rate Us
              </CustomButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button States</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton isLoading={isLoading} onClick={handleLoadingClick}>
                {isLoading ? "Loading..." : "Click to Load"}
              </CustomButton>
              <CustomButton disabled>Disabled</CustomButton>
              <CustomButton fullWidth>Full Width Button</CustomButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Button Shapes</h3>
            <div className="flex flex-wrap gap-4">
              <CustomButton rounded="default">Default Rounded</CustomButton>
              <CustomButton rounded="full">Fully Rounded</CustomButton>
              <CustomButton rounded="none">No Rounding</CustomButton>
            </div>
          </div>
        </div>
      </div>

      {/* Card Showcase */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Card Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Default Card</CustomCardTitle>
              <CustomCardDescription>This is a basic card with default styling</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>This card uses the default variant with standard padding and no hover effects.</p>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton size="sm">Learn More</CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard variant="elevated" hover="lift">
            <CustomCardHeader>
              <CustomCardTitle>Elevated Card</CustomCardTitle>
              <CustomCardDescription>This card has elevation and lifts on hover</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>Hover over this card to see it lift slightly and increase its shadow.</p>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton size="sm" variant="primary">
                View Details
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard variant="outlined" hover="glow">
            <CustomCardHeader>
              <CustomCardTitle>Outlined Card</CustomCardTitle>
              <CustomCardDescription>This card has a bold outline and glows on hover</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>Hover over this card to see a subtle glow effect around its borders.</p>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton size="sm" variant="outline">
                Explore
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard variant="filled" hover="border">
            <CustomCardHeader>
              <CustomCardTitle>Filled Card</CustomCardTitle>
              <CustomCardDescription>This card has a background fill and border effect</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>Hover over this card to see its border change to black.</p>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton size="sm" variant="secondary">
                Read More
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard variant="gradient" hover="lift" padding="lg">
            <CustomCardHeader>
              <CustomCardTitle>Gradient Card</CustomCardTitle>
              <CustomCardDescription>This card has a gradient background and extra padding</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>This card uses a subtle gradient background and has larger padding for a more spacious feel.</p>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton size="sm" variant="gradient">
                Get Started
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard variant="default" hover="lift" className="border-t-4 border-t-black">
            <CustomCardHeader>
              <CustomCardTitle>Custom Styled Card</CustomCardTitle>
              <CustomCardDescription>This card has custom styling with the className prop</CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <p>You can add custom classes to any card to extend its styling beyond the built-in variants.</p>
            </CustomCardContent>
            <CustomCardFooter className="justify-between">
              <CustomButton size="sm" variant="ghost" leftIcon={<Heart />}>
                Like
              </CustomButton>
              <CustomButton size="sm" variant="outline" rightIcon={<Check />}>
                Save
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>
        </div>
      </div>
    </div>
  )
}
