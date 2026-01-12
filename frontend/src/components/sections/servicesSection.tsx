import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Над 5 години опит",
    description: "Дългогодишен опит във вноса на автомобили от САЩ и Канада",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    title: "4 собствени паркинга",
    description: "Разполагаме със собствени паркинги за съхранение на автомобили",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    title: "Собствени митнически агенти",
    description: "Нашите митнически агенти осигуряват бързо и безпроблемно обмитяване",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Собствени майстори в САЩ и Канада",
    description: "Нашите специалисти на място проверяват всеки автомобил",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30"
  },
  {
    title: "Плащане след оглед",
    description: "Плащате за автомобила само след оглед от наш човек на място",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30"
  },
  {
    title: "Пълна помощ при обмитяване",
    description: "Помощ при обмитяване, транспорт и регистрация в КАТ",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30"
  },
  {
    title: "Съдействие при технотест",
    description: "Пълно съдействие и подготовка на автомобила за технотест",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30"
  }
]

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Защо да изберете нас?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Предлагаме най-добрите услуги за внос на автомобили от САЩ и Канада
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Gold “snake” lines that animate BETWEEN cards (not in the header area) */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
	              {/* Moving highlight gradients (no dashes/stripes; looks more fluid/modern) */}
	              <linearGradient id="servicesSnakeGold1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
	                <stop offset="0%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="42%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="50%" stopColor="rgb(245 158 11)" stopOpacity="0.85">
	                  <animate attributeName="stop-opacity" values="0.55;0.95;0.55" dur="2.8s" repeatCount="indefinite" />
	                </stop>
	                <stop offset="58%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <animateTransform attributeName="gradientTransform" type="translate" from="-60 0" to="160 0" dur="6.5s" repeatCount="indefinite" />
	              </linearGradient>

	              <linearGradient id="servicesSnakeGold2" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
	                <stop offset="0%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="40%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="50%" stopColor="rgb(245 158 11)" stopOpacity="0.8">
	                  <animate attributeName="stop-opacity" values="0.45;0.9;0.45" dur="3.2s" repeatCount="indefinite" />
	                </stop>
	                <stop offset="60%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <animateTransform attributeName="gradientTransform" type="translate" from="160 0" to="-60 0" dur="7.8s" repeatCount="indefinite" />
	              </linearGradient>

	              <linearGradient id="servicesSnakeGold3" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
	                <stop offset="0%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="43%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="50%" stopColor="rgb(245 158 11)" stopOpacity="0.75">
	                  <animate attributeName="stop-opacity" values="0.4;0.85;0.4" dur="3.6s" repeatCount="indefinite" />
	                </stop>
	                <stop offset="57%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <stop offset="100%" stopColor="rgb(245 158 11)" stopOpacity="0" />
	                <animateTransform attributeName="gradientTransform" type="translate" from="-40 0" to="140 0" dur="9.5s" repeatCount="indefinite" />
	              </linearGradient>

              <filter id="servicesSnakeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main snake path (weaves through the grid area) */}
            <motion.path
	              d="M -5 18 C 10 8, 20 8, 30 18 S 50 28, 60 18 S 80 8, 105 18"
	              stroke="url(#servicesSnakeGold1)"
	              strokeWidth="2.4"
              strokeLinecap="round"
	              strokeLinejoin="round"
              fill="none"
              filter="url(#servicesSnakeGlow)"
	              initial={{ opacity: 0.18 }}
	              animate={{
	                d: [
	                  "M -5 18 C 10 8, 20 8, 30 18 S 50 28, 60 18 S 80 8, 105 18",
	                  "M -5 20 C 10 11, 20 6, 30 20 S 50 30, 60 20 S 80 10, 105 20",
	                  "M -5 18 C 10 8, 20 8, 30 18 S 50 28, 60 18 S 80 8, 105 18",
	                ],
	                opacity: [0.18, 0.35, 0.18],
	                strokeWidth: [2.2, 2.6, 2.2],
	              }}
	              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Second snake path (lower area) */}
            <motion.path
	              d="M 105 55 C 90 45, 80 45, 70 55 S 50 65, 40 55 S 20 45, -5 55"
	              stroke="url(#servicesSnakeGold2)"
	              strokeWidth="2.4"
              strokeLinecap="round"
	              strokeLinejoin="round"
              fill="none"
              filter="url(#servicesSnakeGlow)"
	              initial={{ opacity: 0.16 }}
	              animate={{
	                d: [
	                  "M 105 55 C 90 45, 80 45, 70 55 S 50 65, 40 55 S 20 45, -5 55",
	                  "M 105 57 C 90 48, 80 42, 70 57 S 50 69, 40 57 S 20 45, -5 57",
	                  "M 105 55 C 90 45, 80 45, 70 55 S 50 65, 40 55 S 20 45, -5 55",
	                ],
	                opacity: [0.16, 0.32, 0.16],
	                strokeWidth: [2.2, 2.6, 2.2],
	              }}
	              transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />

            {/* Vertical-ish connector snake between columns */}
            <motion.path
	              d="M 33 0 C 28 18, 38 28, 33 45 S 28 72, 33 100"
	              stroke="url(#servicesSnakeGold3)"
	              strokeWidth="2.2"
              strokeLinecap="round"
	              strokeLinejoin="round"
              fill="none"
              filter="url(#servicesSnakeGlow)"
	              initial={{ opacity: 0.12 }}
	              animate={{
	                d: [
	                  "M 33 0 C 28 18, 38 28, 33 45 S 28 72, 33 100",
	                  "M 35 0 C 30 16, 40 30, 35 48 S 30 74, 35 100",
	                  "M 33 0 C 28 18, 38 28, 33 45 S 28 72, 33 100",
	                ],
	                opacity: [0.12, 0.26, 0.12],
	              }}
	              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />

            {/* A subtle “head” dot that moves to sell the snake motion */}
            <motion.circle
              r="1.35"
	              fill="rgba(245,158,11,0.9)"
              filter="url(#servicesSnakeGlow)"
	              initial={{ cx: 14, cy: 22, opacity: 0.0, scale: 0.9 }}
	              animate={{
	                cx: [14, 50, 86, 50, 14],
	                cy: [22, 30, 22, 14, 22],
	                opacity: [0.0, 0.55, 0.55, 0.55, 0.0],
	                scale: [0.9, 1.1, 1.1, 1.0, 0.9],
	              }}
	              transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>

          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative z-10"
            >
              <div className={`h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border ${benefit.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg text-white`}
                >
                  <div className="w-6 h-6">
                    {benefit.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent transition-all duration-300`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

