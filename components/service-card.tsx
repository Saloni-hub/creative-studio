import {
  VideoIcon,
  PaletteIcon,
  ShareIcon,
  CodeIcon,
  FileTextIcon,
  TrendingUpIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "VideoIcon":
        return <VideoIcon className="h-10 w-10" />
      case "PaletteIcon":
        return <PaletteIcon className="h-10 w-10" />
      case "ShareIcon":
        return <ShareIcon className="h-10 w-10" />
      case "CodeIcon":
        return <CodeIcon className="h-10 w-10" />
      case "FileTextIcon":
        return <FileTextIcon className="h-10 w-10" />
      case "TrendingUpIcon":
        return <TrendingUpIcon className="h-10 w-10" />
      default:
        return <MoreHorizontalIcon className="h-10 w-10" />
    }
  }

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="p-2 w-fit rounded-lg bg-gray-100 mb-4">{getIcon()}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
