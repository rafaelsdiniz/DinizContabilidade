"use client"

import {
  Building2,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Abertura e Regularização de Empresas",
    description:
      "Cuidamos de todo o processo de abertura, alteração e regularização da sua empresa, com segurança e agilidade.",
    features: [
      "CNPJ e Junta Comercial",
      "Inscrições fiscais",
      "Alvarás e licenças",
    ],
  },
  {
    icon: Calculator,
    title: "Contabilidade para PMEs",
    description:
      "Gestão contábil completa para pequenas e médias empresas, com foco em conformidade e crescimento.",
    features: [
      "Apuração de impostos",
      "SPED e obrigações acessórias",
      "Relatórios contábeis",
    ],
  },
  {
    icon: FileText,
    title: "Consultoria Tributária",
    description:
      "Planejamento tributário estratégico para reduzir impostos de forma legal e eficiente.",
    features: [
      "Regime tributário ideal",
      "Recuperação de créditos",
      "Auditoria preventiva",
    ],
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description:
      "Processamento completo da folha, encargos trabalhistas e obrigações legais.",
    features: [
      "Folha e encargos",
      "Férias e rescisões",
      "eSocial",
    ],
  },
  {
    icon: TrendingUp,
    title: "Planejamento Financeiro",
    description:
      "Organização financeira para garantir crescimento sustentável e previsibilidade.",
    features: [
      "Fluxo de caixa",
      "Indicadores financeiros",
      "Relatórios gerenciais",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Assessoria Especializada",
    description:
      "Atendimento personalizado para comércios, saúde, serviços e segmentos específicos.",
    features: [
      "Análise setorial",
      "Acompanhamento próximo",
      "Soluções sob medida",
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">
            Nossos Serviços
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções contábeis{" "}
            <span className="text-primary">completas</span> para sua empresa
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Atuação estratégica, atendimento próximo e total segurança fiscal
            para o crescimento do seu negócio.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="h-full border border-border/60 shadow-sm hover:shadow-lg transition"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* ÍCONE */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* TEXTO */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-foreground/70"
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contato">
                        Falar com especialista
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 text-center border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Precisa de uma solução personalizada?
          </h3>

          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender sua necessidade e oferecer a
            melhor estratégia contábil para seu negócio.
          </p>

          <Button size="lg" asChild>
            <Link href="/contato">
              Solicitar orçamento
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
