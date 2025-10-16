"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, ArrowRight, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function DeploymentOptions() {
  const { t } = useLanguage()

  const saasFeatures = [
    t("deployment.saas.uptime"),
    t("deployment.saas.scaling"),
    t("deployment.saas.pricing"),
    t("deployment.saas.monitoring"),
  ];

  const onPremFeatures = [
    t("deployment.onPrem.sovereignty"),
    t("deployment.onPrem.custom"),
    t("deployment.onPrem.support"),
    t("deployment.onPrem.airgap"),
  ];
  return (
    <section
      id="deployment"
      className="py-16 sm:py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-emerald-400/5 to-blue-400/5 animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl animate-slide-up">
            {t("deployment.title")} <br/><span className="gradient-text">{t("deployment.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            {t("deployment.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover-lift hover:border-blue-300/70 backdrop-blur-sm animate-slide-in-left group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="text-center relative z-10">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full gradient-bg mb-4 group-hover:scale-110 transition-transform duration-300 glow-effect">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-heading font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {t("deployment.saas.title")}
              </CardTitle>
              <Badge className="w-fit mx-auto mt-2 gradient-bg-alt text-white border-0 animate-pulse-slow">
                <Star className="w-3 h-3 mr-1" />
                {/* {t("deployment.saas.badge")} */}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {t("deployment.saas.description")}
              </CardDescription>

              <div className="space-y-3">
                {saasFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="w-full gradient-bg hover:shadow-2xl text-white transition-all duration-300 hover:scale-105 glow-effect group/btn">
                {t("deployment.saas.button")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white via-gray-50/50 to-slate-50/50 border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover-lift hover:border-gray-300/70 backdrop-blur-sm animate-slide-in-right group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-slate-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="text-center relative z-10">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-gray-100 to-slate-200 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Server className="h-8 w-8 text-gray-700" />
              </div>
              <CardTitle className="text-2xl font-heading font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                {t("deployment.onPrem.title")}
              </CardTitle>
              <Badge
                className="w-fit mx-auto mt-2 border-2 border-gray-300 text-gray-700 bg-white/80 animate-pulse-slow"
              >
                <Star className="w-3 h-3 mr-1" />
                {/* {t("deployment.onPrem.badge")} */}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <CardDescription className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {t("deployment.onPrem.description")}
              </CardDescription>

              <div className="space-y-3">
                {onPremFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-white/80 transition-all duration-300 hover:scale-105 hover:border-gray-400 group/btn"
              >
                {t("deployment.onPrem.button")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
