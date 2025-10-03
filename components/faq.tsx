import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Quando devo contratar uma contabilidade?",
      answer:
        "O ideal é contratar uma contabilidade desde o início do seu negócio, antes mesmo da abertura da empresa. Isso garante que todos os processos sejam feitos corretamente desde o começo, evitando problemas futuros com o fisco e otimizando a carga tributária.",
    },
    {
      question: "Qual a diferença entre MEI, ME e EPP?",
      answer:
        "MEI (Microempreendedor Individual) é para faturamento até R$ 81 mil/ano. ME (Microempresa) permite faturamento até R$ 360 mil/ano. EPP (Empresa de Pequeno Porte) permite faturamento de R$ 360 mil até R$ 4,8 milhões/ano. Cada categoria tem obrigações e benefícios diferentes.",
    },
    {
      question: "Como funciona o planejamento tributário?",
      answer:
        "O planejamento tributário é um estudo detalhado da sua empresa para identificar o regime tributário mais vantajoso (Simples Nacional, Lucro Presumido ou Lucro Real). Isso pode resultar em economia significativa de impostos de forma totalmente legal.",
    },
    {
      question: "Quais documentos preciso enviar mensalmente?",
      answer:
        "Geralmente são necessários: notas fiscais de entrada e saída, extratos bancários, comprovantes de pagamento de funcionários, guias de impostos, contratos e recibos. Nossa equipe orienta especificamente sobre os documentos necessários para o seu tipo de empresa.",
    },
    {
      question: "Quanto tempo leva para abrir uma empresa?",
      answer:
        "O processo de abertura de empresa pode levar de 5 a 15 dias úteis, dependendo da complexidade do negócio e da agilidade dos órgãos públicos. Cuidamos de todo o processo: registro na Junta Comercial, CNPJ, inscrições estaduais e municipais.",
    },
    {
      question: "O que acontece se eu atrasar o pagamento de impostos?",
      answer:
        "O atraso gera multas e juros que aumentam a dívida. Em casos graves, pode haver bloqueio de certidões negativas, impedindo participação em licitações e obtenção de crédito. Nossa assessoria ajuda a manter tudo em dia e, se necessário, regularizar pendências.",
    },
    {
      question: "Preciso de contador sendo MEI?",
      answer:
        "Embora não seja obrigatório, é altamente recomendável. Um contador pode orientar sobre limites de faturamento, despesas dedutíveis, emissão de notas fiscais e até mesmo avaliar se MEI ainda é o melhor regime para você, evitando problemas futuros.",
    },
    {
      question: "Como funciona a folha de pagamento?",
      answer:
        "Cuidamos de todo o processo: cálculo de salários, descontos (INSS, FGTS, IR), férias, 13º salário, rescisões e envio de obrigações acessórias (eSocial, SEFIP). Garantimos que sua empresa esteja em conformidade com a legislação trabalhista.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Tire suas dúvidas sobre contabilidade e gestão empresarial
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
