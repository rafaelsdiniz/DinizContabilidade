import type { Metadata } from "next"
import { NewsSection } from "@/components/news-section"

export const metadata: Metadata = {
  title: "Notícias Fiscais e Contábeis | Diniz Assessoria Contábil",
  description:
    "Fique por dentro das últimas notícias sobre ICMS, legislação fiscal, MEI, reforma tributária, IRPJ, IRPF e ISS.",
}

export default function NoticiasPage() {
  return (
    <main className="pt-20 min-h-screen">
      <NewsSection />
      
    </main>
  )
}
