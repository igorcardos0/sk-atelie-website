"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Os salgados da SK são simplesmente maravilhosos! Todos os convidados da minha festa elogiaram muito. Super recomendo!",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "O bolo do aniversário da minha filha ficou lindo e delicioso! A equipe é muito atenciosa e caprichosa.",
      rating: 5,
    },
    {
      name: "Ana Paula",
      text: "Qualidade excepcional! Os docinhos estavam perfeitos, não sobrou nada. Já viraram meu fornecedor oficial!",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      text: "Atendimento impecável e produtos fresquinhos. A coxinha é a melhor que já comi em Presidente Prudente!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-[900] uppercase text-center text-[#911914] mb-16 text-balance">
          O que dizem nossos clientes
        </h2>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="p-8 md:p-12 shadow-lg border-2 border-border">
                  <div className="flex gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-[#e74249] text-[#e74249]" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-center mb-6 text-pretty text-foreground/80 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-lg font-semibold text-center text-[#911914]">— {testimonial.name}</p>
                </Card>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-[#911914]" : "w-3 bg-[#911914]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
