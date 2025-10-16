"use client"

import { useLanguage } from "@/contexts/language-context"

export function StatusPageContent() {
  const { t } = useLanguage()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{t("statusPage.title")}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{t("statusPage.subtitle")}</p>
      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm text-gray-600">{t("statusPage.description")}</p>
      </div>
    </div>
  )
}
