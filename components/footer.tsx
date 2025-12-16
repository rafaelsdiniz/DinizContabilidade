"use client"

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="mb-4 inline-block">
                <Image
                  src="/Diniz_Logo_Final.png"
                  alt="Diniz Assessoria Contábil"
                  width={140}
                  height={50}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-4">
                Há mais de 15 anos oferecendo soluções contábeis para empresas e profissionais.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/dinizassessoriacontabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/diniz.contabil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orcamento"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Solicite seu Orçamento
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <a
                    href="tel:+556333227900"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    (63) 3322-7900
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <a
                    href="mailto:contato@dinizcontabilidade.com"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                  >
                    contato@dinizcontabilidade.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/80">Q. 103 Sul Av Juscelino K, 145 - Arso, Palmas - TO</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © {new Date().getFullYear()} Diniz Assessoria Contábil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
