"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { Globe, Leaf, FileText, SproutIcon as Seed, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog"

export default function LandingPage() {
  const [language, setLanguage] = useState("english")
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [userLocation, setUserLocation] = useState(null)

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  const getTitle = () => {
    switch (language) {
      case "english":
        return "Virtual Herbal Garden"
      case "hindi":
        return "वर्चुअल हर्बल गार्डन"
      case "bengali":
        return "ভার্চুয়াল হার্বাল গার্ডেন"
      default:
        return "Virtual Herbal Garden"
    }
  }

  const getSubtitle = () => {
    switch (language) {
      case "english":
        return "Explore the world of medicinal plants from traditional systems"
      case "hindi":
        return "पारंपरिक प्रणालियों से औषधीय पौधों की दुनिया का अन्वेषण करें"
      case "bengali":
        return "ঐতিহ্যগত পদ্ধতি থেকে ঔষধি উদ্ভিদের জগৎ অন্বেষণ করুন"
      default:
        return "Explore the world of medicinal plants from traditional systems"
    }
  }

  const getExploreGardenText = () => {
    switch (language) {
      case "english":
        return "Explore Garden"
      case "hindi":
        return "गार्डन एक्सप्लोर करें"
      case "bengali":
        return "গার্ডেন অন্বেষণ করুন"
      default:
        return "Explore Garden"
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

  const getGeneratePrescriptionText = () => {
    switch (language) {
      case "english":
        return "Generate Prescription"
      case "hindi":
        return "पर्चा जनरेट करें"
      case "bengali":
        return "প্রেসক্রিপশন তৈরি করুন"
      default:
        return "Generate Prescription"
    }
  }

  const getFeaturesTitle = () => {
    switch (language) {
      case "english":
        return "Features"
      case "hindi":
        return "विशेषताएं"
      case "bengali":
        return "বৈশিষ্ট্য"
      default:
        return "Features"
    }
  }

  const getDoctorText = () => {
    switch (language) {
      case "english":
        return "Find Doctors"
      case "hindi":
        return "डॉक्टर खोजें"
      case "bengali":
        return "ডাক্তার খুঁজুন"
      default:
        return "Find Doctors"
    }
  }

  const getNearbyDoctorsTitle = () => {
    switch (language) {
      case "english":
        return "Doctors Near You"
      case "hindi":
        return "आपके पास डॉक्टर"
      case "bengali":
        return "আপনার কাছাকাছি ডাক্তার"
      default:
        return "Doctors Near You"
    }
  }

  const getNearbyDoctorsDescription = () => {
    switch (language) {
      case "english":
        return "Find practitioners specializing in traditional medicine systems in your area."
      case "hindi":
        return "अपने क्षेत्र में पारंपरिक चिकित्सा प्रणालियों में विशेषज्ञता रखने वाले चिकित्सकों को खोजें।"
      case "bengali":
        return "আপনার এলাকায় ঐতিহ্যগত চিকিৎসা পদ্ধতিতে বিশেষজ্ঞ চিকিৎসক খুঁজুন।"
      default:
        return "Find practitioners specializing in traditional medicine systems in your area."
    }
  }

  const getLoadingText = () => {
    switch (language) {
      case "english":
        return "Finding doctors near you..."
      case "hindi":
        return "आपके पास डॉक्टर खोज रहे हैं..."
      case "bengali":
        return "আপনার কাছাকাছি ডাক্তার খোঁজা হচ্ছে..."
      default:
        return "Finding doctors near you..."
    }
  }

  const getLocationErrorText = () => {
    switch (language) {
      case "english":
        return "Please enable location services to find doctors near you."
      case "hindi":
        return "आपके पास डॉक्टर खोजने के लिए कृपया लोकेशन सर्विसेज को सक्षम करें।"
      case "bengali":
        return "আপনার কাছাকাছি ডাক্তার খুঁজতে অনুগ্রহ করে লোকেশন পরিষেবা চালু করুন।"
      default:
        return "Please enable location services to find doctors near you."
    }
  }

  const getSpecialtyText = () => {
    switch (language) {
      case "english":
        return "Specialty"
      case "hindi":
        return "विशेषज्ञता"
      case "bengali":
        return "বিশেষত্ব"
      default:
        return "Specialty"
    }
  }

  const getContactText = () => {
    switch (language) {
      case "english":
        return "Contact"
      case "hindi":
        return "संपर्क"
      case "bengali":
        return "যোগাযোগ"
      default:
        return "Contact"
    }
  }

  const getAddressText = () => {
    switch (language) {
      case "english":
        return "Address"
      case "hindi":
        return "पता"
      case "bengali":
        return "ঠিকানা"
      default:
        return "Address"
    }
  }

  const getDistanceText = () => {
    switch (language) {
      case "english":
        return "Distance"
      case "hindi":
        return "दूरी"
      case "bengali":
        return "দূরত্ব"
      default:
        return "Distance"
    }
  }

  // Mock function to fetch nearby doctors
  const fetchNearbyDoctors = () => {
    setLoading(true)

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })

          // Mock data - in a real app, this would be an API call using the coordinates
          setTimeout(() => {
            const mockDoctors = [
              {
                id: 1,
                name: "Dr. Ayush Kumar",
                specialty: "Ayurveda",
                address: "123 Herbal Lane, Green Park",
                contact: "+91 98765 43210",
                distance: "1.2 km",
              },
              {
                id: 2,
                name: "Dr. Priya Sharma",
                specialty: "Yoga & Naturopathy",
                address: "45 Wellness Street, Harmony Gardens",
                contact: "+91 87654 32109",
                distance: "2.5 km",
              },
              {
                id: 3,
                name: "Dr. Mohammed Ali",
                specialty: "Unani",
                address: "78 Traditional Road, Heritage Colony",
                contact: "+91 76543 21098",
                distance: "3.8 km",
              },
              {
                id: 4,
                name: "Dr. Lakshmi Iyer",
                specialty: "Siddha",
                address: "32 Ancient Path, Cultural District",
                contact: "+91 65432 10987",
                distance: "4.1 km",
              },
            ]

            setDoctors(mockDoctors)
            setLoading(false)
          }, 1500)
        },
        (error) => {
          console.error("Error getting location:", error)
          setLoading(false)
        },
      )
    } else {
      setLoading(false)
    }
  }

  const getFeatures = () => {
    switch (language) {
      case "english":
        return [
          {
            title: "Interactive 3D Models",
            description: "Explore detailed 3D models of medicinal plants used in traditional systems",
          },
          {
            title: "Comprehensive Information",
            description: "Learn about plant properties, uses, cultivation methods, and traditional applications",
          },
          {
            title: "Multi-language Support",
            description: "Access information in English, Hindi, and Bengali",
          },
          {
            title: "Find Nearby Plants",
            description: "Discover where to find these medicinal plants in your locality",
          },
        ]
      case "hindi":
        return [
          {
            title: "इंटरैक्टिव 3D मॉडल",
            description: "पारंपरिक प्रणालियों में उपयोग किए जाने वाले औषधीय पौधों के विस्तृत 3D मॉडल का अन्वेषण करें",
          },
          {
            title: "व्यापक जानकारी",
            description: "पौधों के गुण, उपयोग, खेती के तरीके और पारंपरिक अनुप्रयोगों के बारे में जानें",
          },
          {
            title: "बहु-भाषा समर्थन",
            description: "अंग्रेजी, हिंदी और बंगाली में जानकारी प्राप्त करें",
          },
          {
            title: "आस-पास के पौधे खोजें",
            description: "अपने इलाके में इन औषधीय पौधों को कहां पा सकते हैं, यह जानें",
          },
        ]
      case "bengali":
        return [
          {
            title: "ইন্টারেক্টিভ 3D মডেল",
            description: "ঐতিহ্যগত পদ্ধতিতে ব্যবহৃত ঔষধি উদ্ভিদের বিস্তারিত 3D মডেল অন্বেষণ করুন",
          },
          {
            title: "বিস্তৃত তথ্য",
            description: "উদ্ভিদের বৈশিষ্ট্য, ব্যবহার, চাষাবাদ পদ্ধতি এবং ঐতিহ্যগত প্রয়োগ সম্পর্কে জানুন",
          },
          {
            title: "বহু-ভাষা সমর্থন",
            description: "ইংরেজি, হিন্দি এবং বাংলায় তথ্য অ্যাক্সেস করুন",
          },
          {
            title: "কাছাকাছি উদ্ভিদ খুঁজুন",
            description: "আপনার এলাকায় এই ঔষধি উদ্ভিদগুলি কোথায় পাওয়া যাবে তা আবিষ্কার করুন",
          },
        ]
      default:
        return [
          {
            title: "Interactive 3D Models",
            description: "Explore detailed 3D models of medicinal plants used in traditional systems",
          },
          {
            title: "Comprehensive Information",
            description: "Learn about plant properties, uses, cultivation methods, and traditional applications",
          },
          {
            title: "Multi-language Support",
            description: "Access information in English, Hindi, and Bengali",
          },
          {
            title: "Find Nearby Plants",
            description: "Discover where to find these medicinal plants in your locality",
          },
        ]
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-green-800 dark:text-green-400">{getTitle()}</span>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "english" ? "English" : language === "hindi" ? "हिंदी" : "বাংলা"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage("english")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("hindi")}>हिंदी (Hindi)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("bengali")}>বাংলা (Bengali)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6">
          <Leaf className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-400 mb-6">{getTitle()}</h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12">{getSubtitle()}</p>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
          <Link href="/garden">
            <Button size="lg" className="text-lg px-8">
              <Leaf className="h-5 w-5 mr-2" />
              {getExploreGardenText()}
            </Button>
          </Link>
          <Link href="/s.html">
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Seed className="h-5 w-5 mr-2" />
              {getBuySeedsSaplingsText()}
            </Button>
          </Link>
          <Link href="/w.html">
            <Button size="lg" variant="outline" className="text-lg px-8">
              <FileText className="h-5 w-5 mr-2" />
              {getGeneratePrescriptionText()}
            </Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <User className="h-5 w-5 mr-2" />
                {getDoctorText()}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{getNearbyDoctorsTitle()}</DialogTitle>
                <DialogDescription>{getNearbyDoctorsDescription()}</DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                {!doctors.length && !loading && (
                  <div className="text-center py-8">
                    <Button onClick={fetchNearbyDoctors}>Find Nearby Doctors</Button>
                    {!userLocation && <p className="text-sm text-muted-foreground mt-2">{getLocationErrorText()}</p>}
                  </div>
                )}

                {loading && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700 mx-auto mb-4"></div>
                    <p>{getLoadingText()}</p>
                  </div>
                )}

                {doctors.length > 0 && (
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {doctors.map((doctor) => (
                      <div key={doctor.id} className="border rounded-lg p-4 hover:border-green-500 transition-colors">
                        <h3 className="font-bold text-lg">{doctor.name}</h3>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{getSpecialtyText()}</p>
                            <p>{doctor.specialty}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{getDistanceText()}</p>
                            <p>{doctor.distance}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{getContactText()}</p>
                            <p>{doctor.contact}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{getAddressText()}</p>
                            <p className="truncate">{doctor.address}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{getFeaturesTitle()}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {getFeatures().map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t py-8">
        <div className="container text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2023 Virtual Herbal Garden. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

