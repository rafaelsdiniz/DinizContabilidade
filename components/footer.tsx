"use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

          {/* LOGO CENTRAL GRANDE */}
          <Image
            src="/logofinal.png"
            alt="Diniz Assessoria Contábil"
            width={400}
            height={400}
            className="w-150 max-w-5xl h-auto object-contain"
            priority
          />

          {/* CONTATO — LINHA ÚNICA */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-primary-foreground/80 text-sm">

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+556333227900"
                className="hover:text-primary-foreground transition"
              >
                (63) 3322-7900
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:contato@dinizcontabilidade.com"
                className="hover:text-primary-foreground transition"
              >
                contato@dinizcontabilidade.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                Q. 103 Sul Av. Juscelino K, 145 – Palmas / TO
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/dinizassessoriacontabil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/diniz.contabil/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

          </div>

          {/* RODAPÉ INFERIOR */}
          <div className="w-full border-t border-primary-foreground/20 pt-6 text-center space-y-2">
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
