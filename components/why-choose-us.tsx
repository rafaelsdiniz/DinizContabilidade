import Link from "next/link"
import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  Award,
  DollarSign,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: DollarSign,
      title: "Redução Inteligente de Impostos",
      description:
        "Planejamento tributário legal para pagar menos imposto sem riscos e sem surpresas.",
      highlight: "Mais procurado",
      href: "/servicos/planejamento-tributario",
      featured: true,
    },
    {
      icon: Shield,
      title: "Empresa Sempre Regular",
      description:
        "Cuidamos de todas as obrigações fiscais e trabalhistas para você evitar multas.",
      highlight: "Segurança",
      href: "/servicos/regularizacao",
    },
    {
      icon: Clock,
      title: "Mais Tempo para Crescer",
      description:
        "Enquanto cuidamos da burocracia, você foca no crescimento do seu negócio.",
      highlight: "Produtividade",
      href: "/servicos/contabilidade-mensal",
    },
    {
      icon: Users,
      title: "Atendimento Humano",
      description:
        "Nada de respostas automáticas. Você fala direto com quem entende do seu negócio.",
      highlight: "Relacionamento",
      href: "/sobre",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description:
        "Mais de 15 anos ajudando empresas a crescer com organização e segurança.",
      highlight: "Confiança",
      href: "/sobre",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description:
        "Decisões contábeis que apoiam o crescimento saudável da sua empresa.",
      highlight: "Estratégia",
      href: "/servicos",
    },
  ]

  return (
    <section className="py-24 bg-accent">
      {/* WRAPPER ÚNICO — ISSO GARANTE CENTRALIZAÇÃO REAL */}
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            Por que escolher a Diniz
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Uma contabilidade que trabalha{" "}
            <span className="text-primary">a favor do seu negócio</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Aqui você não é só mais um CNPJ. Atuamos como parceiros estratégicos
            para o crescimento da sua empresa.
          </p>
        </div>

        {/* GRID — CENTRALIZADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <Link
                key={index}
                href={reason.href}
                className="group mx-auto w-full max-w-sm"
              >
                <Card
                  className={`relative h-full cursor-pointer transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl
                    ${
                      reason.featured
                        ? "border-primary shadow-lg"
                        : "border-border"
                    }`}
                >
                  {reason.featured && (
                    <span className="absolute top-4 right-4 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Destaque
                    </span>
                  )}

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>

                      <span className="inline-block text-xs font-medium bg-muted px-3 py-1 rounded-full mb-3">
                        {reason.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-4">
                      {reason.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {reason.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20">
          <div className="bg-primary/10 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Quer uma contabilidade que realmente ajude sua empresa?
              </h3>
              <p className="text-muted-foreground">
                Fale agora com um contador e tire suas dúvidas sem compromisso.
              </p>
            </div>

            <Link
              href="/contato"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Falar com um contador
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
