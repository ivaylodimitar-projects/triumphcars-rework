import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

// Sample car data - в бъдеще ще се зарежда от API
const cars = [
  {
    id: 1,
    name: "Ford Mustang GT",
    year: 2022,
    price: "45,000",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f5d3e0c0?auto=format&fit=crop&w=800&q=80",
    mileage: "15,000",
    location: "Калифорния"
  },
  {
    id: 2,
    name: "Chevrolet Camaro",
    year: 2021,
    price: "38,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    mileage: "22,000",
    location: "Тексас"
  },
  {
    id: 3,
    name: "Dodge Challenger",
    year: 2023,
    price: "52,000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    mileage: "8,000",
    location: "Флорида"
  },
  {
    id: 4,
    name: "Tesla Model 3",
    year: 2022,
    price: "42,000",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
    mileage: "12,000",
    location: "Невада"
  }
]

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Налични Автомобили
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Разгледайте нашата селекция от качествени автомобили от САЩ
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-gray-600/50">
                {/* Car Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {car.year}
                  </div>
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {car.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{car.location}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span>🛣️</span>
                        <span>{car.mileage} км</span>
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400">Цена</div>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        ${car.price}
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Детайли
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg border border-gray-600">
            Виж Всички Автомобили
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

