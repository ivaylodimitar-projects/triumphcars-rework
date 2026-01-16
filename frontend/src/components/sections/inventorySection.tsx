import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

export default function InventorySection() {
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

          {/* Cars.bg Badge */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-sm">Актуални обяви от Cars.bg</span>
          </div>
        </motion.div>

        {/* Cars.bg Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            {/* Hero Image Section */}
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://hpe-photos.s3.us-east-2.amazonaws.com/wp-content/uploads/2024/08/Raptor-Rewind-3-scaled.jpg"
                alt="Автомобили"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

              {/* Floating Info Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                  >
                    <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Разгледайте всички автомобили
                    </h3>
                    <p className="text-gray-300 mb-5 text-base">
                      Вижте актуалните ни обяви в Cars.bg
                    </p>
                    <a
                      href="https://www.cars.bg/company/triumphcarssofia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-base"
                    >
                      <span>Отвори Cars.bg</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              {/* Проверени автомобили - Зелено */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border border-green-500/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Проверени автомобили</h4>
                  <p className="text-gray-300 text-xs text-center leading-relaxed">Всички обяви са актуални и проверени от нашите специалисти</p>
                </div>
              </motion.div>

              {/* Актуални цени - Жълто */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border border-yellow-500/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Актуални цени</h4>
                  <p className="text-gray-300 text-xs text-center leading-relaxed">Цените се обновяват редовно и отразяват текущата пазарна стойност</p>
                </div>
              </motion.div>

              {/* Директен контакт - Синьо */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Директен контакт</h4>
                  <p className="text-gray-300 text-xs text-center leading-relaxed">Свържете се с нас за повече информация и детайли</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
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

