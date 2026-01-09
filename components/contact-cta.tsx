"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          {/* LINHA DECORATIVA */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="h-px w-20 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              CONTATO
            </span>
            <span className="h-px w-20 bg-border" />
          </div>

          {/* TÍTULO */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-6">
            Vamos conversar sobre o seu negócio
          </h2>

          {/* TEXTO */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Estamos prontos para entender sua realidade e oferecer soluções
            contábeis seguras, claras e adequadas às necessidades da sua empresa.
          </p>

          {/* AÇÕES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild>
              <Link href="/contato">
                Fale conosco
              </Link>
            </Button>

            <a href="tel:+556332153232">
              <Button variant="outline">
                (63) 3215-3232
              </Button>
            </a>
          </div>

          {/* CONTATOS */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(63) 3215-3232</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@dinizcontabilidade.com.br</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
