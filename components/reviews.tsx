"use client"

import { useEffect } from "react"
import { Star } from "lucide-react"

export function Reviews() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    document.body.appendChild(script)

    const style = document.createElement("style")
    style.textContent = `
      /* Remove branding */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 a[href*="elfsight"],
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 [class*="branding"] {
        display: none !important;
      }

      /* Harmoniza com o site */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 {
        font-family: inherit !important;
      }

      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975
      .eapps-google-reviews-review {
        border-radius: 16px !important;
        border: 1px solid rgba(0,0,0,.08) !important;
        box-shadow: 0 4px 16px rgba(0,0,0,.06) !important;
        transition: transform .25s ease, box-shadow .25s ease !important;
      }

      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975
      .eapps-google-reviews-review:hover {
        transform: translateY(-4px) !important;
        box-shadow: 0 10px 30px rgba(0,0,0,.12) !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Avaliações Reais no Google
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem sobre a <span className="text-primary">Diniz Contabilidade</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Depoimentos reais de clientes que confiam no nosso trabalho
          </p>
        </div>

        {/* CONTAINER DO WIDGET */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-background border border-border/60 rounded-2xl shadow-lg p-6 md:p-8">
            <div
              className="elfsight-app-b5d588d3-c443-455a-a773-cd12873df975"
              data-elfsight-app-lazy
            />
          </div>
        </div>

      </div>
    </section>
  )
}
