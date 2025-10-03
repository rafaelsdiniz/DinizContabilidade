"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Newspaper } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"

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
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news")
        const data = await response.json()

        if (data.error) {
          setError(data.error)
        } else {
          setArticles(data.articles.slice(0, 12)) // Limitar a 12 notícias
        }
      } catch (err) {
        setError("Erro ao carregar notícias")
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm font-medium">Notícias Atualizadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Notícias Fiscais e Contábeis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Fique por dentro das últimas atualizações sobre ICMS, legislação fiscal, MEI, reforma tributária e muito
            mais
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Spinner className="w-8 h-8" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">{error}</p>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nenhuma notícia encontrada no momento.</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                {article.urlToImage && (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={article.urlToImage || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.source.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 text-balance">{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.publishedAt)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  >
                    Ler mais
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
