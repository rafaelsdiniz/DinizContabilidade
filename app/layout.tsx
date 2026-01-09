import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import { HeroVideo } from "@/components/hero-video"
import { QuemSomos } from "@/components/quem-somos"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}
