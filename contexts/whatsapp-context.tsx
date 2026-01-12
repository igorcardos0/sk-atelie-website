"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface WhatsAppContextType {
  handleWhatsAppClick: (url: string) => void
  showThankYou: boolean
  countdown: number
  closeThankYou: () => void
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined)

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [showThankYou, setShowThankYou] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(5)

  const handleWhatsAppClick = (url: string) => {
    setRedirectUrl(url)
    setShowThankYou(true)
    setCountdown(5)
  }

  useEffect(() => {
    if (showThankYou && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (showThankYou && countdown === 0 && redirectUrl) {
      window.open(redirectUrl, "_blank")
      setShowThankYou(false)
      setRedirectUrl(null)
    }
  }, [showThankYou, countdown, redirectUrl])

  const closeThankYou = () => {
    if (redirectUrl) {
      window.open(redirectUrl, "_blank")
    }
    setShowThankYou(false)
    setRedirectUrl(null)
  }

  return (
    <WhatsAppContext.Provider
      value={{
        handleWhatsAppClick,
        showThankYou,
        countdown,
        closeThankYou,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const context = useContext(WhatsAppContext)
  if (context === undefined) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider")
  }
  return context
}

