"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" onClick={handleLinkClick} className="flex items-center">
            <Image
              src="/logo-diniz.png"
              alt="Diniz Assessoria Contábil"
              width={160}
              height={60}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </Link>
            <Link
              href="/noticias"
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Notícias
            </Link>
            <Link
              href="/contato"
              onClick={handleLinkClick}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/orcamento" onClick={handleLinkClick}>
                Solicite seu Orçamento
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Início
              </Link>
              <Link
                href="/sobre"
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Serviços
              </Link>
              <Link
                href="/noticias"
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contato
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
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
