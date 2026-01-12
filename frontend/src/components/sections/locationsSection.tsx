import SectionWrapper from "@/components/ui/sectionWrapper"
import { motion } from "framer-motion"
import { useState } from "react"
import usaMap from "../../assets/usa_map.avif"
import { GiPalmTree, GiMountains, GiFactory, GiMapleLeaf } from "react-icons/gi"
import { FaCity } from "react-icons/fa"
import { BsBuilding } from "react-icons/bs"

// Organized by regions
const regions = [
  {
    name: "Западно Крайбрежие",
    icon: <GiPalmTree className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    states: [
      { name: "Калифорния", code: "CA" },
      { name: "Вашингтон", code: "WA" },
      { name: "Орегон", code: "OR" }
    ]
  },
  {
    name: "Североизток",
    icon: <FaCity className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    states: [
      { name: "Ню Йорк", code: "NY" },
      { name: "Пенсилвания", code: "PA" },
      { name: "Ню Джърси", code: "NJ" },
      { name: "Масачузетс", code: "MA" },
      { name: "Мериленд", code: "MD" }
    ]
  },
  {
    name: "Средни Щати",
    icon: <GiFactory className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    states: [
      { name: "Илинойс", code: "IL" },
      { name: "Охайо", code: "OH" },
      { name: "Мичиган", code: "MI" },
      { name: "Индиана", code: "IN" },
      { name: "Уисконсин", code: "WI" },
      { name: "Минесота", code: "MN" },
      { name: "Мисури", code: "MO" }
    ]
  },
  {
    name: "Югоизток",
    icon: <GiPalmTree className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    states: [
      { name: "Флорида", code: "FL" },
      { name: "Джорджия", code: "GA" },
      { name: "Северна Каролина", code: "NC" },
      { name: "Южна Каролина", code: "SC" },
      { name: "Вирджиния", code: "VA" }
    ]
  },
  {
    name: "Юг и Югозапад",
    icon: <BsBuilding className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    states: [
      { name: "Тексас", code: "TX" },
      { name: "Аризона", code: "AZ" },
      { name: "Тенеси", code: "TN" },
      { name: "Алабама", code: "AL" }
    ]
  },
  {
    name: "Планински Щати",
    icon: <GiMountains className="w-8 h-8" />,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    states: [
      { name: "Колорадо", code: "CO" },
      { name: "Юта", code: "UT" },
      { name: "Невада", code: "NV" }
    ]
  },
  {
    name: "Канада",
    icon: <GiMapleLeaf className="w-8 h-8" />,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    states: [
      { name: "Британска Колумбия", code: "BC" },
      { name: "Алберта", code: "AB" },
      { name: "Онтарио", code: "ON" },
      { name: "Квебек", code: "QC" },
      { name: "Манитоба", code: "MB" },
      { name: "Саскачеван", code: "SK" }
    ]
  }
]

const totalStates = regions.reduce((sum, region) => sum + region.states.length, 0)

export default function LocationsSection() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <SectionWrapper id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative USA map background (low opacity, non-interactive) */}
        <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain opacity-20"
            style={{ backgroundImage: `url(${usaMap})` }}
          />
        </div>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Дилърски <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Локации</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Работим с водещи дилъри и търгове в САЩ и Канада
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">{totalStates}</div>
              <div className="text-gray-400 text-sm mt-1">Общо локации</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">{regions.length}</div>
              <div className="text-gray-400 text-sm mt-1">Региона</div>
            </div>
          </div>
        </motion.div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, regionIndex) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: regionIndex * 0.1 }}
              onMouseEnter={() => setHoveredRegion(region.name)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border ${region.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                {/* Header */}
                <div className={`${region.bgColor} border-b ${region.borderColor} px-6 py-4`}>
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${region.color}`}
                    >
                      <div className="text-white">
                        {region.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${region.color} bg-clip-text text-transparent`}>
                        {region.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{region.states.length} локации</p>
                    </div>
                  </div>
                </div>

                {/* States List */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {region.states.map((state, stateIndex) => (
                      <motion.div
                        key={state.code}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: stateIndex * 0.05 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className={`${region.bgColor} ${region.borderColor} border rounded-lg px-3 py-2 cursor-pointer transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">{state.name}</span>
                          <span className={`text-xs font-bold bg-gradient-to-r ${region.color} bg-clip-text text-transparent`}>
                            {state.code}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredRegion === region.name && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className={`h-1 bg-gradient-to-r ${region.color}`}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
