/**
 * Cookie Consent Utility Functions
 * Използвай тези функции за да проверяваш дали потребителят е дал съгласие
 */

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

/**
 * Вземи текущите cookie preferences на потребителя
 */
export const getCookiePreferences = (): CookiePreferences | null => {
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) return null
  
  try {
    return JSON.parse(consent) as CookiePreferences
  } catch {
    return null
  }
}

/**
 * Провери дали потребителят е дал съгласие за analytics
 */
export const hasAnalyticsConsent = (): boolean => {
  const preferences = getCookiePreferences()
  return preferences?.analytics ?? false
}

/**
 * Провери дали потребителят е дал съгласие за marketing
 */
export const hasMarketingConsent = (): boolean => {
  const preferences = getCookiePreferences()
  return preferences?.marketing ?? false
}

/**
 * Провери дали потребителят е дал някакво съгласие
 */
export const hasGivenConsent = (): boolean => {
  return getCookiePreferences() !== null
}

export const clearCookieConsent = (): void => {
  localStorage.removeItem('cookieConsent')
  localStorage.removeItem('cookieConsentDate')
}

export const initializeAnalytics = (measurementId: string): void => {
  if (!hasAnalyticsConsent()) {
    console.log('Analytics consent not given')
    return
  }

  // Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Инициализирай gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', measurementId)

  console.log('Google Analytics initialized')
}

// Добави типове за window.dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

