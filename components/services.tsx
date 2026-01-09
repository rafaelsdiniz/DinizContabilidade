"use client"

import {
  Briefcase,
  Users,
  Calculator,
  TrendingDown,
  LineChart,
  Wallet,
  Building2,
  KeyRound,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: LineChart,
    title: "Contabilidade Consultiva",
    description:
      "Mais do que registrar números, transformamos informações contábeis em relatórios estratégicos, ajudando os clientes a compreenderem seus resultados e tomarem decisões assertivas.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal e Folha de Pagamento",
    description:
      "Gerenciamos toda a rotina trabalhista e previdenciária com segurança jurídica, garantindo conformidade e cuidado com os colaboradores.",
  },
  {
    icon: Calculator,
    title: "Apuração de Impostos",
    description:
      "Controle e cálculo de tributos com precisão, sempre buscando a melhor opção dentro da legislação vigente para otimizar recursos.",
  },
  {
    icon: TrendingDown,
    title: "Planejamento e Recuperação Tributária",
    description:
      "Desenvolvemos estratégias para reduzir a carga tributária de forma legal e identificamos créditos recuperáveis que podem gerar ganhos financeiros significativos.",
  },
  {
    icon: Briefcase,
    title: "Consultoria Empresarial e Financeira",
    description:
      "Apoiamos empreendedores na gestão financeira, no fluxo de caixa e na organização de processos, oferecendo clareza e suporte para crescimento sustentável.",
  },
  {
    icon: Wallet,
    title: "BPO Financeiro (Parceria com a Plenus Financeira)",
    description:
      "Assumimos a gestão das rotinas financeiras das empresas, do contas a pagar e receber à conciliação bancária e relatórios de desempenho.",
  },
  {
    icon: Building2,
    title: "Abertura, Regularização de Empresas e Holding",
    description:
      "Orientamos desde o início do negócio até sua expansão, cuidando da legalização, estrutura societária e constituição de holdings para proteção patrimonial.",
  },
  {
    icon: KeyRound,
    title: "Certificado Digital (Grupo In9ve)",
    description:
      "O Certificado Digital é comercializado diretamente pelo Grupo In9ve, do qual a Diniz faz parte, garantindo praticidade e segurança jurídica.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-background">

      {/* HERO COM IMAGEM */}
      <div
        className="
          relative -mt-20
          h-[380px] w-full
          bg-cover bg-center
          flex items-center
        "
        style={{ backgroundImage: "url('/servicosimagem.jpg')" }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* TEXTO */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-6">
              <span className="h-px w-16 bg-white/40" />
              <span className="text-sm tracking-widest text-white/70">
                NOSSAS SOLUÇÕES
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide mb-6">
              Serviços contábeis completos
              <br />
              para empresas e profissionais
            </h1>

            <p className="text-lg text-white/85 leading-relaxed">
              Atuamos de forma consultiva e estratégica, oferecendo soluções que
              vão além das obrigações legais e apoiam o crescimento sustentável
              dos nossos clientes.
            </p>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          {/* LISTA */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="flex gap-5">
                  <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-24 pt-12 border-t border-border">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Precisa de uma solução contábil sob medida?
              </h3>

              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe está pronta para entender sua necessidade e
                apresentar a melhor estratégia para o seu negócio.
              </p>

              <Button asChild variant="outline">
                <Link href="/contato">
                  Fale com nossa equipe
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
