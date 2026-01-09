import { CheckCircle } from "lucide-react"

export function Porque() {
  const items = [
    {
      title: "Menos riscos fiscais",
      text:
        "A falta de planejamento tributário pode gerar multas, autuações e custos desnecessários. Uma contabilidade estratégica atua de forma preventiva.",
    },
    {
      title: "Mais economia de impostos",
      text:
        "Com análise correta do regime tributário e enquadramento adequado, é possível reduzir legalmente a carga de impostos.",
    },
    {
      title: "Decisões baseadas em dados",
      text:
        "Relatórios claros e organizados transformam números em informações que ajudam o empresário a decidir com mais segurança.",
    },
  ]

  return (
    <section className="py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">

        {/* TÍTULO */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-4">
            <span className="h-px w-20 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              POR QUE
            </span>
            <span className="h-px w-20 bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-wide text-foreground">
            Contabilidade estratégica faz diferença
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Mais do que cumprir obrigações legais, uma contabilidade bem
            estruturada impacta diretamente nos resultados do negócio.
          </p>
        </div>

        {/* ITENS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                bg-background rounded-xl p-8
                border border-border
                shadow-sm
              "
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Quer entender como isso se aplica à sua empresa?
          </p>

          <a
            href="/orcamento"
            className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-md
              bg-primary text-primary-foreground
              font-medium
              hover:bg-primary/90 transition
            "
          >
            Solicitar diagnóstico
          </a>
        </div>

      </div>
    </section>
  )
}
