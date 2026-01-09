"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function QuemSomos() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">

        {/* Linha decorativa */}
        <div className="w-16 h-px bg-primary mb-12" />

        <div className="max-w-3xl">

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Mais do que contabilidade.
            <br />
            Estratégia para decisões seguras.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A Diniz Contabilidade atua como parceira estratégica de empresas
            e profissionais que buscam crescimento sustentável, organização
            financeira e segurança fiscal.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Unimos experiência, proximidade no atendimento e tecnologia
            para transformar números em informações claras e decisões
            mais inteligentes.
          </p>

          <div className="mt-10">
            <Button variant="outline" asChild>
              <Link href="/sobre">
                Conheça nossa história
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
