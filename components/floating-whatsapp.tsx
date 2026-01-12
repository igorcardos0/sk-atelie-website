"use client"

import { MessageCircle } from "lucide-react"
import { useWhatsApp } from "@/contexts/whatsapp-context"

export function FloatingWhatsApp() {
  const { handleWhatsAppClick } = useWhatsApp()

  const whatsappNumber = "5518998223977"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.")

  return (
    <button
      onClick={() => handleWhatsAppClick(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce"
      style={{ right: 'max(2rem, calc((100vw - 1280px) / 2 + 2rem))' }}
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}

