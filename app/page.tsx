"use client"

import { Hero } from "@/components/hero"
import { BrandValues } from "@/components/brand-values"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ThankYouModal } from "@/components/thank-you-modal"
import { WhatsAppProvider, useWhatsApp } from "@/contexts/whatsapp-context"

function HomeContent() {
  const { showThankYou, countdown, closeThankYou } = useWhatsApp()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <BrandValues />
        <Products />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <FloatingWhatsApp />
      <ThankYouModal isOpen={showThankYou} countdown={countdown} onClose={closeThankYou} />
    </>
  )
}

export default function Home() {
  return (
    <WhatsAppProvider>
      <HomeContent />
    </WhatsAppProvider>
  )
}
