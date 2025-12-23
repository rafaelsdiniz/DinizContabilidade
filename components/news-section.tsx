"use client"

import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Newspaper } from "lucide-react"

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
      <section className="py-24 text-center text-foreground/60">
        Carregando notícias...
      </section>
    )
  }

  if (articles.length === 0) {
    return (
      <section className="py-24 text-center text-foreground/60">
        Nenhuma notícia encontrada no momento.
      </section>
    )
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4 font-medium">
            <Newspaper className="w-4 h-4" />
            Notícias Contábeis
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Atualizações fiscais e tributárias
          </h2>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Fique por dentro das principais mudanças na legislação, impostos,
            obrigações fiscais e decisões relevantes para empresas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full border border-border/60 shadow-sm hover:shadow-lg transition">
                
                {/* IMAGEM */}
                <div className="h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/images/news-placeholder.jpg"
                    }}
                  />
                </div>

                <CardHeader className="space-y-2">
                  <Badge variant="secondary" className="w-fit text-xs">
                    {article.source.name}
                  </Badge>

                  <CardTitle className="text-lg leading-snug line-clamp-2">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.publishedAt)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-foreground/70 line-clamp-3 mb-6">
                    {article.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Ler notícia completa
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
