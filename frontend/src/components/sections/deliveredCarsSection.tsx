import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"

const deliveredCars = [
  {
    url: "https://www.instagram.com/p/DTXiwa9jJp2/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/613551620_18377933062158504_5299236449437452757_nfull.webp"
  },
  {
    url: "https://www.instagram.com/p/DTQEbfWDA2M/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/612513015_18377650363158504_1622370214648405973_nfull.webp"
  },
  {
    url: "https://www.instagram.com/p/DSxQmUwjZbl/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/607162954_18376376020158504_7378503103702860268_nfull.webp"
  },
  {
    url: "https://www.instagram.com/reel/DSo4qOpDMoI/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/604111193_1347514683355026_5486386283186334551_nfull.webp"
  },
  {
    url: "https://www.instagram.com/p/DSmoXw9DJvx/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/604275036_18375929467158504_926443297323306519_nfull.webp"
  },
  {
    url: "https://www.instagram.com/p/DSkCe0-jMDg/",
    image: "https://carboxbg.com/wp-content/uploads/sb-instagram-feed-images/604505915_18375829909158504_4494693235158529638_nfull.webp"
  }
]

export default function DeliveredCarsSection() {
  return (
    <SectionWrapper id="delivered">
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
            Доставени aвтомобили
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Разгледайте някои от нашите успешни доставки и доволни клиенти
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveredCars.map((car, index) => (
            <motion.a
              key={index}
              href={car.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-800">
                <img
                  src={car.image}
                  alt={`Delivered car ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm font-semibold">Виж на Instagram</span>
                  </div>
                </div>

                {/* Border Gradient */}
                <div className="absolute inset-0 border border-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Искате ли да видите повече? Следете ни в Instagram за последните доставки!
          </p>
          <a
            href="https://www.instagram.com/triumphcars.bg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
          >
            Следи ни в Instagram
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

