import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            PromotionStudio
          </Link>
          <p className="text-sm text-gray-500 md:text-left">Creative solutions for your digital presence.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/#services" className="text-sm hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/#contact" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/#" className="text-sm hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/#" className="text-sm hover:underline underline-offset-4">
            Terms
          </Link>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} PromotionStudio. All rights reserved.</p>
      </div>
    </footer>
  )
}
