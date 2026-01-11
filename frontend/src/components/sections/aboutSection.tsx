import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              За Нас
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Ние сме водеща компания в България, специализирана във внос на автомобили от Съединените американски щати.
                С над <span className="text-blue-400 font-semibold">15 години опит</span> в бранша, ние сме помогнали на стотици клиенти
                да намерят и внесат техния мечтан автомобил.
              </p>
              <p>
                Нашият екип от професионалисти се грижи за всеки детайл от процеса - от избора на автомобила,
                през проверката и покупката, до транспорта и митническото оформяне. Работим само с проверени
                търгове и дилъри в САЩ, за да гарантираме качеството на всеки автомобил.
              </p>
              <p>
                Вярваме в <span className="text-blue-400 font-semibold">прозрачност, професионализъм и качество</span>.
                Всеки наш клиент получава пълна информация и поддръжка през целия процес на внос.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "🏆", text: "15+ Години Опит" },
                { icon: "✅", text: "Проверено Качество" },
                { icon: "🌟", text: "500+ Клиенти" },
                { icon: "🚀", text: "Бърза Доставка" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-white font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80"
                alt="Автомобили"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">1000+</div>
                      <div className="text-sm text-gray-300">Автомобили</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">15+</div>
                      <div className="text-sm text-gray-300">Години</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-300">Качество</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}