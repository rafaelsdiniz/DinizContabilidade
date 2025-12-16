"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Calendar, Check } from "lucide-react"
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

    // Simular delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const message = `Olá! Meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}`

    const whatsappUrl = `https://wa.me/556333227900?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(63) 3322-7900",
      link: "tel:+556333227900",
      description: "Atendimento direto"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(63) 3322-7900",
      link: "https://wa.me/556333227900",
      description: "Resposta imediata"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@dinizcontabilidade.com",
      link: "mailto:contato@dinizcontabilidade.com",
      description: "Respondemos em até 24h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "JK Business Center",
      link: "#",
      description: "Palmas - TO"
    }
  ]

  return (
    <section id="contato" className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MessageCircle className="text-primary" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato e descubra como podemos transformar a gestão do seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Nossos Canais
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon
                      return (
                        <a
                          key={index}
                          href={method.link}
                          target={method.link.startsWith('http') ? "_blank" : undefined}
                          rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="group"
                        >
                          <Card className="h-full border hover:border-primary/30 transition-all hover:shadow-lg">
                            <CardContent className="p-6">
                              <div className="flex flex-col h-full">
                                <div className="flex items-start gap-4 mb-3">
                                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                    <Icon className="w-6 h-6 text-primary" />
                                  </div>
                                  <div className="min-w-0 flex-1"> {/* Adicionado min-w-0 para truncar */}
                                    <h4 className="font-bold text-foreground mb-1 truncate">{method.title}</h4>
                                  </div>
                                </div>
                                
                                <div className="mt-auto">
                                  <p className="text-lg font-semibold text-foreground mb-1 break-words overflow-hidden text-ellipsis line-clamp-2">
                                    {method.value}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {method.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Horário */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="text-primary" size={24} />
                      <h3 className="text-xl font-bold text-foreground">Horário de Atendimento</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-foreground">Segunda a Sexta</span>
                        <span className="font-semibold">8h às 18h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Sábado</span>
                        <span className="font-semibold">8h às 12h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mapa */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Localização</h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-64">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.689249388033!2d-48.31852852425073!3d-10.183530490064163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b35c37c2215ed%3A0x81956429e559e5a7!2sJK%20Business%20Center!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                          className="w-full h-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Localização Diniz Contabilidade"
                        />
                      </div>
                      <div className="p-4 bg-muted/50">
                        <p className="text-sm text-center text-foreground break-words">
                          Q. 103 Sul Av. Juscelino K, 145 – Arso • Palmas – TO, 77015-012
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <div className="sticky top-24">
                <Card className="border shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        Envie uma Mensagem
                      </h3>
                      <p className="text-muted-foreground">
                        Preencha o formulário e entraremos em contato rapidamente
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-foreground">
                              Nome Completo
                            </label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Seu nome"
                              className="h-12"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block text-foreground">
                              Telefone
                            </label>
                            <Input
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="(63) 99999-9999"
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block text-foreground">
                            E-mail
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="seu@email.com"
                            className="h-12"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block text-foreground">
                            Mensagem
                          </label>
                          <Textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Conte-nos como podemos ajudar..."
                            className="min-h-[120px]"
                          />
                        </div>
                      </div>

                      <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">✓ Resposta rápida:</span> Seu contato será respondido em até 1 hora útil.
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Enviando...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            <span>Enviar via WhatsApp</span>
                          </div>
                        )}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground mt-4">
                        Ao enviar, você será redirecionado para o WhatsApp. Seus dados são confidenciais.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* CTA adicional */}
                <div className="mt-6 text-center">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consultoria Gratuita
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}