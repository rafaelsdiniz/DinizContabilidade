"use client"

export function Historia() {
  return (
    <section className="pt-6 pb-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          {/* TÍTULO */}
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              NOSSA HISTÓRIA
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-8">
            Uma trajetória construída com confiança
            <br />
            e responsabilidade
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A Diniz Assessoria Contábil nasceu com o propósito de oferecer
              soluções contábeis claras, seguras e alinhadas às necessidades
              reais de cada cliente.
            </p>

            <p>
              Ao longo de mais de 15 anos de atuação, construímos relações
              duradouras com empresas e profissionais, baseadas na proximidade,
              na ética e na confiança.
            </p>

            <p>
              Nosso compromisso sempre foi ir além do cumprimento de
              obrigações legais, atuando de forma estratégica para apoiar
              decisões e promover crescimento sustentável.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
