import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  Shield,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  const stats = [
    { icon: Award, value: "15+", label: "Anos de experiência" },
    { icon: Users, value: "500+", label: "Clientes atendidos" },
    { icon: TrendingUp, value: "100%", label: "Foco em crescimento" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excelência",
      description:
        "Cuidamos de cada detalhe para entregar sempre o melhor resultado.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description:
        "Sua empresa sempre regular, sem riscos e sem surpresas.",
    },
    {
      icon: Heart,
      title: "Parceria",
      description:
        "Atuamos lado a lado com você, pensando no longo prazo.",
    },
  ]

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">
            Quem somos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contabilidade com{" "}
            <span className="text-primary">visão humana</span> e estratégica
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Mais de 15 anos ajudando empresas a crescer com organização,
            segurança e decisões inteligentes.
          </p>
        </div>

        {/* BLOCO PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGEM */}
          <div className="relative">
            <Image
              src="/equipe-diniz.jpeg"
              alt="Equipe Diniz Contabilidade"
              width={640}
              height={480}
              className="rounded-2xl shadow-xl object-cover"
            />

            <div className="absolute bottom-4 left-4 bg-background/85 backdrop-blur px-5 py-3 rounded-lg shadow-lg">
              <span className="text-sm font-semibold text-foreground">
                Atuação desde 2010
              </span>
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Uma história construída com confiança
            </h3>

            <p className="text-foreground/80 leading-relaxed">
              A Diniz Assessoria Contábil nasceu com um propósito simples:
              transformar a contabilidade em uma aliada real do crescimento
              empresarial.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              Atendemos desde pequenos empreendedores até empresas consolidadas,
              sempre com um atendimento próximo, claro e estratégico.
            </p>

            <Button asChild size="lg">
              <Link href="/contato">
                Falar com um contador
              </Link>
            </Button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="
                  flex items-center gap-4 justify-center
                  bg-card
                  border border-border/50
                  rounded-xl p-6
                  shadow-md
                "
              >
                <div className="w-12 h-12 rounded-lg bg-primary/25 flex items-center justify-center">
                  <Icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* VALORES */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Nossos valores
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Princípios que guiam nosso trabalho todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="
                  text-center p-8
                  bg-card
                  border border-border/50
                  rounded-2xl
                  shadow-md
                "
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/25 flex items-center justify-center">
                  <Icon className="text-primary w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
