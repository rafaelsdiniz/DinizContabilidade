"use client"

import { Calculator, FileText, Users, Building2, TrendingUp, ClipboardCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Abertura de Empresa",
    description: "Todo processo de abertura e legalização sem burocracia, do registro às obrigações iniciais",
    category: "Jurídico"
  },
  {
    icon: Calculator,
    title: "Contabilidade Completa",
    description: "Gestão mensal completa para PMEs com entrega de obrigações acessórias em dia",
    category: "Essencial"
  },
  {
    icon: FileText,
    title: "Consultoria Tributária",
    description: "Planejamento estratégico para redução legal de impostos e conformidade fiscal",
    category: "Estratégico"
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description: "Gestão completa de funcionários, encargos trabalhistas e obrigações acessórias",
    category: "Gestão"
  },
  {
    icon: TrendingUp,
    title: "Análise Financeira",
    description: "Relatórios e indicadores detalhados para tomada de decisões estratégicas",
    category: "Analítico"
  },
  {
    icon: ClipboardCheck,
    title: "Auditoria e Compliance",
    description: "Regularização e conformidade fiscal com processos auditados e seguros",
    category: "Conformidade"
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Nossos Serviços</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Soluções Completas para <span className="text-primary">Sua Empresa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Assessoria contábil especializada que cuida de tudo para você focar no crescimento do negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link href="/servicos" key={index} className="group">
                <Card className="h-full border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 bg-muted text-muted-foreground rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm pt-4 border-t border-border/50">
                      <span>Saiba mais sobre este serviço</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 pt-12 border-t border-border/50">
            <p className="text-lg text-muted-foreground mb-6">
              Precisa de uma solução específica para seu segmento?
            </p>
            <Link 
              href="/contato" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <span>Falar com especialista</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}