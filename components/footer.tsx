export default function Footer({ language }) {
  const getCopyrightText = () => {
    switch (language) {
      case "english":
        return "© 2025 Virtual Herbal Garden. All rights reserved."
      case "hindi":
        return "© 2025 वर्चुअल हर्बल गार्डन. सर्वाधिकार सुरक्षित।"
      case "bengali":
        return "© 2025 ভার্চুয়াল হার্বাল গার্ডেন। সর্বস্বত্ব সংরক্ষিত।"
      default:
        return "© 2025 Virtual Herbal Garden. All rights reserved."
    }
  }

  const getAboutText = () => {
    switch (language) {
      case "english":
        return "About"
      case "hindi":
        return "हमारे बारे में"
      case "bengali":
        return "সম্পর্কে"
      default:
        return "About"
    }
  }

  const getPrivacyText = () => {
    switch (language) {
      case "english":
        return "Privacy Policy"
      case "hindi":
        return "गोपनीयता नीति"
      case "bengali":
        return "গোপনীয়তা নীতি"
      default:
        return "Privacy Policy"
    }
  }

  const getTermsText = () => {
    switch (language) {
      case "english":
        return "Terms of Service"
      case "hindi":
        return "सेवा की शर्तें"
      case "bengali":
        return "পরিষেবার শর্তাবলী"
      default:
        return "Terms of Service"
    }
  }

  const getContactText = () => {
    switch (language) {
      case "english":
        return "Contact"
      case "hindi":
        return "संपर्क करें"
      case "bengali":
        return "যোগাযোগ"
      default:
        return "Contact"
    }
  }

  return (
    <footer className="w-full border-t bg-white dark:bg-gray-950 py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">{getCopyrightText()}</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {getAboutText()}
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {getPrivacyText()}
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {getTermsText()}
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {getContactText()}
          </a>
        </div>
      </div>
    </footer>
  )
}

