import { About } from "@/components/about"
import { Equipe } from "@/components/equipe"
import { Historia } from "@/components/historia"
import { Valores } from "@/components/valores"

export default function SobrePage() {
  return (
    <main className="pt-20">
      <Historia />
      <Equipe />
      <Valores />
    </main>
  )
}
