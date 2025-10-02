"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-accent">
      <div className="absolute inset-0 bg-[url('/aperto-mao-diniz.jpeg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-medium text-sm">Há mais de 15 anos no mercado</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Soluções Contábeis para o Seu Negócio
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Oferecemos assessoria contábil completa para empresas e profissionais, com expertise e compromisso com o seu
            sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
            >
              Fale com um Especialista
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("servicos")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-lg px-8"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
