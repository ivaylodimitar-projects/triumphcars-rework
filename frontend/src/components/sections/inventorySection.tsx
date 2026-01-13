import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"
import { useState } from "react"

export default function InventorySection() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <SectionWrapper id="inventory">
      <div className="w-full max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Налични Автомобили
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Разгледайте нашата селекция от качествени автомобили от САЩ и Канада
          </p>

          {/* Mobile.bg Badge */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-sm">Актуални обяви от Mobile.bg</span>
          </div>
        </motion.div>

        {/* Mobile.bg Iframe Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 z-10">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
                <p className="text-gray-300 text-lg">Зареждане на автомобили...</p>
              </div>
            </div>
          )}

          {/* Iframe Wrapper */}
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-700/50 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  triumphcars.mobile.bg
                </div>
                <a
                  href="https://triumphcars.mobile.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm flex items-center gap-2"
                >
                  <span>Отвори</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Iframe */}
            <div className="relative" style={{ height: "800px" }}>
              <iframe
                src="https://triumphcars.mobile.bg/"
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
                title="Triumph Cars - Mobile.bg Обяви"
                style={{
                  border: "none",
                  display: "block"
                }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>

            {/* Bottom Info Bar */}
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-t border-gray-700/50 px-6 py-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span>Всички обяви са актуални и проверени</span>
                </div>
                <div className="text-blue-400 font-semibold">
                  Triumph Cars
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Не намирате това, което търсите? Свържете се с нас и ще ви помогнем да намерите идеалния автомобил!
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Свържи се с нас
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

