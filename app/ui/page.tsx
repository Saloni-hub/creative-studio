import { UIShowcase } from "@/components/ui-showcase"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function UIComponentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">UI Components</h1>
            <p className="mt-4 text-lg text-gray-500">
              A showcase of custom UI components for your creative agency website
            </p>
          </div>
          <UIShowcase />
        </div>
      </main>
      <Footer />
    </div>
  )
}
