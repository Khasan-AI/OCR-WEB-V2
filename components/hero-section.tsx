"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { InteractiveDemo } from "@/components/interactive-demo"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 animate-float" />
        <div
          className="absolute -bottom-32 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse-slow" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="mb-6 flex items-center justify-center lg:justify-start">
              <Link
                href="/accuracy"
                className="flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm transition hover:border-blue-300 hover:text-blue-800"
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span>{t("heroAccuracyStatement")}</span>
                <span className="text-blue-600 underline-offset-4 transition hover:underline">
                  {t("heroAccuracyCta")}
                </span>
              </Link>
            </div>

            <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {t("heroHeadline")}
            </h1>

            <p className="mt-6 text-lg text-gray-600 sm:mt-8 sm:text-xl sm:leading-8">{t("heroSubhead")}</p>

            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gradient-bg group flex items-center justify-center gap-2 rounded-full px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Link href="/get-started">
                    {t("getApiKey")}
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <dl className="mt-8 grid gap-4 text-left text-sm text-gray-600 sm:grid-cols-3 sm:text-sm lg:gap-6">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                <span>{t("heroP99Latency")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
                <span>{t("heroThroughput")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
                <span>{t("heroErrorHandling")}</span>
              </div>
            </dl>
          </div>

          <div id="demo" className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mt-0 lg:max-w-none">
            <InteractiveDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
