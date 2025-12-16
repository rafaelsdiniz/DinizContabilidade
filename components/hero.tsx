"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const slides = [
  {
    badge: "Há mais de 15 anos no mercado",
    title: "Soluções Contábeis para o Seu Negócio",
    description:
      "Oferecemos assessoria contábil completa para empresas e profissionais, com expertise e compromisso com o seu sucesso.",
    buttons: [
      { text: "Fale com um Especialista", href: "/contato", variant: "default" as const },
      { text: "Conheça Nossos Serviços", href: "/servicos", variant: "outline" as const },
    ],
  },
  {
    badge: "Transforme seu negócio",
    title: "O Que Uma Contabilidade Muda no Seu Negócio",
    description:
      "Tenha mais tempo para focar no que importa. Reduza custos, evite multas e tome decisões estratégicas baseadas em dados reais e atualizados.",
    buttons: [
      { text: "Descubra Como", href: "/servicos", variant: "default" as const },
      { text: "Fale Conosco", href: "/contato", variant: "outline" as const },
    ],
  },
  {
    badge: "Estamos prontos para ajudar",
    title: "Fale com Nossa Equipe Agora",
    description:
      "Entre em contato e descubra como podemos ajudar sua empresa a crescer de forma sustentável e organizada. Atendimento personalizado e dedicado.",
    buttons: [
      { text: "Entrar em Contato", href: "/contato", variant: "default" as const },
      { text: "Ver Nossos Serviços", href: "/servicos", variant: "outline" as const },
    ],
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-accent overflow-hidden"
    >
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 to-accent/60" />

      {/* Botão anterior */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-foreground/40 hover:text-foreground/70 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={48} strokeWidth={2} />
      </button>

      {/* Botão próximo */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-foreground/40 hover:text-foreground/70 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight size={48} strokeWidth={2} />
      </button>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            key={currentSlide}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium text-sm">
                {slides[currentSlide].badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {slides[currentSlide].buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant}
                  asChild
                  className={
                    button.variant === "default"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                      : "text-lg px-8 bg-transparent"
                  }
                >
                  <Link href={button.href}>
                    {button.text}
                    {button.variant === "default" && (
                      <ArrowRight className="ml-2" size={20} />
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex gap-2 justify-center mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-3 hover:bg-primary/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
