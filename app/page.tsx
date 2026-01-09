import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { Reviews } from "@/components/reviews"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { Specialties } from "@/components/specialties"
import { HeroVideo } from "@/components/hero-video"
import { Porque } from "@/components/porque"
import { QuemSomos } from "@/components/quem-somos"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroVideo />
        <QuemSomos />
        <Specialties />
        <Porque />
        <Reviews />
        <ContactCTA />
      </main>
    </div>
  )
}
