import { Hero } from "@/components/hero"
import { BrandValues } from "@/components/brand-values"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
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
    </>
  )
}
