"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center">
            <Image
              src="/logo-diniz.png"
              alt="Diniz Assessoria Contábil"
              width={160}
              height={60}
              className="h-8 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="
                  relative font-medium text-foreground
                  transition-all duration-300
                  hover:text-primary
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0 after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full
                  hover:-translate-y-[1px]
                "
              >
                {item.label}
              </Link>
            ))}

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-[1.03]"
            >
              <Link href="/orcamento" onClick={handleLinkClick}>
                Solicite seu Orçamento
              </Link>
            </Button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border bg-background">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="
                    text-foreground font-medium
                    transition-all duration-300
                    hover:text-primary hover:translate-x-1
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                <Link href="/orcamento" onClick={handleLinkClick}>
                  Solicite seu Orçamento
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
