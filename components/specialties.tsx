"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Specialties() {
  const items = [
    {
      title: "Contabilidade Consultiva",
      image: "/relatorios.jpg",
      description:
        "Transformamos dados contábeis em relatórios estratégicos para apoiar decisões assertivas e melhorar os resultados do negócio.",
    },
    {
      title: "Departamento Pessoal e Folha de Pagamento",
      image: "/folha.png",
      description:
        "Gestão completa da rotina trabalhista e previdenciária, garantindo conformidade legal e cuidado com os colaboradores.",
    },
    {
      title: "Apuração de Impostos",
      image: "/imposto.jpeg",
      description:
        "Controle e cálculo preciso de tributos, buscando sempre a melhor opção dentro da legislação vigente.",
    },
    {
      title: "Planejamento e Recuperação Tributária",
      image: "/fiscal.webp",
      description:
        "Estratégias legais para reduzir a carga tributária e identificar créditos recuperáveis que geram ganhos financeiros.",
    },
    {
      title: "Consultoria Empresarial e Financeira",
      image: "/consultoria.jpg",
      description:
        "Apoio na gestão financeira, fluxo de caixa e organização de processos para crescimento sustentável.",
    },
    {
      title: "BPO Financeiro",
      image: "/bpo.jpg",
      description:
        "Gestão das rotinas financeiras, do contas a pagar e receber à conciliação bancária e relatórios de desempenho.",
    },
    {
      title: "Abertura, Regularização e Holding",
      image: "/abertura.jpg",
      description:
        "Orientação desde a abertura até a expansão do negócio, com estruturação societária e proteção patrimonial.",
    },
    {
      title: "Certificado Digital",
      image: "/certificado.jpg",
      description:
        "Comercializado pelo Grupo In9ve, garantindo praticidade, segurança jurídica e agilidade nos processos digitais.",
    },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  /* AUTO SCROLL */
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      if (!sliderRef.current) return

      sliderRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      })

      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" })
      }
    }, 3800)

    return () => clearInterval(interval)
  }, [paused])

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section
      className="relative py-28 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/fundoespecialidades.jpg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CABEÇALHO */}
        <div className="text-center mb-16 max-w-3xl mx-auto text-white">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="h-px w-20 bg-white/40" />
            <span className="text-sm tracking-widest text-white/70">
              NOSSAS SOLUÇÕES
            </span>
            <span className="h-px w-20 bg-white/40" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-wide">
            Serviços Contábeis
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Atuamos de forma consultiva, estratégica e responsável para apoiar
            o crescimento sustentável dos nossos clientes.
          </p>
        </div>

        {/* CARROSSEL */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* SETAS */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full bg-background/90 border border-border
              shadow-md items-center justify-center hover:bg-background transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full bg-background/90 border border-border
              shadow-md items-center justify-center hover:bg-background transition"
          >
            <ChevronRight />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="min-w-[300px] max-w-[300px] snap-start
                  bg-background rounded-xl overflow-hidden
                  border border-border transition hover:shadow-xl"
              >
                {/* IMAGEM */}
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXTO */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/servicos"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-md
              bg-primary text-primary-foreground
              font-semibold text-sm
              hover:bg-primary/90 transition
            "
          >
            Ver todos os serviços
          </Link>
        </div>

      </div>
    </section>
  )
}
