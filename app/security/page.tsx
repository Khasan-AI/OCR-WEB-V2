import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SecurityPage } from "@/components/security-page"

export const metadata: Metadata = {
  title: "Security & compliance · OCR.AI",
  description:
    "Learn how OCR.AI protects your data with AES-256 encryption, SOC 2 Type II compliance, and on-premises deployment options.",
}

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SecurityPage />
      <Footer />
    </div>
  )
}
