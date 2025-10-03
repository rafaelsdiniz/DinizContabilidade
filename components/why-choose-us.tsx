import { CheckCircle, TrendingUp, Shield, Clock, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Estratégias contábeis que impulsionam o crescimento do seu negócio de forma consistente e segura.",
    },
    {
      icon: Shield,
      title: "Conformidade Garantida",
      description: "Mantenha sua empresa sempre em dia com todas as obrigações fiscais e trabalhistas.",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Foque no seu negócio enquanto cuidamos de toda a parte contábil e burocrática.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada que entende as necessidades específicas da sua empresa.",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos de expertise em contabilidade e gestão empresarial.",
    },
    {
      icon: CheckCircle,
      title: "Redução de Custos",
      description: "Planejamento tributário eficiente que reduz legalmente sua carga fiscal.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Por Que Escolher Uma Contabilidade Profissional?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubra como uma assessoria contábil especializada pode transformar a gestão do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
