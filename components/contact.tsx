"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Calendar,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

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

    await new Promise((resolve) => setTimeout(resolve, 800))

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

  const contacts = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(63) 3322-7900",
      link: "tel:+556333227900",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(63) 3322-7900",
      link: "https://wa.me/556333227900",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@dinizcontabilidade.com",
      link: "mailto:contato@dinizcontabilidade.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "JK Business Center • Palmas - TO",
      link: "#mapa",
    },
  ]

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4 font-medium">
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos conversar sobre o seu negócio
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Atendimento próximo, rápido e com total clareza.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid lg:grid-cols-5 gap-12">

          {/* COLUNA ESQUERDA — CONTATOS + MAPA */}
          <div className="lg:col-span-3 space-y-10">

            {/* CONTATOS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contacts.map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <Card className="border border-border/60 hover:shadow-lg transition h-full">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-foreground/70 text-sm">
                            {item.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              })}
            </div>

            {/* MAPA */}
            <div id="mapa">
              <Card className="overflow-hidden border border-border/60">
                <CardContent className="p-0">
                  <div className="h-[420px] lg:h-[480px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.689249388033!2d-48.31852852425073!3d-10.183530490064163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b35c37c2215ed%3A0x81956429e559e5a7!2sJK%20Business%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-4 bg-muted/40 text-center text-sm text-foreground/70">
                    Q. 103 Sul Av. Juscelino K, 145 – Palmas – TO
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* HORÁRIO */}
            <Card className="border border-border/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-primary w-5 h-5" />
                  <h3 className="text-lg font-bold text-foreground">
                    Horário de Atendimento
                  </h3>
                </div>
                <p className="text-sm text-foreground/70">
                  Segunda a Sexta: <strong>8h às 18h</strong> <br />
                  Sábado: <strong>8h às 12h</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* COLUNA DIREITA — FORM */}
          <div className="lg:col-span-2">
            <Card className="border border-border/60 shadow-lg">
              <CardContent className="p-10 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Envie uma mensagem
                </h3>

                <p className="text-foreground/70 mb-8">
                  Atendimento rápido e sem compromisso.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    required
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                  />

                  <Input
                    required
                    placeholder="Telefone / WhatsApp"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                  />

                  <Input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12"
                  />

                  <Textarea
                    required
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[140px]"
                  />

                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Resposta rápida via WhatsApp
                  </div>

                  <div className="space-y-4 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar pelo WhatsApp
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 border-primary text-primary hover:bg-primary/10"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar consultoria gratuita
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
