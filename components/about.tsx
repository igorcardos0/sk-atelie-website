"use client"

import Image from "next/image"
import { useState } from "react"

export function About() {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <section id="sobre" className="py-20 md:py-28 bg-[#e74249] relative overflow-hidden animate-fade-in-up">
        {/* Background Texture */}
        <div className="absolute inset-0 text-pattern opacity-30 pointer-events-none" />

        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image with Click to Zoom */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <button
                onClick={() => setIsZoomed(true)}
                className="relative w-full h-full cursor-zoom-in hover:scale-105 transition-transform duration-300"
                aria-label="Clique para ampliar"
              >
                <Image src="/images/quem-20somos.jpg" alt="Confeiteira preparando bolo" fill className="object-cover" />
              </button>
            </div>

            {/* Right Column - Content */}
            <div className="animate-fade-in-up space-y-5">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] uppercase text-[#911914] text-balance leading-[0.95]">
                Por que<br />comprar com a SK?
              </h2>
              <div className="space-y-3 text-white text-lg md:text-xl leading-snug">
                <p className="text-pretty">
                  No SK Ateliê das Festas, transformamos momentos especiais em memórias inesquecíveis através do sabor
                  autêntico e qualidade incomparável.
                </p>
                <p className="text-pretty">
                  Cada salgado é preparado com ingredientes selecionados, nossos doces são feitos com carinho, e nossos
                  bolos decorados são verdadeiras obras de arte comestíveis.
                </p>
                <p className="text-pretty">
                  Com anos de experiência e paixão pelo que fazemos, garantimos que sua festa será um sucesso absoluto.
                  Atendemos sob encomenda para garantir o frescor e a personalização que você merece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image src="/images/quem-20somos.jpg" alt="Confeiteira preparando bolo" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
