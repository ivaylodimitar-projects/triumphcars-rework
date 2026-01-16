import HeroSection from "@/components/sections/heroSection"
import ServicesSection from "@/components/sections/servicesSection"
import ProcessSection from "@/components/sections/processSection"
import InventorySection from "@/components/sections/inventorySection"
import LocationsSection from "@/components/sections/locationsSection"
import AboutSection from "@/components/sections/aboutSection"
// import DeliveredCarsSection from "@/components/sections/deliveredCarsSection"
import ContactSection from "@/components/sections/contactSection"
import Navbar from "@/components/layout/navbar"
import SideNav from "@/components/layout/sideNav"
import Footer from "@/components/layout/footer"
import CookieConsent from "@/components/ui/cookieConsent"
import { useScrollSpy } from "@/hooks/dynamicScroll"
import "@/index.css"

const sections = [
  { id: "hero", label: "Начало" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Процес" },
  { id: "inventory", label: "Автомобили" },
  { id: "locations", label: "Локации" },
  { id: "about", label: "За Нас" },
  // { id: "delivered", label: "Доставени" },
  { id: "contact", label: "Контакти" },
]

export default function Home() {
  const activeId = useScrollSpy(sections.map((s) => s.id))

  return (
    <>
      <Navbar />
      <SideNav sections={sections} activeId={activeId} />

      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <InventorySection />
      <LocationsSection />
      <AboutSection />
      {/* <DeliveredCarsSection /> */}
      <ContactSection />

      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </>
  )
}