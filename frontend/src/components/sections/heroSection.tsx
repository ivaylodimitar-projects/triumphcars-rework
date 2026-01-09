// src/components/sections/HeroSection.tsx
import SectionWrapper from "@/components/ui/sectionWrapper"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <SectionWrapper id="hero">
      {/* TEST: Hello World with Tailwind */}
      <div className="absolute top-4 right-4 bg-red-500 text-white p-4 rounded-lg text-2xl font-bold z-50">
        Hello World - Tailwind Test
      </div>

      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1608889174181-6e3a53f7c5c3?auto=format&fit=crop&w=1950&q=80"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Premium Cars. Better Experience.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 drop-shadow-md">
          Discover the finest selection of cars imported directly from Europe.
          Fully inspected and ready to drive.
        </p>
        <a
          href="#inventory"
          className="inline-block mt-8 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl transition transform hover:scale-105 shadow-lg"
        >
          Explore Cars
        </a>
      </motion.div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-3 h-3 border-2 border-white rounded-full mx-auto"
        />
      </div>
    </SectionWrapper>
  )
}
