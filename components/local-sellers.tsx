"use client"

import { useState } from "react"
import { MapPin, ShoppingBag, ExternalLink } from "lucide-react"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Badge } from "components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"

export default function LocalSellers({ plant, userLocation, language = "english" }) {
  const [pincode, setPincode] = useState("")
  const [hasSearched, setHasSearched] = useState(false)

  // Mock data for sellers
  const sellers = [
    {
      id: 1,
      name: "Ayurveda Essentials",
      location: "Delhi",
      rating: 4.8,
      distance: "2.3 km",
      inStock: true,
      price: plant?.price || 0,
      deliveryTime: "1-2 days",
    },
    {
      id: 2,
      name: "Herbal Haven",
      location: "Mumbai",
      rating: 4.6,
      distance: "3.5 km",
      inStock: true,
      price: plant?.price * 0.95 || 0,
      deliveryTime: "2-3 days",
    },
    {
      id: 3,
      name: "Green Life Nursery",
      location: "Bangalore",
      rating: 4.9,
      distance: "1.8 km",
      inStock: true,
      price: plant?.price * 1.1 || 0,
      deliveryTime: "Same day",
    },
    {
      id: 4,
      name: "AYUSH Botanicals",
      location: "Hyderabad",
      rating: 4.7,
      distance: "4.2 km",
      inStock: false,
      price: plant?.price * 0.9 || 0,
      deliveryTime: "3-4 days",
    },
    {
      id: 5,
      name: "Nature's Pharmacy",
      location: "Chennai",
      rating: 4.5,
      distance: "2.7 km",
      inStock: true,
      price: plant?.price * 1.05 || 0,
      deliveryTime: "2-3 days",
    },
  ]

  // Mock data for online stores
  const onlineStores = [
    {
      id: 1,
      name: "AyurWorld",
      rating: 4.8,
      price: plant?.price || 0,
      deliveryTime: "2-3 days",
      discount: "10% off",
    },
    {
      id: 2,
      name: "HerbalCart",
      rating: 4.7,
      price: plant?.price * 0.92 || 0,
      deliveryTime: "3-4 days",
      discount: "Free delivery",
    },
    {
      id: 3,
      name: "Medicinal Plants Online",
      rating: 4.9,
      price: plant?.price * 1.05 || 0,
      deliveryTime: "1-2 days",
      discount: "Buy 1 Get 1 free",
    },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    setHasSearched(true)
    // In a real app, this would trigger an API call with the pincode
  }

  if (!plant) return null

  const getBuyPlantText = () => {
    switch (language) {
      case "english":
        return `Buy ${plant.name}`
      case "hindi":
        return `${plant.name} खरीदें`
      case "bengali":
        return `${plant.name} কিনুন`
      default:
        return `Buy ${plant.name}`
    }
  }

  const getFindPlantText = () => {
    switch (language) {
      case "english":
        return `Find ${plant.name} from local and online sellers`
      case "hindi":
        return `${plant.name} को स्थानीय और ऑनलाइन विक्रेताओं से खोजें`
      case "bengali":
        return `স্থানীয় এবং অনলাইন বিক্রেতাদের কাছ থেকে ${plant.name} খুঁজুন`
      default:
        return `Find ${plant.name} from local and online sellers`
    }
  }

  const getPincodePlaceholder = () => {
    switch (language) {
      case "english":
        return "Enter your PIN code"
      case "hindi":
        return "अपना पिन कोड दर्ज करें"
      case "bengali":
        return "আপনার পিন কোড লিখুন"
      default:
        return "Enter your PIN code"
    }
  }

  const getSearchText = () => {
    switch (language) {
      case "english":
        return "Search"
      case "hindi":
        return "खोजें"
      case "bengali":
        return "অনুসন্ধান"
      default:
        return "Search"
    }
  }

  const getLocalStoresText = () => {
    switch (language) {
      case "english":
        return "Local Stores"
      case "hindi":
        return "स्थानीय स्टोर"
      case "bengali":
        return "স্থানীয় দোকান"
      default:
        return "Local Stores"
    }
  }

  const getOnlineStoresText = () => {
    switch (language) {
      case "english":
        return "Online Stores"
      case "hindi":
        return "ऑनलाइन स्टोर"
      case "bengali":
        return "অনলাইন দোকান"
      default:
        return "Online Stores"
    }
  }

  const getInStockText = () => {
    switch (language) {
      case "english":
        return "In Stock"
      case "hindi":
        return "स्टॉक में है"
      case "bengali":
        return "স্টকে আছে"
      default:
        return "In Stock"
    }
  }

  const getOutOfStockText = () => {
    switch (language) {
      case "english":
        return "Out of Stock"
      case "hindi":
        return "स्टॉक में नहीं है"
      case "bengali":
        return "স্টকে নেই"
      default:
        return "Out of Stock"
    }
  }

  const getDeliveryText = (time) => {
    switch (language) {
      case "english":
        return `Delivery in ${time}`
      case "hindi":
        return `डिलीवरी ${time} में`
      case "bengali":
        return `ডেলিভারি ${time} এ`
      default:
        return `Delivery in ${time}`
    }
  }

  const getBuyNowText = () => {
    switch (language) {
      case "english":
        return "Buy Now"
      case "hindi":
        return "अभी खरीदें"
      case "bengali":
        return "এখনই কিনুন"
      default:
        return "Buy Now"
    }
  }

  const getVisitStoreText = () => {
    switch (language) {
      case "english":
        return "Visit Store"
      case "hindi":
        return "स्टोर पर जाएं"
      case "bengali":
        return "দোকান দেখুন"
      default:
        return "Visit Store"
    }
  }

  const getRatingText = () => {
    switch (language) {
      case "english":
        return "Rating: "
      case "hindi":
        return "रेटिंग: "
      case "bengali":
        return "রেটিং: "
      default:
        return "Rating: "
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-2">{getBuyPlantText()}</h2>
        <p className="text-sm text-muted-foreground">{getFindPlantText()}</p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder={getPincodePlaceholder()}
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full max-w-xs"
        />
        <Button type="submit">{getSearchText()}</Button>
      </form>

      <Tabs defaultValue="local">
        <TabsList className="w-full">
          <TabsTrigger value="local" className="flex-1">
            {getLocalStoresText()}
          </TabsTrigger>
          <TabsTrigger value="online" className="flex-1">
            {getOnlineStoresText()}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="local" className="mt-4 space-y-4">
          {sellers.map((seller) => (
            <Card key={seller.id}>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{seller.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {seller.location} • {seller.distance}
                    </CardDescription>
                  </div>
                  <Badge variant={seller.inStock ? "default" : "outline"}>
                    {seller.inStock ? getInStockText() : getOutOfStockText()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold">₹{Math.round(seller.price)}</p>
                    <p className="text-xs text-muted-foreground">{getDeliveryText(seller.deliveryTime)}</p>
                  </div>
                  <Button size="sm" disabled={!seller.inStock}>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {getBuyNowText()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="online" className="mt-4 space-y-4">
          {onlineStores.map((store) => (
            <Card key={store.id}>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{store.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {getRatingText()}
                      {store.rating}/5
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{store.discount}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold">₹{Math.round(store.price)}</p>
                    <p className="text-xs text-muted-foreground">{getDeliveryText(store.deliveryTime)}</p>
                  </div>
                  <Button size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {getVisitStoreText()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

