"use client"

import type React from "react"
import { ShieldCheck, Lock, Server, ListChecks, FileText, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const icons = {
  encryption: Lock,
  compliance: ShieldCheck,
  deployment: Server,
  operations: ListChecks,
}

export function SecurityPage() {
  const { t } = useLanguage()

  const encryptionItems = [
    t("securityPage.encryptionItems.atRest"),
    t("securityPage.encryptionItems.inTransit"),
    t("securityPage.encryptionItems.kms"),
  ]

  const complianceItems = [
    t("securityPage.complianceItems.soc2"),
    t("securityPage.complianceItems.gdpr"),
    t("securityPage.complianceItems.hipaa"),
  ]

  const deploymentItems = [
    t("securityPage.deploymentItems.saas"),
    t("securityPage.deploymentItems.onPrem"),
    t("securityPage.deploymentItems.hybrid"),
  ]

  const operationsItems = [
    t("securityPage.operationsItems.access"),
    t("securityPage.operationsItems.logging"),
    t("securityPage.operationsItems.retention"),
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl">
            <h1 className="text-4xl font-bold md:text-5xl">{t("securityPage.title")}</h1>
            <p className="mt-4 text-xl text-muted-foreground">{t("securityPage.subtitle")}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <SecurityCard
              icon={icons.encryption}
              title={t("securityPage.encryptionTitle")}
              items={encryptionItems}
            />
            <SecurityCard
              icon={icons.compliance}
              title={t("securityPage.complianceTitle")}
              items={complianceItems}
            />
            <SecurityCard
              icon={icons.deployment}
              title={t("securityPage.deploymentTitle")}
              items={deploymentItems}
            />
            <SecurityCard
              icon={icons.operations}
              title={t("securityPage.operationsTitle")}
              items={operationsItems}
            />
          </div>

          <Card className="mt-8 border-dashed border-primary/40 bg-primary/5 p-8">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">{t("securityPage.resourcesTitle")}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{t("securityPage.resourcesDescription")}</p>
          </Card>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">{t("securityPage.contactPrompt")}</p>
            <a
              href={`mailto:${t("securityPage.contactEmail")}`}
              className="mt-3 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
            >
              <Mail className="h-5 w-5" />
              {t("securityPage.contactCta")}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

interface SecurityCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  items: string[]
}

function SecurityCard({ icon: Icon, title, items }: SecurityCardProps) {
  return (
    <Card className="p-8">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
