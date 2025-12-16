import type { Metadata } from "next"
import { NewsSection } from "@/components/news-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Notícias Fiscais e Contábeis | Diniz Assessoria Contábil",
  description:
    "Fique por dentro das últimas notícias sobre ICMS, legislação fiscal, MEI, reforma tributária, IRPJ, IRPF e ISS.",
}

export default function NoticiasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}
