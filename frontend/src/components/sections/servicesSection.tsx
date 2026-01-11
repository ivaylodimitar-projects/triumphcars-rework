import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Професионална Проверка",
    description: "Детайлна инспекция на всеки автомобил преди покупка",
    icon: "🔧",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Конкурентни Цени",
    description: "Най-добрите цени на пазара с пълна прозрачност",
    icon: "💰",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Бърза Доставка",
    description: "Оптимизиран процес за минимално време на доставка",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Пълна Документация",
    description: "Грижим се за всички документи и митническо оформяне",
    icon: "📄",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Гаранция за Качество",
    description: "Всички автомобили са проверени и сертифицирани",
    icon: "✨",
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "24/7 Поддръжка",
    description: "Винаги на разположение за вашите въпроси",
    icon: "🎯",
    color: "from-red-500 to-red-600"
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
            Защо Да Изберете Нас?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Предлагаме най-добрите услуги за внос на автомобили от САЩ
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-600/50">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Доволни Клиенти" },
            { number: "1000+", label: "Внесени Автомобили" },
            { number: "15+", label: "Години Опит" },
            { number: "100%", label: "Удовлетвореност" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

