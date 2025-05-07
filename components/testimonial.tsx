import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: string
  company: string
}

export function Testimonial({ quote, author, company }: TestimonialProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
        <p className="text-gray-600">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </CardFooter>
    </Card>
  )
}
