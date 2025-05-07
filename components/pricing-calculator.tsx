"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function PricingCalculator() {
  const [projectType, setProjectType] = useState<string>("video")
  const [projectSize, setProjectSize] = useState<number>(50)
  const [urgentDelivery, setUrgentDelivery] = useState<boolean>(false)
  const [additionalServices, setAdditionalServices] = useState<string[]>([])

  const projectTypes = [
    { id: "video", label: "Video Editing" },
    { id: "design", label: "Graphic Design" },
    { id: "web", label: "Web Development" },
    { id: "social", label: "Social Media" },
    { id: "content", label: "Content Writing" },
  ]

  const additionalServiceOptions = [
    { id: "revisions", label: "Additional Revisions" },
    { id: "consultation", label: "Extended Consultation" },
    { id: "assets", label: "Premium Assets" },
    { id: "support", label: "Priority Support" },
  ]

  const toggleAdditionalService = (serviceId: string) => {
    if (additionalServices.includes(serviceId)) {
      setAdditionalServices(additionalServices.filter((id) => id !== serviceId))
    } else {
      setAdditionalServices([...additionalServices, serviceId])
    }
  }

  // This is just for demonstration - in a real app you'd have more sophisticated pricing logic
  const getEstimatedTimeframe = () => {
    let baseTime = projectSize / 25 // 0-100 scale converts to 0-4 weeks
    if (urgentDelivery) baseTime = baseTime * 0.6
    return Math.max(Math.ceil(baseTime), 1)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Project Estimator</CardTitle>
        <CardDescription>
          Get a rough estimate of your project timeline. For accurate pricing, please contact us.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-medium">Project Type</h3>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <Button
                key={type.id}
                variant={projectType === type.id ? "default" : "outline"}
                className={projectType === type.id ? "bg-black text-white" : ""}
                onClick={() => setProjectType(type.id)}
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium">Project Size</h3>
            <span className="text-sm font-medium">
              {projectSize < 33 ? "Small" : projectSize < 66 ? "Medium" : "Large"}
            </span>
          </div>
          <Slider
            value={[projectSize]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => setProjectSize(value[0])}
            className="py-4"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Additional Options</h3>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="urgent-delivery">Urgent Delivery</Label>
              <p className="text-sm text-gray-500">Faster turnaround time</p>
            </div>
            <Switch id="urgent-delivery" checked={urgentDelivery} onCheckedChange={setUrgentDelivery} />
          </div>

          <div className="space-y-2">
            <Label>Additional Services</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {additionalServiceOptions.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Switch
                    id={service.id}
                    checked={additionalServices.includes(service.id)}
                    onCheckedChange={() => toggleAdditionalService(service.id)}
                  />
                  <Label htmlFor={service.id}>{service.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-gray-50 p-4 rounded-lg border mt-6"
        >
          <h3 className="font-medium mb-2">Estimated Timeframe</h3>
          <p className="text-2xl font-bold">
            {getEstimatedTimeframe()} {getEstimatedTimeframe() === 1 ? "week" : "weeks"}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This is just an estimate. Contact us for an accurate quote and timeline.
          </p>
        </motion.div>
      </CardContent>
      <CardFooter>
        <Link href="#contact" className="w-full">
          <Button className="w-full bg-black hover:bg-gray-800">Get an Accurate Quote</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
