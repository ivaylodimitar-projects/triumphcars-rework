import type { ReactNode } from "react"
import garageImg from "../../assets/garage_img.png"

interface Props {
  id: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  // Различни градиенти за различни секции
  const backgrounds: Record<string, string> = {
    hero: "", // No background for hero - it has its own image
    services: "",
    process: "",
    inventory: "",
    about: "",
    delivered: "",
    contact: "",
  }

  const bgStyle = id !== "hero" ? { backgroundColor: "rgba(15, 15, 15, 0.95)" } : undefined
  const bgClass = backgrounds[id] || ""
  const showPattern = id !== "hero" // Don't show pattern for hero section
  const paddingClass = id === "hero" ? "py-20" : "px-6 py-20" // No horizontal padding for hero
  const wrapContent = id !== "hero" // Don't wrap content for hero section

  const sectionStyle = id === "inventory"
    ? { backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.62), rgba(15, 15, 15, 0.62)), url(${garageImg})` }
    : bgStyle

  return (
    <section
      id={id}
      style={sectionStyle}
      className={`min-h-screen flex items-center justify-center ${paddingClass} relative overflow-hidden ${bgClass} ${id === "inventory" ? "bg-cover bg-center" : ""} ${className}`}
    >
      {/* Subtle animated background pattern */}
      {showPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: "rgba(15, 15, 15, 0.95)" }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: "rgba(15, 15, 15, 0.95)", animationDelay: "1s" }} />
        </div>
      )}

      {/* Content */}
      {wrapContent ? (
        <div className="relative z-10 w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}