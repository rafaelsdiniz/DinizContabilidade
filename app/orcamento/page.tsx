"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
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

  const [possuiFilial, setPossuiFilial] = useState("")
  const [possuiParcelamento, setPossuiParcelamento] = useState("")
  const [possuiDepartamento, setPossuiDepartamento] = useState("")

  const [parcelamentoTipos, setParcelamentoTipos] = useState<string[]>([])
  const [certidoes, setCertidoes] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.set("parcelamento_tipos", parcelamentoTipos.join(", "))
    formData.set("certidoes", certidoes.join(", "))

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setSubmitSuccess(true)
        e.currentTarget.reset()
        setPossuiFilial("")
        setPossuiParcelamento("")
        setPossuiDepartamento("")
        setParcelamentoTipos([])
        setCertidoes([])
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleArray = (
    value: string,
    checked: boolean,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-24 bg-accent">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Orçamento personalizado
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solicite seu orçamento contábil
            </h1>

            <p className="text-lg text-muted-foreground">
              Quanto mais informações, mais precisa será nossa proposta.
            </p>
          </div>

          {submitSuccess && (
            <div className="max-w-3xl mx-auto mb-10 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
              Orçamento enviado com sucesso! Entraremos em contato em breve.
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto space-y-12"
          >

            {/* BLOCO 1 */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Dados da Empresa
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
              </CardContent>
            </Card>

            {/* BLOCO 2 */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Estrutura da Empresa
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Input name="qtd_empregados" placeholder="Empregados" type="number" />
                  <Input name="qtd_estagiarios" placeholder="Estagiários" type="number" />
                  <Input name="qtd_socios" placeholder="Sócios" type="number" />
                </div>

                <Input
                  name="qtd_contas"
                  placeholder="Quantidade de contas bancárias"
                  type="number"
                />
              </CardContent>
            </Card>

            {/* BLOCO 3 */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Situação Fiscal
                </h2>

                <div>
                  <Label>Possui parcelamento de impostos?</Label>
                  <div className="flex gap-4 mt-2">
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
                </div>

                {possuiParcelamento === "sim" && (
                  <div className="grid sm:grid-cols-2 gap-3">
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
              </CardContent>
            </Card>

            {/* BLOCO 4 */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Observações
                </h2>

                <Textarea
                  name="motivo_desligamento"
                  placeholder="Conte um pouco mais sobre a necessidade da empresa"
                  rows={4}
                />
              </CardContent>
            </Card>

            {/* SUBMIT */}
            <div className="flex justify-center pt-6">
              <Button
                size="lg"
                type="submit"
                disabled={isSubmitting}
                className="px-12"
              >
                {isSubmitting ? "Enviando..." : "Enviar Orçamento"}
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
