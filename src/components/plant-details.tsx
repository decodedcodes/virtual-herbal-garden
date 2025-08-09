"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PlantDetails({ plant, language = "english" }) {
  const [expanded, setExpanded] = useState(false)

  if (!plant) return null

  const getShowMoreText = () => {
    switch (language) {
      case "english":
        return expanded ? "Show Less" : "Show More"
      case "hindi":
        return expanded ? "कम दिखाएं" : "अधिक दिखाएं"
      case "bengali":
        return expanded ? "কম দেখান" : "আরও দেখান"
      default:
        return expanded ? "Show Less" : "Show More"
    }
  }

  const getOverviewText = () => {
    switch (language) {
      case "english":
        return "Overview"
      case "hindi":
        return "अवलोकन"
      case "bengali":
        return "সংক্ষিপ্ত বিবরণ"
      default:
        return "Overview"
    }
  }

  const getMedicinalUsesText = () => {
    switch (language) {
      case "english":
        return "Medicinal Uses"
      case "hindi":
        return "औषधीय उपयोग"
      case "bengali":
        return "ঔষধি ব্যবহার"
      default:
        return "Medicinal Uses"
    }
  }

  const getCultivationText = () => {
    switch (language) {
      case "english":
        return "Cultivation"
      case "hindi":
        return "खेती"
      case "bengali":
        return "চাষাবাদ"
      default:
        return "Cultivation"
    }
  }

  const getNativeRegionsText = () => {
    switch (language) {
      case "english":
        return "Native Regions"
      case "hindi":
        return "मूल क्षेत्र"
      case "bengali":
        return "উৎপত্তি অঞ্চল"
      default:
        return "Native Regions"
    }
  }

  const getAyushSystemsText = () => {
    switch (language) {
      case "english":
        return "AYUSH Systems"
      case "hindi":
        return "आयुष प्रणालियां"
      case "bengali":
        return "আয়ুষ পদ্ধতি"
      default:
        return "AYUSH Systems"
    }
  }

  const getMedicinalPropertiesText = () => {
    switch (language) {
      case "english":
        return "Medicinal Properties"
      case "hindi":
        return "औषधीय गुण"
      case "bengali":
        return "ঔষধি বৈশিষ্ট্য"
      default:
        return "Medicinal Properties"
    }
  }

  const getTraditionalUsesText = () => {
    switch (language) {
      case "english":
        return "Traditional Uses"
      case "hindi":
        return "पारंपरिक उपयोग"
      case "bengali":
        return "ঐতিহ্যগত ব্যবহার"
      default:
        return "Traditional Uses"
    }
  }

  const getPartsUsedText = () => {
    switch (language) {
      case "english":
        return "Parts Used"
      case "hindi":
        return "उपयोग किए जाने वाले भाग"
      case "bengali":
        return "ব্যবহৃত অংশ"
      default:
        return "Parts Used"
    }
  }

  const getGrowingConditionsText = () => {
    switch (language) {
      case "english":
        return "Growing Conditions"
      case "hindi":
        return "उगाने की स्थितियां"
      case "bengali":
        return "বৃদ্ধির অবস্থা"
      default:
        return "Growing Conditions"
    }
  }

  const getSoilRequirementsText = () => {
    switch (language) {
      case "english":
        return "Soil Requirements"
      case "hindi":
        return "मिट्टी की आवश्यकताएं"
      case "bengali":
        return "মাটির প্রয়োজনীয়তা"
      default:
        return "Soil Requirements"
    }
  }

  const getPropagationText = () => {
    switch (language) {
      case "english":
        return "Propagation"
      case "hindi":
        return "प्रसार"
      case "bengali":
        return "বংশবিস্তার"
      default:
        return "Propagation"
    }
  }

  const getHarvestingText = () => {
    switch (language) {
      case "english":
        return "Harvesting"
      case "hindi":
        return "कटाई"
      case "bengali":
        return "ফসল সংগ্রহ"
      default:
        return "Harvesting"
    }
  }

  return (
    <div>
      <div className="flex mt-4 justify-end">
        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="flex items-center text-sm">
          {getShowMoreText()}
          {expanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
        </Button>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded ? "max-h-[60vh]" : "max-h-20"}`}
      >
        <Tabs defaultValue="overview">
          <TabsList className="w-full">
            <TabsTrigger value="overview" className="flex-1">
              {getOverviewText()}
            </TabsTrigger>
            <TabsTrigger value="medicinal" className="flex-1">
              {getMedicinalUsesText()}
            </TabsTrigger>
            <TabsTrigger value="cultivation" className="flex-1">
              {getCultivationText()}
            </TabsTrigger>
          </TabsList>

          <div className="h-full max-h-[calc(60vh-40px)] mt-4 overflow-y-auto">
            <TabsContent value="overview" className="m-0">
              <div className="space-y-4">
                <p>{plant.description}</p>

                <div>
                  <h3 className="font-medium mb-2">{getNativeRegionsText()}</h3>
                  <div className="flex flex-wrap gap-2">
                    {plant.regions.map((region) => (
                      <Badge key={region} variant="outline">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getAyushSystemsText()}</h3>
                  <div className="flex flex-wrap gap-2">
                    {plant.categories.map((category) => (
                      <Badge key={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="medicinal" className="m-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{getMedicinalPropertiesText()}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {plant.properties.map((property, index) => (
                      <li key={index}>{property}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getTraditionalUsesText()}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {plant.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getPartsUsedText()}</h3>
                  <div className="flex flex-wrap gap-2">
                    {plant.partsUsed.map((part) => (
                      <Badge key={part} variant="outline">
                        {part}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cultivation" className="m-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{getGrowingConditionsText()}</h3>
                  <p>{plant.cultivation.conditions}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getSoilRequirementsText()}</h3>
                  <p>{plant.cultivation.soil}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getPropagationText()}</h3>
                  <p>{plant.cultivation.propagation}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">{getHarvestingText()}</h3>
                  <p>{plant.cultivation.harvesting}</p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

