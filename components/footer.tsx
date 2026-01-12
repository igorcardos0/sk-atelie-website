"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"
import { useWhatsApp } from "@/contexts/whatsapp-context"

export function Footer() {
  const { handleWhatsAppClick } = useWhatsApp()
  const whatsappNumber = "5518998223977"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#e74249] text-white py-8 md:py-10 animate-fade-in-up">
      <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image src="/images/sk-20logo-2002.png" alt="SK Ateliê das Festas Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => scrollToSection("home")}
            >
              Início
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => scrollToSection("produtos")}
            >
              Produtos
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-white/80 hover:bg-white/10"
              onClick={() => scrollToSection("contato")}
            >
              Contato
            </Button>
          </nav>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <Button
              size="icon"
              className="bg-white/10 hover:bg-white/20 hover:scale-110 text-white rounded-full h-12 w-12 transition-all duration-300"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
            <Button
              size="icon"
              className="bg-white/10 hover:bg-white/20 hover:scale-110 text-white rounded-full h-12 w-12 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                handleWhatsAppClick(whatsappUrl)
              }}
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} SK Ateliê das Festas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
