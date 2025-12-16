import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
