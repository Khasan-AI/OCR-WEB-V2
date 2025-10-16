"use client"

"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const caseKeys = ["financial", "healthcare", "logistics"] as const

export function CaseStudies() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("cases.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{t("cases.subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseKeys.map((key) => (
            <CaseStudyCard key={key} caseKey={key} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface CaseStudyCardProps {
  caseKey: (typeof caseKeys)[number]
}

function CaseStudyCard({ caseKey }: CaseStudyCardProps) {
  const { t } = useLanguage()

  const metrics = [
    {
      label: t("cases.metrics.accuracy"),
      value: t(`cases.${caseKey}.metrics.accuracy`),
    },
    {
      label: t("cases.metrics.speed"),
      value: t(`cases.${caseKey}.metrics.speed`),
    },
    {
      label: t("cases.metrics.cost"),
      value: t(`cases.${caseKey}.metrics.cost`),
    },
  ]

  return (
    <Card className="flex h-full flex-col justify-between border-gray-200 p-8 shadow-sm transition hover:shadow-lg">
      <div className="space-y-6">
        <div>
          <Badge variant="outline" className="text-xs uppercase text-indigo-600">
            {t(`cases.${caseKey}.industry`)}
          </Badge>
          <h3 className="mt-3 text-xl font-semibold text-gray-900">{t(`cases.${caseKey}.company`)}</h3>
          <p className="mt-2 text-sm text-gray-600">{t(`cases.${caseKey}.challenge`)}</p>
        </div>

        <figure className="rounded-lg border border-indigo-100 bg-indigo-50/70 p-4">
          <Quote className="mb-3 h-5 w-5 text-indigo-500" />
          <blockquote className="text-sm text-gray-700">“{t(`cases.${caseKey}.quote`)}”</blockquote>
        </figure>

        <div>
          <p className="text-sm font-semibold text-gray-900">{t("cases.keyResults")}</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            {metrics.map((metric) => (
              <li key={metric.label} className="flex items-center justify-between rounded-md border border-gray-100 px-3 py-2">
                <span className="font-medium text-gray-600">{metric.label}</span>
                <span className="font-semibold text-indigo-600">{metric.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm font-medium text-gray-800">{t(`cases.${caseKey}.result`)}</p>
      </div>

      {/* <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        {t("cases.readCaseStudy")}
        <ArrowUpRight className="h-4 w-4" />
      </Link> */}
    </Card>
  )
}
