"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Olá! Meu nome é ${formData.name}.
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}`

    const whatsappUrl = `https://wa.me/556333227900?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Estamos prontos para atender você e oferecer as melhores soluções contábeis para o seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Telefone</h3>
                    <a href="tel:+556333227900" className="text-muted-foreground hover:text-primary">
                      (63) 3322-7900
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/556333227900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (63) 3322-7900
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">E-mail</h3>
                    <a
                      href="mailto:contato@dinizcontabilidade.com"
                      className="text-muted-foreground hover:text-primary break-all"
                    >
                      contato@dinizcontabilidade.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Q. 103 Sul Av. Juscelino K, 145 – Arso
                      <br />
                      JK Business Center
                      <br />
                      Palmas – TO, 77015-012
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* MAPA CORRETO */}
              <Card className="shadow-sm">
                <CardContent className="p-0 overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps?q=JK+Business+Center+Palmas+TO&output=embed"
                    className="w-full h-[360px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JK Business Center - Palmas TO"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Formulário */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Como podemos ajudar?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
