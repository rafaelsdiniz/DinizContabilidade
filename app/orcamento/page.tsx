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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrcamentoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [possuiFilial, setPossuiFilial] = useState<string>("")
  const [possuiParcelamento, setPossuiParcelamento] = useState<string>("")
  const [possuiDepartamento, setPossuiDepartamento] = useState<string>("")
  const [parcelamentoTipos, setParcelamentoTipos] = useState<string[]>([])
  const [certidoes, setCertidoes] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    // Add checkbox arrays to formData
    formData.set("parcelamento_tipos", parcelamentoTipos.join(", "))
    formData.set("certidoes", certidoes.join(", "))

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleParcelamentoChange = (tipo: string, checked: boolean) => {
    if (checked) {
      setParcelamentoTipos([...parcelamentoTipos, tipo])
    } else {
      setParcelamentoTipos(parcelamentoTipos.filter((t) => t !== tipo))
    }
  }

  const handleCertidaoChange = (certidao: string, checked: boolean) => {
    if (checked) {
      setCertidoes([...certidoes, certidao])
    } else {
      setCertidoes(certidoes.filter((c) => c !== certidao))
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Solicite seu Orçamento
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Preencha o formulário abaixo para receber uma proposta personalizada de serviços contábeis.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Orçamento enviado com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="razao_social">Razão Social *</Label>
                      <Input id="razao_social" name="razao_social" type="text" required placeholder="Nome da empresa" />
                    </div>

                    <div>
                      <Label htmlFor="cnpj">CNPJ *</Label>
                      <Input id="cnpj" name="cnpj" type="text" required placeholder="00.000.000/0000-00" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome">Nome *</Label>
                      <Input id="nome" name="nome" type="text" required placeholder="Seu nome completo" />
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input id="telefone" name="telefone" type="tel" required placeholder="(00) 00000-0000" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="regime_tributario">Regime Tributário *</Label>
                      <Select name="regime_tributario" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simples_nacional">Simples Nacional</SelectItem>
                          <SelectItem value="lucro_presumido">Lucro Presumido</SelectItem>
                          <SelectItem value="lucro_real">Lucro Real</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ramo_atividade">Ramo de Atividade *</Label>
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

                  <div>
                    <Label htmlFor="faturamento_mensal">Faturamento Médio Mensal *</Label>
                    <Select name="faturamento_mensal" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-15000">De R$ 0,01 a R$ 15.000,00</SelectItem>
                        <SelectItem value="15000-50000">De R$ 15.000,01 a R$ 50.000,00</SelectItem>
                        <SelectItem value="50000-100000">De R$ 50.000,01 a R$ 100.000,00</SelectItem>
                        <SelectItem value="100000+">Acima de R$ 100.000,00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="sistema">A empresa utiliza sistema (Software) *</Label>
                    <Input id="sistema" name="sistema" type="text" required placeholder="Nome do sistema utilizado" />
                  </div>

                  <div>
                    <Label>Possui Filial *</Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_filial"
                          value="sim"
                          required
                          onChange={(e) => setPossuiFilial(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_filial"
                          value="nao"
                          required
                          onChange={(e) => setPossuiFilial(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Não</span>
                      </label>
                    </div>
                  </div>

                  {possuiFilial === "sim" && (
                    <div>
                      <Label htmlFor="cnpj_filial">CNPJ da Filial *</Label>
                      <Input
                        id="cnpj_filial"
                        name="cnpj_filial"
                        type="text"
                        required
                        placeholder="00.000.000/0000-00"
                      />
                    </div>
                  )}

                  <div>
                    <Label>A empresa possui parcelamento de impostos *</Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_parcelamento"
                          value="sim"
                          required
                          onChange={(e) => setPossuiParcelamento(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_parcelamento"
                          value="nao"
                          required
                          onChange={(e) => setPossuiParcelamento(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Não</span>
                      </label>
                    </div>
                  </div>

                  {possuiParcelamento === "sim" && (
                    <div>
                      <Label>Quais? (pode selecionar mais de um) *</Label>
                      <div className="space-y-2 mt-2">
                        {[
                          "Receita Federal",
                          "INSS",
                          "Simples Nacional",
                          "Procuradoria Nacional",
                          "Estadual",
                          "Municipal",
                        ].map((tipo) => (
                          <label key={tipo} className="flex items-center gap-2">
                            <Checkbox
                              checked={parcelamentoTipos.includes(tipo)}
                              onCheckedChange={(checked) => handleParcelamentoChange(tipo, checked as boolean)}
                            />
                            <span>{tipo}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <Label>Quais certidões de débitos estão dentro do prazo de validade *</Label>
                    <div className="space-y-2 mt-2">
                      {["Federal", "Estadual", "Municipal", "FGTS", "Trabalhista"].map((certidao) => (
                        <label key={certidao} className="flex items-center gap-2">
                          <Checkbox
                            checked={certidoes.includes(certidao)}
                            onCheckedChange={(checked) => handleCertidaoChange(certidao, checked as boolean)}
                          />
                          <span>{certidao}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="qtd_empregados">Quantidade de Empregados Registrados *</Label>
                      <Input id="qtd_empregados" name="qtd_empregados" type="number" required placeholder="0" />
                    </div>

                    <div>
                      <Label htmlFor="qtd_estagiarios">Quantidade de Estagiários *</Label>
                      <Input id="qtd_estagiarios" name="qtd_estagiarios" type="number" required placeholder="0" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="qtd_socios">Quantidade de Sócios *</Label>
                      <Input id="qtd_socios" name="qtd_socios" type="number" required placeholder="0" />
                    </div>

                    <div>
                      <Label htmlFor="qtd_contas">Quantidade de Contas Bancárias *</Label>
                      <Input id="qtd_contas" name="qtd_contas" type="number" required placeholder="0" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="media_cheques">Média de Cheques Emitidos/mês *</Label>
                      <Input id="media_cheques" name="media_cheques" type="number" required placeholder="0" />
                    </div>

                    <div>
                      <Label htmlFor="media_nf_emitidas">Média de NF Emitidas/mês *</Label>
                      <Input id="media_nf_emitidas" name="media_nf_emitidas" type="number" required placeholder="0" />
                    </div>

                    <div>
                      <Label htmlFor="media_nf_entrada">Média de NF de Entrada/mês *</Label>
                      <Input id="media_nf_entrada" name="media_nf_entrada" type="number" required placeholder="0" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="despesa_mensal">Despesa Média Mensal *</Label>
                    <Input id="despesa_mensal" name="despesa_mensal" type="text" required placeholder="R$ 0,00" />
                  </div>

                  <div>
                    <Label>A empresa possui departamento próprio para emissão de Nota Fiscal *</Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_departamento"
                          value="sim"
                          required
                          onChange={(e) => setPossuiDepartamento(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="possui_departamento"
                          value="nao"
                          required
                          onChange={(e) => setPossuiDepartamento(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Não</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="como_conheceu">Como conheceu o escritório *</Label>
                    <Select name="como_conheceu" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="indicacao">Indicação</SelectItem>
                        <SelectItem value="internet">Internet</SelectItem>
                        <SelectItem value="redes_sociais">Redes Sociais</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="motivo_desligamento">Motivo do Desligamento Anterior *</Label>
                    <Textarea
                      id="motivo_desligamento"
                      name="motivo_desligamento"
                      required
                      placeholder="Descreva o motivo"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="honorarios_anteriores">Honorários pagos Anteriormente *</Label>
                    <Input
                      id="honorarios_anteriores"
                      name="honorarios_anteriores"
                      type="text"
                      required
                      placeholder="R$ 0,00"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Orçamento"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
