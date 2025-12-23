"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden pt-24">

      {/* Vídeo de fundo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl lg:ml-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-primary/10 rounded-full backdrop-blur border border-primary/20 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">
              Mais de 15 anos de experiência
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Contabilidade
          </h1>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
            que impulsiona negócios
          </h2>

          {/* Descrição */}
          <p className="mt-10 text-base sm:text-lg lg:text-xl text-foreground/85 max-w-xl leading-relaxed">
            Organização, segurança fiscal e decisões inteligentes para sua empresa crescer.
          </p>

          {/* CTAs */}
          <div className="mt-14 flex flex-col sm:flex-row gap-5">
            <Button size="lg" asChild>
              <Link href="/contato" className="flex items-center gap-2">
                Falar com um contador
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/servicos">
                Ver serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
