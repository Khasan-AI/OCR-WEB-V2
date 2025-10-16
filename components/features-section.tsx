"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Shield, Globe, Settings, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: t("aiPoweredRecognition"),
      description: t("aiPoweredRecognitionDesc"),
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-purple-100",
    },
    {
      icon: Zap,
      title: t("lightningFastProcessing"),
      description: t("lightningFastProcessingDesc"),
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-yellow-100 to-orange-100",
    },
    {
      icon: Shield,
      title: t("enterpriseSecurity"),
      description: t("enterpriseSecurityDesc"),
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      cta: {
        label: t("enterpriseSecurityCta"),
        href: "/security",
      },
    },
    {
      icon: Globe,
      title: t("multiLanguageSupport"),
      description: t("multiLanguageSupportDesc"),
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      iconBg: "bg-gradient-to-br from-indigo-100 to-blue-100",
    },
    {
      icon: Settings,
      title: t("customFineTuning"),
      description: t("customFineTuningDesc"),
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      icon: BarChart3,
      title: t("advancedAnalytics"),
      description: t("advancedAnalyticsDesc"),
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-gradient-to-br from-cyan-100 to-blue-100",
    },
  ]

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400/10 to-blue-400/10 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl animate-slide-up">
            {t("powerfulFeaturesTitle")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            {t("powerfulFeaturesSubtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} border-white/50 hover:shadow-2xl transition-all duration-500 hover-lift hover:border-white/80 backdrop-blur-sm animate-scale-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className={`p-3 rounded-xl ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon
                        className={`h-6 w-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <CardTitle className="text-lg font-heading font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
                {feature.cta && (
                  <Link
                    href={feature.cta.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    {feature.cta.label}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
