"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Code, ServerCog } from "lucide-react"

const SPEC_KEYS = ["latency", "throughput", "retries", "formats"] as const
const LANGUAGE_TABS = ["curl", "javascript", "python"] as const

export function TechnicalSpecs() {
  const { t } = useLanguage()

  return (
    <section id="docs" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("technical.title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("technical.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Card className="border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{t("technical.quickstart.title")}</h3>
                <p className="text-sm text-gray-600">{t("technical.quickstart.description")}</p>
              </div>
            </div>

            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {LANGUAGE_TABS.map((lang) => (
                  <TabsTrigger key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </TabsTrigger>
                ))}
              </TabsList>
              {LANGUAGE_TABS.map((lang) => (
                <TabsContent key={lang} value={lang} className="mt-4">
                  <pre className="max-h-72 overflow-auto rounded-lg bg-slate-900 p-4 text-left text-xs text-emerald-100">
                    {t(`technical.quickstart.${lang}`)}
                  </pre>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-700">
                <Link href="/docs">{t("technical.quickstart.docsCta")}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs#openapi">{t("technical.quickstart.openapi")}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs#postman">{t("technical.quickstart.postman")}</Link>
              </Button>
            </div>
          </Card>

          <Card className="border-gray-200 bg-white p-6 shadow-md sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ServerCog className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{t("technical.specs.title")}</h3>
                <p className="text-sm text-gray-600">{t("technical.specs.subtitle")}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {SPEC_KEYS.map((key) => (
                <div key={key} className="rounded-lg border border-indigo-100 bg-indigo-50/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-indigo-500">
                    {t(`technical.specs.items.${key}.label`)}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-indigo-700">
                    {t(`technical.specs.items.${key}.value`)}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{t(`technical.specs.items.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
