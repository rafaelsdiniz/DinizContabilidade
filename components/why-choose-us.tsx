import { CheckCircle, TrendingUp, Shield, Clock, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Estratégias contábeis que impulsionam o crescimento do seu negócio de forma consistente e segura.",
      highlight: "Resultados Mensuráveis"
    },
    {
      icon: Shield,
      title: "Conformidade Garantida",
      description: "Mantenha sua empresa sempre em dia com todas as obrigações fiscais e trabalhistas, evitando multas.",
      highlight: "Segurança Jurídica"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Foque no seu negócio enquanto cuidamos de toda a parte contábil e burocrática com eficiência.",
      highlight: "Foco no Essencial"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe dedicada que entende as necessidades específicas da sua empresa e setor.",
      highlight: "Parceria Estratégica"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos de expertise em contabilidade e gestão empresarial com cases de sucesso.",
      highlight: "Expertise Reconhecida"
    },
    {
      icon: CheckCircle,
      title: "Redução de Custos",
      description: "Planejamento tributário eficiente que reduz legalmente sua carga fiscal de forma inteligente.",
      highlight: "Otimização Financeira"
    },
  ]

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Diferenciais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Por Que Escolher a <span className="text-primary">Diniz Contabilidade</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais do que números, oferecemos uma parceria estratégica para o sucesso do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card 
                  key={index} 
                  className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] h-full"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-3">
                        {reason.highlight}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {reason.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {reason.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border/50 flex items-center text-primary text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span>Benefício exclusivo</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Pronto para transformar sua gestão contábil?
                  </h3>
                  <p className="text-muted-foreground">
                    Agende uma consultoria gratuita e descubra como podemos otimizar sua empresa
                  </p>
                </div>
                <a 
                  href="/contato"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Agendar Consultoria
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}