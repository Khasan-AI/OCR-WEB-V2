"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Calculator, FileDigit, Film } from "lucide-react"

const PLAN_CONFIG = {
  starter: {
    id: "starter",
    costPerPage: 0.01,
  },
  professional: {
    id: "professional",
    costPerPage: 0.008,
  },
} as const

type PlanKey = keyof typeof PLAN_CONFIG

export function ROICalculator() {
  const { t } = useLanguage()
  const [documentsPerMonth, setDocumentsPerMonth] = useState(5000)
  const [pagesPerDocument, setPagesPerDocument] = useState(4)
  const [manualCostPerPage, setManualCostPerPage] = useState(0.7)
  const [plan, setPlan] = useState<PlanKey>("starter")

  const planOptions = useMemo(
    () => [
      { id: "starter" as PlanKey, label: t("roi.inputs.planOptions.starter") },
      { id: "professional" as PlanKey, label: t("roi.inputs.planOptions.professional") },
    ],
    [t]
  )

  const pagesPerMonth = documentsPerMonth * pagesPerDocument
  const manualSpend = pagesPerMonth * manualCostPerPage
  const ocrSpend = pagesPerMonth * PLAN_CONFIG[plan].costPerPage
  const monthlySavings = manualSpend - ocrSpend
  const implementationCost: number = 12_000
  const roiSixMonths = implementationCost === 0 ? 0 : ((monthlySavings * 6 - implementationCost) / implementationCost) * 100

  const formatted = {
    pagesPerMonth: Math.round(pagesPerMonth).toLocaleString(),
    manualSpend: manualSpend.toLocaleString(undefined, { style: "currency", currency: "USD" }),
    ocrSpend: ocrSpend.toLocaleString(undefined, { style: "currency", currency: "USD" }),
    monthlySavings: monthlySavings.toLocaleString(undefined, { style: "currency", currency: "USD" }),
    roiSixMonths: `${roiSixMonths >= 0 ? "+" : ""}${roiSixMonths.toFixed(1)}%`,
  }

  const handleNumberInput = (setter: (value: number) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (!Number.isNaN(value)) {
      setter(value)
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          <Card className="border-gray-200 p-6 shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Calculator className="h-6 w-6 text-indigo-600" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{t("roi.title")}</h2>
                <p className="mt-1 text-sm text-gray-600">{t("roi.subtitle")}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="documents">{t("roi.inputs.documentsPerMonth")}</Label>
                  <Input
                    id="documents"
                    type="number"
                    min={0}
                    value={documentsPerMonth}
                    onChange={handleNumberInput(setDocumentsPerMonth)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pages">{t("roi.inputs.pagesPerDocument")}</Label>
                  <Input
                    id="pages"
                    type="number"
                    min={1}
                    value={pagesPerDocument}
                    onChange={handleNumberInput(setPagesPerDocument)}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="manualCost">{t("roi.inputs.manualCostPerPage")}</Label>
                  <Input
                    id="manualCost"
                    type="number"
                    min={0}
                    step="0.01"
                    value={manualCostPerPage}
                    onChange={handleNumberInput(setManualCostPerPage)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t("roi.inputs.plan")}</Label>
                  <Select value={plan} onValueChange={(value) => setPlan(value as PlanKey)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {planOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-indigo-100 bg-indigo-50/60 p-6 shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <FileDigit className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">{t("roi.outputs.pagesPerMonth")}</h3>
            </div>

            <div className="grid gap-6">
              <Stat label={t("roi.outputs.pagesPerMonth")} value={formatted.pagesPerMonth} />
              <Stat label={t("roi.outputs.manualSpend")} value={formatted.manualSpend} />
              <Stat label={t("roi.outputs.ocrSpend")} value={formatted.ocrSpend} />
              <Stat label={t("roi.outputs.monthlySavings")} value={formatted.monthlySavings} highlight />
              <Stat label={t("roi.outputs.roiSixMonths")} value={formatted.roiSixMonths} highlight />
            </div>

            <div className="mt-8 space-y-3 rounded-lg border border-indigo-200 bg-white/80 p-4 text-sm text-gray-600">
              <p>{t("roi.assumptionsText")}</p>
              <Link href="/accuracy" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
                {t("roi.assumptionsLink")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <Button variant="link" className="mt-6 gap-2 text-indigo-700" asChild>
              <Link href="#demo">
                <Film className="h-4 w-4" />
                {t("roi.watchDemo")}
              </Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

interface StatProps {
  label: string
  value: string
  highlight?: boolean
}

function Stat({ label, value, highlight = false }: StatProps) {
  return (
    <div className="rounded-lg border border-indigo-100 bg-white/90 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-indigo-500">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${highlight ? "text-indigo-700" : "text-gray-900"}`}>{value}</p>
    </div>
  )
}
