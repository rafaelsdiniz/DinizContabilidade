"use client"

import { Building2, Calculator, FileText, Users, TrendingUp, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Abertura e Regularização de Empresas",
    shortDescription: "Assessoria completa para abertura de empresas, alterações contratuais e regularização de documentos.",
    detailedDescription: "Oferecemos um serviço completo de abertura e regularização de empresas, cuidando de toda a burocracia para você focar no que realmente importa: seu negócio.",
    features: [
      "Análise da melhor estrutura societária",
      "Registro na Junta Comercial",
      "Obtenção de CNPJ",
      "Inscrições municipais e estaduais",
      "Legalização do alvará de funcionamento",
      "Registro de marca (opcional)"
    ],
    color: "border-l-blue-500"
  },
  {
    id: 2,
    icon: Calculator,
    title: "Contabilidade para PMEs",
    shortDescription: "Serviços contábeis especializados para pequenas e médias empresas de diversos segmentos.",
    detailedDescription: "Gestão contábil completa para pequenas e médias empresas, com foco em resultados e conformidade fiscal.",
    features: [
      "Escrituração contábil digital",
      "Apuração de impostos federais, estaduais e municipais",
      "Emissão de relatórios mensais",
      "SPED Fiscal, Contábil e PIS/COFINS",
      "Demonstrações contábeis (Balanço, DRE)",
      "Acompanhamento de obrigações acessórias"
    ],
    color: "border-l-emerald-500"
  },
  {
    id: 3,
    icon: FileText,
    title: "Consultoria Tributária e Fiscal",
    shortDescription: "Planejamento tributário estratégico para redução legal de impostos e conformidade fiscal.",
    detailedDescription: "Consultoria especializada para otimização da carga tributária e conformidade com a legislação.",
    features: [
      "Análise do regime tributário ideal",
      "Planejamento tributário estratégico",
      "Recuperação de créditos fiscais",
      "Auditoria fiscal preventiva",
      "Assessoria em processos fiscais",
      "Análise de legislações específicas"
    ],
    color: "border-l-purple-500"
  },
  {
    id: 4,
    icon: Users,
    title: "Folha de Pagamento",
    shortDescription: "Gestão completa de folha de pagamento, encargos trabalhistas e obrigações acessórias.",
    detailedDescription: "Processamento completo da folha de pagamento com todas as obrigações trabalhistas e previdenciárias.",
    features: [
      "Cálculo de folha de pagamento",
      "Cálculo de férias, 13º salário e rescisões",
      "Emissão de contracheques e relatórios",
      "Cálculo de encargos sociais",
      "Entrega das obrigações ao eSocial",
      "Controle de ponto e horas extras"
    ],
    color: "border-l-orange-500"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Planejamento Financeiro",
    shortDescription: "Análise e planejamento financeiro para otimização de recursos e crescimento sustentável.",
    detailedDescription: "Acompanhamento e planejamento financeiro estratégico para garantir a saúde financeira do negócio.",
    features: [
      "Análise de fluxo de caixa",
      "Elaboração de orçamento empresarial",
      "Projeções financeiras",
      "Análise de indicadores de desempenho",
      "Relatórios gerenciais personalizados",
      "Acompanhamento de metas financeiras"
    ],
    color: "border-l-yellow-500"
  },
  {
    id: 6,
    icon: ClipboardCheck,
    title: "Assessoria Especializada",
    shortDescription: "Atendimento personalizado para supermercados, comércios, profissionais da saúde e serviços.",
    detailedDescription: "Consultoria especializada por segmento com conhecimento das particularidades de cada negócio.",
    features: [
      "Conhecimento específico do segmento",
      "Análise de legislações setoriais",
      "Otimização de processos contábeis",
      "Acompanhamento personalizado",
      "Soluções customizadas",
      "Treinamento para a equipe"
    ],
    color: "border-l-indigo-500"
  },
]

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-24 bg-accent">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Nossas Soluções</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Serviços <span className="text-primary">Especializados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passe o mouse sobre cada serviço para ver detalhes completos
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {services.map((service) => {
              const Icon = service.icon
              const isHovered = hoveredService === service.id
              
              return (
                <div
                  key={service.id}
                  className="relative"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Card Principal */}
                  <Card className={`
                    h-full border-2 transition-all duration-300 cursor-pointer
                    ${isHovered 
                      ? 'border-primary shadow-xl scale-[1.02]' 
                      : 'border-border hover:border-primary/30 hover:shadow-lg'
                    }
                  `}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-3 rounded-xl flex-shrink-0 transition-colors
                          ${isHovered ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}
                        `}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                          
                          <div className="flex items-center mt-4 text-primary text-sm font-medium">
                            <span>{isHovered ? 'Detalhes visíveis ↑' : 'Passe o mouse para detalhes'}</span>
                            <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isHovered ? 'rotate-90' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Overlay de Detalhes - Aparece por cima do card */}
                  {isHovered && (
                    <div className={`
                      absolute z-50 w-full max-w-2xl mx-auto
                      left-1/2 -translate-x-1/2 top-0
                      bg-card border-2 border-primary/20 shadow-2xl rounded-xl overflow-hidden
                      animate-in fade-in slide-in-from-top-5 duration-200
                    `}>
                      {/* Cabeçalho do Overlay */}
                      <div className={`p-6 border-l-4 ${service.color} bg-gradient-to-r from-primary/5 to-transparent`}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                          </div>
                        </div>
                      </div>

                      {/* Conteúdo do Overlay */}
                      <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Descrição Completa</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.detailedDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            O que incluímos:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-border">
                          <button className="py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            Solicitar Orçamento
                          </button>
                          <button className="py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                            Agendar Consultoria
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Rodapé da seção */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Não encontrou exatamente o que precisa?
              </h3>
              <p className="text-muted-foreground mb-8">
                Oferecemos soluções personalizadas para atender necessidades específicas do seu negócio.
                Nossa equipe está pronta para entender seu caso e oferecer a melhor solução.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Falar com Especialista
                </button>
                <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Ver Todos os Serviços
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}