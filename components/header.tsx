"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="
        sticky top-0 z-50
        bg-background/95 backdrop-blur
        border-b border-border
      "
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-diniz.png"
              alt="Diniz Contabilidade"
              width={180}
              height={60}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative font-medium tracking-wide
                  text-foreground hover:text-primary
                  transition-colors
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}

            <Button asChild>
              <Link href="/orcamento">Orçamento</Link>
            </Button>
          </nav>

          {/* MOBILE */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 rounded-xl bg-background shadow-lg p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild className="w-full">
              <Link href="/orcamento">Solicitar orçamento</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
