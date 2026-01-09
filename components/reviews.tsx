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

      /* Card mais clássico */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975
      .eapps-google-reviews-review {
        border-radius: 12px !important;
        border: 1px solid rgba(0,0,0,.12) !important;
        background: #ffffff !important;
        box-shadow: none !important;
      }

      /* Tipografia mais neutra */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 * {
        font-family: inherit !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.removeChild(script)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/fundoreview.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-12 text-white">
          <div className="flex justify-center items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Avaliações de quem confia no nosso trabalho
          </h2>

          <p className="text-white/80">
            Opiniões reais de clientes atendidos pela Diniz Contabilidade.
          </p>
        </div>

        {/* CONTAINER AUTORAL */}
        <div className="max-w-6xl mx-auto">
          <div
            className="
              rounded-xl
              border border-white/25
              bg-white
              p-6 md:p-8
            "
          >
            {/* Selo discreto */}
            <div className="mb-6 text-sm text-muted-foreground text-center">
              Avaliações verificadas no Google
            </div>

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
