import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'
import { hasGivenConsent, type CookiePreferences } from '@/utils/cookieConsent'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Винаги активни
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Провери дали потребителят вече е дал съгласие
    if (!hasGivenConsent()) {
      // Покажи banner след 1 секунда
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    savePreferences(allPreferences)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    savePreferences(necessaryOnly)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    
    // Тук можеш да добавиш логика за активиране на analytics/marketing скриптове
    if (prefs.analytics) {
      // Активирай Google Analytics или друг analytics tool
      console.log('Analytics enabled')
    }
    if (prefs.marketing) {
      // Активирай marketing cookies
      console.log('Marketing enabled')
    }
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return // Necessary cookies не могат да се изключат
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Бисквитки и поверителност</h3>
                    <p className="text-gray-400 text-sm">Грижим се за вашата поверителност</p>
                  </div>
                </div>
                <button
                  onClick={handleAcceptNecessary}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Затвори"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Използваме бисквитки (cookies) за да подобрим вашето изживяване на нашия сайт, 
                да анализираме трафика и да персонализираме съдържанието. Можете да изберете 
                кои бисквитки да разрешите.
              </p>

              {/* Details Section */}
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 mb-6"
                >
                  {/* Necessary Cookies */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <FiCheck className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-white">Необходими бисквитки</h4>
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        Винаги активни
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Тези бисквитки са необходими за правилното функциониране на сайта и не могат да бъдат изключени.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h4 className="font-semibold text-white">Аналитични бисквитки</h4>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Помагат ни да разберем как посетителите използват сайта, за да го подобрим.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <h4 className="font-semibold text-white">Маркетингови бисквитки</h4>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          preferences.marketing ? 'bg-purple-500' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Използват се за показване на релевантни реклами и маркетингови кампании.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  {showDetails ? 'Скрий детайли' : 'Настройки'}
                </button>

                {showDetails && (
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Запази избраните
                  </button>
                )}

                <button
                  onClick={handleAcceptNecessary}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Само необходими
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Приеми всички
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


