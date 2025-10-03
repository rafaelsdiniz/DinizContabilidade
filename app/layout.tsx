import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Diniz Assessoria Contábil - Soluções Contábeis em Palmas - TO",
  description:
    "Há mais de 15 anos oferecendo soluções contábeis para empresas e profissionais em Palmas - TO. Abertura de empresas, contabilidade, consultoria tributária e mais.",
  generator: "v0.app",
  openGraph: {
    title: "Diniz Assessoria Contábil - 15 Anos de Experiência",
    description:
      "Há mais de 15 anos oferecendo soluções contábeis para empresas e profissionais em Palmas - TO. Abertura de empresas, contabilidade, consultoria tributária e mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Diniz Assessoria Contábil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diniz Assessoria Contábil - 15 Anos de Experiência",
    description: "Há mais de 15 anos oferecendo soluções contábeis para empresas e profissionais em Palmas - TO.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
