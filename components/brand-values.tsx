import { Truck, Clock, Award } from "lucide-react"

export function BrandValues() {
  const values = [
    {
      icon: Truck,
      text: "Entregamos para toda\nPresidente Prudente",
    },
    {
      icon: Clock,
      text: "Pedidos sob encomenda",
    },
    {
      icon: Award,
      text: "Sabor e muita qualidade",
    },
  ]

  return (
    <section className="bg-[#911914] py-10 md:py-12 animate-fade-in-up">
      <div className="page-container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <value.icon className="h-12 w-12 text-white mb-4" strokeWidth={1.5} />
              <p className="text-xl md:text-2xl text-white font-bold uppercase text-balance leading-snug whitespace-pre-line">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
