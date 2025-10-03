"use client"

import { useEffect } from "react"

export function Reviews() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    document.body.appendChild(script)

    const style = document.createElement("style")
    style.textContent = `
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 a[href*="elfsight"],
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 [class*="branding"],
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 [class*="eapps-link"],
      .eapps-link,
      .eapps-reviews-branding,
      [class*="elfsight"][class*="branding"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      // Cleanup script and style on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja as avaliações de quem confia na Diniz Contabilidade para cuidar de suas finanças
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-b5d588d3-c443-455a-a773-cd12873df975" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  )
}
