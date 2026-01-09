"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function OrcamentoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [possuiParcelamento, setPossuiParcelamento] = useState("")
  const [parcelamentoTipos, setParcelamentoTipos] = useState<string[]>([])

  const toggleArray = (
    value: string,
    checked: boolean,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.set("parcelamento_tipos", parcelamentoTipos.join(", "))

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitSuccess(true)
        e.currentTarget.reset()
        setPossuiParcelamento("")
        setParcelamentoTipos([])
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="py-28 bg-background">
      <div className="container mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-6 mb-6">
            <span className="h-px w-16 bg-border" />
            <span className="text-sm tracking-widest text-muted-foreground">
              ORÇAMENTO
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-foreground mb-6">
            Solicite um orçamento contábil
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Preencha as informações abaixo para que possamos entender
            a realidade da sua empresa e elaborar uma proposta adequada.
          </p>
        </div>

        {submitSuccess && (
          <div className="max-w-3xl mb-10 p-4 border border-green-200 bg-green-50 text-green-800 rounded">
            Orçamento enviado com sucesso. Em breve entraremos em contato.
          </div>
        )}

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl space-y-16"
        >

          {/* DADOS DA EMPRESA */}
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Dados da empresa
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label>Razão Social *</Label>
                <Input name="razao_social" required />
              </div>

              <div>
                <Label>CNPJ *</Label>
                <Input name="cnpj" required />
              </div>

              <div>
                <Label>Regime Tributário *</Label>
                <Select name="regime_tributario" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simples">Simples Nacional</SelectItem>
                    <SelectItem value="presumido">Lucro Presumido</SelectItem>
                    <SelectItem value="real">Lucro Real</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Ramo de Atividade *</Label>
                <Select name="ramo_atividade" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="servico">Serviço</SelectItem>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* ESTRUTURA */}
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Estrutura da empresa
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <Input name="qtd_empregados" placeholder="Empregados" type="number" />
              <Input name="qtd_estagiarios" placeholder="Estagiários" type="number" />
              <Input name="qtd_socios" placeholder="Sócios" type="number" />
              <Input name="qtd_contas" placeholder="Contas bancárias" type="number" />
            </div>
          </section>

          {/* SITUAÇÃO FISCAL */}
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Situação fiscal
            </h2>

            <div className="space-y-4">
              <Label>Possui parcelamento de impostos?</Label>
              <div className="flex gap-6">
                {["sim", "nao"].map((v) => (
                  <label key={v} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="possui_parcelamento"
                      value={v}
                      onChange={(e) => setPossuiParcelamento(e.target.value)}
                    />
                    {v === "sim" ? "Sim" : "Não"}
                  </label>
                ))}
              </div>

              {possuiParcelamento === "sim" && (
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {["Federal", "INSS", "Estadual", "Municipal"].map((t) => (
                    <label key={t} className="flex items-center gap-2">
                      <Checkbox
                        onCheckedChange={(c) =>
                          toggleArray(t, c as boolean, setParcelamentoTipos)
                        }
                      />
                      {t}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* OBSERVAÇÕES */}
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              Observações
            </h2>

            <Textarea
              name="observacoes"
              placeholder="Descreva brevemente sua necessidade ou situação atual"
              rows={4}
            />
          </section>

          {/* SUBMIT */}
          <div className="pt-8">
            <Button
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="px-12"
            >
              {isSubmitting ? "Enviando..." : "Solicitar orçamento"}
            </Button>
          </div>

        </form>
      </div>
    </main>
  )
}
