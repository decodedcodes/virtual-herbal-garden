"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Search, Menu, X, MapPin, ExternalLink, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Header from "@/components/header"
import Footer from "@/components/footer"
import PlantViewer from "@/components/plant-viewer"
import PlantDetails from "@/components/plant-details"
import LocalSellers from "@/components/local-sellers"
import { plantsData } from "@/data/plants-data"

export default function HerbalGarden() {
  const [selectedPlant, setSelectedPlant] = useState(plantsData[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPlants, setFilteredPlants] = useState(plantsData)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("explore")
  const [showBuyOptions, setShowBuyOptions] = useState(false)
  const [userLocation, setUserLocation] = useState(null)
  const [language, setLanguage] = useState("english") // Add language state

  // Toggle language function
  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  // Filter plants based on search query and category
  useEffect(() => {
    let result = plantsData

    if (searchQuery) {
      result = result.filter(
        (plant) =>
          plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plant.uses.some((use) => use.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    if (activeCategory !== "all") {
      result = result.filter((plant) => plant.categories.includes(activeCategory))
    }

    setFilteredPlants(result)
  }, [searchQuery, activeCategory])

  const getCategoryName = (id) => {
    switch (id) {
      case "all":
        return language === "english" ? "All Plants" : language === "hindi" ? "सभी पौधे" : "সমস্ত উদ্ভিদ"
      case "ayurveda":
        return language === "english" ? "Ayurveda" : language === "hindi" ? "आयुर्वेद" : "আয়ুর্বেদ"
      case "unani":
        return language === "english" ? "Unani" : language === "hindi" ? "यूनानी" : "ইউনানি"
      case "siddha":
        return language === "english" ? "Siddha" : language === "hindi" ? "सिद्ध" : "সিদ্ধ"
      case "homeopathy":
        return language === "english" ? "Homeopathy" : language === "hindi" ? "होम्योपैथी" : "হোমিওপ্যাথি"
      case "yoga":
        return language === "english"
          ? "Yoga & Naturopathy"
          : language === "hindi"
            ? "योग और प्राकृतिक चिकित्सा"
            : "যোগ ও প্রাকৃতিক চিকিৎসা"
      default:
        return id
    }
  }

  const categories = [
    { id: "all", name: getCategoryName("all") },
    { id: "ayurveda", name: getCategoryName("ayurveda") },
    { id: "unani", name: getCategoryName("unani") },
    { id: "siddha", name: getCategoryName("siddha") },
    { id: "homeopathy", name: getCategoryName("homeopathy") },
    { id: "yoga", name: getCategoryName("yoga") },
  ]

  const handlePlantSelect = (plant) => {
    setSelectedPlant(plant)
  }

  // Get user location for nearby plant search
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  const getExploreText = () => {
    switch (language) {
      case "english":
        return "Explore"
      case "hindi":
        return "एक्सप्लोर"
      case "bengali":
        return "অন্বেষণ"
      default:
        return "Explore"
    }
  }

  const getBuySeedsSaplingsText = () => {
    switch (language) {
      case "english":
        return "Buy Seeds/Saplings"
      case "hindi":
        return "बीज/पौधे खरीदें"
      case "bengali":
        return "বীজ/চারা কিনুন"
      default:
        return "Buy Seeds/Saplings"
    }
  }

  const getSavedText = () => {
    switch (language) {
      case "english":
        return "Saved"
      case "hindi":
        return "सेव किए गए"
      case "bengali":
        return "সংরক্ষিত"
      default:
        return "Saved"
    }
  }

  const getSearchPlaceholder = () => {
    switch (language) {
      case "english":
        return "Search plants..."
      case "hindi":
        return "पौधे खोजें..."
      case "bengali":
        return "উদ্ভিদ অনুসন্ধান..."
      default:
        return "Search plants..."
    }
  }

  const getNoResultsText = () => {
    switch (language) {
      case "english":
        return "No plants found matching your search criteria"
      case "hindi":
        return "आपके खोज मापदंड से मेल खाने वाले कोई पौधे नहीं मिले"
      case "bengali":
        return "আপনার অনুসন্ধান মাপকাঠি মেলে এমন কোন উদ্ভিদ পাওয়া যায়নি"
      default:
        return "No plants found matching your search criteria"
    }
  }

  const getSavedPlantsText = () => {
    switch (language) {
      case "english":
        return "Your saved plants will appear here"
      case "hindi":
        return "आपके सहेजे गए पौधे यहां दिखाई देंगे"
      case "bengali":
        return "আপনার সংরক্ষিত উদ্ভিদগুলি এখানে দেখা যাবে"
      default:
        return "Your saved plants will appear here"
    }
  }

  const getBuyText = () => {
    switch (language) {
      case "english":
        return `Buy ₹${selectedPlant.price}`
      case "hindi":
        return `खरीदें ₹${selectedPlant.price}`
      case "bengali":
        return `কিনুন ₹${selectedPlant.price}`
      default:
        return `Buy ₹${selectedPlant.price}`
    }
  }

  const getFindNearbyText = () => {
    switch (language) {
      case "english":
        return "Find Nearby"
      case "hindi":
        return "आस-पास खोजें"
      case "bengali":
        return "কাছাকাছি খুঁজুন"
      default:
        return "Find Nearby"
    }
  }

  const getFindNearTitleText = () => {
    switch (language) {
      case "english":
        return `Find ${selectedPlant.name} Near You`
      case "hindi":
        return `${selectedPlant.name} को अपने आस-पास खोजें`
      case "bengali":
        return `আপনার কাছাকাছি ${selectedPlant.name} খুঁজুন`
      default:
        return `Find ${selectedPlant.name} Near You`
    }
  }

  const getFindNearDescText = () => {
    switch (language) {
      case "english":
        return `Discover locations where you can find ${selectedPlant.name} growing in the wild or in botanical gardens.`
      case "hindi":
        return `ऐसे स्थान खोजें जहां आप ${selectedPlant.name} को प्राकृतिक रूप से या वनस्पति उद्यानों में पा सकते हैं।`
      case "bengali":
        return `এমন স্থান আবিষ্কার করুন যেখানে আপনি ${selectedPlant.name} বন্য অবস্থায় বা উদ্ভিদ উদ্যানে খুঁজে পেতে পারেন।`
      default:
        return `Discover locations where you can find ${selectedPlant.name} growing in the wild or in botanical gardens.`
    }
  }

  const getNaturalHabitatsText = () => {
    switch (language) {
      case "english":
        return "Natural Habitats"
      case "hindi":
        return "प्राकृतिक आवास"
      case "bengali":
        return "প্রাকৃতিক আবাসস্থল"
      default:
        return "Natural Habitats"
    }
  }

  const getFoundInText = () => {
    switch (language) {
      case "english":
        return `${selectedPlant.name} is typically found in ${selectedPlant.regions.join(", ")}.`
      case "hindi":
        return `${selectedPlant.name} आमतौर पर ${selectedPlant.regions.join(", ")} में पाया जाता है।`
      case "bengali":
        return `${selectedPlant.name} সাধারণত ${selectedPlant.regions.join(", ")} এ পাওয়া যায়।`
      default:
        return `${selectedPlant.name} is typically found in ${selectedPlant.regions.join(", ")}.`
    }
  }

  const getBotanicalGardensText = () => {
    switch (language) {
      case "english":
        return "Botanical Gardens"
      case "hindi":
        return "वनस्पति उद्यान"
      case "bengali":
        return "উদ্ভিদ উদ্যান"
      default:
        return "Botanical Gardens"
    }
  }

  const getViewText = () => {
    switch (language) {
      case "english":
        return "View"
      case "hindi":
        return "देखें"
      case "bengali":
        return "দেখুন"
      default:
        return "View"
    }
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Header */}
      <Header language={language} toggleLanguage={toggleLanguage} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-16 left-0 right-0 z-10 bg-white dark:bg-gray-950 border-b p-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <h1 className="text-xl font-bold text-green-800 dark:text-green-400">
            {language === "english"
              ? "Virtual Herbal Garden"
              : language === "hindi"
                ? "वर्चुअल हर्बल गार्डन"
                : "ভার্চুয়াল হার্বাল গার্ডেন"}
          </h1>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Sidebar */}
        <div
          className={`fixed overflow-auto lg:relative z-20 h-[calc(100vh-64px)] w-full lg:w-96 bg-white dark:bg-gray-950 border-r transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "left-0" : "-left-full lg:left-0"
          } ${isSidebarOpen ? "lg:w-96" : "lg:w-0"}`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header - Desktop */}
            <div className="hidden lg:flex items-center justify-between p-6 border-b">
              <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">
                {language === "english"
                  ? "Virtual Herbal Garden"
                  : language === "hindi"
                    ? "वर्चुअल हर्बल गार्डन"
                    : "ভার্চুয়াল হার্বাল গার্ডেন"}
              </h1>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="explore" className="flex-1 flex flex-col mt-16 lg:mt-0" onValueChange={setActiveTab}>
              <div className="px-4 pt-4">
                <TabsList className="w-full">
                  <TabsTrigger value="explore" className="flex-1">
                    {getExploreText()}
                  </TabsTrigger>
                  <TabsTrigger value="buy" className="flex-1" onClick={() => (window.location.href = "/s.html")}>
                    {getBuySeedsSaplingsText()}
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="flex-1">
                    {getSavedText()}
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="explore" className="flex-1 flex flex-col p-4 overflow-hidden">
                {/* Search and Filter */}
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder={getSearchPlaceholder()}
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {categories.map((category) => (
                      <Badge
                        key={category.id}
                        variant={activeCategory === category.id ? "default" : "outline"}
                        className="cursor-pointer whitespace-nowrap"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {/* Plant List - Fixed scrolling issue by using proper overflow settings */}
                <div className="flex-1 overflow-y-auto pr-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredPlants.length > 0 ? (
                      filteredPlants.map((plant) => (
                        <Card
                          key={plant.id}
                          className={`cursor-pointer transition-all hover:border-green-500 ${
                            selectedPlant.id === plant.id ? "border-green-500 ring-1 ring-green-500" : ""
                          }`}
                          onClick={() => handlePlantSelect(plant)}
                        >
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-lg">{plant.name}</CardTitle>
                            <CardDescription className="italic">{plant.botanicalName}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-muted-foreground line-clamp-2">{plant.shortDescription}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex gap-2 flex-wrap">
                            {plant.categories.slice(0, 2).map((category) => (
                              <Badge key={category} variant="secondary" className="text-xs">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                              </Badge>
                            ))}
                            {plant.categories.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{plant.categories.length - 2}
                              </Badge>
                            )}
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">{getNoResultsText()}</div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="buy" className="flex-1 p-4 overflow-auto">
                <LocalSellers plant={selectedPlant} userLocation={userLocation} language={language} />
              </TabsContent>

              <TabsContent value="saved" className="flex-1 p-4 overflow-auto">
                <div className="text-center py-8 text-muted-foreground">{getSavedPlantsText()}</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-[calc(100vh-64px)] pt-16 lg:pt-0">
          {/* 3D Viewer */}
          <div className="relative flex-1 w-full">
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <PlantViewer plant={selectedPlant} />
                <Environment preset="forest" />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={2}
                  maxDistance={10}
                />
              </Suspense>
            </Canvas>

            {/* Plant Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-4 lg:p-6 border-t">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">{selectedPlant.name}</h2>
                  <p className="text-sm italic text-muted-foreground">{selectedPlant.botanicalName}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => (window.location.href = "/s.html")}>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {getBuyText()}
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {getFindNearbyText()}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{getFindNearTitleText()}</DialogTitle>
                        <DialogDescription>{getFindNearDescText()}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="rounded-md border p-4">
                          <h3 className="font-medium">{getNaturalHabitatsText()}</h3>
                          <p className="text-sm mt-1 text-muted-foreground">{getFoundInText()}</p>
                        </div>
                        <div className="rounded-md border p-4">
                          <h3 className="font-medium">{getBotanicalGardensText()}</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex justify-between">
                              <span>
                                {language === "english"
                                  ? "National Botanical Garden"
                                  : language === "hindi"
                                    ? "राष्ट्रीय वनस्पति उद्यान"
                                    : "জাতীয় উদ্ভিদ উদ্যান"}
                              </span>
                              <a href="#" className="text-blue-600 hover:underline flex items-center">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                {getViewText()}
                              </a>
                            </li>
                            <li className="flex justify-between">
                              <span>
                                {language === "english"
                                  ? "City Herbal Park"
                                  : language === "hindi"
                                    ? "शहर हर्बल पार्क"
                                    : "শহর হার্বাল পার্ক"}
                              </span>
                              <a href="#" className="text-blue-600 hover:underline flex items-center">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                {getViewText()}
                              </a>
                            </li>
                            <li className="flex justify-between">
                              <span>
                                {language === "english"
                                  ? "Medicinal Garden"
                                  : language === "hindi"
                                    ? "औषधीय उद्यान"
                                    : "ঔষধি উদ্যান"}
                              </span>
                              <a href="#" className="text-blue-600 hover:underline flex items-center">
                                <ExternalLink className="h-3 w-3 mr-1" />
                                {getViewText()}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <PlantDetails plant={selectedPlant} language={language} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer
      <Footer language={language} /> */}
    </div>
  )
}

