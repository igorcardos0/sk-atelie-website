"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"
import { useWhatsApp } from "@/contexts/whatsapp-context"

export function Products() {
  const { handleWhatsAppClick } = useWhatsApp()
  const whatsappNumber = "5518998223977"
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)
  const scrollRef3 = useRef<HTMLDivElement>(null)

  const salgadinhos = [
    { name: "Coxinha", image: "/images/salgadinhos.jpg" },
    { name: "Croquete", image: "/images/salgadinhos.jpg" },
    { name: "Bolinha de queijo", image: "/images/salgadinhos.jpg" },
    { name: "Kibe", image: "/images/salgadinhos.jpg" },
    { name: "Risoles", image: "/images/salgadinhos.jpg" },
    { name: "Milho com queijo", image: "/images/salgadinhos.jpg" },
  ]

  const docinhos = [
    { name: "Brigadeiros", image: "/images/brigadeiro.jpg" },
    { name: "Beijinho", image: "/images/brigadeiro.jpg" },
    { name: "Cajuzinho", image: "/images/brigadeiro.jpg" },
    { name: "Moranguinho", image: "/images/brigadeiro.jpg" },
    { name: "Mini Churros", image: "/images/brigadeiro.jpg" },
    { name: "Nutella e Ninho", image: "/images/brigadeiro.jpg" },
  ]

  const bolos = [
    { name: "Bolos decorados", image: "/images/bolos.jpg" },
    { name: "Bolos com fruta", image: "/images/bolos.jpg" },
    { name: "Bolo simples", image: "/images/bolos.jpg" },
    { name: "Bolo no pote", image: "/images/bolos.jpg" },
  ]

  const handleWhatsApp = (product: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${product}`)
    handleWhatsAppClick(`https://wa.me/${whatsappNumber}?text=${message}`)
  }

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left" ? ref.current.scrollLeft - scrollAmount : ref.current.scrollLeft + scrollAmount

      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const ProductSlider = ({
    products,
    scrollRef,
    centered = false,
  }: {
    products: Array<{ name: string; image: string }>
    scrollRef: React.RefObject<HTMLDivElement>
    centered?: boolean
  }) => (
    <div className="relative group max-w-7xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll(scrollRef, "left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#911914] hover:bg-[#711412] text-white rounded-full p-3 shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(scrollRef, "right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#911914] hover:bg-[#711412] text-white rounded-full p-3 shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide px-1 ${
          centered ? "justify-center" : ""
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            className="flex-none w-[220px] snap-center p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-border bg-white"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-full h-32 relative rounded-lg overflow-hidden bg-gradient-to-br from-[#e74249]/10 to-[#911914]/10">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <h4 className="font-bold text-base text-center text-balance">{product.name}</h4>
              <Button
                size="sm"
                className="bg-[#e74249] hover:bg-[#d63238] hover:scale-105 text-white rounded-full w-full px-6 py-5 transition-all duration-300"
                onClick={() => handleWhatsApp(product.name)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Quero este
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  return (
    <section id="produtos" className="py-20 md:py-28 bg-background animate-fade-in-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-[900] uppercase text-center text-[#911914] mb-16 text-balance">
          Nossos Produtos
        </h2>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-[900] uppercase text-[#911914] mb-6 text-center">Salgadinhos</h3>
          <ProductSlider products={salgadinhos} scrollRef={scrollRef1} />
        </div>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-[900] uppercase text-[#911914] mb-6 text-center">Docinhos</h3>
          <ProductSlider products={docinhos} scrollRef={scrollRef2} />
        </div>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-[900] uppercase text-[#911914] mb-6 text-center">Bolos</h3>
          <ProductSlider products={bolos} scrollRef={scrollRef3} centered />
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 animate-fade-in mt-16">
          <p className="text-xl md:text-2xl text-foreground font-medium text-balance max-w-3xl mx-auto">
            Gostou dos nossos produtos? Faça agora seu orçamento para sua festa
          </p>
          <Button
            size="lg"
            className="bg-[#911914] hover:bg-[#711412] text-white text-lg px-10 py-3 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            onClick={() => {
              const message = encodeURIComponent("Olá! Quero fazer um orçamento para minha festa!")
              handleWhatsAppClick(`https://wa.me/${whatsappNumber}?text=${message}`)
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Quero fazer um orçamento!
          </Button>
        </div>
      </div>
    </section>
  )
}
