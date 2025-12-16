import { Award, Users, TrendingUp, Target, CheckCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada serviço prestado"
    },
    {
      icon: CheckCircle,
      title: "Conformidade",
      description: "Seguimos rigorosamente as normas e legislações vigentes"
    },
    {
      icon: Heart,
      title: "Parceria",
      description: "Crescermos juntos é a nossa principal meta"
    }
  ]

  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      description: "Mercado contábil"
    },
    {
      icon: Users,
      number: "500+",
      label: "Clientes Atendidos",
      description: "Empresas e profissionais"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Satisfação",
      description: "Taxa de retenção"
    }
  ]

  return (
    <section id="sobre" className="py-24 bg-accent">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Nossa História</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Mais de 15 Anos de <span className="text-primary">Confiança</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma trajetória construída com dedicação, expertise e um compromisso genuíno com o sucesso de cada cliente
            </p>
          </div>

          {/* Layout principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Coluna da esquerda - Imagem e stats */}
            <div className="relative">
              {/* Container da imagem */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: "url('/equipe-diniz.jpeg')" }}
                >
                  {/* Overlay gradiente para melhor contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                </div>
                
                {/* Badge sobre a imagem */}
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-border/50 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="font-semibold text-foreground">Desde 2010</span>
                  </div>
                </div>
              </div>

              {/* Stats abaixo da imagem */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div 
                      key={index} 
                      className="bg-card border rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-2">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                      <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Coluna da direita - Conteúdo */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Jornada</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Diniz Assessoria Contábil nasceu da paixão por números e do desejo de transformar a contabilidade 
                  em uma ferramenta estratégica para os negócios. Ao longo de mais de 15 anos, desenvolvemos uma metodologia 
                  única que une expertise técnica com um atendimento humano e próximo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Especializados em atender desde pequenos empreendedores até empresas consolidadas, entendemos as 
                  particularidades de cada segmento e oferecemos soluções personalizadas que realmente fazem a diferença.
                </p>
              </div>

              {/* Nossos Valores */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Nossos Valores</h3>
                <div className="space-y-4">
                  {values.map((value, index) => {
                    const Icon = value.icon
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="text-primary" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contato">
                    Conheça Nossa Equipe
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Missão e Visão */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluções contábeis de excelência, transformando números em estratégias que impulsionam 
                o crescimento sustentável dos negócios de nossos clientes, sempre com ética, transparência e inovação.
              </p>
            </div>

            <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a referência em assessoria contábil para pequenas e médias empresas, 
                sendo a escolha natural de empreendedores que buscam não apenas cumprir obrigações legais, 
                mas sim um parceiro estratégico para seu crescimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}