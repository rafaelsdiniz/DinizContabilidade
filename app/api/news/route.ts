import { NextResponse } from "next/server"

const NEWS_API_KEY = process.env.NEWS_API_KEY
const KEYWORDS = ["ICMS", "legislação fiscal", "MEI", "reforma tributária", "IRPJ", "IRPF", "ISS"]

export async function GET() {
  if (!NEWS_API_KEY) {
    return NextResponse.json({ error: "API key não configurada" }, { status: 500 })
  }

  try {
    // Buscar notícias dos últimos 7 dias
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const fromDate = sevenDaysAgo.toISOString().split("T")[0]

    const keywordsQuery = KEYWORDS.map((k) => `"${k}"`).join(" OR ")
    const query = `(contabilidade OR contábil OR contador) AND (${keywordsQuery})`

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=pt&from=${fromDate}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Erro ao buscar notícias")
    }

    const data = await response.json()

    return NextResponse.json({
      articles: data.articles || [],
      totalResults: data.totalResults || 0,
    })
  } catch (error) {
    console.error("Erro ao buscar notícias:", error)
    return NextResponse.json({ error: "Erro ao buscar notícias", articles: [] }, { status: 500 })
  }
}
