"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UploadCloud, ShieldCheck, Clock, FileJson } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type DemoSource = "id" | "invoice" | "form" | "upload"

interface DemoResult {
  json: Record<string, any>
  fields: Array<{ name: string; value: string; confidence: number }>
}

const SAMPLE_RESULTS: Record<Exclude<DemoSource, "upload">, DemoResult> = {
  id: {
    json: {
      document_type: "government_id",
      fields: {
        full_name: "Maria Novak",
        id_number: "CZ894512",
        expiry_date: "2027-04-18",
        issuing_country: "CZ",
      },
      metadata: {
        model_version: "2025.09",
        processing_time_ms: 94,
      },
    },
    fields: [
      { name: "full_name", value: "Maria Novak", confidence: 0.998 },
      { name: "id_number", value: "CZ894512", confidence: 0.996 },
      { name: "expiry_date", value: "2027-04-18", confidence: 0.992 },
      { name: "issuing_country", value: "CZ", confidence: 0.985 },
    ],
  },
  invoice: {
    json: {
      document_type: "invoice",
      fields: {
        invoice_number: "INV-2045",
        invoice_date: "2024-08-11",
        supplier_name: "Optima Supplies GmbH",
        total_due: {
          amount: "3,842.10",
          currency: "EUR",
        },
        payment_terms: "Net 30",
      },
      metadata: {
        model_version: "2025.09",
        processing_time_ms: 108,
      },
    },
    fields: [
      { name: "invoice_number", value: "INV-2045", confidence: 0.993 },
      { name: "invoice_date", value: "2024-08-11", confidence: 0.987 },
      { name: "supplier_name", value: "Optima Supplies GmbH", confidence: 0.981 },
      { name: "total_due", value: "3,842.10 EUR", confidence: 0.978 },
    ],
  },
  form: {
    json: {
      document_type: "employment_form",
      fields: {
        applicant_name: "Jamal Rivers",
        position: "Senior Risk Analyst",
        signature_verified: true,
        submitted_at: "2025-01-06T10:41:00Z",
      },
      metadata: {
        model_version: "2025.09",
        processing_time_ms: 87,
      },
    },
    fields: [
      { name: "applicant_name", value: "Jamal Rivers", confidence: 0.991 },
      { name: "position", value: "Senior Risk Analyst", confidence: 0.984 },
      { name: "signature_verified", value: "true", confidence: 0.976 },
      { name: "submitted_at", value: "2025-01-06T10:41:00Z", confidence: 0.969 },
    ],
  },
}

export function InteractiveDemo() {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [status, setStatus] = useState<DemoSource>("id")
  const [result, setResult] = useState<DemoResult>(SAMPLE_RESULTS.id)
  const [processing, setProcessing] = useState(false)
  const [limitExceeded, setLimitExceeded] = useState(false)
  const [requestHistory, setRequestHistory] = useState<number[]>([])

  useEffect(() => {
    setResult(SAMPLE_RESULTS.id)
  }, [])

  const sampleButtons = useMemo(
    () => [
      { key: "id", label: t("interactiveDemo.samples.id") },
      { key: "invoice", label: t("interactiveDemo.samples.invoice") },
      { key: "form", label: t("interactiveDemo.samples.form") },
    ],
    [t]
  ) as Array<{ key: Exclude<DemoSource, "upload">; label: string }>

  const handleProcess = (source: DemoSource, payload?: DemoResult) => {
    const now = Date.now()
    const recent = requestHistory.filter((timestamp) => now - timestamp < 60_000)

    if (recent.length >= 5) {
      setLimitExceeded(true)
      setProcessing(false)
      setStatus(source)
      setRequestHistory([...recent, now])
      return
    }

    setLimitExceeded(false)
    setProcessing(true)
    setStatus(source)
    setRequestHistory([...recent, now])

    setTimeout(() => {
      if (source === "upload" && payload) {
        setResult(payload)
      } else if (source !== "upload") {
        setResult(SAMPLE_RESULTS[source])
      }
      setProcessing(false)
    }, 600)
  }

  const handleSampleClick = (key: Exclude<DemoSource, "upload">) => {
    handleProcess(key)
  }

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const simulatedResult: DemoResult = {
      json: {
        document_type: "custom_upload",
        file_name: file.name,
        inference_id: `demo-${Math.random().toString(16).slice(2, 8)}`,
        fields: SAMPLE_RESULTS.form.json.fields,
        metadata: {
          model_version: "2025.09",
          processing_time_ms: 112,
        },
      },
      fields: SAMPLE_RESULTS.form.fields,
    }

    handleProcess("upload", simulatedResult)
    event.target.value = ""
  }

  return (
    <Card className="border-slate-200/80 bg-white/90 p-6 shadow-xl backdrop-blur-sm lg:p-8">
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge className="bg-indigo-50 text-indigo-600">{t("interactiveDemo.title")}</Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              <span>P99 &lt;120 ms</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">{t("interactiveDemo.subtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {sampleButtons.map((sample) => (
            <Button
              key={sample.key}
              variant={status === sample.key ? "default" : "outline"}
              onClick={() => handleSampleClick(sample.key)}
              className={`gap-2 ${status === sample.key ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
            >
              <FileJson className="h-4 w-4" />
              {sample.label}
            </Button>
          ))}
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => fileInputRef.current?.click()}
            disabled={processing}
          >
            <UploadCloud className="h-4 w-4" />
            {processing ? t("interactiveDemo.processing") : t("interactiveDemo.uploadCta")}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={handleUpload}
          />
        </div>

        <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50/80 p-4">
          <p className="text-xs text-gray-500">{t("interactiveDemo.dropHint")}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <FileJson className="h-4 w-4 text-indigo-600" />
              <span>{t("interactiveDemo.jsonOutput")}</span>
            </div>
            <pre className="max-h-60 overflow-auto rounded bg-slate-900/95 p-4 text-xs text-emerald-100">
              {JSON.stringify(result.json, null, 2)}
            </pre>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>{t("interactiveDemo.fieldConfidence")}</span>
            </div>
            <ul className="space-y-3">
              {result.fields.map((field) => (
                <li key={field.name} className="flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800">{field.name}</p>
                    <p className="text-xs text-gray-500">{field.value}</p>
                  </div>
                  <span className="font-semibold text-emerald-600">{(field.confidence * 100).toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-blue-100 bg-blue-50/80 p-4 text-xs text-blue-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>{t("interactiveDemo.privacy")}</span>
          </div>
          {limitExceeded && (
            <div className="flex flex-wrap items-center gap-2 rounded-md border border-amber-200 bg-amber-50/90 px-3 py-2 text-amber-700">
              <span>{t("interactiveDemo.rateLimit")}</span>
              <Link href="/get-started" className="font-semibold underline underline-offset-2">
                {t("interactiveDemo.createKey")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
