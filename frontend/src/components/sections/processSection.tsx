import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Избор на автомобил",
    description: "Помагаме ви да изберете идеалния автомобил от американските търгове и дилъри.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Проверка и оценка",
    description: "Извършваме детайлна проверка на състоянието и историята на автомобила.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Покупка и транспорт",
    description: "Закупуваме автомобила и организираме транспорта до България.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Митническо оформяне",
    description: "Грижим се за цялата документация и митническо оформяне.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    number: "05",
    title: "Доставка при вас",
    description: "Доставяме автомобила директно до вас, готов за регистрация.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
]

export default function ProcessSection() {
  return (
    <SectionWrapper id="process">
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
            Как работи процесът?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Пет прости стъпки до вашия нов автомобил от Америка и Канада
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Animated Background Lines */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Moving highlight gradients */}
              <linearGradient id="processSnakeBlue1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="100">
                <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                <stop offset="45%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(59 130 246)" stopOpacity="0.7">
                  <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="55%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                <animateTransform attributeName="gradientTransform" type="translate" from="0 -50" to="0 150" dur="8s" repeatCount="indefinite" />
              </linearGradient>

              <linearGradient id="processSnakeBlue2" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">
                <stop offset="0%" stopColor="rgb(147 51 234)" stopOpacity="0" />
                <stop offset="43%" stopColor="rgb(147 51 234)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(147 51 234)" stopOpacity="0.6">
                  <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
                </stop>
                <stop offset="57%" stopColor="rgb(147 51 234)" stopOpacity="0" />
                <stop offset="100%" stopColor="rgb(147 51 234)" stopOpacity="0" />
                <animateTransform attributeName="gradientTransform" type="translate" from="-60 0" to="160 0" dur="10s" repeatCount="indefinite" />
              </linearGradient>

              <filter id="processSnakeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Vertical flowing line */}
            <motion.path
              d="M 50 0 C 50 20, 50 20, 50 40 S 50 60, 50 80 S 50 90, 50 100"
              stroke="url(#processSnakeBlue1)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              filter="url(#processSnakeGlow)"
              initial={{ opacity: 0.15 }}
              animate={{
                d: [
                  "M 50 0 C 50 20, 50 20, 50 40 S 50 60, 50 80 S 50 90, 50 100",
                  "M 50 0 C 52 20, 48 20, 50 40 S 52 60, 50 80 S 48 90, 50 100",
                  "M 50 0 C 50 20, 50 20, 50 40 S 50 60, 50 80 S 50 90, 50 100",
                ],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Horizontal flowing line */}
            <motion.path
              d="M 0 50 C 20 50, 40 50, 60 50 S 80 50, 100 50"
              stroke="url(#processSnakeBlue2)"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              filter="url(#processSnakeGlow)"
              initial={{ opacity: 0.12 }}
              animate={{
                d: [
                  "M 0 50 C 20 50, 40 50, 60 50 S 80 50, 100 50",
                  "M 0 50 C 20 48, 40 52, 60 50 S 80 48, 100 50",
                  "M 0 50 C 20 50, 40 50, 60 50 S 80 50, 100 50",
                ],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>

          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 -translate-x-1/2 z-0" />

          <div className="space-y-6 md:space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content - Speech Bubble Style */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative"
                  >
                    {/* Speech Bubble */}
                    <div className={`relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-4 rounded-3xl border ${step.borderColor} shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}>
                      {/* Icon Badge */}
                      <div className={`mb-2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-center`}>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg ring-2 ring-gray-900/50`}>
                          <div className="w-5 h-5">
                            {step.icon}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className={`text-base md:text-lg font-bold mb-1.5 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative corner dots */}
                      <div className={`absolute top-2 ${index % 2 === 0 ? "right-2" : "left-2"} w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} opacity-40`}></div>
                      <div className={`absolute bottom-2 ${index % 2 === 0 ? "left-2" : "right-2"} w-1 h-1 rounded-full bg-gradient-to-br ${step.color} opacity-30`}></div>
                    </div>

                    {/* Speech Bubble Tail */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}>
                      <svg width="20" height="30" viewBox="0 0 20 30" className={index % 2 === 0 ? "" : "scale-x-[-1]"}>
                        <path
                          d="M 0 15 Q 10 10, 20 15 Q 10 20, 0 15"
                          className={`fill-gray-800/60`}
                          style={{ filter: 'blur(0.5px)' }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Number Circle with Pulse Effect */}
                <div className="relative flex-shrink-0">
                  {/* Pulsing rings */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20`}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-15`}
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.15, 0, 0.15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2 + 0.3,
                    }}
                  />

                  {/* Main circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-16 h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-gray-900/50 z-10`}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-1 rounded-full bg-white/10"></div>
                    <span className="relative text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
          >
            Започнете сега
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}