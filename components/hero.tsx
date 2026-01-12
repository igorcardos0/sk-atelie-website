"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { useWhatsApp } from "@/contexts/whatsapp-context"

export function Hero() {
  const { handleWhatsAppClick } = useWhatsApp()
  const whatsappNumber = "5518998223977"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <>
      <section
        id="home"
        className="relative h-[calc(100vh-5rem)] grid lg:grid-cols-2 items-center overflow-hidden hero-pattern"
      >
        {/* Left Column - Content */}
        <div className="relative z-10 page-container py-12 md:py-16 lg:py-0 h-full flex flex-col justify-center">
          <div className="max-w-xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] uppercase text-white leading-[0.9] mb-4 md:mb-6 text-balance drop-shadow-2xl">
              A sua festa pede SK Ateliê
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-8 text-pretty font-semibold drop-shadow-xl leading-snug">
              Salgados, bolos e doces, tudo com a qualidade que a sua festa merece!
            </p>
            <Button
              size="lg"
              className="bg-[#911914] hover:bg-[#711412] text-white text-lg sm:text-xl md:text-2xl px-10 sm:px-14 md:px-20 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                handleWhatsAppClick(whatsappUrl)
              }}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span>Faça seu pedido!</span>
            </Button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-full overflow-hidden">
          <Image
            src="/images/fototopo.png"
            alt="Mão segurando coxinha"
            fill
            className="object-contain object-right"
            priority
            quality={100}
          />
        </div>
      </section>
    </>
  )
}
