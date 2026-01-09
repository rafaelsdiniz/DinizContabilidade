"use client"

import { useEffect, useState } from "react"
import { Calendar, ExternalLink } from "lucide-react"

interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
}

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || [])
      })
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })

  if (loading) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        Carregando atualizações...
      </section>
    )
  }

  if (articles.length === 0) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        Nenhuma atualização disponível no momento.
      </section>
    )
  }

  return (
    <section className="pt-6 pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">

        {/* CABEÇALHO */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              NOTÍCIAS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-6">
            Atualizações fiscais e
            <br />
            tributárias relevantes
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Acompanhe mudanças na legislação, decisões fiscais e informações
            importantes que impactam empresas e profissionais.
          </p>
        </div>

        {/* LISTA DE NOTÍCIAS */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6"
            >
              {/* IMAGEM */}
              <div className="w-40 h-28 flex-shrink-0 bg-muted overflow-hidden rounded-md">
                <img
                  src={article.urlToImage || "/images/news-placeholder.jpg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/news-placeholder.jpg"
                  }}
                />
              </div>

              {/* TEXTO */}
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground mb-1">
                  {article.source.name}
                </span>

                <h3 className="text-lg font-semibold text-foreground leading-snug mb-2">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.publishedAt)}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-medium">
                  Ler artigo completo
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
