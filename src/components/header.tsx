"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Globe, User, Leaf } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Header({ language, toggleLanguage }) {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [userLocation, setUserLocation] = useState(null)

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

  const getPrescriptionText = () => {
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

  const getDoctorText = () => {
    switch (language) {
      case "english":
        return "Nearby Doctors"
      case "hindi":
        return "आस-पास के डॉक्टर"
      case "bengali":
        return "কাছাকাছি ডাক্তার"
      default:
        return "Nearby Doctors"
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

  return (
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

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
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

          <Link href="/w.html">
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              {getPrescriptionText()}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

