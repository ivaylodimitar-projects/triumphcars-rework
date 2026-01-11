import { ReactNode } from "react"

interface Props {
  id: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  // Различни градиенти за различни секции
  const backgrounds: Record<string, string> = {
    hero: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    services: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    process: "bg-gradient-to-br from-black via-gray-900 to-gray-800",
    inventory: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
    about: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    contact: "bg-gradient-to-br from-black via-gray-900 to-gray-800",
  }

  const bgClass = backgrounds[id] || "bg-gray-900"

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden ${bgClass} ${className}`}
    >
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  )
}