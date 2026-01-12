"use client"

import { useEffect } from "react"
import { CheckCircle2 } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  countdown: number
  onClose: () => void
}

export function ThankYouModal({ isOpen, countdown, onClose }: ThankYouModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-12 text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-[#25D366] rounded-full p-4">
            <CheckCircle2 className="h-16 w-16 text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-[900] text-[#911914] mb-4">
          Obrigado!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Você será redirecionado para o WhatsApp em <span className="font-bold text-[#e74249]">{countdown}</span> segundos...
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-[#25D366] h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          />
        </div>
        <button
          onClick={onClose}
          className="bg-[#911914] hover:bg-[#711412] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer"
        >
          Ir agora
        </button>
      </div>
    </div>
  )
}

