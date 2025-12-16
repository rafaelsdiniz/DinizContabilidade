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
      <section className="py-24 text-center text-muted-foreground">
        Carregando notícias...
      </section>
    )
  }

  if (articles.length === 0) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        Nenhuma notícia encontrada no momento.
      </section>
    )
  }

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-4 h-4" />
            Notícias Contábeis
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Atualizações Fiscais e Tributárias
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
                {/* IMAGEM */}
                <div className="h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    onError={(e) => {
                      e.currentTarget.src = "/images/news-placeholder.jpg"
                    }}
                  />
                </div>

                <CardHeader>
                  <Badge variant="secondary" className="w-fit text-xs mb-2">
                    {article.source.name}
                  </Badge>

                  <CardTitle className="line-clamp-2">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.publishedAt)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    Ler notícia
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
