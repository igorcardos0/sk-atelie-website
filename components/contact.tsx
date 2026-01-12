import { Card } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-[900] uppercase text-center text-[#911914] mb-16 text-balance">
          Entre em Contato
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 md:p-10 space-y-6 shadow-lg">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#e74249] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Av. Manoel Goulart, 301 - Vila Nova
                  <br />
                  Presidente Prudente - SP, 19010-270
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#e74249] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Telefone / WhatsApp</h3>
                <a href="tel:+5518998223977" className="text-muted-foreground hover:text-[#911914] transition-colors">
                  (18) 99822-3977
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-[#e74249] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Horário de Atendimento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Segunda a Sábado
                  <br />
                  09h às 19h
                </p>
              </div>
            </div>
          </Card>

          {/* Map */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.8!2d-51.3889!3d-22.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzMyLjIiUyA1McKwMjMnMjAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização SK Ateliê das Festas"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
