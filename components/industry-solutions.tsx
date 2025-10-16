"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, HeartPulse, Truck, Building } from "lucide-react"

const INDUSTRY_CONFIG = {
  financial: {
    icon: CreditCard,
    color: "from-blue-500 to-indigo-600",
  },
  healthcare: {
    icon: HeartPulse,
    color: "from-rose-500 to-orange-500",
  },
  logistics: {
    icon: Truck,
    color: "from-cyan-500 to-blue-600",
  },
  publicSector: {
    icon: Building,
    color: "from-emerald-500 to-teal-600",
  },
} as const

const INDUSTRY_KEYS = Object.keys(INDUSTRY_CONFIG) as Array<keyof typeof INDUSTRY_CONFIG>

export function IndustrySolutions() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("industries.title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("industries.subtitle")}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {INDUSTRY_KEYS.map((key, index) => {
            const Icon = INDUSTRY_CONFIG[key].icon
            const gradient = INDUSTRY_CONFIG[key].color

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${gradient}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {t(`industries.items.${key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-600">{t(`industries.items.${key}.benchmark`)}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900">Top documents</p>
                      <Badge className="mt-2 bg-indigo-50 text-indigo-600">
                        {t(`industries.items.${key}.docs`)}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Extract</p>
                      <p>{t(`industries.items.${key}.fields`)}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Compliance</p>
                      <p>{t(`industries.items.${key}.compliance`)}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Snippet</p>
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs text-emerald-100">
                        {t(`industries.items.${key}.snippet`)}
                      </pre>
                    </div>
                    <Link
                      href={`/docs#${key}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      {t("industries.viewDocs")}
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
