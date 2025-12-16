"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo em destaque */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/90" />
      </div>


      {/* Conteúdo principal */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary font-semibold text-sm">
              Há mais de 15 anos transformando negócios
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            <span className="block">Sua contabilidade</span>
            <span className="text-primary">em outro nível</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Assessoria contábil completa que transforma números em estratégias 
            para o crescimento sustentável do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
              <Link href="/contato" className="gap-2">
                Falar com especialista
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-lg px-8 py-6 h-auto border-2"
            >
              <Link href="/servicos">
                Ver serviços
              </Link>
            </Button>
          </div>

          {/* Stats em destaque */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-foreground/10">

            <div className="text-foreground">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm font-medium">Anos de Experiência</div>
            </div>
            <div className="text-foreground">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm font-medium">Conformidade Fiscal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}