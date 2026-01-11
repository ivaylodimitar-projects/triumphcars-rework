import HeroSection from "@/components/sections/heroSection"
import ServicesSection from "@/components/sections/servicesSection"
import ProcessSection from "@/components/sections/processSection"
import InventorySection from "@/components/sections/inventorySection"
import AboutSection from "@/components/sections/aboutSection"
import ContactSection from "@/components/sections/contactSection"
import SideNav from "@/components/layout/sideNav"
import { useScrollSpy } from "@/hooks/dynamicScroll"
import "@/index.css"

const sections = [
  { id: "hero", label: "Начало" },
  { id: "services", label: "Услуги" },
  { id: "process", label: "Процес" },
  { id: "inventory", label: "Автомобили" },
  { id: "about", label: "За Нас" },
  { id: "contact", label: "Контакти" },
]

export default function Home() {
  const activeId = useScrollSpy(sections.map((s) => s.id))

  return (
    <>
      <SideNav sections={sections} activeId={activeId} />

      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <InventorySection />
      <AboutSection />
      <ContactSection />
    </>
  )
}