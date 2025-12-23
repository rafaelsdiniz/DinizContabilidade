import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServicesPreview } from "@/components/services-preview"
import { Reviews } from "@/components/reviews"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesPreview />
        <Reviews />
        <ContactCTA />
      </main>
    </div>
  )
}
