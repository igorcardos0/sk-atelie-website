"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useWhatsApp } from "@/contexts/whatsapp-context"

export function Navbar() {
  const { handleWhatsAppClick } = useWhatsApp()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ]

  const whatsappNumber = "5518998223977"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/images/sk-20logo-2001.png"
              alt="SK Ateliê das Festas"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#911914] hover:text-[#e74249] font-medium text-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-[#e74249] hover:bg-[#d63238] hover:scale-105 text-white rounded-full px-6 py-5 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault()
                handleWhatsAppClick(whatsappUrl)
              }}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#911914] cursor-pointer absolute right-6" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#911914] hover:text-[#e74249] font-medium text-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-[#e74249] hover:bg-[#d63238] text-white rounded-full w-full"
                onClick={(e) => {
                  e.preventDefault()
                  handleWhatsAppClick(whatsappUrl)
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
