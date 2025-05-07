"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6 border-b">
      <Link href="/" className="mr-6 flex items-center">
      <Link href="/" className="mr-6 flex items-center">
  <svg width="160" height="40" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="10" width="40" height="40" rx="8" fill="#000000" />
    <polygon points="15,22 27,30 15,38" fill="#FFFFFF" />
    <text x="50" y="35" fontFamily="Segoe UI, sans-serif" fontSize="20" fontWeight="600" fill="#000000">
      Promotion<tspan fill="#555555">Studio</tspan>
    </text>
  </svg>
</Link>

      </Link>
      <nav className="hidden md:flex gap-6 ml-auto">
        <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4">
          Services
        </Link>
        <Link href="/#contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
        <Link href="/#" className="text-sm font-medium hover:underline underline-offset-4">
          Portfolio
        </Link>
        <Link href="/#" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
      </nav>
      <div className="hidden md:flex ml-4">
        <Link href="/#contact">
          <Button>Get a Quote</Button>
        </Link>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/#services"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/#"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4">Get a Quote</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
