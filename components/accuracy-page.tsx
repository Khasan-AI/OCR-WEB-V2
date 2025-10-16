"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Target, BarChart3, FileText, Mail } from "lucide-react"

export function AccuracyPage() {
  const { t } = useLanguage()

  const methodologyPoints = [
    t("accuracyPage.methodologyBullets.precision"),
    t("accuracyPage.methodologyBullets.recall"),
    t("accuracyPage.methodologyBullets.f1Formula"),
  ]

  const matchCriteria = [
    t("accuracyPage.matchCriteriaBullets.text"),
    t("accuracyPage.matchCriteriaBullets.dates"),
    t("accuracyPage.matchCriteriaBullets.numbers"),
    t("accuracyPage.matchCriteriaBullets.bbox"),
  ]

  const datasetKeys = ["id", "invoices", "forms", "statements", "medical"] as const
  const datasetRows = datasetKeys.map((key) => ({
    documentType: t(`accuracyPage.datasetsRows.${key}.documentType`),
    sampleSize: t(`accuracyPage.datasetsRows.${key}.sampleSize`),
    f1Score: t(`accuracyPage.datasetsRows.${key}.f1Score`),
    lastMeasured: t(`accuracyPage.datasetsRows.${key}.lastMeasured`),
  }))

  const notes = [
    t("accuracyPage.notes.confidence"),
    t("accuracyPage.notes.quality"),
    t("accuracyPage.notes.fineTuning"),
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl">
            <h1 className="text-4xl font-bold md:text-5xl">{t("accuracyPage.title")}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{t("accuracyPage.subtitle")}</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <Card className="p-8">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{t("accuracyPage.overviewTitle")}</h2>
                  <p className="mt-2 text-muted-foreground">{t("accuracyPage.overviewDescription")}</p>
                </div>
              </div>

              <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-6">
                <h3 className="text-lg font-semibold">{t("accuracyPage.methodologyTitle")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("accuracyPage.methodologyIntro")}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {methodologyPoints.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{t("accuracyPage.matchCriteriaTitle")}</h2>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {matchCriteria.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="overflow-hidden p-0">
              <div className="border-b px-8 py-6">
                <div className="mb-4 flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">{t("accuracyPage.datasetsTitle")}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{t("accuracyPage.datasetsDescription")}</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-8 py-3">{t("accuracyPage.datasetsColumns.documentType")}</th>
                      <th className="px-8 py-3">{t("accuracyPage.datasetsColumns.sampleSize")}</th>
                      <th className="px-8 py-3">{t("accuracyPage.datasetsColumns.f1Score")}</th>
                      <th className="px-8 py-3">{t("accuracyPage.datasetsColumns.lastMeasured")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datasetRows.map((row, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="px-8 py-4 font-medium text-foreground">{row.documentType}</td>
                        <td className="px-8 py-4 text-muted-foreground">{row.sampleSize}</td>
                        <td className="px-8 py-4 font-semibold text-emerald-600">{row.f1Score}</td>
                        <td className="px-8 py-4 text-muted-foreground">{row.lastMeasured}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold">{t("accuracyPage.notesTitle")}</h2>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                {notes.map((note, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">{t("accuracyPage.contactPrompt")}</p>
              <a
                href={`mailto:${t("accuracyPage.contactEmail")}`}
                className="mt-3 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
              >
                <Mail className="h-5 w-5" />
                {t("accuracyPage.contactCta")}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
