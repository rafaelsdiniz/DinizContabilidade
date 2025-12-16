import { Award, Users, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/equipe-diniz.jpeg')] bg-cover bg-center opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Sobre a Diniz Assessoria Contábil
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Há mais de 15 anos oferecendo soluções contábeis personalizadas para empresas e profissionais que buscam
              excelência e segurança na gestão de seus negócios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg bg-accent">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">15+ Anos</h3>
              <p className="text-muted-foreground">De experiência no mercado contábil</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-accent">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Atendimento</h3>
              <p className="text-muted-foreground">Personalizado para cada cliente</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-accent">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Resultados</h3>
              <p className="text-muted-foreground">Focados no crescimento do seu negócio</p>
            </div>
          </div>

          <div className="bg-accent rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-balance">Nossa Missão</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Proporcionar soluções contábeis de excelência, auxiliando empresas e profissionais a alcançarem seus
              objetivos com segurança, eficiência e conformidade legal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atendemos diversos segmentos como supermercados, comércios, profissionais da saúde e prestadores de
              serviços, sempre com foco em resultados e relacionamento de longo prazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
