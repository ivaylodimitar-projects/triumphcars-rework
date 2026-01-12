import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.95)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const phoneNumber = "+359888123456" // Замени с реалния номер
  const viberLink = `viber://chat?number=${phoneNumber}`
  const telLink = `tel:${phoneNumber}`

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-2xl backdrop-blur-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-xl shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Iron Import
              </div>
              <div className="text-xs text-gray-400">Внос от САЩ и Канада</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { href: "#hero", label: "Начало" },
              { href: "#services", label: "Услуги" },
              { href: "#process", label: "Процес" },
              { href: "#inventory", label: "Автомобили" },
              { href: "#locations", label: "Локации" },
              { href: "#about", label: "За нас" },
              { href: "#contact", label: "Контакти" }
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {/* Call Button with Gentle Pulse Effect */}
            <motion.a
              href={telLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/50 text-sm"
            >
              {/* Gentle Pulsing Ring Animation */}
              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-green-300"
              />

              {/* Button Content */}
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">Обади се</span>
              </span>
            </motion.a>

            {/* Viber Button */}
            <motion.a
              href={viberLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.617 6.55 20.23h.01l-.006 2.194s-.037.938.582 1.13c.75.23 1.19-.486 1.907-1.26.39-.42.926-1.026 1.33-1.49 3.665.307 6.487-.395 6.8-.5.738-.247 4.91-.797 5.59-6.487.702-5.863-.36-9.57-2.95-11.182C17.047.386 14.238.028 11.4 0zm.058 1.693c2.586.022 5.148.353 7.144 1.78 2.16 1.457 3.01 4.648 2.425 9.673-.587 5.03-4.132 5.305-4.723 5.5-.27.09-2.825.737-6.08.488 0 0-2.405 2.91-3.157 3.664-.12.12-.26.167-.352.145-.13-.033-.166-.188-.165-.414l.02-3.61c-5.068-1.316-4.754-5.98-4.696-8.628.057-2.647.58-4.78 2.043-6.257 1.98-1.913 5.7-2.32 7.54-2.34z" />
              </svg>
              <span className="hidden sm:inline">Viber</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Button - може да се добави по-късно */}
    </motion.nav>
  )
}

