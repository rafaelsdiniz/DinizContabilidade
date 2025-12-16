"use client"

import { useEffect } from "react"
import { Star } from "lucide-react"

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
    <section className="py-20 bg-gradient-to-b from-accent to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Veja as avaliações de quem confia na Diniz Contabilidade para cuidar de suas finanças
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-background/50 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-b5d588d3-c443-455a-a773-cd12873df975" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  )
}
