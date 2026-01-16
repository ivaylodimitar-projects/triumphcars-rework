import SectionWrapper from "../ui/sectionWrapper"
import { motion } from "framer-motion"
import { useState } from "react"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS конфигурация от environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Скрий success съобщението след 5 секунди
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')

      // Скрий error съобщението след 5 секунди
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <SectionWrapper id="contact">
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
            Свържете се с нас
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Готови сме да отговорим на всички ваши въпроси
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  placeholder="Вашето име"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  placeholder="+359 ..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Съобщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors duration-300 resize-none"
                  placeholder="Как можем да ви помогнем?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl text-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Изпраща се...' : 'Изпрати съобщение'}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                >
                  ✓ Съобщението е изпратено успешно! Ще се свържем с вас скоро.
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                >
                  ✗ Възникна грешка при изпращането. Моля опитайте отново или се свържете директно на телефона.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {[
              {
                title: "Телефон",
                info: "+359 893 272 724",
                subInfo: "Пон-Пет: 9:00 - 18:00",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/10",
                borderColor: "border-green-500/30",
                icon: <FiPhone className="w-8 h-8" />
              },
              {
                title: "Email",
                info: "ironimportltd@gmail.com",
                subInfo: "Отговаряме в рамките на 24 часа",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10",
                borderColor: "border-blue-500/30",
                icon: <FiMail className="w-8 h-8" />
              },
              {
                title: "Адрес",
                info: "Симеоновско шосе 104 ет. 1, София",
                // subInfo: "Посещения по предварителна уговорка",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10",
                borderColor: "border-purple-500/30",
                icon: <FiMapPin className="w-8 h-8" />
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border ${contact.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${contact.bgColor} p-4 rounded-xl border ${contact.borderColor} bg-gradient-to-br ${contact.color}`}
                  >
                    <div className="text-white">
                      {contact.icon}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                    <p className={`font-semibold mb-1 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`}>
                      {contact.info}
                    </p>
                    <p className="text-gray-400 text-sm">{contact.subInfo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

