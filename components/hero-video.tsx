"use client"

export function HeroVideo() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">

      {/* VÍDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Contabilidade estratégica para crescer com segurança
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Especialistas em empresas, profissionais da saúde e prestadores de serviço.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/orcamento"
              className="inline-flex items-center justify-center
                h-12 px-8 rounded-md
                bg-primary text-primary-foreground
                font-medium"
            >
              Solicitar orçamento
            </a>

            <a
              href="/servicos"
              className="inline-flex items-center justify-center
                h-12 px-8 rounded-md
                border border-white/40
                text-white hover:bg-white/10
                transition"
            >
              Conheça os serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
