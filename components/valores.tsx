"use client"

export function Valores() {
  const valores = [
    {
      title: "Ética e transparência",
      description:
        "Atuamos com responsabilidade, clareza e respeito em todas as relações.",
    },
    {
      title: "Compromisso com o cliente",
      description:
        "Entendemos cada negócio de forma individual para oferecer soluções adequadas.",
    },
    {
      title: "Segurança e conformidade",
      description:
        "Prezamos pela regularidade fiscal e pela tranquilidade dos nossos clientes.",
    },
  ]

  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">

        {/* TÍTULO */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              NOSSOS VALORES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground">
            Princípios que orientam
            <br />
            nosso trabalho
          </h2>
        </div>

        {/* LISTA */}
        <div className="grid md:grid-cols-3 gap-12">
          {valores.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
