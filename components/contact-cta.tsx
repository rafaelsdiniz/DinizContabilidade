"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Pronto para Transformar sua Contabilidade?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com segurança e eficiência
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/contato">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
              </Button>
            </Link>
            <a href="tel:+556332153232">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="w-5 h-5" />
                (63) 3215-3232
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-primary-foreground/80">
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
