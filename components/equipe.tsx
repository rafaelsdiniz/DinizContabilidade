"use client"

export function Equipe() {
  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/equipe-diniz.jpeg')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-xl bg-background/90 backdrop-blur rounded-lg p-10">

          {/* TÍTULO */}
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              NOSSA EQUIPE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-6">
            Profissionais comprometidos
            <br />
            com o seu negócio
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Contamos com uma equipe qualificada e em constante atualização,
            preparada para atender com proximidade, clareza e responsabilidade.
          </p>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Nosso atendimento é humano, acessível e focado em compreender
            a realidade de cada cliente para oferecer soluções adequadas
            e seguras.
          </p>

        </div>
      </div>
    </section>
  )
}
