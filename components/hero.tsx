"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)     // Celular: < 768px
      setIsTablet(width >= 768 && width < 1024)  // Tablet: 768px - 1024px
      setIsDesktop(width >= 1024 && width < 1440) // Notebook: 1024px - 1440px
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Tamanhos de fonte por dispositivo
  const titleSize = isMobile ? "text-3xl" : isTablet ? "text-4xl" : isDesktop ? "text-5xl" : "text-6xl"
  const subtitleSize = isMobile ? "text-2xl" : isTablet ? "text-3xl" : isDesktop ? "text-4xl" : "text-5xl"
  const badgeSize = isMobile ? "text-xs" : isTablet ? "text-xs" : "text-sm"

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-16 md:pt-20">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70" />
      </div>

      {/* Conteúdo principal com mais espaço no topo */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
          {/* Badge - menor e com mais espaçamento no topo */}
          <div className={`inline-flex items-center gap-1.5 mb-4 sm:mb-6 px-3 sm:px-3 py-1.5 sm:py-2 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20 ${badgeSize}`}>
            <Sparkles size={12} className="text-primary flex-shrink-0" />
            <span className="text-primary font-medium truncate">
              Há mais de 15 anos transformando negócios
            </span>
          </div>

          {/* Título principal */}
          <h1 className={`${titleSize} font-bold text-foreground mb-3 sm:mb-4 leading-tight`}>
            Sua contabilidade
          </h1>

          {/* Subtítulo */}
          <h2 className={`${subtitleSize} font-bold text-primary mb-4 sm:mb-6 leading-tight`}>
            em outro nível
          </h2>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/95 mb-6 sm:mb-8 max-w-lg leading-relaxed">
            Assessoria contábil completa que transforma números em estratégias para o crescimento sustentável do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button 
              size={isMobile ? "default" : "lg"} 
              asChild 
              className="text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-5 h-auto w-full sm:w-auto"
            >
              <Link href="/contato" className="flex items-center justify-center gap-2">
                Falar com especialista
                <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button 
              size={isMobile ? "default" : "lg"} 
              variant="outline" 
              asChild 
              className="text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-5 h-auto w-full sm:w-auto border-2"
            >
              <Link href="/servicos" className="flex items-center justify-center">
                Ver serviços
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-foreground/10">
            <div className="text-foreground">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/90">Anos de Experiência</div>
            </div>
            <div className="text-foreground">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/90">Clientes Atendidos</div>
            </div>
            <div className="text-foreground">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs sm:text-sm font-medium text-foreground/90">Conformidade Fiscal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}