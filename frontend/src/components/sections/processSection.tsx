import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Избор на Автомобил",
    description: "Помагаме ви да изберете идеалния автомобил от американските търгове и дилъри.",
    icon: "🚗"
  },
  {
    number: "02",
    title: "Проверка и Оценка",
    description: "Извършваме детайлна проверка на състоянието и историята на автомобила.",
    icon: "🔍"
  },
  {
    number: "03",
    title: "Покупка и Транспорт",
    description: "Закупуваме автомобила и организираме транспорта до България.",
    icon: "🚢"
  },
  {
    number: "04",
    title: "Митническо Оформяне",
    description: "Грижим се за цялата документация и митническо оформяне.",
    icon: "📋"
  },
  {
    number: "05",
    title: "Доставка при Вас",
    description: "Доставяме автомобила директно до вас, готов за регистрация.",
    icon: "✅"
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
            Как Работи Процесът?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Пет прости стъпки до вашия нов автомобил от Америка
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl"
                  >
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl border-4 border-gray-900 relative z-10"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-white">
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
            Започнете Сега
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}