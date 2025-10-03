import { Building2, Calculator, FileText, Users, TrendingUp, ClipboardCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Abertura e Regularização de Empresas",
    description: "Assessoria completa para abertura de empresas, alterações contratuais e regularização de documentos.",
  },
  {
    icon: Calculator,
    title: "Contabilidade para PMEs",
    description: "Serviços contábeis especializados para pequenas e médias empresas de diversos segmentos.",
  },
  {
    icon: FileText,
    title: "Consultoria Tributária e Fiscal",
    description: "Planejamento tributário estratégico para redução legal de impostos e conformidade fiscal.",
  },
  {
    icon: Users,
    title: "Folha de Pagamento",
    description: "Gestão completa de folha de pagamento, encargos trabalhistas e obrigações acessórias.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Financeiro",
    description: "Análise e planejamento financeiro para otimização de recursos e crescimento sustentável.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessoria Especializada",
    description: "Atendimento personalizado para supermercados, comércios, profissionais da saúde e serviços.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Oferecemos uma gama completa de serviços contábeis para atender todas as necessidades do seu negócio com
              qualidade e eficiência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
