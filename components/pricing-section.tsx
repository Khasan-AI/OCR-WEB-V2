"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const starterFeatureKeys = ["pages", "accuracy", "api", "analytics"] as const
const professionalFeatureKeys = ["pages", "accuracy", "priority", "analytics", "training", "sla"] as const
const enterpriseFeatureKeys = ["unlimited", "deployment", "tuning", "priority", "security", "integrations", "training"] as const

export function PricingSection() {
  const { t } = useLanguage()

  const pricingTiers = [
    {
      key: "starter" as const,
      popular: false,
      featureKeys: starterFeatureKeys,
    },
    {
      key: "professional" as const,
      popular: true,
      featureKeys: professionalFeatureKeys,
    },
    {
      key: "enterprise" as const,
      popular: false,
      featureKeys: enterpriseFeatureKeys,
    },
  ]

  return (
    <section id="pricing" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("pricing.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.key} tierKey={tier.key} popular={tier.popular} featureKeys={tier.featureKeys} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-600">{t("pricing.disclaimer")}</p>
      </div>
    </section>
  )
}

interface PricingCardProps {
  tierKey: "starter" | "professional" | "enterprise"
  popular: boolean
  featureKeys: readonly string[]
}

function PricingCard({ tierKey, popular, featureKeys }: PricingCardProps) {
  const { t } = useLanguage()

  const name = t(`pricing.${tierKey}.name`)
  const description = t(`pricing.${tierKey}.description`)
  const cta = t(`pricing.${tierKey}.cta`)
  const unit = t(`pricing.${tierKey}.unit`)
  const features = featureKeys.map((featureKey) => t(`pricing.${tierKey}.features.${featureKey}`))

  return (
    <Card
      className={`flex h-full flex-col justify-between border-gray-200 bg-white transition-all duration-300 ${
        popular ? "ring-2 ring-indigo-600" : "hover:shadow-lg"
      }`}
    > 
      <CardHeader className="pb-6 text-center">
        {popular && <Badge className="mx-auto mb-4 w-fit bg-indigo-600 text-white">{t("pricing.popular")}</Badge>}
        <CardTitle className="text-2xl font-heading font-bold text-gray-900">{name}</CardTitle>
        <div className="mt-2 text-sm font-medium uppercase tracking-wide text-indigo-600">{unit}</div>
        <CardDescription className="mt-3 text-gray-600">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between space-y-6">
        <ul className="space-y-3 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-indigo-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full ${
            popular ? "bg-indigo-600 text-white hover:bg-indigo-700" : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
