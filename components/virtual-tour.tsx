"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"
import { plantsData } from "@/data/plants-data"

export default function VirtualTour({ onSelectPlant }) {
  const tours = [
    {
      id: "digestive",
      title: "Digestive Health",
      description: "Explore plants traditionally used for digestive ailments",
      image: "/placeholder.svg?height=200&width=400",
      plants: plantsData.filter((p) =>
        p.uses.some(
          (use) =>
            use.toLowerCase().includes("digest") ||
            use.toLowerCase().includes("stomach") ||
            use.toLowerCase().includes("intestine"),
        ),
      ),
    },
    {
      id: "immunity",
      title: "Immunity Boosters",
      description: "Discover plants that help strengthen the immune system",
      image: "/placeholder.svg?height=200&width=400",
      plants: plantsData.filter((p) =>
        p.uses.some(
          (use) =>
            use.toLowerCase().includes("immun") ||
            use.toLowerCase().includes("antioxidant") ||
            use.toLowerCase().includes("resistance"),
        ),
      ),
    },
    {
      id: "skin",
      title: "Skin Care",
      description: "Learn about plants beneficial for skin health and beauty",
      image: "/placeholder.svg?height=200&width=400",
      plants: plantsData.filter((p) =>
        p.uses.some(
          (use) =>
            use.toLowerCase().includes("skin") ||
            use.toLowerCase().includes("derma") ||
            use.toLowerCase().includes("complexion"),
        ),
      ),
    },
    {
      id: "respiratory",
      title: "Respiratory Health",
      description: "Plants traditionally used for respiratory conditions",
      image: "/placeholder.svg?height=200&width=400",
      plants: plantsData.filter((p) =>
        p.uses.some(
          (use) =>
            use.toLowerCase().includes("respiratory") ||
            use.toLowerCase().includes("lung") ||
            use.toLowerCase().includes("breath"),
        ),
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Virtual Tours</h2>
        <p className="text-sm text-muted-foreground">
          Explore curated collections of medicinal plants based on their traditional uses
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tours.map((tour) => (
          <Card key={tour.id}>
            <CardHeader className="p-4 pb-0">
              <CardTitle>{tour.title}</CardTitle>
              <CardDescription>{tour.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div
                className="w-full h-40 rounded-md bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${tour.image})` }}
              />
              <div className="flex flex-wrap gap-2">
                {tour.plants.slice(0, 3).map((plant) => (
                  <Badge
                    key={plant.id}
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => onSelectPlant(plant)}
                  >
                    {plant.name}
                  </Badge>
                ))}
                {tour.plants.length > 3 && <Badge variant="outline">+{tour.plants.length - 3} more</Badge>}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">
                <Play className="h-4 w-4 mr-2" />
                Start Tour
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

