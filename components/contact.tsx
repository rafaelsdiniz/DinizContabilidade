"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 600))

    const message = `Olá! Meu nome é ${formData.name}.
Telefone: ${formData.phone}
Email: ${formData.email}

Mensagem:
${formData.message}`

    const whatsappUrl = `https://wa.me/556333227900?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contato" className="pt-6 pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">

        {/* CABEÇALHO */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              CONTATO
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-6">
            Vamos conversar sobre
            <br />
            o seu negócio
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Atendimento próximo, claro e focado em entender a realidade
            da sua empresa.
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* INFORMAÇÕES */}
          <div className="space-y-10">

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <span>(63) 3322-7900</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <span>contato@dinizcontabilidade.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>
                  Q. 103 Sul Av. Juscelino K, 145
                  <br />
                  Palmas – TO
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <span>
                  Segunda a sexta, das <strong>8h às 18h</strong>
                </span>
              </div>
            </div>

            {/* MAPA */}
            <div className="border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.689249388033!2d-48.31852852425073!3d-10.183530490064163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b35c37c2215ed%3A0x81956429e559e5a7!2sJK%20Business%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* FORMULÁRIO */}
          <div>
            <div className="border border-border rounded-lg p-10 max-w-md">

              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Envie uma mensagem
              </h3>

              <p className="text-muted-foreground mb-8">
                Retornamos rapidamente pelo WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  required
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Input
                  required
                  placeholder="Telefone / WhatsApp"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <Input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  required
                  rows={5}
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar pelo WhatsApp
                    </>
                  )}
                </Button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
