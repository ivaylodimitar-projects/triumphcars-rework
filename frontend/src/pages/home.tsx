import HeroSection from "@/components/sections/heroSection"
import ProcessSection from "@/components/sections/processSection"
import AboutSection from "@/components/sections/aboutSection"
import SideNav from "@/components/layout/sideNav"
import { useScrollSpy } from "@/hooks/dynamicScroll"
import "@/index.css"
const sections = [
  { id: "hero", label: "Home" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
]

export default function Home() {
  const activeId = useScrollSpy(sections.map((s) => s.id))

  return (
    <>
      <SideNav sections={sections} activeId={activeId} />

      <HeroSection />
      <ProcessSection />
      <AboutSection />
    </>
  )
}