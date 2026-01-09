"use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* CONTEÚDO PRINCIPAL */}
          <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">

            {/* LOGO COMPLETA — ESQUERDA */}
            <div className="flex justify-start">
              <Image
                src="/logofinal.png"
                alt="Diniz Assessoria Contábil"
                width={1000}
                height={300}
                priority
              />
            </div>

            {/* CONTATO — DIREITA */}
            <div className="md:text-right">
              <h3 className="font-serif text-lg font-semibold mb-6">
                Contato
              </h3>

              <ul className="space-y-4 text-primary-foreground/80">
                <li className="flex md:justify-end items-start gap-3">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <a
                    href="tel:+556333227900"
                    className="hover:text-primary-foreground transition"
                  >
                    (63) 3322-7900
                  </a>
                </li>

                <li className="flex md:justify-end items-start gap-3">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <a
                    href="mailto:contato@dinizcontabilidade.com"
                    className="hover:text-primary-foreground transition break-all"
                  >
                    contato@dinizcontabilidade.com
                  </a>
                </li>

                <li className="flex md:justify-end items-start gap-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>
                    Q. 103 Sul Av. Juscelino K, 145 – Palmas / TO
                  </span>
                </li>
              </ul>

              {/* REDES SOCIAIS */}
              <div className="flex md:justify-end gap-3 mt-6">
                <a
                  href="https://www.facebook.com/dinizassessoriacontabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://www.instagram.com/diniz.contabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* RODAPÉ INFERIOR */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center space-y-2">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Diniz Assessoria Contábil. Todos os direitos reservados.
            </p>

            <p className="text-xs text-primary-foreground/50">
              Desenvolvido por{" "}
              <a
                href="https://www.grpagency.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition"
              >
                GRP Agency
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
