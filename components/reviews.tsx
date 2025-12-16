"use client"

import { useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Reviews() {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    document.body.appendChild(script)

    const style = document.createElement("style")
    style.textContent = `
      /* Hide branding */
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

      /* Custom styling for the widget */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 {
        font-family: inherit !important;
      }

      /* Style individual review cards */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review,
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 [class*="review-item"] {
        background: white !important;
        border-radius: 16px !important;
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
        padding: 24px !important;
        transition: all 0.3s ease !important;
        position: relative !important;
        overflow: hidden !important;
      }

      /* Add quote icon background */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review:before {
        content: "❝" !important;
        position: absolute !important;
        top: 10px !important;
        right: 20px !important;
        font-size: 60px !important;
        color: rgba(var(--primary), 0.05) !important;
        font-family: serif !important;
        line-height: 1 !important;
        z-index: 0 !important;
      }

      /* Review text styling */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review-content {
        color: #374151 !important;
        font-size: 15px !important;
        line-height: 1.6 !important;
        font-style: normal !important;
        position: relative !important;
        z-index: 1 !important;
      }

      /* Reviewer info */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review-author-name {
        color: #111827 !important;
        font-weight: 600 !important;
        font-size: 16px !important;
      }

      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review-date {
        color: #6b7280 !important;
        font-size: 13px !important;
      }

      /* Stars styling */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-stars {
        color: #f59e0b !important;
        filter: saturate(1.2) !important;
      }

      /* Navigation arrows */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-arrow {
        background: rgba(var(--primary), 0.1) !important;
        border-radius: 50% !important;
        width: 48px !important;
        height: 48px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.3s ease !important;
        border: none !important;
      }

      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-arrow:hover {
        background: rgba(var(--primary), 0.2) !important;
        transform: scale(1.1) !important;
      }

      /* Dots/pagination */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-dot {
        background: rgba(var(--primary), 0.2) !important;
        width: 8px !important;
        height: 8px !important;
        border-radius: 50% !important;
        margin: 0 4px !important;
        transition: all 0.3s ease !important;
      }

      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-dot-active {
        background: rgba(var(--primary), 1) !important;
        width: 24px !important;
        border-radius: 4px !important;
      }

      /* Hover effects */
      .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review:hover {
        transform: translateY(-4px) !important;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1) !important;
        border-color: rgba(var(--primary), 0.3) !important;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review {
          padding: 20px !important;
          margin: 0 8px !important;
        }
        
        .elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-review:before {
          font-size: 40px !important;
          top: 5px !important;
          right: 15px !important;
        }
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
    <section className="py-24 bg-accent">
      {/* Decorative background elements - mais sutis */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-5% w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-5% w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Quote marks decorative */}
      <div className="absolute top-10 left-10 text-primary/5 text-9xl font-serif hidden lg:block">
        ❝
      </div>
      <div className="absolute bottom-10 right-10 text-primary/5 text-9xl font-serif hidden lg:block">
        ❞
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-3 text-lg font-semibold text-muted-foreground">5.0</span>
          </div>

          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">Depoimentos Reais</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            A Confiança de Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Histórias reais de empresários e profissionais que transformaram seus negócios com nossa assessoria
          </p>
        </div>

        {/* Widget Container with enhanced styling */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Custom navigation buttons (opcional, se o widget não tiver) */}
            <div className="hidden md:flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 pointer-events-none">
              <button 
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg flex items-center justify-center hover:bg-background transition-colors"
                onClick={() => {
                  const prevBtn = document.querySelector('.elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-arrow-prev') as HTMLElement
                  prevBtn?.click()
                }}
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button 
                className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg flex items-center justify-center hover:bg-background transition-colors"
                onClick={() => {
                  const nextBtn = document.querySelector('.elfsight-app-b5d588d3-c443-455a-a773-cd12873df975 .eapps-google-reviews-arrow-next') as HTMLElement
                  nextBtn?.click()
                }}
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Main widget container */}
            <div className="bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-sm">
              <div className="elfsight-app-b5d588d3-c443-455a-a773-cd12873df975" data-elfsight-app-lazy />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}