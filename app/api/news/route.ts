import { NextResponse } from "next/server"

const GNEWS_API_KEY = process.env.GNEWS_API_KEY

const QUERY =
  'contabilidade OR "legislação tributária" OR "imposto de renda" OR IRPF OR IRPJ OR "Simples Nacional" OR MEI'

const PLACEHOLDER_IMAGE = "/images/news-placeholder.jpg"

export async function GET() {
  try {
    if (!GNEWS_API_KEY) {
      throw new Error("GNEWS_API_KEY não configurada")
    }

    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
      QUERY
    )}&lang=pt&max=9&sortby=publishedAt&apikey=${GNEWS_API_KEY}`

    const response = await fetch(url, {
      cache: "no-store", // evita cache em dev
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Resposta do GNews:", errorText)
      throw new Error("Erro ao buscar notícias no GNews")
    }

    const data = await response.json()

    const articles = (data.articles || []).map((article: any) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.image || PLACEHOLDER_IMAGE,
      publishedAt: article.publishedAt,
      source: {
        name: article.source?.name || "Fonte oficial",
      },
    }))

    return NextResponse.json({
      articles,
      totalResults: articles.length,
    })
  } catch (error) {
    console.error("Erro na API de notícias:", error)

    return NextResponse.json(
      {
        articles: [],
        totalResults: 0,
        error: "Erro ao buscar notícias",
      },
      { status: 200 } // 👈 NÃO quebra o frontend
    )
  }
}
