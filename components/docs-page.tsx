"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, FileCode, ExternalLink } from "lucide-react"

const SECTION_KEYS = [
  "quickstart",
  "auth",
  "endpoints",
  "webhooks",
  "errors",
  "limits",
  "sdk",
  "examples",
  "changelog",
  "status",
] as const

export function DocsPage() {
  const { t } = useLanguage()

  const sections = useMemo(
    () =>
      SECTION_KEYS.map((key) => ({
        key,
        title: t(`docsPage.sections.${key}.title`),
        body: t(`docsPage.sections.${key}.body`),
      })),
    [t]
  )

  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-600">
              <BookOpen className="h-4 w-4" />
              {t("docsPage.updatedAt")}
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">{t("docsPage.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("docsPage.subtitle")}</p>
            <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <Search className="h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder={t("docsPage.searchPlaceholder")}
                className="border-none px-0 shadow-none focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <Card key={section.key} className="border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                <p className="mt-3 text-sm text-gray-600">{section.body}</p>
                <Button variant="link" className="mt-4 gap-2 text-indigo-600" asChild>
                  <Link href={`/docs#${section.key}`}>
                    <ExternalLink className="h-4 w-4" />
                    {section.title}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <DocResource href="/docs#openapi" label={t("docsPage.resources.openapi")} />
            <DocResource href="/docs#postman" label={t("docsPage.resources.postman")} />
            <DocResource href="/docs#sdk" label={t("docsPage.resources.sdk")} />
          </div>
        </div>
      </main>
    </div>
  )
}

interface DocResourceProps {
  href: string
  label: string
}

function DocResource({ href, label }: DocResourceProps) {
  return (
    <Card className="border-gray-200 p-4 shadow-sm">
      <Link href={href} className="flex items-center justify-between text-sm font-semibold text-indigo-600">
        <span>{label}</span>
        <FileCode className="h-4 w-4" />
      </Link>
    </Card>
  )
}
