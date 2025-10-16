"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const STEP_KEYS = ["one", "two", "three"] as const

export function GetStartedPageContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <main className="py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{t("getStartedPage.title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("getStartedPage.subtitle")}</p>

          <Card className="mx-auto mt-10 border-gray-200 p-8 text-left shadow-sm">
            <ol className="space-y-6">
              {STEP_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-indigo-600" />
                  <span>{t(`getStartedPage.steps.${key}`)}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/docs"
              className="mt-8 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {t("getStartedPage.ctaDocs")}
            </Link>
          </Card>
        </div>
      </main>
    </div>
  )
}
